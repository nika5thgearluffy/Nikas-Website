"use strict";

const resultLimit = 7;

const slugify = str => {
  const RE = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g;
  const RE2 = /&[^;]+;/g;
  const REPLACEMENT = '-';
  const WHITESPACE = /\s/g;

  return str
    .trim()
	.replace(RE2, '')
    .replace(RE, '')
    .replace(WHITESPACE, REPLACEMENT)
    .toLowerCase()
}

const getUrlByPath = (sourcePath, path) => {
  // Ensure path always starts with slash
  path = path.replace(/^\/?/, '/')

  // Add .md suffix
  if (!/\.md$/.test(path)) {
    path = /\/$/.test(path) ? `${path}README.md` : `${path}.md`
  }
  
  sourcePath = sourcePath || '.'

  // Remove trailing slash in `sourcePath`
  // Since `path` always starts with slash
  sourcePath = sourcePath.replace(/\/$/, '')

  const result = sourcePath + path

  return result.replace(/^\.\//, '')
}

const markdownToHeadings = (content, link, title) =>
{
	let firstThing = true;
	let heading = {link: link, name: title, body: title + '\n'};
	const headings = [heading];
	const lowerTitle = title.toLowerCase();
	
	const renderer = {
		code: (code, infostring, escaped) =>
		{
			if (heading !== null)
			{
				heading.body += code + '\n';
			}
			firstThing = false;
			return ''
		},
		blockquote: (quote) =>
		{
			if (heading !== null)
			{
				heading.quote += text + '\n';
			}
			firstThing = false;
			return ''
		},
		html: (html) => '',
		heading: (text, level, raw, slugger) =>
		{
			// Ignore top of file heading
			if (!firstThing)
			{
				let headingTitle = text
				if ((headingTitle.toLowerCase() != lowerTitle) && (headingTitle.toLowerCase() + "s" != lowerTitle))
				{
					headingTitle = title + " | " + headingTitle
				}
				heading = {link: link + "#" + slugger.slug(slugify(text)), name: headingTitle, body: text + '\n'};
				headings.push(heading)
			}
			firstThing = false;
			return '';
		},
		hr: () => '',
		list: (body, ordered, start) => '',
		listitem: (text, task, checked) =>
		{
			if (heading !== null)
			{
				heading.body += text + '\n';
			}
			firstThing = false;
			return ''
		},
		checkbox: (checked) => '',
		paragraph: (text) =>
		{
			if (heading !== null)
			{
				heading.body += text + '\n';
			}
			firstThing = false;
			return ''
		},
		table: (header, body) => '',
		tablerow: (content) => '',
		tablecell: (content, flags) => '',
		// Inline render methods, just pass through unformatted
		strong: (text) => text,
		em: (text) => text,
		codespan: (code) => code,
		br: () => '\n',
		del: (text) => text,
		link: (href, title, text) => text,
		image: (href, title, text) => text,
		text: (text) => text,
	}
	
	// Process markdown
	marked.parse(content, {
		renderer: renderer
	});
	
	// Make bodies lowercase
	for (const entry of headings)
	{
		entry.body = entry.body.toLowerCase();
	}
	
	return headings
}

const searchExt = (function()
{

let cachedHeadings = null;
async function getHeadings(api)
{
	if (cachedHeadings === null)
	{
		const links = api.store.getters.sidebarLinks;
		
		// Get URLs for sidebar links
		const urls = links.map(entry => ({
			url: getUrlByPath(api.store.getters.config.sourcePath, entry.link),
			entry: entry
			}));
		
		// Get pages for sidebar links
		const pages = urls.map(
			obj => fetch(obj.url, api.store.getters.config.fetchOptions)
				.then(res => res.text())
				.then(text => (markdownToHeadings(text, obj.entry.link, obj.entry.title)))
				);
		
		// Await retrieval of all heading data
		cachedHeadings = [].concat.apply([], await Promise.all(pages));
	}
	return cachedHeadings;
}

async function getExtraResults(api, keyword, maxResults, oldResults)
{
	// Old links
	const oldLinks = new Map(oldResults.map((entry) => [entry.link, true]))
	
	// Get heading data to search
	const headings = await getHeadings(api);
	
	// Output array
	const results = [];
	
	// 
	for (const entry of headings)
	{
		const count = entry.body.split(keyword).length - 1
		if ((count > 0) && !oldLinks.has(entry.link))
		{
			results.push({
				link: entry.link,
				title: entry.name,
				description: entry.link,
				priority: (1.0 / (count / entry.body.length))
			});
		}
	}
	
	// Sort results matches
	results.sort((first, second) => first.priority - second.priority);
	
	// Limit results length
	if (results.length > maxResults)
	{
		results.length = maxResults
	}
	
	return results;
}

async function searchHandler(api, keyword)
{
	// Trim input and force to lowercase
	keyword = keyword.trim().toLowerCase();
		
	// Special case, return no results if no keyword
	if (keyword.length == 0)
	{
		return [{title: 'No Results', link: ''}]
	}
	
	// Get list of links
	const links = api.store.getters.sidebarLinks;
	
	// Get initial results based on matching titles in the sidebar
	let results = links.filter(entry => entry.title.toLowerCase().includes(keyword));
	
	// Process results
	results = results.map(entry => ({
		title: entry.title,
		link: entry.link,
		description: entry.link,
		// Prefer matches which start with the keyword
		priority: (
			entry.title.toLowerCase().startsWith(keyword) ? -10 : 0
			)
		}));
	
	// Sort preferred matches
	results.sort((first, second) => first.priority - second.priority);
	
	// Limit result count
	if (results.length > resultLimit)
	{
		results.length = resultLimit
	}
	
	// Get extra results
	if (results.length < resultLimit)
	{
		results = results.concat(await getExtraResults(api, keyword, resultLimit - results.length, results));
	}
	
	// Special case: return "no results" if there are no results
	if (results.length == 0)
	{
		return [{title: 'No Results', link: ''}]
	}
	
	return results;
}

return {
	name: 'searchExt',
	extend(api) {
		api.enableSearch({handler: function (keyword) { return searchHandler(api, keyword); }})
	}
}

})();

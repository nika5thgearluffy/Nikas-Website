"use strict";

const randomPageExt = (function() {
	return {
		name: 'randomPageExt',
		extend(api) {
			api.processMarkdown(text => {
				let out = [];
				let lines = text.split('\n');
				for (const lineIdx in lines) {
					let line = lines[lineIdx].replace(/[\r\n]+$/, '');
					let startLine = line.replace(/^[ \t]+/, '');
					let startIdx = startLine.indexOf('{RANDOM}');
					const links = api.store.getters.sidebarLinks;
					
					var item = links[Math.floor(Math.random()*links.length)];
					if (startIdx >= 0)
					{

						var tableOut = item.link
						
						line = startLine.substring(0, startIdx) + tableOut + startLine.substring(startLine.lastIndexOf('}')+1, startLine.length);
					}
					out.push(line);
				}
				
				return out.join('\n');
			});
		}
	}

})();

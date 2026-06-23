"use strict";

const customTablesExt = (function() {
	const tableTemplate = `
<table class="fieldtable">
<thead>
<tr>{COLS}</tr>
</thead>
<tbody>{ROWS}</tbody>
<v-style>
.fieldtable td>p, .fieldtable th>p { margin: 0; }
</v-style>
</table>
`

	return {
		name: 'customTablesExt',
		extend(api) {
			api.processMarkdown(text => {
				let tableRows = null;
				let out = [];
				let lines = text.split('\n');
				for (const lineIdx in lines) {
					let line = lines[lineIdx].replace(/[\r\n]+$/, '');
					let startLine = line.replace(/^[ \t]+/, '');
					if (startLine.indexOf('{STARTTABLE}') === 0)
					{
						tableRows = [[[]]];
					}
					else if (tableRows === null)
					{
						out.push(line);
					}
					else if (startLine.indexOf('{ENDTABLE}') === 0)
					{
						let tableOut = tableTemplate;
						
						let headLen = tableRows[0].length
						let tableColsOut = [];
						for (const idx in tableRows[0]) {
							tableColsOut.push('<th>\n\n' + tableRows[0][idx].join('\n') + '\n\n</th>');
						}
						tableOut = tableOut.replace('\{COLS\}', tableColsOut.join(''));
						
						let tableRowsOut = [];
						for (let idx = 1; idx < tableRows.length; idx++) {
							let tmpOut = [];
							let rowLen = tableRows[idx].length;
							for (const colIdx in tableRows[idx]) {
								let cellAttribs = '';
								// If final column, add colspan to end
								if (((colIdx + 1) == rowLen) && (headLen > rowLen))
								{
									cellAttribs = ' colspan=' + (headLen - rowLen + 1).toString();
								}
								
								tmpOut.push('<td' + cellAttribs + '>\n\n' + tableRows[idx][colIdx].join('\n') + '\n\n</td>');
							}
							tableRowsOut.push('<tr>' + tmpOut.join('') + '</tr>');
						}
						tableOut = tableOut.replace('\{ROWS\}', tableRowsOut.join(''));
						
						tableRows = null;
						out.push(tableOut);
					}
					else if (startLine.indexOf('====') === 0)
					{
						tableRows.push([[]]);
					}
					else
					{
						if (startLine.indexOf('{') === 0)
						{
							let innerIdx = line.indexOf('}');
							if (innerIdx >= 0)
							{
								if (tableRows[tableRows.length-1][0].length > 0)
								{
									tableRows[tableRows.length-1].push([]);
								}
								if (line[innerIdx+1] == ' ')
								{
									innerIdx++;
								}
								line = line.substring(innerIdx+1);
							}
						}
						
						let row = tableRows[tableRows.length-1];
						row[row.length-1].push(line)
					}
				}
				
				return out.join('\n');
			});
		}
	}

})();

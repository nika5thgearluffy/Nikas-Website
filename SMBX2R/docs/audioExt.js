"use strict";

const audioExt = (function() {
const tableTemplate = `
<span>
	<audio hidden>
		<source type="audio/ogg" src="{FILENAME}"></source>
		<p>Not supported.</p>
	</audio>
	<a style="text-decoration: none; cursor: pointer" title="Play/Pause" onclick="{
		const audioElem = this.previousElementSibling;
		if (audioElem.paused) {
			audioElem.play()
		} else {
			audioElem.pause()
			audioElem.currentTime = 0;
		}
	}">
	&#9654;
	</a>
</span>
`

	return {
		name: 'audioExt',
		extend(api) {
			api.processMarkdown(text => {
				let out = [];
				let lines = text.split('\n');
				for (const lineIdx in lines) {
					let line = lines[lineIdx].replace(/[\r\n]+$/, '');
					let startLine = line.replace(/^[ \t]+/, '');
					let startIdx = startLine.indexOf('{AUDIO');
					if (startIdx >= 0)
					{
						let tableOut = tableTemplate;
						
						let idx = startLine.lastIndexOf('=');

						let name = startLine.substring(idx + 1);

						let ending = name.lastIndexOf('}');

						name = name.substring(startIdx, ending);
						
						tableOut = tableOut.replace('\{FILENAME\}', name);
						
						line = startLine.substring(0, startIdx) + tableOut + startLine.substring(startLine.lastIndexOf('}')+1, startLine.length);
					}
					out.push(line);
				}
				
				return out.join('\n');
			});
		}
	}

})();

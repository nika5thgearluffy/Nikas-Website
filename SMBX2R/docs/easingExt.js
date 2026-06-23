"use strict";

const easeNames = [];
easeNames["linear"] = "transition-timing-function: cubic-bezier(0.250, 0.250, 0.750, 0.750)";
easeNames["ease"] = "transition-timing-function: cubic-bezier(0.250, 0.100, 0.250, 1.000)";
easeNames["ease-in"] = "transition-timing-function: cubic-bezier(0.420, 0.000, 1.000, 1.000)";
easeNames["ease-out"] = "transition-timing-function: cubic-bezier(0.000, 0.000, 0.580, 1.000)";
easeNames["ease-in-out"] = "transition-timing-function: cubic-bezier(0.420, 0.000, 0.580, 1.000)";

easeNames["ease-in-quad"] = "transition-timing-function: cubic-bezier(0.550, 0.085, 0.680, 0.530)";
easeNames["ease-out-quad"] = "transition-timing-function: cubic-bezier(0.250, 0.460, 0.450, 0.940)";
easeNames["ease-in-out-quad"] = "transition-timing-function: cubic-bezier(0.455, 0.030, 0.515, 0.955)";

easeNames["ease-in-cubic"] = "transition-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190)";
easeNames["ease-out-cubic"] = "transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000)";
easeNames["ease-in-out-cubic"] = "transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1.000)";

easeNames["ease-in-quart"] = "transition-timing-function: cubic-bezier(0.895, 0.030, 0.685, 0.220)";
easeNames["ease-out-quart"] = "transition-timing-function: cubic-bezier(0.165, 0.840, 0.440, 1.000)";
easeNames["ease-in-out-quart"] = "transition-timing-function: cubic-bezier(0.770, 0.000, 0.175, 1.000)";

easeNames["ease-in-quint"] = "transition-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060)";
easeNames["ease-out-quint"] = "transition-timing-function: cubic-bezier(0.230, 1.000, 0.320, 1.000)";
easeNames["ease-in-out-quint"] = "transition-timing-function: cubic-bezier(0.860, 0.000, 0.070, 1.000)";

easeNames["ease-in-sine"] = "transition-timing-function: cubic-bezier(0.470, 0.000, 0.745, 0.715)";
easeNames["ease-out-sine"] = "transition-timing-function: cubic-bezier(0.390, 0.575, 0.565, 1.000)";
easeNames["ease-in-out-sine"] = "transition-timing-function: cubic-bezier(0.445, 0.050, 0.550, 0.950)";

easeNames["ease-in-expo"] = "transition-timing-function: cubic-bezier(0.950, 0.050, 0.795, 0.035)";
easeNames["ease-out-expo"] = "transition-timing-function: cubic-bezier(0.190, 1.000, 0.220, 1.000)";
easeNames["ease-in-out-expo"] = "transition-timing-function: cubic-bezier(1.000, 0.000, 0.000, 1.000)";

easeNames["ease-in-circ"] = "transition-timing-function: cubic-bezier(0.600, 0.040, 0.980, 0.335)";
easeNames["ease-out-circ"] = "transition-timing-function: cubic-bezier(0.075, 0.820, 0.165, 1.000)";
easeNames["ease-in-out-circ"] = "transition-timing-function: cubic-bezier(0.785, 0.135, 0.150, 0.860)";

easeNames["ease-in-back"] = "transition-timing-function: cubic-bezier(0.600, -0.280, 0.735, 0.045)";
easeNames["ease-out-back"] = "transition-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1.275)";
easeNames["ease-in-out-back"] = "transition-timing-function: cubic-bezier(0.680, -0.550, 0.265, 1.550)";
easeNames["ease-out-in-back"] = "transition-timing-function: cubic-bezier(0.175, 1.275, 0.825, -0.275)";

easeNames["ease-in-bounce"] = "animation-name: easeInBounce";
easeNames["ease-out-bounce"] = "animation-name: easeOutBounce";
easeNames["ease-in-out-bounce"] = "animation-name: easeInOutBounce";
easeNames["ease-out-in-bounce"] = "animation-name: easeOutInBounce";

easeNames["ease-in-elastic"] = "animation-name: easeInElastic";
easeNames["ease-out-elastic"] = "animation-name: easeOutElastic";
easeNames["ease-in-out-elastic"] = "animation-name: easeInOutElastic";
easeNames["ease-out-in-elastic"] = "animation-name: easeOutInElastic";

const easingExt = (function() {
const tableTemplate = `
<span class="easingContainer">
	<div class="easingElement" style="{EQUATION};">
	</div>
</span>
`

	return {
		name: 'easingExt',
		extend(api) {
			api.onContentUpdated(function() {
				document.querySelectorAll('.easingContainer').forEach(e => {
					e.onmouseenter = function() {
						let obj = this.childNodes[0];
						if (obj.style.animationName == "") {
							obj.style.marginLeft = "100%";
						}
					}
					e.onmouseleave = function() {
						let obj = this.childNodes[0];
						obj.style.marginLeft = "0%";
						let animName = obj.style.animationName;
						obj.style.animationName = "";
						if (animName != "") {
							window.requestAnimationFrame(function() {
								obj.style.animationName = animName;
							})
						}
					};
				});
				}
			);
			api.processMarkdown(text => {
				let out = [];
				let lines = text.split('\n');
				for (const lineIdx in lines) {
					let line = lines[lineIdx].replace(/[\r\n]+$/, '');
					let startLine = line.replace(/^[ \t]+/, '');
					let startIdx = startLine.indexOf('{EASE');
					if (startIdx >= 0)
					{
						let tableOut = tableTemplate;
						
						let idx = startLine.lastIndexOf('=');

						let name = startLine.substring(idx + 1);

						let ending = name.lastIndexOf('}');

						name = name.substring(startIdx, ending);
						
						let selectedEaseName = easeNames["linear"];
						if (easeNames[name] != null) {
							selectedEaseName = easeNames[name]
						}
						tableOut = tableOut.replace('\{EQUATION\}', selectedEaseName);
						
						line = startLine.substring(0, startIdx) + tableOut + startLine.substring(startLine.lastIndexOf('}')+1, startLine.length);
					}
					out.push(line);
				}
				
				return out.join('\n');
			});
		}
	}

})();

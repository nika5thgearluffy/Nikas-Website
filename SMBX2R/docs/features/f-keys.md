# F-Key Features

SMBX2 exposes some handy functionality onto the F-Keys which can be used while playing the game or debugging.

All F-key shortcuts can be used while testing in the editor, as well as while playing the game normally.

## F2 - Script Information

F2 showcases info on the current SMBX2 version, as well as a list of active code files and libraries. It is useful for reporting the exact version of the engine used, as well as discovering whether specific pieces of code are or aren't executing.

## F3 - Profiler

F3 is the Profiler hotkey. The profiler provides runtime performance information for your scripts.

![Profiler](/images/features/profiler.png)

While activated, the graph shows per-frame changes in performance usage of lua scripts (blue), rendering code (green), and other sources (usually SMBX internal code or different software). Additionally, the average information for these values, as well as the length of a frame are displayed. Below (in the red section), the total RAM usage is shown, split into Image, Sound and Lua sources.

When F3 is pressed again, the profiler will close and reveal a dialog box detailing the sources of lua overhead collected throughout the active period. The information is sorted to show most expensive scripts first, making it useful for finding bottlenecks in your code's performance.

## F4 - Fullscreen Letterbox Toggle

While playing in fullscreen mode, F4 will toggle between a stretched and letterboxed display.

## F10 - Pause

Freezes the game upon release of the key. The game can be unpaused by pressing F10 again.

## F11 - Gif recording

Upon first press, the gif recorder is activated, recording video until F11 is pressed again. The resulting gif will be placed in the data/gif-recordings folder.

## F12 - Screenshot

Takes a screenshot of the game. The resulting png file will be placed in the data/screenshots folder.
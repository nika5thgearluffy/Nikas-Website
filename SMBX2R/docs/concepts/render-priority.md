# Render Priority

All objects in the game are rendered in a specific order, with elements further in the back (lower indices) appearing behind objects rendered in front.
Various rendering functions expose the possibility to specify at which priority the content should be rendered at.
Level files feature a different priority system to world map files.
Valid render priorities are <b>between -100 and 10</b>.

## SMBX Level render priority

| Value | Description | Examples |
| --- | --- | --- |
| -100 | Level Background | All background2-n files. |
| -95 | Far Background Objects | Water (82, 83) and background wall (75, 79) BGOs. |
| -90 | Sizeable Blocks | All sizeable blocks (block-25 for example). |
| -85 | Background Objects | Default priority for BGOs (bushes, castles, pillars). |
| -80 | Special Background Objects | Locks (98) and Star Locks (160). |
| -75 | Background NPCs | Vines, Piranha Plants, Diggable Sand, Mother Brain, things in Mother Brain Jars. |
| -70 | Warping Player | Priority of the player while interacting with a warp pipe. |
| -65 | Blocks | Basically all blocks that aren't lava. |
| -60 | Background Effects | Door entry BGOs, pressed p-switches... |
| -55 | Low Priority NPCs | Coins, Clown Car, Toothy, Diggable Grass, Airship Rocket, NPCs with forced states 1, 3, or 4, Ludwig Fire... |
| -50 | Ice Block NPCs | Ice blocks that encase frozen NPCs. |
| -45 | Regular NPCs | Default layer for NPCs. |
| -40 | Message Icon | The exclamation point for talking to NPCs. |
| -35 | Mounted Clown Car | The Clown Car and player while the player mounts the clown car. |
| -30 | Held NPCs | NPCs held by players. |
| -25 | Players | Default priority for Players, as well as Yoshis and Boots while riding them. |
| -20 | Foreground Objects | Fence (23, 24, 25), Goal Post (143, 145)... |
| -15 | Foreground NPCs | Glitchy Airship Piece (290). |
| -10 | Foreground Blocks | Lava. |
| -5 | Foreground Effects | Lava splash, player death... |
| 5 | HUD | Default priority for the HUD. |

## SMBX World render priority

Currently there is no world map render priority system exposed. All vanilla elements will render beneath all lua-drawn elements. When drawing to the world map with priority, avoid using negative values to prevent compatibility conflicts in the future.

## Lunalua render priority

Lunalua libraries that draw things insert themselves between the render priorities mentioned above.

| Value | Description |
| --- | --- |
| -100 | Screen effects (wave, smoke) |
| -65 | Screen effects (caustics) |
| -67 | Scuttlebug string |
| -63 | Line guides |
| -60 | Vision cones |
| -55.1 | Keyhole effect (expanding) |
| -25 | Filth NPC |
| -24.9 | Keyhole effect (retracting) |
| -22.5 | Clear pipes |
| -9.9 | Snake Block NPC |
| -5 | Screen effects (smoke), Weather effects (all) |
| -1 | Mario Challenge death marker |
| 0 | Section darkness, handycam, Screen effects (gameboy, dithered gameboy, invert, sepia, grayscale). |
| 1 | Default priority for functions in the Graphics namespace. |
| 2 | Default priority for legacy drawing functions (placeSprite). |
| 3 | Default priority for functions in the Text namespace. |
| 5 | Controller notifications, Mario Challenge UI. |
| 10 | Default achievement popup, editor pause menu, editor console. |
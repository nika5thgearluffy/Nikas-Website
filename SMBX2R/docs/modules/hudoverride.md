# Hudoverride

As a module, hudoverride needs to be loaded in order to be accessible in your level or episode:
```lua
local hudoverride = require("hudoverride")
```

Hudoverride lets you manipulate and override the default HUD for the game. At a base level this is commonly used to move and hide HUD elements, but a more advanced use is to add your own custom elements. 

## Quick Start

The following snippit hides the star counter and renders a new hud element in the same location printing a SaveData variable tracking how many times the player has taken damage.

```lua
local hudoverride = require("hudoverride")

-- Hide the star counter
hudoverride.visible.stars = false

-- Track damage taken
SaveData.damageTaken = SaveData.damageTaken or 0
function onPostPlayerHarm(harmedPlayer)
   SaveData.damageTaken = SaveData.damageTaken + 1
end

-- Print our own hud element
local function drawProgressItem(cameraIndex, priority, cameraIsSplit)
   local value = SaveData.damageTaken
   Text.printWP(value, hudoverride.offsets.stars.x, hudoverride.offsets.stars.y, priority)
end

-- Register our own hud element function
Graphics.addHUDElement(drawProgressItem)
```

## Constants

{STARTTABLE}
   {TYPE} Type
  {FIELD} Constant
   {DESC} Description
====
   {TYPE} [number](/types/number.md)
  {FIELD} ALIGN_LEFT
   {DESC} Left align constant for hud elements (0).
====
   {TYPE} [number](/types/number.md)
  {FIELD} ALIGN_MID
   {DESC} Center align constant for hud elements (0.5).
====
   {TYPE} [number](/types/number.md)
  {FIELD} ALIGN_RIGHT
   {DESC} Right align constant for hud elements (1).
{ENDTABLE}

## Static functions

In addition to these static functions, working with hudoverride also integrates with a lot of hud-based functions from the [Graphics](/reference/graphics.md#static-hud-related-functions) namespace.

The below functions aren't particularly useful to call from your own code, but they are exposed so that user code can override them, effectively replacing the default hud element render function with your own.

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} drawHUDPlayer(

   [number](/types/number.md) playerIndex,

   [number](/types/number.md) priority,

   [Collor](/reference/Color.md) color,

   [Shader](/types/Shader.md) shader,

   [table](/types/table.md) uniforms

   )
    {RET} [nil](/types/nil.md) 
   {DESC} Draws either the first or second player to the overworld hud.
====
   {NAME} drawKey(

   [number](/types/number.md) splitOffset,

   [Camera](/reference/camera.md) thisCamera,

   [Player](/reference/Player.md) thisPlayer,

   [number](/types/number.md) priority

   )
    {RET} [nil](/types/nil.md) 
   {DESC} Renders Link's collected key hud element. Split offset determines horizontal offset when the camera is split.
====
   {NAME} drawBombs(

   [number](/types/number.md) splitOffset,

   [Camera](/reference/camera.md) thisCamera,

   [Player](/reference/Player.md) thisPlayer,

   [number](/types/number.md) priority

   )
    {RET} [nil](/types/nil.md) 
   {DESC} Renders Link's collected bombs hud element. Split offset determines horizontal offset when the camera is split.
====
   {NAME} drawStars(

   [number](/types/number.md) splitOffset,

   [Camera](/reference/camera.md) thisCamera,

   [Player](/reference/Player.md) thisPlayer,

   [number](/types/number.md) priority

   )
    {RET} [nil](/types/nil.md) 
   {DESC} Renders the collected stars hud element. Split offset determines horizontal offset when the camera is split.
====
   {NAME} drawLives(

   [number](/types/number.md) splitOffset,

   [Camera](/reference/camera.md) thisCamera,

   [Player](/reference/Player.md) thisPlayer,

   [number](/types/number.md) priority

   )
    {RET} [nil](/types/nil.md) 
   {DESC} Renders the lives hud element. Split offset determines horizontal offset when the camera is split.
====
   {NAME} drawHUDLives(

   [Player](/reference/Player.md) thisPlayer,

   [number](/types/number.md) priority

   )
    {RET} [nil](/types/nil.md) 
   {DESC} Renders the overworld lives hud element.
====
   {NAME} drawHUDCoins(

   [Player](/reference/Player.md) thisPlayer,

   [number](/types/number.md) priority

   )
    {RET} [nil](/types/nil.md) 
   {DESC} Renders the overworld lives coins element.
====
   {NAME} drawHUDStars(

   [Player](/reference/Player.md) thisPlayer,

   [number](/types/number.md) priority

   )
    {RET} [nil](/types/nil.md) 
   {DESC} Renders the overworld stars hud element.
====
   {NAME} drawOverworldBox(

   [number](/types/number.md) priority

   )
    {RET} [nil](/types/nil.md) 
   {DESC} Renders the overworld border.
====
   {NAME} countItemboxes(

   [number](/types/number.md) splitOffset,

   [number](/types/number.md) cameraIndex,

   [bool](/types/bool.md) isMultiplayer,

   [bool](/types/bool.md) isSplit,

   [number](/types/number.md) priority

   )
    {RET} [nil](/types/nil.md) 
   {DESC} Counts and then invokes drawItembox to render the correct number and graphics of the player itemboxes/hearts display.
====
   {NAME} drawItembox(

   [number](/types/number.md) splitOffset,

   [Camera](/reference/camera.md) thisCamera,

   [number](/types/number.md) playerIndex,

   [Player](/reference/Player.md) thisPlayer,

   [bool](/types/bool.md) isMultiplayer,

   [number](/types/number.md) priority

   )
    {RET} [nil](/types/nil.md) 
   {DESC} Draws the player's itembox or heart display.
====
   {NAME} drawScore(

   [number](/types/number.md) splitOffset,

   [Camera](/reference/camera.md) thisCamera,

   [number](/types/number.md) priority

   )
    {RET} [nil](/types/nil.md) 
   {DESC} Renders the score hud element. Split offset determines horizontal offset when the camera is split.
====
   {NAME} drawCoins(

   [number](/types/number.md) splitOffset,

   [Camera](/reference/camera.md) thisCamera,

   [Player](/reference/Player.md) thisPlayer,

   [number](/types/number.md) priority

   )
    {RET} [nil](/types/nil.md) 
   {DESC} Renders the coins hud element. Split offset determines horizontal offset when the camera is split.
====
   {NAME} drawStarcoins(

   [number](/types/number.md) splitOffset,

   [Camera](/reference/camera.md) thisCamera,

   [Player](/reference/Player.md) thisPlayer,

   [number](/types/number.md) priority

   )
    {RET} [nil](/types/nil.md) 
   {DESC} Renders the star coins hud element. Split offset determines horizontal offset when the camera is split.
====
   {NAME} drawTimer(

   [number](/types/number.md) splitOffset,

   [Camera](/reference/camera.md) thisCamera,

   [Player](/reference/Player.md) thisPlayer,

   [number](/types/number.md) priority

   )
    {RET} [nil](/types/nil.md) 
   {DESC} Renders the level timer hud element. Split offset determines horizontal offset when the camera is split.
{ENDTABLE}

## Static fields

Static fields let you access various properties of the default HUD. Most of these are structured as tables.

{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
   {DESC} Description
====
   {TYPE} [table](/types/table.md)
  {FIELD} visible
   {DESC} Contains the visibility flag for all hud elements. Unfold the table below to see values. 

   <details><summary>Available args</summary>
   
   | Argument | Description |
   | --- | --- |
   | [bool](/types/bool.md) keys | Visibility of hud keys. |
   | [bool](/types/bool.md) itembox | Visibility of hud itembox. |
   | [bool](/types/bool.md) bombs | Visibility of hud bombs. |
   | [bool](/types/bool.md) coins | Visibility of hud coins. |
   | [bool](/types/bool.md) score | Visibility of hud score. |
   | [bool](/types/bool.md) lives | Visibility of hud lives. |
   | [bool](/types/bool.md) stars | Visibility of hud stars. |
   | [bool](/types/bool.md) starcoins | Visibility of hud star coins. |
   | [bool](/types/bool.md) timer | Visibility of hud level timer. |
   | [bool](/types/bool.md) levelname | Visibility of overworld hud level name. |
   | [bool](/types/bool.md) overworldPlayer | Visibility of overworld hud player. |
   
   </details>
====
   {TYPE} [number](/types/number.md)
  {FIELD} priority
   {DESC} Render priority of the hud (default: 4.999999).
====
   {TYPE} [table](/types/table.md)
  {FIELD} offsets
   {DESC} Contains the offsets for all hud elements. Since this table is quite large, its individual values will be below. 
====
   {TYPE} [table](/types/table.md)
  {FIELD} offsets.keys
   {DESC} Keys offsets

   Default values:

   \{x = 64, 	y = 26, align = HUDOverride.ALIGN_LEFT\}
====
   {TYPE} [table](/types/table.md)
  {FIELD} offsets.itembox
   {DESC} Itembox offsets

   Default values:

   \{x = 0, 	y = 16, item = \{x = 28, y = 28, align = HUDOverride.ALIGN_MID\}, align = HUDOverride.ALIGN_MID\}
====
   {TYPE} [table](/types/table.md)
  {FIELD} offsets.hearts
   {DESC} Hearts offsets

   Default values:

   \{x = 5, 	y = 16, align = HUDOverride.ALIGN_MID\}
====
   {TYPE} [table](/types/table.md)
  {FIELD} offsets.score
   {DESC} Score offsets

   Default values:

   \{x = 170, 	y = 47, align = HUDOverride.ALIGN_RIGHT\}
====
   {TYPE} [table](/types/table.md)
  {FIELD} offsets.bombs
   {DESC} Bombs offsets

   Default values:

   \{x = 0, 	y = 52, cross = \{x = 24, y = 1\}, value = \{x = 45, y = 1, align = HUDOverride.ALIGN_LEFT\}, align = HUDOverride.ALIGN_MID\}
====
   {TYPE} [table](/types/table.md)
  {FIELD} offsets.coins
   {DESC} Coins offsets

   Default values:

   \{x = 88, 	y = 26, cross = \{x = 24, y = 1\}, value = \{x = 82, y = 1, align = HUDOverride.ALIGN_RIGHT\}, align = HUDOverride.ALIGN_LEFT\}
====
   {TYPE} [table](/types/table.md)
  {FIELD} offsets.lives
   {DESC} Lives offsets

   Default values:

   \{x = -166, 	y = 26, cross = \{x = 40, y = 1\}, value = \{x = 62, y = 1, align = HUDOverride.ALIGN_LEFT\}, align = HUDOverride.ALIGN_LEFT\}
====
   {TYPE} [table](/types/table.md)
  {FIELD} offsets.stars
   {DESC} Stars offsets

   Default values:

   \{x = -150, 	y = 46, cross = \{x = 24, y = 1\}, value = \{x = 45, y = 1, align = HUDOverride.ALIGN_LEFT\}, align = HUDOverride.ALIGN_LEFT\}
====
   {TYPE} [table](/types/table.md)
  {FIELD} offsets.starcoins
   {DESC} Starcoins offsets

   Default values:

   \{x = -384, y = 27, cross = \{x = 24, y = 0\},	value = \{x = 45, y = 0, align = HUDOverride.ALIGN_LEFT\}, grid = \{x = 0, y = 40, width = 5, height = 3, offset = 0, table = \{\}, align = HUDOverride.ALIGN_LEFT\},	align = HUDOverride.ALIGN_LEFT\}
====
   {TYPE} [table](/types/table.md)
  {FIELD} offsets.timer
   {DESC} Timer offsets

   Default values:

   \{x = 264, y = 25, cross = \{x = 24, y = 2\},	value = \{x = 106, y = 2, align = HUDOverride.ALIGN_RIGHT\}, align = HUDOverride.ALIGN_LEFT\}
====
   {TYPE} [table](/types/table.md)
  {FIELD} overworld.offsets
   {DESC} Contains the offsets for all overworld hud elements. Since this table is quite large, its individual values will be below.
====
   {TYPE} [table](/types/table.md)
  {FIELD} overworld.offsets.lives
   {DESC} Overworld lives offsets.

   Default values:

   \{x = -272, 	y = 110, cross = \{x = 40, y = 2\}, p2Offset = \{x = 48, y = 0\}, value = \{x = 62, y = 2, align = HUDOverride.ALIGN_LEFT\}, align = HUDOverride.ALIGN_LEFT\}
====
   {TYPE} [table](/types/table.md)
  {FIELD} overworld.offsets.coins
   {DESC} Overworld coins offsets.

   Default values:

   \{x = -256, 	y = 88, cross = \{x = 24, y = 2\}, p2Offset = \{x = 48, y = 0\}, value = \{x = 46, y = 2, align = HUDOverride.ALIGN_LEFT\}, align = HUDOverride.ALIGN_LEFT\}
====
   {TYPE} [table](/types/table.md)
  {FIELD} overworld.offsets.stars
   {DESC} Overworld stars offsets.

   Default values:

   \{x = -256, 	y = 66, cross = \{x = 24, y = 2\}, p2Offset = \{x = 48, y = 0\}, value = \{x = 46, y = 2, align = HUDOverride.ALIGN_LEFT\}, align = HUDOverride.ALIGN_LEFT\}
====
   {TYPE} [table](/types/table.md)
  {FIELD} overworld.offsets.levelname
   {DESC} Overworld level name offsets.

   Default values:

   \{x = -156, 	y = 109, p2Offset = \{x = 48, y = 0\}, align = HUDOverride.ALIGN_LEFT\}
====
   {TYPE} [table](/types/table.md)
  {FIELD} overworld.offsets.player
   {DESC} Overworld first player sprite offset.

   Default values:

   \{x = -308, y = 124\}
====
   {TYPE} [table](/types/table.md)
  {FIELD} overworld.offsets.player2
   {DESC} Overworld 2nd player sprite offset.

   Default values:

   \{x = -308+48, y = 124\}
====
   {TYPE} [table](/types/table.md)
  {FIELD} multiplayerOffsets
   {DESC} Horizontal offset for hud elements when in multiplayer.

   Default values:

   \{[Graphics.HUD_NONE] = 0, [Graphics.HUD_ITEMBOX] = 40, [Graphics.HUD_HEARTS] = 57\}
{ENDTABLE}
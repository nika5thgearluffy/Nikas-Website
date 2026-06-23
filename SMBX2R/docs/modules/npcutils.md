# Npcutils

As a module, npcutils needs to be loaded in order to be accessible in your level or episode. The npcutils file is in the scripts/npcs folder, thus, the path needs to be specified as such:
```lua
local npcutils = require("npcs/npcutils")
```

Npcutils includes functions that streamline common actions required by custom NPCs, such as the ability for an NPC to face the closest player, be rendered at a different priority, or be hidden outright.

## Functions

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} hideNPC(

[NPC](/reference/npc.md) npcObject

)
    {RET} [nil](/types/nil.md)
   {DESC} Renders an NPC invisible for this frame. Best used at the end of an NPC's onDraw code.
====
   {NAME} restoreAnimation(

[NPC](/reference/npc.md) npcObject

)
    {RET} [nil](/types/nil.md)
   {DESC} Delays the advance of the NPC's animation by a frame.
====
   {NAME} getNearestPlayer(

[NPC](/reference/npc.md) npcObject

)
    {RET} [Player](/reference/player.md) nearestPlayer
   {DESC} Returns the player that's closest to the center of the passed NPC.
====
   {NAME} faceNearestPlayer(

[NPC](/reference/npc.md) npcObject

)
    {RET} [nil](/types/nil.md)
   {DESC} Set's the NPC's direction value based on the position of the player closest to the NPC's center.
====
   {NAME} getFrameByFramestyle(

[NPC](/reference/npc.md) npcObject,
[named](/types/table.md) args

)
    {RET} [number](/types/number.md) frame
   {DESC} Used for calculating an NPC's frame based on the properties of its current frame cycle.

<details><summary>Args</summary>

| Argument | Description |
| --- | --- |
| [number](/types/number.md) frame | Current frame of the NPC to calculate. Defaults to the NPC's animationFrame field. |
| [number](/types/number.md) direction | Current direction of the NPC to use for calculation. Defaults to vanilla direction. |
| [number](/types/number.md) frames | Total number of frames in the frame loop. Defaults to NPC.config[npc.id].frames. |
| [number](/types/number.md) gap | Number of frames after the frame loop that belong to one direction of the animation. |
| [number](/types/number.md) offset | Number of frames before the frame loop that belong to one direction of the animation. <b>To summarize: offset + frames + gap = total frames per facing direction in the framestyle.</b> |

</details>
   
====
   {NAME} getTotalFramesByFramestyle(

[NPC](/reference/npc.md) npcObject,
[named](/types/table.md) args

)
    {RET} [number](/types/number.md) frames
   {DESC} Returns the total number of animation frames on the NPC based on advanced properties.

<details><summary>Args</summary>

| Argument | Description |
| --- | --- |
| [number](/types/number.md) frames | Total number of frames in the frame loop. Defaults to NPC.config[npc.id].frames. |
| [number](/types/number.md) gap | Number of frames after the frame loop that belong to one direction of the animation. |
| [number](/types/number.md) offset | Number of frames before the frame loop that belong to one direction of the animation. <b>To summarize: offset + frames + gap = total frames per facing direction in the framestyle.</b> |

</details>
   
====
   {NAME} drawNPC(

[NPC](/reference/npc.md) npcObject,
[named](/types/table.md) args

)
    {RET} [nil](/types/nil.md)
   {DESC} Draws the NPC to the scene according to the provided render arguments. If no arguments are specified, the NPC renders identically to how it usually would.

<details><summary>Args</summary>

| Argument | Description |
| --- | --- |
| [number](/types/number.md) frame | The frame to render. Defaults to the NPC's animationFrame field. |
| [number](/types/number.md) priority | Render priroity to render to. Defaults to -45 or -15 depending on the NPC config's foreground setting, or -75 if the NPC is considered in a spawning state. |
| [number](/types/number.md) width | Width of the rendered area. Defaults to the config's gfxwidth setting. |
| [number](/types/number.md) height | Height of the rendered area. Defaults to the config's gfxheight setting. |
| [number](/types/number.md) sourceX | Pixel offset from the left edge of the NPC spritesheet to start drawing. |
| [number](/types/number.md) sourceY | Pixel offset from the top edge of the NPC's selected animation frame to start drawing. |
| [number](/types/number.md) xOffset | X-coordinate offset relative to the NPC coordinates. Defaults to the config's gfxoffsetx setting. |
| [number](/types/number.md) yOffset | Y-coordinate offset relative to the NPC coordinates. Defaults to the config's gfxoffsety setting. |
| [Texture](/types/Texture.md) or [CaptureBuffer](#capture-buffers) texture | The texture to draw. Defaults to the NPC's texture (Graphics.sprites.npc[id].img). |
| [number](/types/number.md) frames | Defaults to the config's frames setting. Can be overridden here if the NPC should be considered to have a different number of frames per framestyle direction. |
| [number](/types/number.md) opacity | Opacity between 0 and 1. |
| [bool](/types/bool.md) applyFrameStyle | Defaults to true. If set to false, frame calculations based on the NPC's framestyle are skipped. |

</details>
   
====
   {NAME} setRandomDirection(

[NPC](/reference/npc.md) npcObject

)
    {RET} [nil](/types/nil.md)
   {DESC} Randomizes the NPC's facing direction.
====
   {NAME} gfxwidth(

[NPC](/reference/npc.md) npcObject,
[number](/types/number.md) ID (optional)

)
    {RET} [number](/types/number.md) gfxwidth
   {DESC} Returns the NPC's gfxwidth. Falls back to the NPC's width if the gfxwidth property is 0.
====
   {NAME} gfxheight(

[NPC](/reference/npc.md) npcObject,
[number](/types/number.md) ID (optional)

)
    {RET} [number](/types/number.md) gfxheight
   {DESC} Returns the NPC's gfxheight. Falls back to the NPC's height if the gfxheight property is 0.
====
   {NAME} frames(

[NPC](/reference/npc.md) npcObject,
[number](/types/number.md) ID (optional)

)
    {RET} [number](/types/number.md) frames
   {DESC} Returns the NPC's frames, accounting for edge cases.
====
   {NAME} framespeed(

[NPC](/reference/npc.md) npcObject,
[number](/types/number.md) ID (optional)

)
    {RET} [number](/types/number.md) framespeed
   {DESC} Returns the NPC's framespeed, accounting for edge cases.
====
   {NAME} framestyle(

[NPC](/reference/npc.md) npcObject,
[number](/types/number.md) ID (optional)

)
    {RET} [number](/types/number.md) framestyle
   {DESC} Returns the NPC's framestyle, accounting for edge cases.
====
   {NAME} getLayerSpeed(

[NPC](/reference/npc.md) npcObject

)
    {RET} [number](/types/number.md) xSpeed,
    [number](/types/number.md) ySpeed
   {DESC} Returns the speed values the NPC currently inherits from its layer, if the layer is not paused.
====
   {NAME} applyLayerMovement(

[NPC](/reference/npc.md) npcObject

)
    {RET} [nil](/types/nil.md)
   {DESC} Applies the NPC's layer's speeds to the NPC's coordinates directly, if the layer is not paused.
{ENDTABLE}
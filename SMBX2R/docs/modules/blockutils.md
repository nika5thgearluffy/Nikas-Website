# Blockutils

As a module, blockutils needs to be loaded in order to be accessible in your level or episode. The blockutils file is in the scripts/blocks folder, thus, the path needs to be specified as such:
```lua
local blockutils = require("blocks/blockutils")
```

Blockutils includes functions that streamline common actions required by custom Blocks, such as whether they're onscreen, or which frame they should display.

## Functions

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} visible(

[Camera](/reference/camera.md) camera,

[number](/types/number.md) x,

[number](/types/number.md) y,

[number](/types/number.md) width,

[number](/types/number.md) height

)
    {RET} [bool](/types/bool.md) isOnscreen
   {DESC} Returns whether the block's bounding box is within the visible area of the given camera.
====
   {NAME} isOnScreen(

[Block](/reference/Block.md) blockObject,

[number](/types/number.md) buffer

)
    {RET} [bool](/types/bool.md) isOnscreen
   {DESC} Returns whether the block's bounding box is within the visible area of any camera, plus a buffer that defaults to 32 pixels.
====
   {NAME} setLayer(

[Block](/reference/Block.md) blockObject,

[string](/types/string.md) layerName

)
    {RET} [nil](/types/nil.md)
   {DESC} Moves the block to the specified layer.
====
   {NAME} queueSwitch(

[number](/types/number.md) idA,

[number](/types/number.md) idB

)
    {RET} [nil](/types/nil.md)
   {DESC} Adds the specified block IDs to the switch queue, causing blocks of the specified IDs to swap IDs the next time the queue is resolved.
====
   {NAME} resolveSwitchQueue()
    {RET} [nil](/types/nil.md)
   {DESC} Switches the IDs registered to the switch queue and empties the queue. This action is automatically performed in onTickEnd.
====
   {NAME} getBlockSection(

[Block](/reference/Block.md) blockObject

)
    {RET} [number](/types/number.md) sectionIdx
   {DESC} Returns an estimate of the block's section by assuming the block exists in one of the player's sections.
====
   {NAME} getClosestPlayerSection(

[Block](/reference/Block.md) blockObject

)
    {RET} [number](/types/number.md) sectionIdx
   {DESC} Returns an estimate of the block's section. Blocks have no inherent "section" field, so this returns whichever section is closest. If multiple sections overlap, the lower index is preferred.
====
   {NAME} isInActiveSection(

[Block](/reference/Block.md) blockObject

)
    {RET} [bool](/types/bool.md) isInActiveSection
   {DESC} Returns true if the block is contained within any active section, up to a 32 pixel buffer.
====
   {NAME} hiddenFilter(

[Block](/reference/Block.md) blockObject

)
    {RET} [bool](/types/bool.md) isVisible
   {DESC} Returns true if the block isn't hidden by any method of block invisibility.
====
   {NAME} spawnNPC(

[Block](/reference/Block.md) blockObject

)
    {RET} [nil](/types/nil.md)
   {DESC} Spawns an NPC in the middle of the block's coordinates. The NPC ID is taken from the data._basegame.content field of the block, or the contentID field if the data field is not used. IDs between 1 and 99 are coins (1-99 spawned at a time), while IDs above 1000 are NPC IDs (npcID = contentID - 1000).
====
   {NAME} puffRemove(

[Block](/reference/Block.md) blockObject

)
    {RET} [nil](/types/nil.md)
   {DESC} Removes the block with a puff animation and sound. This function invokes blockutils.spawnNPC().
====
   {NAME} kirbyDetonate(

[Block](/reference/Block.md) blockObject,

[table](/types/table.md) of [number](/types/number.md) idFilter

)
    {RET} [nil](/types/nil.md)
   {DESC} Causes a chain reaction of puffRemove-calls in orthogonal directions on a delay. Affects only IDs in the idFilter, whose data._basegame.timer variable is set to 0 upon activation. Ignores hidden blocks.
====
   {NAME} hitExplosion(

[Block](/reference/Block.md) blockObject

)
    {RET} [nil](/types/nil.md)
   {DESC} Causes a visible block to get hit if it is currently overlapping an explosion.
====
   {NAME} detonate(

[Block](/reference/Block.md) blockObject,

[number](/types/number.md) explosionType

)
    {RET} [nil](/types/nil.md)
   {DESC} Causes a bomb explosion at the center of the block, removing the block in the process.
====
   {NAME} zeroBump(

[Block](/reference/Block.md) blockObject

)
    {RET} [nil](/types/nil.md)
   {DESC} Zeroes out an ongoing bump animation.
====
   {NAME} bump(

[Block](/reference/Block.md) blockObject

)
    {RET} [nil](/types/nil.md)
   {DESC} Performs a bump animation.
====
   {NAME} bumpDuringTimeFreeze(

[Block](/reference/Block.md) blockObject

)
    {RET} [nil](/types/nil.md)
   {DESC} Performs a bump animation while Defines.levelFreeze is enabled.
====
   {NAME} setBlockFrame(

[number](/types/number.md) id,

[number](/types/number.md) frame

)
    {RET} [nil](/types/nil.md)
   {DESC} Sets the frame number of the Block ID's animation.
====
   {NAME} getBlockFrame(

[number](/types/number.md) id

)
    {RET} [number](/types/number.md) frame
   {DESC} Returns the frame number of the Block ID's animation.
====
   {NAME} storeContainedNPC(

[Block](/reference/Block.md) blockObject

)
    {RET} [nil](/types/nil.md)
   {DESC} Moves the contents of the contentID field into the data._basegame.content field, emptying the contentID field in the process.
====
   {NAME} playSound(

[number](/types/number.md) id,

[number](/types/number.md) or [string](/types/string.md) or MixChunk sound,

[number](/types/number.md) volume

)
    {RET} [nil](/types/nil.md)
   {DESC} Plays the specified sound if a block of the given ID is onscreen. Volume ranges from 0 to 1, defaulting to 1.
====
   {NAME} getHitbox(

[Block](/reference/Block.md) blockObject,

[number](/types/number.md) swell

)
    {RET} [Collider](/reference/Colliders.md)
   {DESC} Returns a collider shaped around the block (not valid across multiple frames or calls).
====
   {NAME} checkNPCCollisions(

[NPC](/reference/NPC.md) npcObject,

[function](/types/function.md) filterFunction

)
    {RET} [GetCollidingResult](/reference/Colliders.md)
   {DESC} Performs a collision check between an NPC and all blocks that pass the filterFunction.
====
   {NAME} getMask(

[Camera](/reference/camera.md) camera,

[bool](/types/bool.md) useDistanceField

)
    {RET} [CaptureBuffer](/reference/graphics.md#capture-buffers) capture
   {DESC} Can not be used on the overworld. Renders all visible blocks to a capture buffer to be used as a mask.
{ENDTABLE}
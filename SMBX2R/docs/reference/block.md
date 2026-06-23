# Block

Blocks are the terrain pieces for levels.

## Static Members

These elements are static to the class itself and can be accessed like so:
```lua
local blocks = Block.get()
```

### Static Functions
| Function | Return Values | Description |
| --- | --- | --- |
| Block.get() | [table](/types/table.md) of [Block](/reference/block.md) Blocks | Returns a table of references to all Blocks in the level. |
| Block.get([number](/types/number.md) or [table](/types/table.md) ids) | [table](/types/table.md) of [Block](/reference/block.md) Blocks | Returns a table of references to all Blocks of the given id(s). |
| Block.getIntersecting([number](/types/number.md) x1, [number](/types/number.md) y1, [number](/types/number.md) x2, [number](/types/number.md) y2) | [table](/types/table.md) of [Block](/reference/block.md) Blocks | Returns a table of references to all Blocks that are within the rectangle defined by the 4 coordinates, where x1 and y1 must be smaller than x2 and y2 respectively. |
| Block.getByFilterMap([table](/types/table.md) idMap) | [table](/types/table.md) of [Block](/reference/block.md) Blocks | Returns a table of references to all Blocks of the given id(s). Unlike get, the table in this should be formatted as a lookup table, where the Block indices are the keys. |
| Block.iterate() | [Iterator](/concepts/iterators.md) for [Block](/reference/block.md) Blocks | Returns an iterator for iterating over a table of references to all Blocks in the level. |
| Block.iterate([number](/types/number.md) or [table](/types/table.md) ids) | [Iterator](/concepts/iterators.md) for [Block](/reference/block.md) Blocks | Returns an iterator for iterating over a table of references to all Blocks of the given id(s). |
| Block.iterateIntersecting([number](/types/number.md) x1, [number](/types/number.md) y1, [number](/types/number.md) x2, [number](/types/number.md) y2) | [Iterator](/concepts/iterators.md) for [Block](/reference/block.md) Blocks | Returns an iterator for iterating over a table of references to all Blocks that are within the rectangle defined by the 4 coordinates, where x1 and y1 must be smaller than x2 and y2 respectively. |
| Block.iterateByFilterMap([table](/types/table.md) idMap) | [Iterator](/concepts/iterators.md) for [Block](/reference/block.md) Blocks | Returns an iterator for iterating over a table of references to all Blocks of the given id(s). Unlike iterate, the table in this should be formatted as a lookup table, where the Block indices are the keys. |
| Block.spawn([number](/types/number.md) id, [number](/types/number.md) x, [number](/types/number.md) y) | [Block](/reference/block.md) Block | Spawns a new block at the given coordinates. |

### Static Fields

{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE} [table](/types/table.md) of [Block Config](/features/block-config.md)
  {FIELD} Block.config
     {RO} No
   {DESC} Lua representation of all Block config. The way to access individual fields is as follows: Block.config[id].field. (ex. Block.config[1].width = 5). Fields can be read and set.
====
   {TYPE} [table](/types/table.md) of [number](/types/number.md)
  {FIELD} Block.###
     {RO} No
   {DESC} List of all block IDs in the ### classification.
====
   {TYPE} [table](/types/table.md) of [number](/types/number.md)
  {FIELD} Block.###_MAP
     {RO} No
   {DESC} Filter map of all block IDs in the ### classification.
{ENDTABLE}

### Block Classifications

{STARTTABLE}
   {TYPE} Name
   {DESC} Description
====
   {TYPE} SOLID
   {DESC} Includes all solid blocks.
====
   {TYPE} NONSOLID
   {DESC} Includes all blocks that have no collision.
====
   {TYPE} SEMISOLID
   {DESC} Includes all blocks that are only solid from the top.
====
   {TYPE} SIZEABLE
   {DESC} Includes all sizeable blocks.
====
   {TYPE} HURT
   {DESC} Includes all harmful blocks.
====
   {TYPE} LAVA
   {DESC} Includes all lava blocks.
====
   {TYPE} PLAYER
   {DESC} Includes all player filter blocks.
====
   {TYPE} PLAYERSOLID
   {DESC} Includes all blocks that are only solid for players.
====
   {TYPE} MEGA_SMASH
   {DESC} Includes all very brittle blocks (blocks that skewers aren't stopped by).
====
   {TYPE} MEGA_HIT
   {DESC} Includes all blocks that are broken by things like skewers, but which still stop the breaker.
====
   {TYPE} MEGA_STURDY
   {DESC} Includes all blocks that are affected by things like skewers but are only hit, not broken.
====
   {TYPE} SLOPE_LR_FLOOR
   {DESC} Includes leftwards floor slopes.
====
   {TYPE} SLOPE_RL_FLOOR
   {DESC} Includes rightwards floor slopes.
====
   {TYPE} SLOPE_LR_CEIL
   {DESC} Includes leftwards ceiling slopes.
====
   {TYPE} SLOPE_RL_CEIL
   {DESC} Includes rightwards ceiling slopes.
====
   {TYPE} SLOPE
   {DESC} Includes all slopes.
====
   {TYPE} COLLIDABLE
   {DESC} Includes all blocks with an onCollide function registered.
====
   {TYPE} EDIBLEBYVINE
   {DESC} Includes blocks that are removed when a mutant vine passes over them.
{ENDTABLE}



## Instance Members

Instance members must be accessed through a reference to a specific [Block](/reference/block.md) object.
```lua
for k,v in ipairs(Block.get(1)) do
    v.x = player.x
    v.y = player.y
end
```
<Note type="warning">Attempting to call instance members statically will result in an error!</Note>

### Instance Methods

[What is a method?](/types/function.md#methods)

{STARTTABLE}
   {NAME} Method
    {RET} Return Values
   {DESC} Description
====
   {NAME} mem(

[hex](/types/number.md) offset,

[FieldType](/constants/memory-field-types.md) type

)
    {RET} [object](/types/object.md) value
   {DESC} Returns a value of the Block struct at a specific memory address-offset.
====
   {NAME} mem(

[hex](/types/number.md) offset,

[FieldType](/constants/memory-field-types.md) type,

[object](/types/object.md) value

)
    {RET} [nil](/types/nil.md)
   {DESC} Sets a value of the Block struct at a specific memory address-offset.
====
   {NAME} collidesWith(

[Player](/reference/player.md) collidingPlayer

)
    {RET} [number](/types/number.md) collidingDir
   {DESC} Checks collision with the given player and returns a number corresponding to the collision direction. 0, 1, 2, 3 and 4 correspond to "no collision", "player on block", "player on the right", "player below" and "player on the left" respectively.
====
   {NAME} remove(

[bool](/types/bool.md) playSoundAndEffect

)
    {RET} [nil](/types/nil.md)
   {DESC} Causes the block to be destroyed. If playSoundAndEffect is true, the brick effect and sound are played. This method moves the block onto the Destroyed Blocks layer.
====
   {NAME} delete()
    {RET} [nil](/types/nil.md)
   {DESC} Deletes the block entirely.
====
   {NAME} hit(

[bool](/types/bool.md) fromUpSide,

[Player](/reference/player.md) hittingPlayer,

[number](/types/number.md) hitCount

)
    {RET} [nil](/types/nil.md)
   {DESC} Causes the block to be hit. The three optional arguments allow the block to be hit from above, let you configure which player is causing the hit, and the number of times the block gets hit. Even if the player is nil, this event will default to the first player. Use hitWithoutPlayer to hit blocks without player information getting passed.
====
   {NAME} hitWithoutPlayer(

[bool](/types/bool.md) fromUpSide,

[number](/types/number.md) hitCount

)
    {RET} [nil](/types/nil.md)
   {DESC} Causes the block to be hit. The optional arguments allow the block to be hit from above and the number of times the block gets hit.
====
   {NAME} bump(

[bool](/types/bool.md) fromUpSide,

[bool](/types/bool.md) strong

)
    {RET} [nil](/types/nil.md)
   {DESC} Bumps the block. May optionally be bumped from the top. A strong bump causes the block to be bumped twice as strongly.
====
   {NAME} translate(

[number](/types/number.md) dx,

[number](/types/number.md) dy

)
    {RET} [Block](/reference/block.md) block
   {DESC} Moves the block by dx on the x-axis and dy on the y-axis. Returns the block.
====
   {NAME} transform(

[number](/types/number.md) newID,

[bool](/types/bool.md) centered

)
    {RET} [nil](/types/nil.md)
   {DESC} Transforms the Block into a Block of a different ID. Centered defaults to true and will cause the transformation to happen relative to the center of the old and new Block sizes.
====
   {NAME} setSize(

[number](/types/number.md) width,

[number](/types/number.md) height

)
    {RET} [Block](/reference/block.md) thisBlock
   {DESC} Changes the height of the block while correctly setting the block array unsorted flag (prevents collision glitches that occur when setting .width and .height).
====
   {NAME} memdump(

[hex](/types/number.md) lowerBound,

[hex](/types/number.md) upperBound

)
    {RET} [nil](/types/nil.md)
   {DESC} Prints the current state of a Block's memory addresses to the screen for debugging. If the arguments are not specified, they default to the minium and maximum values respectively.
====
   {NAME} memlog(

[hex](/types/number.md) lowerBound,

[hex](/types/number.md) upperBound

)
    {RET} [nil](/types/nil.md)
   {DESC} Logs the current state of a Block's memory addresses into a file in the data/logs directory. If the arguments are not specified, they default to the minium and maximum values respectively.
{ENDTABLE}

### Instance Fields

<!-- (Consider an icon for "read only".) -->
{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} isValid
     {RO} Yes
   {DESC} Validates that the Block object exists.
====
   {TYPE} [number](/types/number.md)
  {FIELD} idx
     {RO} Yes
   {DESC} The Block's index in the internal list of Blocks.
====
   {TYPE} [number](/types/number.md)
  {FIELD} id
     {RO} No
   {DESC} The Block's ID.
====
   {TYPE} [table](/types/table.md)
  {FIELD} data
     {RO} No
   {DESC} The Block's [Data Table](/concepts/data-table.md).
====
   {TYPE} [number](/types/number.md)
  {FIELD} x
     {RO} No
   {DESC} The Block's x coordinate.
====
   {TYPE} [number](/types/number.md)
  {FIELD} y
     {RO} No
   {DESC} The Block's y coordinate.
====
   {TYPE} [number](/types/number.md)
  {FIELD} width
     {RO} No
   {DESC} The Block's width.
====
   {TYPE} [number](/types/number.md)
  {FIELD} height
     {RO} No
   {DESC} The Block's height.
====
   {TYPE} [number](/types/number.md)
  {FIELD} speedX
     {RO} No
   {DESC} The Block's horizontal speed. Note that the block's actual position is only updated if it is on a moving layer. If it isn't, it'll make things on top of it move while not moving itself, like a conveyer belt.
====
   {TYPE} [number](/types/number.md)
  {FIELD} speedY
     {RO} No
   {DESC} The Block's vertical speed. Note that the block's actual position is only updated if it is on a moving layer. If it isn't, it'll make things on top of it move while not moving itself, like a conveyer belt.
====
   {TYPE} [number](/types/number.md)
  {FIELD} contentID
     {RO} No
   {DESC} ID of the NPC contained. 0 is the default (no contained NPC). Values from 1-99 are the corresponding number of coins. Contained NPCs start at 1001 (subtract 1000 for true ID).
====
   {TYPE} [Layer](/reference/layer.md)
  {FIELD} layerObj
     {RO} No
   {DESC} The layer of the Block.
====
   {TYPE} [Layer](/types/string.md)
  {FIELD} layerName
     {RO} No
   {DESC} The name of the Block's layer.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} isHidden
     {RO} No
   {DESC} Whether or not the Block is currently visible.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} invisible
     {RO} No
   {DESC} Whether or not the Block is currently visible.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} slippery
     {RO} No
   {DESC} Whether or not the Block is slippery.
====
   {TYPE} [number](/types/number.md)
  {FIELD} layerSpeedX
     {RO} Yes
   {DESC} The layer speed currently affecting the block.
====
   {TYPE} [number](/types/number.md)
  {FIELD} layerSpeedY
     {RO} Yes
   {DESC} The layer speed currently affecting the block.
====
   {TYPE} [number](/types/number.md)
  {FIELD} extraSpeedX
     {RO} No
   {DESC} Extra horizontal speed field that gets merged with layer speed into the speed field during internal execution.
====
   {TYPE} [number](/types/number.md)
  {FIELD} extraSpeedY
     {RO} No
   {DESC} Extra vertical speed field that gets merged with layer speed into the speed field during internal execution.
====
   {TYPE} [LightSource](/reference/darkness.md#light)
  {FIELD} lightSource
     {RO} No
   {DESC} The Light Source attached to the Block.
====
   {TYPE} [string](/types/string.md)
  {FIELD} collisionGroup
     {RO} No
   {DESC} The collision group this block belongs to.
====
   {TYPE} [number](/types/number.md)
  {FIELD} collisionGroupIndex
     {RO} Yes
   {DESC} The numerical index of the collision group this block belongs to. Used internally to make collision checks faster.
{ENDTABLE}

### Instance Memory Offsets

These offsets can be manipulated by the instance's mem method.
<Note type="warning">Be careful when manipulating memory offsets directly! Doing so may yield unexpected results.</Note>
<Note type="tip">Please keep in mind that some of these fields are not fully researched. These fields are marked with a (?).</Note>

{STARTTABLE}
  {FIELD} Field
   {TYPE} Fieldtype
   {DESC} Description
====
   {SECT} Character-related
====
  {FIELD} 0x00
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Toggles block slipperiness.<Badge type="tip">Use field slippery</Badge>
====
  {FIELD} 0x02
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Respawn delay. If over 0, counts up and will eventually restore properties such a layer, ID and contents. Only ever set in battle mode.
====
  {FIELD} 0x04
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} How often the block gets hit (for example when Toad hits the block)
====
  {FIELD} 0x06
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} ID at the start of the game
====
  {FIELD} 0x08
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Content ID at the start of the game
====
  {FIELD} 0x0C
   {TYPE} [FIELD_STRING](/constants/memory-field-types.md)
   {DESC} Event that triggers when the block is hit
====
  {FIELD} 0x10
   {TYPE} [FIELD_STRING](/constants/memory-field-types.md)
   {DESC} Event that triggers when the block is destroyed
====
  {FIELD} 0x14
   {TYPE} [FIELD_STRING](/constants/memory-field-types.md)
   {DESC} Event that triggers when there are no more objects on the block's layer
====
  {FIELD} 0x18
   {TYPE} [FIELD_STRING](/constants/memory-field-types.md)
   {DESC} Name of the layer that the block belongs to<Badge type="tip">Use field layerName</Badge>
====
  {FIELD} 0x1C
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Whether or not the block is hidden<Badge type="tip">Use field isHidden or invisible</Badge>
====
  {FIELD} 0x1E
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} ID <Badge type="tip">Use field id</Badge>
====
  {FIELD} 0x20
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} x <Badge type="tip">Use field x</Badge>
====
  {FIELD} 0x28
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} y <Badge type="tip">Use field y</Badge>
====
  {FIELD} 0x30
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} Height <Badge type="tip">Use field height</Badge>
====
  {FIELD} 0x38
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} Width <Badge type="tip">Use field width</Badge>
====
  {FIELD} 0x40
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} Horizontal Speed <Badge type="tip">Use field speedX</Badge>
====
  {FIELD} 0x48
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} Vertical Speed <Badge type="tip">Use field speedY</Badge>
====
  {FIELD} 0x50
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Content ID <Badge type="tip">Use field contentID</Badge>
====
  {FIELD} 0x52
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Timer for the first half of the bonk animation. Sum with 0x54 for the y offset of the bonk.
====
  {FIELD} 0x54
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Timer for the second half of the bonk animation. Sum with 0x52 for the y offset of the bonk.
====
  {FIELD} 0x56
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Y-Offset of the bonking animation. Should equal -(0x52 + 0x54).
====
  {FIELD} 0x58
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} True when the block is marked for removal/getting hit.
====
  {FIELD} 0x5A
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Whether or not the block is marked as invisible in the editor.
====
  {FIELD} 0x5C
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Stores the ID of the NPC this block was before a P-Switch was activated.
====
  {FIELD} 0x5E
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Set by the Clown Car mount to indicate this is a temporary block used for all NPCs carried by the Clown Car, including stacked NPCs that are not directly touching the mount; the value corresponds to the index of the Player driving the Clown Car.
====
  {FIELD} 0x60
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Set for temporary blocks that represent NPCs during the SMBX 1.3 NPC physics update; the value corresponds to the NPC's ID.
====
  {FIELD} 0x62
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Only set for temporary blocks; a vehicle y offset that represents how much higher the temporary block is than the Clown Car its NPC is standing on.
====
  {FIELD} 0x64
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Only set for temporary blocks belonging to NPCs with playerblocktop enabled but both npcblock properties disabled; prevents projectile NPCs from colliding with the block.
====
  {FIELD} 0x66
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Index of the NPC this block belongs to in the NPC array.
{ENDTABLE}

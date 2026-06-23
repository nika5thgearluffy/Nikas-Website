# NPC

NPCs (Non Player Characters) are interactive level elements. This includes enemies, powerups, platforms and various miscellaneous other objects. They are defined by files prefixed with 'npc-'.

## Static Members

These elements are static to the class itself and can be accessed like so:
```lua
local NPCs = NPC.get()
```

### Static Functions
| Function | Return Values | Description |
| --- | --- | --- |
| NPC.count() | [number](/types/number.md) npcCount | Returns the number of NPCs in the level. |
| NPC.spawn([number](/types/number.md) id, [number](/types/number.md) x, [number](/types/number.md) y, [number](/types/number.md) section, [bool](/types/bool.md) respawn, [bool](/types/bool.md) centered) | [NPC](/reference/npc.md) newlySpawnedNPC | Spawns a new NPC at the given coordinates in the given section. Section is optional, getting the index of the section using the coordinates if not provided. Respawn and centered are also optional, defaulting to false. If respawn is true, the NPC will not permanently die upon despawning. If centered is true, the x/y coordinates are interpreted to be at the NPC's center, rather than top-left corner. |
| NPC.get() | [table](/types/table.md) of [NPC](/reference/npc.md) NPCs | Returns a table of references to all NPCs in the level. |
| NPC.get([number](/types/number.md) or [table](/types/table.md) ids, [number](/types/number.md) or [table](/types/table.md) sections) | [table](/types/table.md) of [NPC](/reference/npc.md) NPCs | Returns a table of references to all NPCs of the given id(s) in the optionally provided section(s). |
| NPC.getIntersecting([number](/types/number.md) x1, [number](/types/number.md) y1, [number](/types/number.md) x2, [number](/types/number.md) y2) | [table](/types/table.md) of [NPC](/reference/npc.md) NPCs | Returns a table of references to all NPCs that are within the rectangle defined by the 4 coordinates, where x1 and y1 must be smaller than x2 and y2 respectively. |
| NPC.getByFilterMap([table](/types/table.md) idMap) | [table](/types/table.md) of [NPC](/reference/npc.md) NPCs | Returns a table of references to all NPCs of the given id(s). Unlike get, the table in this should be formatted as a lookup table, where the NPC indices are the keys. |
| NPC.iterate() | [Iterator](/concepts/iterators.md) for [NPC](/reference/npc.md) NPCs | Returns an iterator for iterating over a table of references to all NPCs in the level. |
| NPC.iterate([number](/types/number.md) or [table](/types/table.md) ids) | [Iterator](/concepts/iterators.md) for [NPC](/reference/npc.md) NPCs | Returns an iterator for iterating over a table of references to all NPCs of the given id(s). |
| NPC.iterateIntersecting([number](/types/number.md) x1, [number](/types/number.md) y1, [number](/types/number.md) x2, [number](/types/number.md) y2) | [Iterator](/concepts/iterators.md) for [NPC](/reference/npc.md) NPCs | Returns an iterator for iterating over a table of references to all NPCs that are within the rectangle defined by the 4 coordinates, where x1 and y1 must be smaller than x2 and y2 respectively. |
| NPC.iterateByFilterMap([table](/types/table.md) idMap) | [Iterator](/concepts/iterators.md) for [NPC](/reference/npc.md) NPCs | Returns an iterator for iterating over a table of references to all NPCs of the given id(s). Unlike iterate, the table in this should be formatted as a lookup table, where the NPC indices are the keys. |

### Static Fields

{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE} [table](/types/table.md) of [NPC Config](/features/npc-config.md)
  {FIELD} NPC.config
     {RO} No
   {DESC} Lua representation of all NPC config. The way to access individual fields is as follows: NPC.config[id].field. (ex. NPC.config[1].nogravity = true). Fields can be read and set.
{ENDTABLE}

### NPC Classifications

{STARTTABLE}
   {TYPE} Name
   {DESC} Description
====
   {TYPE} HITTABLE
   {DESC} Includes all NPCs that have a harm type other than HARM_TYPE_LAVA or HARM_TYPE_OFFSCREEN registered.
====
   {TYPE} UNHITTABLE
   {DESC} Includes all NPCs that are not included in the NPC.HITTABLE list.
====
   {TYPE} MULTIHIT
   {DESC} Includes all NPCs that have their "health" NPC config flag set to something higher than 1. Note that this setting the flag alone doesn't cause an NPC to die in multiple hits. It merely adds it to the list. The health handling has to be done manually.
====
   {TYPE} POWERUP
   {DESC} Includes all NPCs that have the "powerup" NPC config flag set. Note that setting the flag doesn't cause an NPC to be a powerup. It merely indicates that it should be part of the list.
====
   {TYPE} COLLECTIBLE
   {DESC} Includes all NPCs that have the "isinteractable" NPC config flag set.
====
   {TYPE} COIN
   {DESC} Includes all NPCs that have the "iscoin" NPC config flag set.
====
   {TYPE} WEIGHT
   {DESC} Includes all NPCs that have a nonzero weight set.
====
   {TYPE} SHELL
   {DESC} Includes NPCs that have the "isshell" NPC config flag set.
====
   {TYPE} MOUNT
   {DESC} Includes all isshoe and isyoshi mounts. The clown car is excluded from this list.
====
   {TYPE} SWITCH
   {DESC} Includes all NPCs that have their "iscustomswitch" NPC config flag set. Note that this setting the flag alone doesn't cause an NPC to act like a switch. It merely adds it to the list.
====
   {TYPE} PLAYERSOLID
   {DESC} Includes all NPCs that have their "playerblock" NPC config flag set.
====
   {TYPE} VINE
   {DESC} Includes all NPCs that have their "isvine" NPC config flag set.
====
   {TYPE} VEGETABLE
   {DESC} Includes all NPCs that have their "isvegetable" NPC config flag set.
====
   {TYPE} HOT
   {DESC} Includes all NPCs that have their "ishot" NPC config flag set.
====
   {TYPE} COLD
   {DESC} Includes all NPCs that have their "iscold" NPC config flag set.
{ENDTABLE}

## Instance Members

Instance members must be accessed through a reference to a specific [NPC](/reference/npc.md) object.
```lua
for k,v in ipairs(NPC.get(1)) do
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
   {DESC} Returns a value of the NPC struct at a specific memory address-offset.
====
   {NAME} mem(

[hex](/types/number.md) offset,

[FieldType](/constants/memory-field-types.md) type,

[object](/types/object.md) value

)
    {RET} [nil](/types/nil.md)
   {DESC} Sets a value of the NPC struct at a specific memory address-offset.
====
   {NAME} harm(

[Harm Type](/constants/enemy-harm-types.md) harmType,

[number](/types/number.md) damage,

[number](/types/number.md) multiplier

   )
    {RET} [number](/types/number.md) multiplier
   {DESC} Harms the NPC, inflicting damage upon it. Can optionally specify a harm type, the amount of damage dealt and the score combo multiplier. Damage is ignored by NPCs that die in one hit. Returns the new score combo multiplier.
====
   {NAME} kill([Harm Type](/constants/enemy-harm-types.md) harmType)
    {RET} [nil](/types/nil.md)
   {DESC} Kills the NPC instantly using the given harm type. If no harm type is specified, the standard kill effect is used.
====
   {NAME} collect(

[Player](/reference/Player) player

   )
    {RET} [nil](/types/nil.md)
   {DESC} Causes the given player to collect the NPC.
====
   {NAME} toCoin()
    {RET} [nil](/types/nil.md)
   {DESC} Kills the NPC with a coin effect (similar to when collecting a goal or calling Misc.npcToCoins()).
====
   {NAME} toIce()
    {RET} [nil](/types/nil.md)
   {DESC} Transforms the NPC into an ice block.
====
   {NAME} getWeight()
    {RET} [number](/types/number.md) weight
   {DESC} Returns the sum of the NPC's weight and all attached weights.
====
   {NAME} attachWeight([number](/types/number.md) weight)
    {RET} [WeightContainer](/types/weightcontainer.md) weight
   {DESC} Attaches a new weight to the NPC. Returns a weight container for the weight that was just added.
====
   {NAME} detachWeight([WeightContainer](/types/weightcontainer.md) weight)
    {RET} [bool](/types/bool.md) success
   {DESC} Detaches a weight container from an NPC. Fails if the weight container belongs to a different object or is not attached to the NPC. Returns whether the weight was removed or not.
====
   {NAME} transform(

[number](/types/number.md) newID,

[bool](/types/bool.md) centered,

[bool](/types/bool.md) changeSpawn

)
    {RET} [nil](/types/nil.md)
   {DESC} Transforms the NPC into a NPC of a different ID. Centered defaults to true and will cause the transformation to happen relative to the center of the old and new NPC sizes if the NPC doesn't have block collision, and to the bottom-center if it does. If changeSpawn is set to true, the NPC's spawn location is changed to the point of transformation.
====
   {NAME} memdump(

[hex](/types/number.md) lowerBound,

[hex](/types/number.md) upperBound

)
    {RET} [nil](/types/nil.md)
   {DESC} Prints the current state of an NPC's memory addresses to the screen for debugging. If the arguments are not specified, they default to the minium and maximum values respectively.
====
   {NAME} memlog(

[hex](/types/number.md) lowerBound,

[hex](/types/number.md) upperBound

)
    {RET} [nil](/types/nil.md)
   {DESC} Logs the current state of an NPC's memory addresses into a file in the data/logs directory. If the arguments are not specified, they default to the minium and maximum values respectively.
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
   {DESC} Validates that the NPC object exists.
====
   {TYPE} [number](/types/number.md)
  {FIELD} idx
     {RO} Yes
   {DESC} The NPC's index in the internal list of NPCs.
====
   {TYPE} [number](/types/number.md)
  {FIELD} id
     {RO} No
   {DESC} The NPC's ID.
====
   {TYPE} [table](/types/table.md)
  {FIELD} data
     {RO} No
   {DESC} The NPC's [Data Table](/concepts/data-table.md).
====
   {TYPE} [number](/types/number.md)
  {FIELD} x
     {RO} No
   {DESC} The NPC's x coordinate.
====
   {TYPE} [number](/types/number.md)
  {FIELD} y
     {RO} No
   {DESC} The NPC's y coordinate.
====
   {TYPE} [number](/types/number.md)
  {FIELD} width
     {RO} No
   {DESC} The NPC's width.
====
   {TYPE} [number](/types/number.md)
  {FIELD} height
     {RO} No
   {DESC} The NPC's height.
====
   {TYPE} [number](/types/number.md)
  {FIELD} speedX
     {RO} No
   {DESC} The NPC's horizontal speed.
====
   {TYPE} [number](/types/number.md)
  {FIELD} speedY
     {RO} No
   {DESC} The NPC's vertical speed.
====
   {TYPE} [number](/types/number.md)
  {FIELD} direction
     {RO} No
   {DESC} The NPC's facing direction. Note: setting this resets speedX to 0 unless staticdirection is set in the NPC's config.
====
   {TYPE} [number](/types/number.md)
  {FIELD} spawnId
     {RO} No
   {DESC} The NPC's ID when spawning.
====
   {TYPE} [number](/types/number.md)
  {FIELD} spawnX
     {RO} No
   {DESC} The NPC's x coordinate when spawning.
====
   {TYPE} [number](/types/number.md)
  {FIELD} spawnY
     {RO} No
   {DESC} The NPC's y coordinate when spawning.
====
   {TYPE} [number](/types/number.md)
  {FIELD} spawnWidth
     {RO} No
   {DESC} The NPC's width when spawning.
====
   {TYPE} [number](/types/number.md)
  {FIELD} spawnHeight
     {RO} No
   {DESC} The NPC's height when spawning.
====
   {TYPE} [number](/types/number.md)
  {FIELD} spawnSpeedX
     {RO} No
   {DESC} The NPC's horizontal speed when spawning.
====
   {TYPE} [number](/types/number.md)
  {FIELD} spawnSpeedY
     {RO} No
   {DESC} The NPC's vertical speed when spawning.
====
   {TYPE} [number](/types/number.md)
  {FIELD} spawnDirection
     {RO} No
   {DESC} The NPC's facing direction when spawning.
====
   {TYPE} [Layer](/reference/layer.md)
  {FIELD} layerObj
     {RO} No
   {DESC} The layer of the NPC.
====
   {TYPE} [string](/types/string.md)
  {FIELD} layerName
     {RO} No
   {DESC} The name of the NPC's layer.
====
   {TYPE} [Layer](/reference/layer.md)
  {FIELD} attachedLayerObj
     {RO} No
   {DESC} The attached layer of the NPC.
====
   {TYPE} [string](/types/string.md)
  {FIELD} attachedLayerName
     {RO} No
   {DESC} The name of the NPC's attached layer.
====
   {TYPE} [string](/types/string.md)
  {FIELD} activateEventName
     {RO} No
   {DESC} The name of the event executed when the NPC spawns.
====
   {TYPE} [string](/types/string.md)
  {FIELD} deathEventName
     {RO} No
   {DESC} The name of the event executed when the NPC dies.
====
   {TYPE} [string](/types/string.md)
  {FIELD} talkEventName
     {RO} No
   {DESC} The name of the event executed when the NPC is talked to.
====
   {TYPE} [string](/types/string.md)
  {FIELD} noMoreObjInLayer
     {RO} No
   {DESC} The name of the event executed when the NPC is killed and its layer becomes empty.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} collidesBlockBottom
     {RO} No
   {DESC} Whether or not the NPC currently collides with a block on its bottom edge.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} collidesBlockLeft
     {RO} No
   {DESC} Whether or not the NPC currently collides with a block on its left edge.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} collidesBlockUp
     {RO} No
   {DESC} Whether or not the NPC currently collides with a block on its top edge.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} collidesBlockRight
     {RO} No
   {DESC} Whether or not the NPC currently collides with a block on its right edge.
====
   {TYPE} [string](/types/string.md)
  {FIELD} collisionGroup
     {RO} No
   {DESC} The collision group this NPC belongs to.
====
   {TYPE} [number](/types/number.md)
  {FIELD} collisionGroupIndex
     {RO} Yes
   {DESC} The numerical index of the collision group this NPC belongs to. Used internally to make collision checks faster.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} underwater
     {RO} No
   {DESC} Whether or not the NPC is currently underwater.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} invincibleToSword
     {RO} No
   {DESC} Whether or not the NPC is invincible to sword attacks from Link.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} drawOnlyMask
     {RO} No
   {DESC} Whether or not to only draw the NPC as a black silhouette. If true, affected NPCs can also pass through walls, like the player can with the shadowstar cheat.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} legacyBoss
     {RO} No
   {DESC} Whether or not the legacy boss flag is enabled on this NPC.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} friendly
     {RO} No
   {DESC} Whether or not the NPC is friendly.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} dontMove
     {RO} No
   {DESC} Whether or not the NPC is able to move. If true, the NPC will also attempt to always face the player.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} isHidden
     {RO} No
   {DESC} Whether or not the NPC is currently visible.
====
   {TYPE} [string](/types/string.md)
  {FIELD} msg
     {RO} No
   {DESC} The NPC's talk message. If this is not an empty string, an exclamation point will appear above the NPC when the player gets close.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} noblockcollision
     {RO} No
   {DESC} Override for the noblockcollision config flag. Toggles per-NPC block collision.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} isProjectile
     {RO} No
   {DESC} If true, the NPC currently is in the projectile state (thrown, shot out of a generator).
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} isGenerator
     {RO} No
   {DESC} If true, the NPC is a generator NPC.
====
   {TYPE} [number](/types/number.md)
  {FIELD} generatorInterval
     {RO} No
   {DESC} The generator NPC's spawn interval.
====
   {TYPE} [number](/types/number.md)
  {FIELD} generatorTimer
     {RO} No
   {DESC} The generator NPC's spawn timer.
====
   {TYPE} [number](/types/number.md)
  {FIELD} generatorDirection
     {RO} No
   {DESC} The direction in which NPCs from the generator are spawned.
====
   {TYPE} [number](/types/number.md)
  {FIELD} generatorType
     {RO} No
   {DESC} The type of generator (Warp/Projectile).
====
   {TYPE} [number](/types/number.md)
  {FIELD} animationFrame
     {RO} No
   {DESC} The NPC's current animation frame.
====
   {TYPE} [number](/types/number.md)
  {FIELD} animationTimer
     {RO} No
   {DESC} The NPC's animation timer value.
====
   {TYPE} [number](/types/number.md)
  {FIELD} heldIndex
     {RO} No
   {DESC} Index of the player holding this NPC.
====
   {TYPE} [Player](/reference/player.md)
  {FIELD} heldPlayer
     {RO} No
   {DESC} The Player holding this NPC, or nil if not held.
====
   {TYPE} [number](/types/number.md)
  {FIELD} ai1
     {RO} No
   {DESC} Multi-purpose AI field used by [NPC AI](/reference/npc-ai.md).
====
   {TYPE} [number](/types/number.md)
  {FIELD} ai2
     {RO} No
   {DESC} Multi-purpose AI field used by [NPC AI](/reference/npc-ai.md).
====
   {TYPE} [number](/types/number.md)
  {FIELD} ai3
     {RO} No
   {DESC} Multi-purpose AI field used by [NPC AI](/reference/npc-ai.md).
====
   {TYPE} [number](/types/number.md)
  {FIELD} ai4
     {RO} No
   {DESC} Multi-purpose AI field used by [NPC AI](/reference/npc-ai.md).
====
   {TYPE} [number](/types/number.md)
  {FIELD} ai5
     {RO} No
   {DESC} Multi-purpose AI field used by [NPC AI](/reference/npc-ai.md).
====
   {TYPE} [number](/types/number.md)
  {FIELD} ai6
     {RO} No
   {DESC} Multi-purpose AI field used by [NPC AI](/reference/npc-ai.md).
====
   {TYPE} [number](/types/number.md)
  {FIELD} spawnAi1
     {RO} No
   {DESC} Value of ai1 on spawn.
====
   {TYPE} [number](/types/number.md)
  {FIELD} spawnAi2
     {RO} No
   {DESC} Value of ai2 on spawn.
====
   {TYPE} [Harm Type](/features/enemy-harm-types.md)
  {FIELD} killFlag
     {RO} No
   {DESC} If nonzero, a kill with the specified harm type is scheduled. Note: Harm types with "EXT" in the name only work in NPC:harm().
====
   {TYPE} [number](/types/number.md)
  {FIELD} despawnTimer
     {RO} No
   {DESC} Timer until the NPC despawns. Forced to its maximum value while on-screen. Once it reaches 0, the NPC despawns. The timer stays at 0 until the NPC's spawn location is off-screen, then changes to -1. If the timer is -1, the NPC can respawn. NPCs that cannot respawn are killed with HARM_TYPE_OFFSCREEN when this timer reaches 0.
====
   {TYPE} [number](/types/number.md)
  {FIELD} section
     {RO} No
   {DESC} The NPC's section index.
====
   {TYPE} [Section](/reference/section.md)
  {FIELD} sectionObj
     {RO} Yes
   {DESC} The NPC's section object.
====
   {TYPE} [number](/types/number.md)
  {FIELD} forcedState
     {RO} No
   {DESC} The current forced state of the NPC. 

<details><summary>Forced state list</summary>

| Value | Description |
| --- | --- |
| 0 | Normal behaviour |
| 1 | Coming out of the top of a block (forcedCounter1 is how far it has come out). |
| 2 | Falling down from the player's item box (forcedCounter1 is a blinking timer, invisible if it is an interval of 3). |
| 3 | Coming out of the bottom of a block (forcedCounter1 is how far it has come out). |
| 4 | Coming out of a warp generator (forcedCounter1 is the x or y coordinate of the generator's front edge/surface, forcedCounter2 is the direction it's coming from (1,2,3,4 corresponds to up,left,down and right respectively)). |
| 5 | On Yoshi's tongue (forcedCounter1 is the player it belongs to, forcedCounter2 is a countdown timer that returns it to state 0 if it reaches 0). |
| 6 | In Yoshi's mouth (forcedCounter1 is the player it belongs to). |
| 8 | Makes the NPC invisible (forcedCounter1 is a countdown timer that returns it to state 0 if it reaches 0) (used for subcon potion's "poof" effect). |
| 208 | In a mother brain jar, if not touching a jar it'll return to 0 (may only work fully properly for mother brain!). |
====
   {TYPE} [number](/types/number.md)
  {FIELD} forcedCounter1
     {RO} No
   {DESC} General purpose "timer" for forced states. See 0x138 for how each state uses it.
====
   {TYPE} [number](/types/number.md)
  {FIELD} forcedCounter2
     {RO} No
   {DESC} General purpose "timer" for forced states. See 0x138 for how each state uses it.
====
   {TYPE} [Light Source](/reference/darkness.md#light)
  {FIELD} lightSource
     {RO} No
   {DESC} The Light Source attached to the NPC.
====
   {TYPE} [table](/types/table.md) of [Weight Container](/types/weightcontainer.md)
  {FIELD} _weightContainers
     {RO} No
   {DESC} A list of all weights attached to the NPC.
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
   {SECT} Unsorted
====
  {FIELD} 0x00
   {TYPE} [FIELD_STRING](/constants/memory-field-types.md)
   {DESC} Attached layer name. <Badge type="tip">Use field attachedLayerObj or attachedLayerName</Badge>
====
  {FIELD} 0x04
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} 2 when the NPC is inside quicksand, 1 on the frame the NPC leaves quicksand.
====
  {FIELD} 0x06
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Respawn delay. Counts down each frame and prevents the NPC from spawning while over 0. Only ever set in battle mode.
====
  {FIELD} 0x08
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} True if the NPC should bounce on the floor. Held/thrown by Toad/Peach or knocked forward by Link stab. Resets when touching the ground, but does not reset if Peach or Toad dropped the NPC without throwing it.
====
   {SECT} Collision-related
====
  {FIELD} 0x0A
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Set to 2 when touching a block below and briefly immediately after being thrown by the player. <Badge type="tip">Use field collidesBlockBottom</Badge>
====
  {FIELD} 0x0C
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Set to 2 when touching a block to the left. <Badge type="tip">Use field collidesBlockLeft</Badge>
====
  {FIELD} 0x0E
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Set to 2 when touching a block above. <Badge type="tip">Use field collidesBlockUp</Badge>
====
  {FIELD} 0x10
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Set to 2 when touching a block to the right. <Badge type="tip">Use field collidesBlockRight</Badge>
====
  {FIELD} 0x12
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Set to 2 when pushed by a layer or another NPC. Needs to be set in order to crush the NPC.
====
   {SECT} Unsorted
====
  {FIELD} 0x14
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Unused.
====
  {FIELD} 0x18
   {TYPE} [FIELD_FLOAT](/constants/memory-field-types.md)
   {DESC} Speed X value without "speed" config modifier. Horizontal speed is copied into here before processing the speed config, and copied back after movement occurs.
====
  {FIELD} 0x1C
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Water countdown timer. Normally set to 2 when in water and will count down to 0. Integer values from -1 through 3 may have distinct effects in various cases.
====
  {FIELD} 0x1E
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Unused.
====
  {FIELD} 0x20
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} True if the NPC should not create a lava splash effect.
====
  {FIELD} 0x22
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Block-array index of slope currently stood on.
====
  {FIELD} 0x24
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Hit counter for score calculation.
====
  {FIELD} 0x26
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Invincibility frame countdown for sword attacks and tail swipes. <Badge type="tip">Use field invincibleToSword</Badge>
====
  {FIELD} 0x28
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Whether to only draw the NPC's silhouette and let it pass through walls. <Badge type="tip">Use field drawOnlyMask</Badge>
====
   {SECT} Layer and Event-related
====
  {FIELD} 0x2C
   {TYPE} [FIELD_STRING](/constants/memory-field-types.md)
   {DESC} Name of the Activate-Event. <Badge type="tip">Use field activateEventName</Badge>
====
  {FIELD} 0x30
   {TYPE} [FIELD_STRING](/constants/memory-field-types.md)
   {DESC} Name of the Death-Event. <Badge type="tip">Use field deathEventName</Badge>
====
  {FIELD} 0x34
   {TYPE} [FIELD_STRING](/constants/memory-field-types.md)
   {DESC} Name of the Talk-Event. <Badge type="tip">Use field talkEventName</Badge>
====
  {FIELD} 0x38
   {TYPE} [FIELD_STRING](/constants/memory-field-types.md)
   {DESC} Name of the Empty-Layer-Event. <Badge type="tip">Use field noMoreObjInLayer</Badge>
====
  {FIELD} 0x3C
   {TYPE} [FIELD_STRING](/constants/memory-field-types.md)
   {DESC} Name of the NPC's layer. <Badge type="tip">Use field layerName</Badge>
====
   {SECT} Properties-related
====
  {FIELD} 0x40
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Whether or not the NPC is currently hidden. <Badge type="tip">Use field isHidden.</Badge>
====
  {FIELD} 0x42
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Whether or not the legacyBoss flag is enabled. <Badge type="tip">Use field legacyBoss.</Badge>
====
  {FIELD} 0x44
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} True if the exclamation mark for talking to the NPC is being displayed.
====
  {FIELD} 0x46
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Whether or not the NPC is friendly. <Badge type="tip">Use field friendly.</Badge>
====
  {FIELD} 0x48
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} True if the NPC is set to not move. <Badge type="tip">Use field dontMove.</Badge>
====
  {FIELD} 0x4A
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} True if the Dont Move flag was initially set.
====
  {FIELD} 0x4C
   {TYPE} [FIELD_STRING](/constants/memory-field-types.md)
   {DESC} The NPC's talk message. <Badge type="tip">Use field msg</Badge>
====
   {SECT} Interaction-related
====
  {FIELD} 0x50
   {TYPE} [FIELD_FLOAT](/constants/memory-field-types.md)
   {DESC} Horizontal force exerted on the NPC to push it out of a block.
====
  {FIELD} 0x5C
   {TYPE} [FIELD_FLOAT](/constants/memory-field-types.md)
   {DESC} Horizontal force exerted on the NPC by a touched NPC or layer.
====
  {FIELD} 0x60
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Index of the clown car-riding player the NPC is standing on.
====
  {FIELD} 0x62
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Y-Coordinate of the clown car-riding player the NPC is standing on.
====
   {SECT} Generator-related
====
  {FIELD} 0x64
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} True for generators. <Badge type="tip">Use field isGenerator</Badge>
====
  {FIELD} 0x68
   {TYPE} [FIELD_FLOAT](/constants/memory-field-types.md)
   {DESC} A generator NPC's spawn interval. <Badge type="tip">Use field generatorInterval</Badge>
====
  {FIELD} 0x6C
   {TYPE} [FIELD_FLOAT](/constants/memory-field-types.md)
   {DESC} Generator timer. <Badge type="tip">Use field generatorTimer</Badge>
====
  {FIELD} 0x70
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} A generator NPC's spawn direction. <Badge type="tip">Use field generatorDirection</Badge>
====
  {FIELD} 0x72
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} A generator NPC's type. <Badge type="tip">Use field generatorType</Badge>
====
  {FIELD} 0x74
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Whether or not the generator can fire. Does not account for objects blocking the generator's spawn position.
====
  {FIELD} 0x76
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} used in the 1.3 player physics code to temporarily indicate that this NPC is a player-controlled clown car and thus that other players can stand on it.
====
   {SECT} Position-related
====
  {FIELD} 0x78
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} NPC X-Position <Badge type="tip">Use field x</Badge>
====
  {FIELD} 0x80
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} NPC Y-Position <Badge type="tip">Use field y</Badge>
====
  {FIELD} 0x88
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} NPC Width <Badge type="tip">Use field width</Badge>
====
  {FIELD} 0x90
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} NPC Height <Badge type="tip">Use field height</Badge>
====
  {FIELD} 0x98
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} NPC X-Speed <Badge type="tip">Use field speedX</Badge>
====
  {FIELD} 0xA0
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} NPC Y-Speed <Badge type="tip">Use field speedY</Badge>
====
   {SECT} Respawn-related
====
  {FIELD} 0xA8
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} NPC Spawn X-Position <Badge type="tip">Use field spawnX</Badge>
====
  {FIELD} 0xB0
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} NPC Spawn Y-Position <Badge type="tip">Use field spawnY</Badge>
====
  {FIELD} 0xB8
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} NPC Spawn Width <Badge type="tip">Use field spawnWidth</Badge>
====
  {FIELD} 0xC0
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} NPC Spawn Height <Badge type="tip">Use field spawnHeight</Badge>
====
  {FIELD} 0xC8
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} NPC Spawn X-Speed <Badge type="tip">Use field spawnSpeedX</Badge>
====
  {FIELD} 0xD0
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} NPC Spawn Y-Speed <Badge type="tip">Use field spawnSpeedY</Badge>
====
  {FIELD} 0xD8
   {TYPE} [FIELD_FLOAT](/constants/memory-field-types.md)
   {DESC} Direction the NPC is spawned in. <Badge type="tip">Use field spawnDirection</Badge>
====
  {FIELD} 0xDC
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} ID which the NPC spawns as. 0 means doesn't respawn. <Badge type="tip">Use field spawnId</Badge>
====
  {FIELD} 0xDE
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} ai1 value on respawn. Contains ID of the "contained NPC" for container NPCs. <Badge type="tip">Use field spawnAi1</Badge>
====
  {FIELD} 0xE0
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} ai2 value on respawn. Other ai values are always reset to 0. <Badge type="tip">Use field spawnAi2</Badge>
====
   {SECT} Identity-related
====
  {FIELD} 0xE2
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} The NPC's ID. <Badge type="tip">Use field id</Badge>
====
  {FIELD} 0xE4
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} The NPC's animationFrame. <Badge type="tip">Use field animationFrame</Badge>
====
  {FIELD} 0xE6
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} The NPC's array index in the NPC array. <Badge type="tip">Use field idx</Badge>
====
  {FIELD} 0xE8
   {TYPE} [FIELD_FLOAT](/constants/memory-field-types.md)
   {DESC} The NPC's animation timer. <Badge type="tip">Use field animationTimer</Badge>
====
  {FIELD} 0xEC
   {TYPE} [FIELD_FLOAT](/constants/memory-field-types.md)
   {DESC} The NPC's facing direction. <Badge type="tip">Use field direction</Badge>
====
   {SECT} AI-related
====
  {FIELD} 0xF0
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} The NPC's ai1 value. <Badge type="tip">Use field ai1</Badge>
====
  {FIELD} 0xF8
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} The NPC's ai2 value. <Badge type="tip">Use field ai2</Badge>
====
  {FIELD} 0x100
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} The NPC's ai3 value. <Badge type="tip">Use field ai3</Badge>
====
  {FIELD} 0x108
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} The NPC's ai4 value. <Badge type="tip">Use field ai4</Badge>
====
  {FIELD} 0x110
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} The NPC's ai5 value. <Badge type="tip">Use field ai5</Badge>
====
  {FIELD} 0x118
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} A rarely used 6th ai value. Used by Larry, Ludwig, Toad's Boomerang, SMW Lakitu, and the glitchy airship piece NPC. <Badge type="tip">Use field ai6</Badge>
====
  {FIELD} 0x120
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} True if the NPC is scheduled to turn around. 
====
   {SECT} Unsorted
====
  {FIELD} 0x11C
   {TYPE} [FIELD_FLOAT](/constants/memory-field-types.md)
   {DESC} Y-Speed influence through player input (used by glitchy airship piece NPC).
====
   {SECT} Despawn and death-related
====
  {FIELD} 0x122
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} True if the NPC is scheduled to die with a given harm type. <Badge type="tip">Use field killFlag</Badge>
====
  {FIELD} 0x124
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} This is set to false when an NPC resets its respawn position, but will not spawn itself fully because it's still visible by the player. Note: Must be set to true when enforcing a respawn.
====
  {FIELD} 0x126
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Whether or not the NPC is onscreen on the first or only camera.
====
  {FIELD} 0x128
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Whether or not the NPC is onscreen on the second or only camera.
====
  {FIELD} 0x12A
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} The NPC's despawn timer. <Badge type="tip">Use field despawnTimer</Badge>
====
   {SECT} Grabbing-related
====
  {FIELD} 0x12C
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} The index of the player grabbing the NPC. Defaults to 0 when not grabbed, setting to 1 or higher deactivates block collision when grabbed but causes the respective player to drop other objects. <Badge type="tip">Use field heldIndex</Badge>
====
  {FIELD} 0x12E
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Countdown timer during which thrown NPCs are unable to hurt the throwing player. Set to 30 when thrown.
====
  {FIELD} 0x130
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Index of grabbing player which should be marked as un-harmable while 0x12E is above 0.
====
  {FIELD} 0x132
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Which Player threw the NPC. Resets when NPC resumes normal behaviour. Used in Battle Mode.
====
  {FIELD} 0x134
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Used for NPC's being crushed. If inside a block while this is greater than or equal to 5, most NPC's will die (with exceptions, such as springs). Forcing to 0 can prevent the NPC from dying when thrown into a wall.
====
  {FIELD} 0x136
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} If true, the NPC can harm other NPC's. Usually true for thrown NPCs and projectile-generated NPCs. <Badge type="tip">Use field isProjectile</Badge>
====
   {SECT} State-related
====
  {FIELD} 0x138
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} The NPC's forced state/contained within value. See the table below for details. <Badge type="tip">Use field forcedState</Badge>

<details><summary>Forced state list</summary>

| Value | Description |
| --- | --- |
| 0 | Normal behaviour |
| 1 | Coming out of the top of a block (0x13C is how far it has come out). |
| 2 | Falling down from the player's item box (0x13C is a blinking timer, invisible if it is an interval of 3). |
| 3 | Coming out of the bottom of a block (0x13C is how far it has come out). |
| 4 | Coming out of a warp generator (0x13C is where it is being spawned from, 0x144 is the direction it's coming from (1,2,3,4 corresponds to up,left,down and right respectively)). |
| 5 | On Yoshi's tongue (0x13C is the player it belongs to, 0x144 is a countdown timer that returns it to state 0 if it reaches 0). |
| 6 | In Yoshi's mouth (0x13C is the player it belongs to). |
| 8 | Makes the NPC invisible (0x13C is a countdown timer that returns it to state 0 if it reaches 0) (used for subcon potion's "poof" effect). |
| 208 | In a mother brain jar, if not touching a jar it'll return to 0 (may only work fully properly for mother brain!). |

</details>

====
  {FIELD} 0x13C
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} General purpose "timer" for forced states. See 0x138 for how each state uses it. <Badge type="tip">Use field forcedCounter1</Badge>
====
  {FIELD} 0x144
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} General purpose "timer" for forced states. See 0x138 for how each state uses it. <Badge type="tip">Use field forcedCounter2</Badge>
====
   {SECT} Miscellaneous
====
  {FIELD} 0x146
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} The NPC's section <Badge type="tip">Use field section</Badge>
====
  {FIELD} 0x148
   {TYPE} [FIELD_FLOAT](/constants/memory-field-types.md)
   {DESC} Boss Hit count. Counts up until a per-ID hardcoded kill threshold is reached. Starts at 0 if the 'health' config property isn't set, otherwise it subtracts the health from the threshold (so if the NPC is given more health than its default, the starting value will be negative.)

<details><summary>Thresholds</summary>

| NPC (ID) | Threshold |
| --- | --- |
| Boom Boom (npc-15)  | 9 |
| Birdo (npc-39)  | 3 |
| Big Boo (npc-44)  | 3 |
| SMB3 Bowser (npc-86)  | 200 |
| SMB1 Bowser (npc-200)  | 12 |
| Wart (npc-201)  | 30 |
| Zoomer (npc-205)  | 3 |
| Glass Chamber (npc-208)  | 15 |
| Mother Brain (npc-209)  | 10 |
| Big Piranha Plants (npc-256, npc-257)  | 6 |
| Mouser (npc-262)  | 20 |
| Larry Koopa (npc-267, npc-268)  | 15 |
| Ludwig von Koopa (npc-280, npc-281)  | 15 |


====
  {FIELD} 0x14C
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Index of camera that just spawned the NPC.
====
  {FIELD} 0x14E
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} ID of the block the NPC was created from due to an ongoing P-Switch effect.
====
  {FIELD} 0x150
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Stores the index of a temporary block used during physics processing to allow NPCs to stand on npcblocktop NPCs.

====
  {FIELD} 0x152
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Likely used for an internal bug fix related to collisions next to walls.
====
  {FIELD} 0x154
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Is set to true when an NPC in a "No Turn Back" section is spawned. The "No Turn Back"-Effect is only capable of permanently killing NPCs with this flag set to true.
====
  {FIELD} 0x156
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Invincibility frame countdown for all sources of harm.
{ENDTABLE}

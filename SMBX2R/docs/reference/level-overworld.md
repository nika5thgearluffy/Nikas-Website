# Level (Overworld)

This page is for the Level tiles on the overworld. If you're looking for the Level class when accessed from within a level, go [here](reference/level-overworld.md).

## Static Members

These elements are static to the class itself and can be accessed like so:
```lua
function onStart()
    local numberOfLevels = Level.count()
    Misc.dialog(numberOfLevels)
end
```

### Static functions
{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} Level.count()
    {RET} [number](types/number.md) amount
   {DESC} Returns the number of levels on the overworld.
====
   {NAME} Level.get()
    {RET} [table](types/table.md) of [Level](reference/level-overworld.md) levels
   {DESC} Returns a table of all levels on the overworld.
====
   {NAME} Level.get(

[number](types/number.md) or [table](types/table.md) of [number](types/number.md) ids

)
    {RET} [table](types/table.md) of [Level](reference/level-overworld.md) levels
   {DESC} Returns a table of all levels on the overworld with matching ID(s).
====
   {NAME} Level.findByName(

[string](types/string.md) searchText

)
    {RET} [table](types/table.md) of [Level](reference/level-overworld.md) levels
   {DESC} Returns all levels where the title field matches the given searchText.
====
   {NAME} Level.findByFilename(

[string](types/string.md) searchText

)
    {RET} [table](types/table.md) of [Level](reference/level-overworld.md) levels
   {DESC} Returns all levels where the filename field matches the given searchText.
====
   {NAME} Level.getByName(

[string](types/string.md) title or [nil](types/nil.md)

)
    {RET} [Level](reference/level-overworld.md) levels
   {DESC} Returns the level with the given title. If the level is not found, nil is returned.
====
   {NAME} Level.getByFilename(

[string](types/string.md) filename or [nil](types/nil.md)

)
    {RET} [Level](reference/level-overworld.md) levels
   {DESC} Returns the level with the given filename. If the level is not found, nil is returned.
{ENDTABLE}

## Instance Members

Instance members must be accessed through a reference to a specific [Level](/reference/level-overworld.md) object.
```lua
local myLevel = Level.getByName("test")
if myLevel then
    myLevel.visible = true
end
```
<Note type="warning">Attempting to call instance members statically will result in an error!</Note>

### Instance Fields

<!-- (Consider an icon for "read only".) -->
{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE} [number](/types/number.md)
  {FIELD} x
     {RO} No
   {DESC} X-Coordinate
====
   {TYPE} [number](/types/number.md)
  {FIELD} y
     {RO} No
   {DESC} Y-Coordinate
====
   {TYPE} [number](/types/number.md)
  {FIELD} goToX
     {RO} No
   {DESC} X-Coordinate of the destination (if set to warp to a map coordinate)
====
   {TYPE} [number](/types/number.md)
  {FIELD} goToY
     {RO} No
   {DESC} Y-Coordinate of the destination (if set to warp to a map coordinate)
====
   {TYPE} [Win Type](/constants/level-victory.md)
  {FIELD} topExitType
     {RO} No
   {DESC} The exit type that triggers the top path.
====
   {TYPE} [Win Type](/constants/level-victory.md)
  {FIELD} leftExitType
     {RO} No
   {DESC} The exit type that triggers the left path.
====
   {TYPE} [Win Type](/constants/level-victory.md)
  {FIELD} bottomExitType
     {RO} No
   {DESC} The exit type that triggers the bottom path.
====
   {TYPE} [Win Type](/constants/level-victory.md)
  {FIELD} rightExitType
     {RO} No
   {DESC} The exit type that triggers the right path.
====
   {TYPE} [number](/types/number.md)
  {FIELD} levelWarpNumber
     {RO} No
   {DESC} The index of the warp at which to enter the level.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} isPathBackground
     {RO} No
   {DESC} Whether the level has a path background behind it.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} isBigBackground
     {RO} No
   {DESC} Whether the level has a big path background behind it.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} isGameStartPoint
     {RO} No
   {DESC} Whether the level is where the game begins.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} isAlwaysVisible
     {RO} No
   {DESC} Whether the level is always visible.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} visible
     {RO} No
   {DESC} Whether the level is currently visible.
====
   {TYPE} [string](/types/string.md)
  {FIELD} title
     {RO} Yes
   {DESC} The title that shows up in the world map HUD.
====
   {TYPE} [string](/types/string.md)
  {FIELD} filename
     {RO} Yes
   {DESC} The filename of the level file to load on enter.
====
   {TYPE} [number](/types/number.md)
  {FIELD} idx
     {RO} Yes
   {DESC} The level's index within the internal list of levels.
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
   {SECT} Position-related
====
  {FIELD} 0x00
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} Level X-Position <Badge type="tip">Use field x</Badge>
====
  {FIELD} 0x08
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} Level Y-Position <Badge type="tip">Use field y</Badge>
====
  {FIELD} 0x10
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} Level Height
====
  {FIELD} 0x18
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} Level Width
====
  {FIELD} 0x20
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} Level X-Speed (changing has no actual effect)
====
  {FIELD} 0x28
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} Level Y-Speed (changing has no actual effect)
====
   {SECT} Unsorted
====
  {FIELD} 0x30
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} The level's ID. <Badge type="tip">Use field id</Badge>
====
  {FIELD} 0x32
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} (?)
====
  {FIELD} 0x34
   {TYPE} [FIELD_STRING](/constants/memory-field-types.md)
   {DESC} The level's filename. <Badge type="tip">Use field filename</Badge>
====
  {FIELD} 0x38
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} The [Exit Type](/constants/level-victory.md) that triggers the top path. <Badge type="tip">Use field topExitType</Badge>
====
  {FIELD} 0x3A
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} The [Exit Type](/constants/level-victory.md) that triggers the left path. <Badge type="tip">Use field leftExitType</Badge>
====
  {FIELD} 0x3C
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} The [Exit Type](/constants/level-victory.md) that triggers the bottom path. <Badge type="tip">Use field bottomExitType</Badge>
====
  {FIELD} 0x3E
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} The [Exit Type](/constants/level-victory.md) that triggers the right path. <Badge type="tip">Use field rightExitType</Badge>
====
  {FIELD} 0x40
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Whether the level is currently visible. <Badge type="tip">Use field visible</Badge>
====
  {FIELD} 0x42
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} (?)
====
  {FIELD} 0x44
   {TYPE} [FIELD_STRING](/constants/memory-field-types.md)
   {DESC} The level's title. <Badge type="tip">Use field title</Badge>
====
  {FIELD} 0x48
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} The index of the warp at which to enter the level. <Badge type="tip">Use field levelWarpNumber</Badge>
====
  {FIELD} 0x4A
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} (?)
====
  {FIELD} 0x4C
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} X-Coordinate of the destination (if set to warp to a map coordinate) <Badge type="tip">Use field goToX</Badge>
====
  {FIELD} 0x54
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} Y-Coordinate of the destination (if set to warp to a map coordinate) <Badge type="tip">Use field goToY</Badge>
====
  {FIELD} 0x5C
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Whether the level has a path background behind it. <Badge type="tip">Use field isPathBackground</Badge>
====
  {FIELD} 0x5E
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Whether the level has a big path background behind it. <Badge type="tip">Use field isBigBackground</Badge>
====
  {FIELD} 0x60
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Whether the level is where the game begins. <Badge type="tip">Use field isGameStartPoint</Badge>
====
  {FIELD} 0x62
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Whether the level is always visible. <Badge type="tip">Use field isAlwaysVisible</Badge>
{ENDTABLE}

# Warp

The warp class provides fields and functions for managing warps in the current level.

## Static Members

These elements are static to the class itself and can be accessed like so:
```lua
function onStart()
    local numberOfWarps = Warp.count()
    Misc.dialog(numberOfWarps)
end
```

### Static functions
{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} Warp.count()
    {RET} [number](types/number.md) amount
   {DESC} Returns the number of warps.
====
   {NAME} Warp.get()
    {RET} [table](types/table.md) of [Warp](reference/warp.md) warps
   {DESC} Returns a table of all warps.
====
   {NAME} Warp.getIntersectingEntrance(

[number](types/number.md) x1,

[number](types/number.md) y1,

[number](types/number.md) x2,

[number](types/number.md) y2

)
    {RET} [table](types/table.md) of [Warp](reference/warp.md) warps
   {DESC} Returns a table of all warps with entrances within the rectangle defined between (x1, y1) (top-left) and (x2, y2) (bottom right).
====
   {NAME} Warp.getIntersectingExit(

[number](types/number.md) x1,

[number](types/number.md) y1,

[number](types/number.md) x2,

[number](types/number.md) y2

)
    {RET} [table](types/table.md) of [Warp](reference/warp.md) warps
   {DESC} Returns a table of all warps with exits within the rectangle defined between (x1, y1) (top-left) and (x2, y2) (bottom right).
{ENDTABLE}

## Instance Members

Instance members must be accessed through a reference to a specific [Warp](/reference/warp.md) object.
```lua
local warps = Warp.get()
for _, warp in ipairs(warps) do
    warp.entranceX = player.x
    warp.entranceY = player.y
end
```
<Note type="warning">Attempting to call instance members statically will result in an error!</Note>

### Instance Methods

[What is a method?](/types/function.md#methods)

<!-- (The "true" in some of these is not ideal. Consider some way to denote optional arguments and an easy way to see how a function changed depending on which arguments have what values.) -->
<!-- (Needs a control for named args.) -->

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
   {DESC} Returns a value of the Warp struct at a specific memory address-offset.
====
   {NAME} mem(

[hex](/types/number.md) offset,

[FieldType](/constants/memory-field-types.md) type,

[object](/types/object.md) value

)
    {RET} [nil](/types/nil.md)
   {DESC} Sets a value of the Warp struct at a specific memory address-offset.
{ENDTABLE}

### Instance Fields

<!-- (Consider an icon for "read only".) -->
{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE} [number](/types/number.md)
  {FIELD} entranceX
     {RO} No
   {DESC} X-Coordinate of the warp's entrance.
====
   {TYPE} [number](/types/number.md)
  {FIELD} entranceY
     {RO} No
   {DESC} Y-Coordinate of the warp's entrance.
====
   {TYPE} [number](/types/number.md)
  {FIELD} entranceWidth
     {RO} No
   {DESC} Width of the warp's entrance.
====
   {TYPE} [number](/types/number.md)
  {FIELD} entranceHeight
     {RO} No
   {DESC} Height of the warp's entrance.
====
   {TYPE} [number](/types/number.md)
  {FIELD} entranceSpeedX
     {RO} No
   {DESC} Horizontal speed of the warp's entrance.
====
   {TYPE} [number](/types/number.md)
  {FIELD} entranceSpeedY
     {RO} No
   {DESC} Vertical speed of the warp's entrance.
====
   {TYPE} [number](/types/number.md)
  {FIELD} entranceDirection
     {RO} No
   {DESC} Direction of the warp's entrance. 1, 2, 3, 4 correspond to up, left, down, right respectively.
====
   {TYPE} [number](/types/number.md)
  {FIELD} entranceSection
     {RO} Yes
   {DESC} Section in which the warp's entrance is located.
====
   {TYPE} [number](/types/number.md)
  {FIELD} exitX
     {RO} No
   {DESC} X-Coordinate of the warp's exit.
====
   {TYPE} [number](/types/number.md)
  {FIELD} exitY
     {RO} No
   {DESC} Y-Coordinate of the warp's exit.
====
   {TYPE} [number](/types/number.md)
  {FIELD} exitWidth
     {RO} No
   {DESC} Width of the warp's exit.
====
   {TYPE} [number](/types/number.md)
  {FIELD} exitHeight
     {RO} No
   {DESC} Height of the warp's exit.
====
   {TYPE} [number](/types/number.md)
  {FIELD} exitSpeedX
     {RO} No
   {DESC} Horizontal speed of the warp's exit.
====
   {TYPE} [number](/types/number.md)
  {FIELD} exitSpeedY
     {RO} No
   {DESC} Vertical speed of the warp's exit.
====
   {TYPE} [number](/types/number.md)
  {FIELD} exitDirection
     {RO} No
   {DESC} Direction of the warp's exit. 1, 2, 3, 4 correspond to up, left, down, right respectively.
====
   {TYPE} [number](/types/number.md)
  {FIELD} exitSection
     {RO} Yes
   {DESC} Section in which the warp's exit is located.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} isHidden
     {RO} No
   {DESC} Whether or not the warp is hidden.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} isValid
     {RO} Yes
   {DESC} Whether or not the warp is a valid object. Should be used when retrieving the object from a self-made variable on ticks after the frame Warp.get was used to retrieve it.
====
   {TYPE} [number](/types/number.md)
  {FIELD} warpType
     {RO} No
   {DESC} Type of the warp. 0=instant, 1=pipe, 2=door, 3=portal.
====
   {TYPE} [string](/types/string.md)
  {FIELD} layerName
     {RO} No
   {DESC} The name of the layer the warp is a part of.
====
   {TYPE} [Layer](/reference/layer.md)
  {FIELD} layer
     {RO} No
   {DESC} The layer object the warp is a part of.
====
   {TYPE} [string](/types/string.md)
  {FIELD} levelFilename
     {RO} No
   {DESC} The name of the level the warp is targeting (if any).
====
   {TYPE} [number](/types/number.md)
  {FIELD} warpNumber
     {RO} No
   {DESC} The index of the target warp (if targeting a different level).
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} fromOtherLevel
     {RO} No
   {DESC} Whether the warp is set to only be used as an entrance from another level.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} toOtherLevel
     {RO} No
   {DESC} Whether the warp is set to only be used as an exit to another level.
====
   {TYPE} [number](/types/number.md)
  {FIELD} worldMapX
     {RO} No
   {DESC} The world map x coordinate the warp points to (if any).
====
   {TYPE} [number](/types/number.md)
  {FIELD} worldMapY
     {RO} No
   {DESC} The world map y coordinate the warp points to (if any).
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} locked
     {RO} No
   {DESC} Whether the warp is locked.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} noYoshi
     {RO} No
   {DESC} Whether the warp does not allow mounts.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} allowItems
     {RO} No
   {DESC} Whether the warp does not allow items to be carried through.
====
   {TYPE} [number](/types/number.md)
  {FIELD} starsRequired
     {RO} No
   {DESC} Number of stars required to enter the warp.
{ENDTABLE}

### Instance Memory Offsets

These offsets can be manipulated by the instance's mem method. Only offsets that don't have fields for them are documented.
<Note type="warning">Be careful when manipulating memory offsets directly! Doing so may yield unexpected results.</Note>

{STARTTABLE}
  {FIELD} Field
   {TYPE} Fieldtype
   {DESC} Description
====
  {FIELD} 0x8A
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Number of stars collected in the level the warp leads to.
====
  {FIELD} 0x8C
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Total number of stars in the level the warp leads to.
{ENDTABLE}
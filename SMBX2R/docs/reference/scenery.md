# Scenery

The scenery class lets you access scenery objects on the overworld.

## Static Members

These elements are static to the class itself and can be accessed like so:
```lua
function onStart()
    local numberOfSceneries = Scenery.count()
    Misc.dialog(numberOfSceneries)
end
```

### Static functions
{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} Scenery.count()
    {RET} [number](types/number.md) amount
   {DESC} Returns the number of scenery items.
====
   {NAME} Scenery.get()
    {RET} [table](types/table.md) of [Scenery](reference/scenery.md) sceneries
   {DESC} Returns a table of all scenery items.
====
   {NAME} Scenery.get(

[number](types/number.md) or [table](types/table.md) of [number](types/number.md) ids

)
    {RET} [table](types/table.md) of [Scenery](reference/scenery.md) sceneries
   {DESC} Returns a table of all scenery items of the matching IDs.
====
   {NAME} Scenery.getIntersecting(

[number](types/number.md) x1,

[number](types/number.md) y1,

[number](types/number.md) x2,

[number](types/number.md) y2

)
    {RET} [table](types/table.md) of [Scenery](reference/scenery.md) sceneries
   {DESC} Returns a table of all scenery items within the rectangle defined between (x1, y1) (top-left) and (x2, y2) (bottom right).
{ENDTABLE}

## Instance Members

Instance members must be accessed through a reference to a specific [Scenery](/reference/scenery.md) object.
```lua
local sceneries = Scenery.get()
for _, scenery in ipairs(sceneries) do
    scenery.id = 1
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
  {FIELD} id
     {RO} No
   {DESC} ID of the scenery item.
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
  {FIELD} width
     {RO} No
   {DESC} Width of the scenery item.
====
   {TYPE} [number](/types/number.md)
  {FIELD} height
     {RO} No
   {DESC} Height of the scenery item.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} isValid
     {RO} Yes
   {DESC} Whether or not the scenery item is a valid object. Should be used when retrieving the object from a self-made variable on ticks after the frame Scenery.get was used to retrieve it.
====
   {TYPE} [number](/types/number.md)
  {FIELD} idx
     {RO} Yes
   {DESC} The scenery's index within the internal list of sceneries.
{ENDTABLE}

### Instance Memory Offsets

These offsets can be manipulated by the global mem method.
<Note type="warning">Be careful when manipulating memory offsets directly! Doing so may yield unexpected results.</Note>

{STARTTABLE}
  {FIELD} Field
   {TYPE} Fieldtype
   {DESC} Description
====
   {SECT} Position-related
====
  {FIELD} 0x00
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} Scenery X-Position <Badge type="tip">Use field x</Badge>
====
  {FIELD} 0x08
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} Scenery Y-Position <Badge type="tip">Use field y</Badge>
====
  {FIELD} 0x10
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} Scenery Width <Badge type="tip">Use field width</Badge>
====
  {FIELD} 0x18
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} Scenery Height <Badge type="tip">Use field height</Badge>
====
  {FIELD} 0x20
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} Scenery X-Speed (changing has no actual effect)
====
  {FIELD} 0x28
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} Scenery Y-Speed (changing has no actual effect)
====
   {SECT} Unsorted
====
  {FIELD} 0x30
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} The ID of the scenery. <Badge type="tip">Use field id</Badge>
====
  {FIELD} 0x32
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Whether the scenery is currently visible.
{ENDTABLE}

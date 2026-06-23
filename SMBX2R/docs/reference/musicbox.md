# Musicbox

The musicbox class lets you access musicbox objects on the overworld.

## Static Members

These elements are static to the class itself and can be accessed like so:
```lua
function onStart()
    local numberOfMusicBoxes = Musicbox.count()
    Misc.dialog(numberOfMusicBoxes)
end
```

### Static functions
{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} Musicbox.count()
    {RET} [number](types/number.md) amount
   {DESC} Returns the number of musicbox items.
====
   {NAME} Musicbox.get()
    {RET} [table](types/table.md) of [Musicbox](reference/musicbox.md) musicBoxes
   {DESC} Returns a table of all musicbox items.
====
   {NAME} Musicbox.get(

[number](types/number.md) or [table](types/table.md) of [number](types/number.md) ids

)
    {RET} [table](types/table.md) of [Musicbox](reference/musicbox.md) musicBoxes
   {DESC} Returns a table of all musicbox items of the matching IDs.
====
   {NAME} Musicbox.getIntersecting(

[number](types/number.md) x1,

[number](types/number.md) y1,

[number](types/number.md) x2,

[number](types/number.md) y2

)
    {RET} [table](types/table.md) of [Musicbox](reference/musicbox.md) musicBoxes
   {DESC} Returns a table of all musicbox items within the rectangle defined between (x1, y1) (top-left) and (x2, y2) (bottom right).
{ENDTABLE}

## Instance Members

Instance members must be accessed through a reference to a specific [Musicbox](/reference/musicbox.md) object.
```lua
local musicBoxes = Musicbox.get()
for _, musicbox in ipairs(musicBoxes) do
    musicbox.id = 1
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
   {DESC} ID of the musicbox item. Different IDs play different music.
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
   {DESC} Width of the musicbox item.
====
   {TYPE} [number](/types/number.md)
  {FIELD} height
     {RO} No
   {DESC} Height of the musicbox item.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} isValid
     {RO} Yes
   {DESC} Whether or not the musicbox item is a valid object. Should be used when retrieving the object from a self-made variable on ticks after the frame Musicbox.get was used to retrieve it.
====
   {TYPE} [number](/types/number.md)
  {FIELD} idx
     {RO} Yes
   {DESC} The musicbox's index within the internal list of musicboxes.
{ENDTABLE}

### Instance Memory Offsets

These offsets can be manipulated by the global mem method.
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
   {DESC} Musicbox X-Position <Badge type="tip">Use field x</Badge>
====
  {FIELD} 0x08
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} Musicbox Y-Position <Badge type="tip">Use field y</Badge>
====
  {FIELD} 0x10
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} Musicbox Width <Badge type="tip">Use field width</Badge>
====
  {FIELD} 0x18
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} Musicbox Height <Badge type="tip">Use field height</Badge>
====
  {FIELD} 0x20
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} Musicbox X-Speed (changing has no actual effect)
====
  {FIELD} 0x28
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} Musicbox Y-Speed (changing has no actual effect)
====
   {SECT} Unsorted
====
  {FIELD} 0x30
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} The musicbox's ID. <Badge type="tip">Use field id</Badge>
====
  {FIELD} 0x32
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} (?)
{ENDTABLE}

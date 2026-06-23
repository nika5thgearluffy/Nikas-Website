# Liquid

The liquid class lets you access liquid (water, quicksand) boxes in your level.

## Static Members

These elements are static to the class itself and can be accessed like so:
```lua
function onStart()
    local numberOfLiquids = Liquid.count()
    Misc.dialog(numberOfLiquids)
end
```

### Static functions
{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} Liquid.count()
    {RET} [number](types/number.md) amount
   {DESC} Returns the number of liquid boxes.
====
   {NAME} Liquid.get()
    {RET} [table](types/table.md) of [Liquid](reference/liquid.md) liquids
   {DESC} Returns a table of all liquids.
====
   {NAME} Liquid.getIntersecting(

[number](types/number.md) x1,

[number](types/number.md) y1,

[number](types/number.md) x2,

[number](types/number.md) y2

)
    {RET} [table](types/table.md) of [Liquid](reference/liquid.md) liquids
   {DESC} Returns a table of all liquids within the rectangle defined between (x1, y1) (top-left) and (x2, y2) (bottom right).
{ENDTABLE}

## Instance Members

Instance members must be accessed through a reference to a specific [Liquid](/reference/liquid.md) object.
```lua
local liquids = Liquid.get()
for _, liquid in ipairs(liquids) do
    liquid.isQuicksand = true
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
  {FIELD} width
     {RO} No
   {DESC} Width of the liquid box.
====
   {TYPE} [number](/types/number.md)
  {FIELD} height
     {RO} No
   {DESC} Height of the liquid box.
====
   {TYPE} [number](/types/number.md)
  {FIELD} speedX
     {RO} No
   {DESC} Horizontal speed of the liquid box.
====
   {TYPE} [number](/types/number.md)
  {FIELD} speedY
     {RO} No
   {DESC} Vertical speed of the liquid box.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} isHidden
     {RO} No
   {DESC} Whether or not the box is hidden.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} isValid
     {RO} Yes
   {DESC} Whether or not the box is a valid object. Should be used when retrieving the object from a self-made variable on ticks after the frame Liquid.get was used to retrieve it.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} isQuicksand
     {RO} No
   {DESC} Whether or not the box is quicksand. If false, it's water.
====
   {TYPE} [string](/types/string.md)
  {FIELD} layerName
     {RO} No
   {DESC} The name of the layer the liquid is a part of.
====
   {TYPE} [Layer](/reference/layer.md)
  {FIELD} layer
     {RO} No
   {DESC} The layer object the liquid is a part of.
{ENDTABLE}

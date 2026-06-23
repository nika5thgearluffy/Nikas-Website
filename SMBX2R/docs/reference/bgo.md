# BGO

BGOs (background objects) are scenery elements for levels. They are defined by files prefixed with 'background-'.

## Static Members

These elements are static to the class itself and can be accessed like so:
```lua
local bgos = BGO.get()
```

### Static Functions
| Function | Return Values | Description |
| --- | --- | --- |
| BGO.get() | [table](/types/table.md) of [BGO](/reference/bgo.md) bgos | Returns a table of references to all BGOs in the level. |
| BGO.get([number](/types/number.md) or [table](/types/table.md) ids) | [table](/types/table.md) of [BGO](/reference/bgo.md) bgos | Returns a table of references to all BGOs of the given id(s). |
| BGO.getIntersecting([number](/types/number.md) x1, [number](/types/number.md) y1, [number](/types/number.md) x2, [number](/types/number.md) y2) | [table](/types/table.md) of [BGO](/reference/bgo.md) bgos | Returns a table of references to all BGOs that are within the rectangle defined by the 4 coordinates, where x1 and y1 must be smaller than x2 and y2 respectively. |
| BGO.getByFilterMap([table](/types/table.md) idMap) | [table](/types/table.md) of [BGO](/reference/bgo.md) bgos | Returns a table of references to all BGOs of the given id(s). Unlike get, the table in this should be formatted as a lookup table, where the BGO indices are the keys. |
| BGO.iterate() | [Iterator](/concepts/iterators.md) for [BGO](/reference/bgo.md) bgos | Returns an iterator for iterating over a table of references to all BGOs in the level. |
| BGO.iterate([number](/types/number.md) or [table](/types/table.md) ids) | [Iterator](/concepts/iterators.md) for [BGO](/reference/bgo.md) bgos | Returns an iterator for iterating over a table of references to all BGOs of the given id(s). |
| BGO.iterateIntersecting([number](/types/number.md) x1, [number](/types/number.md) y1, [number](/types/number.md) x2, [number](/types/number.md) y2) | [Iterator](/concepts/iterators.md) for [BGO](/reference/bgo.md) bgos | Returns an iterator for iterating over a table of references to all BGOs that are within the rectangle defined by the 4 coordinates, where x1 and y1 must be smaller than x2 and y2 respectively. |
| BGO.iterateByFilterMap([table](/types/table.md) idMap) | [Iterator](/concepts/iterators.md) for [BGO](/reference/bgo.md) bgos | Returns an iterator for iterating over a table of references to all BGOs of the given id(s). Unlike iterate, the table in this should be formatted as a lookup table, where the BGO indices are the keys. |

### Static Fields

{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE} [table](/types/table.md) of [BGO Config](/features/bgo-config.md)
  {FIELD} BGO.config
     {RO} No
   {DESC} Lua representation of all BGO config. The way to access individual fields is as follows: BGO.config[id].field. (ex. BGO.config[1].priority = 5). Fields can be read and set.
{ENDTABLE}

## Instance Members

Instance members must be accessed through a reference to a specific [BGO](/reference/bgo.md) object.
```lua
for k,v in ipairs(BGO.get(1)) do
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
   {NAME} transform(

[number](/types/number.md) newID,

[bool](/types/bool.md) centered

)
    {RET} [nil](/types/nil.md)
   {DESC} Transforms the BGO into a BGO of a different ID. Centered defaults to true and will cause the transformation to happen relative to the center of the old and new BGO sizes.
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
   {DESC} Validates that the BGO object exists.
====
   {TYPE} [number](/types/number.md)
  {FIELD} idx
     {RO} Yes
   {DESC} The BGO's index in the internal list of BGOs.
====
   {TYPE} [number](/types/number.md)
  {FIELD} id
     {RO} No
   {DESC} The BGO's ID.
====
   {TYPE} [table](/types/table.md)
  {FIELD} data
     {RO} No
   {DESC} The BGO's [Data Table](/concepts/data-table.md).
====
   {TYPE} [number](/types/number.md)
  {FIELD} x
     {RO} No
   {DESC} The BGO's x coordinate.
====
   {TYPE} [number](/types/number.md)
  {FIELD} y
     {RO} No
   {DESC} The BGO's y coordinate.
====
   {TYPE} [number](/types/number.md)
  {FIELD} width
     {RO} No
   {DESC} The BGO's width.
====
   {TYPE} [number](/types/number.md)
  {FIELD} height
     {RO} No
   {DESC} The BGO's height.
====
   {TYPE} [number](/types/number.md)
  {FIELD} speedX
     {RO} No
   {DESC} The BGO's horizontal speed. Unused.
====
   {TYPE} [number](/types/number.md)
  {FIELD} speedY
     {RO} No
   {DESC} The BGO's vertical speed. Unused.
====
   {TYPE} [Layer](/reference/layer.md)
  {FIELD} layer
     {RO} No
   {DESC} The layer of the BGO.
====
   {TYPE} [Layer](/reference/layer.md)
  {FIELD} layerObj
     {RO} No
   {DESC} The layer of the BGO.
====
   {TYPE} [string](/types/string.md)
  {FIELD} layerName
     {RO} No
   {DESC} The name of the BGO's layer.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} isHidden
     {RO} No
   {DESC} Whether or not the BGO is currently visible.
====
   {TYPE} [Light Source](/reference/darkness.md#light)
  {FIELD} lightSource
     {RO} No
   {DESC} The Light Source attached to the BGO.
{ENDTABLE}
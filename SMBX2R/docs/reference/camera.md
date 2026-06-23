# Camera

The camera is the area of the screen that is being rendered. It is usually fixed to the player, but may be moved differently depending on section boundaries or autoscroll. Internally, a camera's position is updated just before its respective onCameraUpdate call. Thus, using onCameraUpdate is recommended for moving the camera, and onCameraDraw is recommended for drawing to a camera's viewport.

## Constants

The camera class defines global constants for quick access to certain features.

| Constant | Type | Value |
| --- | --- | --- |
| camera | [Camera](/reference/camera.md) | The main camera. |
| camera2 | [Camera](/reference/camera.md) | The second player's camera. If only one camera is in the level, this constant is [nil](/types/nil.md) |

## Static Members

These elements are static to the class itself and can be accessed like so:
```lua
local cameras = Camera.get()
```

<!-- (Unlike instance functions and fields, these have 'Camera' prepended, which is inconsistent but potentially helpful.) -->
### Static Functions
| Function | Return Values | Description |
| --- | --- | --- |
| Camera.get() | [table](/types/table.md) of [Camera](/reference/camera.md) cameras | Returns a table of references to all active cameras. |


## Instance Members

Instance members must be accessed through a reference to a specific [Camera](/reference/camera.md) object.
```lua
camera.x = player.x - 24
camera.y = player.y - 24
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
   {DESC} Returns a value of the Camera struct at a specific memory address-offset.
====
   {NAME} mem(

[hex](/types/number.md) offset,

[FieldType](/constants/memory-field-types.md) type,

[object](/types/object.md) value

)
    {RET} [nil](/types/nil.md)
   {DESC} Sets a value of the Camera struct at a specific memory address-offset.
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
   {DESC} Validates that the camera object exists.
====
   {TYPE} [number](/types/number.md)
  {FIELD} idx
     {RO} Yes
   {DESC} The camera's index in the internal list of cameras.
====
   {TYPE} [number](/types/number.md)
  {FIELD} x
     {RO} No
   {DESC} The camera's x coordinate (left edge of the screen).
====
   {TYPE} [number](/types/number.md)
  {FIELD} y
     {RO} No
   {DESC} The camera's y coordinate (top edge of the screen).
====
   {TYPE} [number](/types/number.md)
  {FIELD} width
     {RO} No
   {DESC} The width of the camera's viewport.
====
   {TYPE} [number](/types/number.md)
  {FIELD} height
     {RO} No
   {DESC} The height of the camera's viewport.
====
   {TYPE} [number](/types/number.md)
  {FIELD} renderX
     {RO} No
   {DESC} The x-coordinate of the left edge of the camera, relative to the SMBX window.
====
   {TYPE} [number](/types/number.md)
  {FIELD} renderY
     {RO} No
   {DESC} The y-coordinate of the top edge of the camera, relative to the SMBX window.
====
   {TYPE} [RECT](/types/rect.md)
  {FIELD} bounds
     {RO} Yes
   {DESC} Returns a RECT consisting of the camera's left, top, right and bottom edges (relative to the scene).
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} isSplit
     {RO} No
   {DESC} Whether or not the camera is split (multiplayer).
{ENDTABLE}
<!-- (These badges could be used/modified for deprecated items of other kinds, too!) -->

### Instance Memory Offsets

These offsets can be manipulated by the instance's mem method.
<Note type="warning">Be careful when manipulating memory offsets directly! Doing so may yield unexpected results.</Note>
<Note type="tip">Please keep in mind that some of these fields are not fully researched. These fields are marked with a (?).</Note>

{STARTTABLE}
  {FIELD} Field
   {TYPE} Fieldtype
   {DESC} Description
====
  {FIELD} 0x00
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} RenderX <Badge type="tip">Use field renderX</Badge>
====
  {FIELD} 0x08
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} RenderY <Badge type="tip">Use field renderY</Badge>
====
  {FIELD} 0x10
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} Width <Badge type="tip">Use field width</Badge>
====
  {FIELD} 0x18
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} Height <Badge type="tip">Use field height</Badge>
====
  {FIELD} 0x20
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Is split screen? <Badge type="tip">Use field isSplit</Badge>
====
  {FIELD} 0x22
   {TYPE} Unknown
   {DESC} Unknown/Unused (?)
====
  {FIELD} 0x24
   {TYPE} Unknown
   {DESC} Unknown/Unused (?)
====
  {FIELD} 0x26
   {TYPE} Unknown
   {DESC} Unknown/Unused (?)
====
  {FIELD} 0x28
   {TYPE} Unknown
   {DESC} Unknown/Unused (?)
====
  {FIELD} 0x2A
   {TYPE} Unknown
   {DESC} Unknown/Unused (?)
====
  {FIELD} 0x2C
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} The player's Y position difference. This will only work when the cameras are split vertically. Otherwise, it returns 0. The number caps at -150 or 150.
====
  {FIELD} 0x34
   {TYPE} [FIELD_DWORD](/constants/memory-field-types.md)
   {DESC} Starts at 0 and then decreases to 0. May be related to two cameras being in different sections (?)
{ENDTABLE}
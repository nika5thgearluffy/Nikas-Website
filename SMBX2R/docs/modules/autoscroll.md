# Autoscroll

As a module, autoscroll needs to be loaded in order to be accessible in your level or episode:
```lua
local autoscroll = require("autoscroll")
```

The autoscroll library is used to create flexible autoscrolling that can change in direction and speed.

Note that autoscroll.lua is currently not fully compatible with splitscreen cameras.

## Quick start

The fastest way to set up an autoscrolling effect is by calling one of the directional autoscroll initialization functions in a lunalua event like onStart or onEvent.

```lua
local autoscroll = require("autoscroll")

function onStart()
   autoscroll.scrollRight(1)
end
```

## Functions

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} getCameraXY(

   [number](/types/number.md) playerIndex

   )
    {RET} [number](/types/number.md) x, [number](/types/number.md) y
   {DESC} Returns the position of the camera for the player of the given index.
====
   {NAME} lockScreen(

   [number](/types/number.md) playerIndex

)
    {RET} [nil](/types/nil.md)
   {DESC} Locks the screen of the player of the given index to its current position. Use this function before initiating an autoscroll to prevent camera movement on the non-scrolling axis.
====
   {NAME} unlockSection(

   [number](/types/number.md) section,

   [number](/types/number.md) speed

)
    {RET} [nil](/types/nil.md)
   {DESC} Reverts a section's bounds to those defined in the editor originally. Defaults to the player section, and a speed of 0 (instant).
====
   {NAME} scrollRight(

   [number](/types/number.md) speed,

   [number](/types/number.md) rightEdge,

   [number](/types/number.md) section

   )
    {RET} [nil](/types/nil.md)
   {DESC} Starts an autoscroll to the right by the given speed. Optionally, the coordinate which the right edge of the camera needs to pass for the camera to stop scrolling, and the section which the autoscroll should be initiated in can be provided. By default, the autoscroll scrolls to the edge of the section as it is defined in the editor, and uses the first player's current section to initiate the scroll in.
====
   {NAME} scrollLeft(

   [number](/types/number.md) speed,

   [number](/types/number.md) leftEdge,

   [number](/types/number.md) section

   )
    {RET} [nil](/types/nil.md)
   {DESC} Starts an autoscroll to the left by the given speed. Optionally, the coordinate which the left edge of the camera needs to pass for the camera to stop scrolling, and the section which the autoscroll should be initiated in can be provided. By default, the autoscroll scrolls to the edge of the section as it is defined in the editor, and uses the first player's current section to initiate the scroll in.
====
   {NAME} scrollUp(

   [number](/types/number.md) speed,

   [number](/types/number.md) topEdge,

   [number](/types/number.md) section

   )
    {RET} [nil](/types/nil.md)
   {DESC} Starts an autoscroll upwards by the given speed. Optionally, the coordinate which the top edge of the camera needs to pass for the camera to stop scrolling, and the section which the autoscroll should be initiated in can be provided. By default, the autoscroll scrolls to the edge of the section as it is defined in the editor, and uses the first player's current section to initiate the scroll in.
====
   {NAME} scrollDown(

   [number](/types/number.md) speed,

   [number](/types/number.md) bottomEdge,

   [number](/types/number.md) section

   )
    {RET} [nil](/types/nil.md)
   {DESC} Starts an autoscroll down by the given speed. Optionally, the coordinate which the bottom edge of the camera needs to pass for the camera to stop scrolling, and the section which the autoscroll should be initiated in can be provided. By default, the autoscroll scrolls to the edge of the section as it is defined in the editor, and uses the first player's current section to initiate the scroll in.
====
   {NAME} scrollTo(

   [number](/types/number.md) leftEdge,

   [number](/types/number.md) bottomEdge,

   [number](/types/number.md) speed,

   [number](/types/number.md) section

   )
    {RET} [nil](/types/nil.md)
   {DESC} Starts an autoscroll towards a location defined by the leftEdge and bottomEdge, by a given speed. When the camera reaches the given coordinates, it will stop scrolling. Optionally, the section can be provided. By default, the autoscroll and uses the first player's current section to initiate the scroll in.
====
   {NAME} scrollToBox(

   [number](/types/number.md) leftEdge,

   [number](/types/number.md) topEdge,

   [number](/types/number.md) rightEdge,

   [number](/types/number.md) bottomEdge,

   [number](/types/number.md) speed,

   [number](/types/number.md) section

   )
    {RET} [nil](/types/nil.md)
   {DESC} Starts an autoscroll towards a location defined by the camera's bounding box by the end of the scroll, by a given speed. When the camera reaches the given coordinates, it will stop scrolling. Optionally, the section can be provided. By default, the autoscroll and uses the first player's current section to initiate the scroll in.
{ENDTABLE}
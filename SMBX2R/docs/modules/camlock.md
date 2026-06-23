# Camlock

As a module, camlock needs to be loaded in order to be accessible in your level or episode:
```lua
local camlock = require("camlock")
```

Camlock is a library for defining simple camera zones in levels and on the overworld. Camera zones are defined by their top/left edge and their width and height.

Camera zones are required to be at least the size of a camera, meaning that width should be at least 800 and the height should be at least 600. Note that this also applies on world maps, even if the world map border is enabled and the visible part of the map is smaller.

## Quick Start

Use the setup below to create a simple camera zone. This one encompasses the conventional beginning of Section 0 in a level, so it can be used to test if camera zones are working in general.

```lua
local camlock = require("camlock")

function onStart()
   camlock.addZone(-200000, -200600, 1200, 600)
end
```

## Functions

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} addZone(

   [number](/types/number.md) leftEdge,

   [number](/types/number.md) topEdge,

   [number](/types/number.md) width,

   [number](/types/number.md) height,

   [number](/types/number.md) speed

   )
    {RET} [nil](/types/nil.md)
   {DESC} Creates a new camera zone at the given coordinates with the specified size. The speed determines how quickly the camera moves into/out of the zone, where 1 is instant and 0 is that it ignores the zone. Default is 0.05.
====
   {NAME} addZone(

   [table](/types/table.md) bounds,

   [number](/types/number.md) speed

   )
    {RET} [nil](/types/nil.md)
   {DESC} Creates a new camera zone at the given coordinates. The bounds table must have x, y, width and height fields. The speed determines how quickly the camera moves into/out of the zone, where 1 is instant and 0 is that it ignores the zone. Default is 0.05.
{ENDTABLE}
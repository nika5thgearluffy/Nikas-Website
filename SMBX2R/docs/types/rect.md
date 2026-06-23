# RECT

Rects are rectangle definitions. They are most prominently used by sections. Since the individual fields of the rectangle are number values, setting rects must be done by overwriting the entire rect, like so:

```lua
local sec0 = Section(0)
local sectionBounds = sec0.boundary
sectionBounds.left = player.x - 400
sectionBounds.right = sectionBounds.left + 800
sec0.boundary = sectionBounds
```

## Instance fields

These fields are accessible for each rect object.

| Field | Type | Description |
| --- | --- | --- |
| left | [number](/types/number.md) | The left edge of the rectangle. |
| right | [number](/types/number.md) | The right edge of the rectangle. |
| top | [number](/types/number.md) | The top edge of the rectangle. |
| bottom | [number](/types/number.md) | The bottom edge of the rectangle. |
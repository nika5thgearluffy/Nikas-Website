# Texture

Variables that store a texture can be used in draw functions to draw the texture to the screen. The dimensions of a texture can also be accessed.

The variables of [SpriteOverride](/reference/graphics.md#spriteoverride) are also textures.

In most cases, textures are best drawn in a [Lunalua Event](/reference/lunalua-events.md) that also runs while the game is paused, such as onDraw.

```lua
local myImage = Graphics.loadImageResolved("myTexture.png")

function onDraw()
    Graphics.drawImage(myImage, 0, 0)
end
```

## Instance fields

These fields are accessible for each texture object.

| Field | Type | Description |
| --- | --- | --- |
| width | [number](/types/number.md) | The width of the texture. |
| height | [number](/types/number.md) | The height of the texture. |
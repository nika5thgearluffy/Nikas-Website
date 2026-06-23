# Sprite

The Sprite class is designed for more in-depth drawing functions, without the use of `Graphics.glDraw`. It is used to create objects that can be moved, rotated, animated, stretched, and applied to an object hierarchy using [Transforms](/reference/transform.md#transform-2).

### Static functions

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} Sprite(

[named](/types/table.md) args
       
)
    {RET} [Sprite](/reference/sprite.md) sprite
   {DESC} Creates a new Sprite object. The supplied arguments will determine the shape of the object.
   
<details><summary>Arguments</summary>

| Argument | Description |
| --- | --- |
| [number](/types/number.md) width  | Width of a Box-shaped Sprite. If not supplied, the width will automatically match one frame of the supplied texture, or 128 if no texture is supplied. |
| [number](/types/number.md) height  | Height of a Box-shaped Sprite. If not supplied, the height will automatically match one frame of the supplied texture, or 128 if no texture is supplied. |
| [number](/types/number.md) radius  | Radius of a Circle-shaped Sprite. |
| [table](/types/table.md) of [Vector2](/reference/vector.md#vector2) verts  | A list of vertex coordinates relative to the pivot point that determine the shape of a Poly-shaped Sprite. |
| [Vector2](/reference/vector.md#vector2) position  | The position of the Sprite object. Defaults to (0,0). |
| [number](/types/number.md) x  | The x-position of the Sprite object. Only used if `position` is not set. |
| [number](/types/number.md) y  | The y-position of the Sprite object. Only used if `position` is not set. |
| [number](/types/number.md) rotation  | The rotation of the Sprite object in degrees. Defaults to 0. |
| [Texture](/types/Texture.md) texture  | The image to display on the Sprite. |
| [Vector2](/reference/vector.md#vector2) pivot  | The pivot point to anchor the Sprite to. This determines the centre of rotation and scale for the sprite, as well as the position centre. This can accept any vector, with (0,0) meaning top left and (1,1) meaning bottom right, or it can accept a [Pivot Constant](/reference/sprite.md#pivot_constant). Defaults to the Pivot Constant `TOPLEFT`. This does not apply for Poly-shaped Sprites. |
| [Vector2](/reference/vector.md#vector2) texpivot  | The pivot point to anchor the texture within the Sprite to. This determines the centre of rotation and scale for the image, as well as the position centre. This can accept any vector, with (0,0) meaning top left and (1,1) meaning bottom right, or it can accept a [Pivot Constant](/reference/sprite.md#pivot_constant). Defaults to the Pivot Constant `TOPLEFT`. |
| [number](/types/number.md) or [table](/types/table.md) of [number](/types/number.md) frames | Determines the number of frames the texture contains. If a single number is provided, the frames will be assumed to stack vertically. Otherwise, a two-number table can be provided, where the first number provides the horizontal frame count and the second provides the vertical frame count. For example, providing `{3,4}` will define a grid 3 frames across by 4 frames down. |
| [number](/types/number.md) borderwidth | The width of the border to create around the Sprite (0 will not generate a border). This will not apply to Poly-shaped Sprites. |
| [Texture](/types/Texture.md) bordertexture  | The image to display on the Sprite border. For Box-shaped Sprites, the texture will be split into thirds and stretched around the Sprite, similar to Sizable Blocks, but stretching rather than tiling. For Circle-shaped Sprites, the texture will be tiled around the circle, flipping back and forth. Poly-shaped Sprites cannot have a border. |


====
   {NAME} Sprite.box(

[named](/types/table.md) args
       
)
    {RET} [Sprite](/reference/sprite.md) sprite
   {DESC} Creates a new Box-shaped Sprite object
   
<details><summary>Arguments</summary>

| Argument | Description |
| --- | --- |
| [number](/types/number.md) width  | Width of the Sprite. If not supplied, the width will automatically match one frame of the supplied texture, or 128 if no texture is supplied. |
| [number](/types/number.md) height  | Height of the Sprite. If not supplied, the height will automatically match one frame of the supplied texture, or 128 if no texture is supplied. |
| [Vector2](/reference/vector.md#vector2) position  | The position of the Sprite object. Defaults to (0,0). |
| [number](/types/number.md) x  | The x-position of the Sprite object. Only used if `position` is not set. |
| [number](/types/number.md) y  | The y-position of the Sprite object. Only used if `position` is not set. |
| [number](/types/number.md) rotation  | The rotation of the Sprite object in degrees. Defaults to 0. |
| [Texture](/types/Texture.md) texture  | The image to display on the Sprite. |
| [Vector2](/reference/vector.md#vector2) pivot  | The pivot point to anchor the Sprite to. This determines the centre of rotation and scale for the sprite, as well as the position centre. This can accept any vector, with (0,0) meaning top left and (1,1) meaning bottom right, or it can accept a [Pivot Constant](/reference/sprite.md#pivot_constant). Defaults to the Pivot Constant `TOPLEFT`. |
| [Vector2](/reference/vector.md#vector2) texpivot  | The pivot point to anchor the texture within the Sprite to. This determines the centre of rotation and scale for the image, as well as the position centre. This can accept any vector, with (0,0) meaning top left and (1,1) meaning bottom right, or it can accept a [Pivot Constant](/reference/sprite.md#pivot_constant). Defaults to the Pivot Constant `TOPLEFT`. |
| [number](/types/number.md) or [table](/types/table.md) of [number](/types/number.md) frames | Determines the number of frames the texture contains. If a single number is provided, the frames will be assumed to stack vertically. Otherwise, a two-number table can be provided, where the first number provides the horizontal frame count and the second provides the vertical frame count. For example, providing `{3,4}` will define a grid 3 frames across by 4 frames down. |
| [number](/types/number.md) borderwidth | The width of the border to create around the Sprite (0 will not generate a border). |
| [Texture](/types/Texture.md) bordertexture  | The image to display on the Sprite border. The texture will be split into thirds and stretched around the Sprite, similar to Sizable Blocks, but stretching rather than tiling. |


====
   {NAME} Sprite.circle(

[named](/types/table.md) args
       
)
    {RET} [Sprite](/reference/sprite.md) sprite
   {DESC} Creates a new Circle-shaped Sprite object.
   
<details><summary>Arguments</summary>

| Argument | Description |
| --- | --- |
| [number](/types/number.md) radius  | Radius of the Sprite. |
| [Vector2](/reference/vector.md#vector2) position  | The position of the Sprite object. Defaults to (0,0). |
| [number](/types/number.md) x  | The x-position of the Sprite object. Only used if `position` is not set. |
| [number](/types/number.md) y  | The y-position of the Sprite object. Only used if `position` is not set. |
| [number](/types/number.md) rotation  | The rotation of the Sprite object in degrees. Defaults to 0. |
| [Texture](/types/Texture.md) texture  | The image to display on the Sprite. |
| [Vector2](/reference/vector.md#vector2) pivot  | The pivot point to anchor the Sprite to. This determines the centre of rotation and scale for the sprite, as well as the position centre. This can accept any vector, with (0,0) meaning top left and (1,1) meaning bottom right, or it can accept a [Pivot Constant](/reference/sprite.md#pivot_constant). Defaults to the Pivot Constant `CENTER`. |
| [Vector2](/reference/vector.md#vector2) texpivot  | The pivot point to anchor the texture within the Sprite to. This determines the centre of rotation and scale for the image, as well as the position centre. This can accept any vector, with (0,0) meaning top left and (1,1) meaning bottom right, or it can accept a [Pivot Constant](/reference/sprite.md#pivot_constant). Defaults to the Pivot Constant `CENTER`. |
| [number](/types/number.md) or [table](/types/table.md) of [number](/types/number.md) frames | Determines the number of frames the texture contains. If a single number is provided, the frames will be assumed to stack vertically. Otherwise, a two-number table can be provided, where the first number provides the horizontal frame count and the second provides the vertical frame count. For example, providing `{3,4}` will define a grid 3 frames across by 4 frames down. |
| [number](/types/number.md) borderwidth | The width of the border to create around the Sprite (0 will not generate a border). |
| [Texture](/types/Texture.md) bordertexture  | The image to display on the Sprite border. The texture will be tiled around the circle, flipping back and forth. |


====
   {NAME} Sprite.poly(

[named](/types/table.md) args
       
)
    {RET} [Sprite](/reference/sprite.md) sprite
   {DESC} Creates a new Poly-shaped Sprite object.
   
<details><summary>Arguments</summary>

| Argument | Description |
| --- | --- |
| [table](/types/table.md) of [Vector2](/reference/vector.md#vector2) verts  | A list of vertex coordinates relative to the pivot point that determine the shape of a Poly-shaped Sprite. |
| [Vector2](/reference/vector.md#vector2) position  | The position of the Sprite object. Defaults to (0,0). |
| [number](/types/number.md) x  | The x-position of the Sprite object. Only used if `position` is not set. |
| [number](/types/number.md) y  | The y-position of the Sprite object. Only used if `position` is not set. |
| [number](/types/number.md) rotation  | The rotation of the Sprite object in degrees. Defaults to 0. |
| [Texture](/types/Texture.md) texture  | The image to display on the Sprite. |
| [Vector2](/reference/vector.md#vector2) texpivot  | The pivot point to anchor the texture within the Sprite to. This determines the centre of rotation and scale for the image, as well as the position centre. This can accept any vector, with (0,0) meaning top left and (1,1) meaning bottom right, or it can accept a [Pivot Constant](/reference/sprite.md#pivot_constant). Defaults to the Pivot Constant `CENTER`. |
| [number](/types/number.md) or [table](/types/table.md) of [number](/types/number.md) frames | Determines the number of frames the texture contains. If a single number is provided, the frames will be assumed to stack vertically. Otherwise, a two-number table can be provided, where the first number provides the horizontal frame count and the second provides the vertical frame count. For example, providing `{3,4}` will define a grid 3 frames across by 4 frames down. |


====
   {NAME} Sprite.bar(

[named](/types/table.md) args
       
)
    {RET} [SpriteBar](/reference/sprite.md#spritebar) bar
   {DESC} Creates a new Progress Bar.
   
<details><summary>Arguments</summary>

| Argument | Description |
| --- | --- |
| [number](/types/number.md) width  | Width of the Bar. Defaults to 128. |
| [number](/types/number.md) height  | Height of the Bar. Defaults to 16. |
| [number](/types/number.md) x  | The x-position of the Bar object. |
| [number](/types/number.md) y  | The y-position of the Bar object. |
| [number](/types/number.md) rotation  | The rotation of the Bar object in degrees. Defaults to 0. |
| [number](/types/number.md) value  | The value displayed on the Bar, between 0 and 1. Defaults to 1. |
| [Vector2](/reference/vector.md#vector2) pivot  | The pivot point to anchor the Bar to. This determines the centre of rotation and scale for the bar, as well as the position centre. This can accept any vector, with (0,0) meaning top left and (1,1) meaning bottom right, or it can accept a [Pivot Constant](/reference/sprite.md#pivot_constant). Defaults to the Pivot Constant `TOPLEFT`. |
| [Vector2](/reference/vector.md#vector2) barpivot  | The pivot point to anchor the Bar scaling to. This determines how exactly the Bar itself scales as the value changes. Defaults to the Pivot Constant `LEFT`. |
| [Bar Scale Constant](/reference/sprite.md#bar_scale_constant) scaletype  | Determines on which axes the Bar will scale when the value changes. Defaults to `HORIZONTAL`. |
| [number](/types/number.md) borderwidth | The width of the border around the Bar background. Defaults to 2. |
| [number](/types/number.md) trailspeed | The speed of the trail when the Bar changes its value (0 means no trail at all). Defaults to 0. |
| [Texture](/types/Texture.md) texture  | The image to display on the Bar. |
| [Texture](/types/Texture.md) bgtexture  | The image to display behind the Bar. |
| [Texture](/types/Texture.md) bgbordertexture  | The image to display around the background, on the Border. If not provided, `bgtexture` will be used, scaled accordingly. |
| [Texture](/types/Texture.md) trailtexture  | The image to display on the Bar trails. |


====
   {NAME} Sprite.draw(

[named](/types/table.md) args
       
)
    {RET} [nil](/types/nil.md)
   {DESC} Creates and draws a Sprite object immediately. This function is slow and is not recommended. `Sprite.box` is preferred for almost all use cases. This function accepts all arguments from `Graphics.glDraw` (see [Graphics](/reference/graphics.md)) with the exception of: `vertexCoords`, `textureCoords`, `texture`, and `primitive`.
   
<details><summary>Arguments</summary>

| Argument | Description |
| --- | --- |
| [number](/types/number.md) width  | Width of the Sprite. If not supplied, the width will automatically match one frame of the supplied texture, or 128 if no texture is supplied. |
| [number](/types/number.md) height  | Height of the Sprite. If not supplied, the height will automatically match one frame of the supplied texture, or 128 if no texture is supplied. |
| [Vector2](/reference/vector.md#vector2) position  | The position of the Sprite object. Defaults to (0,0). |
| [number](/types/number.md) x  | The x-position of the Sprite object. Only used if `position` is not set. |
| [number](/types/number.md) y  | The y-position of the Sprite object. Only used if `position` is not set. |
| [number](/types/number.md) rotation  | The rotation of the Sprite object in degrees. Defaults to 0. |
| [Texture](/types/Texture.md) texture  | The image to display on the Sprite. |
| [Vector2](/reference/vector.md#vector2) pivot  | The pivot point to anchor the Sprite to. This determines the centre of rotation and scale for the sprite, as well as the position centre. This can accept any vector, with (0,0) meaning top left and (1,1) meaning bottom right, or it can accept a [Pivot Constant](/reference/sprite.md#pivot_constant). Defaults to the Pivot Constant `TOPLEFT`. |
| [Vector2](/reference/vector.md#vector2) texpivot  | The pivot point to anchor the texture within the Sprite to. This determines the centre of rotation and scale for the image, as well as the position centre. This can accept any vector, with (0,0) meaning top left and (1,1) meaning bottom right, or it can accept a [Pivot Constant](/reference/sprite.md#pivot_constant). Defaults to the Pivot Constant `TOPLEFT`. |
| [number](/types/number.md) or [table](/types/table.md) of [number](/types/number.md) frames | Determines the number of frames the texture contains. If a single number is provided, the frames will be assumed to stack vertically. Otherwise, a two-number table can be provided, where the first number provides the horizontal frame count and the second provides the vertical frame count. For example, providing `{3,4}` will define a grid 3 frames across by 4 frames down. |
| [number](/types/number.md) or [table](/types/table.md) of [number](/types/number.md) frame | The current frame to draw, using the same format as the `frames` argument. |
| [number](/types/number.md) borderwidth | The width of the border to create around the Sprite (0 will not generate a border). |
| [Texture](/types/Texture.md) bordertexture  | The image to display on the Sprite border. The texture will be split into thirds and stretched around the Sprite, similar to Sizable Blocks, but stretching rather than tiling. |
| [Color](/reference/Color.md) bordercolor  | The color to tint the Sprite border. Defaults to `white`. |
| [Shader](/types/Shader.md) bordershader | The shader to apply to the Sprite border. Defaults to `nil`. |
| [table](/types/table.md) borderuniforms | The uniform list to pass to the Sprite border shader. If not provided, the main `uniforms` list will be used. |
| [table](/types/table.md) borderattributes | The attribute list to pass to the Sprite border shader. If not provided, the main `attributes` list will be used. |

{ENDTABLE}

### Static Fields

The Sprite class provides a few useful static fields, grouped based on their uses. These are all read-only.

#### Pivot Constant

Pivot Constants are accessed via the `Sprite.align` table, which contains the following members:
{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
   {DESC} Value
====
   {TYPE} [Vector2](/reference/vector.md#vector2)
  {FIELD} Sprite.align.TOP
   {DESC} (0.5,0)
====
   {TYPE} [Vector2](/reference/vector.md#vector2)
  {FIELD} Sprite.align.BOTTOM
   {DESC} (0.5,1)
====
   {TYPE} [Vector2](/reference/vector.md#vector2)
  {FIELD} Sprite.align.LEFT
   {DESC} (0,0.5)
====
   {TYPE} [Vector2](/reference/vector.md#vector2)
  {FIELD} Sprite.align.RIGHT
   {DESC} (1,0.5)
====
   {TYPE} [Vector2](/reference/vector.md#vector2)
  {FIELD} Sprite.align.CENTER
   {DESC} (0.5,0.5)
====
   {TYPE} [Vector2](/reference/vector.md#vector2)
  {FIELD} Sprite.align.CENTRE
   {DESC} (0.5,0.5)
====
   {TYPE} [Vector2](/reference/vector.md#vector2)
  {FIELD} Sprite.align.MIDDLE
   {DESC} (0.5,0.5)
====
   {TYPE} [Vector2](/reference/vector.md#vector2)
  {FIELD} Sprite.align.TOPLEFT
   {DESC} (0,0)
====
   {TYPE} [Vector2](/reference/vector.md#vector2)
  {FIELD} Sprite.align.TOPRIGHT
   {DESC} (1,0)
====
   {TYPE} [Vector2](/reference/vector.md#vector2)
  {FIELD} Sprite.align.BOTTOMLEFT
   {DESC} (0,1)
====
   {TYPE} [Vector2](/reference/vector.md#vector2)
  {FIELD} Sprite.align.BOTTOMRIGHT
   {DESC} (1,1)
{ENDTABLE}

#### Bar Scale Constant

Bar Scale Constants are accessed via the `Sprite.barscale` table, which contains the following members:
{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
   {DESC} Value
====
   {TYPE} [number](/types/number.md)
  {FIELD} Sprite.barscale.HORIZONTAL
   {DESC} 1
====
   {TYPE} [number](/types/number.md)
  {FIELD} Sprite.barscale.VERTICAL
   {DESC} -1
====
   {TYPE} [number](/types/number.md)
  {FIELD} Sprite.barscale.BOTH
   {DESC} 0
{ENDTABLE}

## Sprite

A Sprite object that can be modified or drawn to the screen.

### Instance members

Instance members must be accessed through a reference to a specific [Sprite](/reference/sprite.md#sprite) object.
```lua
local t = Sprite{
   x = player.x,
   y = player.y,
   align = Sprite.align.CENTER,
   texture = Graphics.loadImageResolved("example.png")
}
t.position = vector(1,2)
t:rotate(5)
```
<Note type="warning">Attempting to call instance members statically will result in an error!</Note>

### Instance Methods

[What is a method?](/types/function.md#methods)

Alongside the methods listed below, the following methods from the [Transform](/reference/transform.md#transform-2) class can also be used directly, and are equivalent to performing those operations on `mySprite.transform`:

| Name |
| --- | 
| getMat |
| getMatLocal |
| getInvMat |
| getInvMatLocal |
| addChild |
| setParent |
| rotate |
| translate |
| detachChildren |
| getSiblingIndex |
| setSiblingIndex |
| setFirstSibling |
| setLastSibling |

In addition, the following methods from the [Transform](/reference/transform.md#transform-2) class can also be used to affect the texture transform, and are equivalent to performing the base operations on `mySprite.textransform`:

| Name |
| --- | 
| texrotate |
| textranslate |


{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} getVertexCount()
    {RET} [number](/types/number.md) vertices
   {DESC} Gets the number of vertices in this Sprite object.
====
   {NAME} draw(
   
[named](/types/table.md) args

)
    {RET} [nil](/types/nil.md)
   {DESC} Draws the Sprite object to the screen. This function accepts all arguments from `Graphics.glDraw` (see [Graphics](/reference/graphics.md)) with the exception of: `vertexCoords`, `textureCoords`, `texture`, and `primitive`, as well as those listed here:
   
<details><summary>Arguments</summary>

| Argument | Description |
| --- | --- |
| [number](/types/number.md) or [table](/types/table.md) of [number](/types/number.md) frame | The current frame to draw, using the same format as the `frames` parameter used when creating the Sprite. |
| [Color](/reference/Color.md) bordercolor  | The color to tint the Sprite border. Defaults to `white`. |
| [Shader](/types/Shader.md) bordershader | The shader to apply to the Sprite border. Defaults to `nil`. |
| [table](/types/table.md) borderuniforms | The uniform list to pass to the Sprite border shader. If not provided, the main `uniforms` list will be used. |
| [table](/types/table.md) borderattributes | The attribute list to pass to the Sprite border shader. If not provided, the main `attributes` list will be used. |
   
{ENDTABLE}
### Instance Fields

{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE} [number](/types/number.md)
  {FIELD} x
     {RO} No
   {DESC} The local x coordinate of the Sprite.
====
   {TYPE} [number](/types/number.md)
  {FIELD} y
     {RO} No
   {DESC} The local y coordinate of the Sprite.
====
   {TYPE} [Vector2](/reference/vector.md#vector2)
  {FIELD} position
     {RO} No
   {DESC} The local position of the Sprite.
====
   {TYPE} [number](/types/number.md)
  {FIELD} rotation
     {RO} No
   {DESC} The local rotation of the Sprite, in degrees.
====
   {TYPE} [Vector2](/reference/vector.md#vector2)
  {FIELD} scale
     {RO} No
   {DESC} The local scale of the Sprite.
====
   {TYPE} [Texture](/types/Texture.md)
  {FIELD} texture
     {RO} No
   {DESC} The image displayed on the Sprite.
====
   {TYPE} [Texture](/types/Texture.md)
  {FIELD} image
     {RO} No
   {DESC} The image displayed on the Sprite.
====
   {TYPE} [number](/types/number.md)
  {FIELD} width
     {RO} No
   {DESC} The width of a Box-shaped Sprite.
====
   {TYPE} [number](/types/number.md)
  {FIELD} height
     {RO} No
   {DESC} The height of a Box-shaped Sprite.
====
   {TYPE} [number](/types/number.md)
  {FIELD} radius
     {RO} No
   {DESC} The radius of a Circle-shaped Sprite.
====
   {TYPE} [table](/types/table.md) of [Vector2](/reference/vector.md#vector2)
  {FIELD} verts
     {RO} No
   {DESC} A list of vertices in a Poly-shaped Sprite.
====
   {TYPE} [Vector2](/reference/vector.md#vector2)
  {FIELD} wposition
     {RO} No
   {DESC} The global position of the Sprite. Can only by modified by directly assigning to the field.
====
   {TYPE} [number](/types/number.md)
  {FIELD} wrotation
     {RO} No
   {DESC} The global rotation of the Sprite, in degrees.
====
   {TYPE} [Vector2](/reference/vector.md#vector2)
  {FIELD} wscale
     {RO} No
   {DESC} The global scale of the Sprite. Can only by modified by directly assigning to the field.
====
   {TYPE} [Vector2](/reference/vector.md#vector2)
  {FIELD} pivot
     {RO} No
   {DESC} The relative pivot position of the Sprite object (between (0,0) and (1,1)). This is unused in Poly-shaped Sprite objects.
====
   {TYPE} [Vector2](/reference/vector.md#vector2)
  {FIELD} align
     {RO} No
   {DESC} The relative pivot position of the Sprite object (between (0,0) and (1,1)). This is unused in Poly-shaped Sprite objects.
====
   {TYPE} [Vector2](/reference/vector.md#vector2)
  {FIELD} texpivot
     {RO} No
   {DESC} The relative pivot position of the texture on the Sprite (between (0,0) and (1,1)).
====
   {TYPE} [Vector2](/reference/vector.md#vector2)
  {FIELD} texalign
     {RO} No
   {DESC} The relative pivot position of the texture on the Sprite (between (0,0) and (1,1)).
====
   {TYPE} [Texture](/types/Texture.md)
  {FIELD} bordertexture
     {RO} No
   {DESC} The image displayed on the Sprite's border, if one exists. This is unused in Poly-shaped Sprite objects.
====
   {TYPE} [Texture](/types/Texture.md)
  {FIELD} borderimage
     {RO} No
   {DESC} The image displayed on the Sprite's border, if one exists. This is unused in Poly-shaped Sprite objects.
====
   {TYPE} [number](/types/number.md)
  {FIELD} borderwidth
     {RO} No
   {DESC} The width of the Sprite border. 0 can be used to disable the border entirely. This is unused in Poly-shaped Sprite objects.
====
   {TYPE} [number](/types/number.md) or [table](/types/table.md) of [number](/types/number.md)
  {FIELD} frames
     {RO} No
   {DESC} The number of frames the texture contains. If assigned to a single number, the frames will be assumed to stack vertically. Otherwise, if a two-number table is assigned, the first number will provide the horizontal frame count and the second will provide the vertical frame count. For example, `{3,4}` will define a grid 3 frames across by 4 frames down.
====
   {TYPE} [Transform](/reference/transform.md#transform-2)
  {FIELD} transform
     {RO} Yes
   {DESC} The [Transform](/reference/transform.md#transform-2) object that defines the Sprite's position, rotation, and scale.
====
   {TYPE} [Transform](/reference/transform.md#transform-2)
  {FIELD} textransform
     {RO} Yes
   {DESC} The [Transform](/reference/transform.md#transform-2) object that defines the texture's position, rotation, and scale on the Sprite.
====
   {TYPE} [number](/types/number.md)
  {FIELD} vertexCount
     {RO} Yes
   {DESC} The number of vertices in the Sprite object.
====
   {TYPE} [Vector2](/reference/vector.md#vector2)
  {FIELD} texposition
     {RO} No
   {DESC} The relative position of the texture within the Sprite.
====
   {TYPE} [number](/types/number.md)
  {FIELD} texrotation
     {RO} No
   {DESC} The relative rotation of the texture within the Sprite, in degrees.
====
   {TYPE} [Vector2](/reference/vector.md#vector2)
  {FIELD} texscale
     {RO} No
   {DESC} The relative size of the texture within the Sprite, in pixels.
====
   {TYPE} [Vector2](/reference/vector.md#vector2)
  {FIELD} texwposition
     {RO} No
   {DESC} The global position of the texture within the Sprite. Can only by modified by directly assigning to the field.
====
   {TYPE} [number](/types/number.md)
  {FIELD} texwrotation
     {RO} No
   {DESC} The global rotation of the texture within the Sprite, in degrees.
====
   {TYPE} [Vector2](/reference/vector.md#vector2)
  {FIELD} texwscale
     {RO} No
   {DESC} The global size of the texture within the Sprite, in pixels. Can only by modified by directly assigning to the field.
====
   {TYPE} [Transform](/reference/transform.md#transform-2)
  {FIELD} parent
     {RO} No
   {DESC} The parent [Transform](/reference/transform.md#transform-2) object of the Sprite. Will be [nil](/types/nil.md) if no parent exists.
====
   {TYPE} [Vector2](/reference/vector.md#vector2)
  {FIELD} up
     {RO} No
   {DESC} The local "up" vector of the Sprite. Can only by modified by directly assigning to the field.
====
   {TYPE} [Vector2](/reference/vector.md#vector2)
  {FIELD} right
     {RO} No
   {DESC} The local "right" vector of the Sprite. Can only by modified by directly assigning to the field.
====
   {TYPE} [Vector2](/reference/vector.md#vector2)
  {FIELD} wup
     {RO} No
   {DESC} The global "up" vector of the Sprite. Can only by modified by directly assigning to the field.
====
   {TYPE} [Vector2](/reference/vector.md#vector2)
  {FIELD} wright
     {RO} No
   {DESC} The global "right" vector of the Sprite. Can only by modified by directly assigning to the field.
====
   {TYPE} [number](/types/number.md)
  {FIELD} siblingIdx
     {RO} No
   {DESC} The sibling index of the Sprite in its parent [Transform](/reference/transform.md#transform-2)'s child list.
====
   {TYPE} [Transform](/reference/transform.md#transform-2)
  {FIELD} root
     {RO} Yes
   {DESC} The topmost parent [Transform](/reference/transform.md#transform-2) in the scene hierarchy.
{ENDTABLE}

 
## SpriteBar

A progress bar object, similar to a Sprite but with additional functionality for easy progress bars.

### Instance members

Instance members must be accessed through a reference to a specific [SpriteBar](/reference/sprite.md#spritebar) object.
```lua
local t = Sprite.bar{
   x = 66,
   y = 68,
   width = 630,
   height = 32,
   pivot = Sprite.align.TOPLEFT,
   value = 0,
   texture = Graphics.loadImageResolved("DUMMY.png")
}
t.value = 0.5
t:rotate(vector.up3, 5)
```
<Note type="warning">Attempting to call instance members statically will result in an error!</Note>

### Instance Methods

[What is a method?](/types/function.md#methods)

Alongside the methods listed below, the following methods from the [Transform](/reference/transform.md#transform-2) class can also be used directly, and are equivalent to performing those operations on `myBar.transform`:

| Name |
| --- | 
| getMat |
| getMatLocal |
| getInvMat |
| getInvMatLocal |
| addChild |
| setParent |
| rotate |
| translate |
| detachChildren |
| getSiblingIndex |
| setSiblingIndex |
| setFirstSibling |
| setLastSibling |

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} draw(
   
[named](/types/table.md) args

)
    {RET} [nil](/types/nil.md)
   {DESC} Draws the Bar object to the screen. This function accepts all arguments from `Graphics.glDraw` (see [Graphics](/reference/graphics.md)) with the exception of: `vertexCoords`, `textureCoords`, `texture`, and `primitive`, as well as those listed here:
   
<details><summary>Arguments</summary>

| Argument | Description |
| --- | --- |
| [Color](/reference/Color.md) barcolor  | The color to tint the Bar. |
| [Color](/reference/Color.md) bgcolor  | The color to tint the background behind the Bar. |
| [Color](/reference/Color.md) trailcolor  | The color to tint the Bar trail. |
| [Shader](/types/Shader.md) bgshader | The shader to apply to the background behind the Bar. Defaults to `nil`. |
| [table](/types/table.md) bguniforms | The uniform list to pass to the Bar background shader. If not provided, the main `uniforms` list will be used. |
| [table](/types/table.md) bgattributes | The attribute list to pass to the Bar background shader. If not provided, the main `attributes` list will be used. |
| [Shader](/types/Shader.md) trailshader | The shader to apply to the Bar trail. Defaults to `nil`. |
| [table](/types/table.md) trailuniforms | The uniform list to pass to the Bar trail shader. If not provided, the main `uniforms` list will be used. |
| [table](/types/table.md) barattributes | The attribute list to pass to the Bar trail shader. If not provided, the main `attributes` list will be used. |
   
{ENDTABLE}

### Instance Fields

{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE} [number](/types/number.md)
  {FIELD} x
     {RO} No
   {DESC} The local x coordinate of the Bar.
====
   {TYPE} [number](/types/number.md)
  {FIELD} y
     {RO} No
   {DESC} The local y coordinate of the Bar.
====
   {TYPE} [Vector2](/reference/vector.md#vector2)
  {FIELD} position
     {RO} No
   {DESC} The local position of the Bar.
====
   {TYPE} [number](/types/number.md)
  {FIELD} rotation
     {RO} No
   {DESC} The local rotation of the Bar, in degrees.
====
   {TYPE} [Vector2](/reference/vector.md#vector2)
  {FIELD} scale
     {RO} No
   {DESC} The local scale of the Bar.
====
   {TYPE} [number](/types/number.md)
  {FIELD} value
     {RO} No
   {DESC} The value to display on the Bar, between 0 and 1.
====
   {TYPE} [number](/types/number.md)
  {FIELD} trailvalue
     {RO} No
   {DESC} The value of the Bar trail, between 0 and 1.
====
   {TYPE} [Bar Scale Constant](/reference/sprite.md#bar_scale_constant)
  {FIELD} scaletype
     {RO} No
   {DESC} Wich axes the Bar will scale on when the value changes.
====
   {TYPE} [number](/types/number.md)
  {FIELD} trailspeed
     {RO} No
   {DESC} How fast the trail value will follow the main value. Set to 0 to remove the trail entirely.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} pausetrail
     {RO} No
   {DESC} If set to `true`, the trail will stop updating, and will resume when `pausetrail` is set to `false` again.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} autopausetrail
     {RO} No
   {DESC} If set to `true`, the trail will stop updating automatically when the game is paused, and resume when the game resumes.
====
   {TYPE} [Texture](/types/Texture.md)
  {FIELD} texture
     {RO} No
   {DESC} The image displayed on the main Bar.
====
   {TYPE} [Texture](/types/Texture.md)
  {FIELD} image
     {RO} No
   {DESC} The image displayed on the main Bar.
====
   {TYPE} [Texture](/types/Texture.md)
  {FIELD} bgtexture
     {RO} No
   {DESC} The image displayed on the Bar background.
====
   {TYPE} [Texture](/types/Texture.md)
  {FIELD} bgimage
     {RO} No
   {DESC} The image displayed on the Bar background.
====
   {TYPE} [Texture](/types/Texture.md)
  {FIELD} trailtexture
     {RO} No
   {DESC} The image displayed on the Bar trail.
====
   {TYPE} [Texture](/types/Texture.md)
  {FIELD} trailimage
     {RO} No
   {DESC} The image displayed on the Bar trail.
====
   {TYPE} [number](/types/number.md)
  {FIELD} width
     {RO} No
   {DESC} The width of the Bar.
====
   {TYPE} [number](/types/number.md)
  {FIELD} height
     {RO} No
   {DESC} The height of the Bar.
====
   {TYPE} [Vector2](/reference/vector.md#vector2)
  {FIELD} wposition
     {RO} No
   {DESC} The global position of the Bar. Can only by modified by directly assigning to the field.
====
   {TYPE} [number](/types/number.md)
  {FIELD} wrotation
     {RO} No
   {DESC} The global rotation of the Bar, in degrees.
====
   {TYPE} [Vector2](/reference/vector.md#vector2)
  {FIELD} wscale
     {RO} No
   {DESC} The global scale of the Bar. Can only by modified by directly assigning to the field.
====
   {TYPE} [Vector2](/reference/vector.md#vector2)
  {FIELD} pivot
     {RO} No
   {DESC} The relative pivot position of the Bar object (between (0,0) and (1,1)).
====
   {TYPE} [Vector2](/reference/vector.md#vector2)
  {FIELD} align
     {RO} No
   {DESC} The relative pivot position of the Bar object (between (0,0) and (1,1)).
====
   {TYPE} [Vector2](/reference/vector.md#vector2)
  {FIELD} barpivot
     {RO} No
   {DESC} The relative pivot position of the main Bar, used to determine how the Bar scales (between (0,0) and (1,1)).
====
   {TYPE} [Vector2](/reference/vector.md#vector2)
  {FIELD} baralign
     {RO} No
   {DESC} The relative pivot position of the main Bar, used to determine how the Bar scales (between (0,0) and (1,1)).
====
   {TYPE} [Texture](/types/Texture.md)
  {FIELD} bgbordertexture
     {RO} No
   {DESC} The image displayed on the Bar background's border. If set to [nil](/types/nil.md), the `bgtexture` field will be used.
====
   {TYPE} [Texture](/types/Texture.md)
  {FIELD} bgborderimage
     {RO} No
   {DESC} The image displayed on the Bar background's border. If set to [nil](/types/nil.md), the `bgtexture` field will be used.
====
   {TYPE} [Transform](/reference/transform.md#transform-2)
  {FIELD} transform
     {RO} Yes
   {DESC} The [Transform](/reference/transform.md#transform-2) object that defines the Bar's position, rotation, and scale.
====
   {TYPE} [Transform](/reference/transform.md#transform-2)
  {FIELD} parent
     {RO} No
   {DESC} The parent [Transform](/reference/transform.md#transform-2) object of the Bar. Will be [nil](/types/nil.md) if no parent exists.
====
   {TYPE} [Vector2](/reference/vector.md#vector2)
  {FIELD} up
     {RO} No
   {DESC} The local "up" vector of the Bar. Can only by modified by directly assigning to the field.
====
   {TYPE} [Vector2](/reference/vector.md#vector2)
  {FIELD} right
     {RO} No
   {DESC} The local "right" vector of the Bar. Can only by modified by directly assigning to the field.
====
   {TYPE} [Vector2](/reference/vector.md#vector2)
  {FIELD} wup
     {RO} No
   {DESC} The global "up" vector of the Bar. Can only by modified by directly assigning to the field.
====
   {TYPE} [Vector2](/reference/vector.md#vector2)
  {FIELD} wright
     {RO} No
   {DESC} The global "right" vector of the Bar. Can only by modified by directly assigning to the field.
====
   {TYPE} [number](/types/number.md)
  {FIELD} siblingIdx
     {RO} No
   {DESC} The sibling index of the Bar in its parent [Transform](/reference/transform.md#transform-2)'s child list.
====
   {TYPE} [Transform](/reference/transform.md#transform-2)
  {FIELD} root
     {RO} Yes
   {DESC} The topmost parent [Transform](/reference/transform.md#transform-2) in the scene hierarchy.
{ENDTABLE}
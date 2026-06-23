# Graphics

The Graphics namespace exposes functions for loading and rendering images, as well as manipulating internal graphics on the fly.

## Hud Type Constants

These constants can be accessed as part of the Graphics namespace.

| Constant | Description |
| --- | --- |
| Graphics.HUD_NONE | Neither hearts or itembox are used. |
| Graphics.HUD_HEARTS | Heart-based HUD. |
| Graphics.HUD_ITEMBOX | Itembox-based HUD. |

## Static HUD-related functions
{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} Graphics.activateHud(

[bool](/types/bool.md) showHud
       
)
    {RET} [nil](/types/nil.md)
   {DESC} Toggles the level hud on or off. <Badge type="tip">Level only</Badge>
====
   {NAME} Graphics.activateOverworldHud(

[hudState](/constants/world-hud-state.md) hudState
       
)
    {RET} [nil](/types/nil.md)
   {DESC} Toggles the overworld hud on or off. For accepted values, look at the [hud state constants](/constants/world-hud-state.md). <Badge type="tip">Overworld only</Badge>
====
   {NAME} Graphics.isHudActivated()
    {RET} [bool](/types/bool.md) isActive
   {DESC} Returns whether the default level HUD is activated. <Badge type="tip">Level only</Badge>
====
   {NAME} Graphics.getOverworldHudState()
    {RET} [hudState](/constants/world-hud-state.md) hudState
   {DESC} Returns the ative state of the overworld HUD. <Badge type="tip">Overworld only</Badge>
====
   {NAME} Graphics.addHUDElement(

[function](/types/function.md) elementFunction
       
)
    {RET} [nil](/types/nil.md)
   {DESC} Adds a new HUD element to the HUD render process. The elementFunction will be called with 3 arguments: camIdx (for retrieving the camera), priority (equal to HUDOverride.priority) and isSplit (whether splitscreen is active).
====
   {NAME} Graphics.overrideHUD(

[function](/types/function.md) newRenderFunction
       
)
    {RET} [nil](/types/nil.md)
   {DESC} Replaces the render function for levels. The level render function gets three arguments passed: camIndex, priority (requal to HUDOverride.priority) and isSplit (whether splitscreen is active).
====
   {NAME} Graphics.overrideOverworldHUD(

[function](/types/function.md) newRenderFunction
       
)
    {RET} [nil](/types/nil.md)
   {DESC} Replaces the render function for the overworld. The overworld render function gets one argument passed that is equal to the value of HUDOverride.priority.
====
   {NAME} Graphics.registerCharacterHUD(

[Character](/constants/characters.md) characterID,

[HUD Type](/reference/graphics#hud-type-constants) hudType,

[function](/types/function.md) actions,

[table](/types/table.md) sprites
       
)
    {RET} [nil](/types/nil.md)
   {DESC} Registers a render function for a specific character. The actions-function will receive 6 arguments: playerIdx, camObj (the respective camera), playerObj (the player), priority (equal to HUDOverride.priority), isSplit (whether splitscreen is active) and playerCount (total number of players). Sprites is a table of sprites for default hud elements, for overriding elements in the HUDOverride HUDSprites table.

<details><summary>HUDSprites table contents</summary>

| Name | Description |
| --- | --- |
| reserveBox | Sprite for the reserve itembox. |
| coins | Sprite for the coin icon. |
| cross | Sprite for the x in the hud. |
| stars | Sprite for the star icon. |
| lives | Sprite for the lives icon. |
| lives2 | Sprite for the lives icon for player 2 in battle mode. |
| heartEmpty | Sprite for the empty heart icon. |
| heartFull | Sprite for the filled heart icon. |
| keys | Sprite for the key icon on Link's HUD. |
| bombs | Sprite for the bombs icon on Link's HUD. |
| overworldBox | Sprite for the overworld border. |
| arrowUp | Sprite for an up arrow in the star coin HUD. |
| arrowDown | Sprite for a down arrow in the star coin HUD. |
| starcoinUncollected | Sprite for uncollected star coins. |
| starcoinCollected | Sprite for collected star coins. |
| timer | Sprite for the timer clock icon. |

</details>

====
   {NAME} Graphics.getHUDType(

[Character](/constants/characters.md) characterID
       
)
    {RET} [HUD Type](/reference/graphics#hud-type-constants) hudType,
   {DESC} Returns the HUD type used by the specified character.
====
   {NAME} Graphics.getHUDActions(

[Character](/constants/characters.md) characterID
       
)
    {RET} [function](/types/function.md) actions,
   {DESC} Returns the HUD actions used by the specified character.
====
   {NAME} Graphics.getHUDOffset(

[number](/types/number.md) playerIdx,

[bool](/types/bool.md) isSplit
       
)
    {RET} [number](/types/number.md) offset,
   {DESC} Returns the offset relative to the center of the screen for the hearts/itembox HUD element under the specified conditions.
====
   {NAME} Graphics.drawVanillaHUD(

[number](/types/number.md) camIndex,

[number](/types/number.md) priority,

[bool](/types/bool.md) isSplit
       
)
    {RET} [nil](/types/nil.md),
   {DESC} Draws the vanilla HUD for the given camera.
====
   {NAME} Graphics.drawVanillaOverworldHUD(

[number](/types/number.md) priority
       
)
    {RET} [nil](/types/nil.md),
   {DESC} Draws the vanilla overworld HUD.
{ENDTABLE}

## Static loading & rendering functions
{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} Graphics.loadImage(

[string](/types/string.md) fileName
       
)
    {RET} [Texture](/types/Texture.md) image
   {DESC} Loads an image by a given filename. Relative strings are based in the current level folder.
====
   {NAME} Graphics.loadImageResolved(

[string](/types/string.md) fileName
       
)
    {RET} [Texture](/types/Texture.md) image
   {DESC} Loads an image by a given filename. Performs a call to Misc.resolveGraphicsFile internally to search in common directories.
====
   {NAME} Graphics.getPixelData(

[Texture](/types/Texture.md) image
       
)
    {RET} [table](/types/table.md) of [number](/types/number.md) BGRAPixelValues,

[number](/types/number.md) width,

[number](/types/number.md) height
   {DESC} Extracts all image data from the image in an array in BGRA-Format. The array is sized width * height * 4 (4 values for each pixel).
====
   {NAME} Graphics.drawImage(

[Texture](/types/Texture.md) image,

[number](/types/number.md) x,

[number](/types/number.md) y
       
)
    {RET} [nil](/types/nil.md)
   {DESC} Draws the given image for a frame at the given coordinates relative to [screen space](/concepts/coordinate-spaces.md).
====
   {NAME} Graphics.drawImage(

[Texture](/types/Texture.md) image,

[number](/types/number.md) x,

[number](/types/number.md) y,

[number](/types/number.md) opacity
       
)
    {RET} [nil](/types/nil.md)
   {DESC} Draws the given image for a frame at the given coordinates relative to [screen space](/concepts/coordinate-spaces.md). Additionally, the opacity (between 0 and 1) can be specified.
====
   {NAME} Graphics.drawImage(

[Texture](/types/Texture.md) image,

[number](/types/number.md) x,

[number](/types/number.md) y,

[number](/types/number.md) sourceX,

[number](/types/number.md) sourceY,

[number](/types/number.md) sourceWidth,

[number](/types/number.md) sourceHeight
       
)
    {RET} [nil](/types/nil.md)
   {DESC} Draws the given image for a frame at the given coordinates relative to [screen space](/concepts/coordinate-spaces.md). Additionally, a rectangle to draw from the source image can be specified using the source parameters. By varying the parameters across frames, animation can be created.
====
   {NAME} Graphics.drawImage(

[Texture](/types/Texture.md) image,

[number](/types/number.md) x,

[number](/types/number.md) y,

[number](/types/number.md) sourceX,

[number](/types/number.md) sourceY,

[number](/types/number.md) sourceWidth,

[number](/types/number.md) sourceHeight,

[number](/types/number.md) opacity
       
)
    {RET} [nil](/types/nil.md)
   {DESC} Draws the given image for a frame at the given coordinates relative to [screen space](/concepts/coordinate-spaces.md). Additionally, a rectangle to draw from the source image can be specified using the source parameters. By varying the parameters across frames, animation can be created. Additionally, the opacity (between 0 and 1) can be specified.
====
   {NAME} Graphics.drawImageWP(

[Texture](/types/Texture.md) image,

[number](/types/number.md) x,

[number](/types/number.md) y,

[number](/types/number.md) priority
       
)
    {RET} [nil](/types/nil.md)
   {DESC} Draws the given image for a frame at the given coordinates relative to [screen space](/concepts/coordinate-spaces.md) at a given [priority](/concepts/render-priority.md).
====
   {NAME} Graphics.drawImageWP(

[Texture](/types/Texture.md) image,

[number](/types/number.md) x,

[number](/types/number.md) y,

[number](/types/number.md) opacity,

[number](/types/number.md) priority
       
)
    {RET} [nil](/types/nil.md)
   {DESC} Draws the given image for a frame at the given coordinates relative to [screen space](/concepts/coordinate-spaces.md) at a given [priority](/concepts/render-priority.md). Additionally, the opacity (between 0 and 1) can be specified.
====
   {NAME} Graphics.drawImageWP(

[Texture](/types/Texture.md) image,

[number](/types/number.md) x,

[number](/types/number.md) y,

[number](/types/number.md) sourceX,

[number](/types/number.md) sourceY,

[number](/types/number.md) sourceWidth,

[number](/types/number.md) sourceHeight,

[number](/types/number.md) priority
       
)
    {RET} [nil](/types/nil.md)
   {DESC} Draws the given image for a frame at the given coordinates relative to [screen space](/concepts/coordinate-spaces.md) at a given [priority](/concepts/render-priority.md). Additionally, a rectangle to draw from the source image can be specified using the source parameters. By varying the parameters across frames, animation can be created.
====
   {NAME} Graphics.drawImageWP(

[Texture](/types/Texture.md) image,

[number](/types/number.md) x,

[number](/types/number.md) y,

[number](/types/number.md) sourceX,

[number](/types/number.md) sourceY,

[number](/types/number.md) sourceWidth,

[number](/types/number.md) sourceHeight,

[number](/types/number.md) opacity,

[number](/types/number.md) priority
       
)
    {RET} [nil](/types/nil.md)
   {DESC} Draws the given image for a frame at the given coordinates relative to [screen space](/concepts/coordinate-spaces.md) at a given [priority](/concepts/render-priority.md). Additionally, a rectangle to draw from the source image can be specified using the source parameters. By varying the parameters across frames, animation can be created. Additionally, the opacity (between 0 and 1) can be specified.
====
   {NAME} Graphics.drawImageToScene(

[Texture](/types/Texture.md) image,

[number](/types/number.md) x,

[number](/types/number.md) y
       
)
    {RET} [nil](/types/nil.md)
   {DESC} Draws the given image for a frame at the given coordinates relative to [scene space](/concepts/coordinate-spaces.md).
====
   {NAME} Graphics.drawImageToScene(

[Texture](/types/Texture.md) image,

[number](/types/number.md) x,

[number](/types/number.md) y,

[number](/types/number.md) opacity
       
)
    {RET} [nil](/types/nil.md)
   {DESC} Draws the given image for a frame at the given coordinates relative to [scene space](/concepts/coordinate-spaces.md). Additionally, the opacity (between 0 and 1) can be specified.
====
   {NAME} Graphics.drawImageToScene(

[Texture](/types/Texture.md) image,

[number](/types/number.md) x,

[number](/types/number.md) y,

[number](/types/number.md) sourceX,

[number](/types/number.md) sourceY,

[number](/types/number.md) sourceWidth,

[number](/types/number.md) sourceHeight
       
)
    {RET} [nil](/types/nil.md)
   {DESC} Draws the given image for a frame at the given coordinates relative to [scene space](/concepts/coordinate-spaces.md). Additionally, a rectangle to draw from the source image can be specified using the source parameters. By varying the parameters across frames, animation can be created.
====
   {NAME} Graphics.drawImageToScene(

[Texture](/types/Texture.md) image,

[number](/types/number.md) x,

[number](/types/number.md) y,

[number](/types/number.md) sourceX,

[number](/types/number.md) sourceY,

[number](/types/number.md) sourceWidth,

[number](/types/number.md) sourceHeight,

[number](/types/number.md) opacity
       
)
    {RET} [nil](/types/nil.md)
   {DESC} Draws the given image for a frame at the given coordinates relative to [scene space](/concepts/coordinate-spaces.md). Additionally, a rectangle to draw from the source image can be specified using the source parameters. By varying the parameters across frames, animation can be created. Additionally, the opacity (between 0 and 1) can be specified.
====
   {NAME} Graphics.drawImageToSceneWP(

[Texture](/types/Texture.md) image,

[number](/types/number.md) x,

[number](/types/number.md) y,

[number](/types/number.md) priority
       
)
    {RET} [nil](/types/nil.md)
   {DESC} Draws the given image for a frame at the given coordinates relative to [scene space](/concepts/coordinate-spaces.md) at a given [priority](/concepts/render-priority.md).
====
   {NAME} Graphics.drawImageToSceneWP(

[Texture](/types/Texture.md) image,

[number](/types/number.md) x,

[number](/types/number.md) y,

[number](/types/number.md) opacity,

[number](/types/number.md) priority
       
)
    {RET} [nil](/types/nil.md)
   {DESC} Draws the given image for a frame at the given coordinates relative to [scene space](/concepts/coordinate-spaces.md) at a given [priority](/concepts/render-priority.md). Additionally, the opacity (between 0 and 1) can be specified.
====
   {NAME} Graphics.drawImageToSceneWP(

[Texture](/types/Texture.md) image,

[number](/types/number.md) x,

[number](/types/number.md) y,

[number](/types/number.md) sourceX,

[number](/types/number.md) sourceY,

[number](/types/number.md) sourceWidth,

[number](/types/number.md) sourceHeight,

[number](/types/number.md) priority
       
)
    {RET} [nil](/types/nil.md)
   {DESC} Draws the given image for a frame at the given coordinates relative to [scene space](/concepts/coordinate-spaces.md) at a given [priority](/concepts/render-priority.md). Additionally, a rectangle to draw from the source image can be specified using the source parameters. By varying the parameters across frames, animation can be created.
====
   {NAME} Graphics.drawImageToSceneWP(

[Texture](/types/Texture.md) image,

[number](/types/number.md) x,

[number](/types/number.md) y,

[number](/types/number.md) sourceX,

[number](/types/number.md) sourceY,

[number](/types/number.md) sourceWidth,

[number](/types/number.md) sourceHeight,

[number](/types/number.md) opacity,

[number](/types/number.md) priority
       
)
    {RET} [nil](/types/nil.md)
   {DESC} Draws the given image for a frame at the given coordinates relative to [scene space](/concepts/coordinate-spaces.md) at a given [priority](/concepts/render-priority.md). Additionally, a rectangle to draw from the source image can be specified using the source parameters. By varying the parameters across frames, animation can be created. Additionally, the opacity (between 0 and 1) can be specified.
====
   {NAME} Graphics.draw([named](/types/table.md) args)
    {RET} [nil](/types/nil.md)
   {DESC} Draws an image or text according to the values of the named arguments.

<details><summary>Basic args</summary>

| Argument | Optional | Description |
| --- | --- | --- |
| [number](/types/number.md) x | No | x-Coordinate |
| [number](/types/number.md) y | No | y-Coordinate |
| [Render Type](/constants/render-type.md) type | No | Drawing type |
| [bool](/types/bool.md) isSceneCoordinates/isSceneCoords/sceneCoords | Yes | Whether to draw to the scene [coordinate space](/concepts/coordinate-spaces.md). False by default. |
| [number](/types/number.md) priority | Yes | The [render priority](/concepts/render-priority.md). Defaults to 1 for images and 3 for text. |

</details>

<details><summary>Text args</summary>

| Argument | Optional | Description |
| --- | --- | --- |
| [string](/types/string.md) text | No | The text to display |
| [number](/types/number.md) fontType | Yes | The font type to use (between 1 and 4). Font 2 can only display numbers. Defaults to 3. |

</details>

<details><summary>Image args</summary>

| Argument | Optional | Description |
| --- | --- | --- |
| [Texture](/types/Texture.md) image | No | The texture to draw. |
| [number](/types/number.md) sourceX | Yes | Left edge of source image section to draw. |
| [number](/types/number.md) sourceY | Yes | Top edge of source image section to draw. |
| [number](/types/number.md) sourceWidth | Yes | Width of the segment of the source image section to draw. |
| [number](/types/number.md) sourceWidth | Yes | Height of the segment of the source image section to draw. |
| [number](/types/number.md) opacity | Yes | Opacity of the image drawn (between 0 and 1). |

</details>

====
   {NAME} Graphics.glDraw([named](/types/table.md) args)
    {RET} [nil](/types/nil.md)
   {DESC} Draws an image according to the values of the named arguments using OpenGL. The only required argument is <b>vertexCoords</b>.

<details><summary>Available args</summary>

| Argument | Description |
| --- | --- |
| [table](/types/table.md) of [number](/types/number.md) vertexCoords | A list of alternating x and y coordinates used to define the vertices of the drawn primitive. |
| [Primitive](#gldraw-primitives) primitive | The type of primitive to render. |
| [Texture](/types/Texture.md) or [CaptureBuffer](#capture-buffers) texture | The texture to draw. Can be a capture buffer. |
| [table](/types/table.md) of [number](/types/number.md) textureCoords | A list of alternating x and y coordinates used to define the UV-coordinates of the texture to draw. All coordinates are clamped between 0 (top/left edge of image) and 1 (bottom/right edge of image). |
| [Color](/reference/Color.md) color | Color tint to apply to the whole image. |
| [table](/types/table.md) of [number](/types/number.md) vertexColors | A flat list of RGBA color values for each vertex. |
| [number](/types/number.md) priority | The [render priority](/concepts/render-priority.md). Defaults to 1. |
| [bool](/types/bool.md) sceneCoords | Whether to draw to the scene [coordinate space](/concepts/coordinate-spaces.md). False by default. |
| [Shader](/types/Shader.md) shader | The shader to use. |
| [table](/types/table.md) uniforms | A table where the key is the name of the uniform and the value is that uniform's value. Table values are converted to arrays for the shader.  |
| [table](/types/table.md) attributes | A table where the key is the name of the attribute and the value is a an array containing all required values. Keep in mind that this is per-vertex, so you the number of values you pass in that array depends on the number for vertices you use. |
| [CaptureBuffer](#capture-buffers) target | The render target/capture buffer to draw to. |

</details>

====
   {NAME} Graphics.drawBox([named](/types/table.md) args)
    {RET} [nil](/types/nil.md)
   {DESC} A wrapper for glDraw that makes drawing rectangular images easier. It can use all args from glDraw, in addition to some of its own. Either vertexCoords or the combination of x, y, width and height is required.

<details><summary>Additional args</summary>

| Argument | Description |
| --- | --- |
| [number](/types/number.md) x | x-Coordinate. |
| [number](/types/number.md) y | y-Coordinate. |
| [number](/types/number.md) w/width | Width of the drawn image. |
| [number](/types/number.md) h/height | Height of the drawn image. |
| [number](/types/number.md) sourceX | Left edge of the texture's drawn area. |
| [number](/types/number.md) sourceY | Top edge of the texture's drawn area. |
| [number](/types/number.md) sourceWidth | Width of the texture's drawn area. |
| [number](/types/number.md) sourceHeight | Height of the texture's drawn area. |
| [number](/types/number.md) rotation | Angle of the drawn image. |
| [bool](/types/bool.md) centered | If true, x and y are interpreted as the center of the image. |
| [bool](/types/bool.md) or [number](/types/number.md) additive | Whether the box is drawn with additive blending. If a number, must be between 0.0 and 1.0. |

</details>

====
   {NAME} Graphics.drawScreen([named](/types/table.md) args)
    {RET} [nil](/types/nil.md)
   {DESC} A wrapper for glDraw that makes drawing over the entire screen easier. It can use all args from glDraw, in addition to some of its own. None of the arguments are required.

<details><summary>Additional args</summary>

| Argument | Description |
| --- | --- |
| [Camera](/types/Camera.md) camera/cam | Camera to render to. If none is provided, the first camera is used. |
| [number](/types/number.md) sourceX | Left edge of the texture's drawn area. |
| [number](/types/number.md) sourceY | Top edge of the texture's drawn area. |
| [number](/types/number.md) sourceWidth | Width of the texture's drawn area. |
| [number](/types/number.md) sourceHeight | Height of the texture's drawn area. |
| [bool](/types/bool.md) or [number](/types/number.md) additive | Whether the screen is drawn with additive blending. If a number, must be between 0.0 and 1.0. |

</details>

====
   {NAME} Graphics.drawLine([named](/types/table.md) args)
    {RET} [nil](/types/nil.md)
   {DESC} A wrapper for glDraw that makes drawing lines easier. It can use all args from glDraw, in addition to some of its own. Either vertexCoords or an alternative way of specifying the coordinates is required.

<details><summary>Additional args</summary>

| Argument | Description |
| --- | --- |
| [Vector2](/types/Vector.md) start | Vector (or table with 2 entries) specifying x1 and y1. |
| [Vector2](/types/Vector.md) stop | Vector (or table with 2 entries) specifying x2 and y2. |
| [number](/types/number.md) x1 | Starting x-coordinate. |
| [number](/types/number.md) y1 | Starting y-coordinate. |
| [number](/types/number.md) x2 | Ending x-coordinate. |
| [number](/types/number.md) y2 | Ending y-coordinate. |
| [bool](/types/bool.md) or [number](/types/number.md) additive | Whether the line is drawn with additive blending. If a number, must be between 0.0 and 1.0. |

</details>

====
   {NAME} Graphics.drawCircle([named](/types/table.md) args)
    {RET} [nil](/types/nil.md)
   {DESC} A wrapper for glDraw that makes drawing circles easier. It can use all args from glDraw, in addition to some of its own. Either vertexCoords or a combination of x, and radius is required.

<details><summary>Additional args</summary>

| Argument | Description |
| --- | --- |
| [number](/types/number.md) x | x-coordinate at the center of the circle. |
| [number](/types/number.md) y | y-coordinate at the center of the circle. |
| [number](/types/number.md) radius | Radius of the circle. |
| [number](/types/number.md) rotation | Angle of the circle. |
| [number](/types/number.md) sourceX | Left edge of the texture's drawn area. |
| [number](/types/number.md) sourceY | Top edge of the texture's drawn area. |
| [number](/types/number.md) sourceWidth | Width of the texture's drawn area. |
| [number](/types/number.md) sourceHeight | Height of the texture's drawn area. |
| [bool](/types/bool.md) or [number](/types/number.md) additive | Whether the circle is drawn with additive blending. If a number, must be between 0.0 and 1.0. |

</details>

{ENDTABLE}

## Static Misc functions
{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} Graphics.isSoftwareGL()
    {RET} [bool](/types/bool.md) isSoftGL
   {DESC} Returns whether the game currently uses the software-implemented OpenGL renderer.
====
   {NAME} Graphics.getFrameStats()
    {RET} [number](/types/number.md) totalFrames,
    
[number](/types/number.md) skippedFrames
   {DESC} Returns the total number and skipped number of frames in rendering.
{ENDTABLE}

## Static Fields

{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE} [number](/types/number.md)
  {FIELD} Graphics.GL_POINTS
     {RO} Yes
   {DESC} Sets a glDraw's primitive to POINTS.
====
   {TYPE} [number](/types/number.md)
  {FIELD} Graphics.GL_LINES
     {RO} Yes
   {DESC} Sets a glDraw's primitive to LINES.
====
   {TYPE} [number](/types/number.md)
  {FIELD} Graphics.GL_LINE_LOOP
     {RO} Yes
   {DESC} Sets a glDraw's primitive to LINE_LOOP.
====
   {TYPE} [number](/types/number.md)
  {FIELD} Graphics.GL_LINE_STRIP
     {RO} Yes
   {DESC} Sets a glDraw's primitive to LINE_STRIP.
====
   {TYPE} [number](/types/number.md)
  {FIELD} Graphics.GL_TRIANGLES
     {RO} Yes
   {DESC} Sets a glDraw's primitive to TRIANGLES.
====
   {TYPE} [number](/types/number.md)
  {FIELD} Graphics.GL_TRIANGLE_STRIP
     {RO} Yes
   {DESC} Sets a glDraw's primitive to TRIANGLE_STRIP.
====
   {TYPE} [number](/types/number.md)
  {FIELD} Graphics.GL_TRIANGLE_FAN
     {RO} Yes
   {DESC} Sets a glDraw's primitive to TRIANGLE_FAN.
====
   {TYPE} [number](/types/number.md)
  {FIELD} Graphics.GL_MAX_TEXTURE_SIZE
     {RO} Yes
   {DESC} Returns the maximum dimensions in pixels your PC can handle for textures in glDraw. A value of 8192 means that glDraw-based functions will crop larger than 8192 pixels in either axis, be it 10x9000 or 8193x8192.
{ENDTABLE}

## GLDraw Primitives

Graphics.glDraw's primitive argument requires a constant to be supplied. The constant defaults to Graphics.GL_TRIANGLES, but others are available:

![glDraw primitives](/images/concepts/gldraw-primitives.png)

For drawing a single image, GL_TRIANGLE_STRIP and GL_TRIANGLE_FAN are most appropriate. The difference for a square image between the two is that with a triangle strip the coordinates are provided in a zig-zag order, while a triangle fan specifies the coordinates clockwise or counter-clockwise.

## Capture Buffers

Capture buffers are snapshot textures that can be used as textures for glDraw calls.

### Functions

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} Graphics.CaptureBuffer(

[number](/types/number.md) width,

[number](/types/number.md) height

)
    {RET} [CaptureBuffer](#capture-buffers) value
   {DESC} The constructor Graphics.CaptureBuffer returns a capture buffer object of the given size.
====
   {NAME} Graphics.redirectCameraFB(

[CaptureBuffer](#capture-buffers) buffer,

[number](/types/number.md) lowpriority,


[number](/types/number.md) highpriority

)
    {RET} [nil](/types/nil.md)
   {DESC} Renders everything between lowpriority and highpriority to the specified CaptureBuffer instead of drawing it to the screen.
{ENDTABLE}

### Instance Methods

[What is a method?](/types/function.md#methods)

{STARTTABLE}
   {NAME} Method
    {RET} Return Values
   {DESC} Description
====
   {NAME} captureAt(

[number](/types/number.md) priority

)
    {RET} [nil](/types/nil.md)
   {DESC} Causes the capture buffer to capture the screen at the given [render priority](/concepts/render-priority.md). This means that the capture buffer's texture will contain everything on and below the given priority.
====
   {NAME} clear(

[number](/types/number.md) priority

)
    {RET} [nil](/types/nil.md)
   {DESC} Causes the capture buffer to clear up until a certain [render priority](/concepts/render-priority.md). This means that the capture buffer's texture is emptied for all priorities above the priority specified, retaining texture data from priorities on or below the given priority.
{ENDTABLE}

## SpriteOverride

SpriteOverride contains references to images currently used by the game. You can access entries within it like so:

```lua
Graphics.sprites.xxxx[yyyy].img = ...
```

`xxxx` represents the graphics type. These are named after the folders within the data/graphics folder (including groups like "hardcoded"). `yyyy` is the ID of the object. With the hardcoded group, this value is a string, rather than a number.

Concrete example:
```lua
Graphics.sprites.block[1].img = Graphics.loadImage("newBlock.png")
```

All instances of Block 1 will now use this new image file. In order to reset this, you can set the sprite override to nil:
```lua
Graphics.sprites.block[1].img = nil
```

Currently, only the img field is available.

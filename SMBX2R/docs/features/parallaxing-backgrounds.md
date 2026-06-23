
# Parallaxing Backgrounds

Creating parallaxing backgrounds in levels has been
streamlined to the point where no user-written lua code is necessary for
most purposes.

Parallaxing backgrounds are now automatically applied
based on the file name of a corresponding .txt (or .ini) file:

![](images/image26.png)

<Note type=warning>The indices for the config file follow the numbering in the editor, when selecting a parallaxing background. The image indices may be off in some instances.</Note>

The txt file can pull from other images in the folder
and define the features of the background’s individual layers, like
so:

```ini
[Backdrop]
name="BG"
depth=450
alignY=TOP
img="prlx_clouds.png"
fitY=true
repeatX=true
speedX=-0.1

[Grid1]
name="Grid1"
depth=150
alignY=BOTTOM
img="prlx_foreground.png"
repeatX=true
repeatY=true
```

-----

Below is a list of parameters for each layer of the
background:

{STARTTABLE}
  {FIELD} Field
   {TYPE} Type
   {DESC} Description
====
  {FIELD} img
   {TYPE} [string](/types/string.md)
   {DESC} REQUIRED: the relative file path to the image to draw in this layer.
====
  {FIELD} name
   {TYPE} [string](/types/string.md)
   {DESC} A name for the layer, used by Background:Get. Defaults to "the name of the layer section (the value in \[brackets\] at the top of a layer's defiinition)".
====
  {FIELD} x
   {TYPE} [number](/types/number.md)
   {DESC} This layer's horizontal offset from the anchor.
====
  {FIELD} y
   {TYPE} [number](/types/number.md)
   {DESC} This layer's vertical offset from the anchor.
====
  {FIELD} speedX
   {TYPE} [number](/types/number.md)
   {DESC} This layer's horizontal movement speed.
====
  {FIELD} speedY
   {TYPE} [number](/types/number.md)
   {DESC} This layer's vertical movement speed.
====
  {FIELD} depth
   {TYPE} [number](/types/number.md) or INFINITE/MAX or MIN
   {DESC} Depth at which to position the layer (0 = in line with scene,&nbsp;&nbsp;&amp;gt;0 = behind scene, &amp;lt;0 = in front of scene), computed from fit if not supplied Default of depth. INFINITE if fit is disabled. This property sets the render priority automatically.
====
  {FIELD} fitX
   {TYPE} [bool](/types/bool.md)
   {DESC} If true, the background will scroll as to align the left edge with the left section boundary, and the right edge with the right section boundary.
====
  {FIELD} fitY
   {TYPE} [bool](/types/bool.md)
   {DESC} If true, the background will scroll as to align the top edge with the top section boundary, and the bottom edge with the bottom section boundary.
====
  {FIELD} parallaxX
   {TYPE} [number](/types/number.md)
   {DESC} Horizontal scroll speed of the layer. Overwrites the horizontal scroll speed handled by the depth setting. 0 = no scrolling, 1 = as fast as the foreground, >1 = faster than foreground.
====
  {FIELD} parallaxY
   {TYPE} [number](/types/number.md)
   {DESC} Vertical scroll speed of the layer. Overwrites the vertical scroll speed handled by the depth setting. 0 = no scrolling, 1 = as fast as the foreground, >1 = faster than foreground.
====
  {FIELD} maxParallaxX
   {TYPE} [number](/types/number.md)
   {DESC} Maximum horizontal scroll speed for the layer.
====
  {FIELD} maxParallaxY
   {TYPE} [number](/types/number.md)
   {DESC} Maximum vertical scroll speed for the layer.
====
  {FIELD} priority
   {TYPE} [number](/types/number.md)
   {DESC} Directly sets the layer's [Render Priority](/concepts/render-priority.md). This value will override the depth setting's automatic priority.
====
  {FIELD} color
   {TYPE} [Color](/reference/Color.md)
   {DESC} Color tint of the layer. Defaults to white.
====
  {FIELD} opacity
   {TYPE} [number](/types/number.md)
   {DESC} Translucency of the parallax layer. Defaults to 1 (opaque).
====
  {FIELD} repeatX
   {TYPE} [bool](/types/bool.md) or [number](/types/number.md)
   {DESC} If true, the layer is set to repeat horizontally. If given a number, 0 means infinite repeats, while positive numbers specify the number of total instances of the layer.
====
  {FIELD} repeatY
   {TYPE} [bool](/types/bool.md) or [number](/types/number.md)
   {DESC} If true, the layer is set to repeat vertically. If given a number, 0 means infinite repeats, while positive numbers specify the number of total instances of the layer.
====
  {FIELD} padX
   {TYPE} [number](/types/number.md)
   {DESC} Pixels of padding between horizontal repetitions of the layer.
====
  {FIELD} padY
   {TYPE} [number](/types/number.md)
   {DESC} Pixels of padding between vertical repetitions of the layer.
====
  {FIELD} marginLeft
   {TYPE} [number](/types/number.md)
   {DESC} Padding on the left side of the layer.
====
  {FIELD} marginTop
   {TYPE} [number](/types/number.md)
   {DESC} Padding on the top side of the layer.
====
  {FIELD} marginRight
   {TYPE} [number](/types/number.md)
   {DESC} Padding on the right side of the layer.
====
  {FIELD} marginBottom
   {TYPE} [number](/types/number.md)
   {DESC} Padding on the bottom side of the layer.
====
  {FIELD} margin
   {TYPE} [table](/types/table.md) of [number](/types/number.md)
   {DESC} A table with named arguments specifying all 4 margin fields.
====
  {FIELD} hidden
   {TYPE} [bool](/types/bool.md)
   {DESC} If true, the layer will not render.
====
  {FIELD} frames
   {TYPE} [number](/types/number.md)
   {DESC} Number of animation frames in this layer's sprite.
====
  {FIELD} startingFrame
   {TYPE} [number](/types/number.md)
   {DESC} The frame on which to start the animation cycle.
====
  {FIELD} framespeed
   {TYPE} [number](/types/number.md)
   {DESC} Frame timer between animation frames, defaults to 8.
====
  {FIELD} alignX
   {TYPE} LEFT, CENTRE, RIGHT
   {DESC} Horizontal alignment of the layer. Defaults to LEFT.
====
  {FIELD} alignY
   {TYPE} TOP, CENTRE, BOTTOM
   {DESC} Vertical alignment of the layer. Defaults to TOP.
====
  {FIELD} sourceWidth
   {TYPE} [number](/types/number.md)
   {DESC} Width of the image's drawn area.
====
  {FIELD} sourceHeight
   {TYPE} [number](/types/number.md)
   {DESC} Height of the image's drawn area.
====
  {FIELD} sourceX
   {TYPE} [number](/types/number.md)
   {DESC} Left edge of the image's drawn area.
====
  {FIELD} sourceY
   {TYPE} [number](/types/number.md)
   {DESC} Top edge of the image's drawn area.
{ENDTABLE}

<Note type="tip">If you prefer, the constant CENTRE has aliases in MID, MIDDLE and CENTER.</Note>

In addition to the per-layer properties, a “fill-color”
property of type [Color](/reference/Color.md) can be defined above all layers, which can be set to color constants or
hexadecimal colours. Further information on the color constants can be
found below.

<Note type="tip">You should define as few of these per-layer properties
as you need, since some of them will override the effects of others
(such as parallaxX, parallaxY and priority overriding depth).</Note>

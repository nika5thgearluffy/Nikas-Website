# Darkness

The Darkness class allows you to create and manipulate darkness fields and lighting.

## Static members

These elements are static to the class itself and can be accessed like so:
```lua
local myLight = Darkness.light{x = 100, y = 100, radius = 64}
```

### Constants

Certain values are constant and can be used as enum configurations in other functions.

| Constant | Type | Value | Description |
| --- | --- | --- | --- |
| Darkness.falloff.INV_SQR | [string](/types/string.md) | ![Inverse Square Falloff](/images/lightfalloff_invsqr.png) | A light falloff mode that fades the light with the inverse square of the distance (closest to physically accurate). |
| Darkness.falloff.LINEAR | [string](/types/string.md) | ![Linear Falloff](/images/lightfalloff_lin.png) | A light falloff mode that fades the light linearly with distance. |
| Darkness.falloff.HARD | [string](/types/string.md) | ![Hard Falloff](/images/lightfalloff_hard.png) | A light falloff mode that cuts off the light suddenly as the distance passes a threshold. |
| Darkness.falloff.SIGMOID | [string](/types/string.md) | ![Sigmoid Falloff](/images/lightfalloff_sigmoid.png) | A light falloff mode that fades the light using an S-curve sigmoid function. |
| Darkness.falloff.STEP | [string](/types/string.md) | ![Stepped Falloff](/images/lightfalloff_step.png) | A light falloff mode that steps the light intensity in linear, hard-edged stages. |
| Darkness.falloff.SQR_STEP | [string](/types/string.md) | ![Inverse Square Stepped Falloff](/images/lightfalloff_sqrstep.png) |A light falloff mode that steps the light intensity in hard-edges stages following the inverse square of the distance. |
| Darkness.falloff.DEFAULT | [string](/types/string.md) | Darkness.falloff.INV_SQR | The default light falloff mode. Equivalent to the inverse square falloff. |
| Darkness.shadow.NONE | [string](/types/string.md) | ![No Shadows](/images/lightshadows_none.png) | No shadows will be cast by objects. |
| Darkness.shadow.RAYMARCH | [string](/types/string.md) | ![Raymarched Soft Shadows](/images/lightshadows_soft.png) | Soft shadows will be cast by objects. <Badge type="warning">This is performance intensive!</Badge> |
| Darkness.shadow.HARD_RAYMARCH | [string](/types/string.md) | ![Raymarched Hard Shadows](/images/lightshadows_hard.png) | Hard shadows will be cast by objects. <Badge type="warning">This is performance intensive!</Badge> |
| Darkness.shadow.DEFAULT | [string](/types/string.md) | Darkness.shadow.NONE |The default shadow casting mode. Equivalent to no shadows. |
| Darkness.lighttype.POINT | [number](/types/number.md) | 0 | A light source emanating from a single point in all directions. |
| Darkness.lighttype.SPOT | [number](/types/number.md) | 1 | A light source emanating from a single point in a cone with a given width and direction. |
| Darkness.lighttype.BOX | [number](/types/number.md) | 2  | A light source emanating from an axis-aligned rectangle.
| Darkness.lighttype.LINE | [number](/types/number.md) | 3  | A light source emanating from a line defined by 2 points.
| Darkness.priority.DISTANCE | [number](/types/number.md) | 0  | A sorting method to determine which lights should be drawn if too many are visible. Prioritises those close to the centre of the screen. |
| Darkness.priority.SIZE | [number](/types/number.md) | 1  | A sorting method to determine which lights should be drawn if too many are visible. Prioritises lights with a larger radius. |
| Darkness.priority.BRIGHTNESS | [number](/types/number.md) | 2  | A sorting method to determine which lights should be drawn if too many are visible. Prioritises brighter lights. |
| Darkness.priority.DEFAULT | [number](/types/number.md) | Darkness.priority.DISTANCE  | The default light sorting method. Equivalent to sorting by distance from the centre of the screen. |

### Static functions

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} Darkness.create(

[named](/types/table.md) args
       
)
    {RET} [DarknessField](/reference/darkness.md#darknessfield) field
   {DESC} Creates a new darkness field in the scene.
   
<details><summary>Arguments</summary>

| Argument | Description |
| --- | --- |
| [string](/types/string.md) falloff <Badge type="tip">Required</Badge>  | The light falloff function the field should use, from the `Darkness.falloff` constants. Custom falloff functions can be used by supplying the path to a .glsl file containing the falloff function. |
| [string](/types/string.md) shadows <Badge type="tip">Required</Badge>  | The shadow casting function the field should use, from the `Darkness.shadow` constants. Custom shadow casting functions can be used by supplying the path to a .glsl file containing the shadow casting function. |
| [number](/types/number.md) maxLights  | The maximum number of lights that can be displayed at any one time (though more lights may be added to the field). Defaults to `60`. |
| [table](/types/table.md) uniforms  | A list of shader uniforms to be passed to the field shader. Defaults to an empty table. |
| [number](/types/number.md) priorityType  | The priority system the field should use to choose which lights to draw, from the `Darkness.priority` constants. Defaults to `Darkness.priority.DEFAULT`. |
| [RECT](/types/rect.md) bounds  | The optional bounding box in which to display the darkness field. If not defined, the darkness field will display over the entire section. |
| [number](/types/number.md) boundBlendLength  | The length of the fade at the edge of the bounding section, if one is defined. Defaults to `64`. |
| [number](/types/number.md) section  | The section the darkness field will appear in. `-1` applies to all sections. Defaults to `-1`. |
| [table](/types/table.md) of [number](/types/number.md) sections  | A list of sections the darkness field will appear in. Takes precedence over the `section` argument, which will be used if this is left undefined. |
| [Color](/reference/Color.md) ambient  | The ambient color of the darkness field. This will be applied as a light when no other light sources are visible. Defaults to `0x0D0D19` <span style="color:#0D0D19FF">■</span>. |
| [number](/types/number.md) priority  | The render priority of the darkness field, and lights and shadows within it. Defaults to `0`. |
| [bool](/types/bool.md) additiveBrightness | Whether lights in the field should cap themselves to a total brightness of `1` or allow "overbrightening" when total brightness exceeds `1`. Defaults to `true` (which allows overbrightening). |
====
   {NAME} Darkness.light(

[named](/types/table.md) args
       
)
    {RET} [Light](/reference/darkness.md#light) source
   {DESC} Creates a new light source, but does not add it to the scene.
   
<details><summary>Arguments</summary>

| Argument | Description |
| --- | --- |
| [number](/types/number.md) x <Badge type="tip">Required</Badge>  | X position of the light source. |
| [number](/types/number.md) y <Badge type="tip">Required</Badge>  | Y position of the light source. |
| [number](/types/number.md) radius <Badge type="tip">Required</Badge>  | Distance from the light source at which no light from the source will reach. |
| [number](/types/number.md) brightness  | The intensity of the light source. Defaults to `1`. |
| [number](/types/number.md) minradius  | The minimum radius from the center of the light for light to be emitted. Not physically accurate and will not impact shadows. Defaults to `0`. |
| [Color](/reference/Color.md) color  | The color of the light. Defaults to `Color.white`. |
| [bool](/types/bool.md) flicker  | Whether the light should flicker or not. Defaults to `false`. |
| [number](/types/number.md) type  | The type of light source this should be, from the `Darkness.lighttype` constants. Defaults to `Darkness.lighttype.POINT`. |
| [Vector2](/reference/vector.md#vector2) direction <Badge type="tip">If type is SPOT or LINE</Badge>  | The vector describing the direction of the light. The light will point from `{x,y}` in the given direction. Defaults to `vector.down2`. |
| [number](/types/number.md) spotangle <Badge type="tip">If type is SPOT</Badge> | The angle width of the spot light, in degrees. Higher angles means a wider spot light. Defaults to `45`. |
| [number](/types/number.md) spotpower <Badge type="tip">If type is SPOT</Badge> | The sharpness of the spot light edge. Higher power means sharper edges. Defaults to `8`. |
| [number](/types/number.md) width <Badge type="tip">If type is BOX</Badge> | The width of the box light source. Defaults to `32`. |
| [number](/types/number.md) height <Badge type="tip">If type is BOX</Badge> | The height of the box light source. Defaults to `32`. |

</details>
====
   {NAME} Darkness.light(

[number](/types/number.md) x,
[number](/types/number.md) y,
[number](/types/number.md) radius,
[number](/types/number.md) brightness,
[Color](/reference/Color.md) color
       
)
	{RET} [Light](/reference/darkness.md#light) source
   {DESC} Creates a new light source, but does not add it to the scene.
====
   {NAME} Darkness.light(

[number](/types/number.md) x,
[number](/types/number.md) y,
[number](/types/number.md) radius,
[number](/types/number.md) brightness,
[Color](/reference/Color.md) color,
[bool](/types/bool.md) flicker
       
)
	{RET} [Light](/reference/darkness.md#light) source
   {DESC} Creates a new light source, but does not add it to the scene.
====
   {NAME} Darkness.addLight(

[Light](/reference/darkness.md#light) light
       
)
	{RET} [Light](/reference/darkness.md#light) light
   {DESC} Adds a light to the global light list, adding it to every darkness field in the scene.
====
   {NAME} Darkness.removeLight(

[Light](/reference/darkness.md#light) light
       
)
	{RET} [nil](/types/nil.md)
   {DESC} Removes a light from the global light list, removing it from the scene (unless it has been added to a specific darkness field separately).


</details>

{ENDTABLE}


## DarknessField

### Instance members

Instance members must be accessed through a reference to a specific [DarknessField](/reference/darkness.md#darknessfield) object.
```lua
local d = Darkness.create{falloff = Darkness.falloff.DEFAULT, shadows = Darkness.shadow.DEFAULT}
d.additiveBrightness = true
d:destroy()
```
<Note type="warning">Attempting to call instance members statically will result in an error!</Note>

### Instance Methods

[What is a method?](/types/function.md#methods)

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} addLight(
   
[Light](/reference/darkness.md#light) light

)
    {RET} [Light](/reference/darkness.md#light) light
   {DESC} Adds a light to this darkness field only. <Badge type="tip">Consider the static method Darkness.addLight(light) instead</Badge>
====
   {NAME} removeLight(
   
[Light](/reference/darkness.md#light) light

)
    {RET} [nil](/types/nil.md)
   {DESC} Removes a light from this darkness field only. Does nothing if the light is part of the global light list managed by the static method `Darkness.addLight`.  <Badge type="tip">Consider the static method Darkness.removeLight(light) instead</Badge>
====
   {NAME} rebuildShader()
    {RET} [nil](/types/nil.md)
   {DESC} Recompiles the darkness field's shader. This is necessary when updating certain values in the field data, such as `maxLights`, `falloff`, and `shadows`.
====
   {NAME} destroy()
    {RET} [nil](/types/nil.md)
   {DESC} Destroys the darkness field, removing it from the scene and preventing it from being reused.
{ENDTABLE}

### Instance Fields

{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE} [string](/types/string.md)
  {FIELD} falloff
     {RO} No
   {DESC} The path to the falloff function used by this darkness field. Can be directly assigned values from the `Darkness.falloff` enum. <Badge type="tip">myField:rebuildShader() must be called after modifying this value</Badge>
====
   {TYPE} [string](/types/string.md)
  {FIELD} shadows
     {RO} No
   {DESC} The path to the shadow casting function used by this darkness field. Can be directly assigned values from the `Darkness.shadow` enum. <Badge type="tip">myField:rebuildShader() must be called after modifying this value</Badge>
====
   {TYPE} [number](/types/number.md)
  {FIELD} maxLights
     {RO} No
   {DESC} The maximum number of lights that this darkness field can display at any one time. <Badge type="tip">myField:rebuildShader() must be called after modifying this value</Badge>
====
   {TYPE} [table](/types/table.md)
  {FIELD} uniforms
     {RO} No
   {DESC} Shader uniforms to be supplied to the darkness rendering function.
====
   {TYPE} [number](/types/number.md)
  {FIELD} priorityType
     {RO} No
   {DESC} The sorting method used by this darkness field to determine how to choose which lights should be displayed when too many are on screen at once. Should be assigned values from the `Darkness.priority` enum.
====
   {TYPE} [RECT](/types/rect.md) bounds
  {FIELD} bounds
     {RO} No
   {DESC} The optional bounding box for the darkness field, outside which neither it nor any of its lights will be visible. Can be assigned [nil](/types/nil.md) to display the field over the entire section.
====
   {TYPE} [number](/types/number.md)
  {FIELD} boundBlendLength
     {RO} No
   {DESC} The length of the fade at the edges of the darkness field bounding box. Only used if `bounds` is not [nil](/types/nil.md).
====
   {TYPE} [table](/types/table.md) of [number](/types/number.md) or [number](/types/number.md)
  {FIELD} section
     {RO} No
   {DESC} The section to display the darkness field in. If set to `-1`, the darkness field will be visible in every section. If set to a list of numbers, the darkness field will be visible in every section in the list.
====
   {TYPE} [Color](/reference/Color.md)
  {FIELD} ambient
     {RO} No
   {DESC} The ambient light color of the darkness field. When no other light is illuminating the scene, this color will be used as a base light level.
====
   {TYPE} [number](/types/number.md)
  {FIELD} priority
     {RO} No
   {DESC} The render priority of the darkness field and its contained lights and shadows.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} additiveBrightness
     {RO} No
   {DESC} If set to `true`, total light levels greater than `1` will cause "overbrightening", causing light bloom. If set to `false`, total light levels will be capped at `1`, which fully illuminates the scene.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} enabled
     {RO} No
   {DESC} Enables or disables the darkness field.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} isValid
     {RO} Yes
   {DESC} Returns `true` if the darkness field has not been destroyed.
====
   {TYPE} [Shader](/types/Shader.md)
  {FIELD} shader
     {RO} No
   {DESC} The shader used by the darkness rendering function. <Badge type="danger">Modifying this value may cause things to break</Badge>
====
   {TYPE} [table](/types/table.md) of [Shader](/types/Shader.md)
  {FIELD} subshaders
     {RO} No
   {DESC} A list of shaders used by the darkness rendering function, automatically generated by `myField:rebuildShader()` to save on performance. <Badge type="danger">Modifying this value may cause things to break</Badge>
 
{ENDTABLE}


## Light

### Instance members

Instance members must be accessed through a reference to a specific [Light](/reference/darkness.md#light) object.
```lua
local l = Darkness.light{x = 100, y = 100, radius = 64}
if l.isValid then
	l:destroy()
end
```
<Note type="warning">Attempting to call instance members statically will result in an error!</Note>

### Instance Methods

[What is a method?](/types/function.md#methods)

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} attach(
   
   [object](/types/object.md) object,
   [bool](/types/bool.md) snap
   
   )
    {RET} [nil](/types/nil.md)
   {DESC} Attaches the light to an object, automatically updating its position to match the object it is attached to. Objects can be anything containing an `x` and `y` field, and may also contain a `width` and `height` field, which will be adjusted for. If `snap` is set to `true`, the light will automatically snap to the centre of the object, otherwise the difference in position between them will be preserved.
====
   {NAME} detach()
    {RET} [nil](/types/nil.md)
   {DESC} Detaches the light from a previously attached object. This is equivalent to setting `myLight.parent` to `false`.
====
   {NAME} destroy()
    {RET} [nil](/types/nil.md)
   {DESC} Removes the light from all darkness fields, including the global light list, and prevents it from being reused.

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
   {DESC} The X coordinate of the light source.
====
   {TYPE} [number](/types/number.md)
  {FIELD} y
     {RO} No
   {DESC} The Y coordinate of the light source.
====
   {TYPE} [number](/types/number.md)
  {FIELD} radius
     {RO} No
   {DESC} The falloff radius of the light source.
====
   {TYPE} [number](/types/number.md)
  {FIELD} brightness
     {RO} No
   {DESC} The brightness intensity of the light source.
====
   {TYPE} [number](/types/number.md)
  {FIELD} intensity
     {RO} No
   {DESC} The brightness intensity of the light source.
====
   {TYPE} [Color](/reference/Color.md)
  {FIELD} color
     {RO} No
   {DESC} The color of the light source.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} flicker
     {RO} No
   {DESC} Whether the light should flicker slightly.
====
   {TYPE} [number](/types/number.md)
  {FIELD} type
     {RO} No
   {DESC} The light source type, from the `Darkness.lighttype` list. <Badge type="tip">Be sure to set necessary additional values when changing this to SPOT or BOX</Badge>
====
   {TYPE} [Vector2](/reference/vector.md#vector2)
  {FIELD} dir
     {RO} No
   {DESC} The direction of the light. <Badge type="tip">Only used when type is SPOT or LINE</Badge>
====
   {TYPE} [Vector2](/reference/vector.md#vector2)
  {FIELD} direction
     {RO} No
   {DESC} The direction of the light. <Badge type="tip">Only used when type is SPOT or LINE</Badge>
====
   {TYPE} [number](/types/number.md)
  {FIELD} spotangle
     {RO} No
   {DESC} The angular width of the spot light, in degrees. <Badge type="tip">Only used when type is SPOT</Badge>
====
   {TYPE} [number](/types/number.md)
  {FIELD} spotpower
     {RO} No
   {DESC} The sharpness power of the edges of the spot light. Higher values means sharper edges. <Badge type="tip">Only used when type is SPOT</Badge>
====
   {TYPE} [number](/types/number.md)
  {FIELD} width
     {RO} No
   {DESC} The width of the box light source. <Badge type="tip">Only used when type is BOX</Badge>
====
   {TYPE} [number](/types/number.md)
  {FIELD} height
     {RO} No
   {DESC} The height of the box light source. <Badge type="tip">Only used when type is BOX</Badge>
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} isValid
     {RO} Yes
   {DESC} Returns `true` if the light has not been destroyed.
{ENDTABLE}


### Custom Lighting

The shadow and falloff systems in darkness fields allow for custom functions to be supplied via GLSL. To define custom lighting functions, you should create a .glsl file containing the functions in question.

In order to create a custom falloff function, you should use the following structure:

```glsl
vec3 falloff(vec4 light, float d, float rad)
{
	//Code here
}```

The arguments to this function contain the relevant information, and the function should return the final colour of the pixel after the falloff has been applied:

{STARTTABLE}
   {NAME} Argument
   {DESC} Description
====
   {NAME} light
   {DESC} The color of the light, stored in the `rgb` values of the `vec4`, with the alpha value `a` containing the brightness of the light.
====
   {NAME} d
   {DESC} The distance from the current pixel to the light source.
====
   {NAME} rad
   {DESC} The radius of the light source.
{ENDTABLE}


In order to create a custom shadow casting function, you should use the following structure:

```glsl
vec3 shadow(vec3 col, vec2 lightpos, vec2 pixpos)
{
	//Code here
}
```

The arguments to this function contain the relevant information, and the function should return the final colour of the pixel after the shdaows have been applied:


{STARTTABLE}
   {NAME} Argument
   {DESC} Description
====
   {NAME} col
   {DESC} The color of the current pixel, before shadows are applied.
====
   {NAME} lightpos
   {DESC} The `{x,y}` coordinate of the light source in world space.
====
   {NAME} pixpos
   {DESC} The `{x,y}` coordinate of the current pixel in world space.
{ENDTABLE}

Additional uniforms may be utilised in both or either of these functions, and can be supplied using the darkness field's `uniforms` property.

On top of this, there are some existing uniforms that are accessible from these shaders automatically, which are listed here:

{STARTTABLE}
   {TYPE} Type
  {FIELD} Uniform
   {DESC} Description
====
   {TYPE} [sampler2D](/types/Shader.md)
  {FIELD} iChannel0
   {DESC} The base image that is captured from the scene, with no lighting effects applied.
====
   {TYPE} [vec2](/types/Shader.md)
  {FIELD} cameraPos
   {DESC} The world space position of the camera (the top left corner).
====
   {TYPE} [mat3x4 array](/types/Shader.md)
  {FIELD} lightData
   {DESC} The data table containing all the information about the lights in the scene. The length of the array is equal to the `_MAXLIGHTS` macro. <Badge type="tip">You should never need to access this directly</Badge>
====
   {TYPE} [sampler2D](/types/Shader.md)
  {FIELD} mask
   {DESC} The scene block mask, containing various information about the blocks in the scene. The shadow mask is stored in the `red` channel.
====
   {TYPE} [vec4](/types/Shader.md)
  {FIELD} ambient
   {DESC} The ambient light color of the darkness field.
====
   {TYPE} [vec4](/types/Shader.md)
  {FIELD} bounds
   {DESC} A 4D vector containing the left, top, right, and bottom of the bounding box for the darkness field, in that order. <Badge type="tip">You should never need to access this directly</Badge>
====
   {TYPE} [float](/types/Shader.md)
  {FIELD} useBounds
   {DESC} Will be `1` if the bounding box for the darkness field should be used, and `0` otherwise. <Badge type="tip">You should never need to access this directly</Badge>
====
   {TYPE} [float](/types/Shader.md)
  {FIELD} boundBlend
   {DESC} The fade length at the edges of the bounding box, if used. <Badge type="tip">You should never need to access this directly</Badge>
{ENDTABLE}

There is also the `_MAXLIGHTS` macro, which contains the maximum number of lights that can be visible at any one time in this darkness field. This value will not always equal the `maxLights` value set on the darkness field itself, as this can be changed by the compiler when generating subshaders for performance purposes.
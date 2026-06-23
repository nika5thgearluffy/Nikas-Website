# Lib3D

As a module, lib3D needs to be loaded in order to be accessible in your level or episode:
```lua
local lib3d = require("lib3d")
```

Lib3D is a library for 3D rendering. It contains a set of object primitives, and support for .obj file importing, as well as a variety of material models and custom [Material Shaders](#material-shaders).

## Some Basic Info

Lib3D does not use the traditional SMBX camera system. It exists in its own scene, and has its own set of objects, lighting, etc. You can blend these two scenes together, but they are not intrinsically linked. Instead, to blend the scenes together, you should do the following:

```lua
function onCameraDraw()
	lib3d.camera.transform.position = vector(camera.x + 400, camera.y + 300, -lib3d.camera.flength)
end
```

This will use player one's camera, and position the 3D camera such that the level sits along the plane z = 0.

To support multiplayer, you may also need a slightly more complicated system with a custom camera.


Lib3D consists of a number of different object types:

| Object | Description |
| --- | --- |
| [MeshData](#meshdata) | Raw mesh information loaded from a .obj file, which can be passed to a constructor to instantiate a mesh. |
| [Mesh3D](#mesh3d) | An instantiated mesh object in the 3D scene. |
| [Light3D](#light3d) | A light emitter object that illuminates part of the 3D scene. |
| [Camera3D](#camera3d) | A camera object that can act as a viewport into the 3D scene. |
| [Material3D](#material3d) | A material object that affects how meshes are rendered in the 3D scene. |

Lib3D also supports custom [Material Shaders](#material-shaders), that can be used to further customise [Material3D](#material3d) objects.

### Constants

Certain values are constant and can be used as enum configurations in other functions.

| Constant | Type | Value | Description |
| --- | --- | --- | --- |
| lib3d.projection.PERSPECTIVE | [number](/types/number.md) | 0 | Camera projection mode that makes far away objects seem smaller. |
| lib3d.projection.ORTHOGRAPHIC | [number](/types/number.md) | 1 | Camera projection mode that does not alter the size of objects with distance. |
| lib3d.uv.TILE | [number](/types/number.md) | 0 | UV mapping mode that displays the entire texture on each face. |
| lib3d.uv.UNWRAP | [number](/types/number.md) | 1 | UV mapping mode that smartly unwraps the mesh such that each face has its own unique area of the texture. |
| lib3d.lighttype.DIRECTIONAL | [number](/types/number.md) | 0 | Lighting mode that considers light to always come from the same direction (effectively infinitely far away). Light position is not considered in this mode. |
| lib3d.lighttype.POINT | [number](/types/number.md) | 1 | Lighting mode that considers light to radiate out from a single point in space. |
| lib3d.import.axis.POS_X | [number](/types/number.md) | 0 | Mesh import orientation that places +X upwards. |
| lib3d.import.axis.POS_Y | [number](/types/number.md) | 1 | Mesh import orientation that places +Y upwards. |
| lib3d.import.axis.POS_Z | [number](/types/number.md) | 2 | Mesh import orientation that places +Z upwards. |
| lib3d.import.axis.NEG_X | [number](/types/number.md) | 3 | Mesh import orientation that places -X upwards. |
| lib3d.import.axis.NEG_Y | [number](/types/number.md) | 4 | Mesh import orientation that places -Y upwards. |
| lib3d.import.axis.NEG_Z | [number](/types/number.md) | 5 | Mesh import orientation that places -Z upwards. |
| lib3d.import.axis.V_DOWN | [number](/types/number.md) | 6 | Mesh import UV orientation that considers V coordinates starting from the top of the image. |
| lib3d.import.axis.V_UP | [number](/types/number.md) | 7 | Mesh import UV orientation that considers V coordinates starting from the bottom of the image. |
| lib3d.macro.ALPHA_OPAQUE | [number](/types/number.md) | 0 | Material macro value for `ALPHAMODE` - opaque rendering mode. |
| lib3d.macro.ALPHA_CUTOFF | [number](/types/number.md) | 0.5 | Material macro value for `ALPHAMODE` - alpha cutoff rendering mode. |
| lib3d.macro.ALPHA_BLEND | [number](/types/number.md) | 1 | Material macro value for `ALPHAMODE` - alpha blend rendering mode. |
| lib3d.macro.ALPHA_DITHER | [number](/types/number.md) | 2 | Material macro value for `ALPHAMODE` - alpha dither rendering mode. |
| lib3d.macro.DEBUG_OFF | [number](/types/number.md) | 0 | Material macro value for `DEBUG` - no debug rendering. |
| lib3d.macro.DEBUG_NORMALS | [number](/types/number.md) | 1 | Material macro value for `DEBUG` - normal direction debug rendering. |
| lib3d.macro.DEBUG_DEPTH | [number](/types/number.md) | 2 | Material macro value for `DEBUG` - depth buffer debug rendering. |
| lib3d.macro.DEBUG_POSITION | [number](/types/number.md) | 3 | Material macro value for `DEBUG` - world position debug rendering. |
| lib3d.macro.DEBUG_UNLIT | [number](/types/number.md) | 4 | Material macro value for `DEBUG` - unlit debug rendering. |
| lib3d.macro.DEBUG_OCCLUSION | [number](/types/number.md) | 5 | Material macro value for `DEBUG` - ambient occlusion debug rendering. |
| lib3d.macro.UV_UNBOUND | [number](/types/number.md) | 0 | Material macro value for `UV_MODE` - UV mode allows coordinates outside the 0-1 range. |
| lib3d.macro.UV_WRAP | [number](/types/number.md) | 1 | Material macro value for `UV_MODE` - UV mode wraps coordinates to repeat the 0-1 range. |
| lib3d.macro.UV_CLAMP | [number](/types/number.md) | 3 | Material macro value for `UV_MODE` - UV mode clamps coordinates to the 0-1 range. |
| lib3d.macro.USE_FOG | [number](/types/number.md) | 0 | Material macro value for `USE_FOG` - If set to 1, distance fog is applied to the material. |


## Functions

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} loadMesh(

[string](/types/string.md) path,
[named](/types/table.md) importSettings

)
    {RET} [MeshData](/modules/lib3d.md#meshdata)
   {DESC} Loads a .obj file, using the given import settings, and returns the mesh data that can then be instantiated using `lib3d.Mesh`.

   <details><summary>Import arguments</summary>

| Argument | Description |
| --- | --- |
| [number](/types/number.md) upaxis | The axis that should be considered "positive Y" in the engine (various 3D editors treat axes differently), from the `lib3d.import.axis` table. |
| [number](/types/number.md) uvorient | The orientation of the UV texture coorinates, whether V coordinates should be upwards or downwards on the image, from the `lib3d.import.axis` table. |
| [Vector3](/reference/vector.md#vector3) scale | Import scale multiplier for the object. Ideally, static objects should be scaled at this point, rather than using the more dynamic `scale` options during creation of the [Mesh3D](/modules/lib3d.md#mesh3d) object. |

</details>
====
   {NAME} Mesh(

[named](/types/table.md) args

)
    {RET} [Mesh3D](/modules/lib3d.md#mesh3d)
   {DESC} Constructs a mesh from a file path or [MeshData](/modules/lib3d.md#meshdata) object.
   
<details><summary>Construction arguments</summary>

| Argument | Description |
| --- | --- |
| [Vector3](/reference/vector.md#vector3) position | The 3D position of the mesh, defaults to `(0,0,0)`. |
| [Quaternion](/reference/vector.md#quaternion) rotation | The 3D rotation of the mesh, defaults to `vector.quatid`. |
| [Vector3](/reference/vector.md#vector3) or [number](/types/number.md) scale | The 3D scale of the mesh, defaults to `(1,1,1)`. Supplying a number will result in a uniform scale modifier. |
| [Material3D](/modules/lib3d.md#material3d) material | A single material to apply to the entire mesh. Defaults to `lib3d.defaultMaterial`. |
| [table](/types/table.md) of [Material3D](/modules/lib3d.md#material3d) materials | A list of materials to apply to the mesh. The mesh will be drawn once with each material. |
| [MeshData](/modules/lib3d.md#meshdata) meshdata | A pre-loaded set of mesh data to instantiate. |
| [string](/types/string.md) path | A path to a .obj file that will be loaded. This will be ignored unless `meshdata` is [nil](/types/nil.md). |
| [table](/types/table.md) of [Vector3](/reference/vector.md#vector3) vertexCoords | A list of vertices for the mesh. This will be ignored unless `meshdata` and `path` are [nil](/types/nil.md). |
| [table](/types/table.md) of [Vector2](/reference/vector.md#vector2) texCoords | A list of texture coordinates for the mesh. This will be ignored unless `meshdata` and `path` are [nil](/types/nil.md). |
| [table](/types/table.md) of [Vector3](/reference/vector.md#vector3) normals | A list of vertex normals for the mesh. This will be ignored unless `meshdata` and `path` are [nil](/types/nil.md). |
| [table](/types/table.md) of [Color](/reference/Color.md) vertexColors | A list of vertex colors for the mesh. This will be ignored unless `meshdata` and `path` are [nil](/types/nil.md). |
| [table](/types/table.md) of [table](/types/table.md) of [number](/types/number.md) faces | A list of triangular faces for the mesh, formatted as lists of indices into the other lists (for example: `{1,2,3}`). This will be ignored unless `meshdata` and `path` are [nil](/types/nil.md). |

</details>
====
   {NAME} Box(

[named](/types/table.md) constructionArgs

)
    {RET} [Mesh3D](/modules/lib3d.md#mesh3d)
   {DESC} Constructs a box mesh.
   
<details><summary>Construction arguments</summary>

| Argument | Description |
| --- | --- |
| [Vector3](/reference/vector.md#vector3) position | The 3D position of the mesh, defaults to `(0,0,0)`. |
| [Quaternion](/reference/vector.md#quaternion) rotation | The 3D rotation of the mesh, defaults to `vector.quatid`. |
| [Vector3](/reference/vector.md#vector3) or [number](/types/number.md) scale | The 3D scale of the mesh, defaults to `(1,1,1)`. Supplying a number will result in a uniform scale modifier. |
| [Material3D](/modules/lib3d.md#material3d) material | A single material to apply to the entire mesh. Defaults to `lib3d.defaultMaterial`. |
| [table](/types/table.md) of [Material3D](/modules/lib3d.md#material3d) materials | A list of materials to apply to the mesh. The mesh will be drawn once with each material. |
| [Vector3](/reference/vector.md#vector3) size | The 3D dimensions of the box, can be overridden by `width`, `height`, and `depth` arguments. Defaults to `(1,1,1)`. |
| [number](/types/number.md) width | The width of the box, defaults to `1`. |
| [number](/types/number.md) height | The height of the box, defaults to `1`. |
| [number](/types/number.md) depth | The depth of the box, defaults to `1`. |
| [number](/types/number.md) uv | The UV format of the box, either `lib3d.uv.TILE` (maps the entire image to each face) or `lib3d.uv.UNWRAP` (maps the image to a box net). Defaults to  `lib3d.uv.TILE`. |

</details>
====
   {NAME} Sphere(

[named](/types/table.md) constructionArgs

)
    {RET} [Mesh3D](/modules/lib3d.md#mesh3d)
   {DESC} Constructs a sphere mesh.
   
<details><summary>Construction arguments</summary>

| Argument | Description |
| --- | --- |
| [Vector3](/reference/vector.md#vector3) position | The 3D position of the mesh, defaults to `(0,0,0)`. |
| [Quaternion](/reference/vector.md#quaternion) rotation | The 3D rotation of the mesh, defaults to `vector.quatid`. |
| [Vector3](/reference/vector.md#vector3) or [number](/types/number.md) scale | The 3D scale of the mesh, defaults to `(1,1,1)`. Supplying a number will result in a uniform scale modifier. |
| [Material3D](/modules/lib3d.md#material3d) material | A single material to apply to the entire mesh. Defaults to `lib3d.defaultMaterial`. |
| [table](/types/table.md) of [Material3D](/modules/lib3d.md#material3d) materials | A list of materials to apply to the mesh. The mesh will be drawn once with each material. |
| [number](/types/number.md) radius | The radius of the sphere, defaults to `1`. |
| [bool](/types/bool.md) smoothnormals | If true, the sphere will be smoothed. Otherwise, the sphere will appear to be a high density polygon. Defaults to `true`. |
| [number](/types/number.md) subdivide | The number of subdivisions for the sphere, can be overridden by `vdiv` and `hdiv`. By default, this is automatically computed based on the `radius`. |
| [number](/types/number.md) vdiv | The number of vertical subdivisions for the sphere. Higher means a higher density mesh, vertically. By default, this is automatically computed based on the `radius`. |
| [number](/types/number.md) hdiv | The number of horizontal subdivisions for the sphere. Higher means a higher density mesh, horizontally. By default, this is automatically computed based on the `radius`. |
| [number](/types/number.md) uv | The UV format of the box, either `lib3d.uv.TILE` (maps the entire image to each face) or `lib3d.uv.UNWRAP` (maps the image to the sphere using a [Mercator Projection](https://en.wikipedia.org/wiki/Mercator_projection)). Defaults to  `lib3d.uv.UNWRAP`. |

</details>
====
   {NAME} Cylinder(

[named](/types/table.md) constructionArgs

)
    {RET} [Mesh3D](/modules/lib3d.md#mesh3d)
   {DESC} Constructs a cylinder mesh.
   
<details><summary>Construction arguments</summary>

| Argument | Description |
| --- | --- |
| [Vector3](/reference/vector.md#vector3) position | The 3D position of the mesh, defaults to `(0,0,0)`. |
| [Quaternion](/reference/vector.md#quaternion) rotation | The 3D rotation of the mesh, defaults to `vector.quatid`. |
| [Vector3](/reference/vector.md#vector3) or [number](/types/number.md) scale | The 3D scale of the mesh, defaults to `(1,1,1)`. Supplying a number will result in a uniform scale modifier. |
| [Material3D](/modules/lib3d.md#material3d) material | A single material to apply to the entire mesh. Defaults to `lib3d.defaultMaterial`. |
| [table](/types/table.md) of [Material3D](/modules/lib3d.md#material3d) materials | A list of materials to apply to the mesh. The mesh will be drawn once with each material. |
| [number](/types/number.md) radius | The radius of the cylinder, defaults to `1`. |
| [number](/types/number.md) height | The height of the cylinder, defaults to `1`. |
| [bool](/types/bool.md) smoothnormals | If true, the cylinder will be smoothed. Otherwise, the cylinder will appear to be a high density polygon. Defaults to `true`. |
| [number](/types/number.md) subdivide | The number of subdivisions for the cylinder. Defaults to `12`. |
| [number](/types/number.md) uv | The UV format of the box, either `lib3d.uv.TILE` (maps the entire image to each face) or `lib3d.uv.UNWRAP` (wraps the middle third of the image around the cylinder, with circles on the top and bottom mapped to the ends). Defaults to  `lib3d.uv.TILE`. |

</details>
====
   {NAME} Quad(

[named](/types/table.md) constructionArgs

)
    {RET} [Mesh3D](/modules/lib3d.md#mesh3d)
   {DESC} Constructs a quad (a simple, two-triangle rectangle) mesh.
   
<details><summary>Construction arguments</summary>

| Argument | Description |
| --- | --- |
| [Vector3](/reference/vector.md#vector3) position | The 3D position of the mesh, defaults to `(0,0,0)`. |
| [Quaternion](/reference/vector.md#quaternion) rotation | The 3D rotation of the mesh, defaults to `vector.quatid`. |
| [Vector3](/reference/vector.md#vector3) or [number](/types/number.md) scale | The 3D scale of the mesh, defaults to `(1,1,1)`. Supplying a number will result in a uniform scale modifier. |
| [Material3D](/modules/lib3d.md#material3d) material | A single material to apply to the entire mesh. Defaults to `lib3d.defaultMaterial`. |
| [table](/types/table.md) of [Material3D](/modules/lib3d.md#material3d) materials | A list of materials to apply to the mesh. The mesh will be drawn once with each material. |
| [Vector2](/reference/vector.md#vector2) size | The 2D dimensions of the quad, can be overridden by `width` and `height` arguments. Defaults to `(1,1)`. |
| [number](/types/number.md) width | The width of the quad, defaults to `1`. |
| [number](/types/number.md) height | The height of the quad, defaults to `1`. |
| [Vector2](/reference/vector.md#vector3) normal | The 3D direction the quad should face. Defaults to `(0,0,-1)`. |

</details>
====
   {NAME} Plane(

[named](/types/table.md) constructionArgs

)
    {RET} [Mesh3D](/modules/lib3d.md#mesh3d)
   {DESC} Constructs a plane mesh.
   
<details><summary>Construction arguments</summary>

| Argument | Description |
| --- | --- |
| [Vector3](/reference/vector.md#vector3) position | The 3D position of the mesh, defaults to `(0,0,0)`. |
| [Quaternion](/reference/vector.md#quaternion) rotation | The 3D rotation of the mesh, defaults to `vector.quatid`. |
| [Vector3](/reference/vector.md#vector3) or [number](/types/number.md) scale | The 3D scale of the mesh, defaults to `(1,1,1)`. Supplying a number will result in a uniform scale modifier. |
| [Material3D](/modules/lib3d.md#material3d) material | A single material to apply to the entire mesh. Defaults to `lib3d.defaultMaterial`. |
| [table](/types/table.md) of [Material3D](/modules/lib3d.md#material3d) materials | A list of materials to apply to the mesh. The mesh will be drawn once with each material. |
| [Vector2](/reference/vector.md#vector2) size | The 2D dimensions of the quad, can be overridden by `width` and `height` arguments. Defaults to `(1,1)`. |
| [number](/types/number.md) width | The width of the quad, defaults to `1`. |
| [number](/types/number.md) height | The height of the quad, defaults to `1`. |
| [Vector2](/reference/vector.md#vector3) normal | The 3D direction the quad should face. Defaults to `(0,0,-1)`. |
| [number](/types/number.md) subdivide | The number of subdivisions for the plane, can be overridden by `vdiv` and `hdiv`. Defaults to `8`. |
| [number](/types/number.md) vdiv | The number of vertical subdivisions for the plane. Higher means a higher density mesh, vertically. Defaults to `8`. |
| [number](/types/number.md) hdiv | The number of horizontal subdivisions for the plane. Higher means a higher density mesh, horizontally. Defaults to `8`. |

</details>
====
   {NAME} Light(

[named](/types/table.md) args

)
    {RET} [Light3D](/modules/lib3d.md#light3d)
   {DESC} Creates a new light
   
<details><summary>Construction arguments</summary>

| Argument | Description |
| --- | --- |
| [Vector3](/reference/vector.md#vector3) position | The 3D position of the light, defaults to `(0,0,0)`. |
| [Quaternion](/reference/vector.md#quaternion) rotation | The 3D rotation of the light, defaults to `vector.quatid`. |
| [Color](/reference/Color.md) color | The color of the light (white is pure light, black is no light). Defaults to `Color.white`. |
| [number](/types/number.md) lighttype | The type of the light, either `lib3d.lighttype.DIRECTIONAL` or `lib3d.lighttype.POINT`. Defaults to  `lib3d.lighttype.DIRECTIONAL`. |
| [number](/types/number.md) brightness | The brightness of the light. Defaults to `10`. |
| [number](/types/number.md) radius | <Badge type="tip">If type is POINT</Badge> The radius of the light. Defaults to `256`. |

</details>
====
   {NAME} Camera(

[named](/types/table.md) args

)
    {RET} [Camera3D](/modules/lib3d.md#camera3d)
   {DESC} Creates a new camera
   
<details><summary>Construction arguments</summary>

| Argument | Description |
| --- | --- |
| [Vector3](/reference/vector.md#vector3) position | The 3D position of the camera, defaults to `(0,0,0)`. |
| [Quaternion](/reference/vector.md#quaternion) rotation | The 3D rotation of the camera, defaults to `vector.quatid`. |
| [number](/types/number.md) projection | The type of projections, either `lib3d.projection.PERSPECTIVE` or `lib3d.projection.ORTHOGRAPHIC`. Defaults to `lib3d.projection.PERSPECTIVE`. |
| [number](/types/number.md) fov | The horizontal [field of view angle](https://en.wikipedia.org/wiki/Field_of_view_in_video_games) of the camera, in degrees. Only used in `PERSPECTIVE` rendering mode. Defaults to `45`. |
| [Vector2](/reference/vector.md#vector2) orthosize | The [`ORTHOGRAPHIC` projection](https://en.wikipedia.org/wiki/Orthographic_projection) size. Only used in `ORTHOGRAPHIC` rendering mode. Defaults to `(800,600)`. |
| [number](/types/number.md) nearclip | The near [clipping plane](https://en.wikipedia.org/wiki/Clipping_(computer_graphics)#Clipping_in_3D_graphics) of the camera. Defaults to `100`. |
| [number](/types/number.md) farclip | The far [clipping plane](https://en.wikipedia.org/wiki/Clipping_(computer_graphics)#Clipping_in_3D_graphics) of the camera. Defaults to `10000`. |
| [number](/types/number.md) renderscale | A resolution multiplier. Higher values means higher quality rendering, but at substantial performance costs. Defaults to `1`. |

</details>
====
   {NAME} Material(

[string](/types/string.md) shader,

[table](/types/table.md) of [object](/types/object.md) uniforms,

[table](/types/table.md) of [object](/types/object.md) attributes,

[table](/types/table.md) of [object](/types/object.md) macros

)
    {RET} [Material3D](/modules/lib3d.md#material3d)
   {DESC} Creates a new material. The `shader` object should be a lib3d [Material Shader](/modules/lib3d.md#material-shaders), or [nil](/types/nil.md). The `uniforms` and `attributes` lists will be passed to the [Material Shader](#material-shaders). The `iChannel0` uniform can be set by assigning a `texture` uniform, and a `color` uniform can be used to tint the material. Textures registered as normal maps in the [Material Shader](#material-shaders) (by using the `n_` prefix) can be assigned without the use of the normal map prefix (for example, a uniform declared as a normal map in the [Material Shader](#material-shaders) named `n_normalmap` can be assigned using just `normalmap` from Lua). The `macros` list allows modification of custom `#define` macros in the material, as well as a few built in ones:
   <details><summary>Built-in macros</summary>

| Macro | Description |
| --- | --- |
| [number](/types/number.md) DEBUG | The current debug mode, from the `lib3d.macro.DEBUG_` options. |
| [number](/types/number.md) ALPHAMODE | The current alpha rendering mode, from the `lib3d.macro.ALPHA_` options, or any number between `0` and `2`. Values between `0` and `1` will act as `ALPHA_CUTOFF`, with a cutoff threshold defined by the number supplied. 2 is ALPHA_DITHER. |
| [number](/types/number.md) UV_MODE | The current uv wrap mode, from the `lib3d.macro.UV_` options. |
| [bool](/types/bool.md) TONEMAP | Whether or not the tonemapper is active. |
| [bool](/types/bool.md) UNLIT | Whether or not lighting should be ignored. |
| [number](/types/number.md) FOG | Blends the fog color into the scene. |
| [string](/types/string.md) LIGHTING | The name of a function to use for lighting calculations. Built in options are `"lighting_default"`, `"lighting_lambert"`, `"lighting_blinnphong"`, `"lighting_cel"`. |

</details>

====
   {NAME} project(

[Camera3D](/modules/lib3d.md#camera3d) camera,
[Vector3](/reference/vector.md#vector3) point

)
    {RET} [Vector2](/reference/vector.md#vector2)
   {DESC} Projects a point in 3D space into the screen, using the CPU.
{ENDTABLE}

### Static fields

{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} lib3d.debug
     {RO} No
   {DESC} If set to `true`, debug information for the main camera will be displayed onscreen.
====
   {TYPE} [Color](/reference/Color.md)
  {FIELD} lib3d.ambientLight
     {RO} No
   {DESC} The color of the ambient lighting in the scene.
====
   {TYPE} [Color](/reference/Color.md)
  {FIELD} lib3d.fogColor
     {RO} No
   {DESC} The color of distance fog. Opacity manages the strength of the effect.
====
   {TYPE} [Material3D](/modules/lib3d.md#material3d)
  {FIELD} lib3d.defaultMaterial
     {RO} No
   {DESC} The default material assigned to objects with no material specified.
====
   {TYPE} [Camera3D](/modules/lib3d.md#camera3d)
  {FIELD} lib3d.camera
     {RO} No
   {DESC} The default camera used by lib3d.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} lib3d.dualCamera
     {RO} No
   {DESC} If set to `true`, the default camera will allow the 2D scene to "intersect" the 3D environment. Defaults to `true`.
{ENDTABLE}


## MeshData

Formatted mesh data that can be instantiated.

### Instance members

Instance members must be accessed through a reference to a specific [MeshData](/modules/lib3d.md#meshdata) object. These do not normally need to be manually manipulated.
```lua
local m = lib3d.loadMesh("mesh.obj")
Misc.dialog(m.faces)
```
<Note type="warning">Attempting to call instance members statically will result in an error!</Note>

### Instance Fields

{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE} [table](/types/table.md) of [table](/types/table.md) of [number](/types/number.md)
  {FIELD} faces
     {RO} No
   {DESC} A list of triangular faces for the mesh, formatted as lists of indices into the other lists (for example: `{1,2,3}`).
====
   {TYPE} [table](/types/table.md) of [number](/types/number.md)
  {FIELD} verts
     {RO} No
   {DESC} A flattened list of vertices for the mesh.
====
   {TYPE} [table](/types/table.md) of [number](/types/number.md)
  {FIELD} texcoords
     {RO} No
   {DESC} A flattened list of texture coordinates for the mesh.
====
   {TYPE} [table](/types/table.md) of [number](/types/number.md)
  {FIELD} normals
     {RO} No
   {DESC} A flattened list of vertex normals for the mesh.
====
   {TYPE} [table](/types/table.md) of [number](/types/number.md)
  {FIELD} colors
     {RO} No
   {DESC} A flattened list of vertex colors for the mesh.
====
   {TYPE} [table](/types/table.md) of [number](/types/number.md)
  {FIELD} tangents
     {RO} No
   {DESC} A flattened list of vertex tangents for the mesh.
====
   {TYPE} [table](/types/table.md) of [number](/types/number.md)
  {FIELD} facenormals
     {RO} No
   {DESC} A flattened list of face normals for the mesh.
{ENDTABLE}


## Mesh3D

An instantiated mesh object that will be rendered in a scene.

### Instance members

Instance members must be accessed through a reference to a specific [Mesh3D](/modules/lib3d.md#mesh3d) object.
```lua
local m = lib3d.Box{}
m.x = m.x + 5
m:destroy()
```
<Note type="warning">Attempting to call instance members statically will result in an error!</Note>

### Instance Methods

[What is a method?](/types/function.md#methods)

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} destroy()
    {RET} [nil](/types/nil.md)
   {DESC} Permanently destroys the mesh object, removing it from the scene.
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
   {DESC} The x coordinate of the mesh in the scene.
====
   {TYPE} [number](/types/number.md)
  {FIELD} y
     {RO} No
   {DESC} The y coordinate of the mesh in the scene.
====
   {TYPE} [number](/types/number.md)
  {FIELD} z
     {RO} No
   {DESC} The z coordinate of the mesh in the scene.
====
   {TYPE} [Vector3](/reference/vector.md#vector3)
  {FIELD} position
     {RO} No
   {DESC} The position of the mesh in the scene (equivalent to `vector(mesh.x, mesh.y, mesh.z)`).
====
   {TYPE} [Quaternion](/reference/vector.md#quaternion)
  {FIELD} rotation
     {RO} No
   {DESC} The rotation of the mesh in the scene.
====
   {TYPE} [Vector3](/reference/vector.md#vector3)
  {FIELD} scale
     {RO} No
   {DESC} The scale of the mesh in the scene.
====
   {TYPE} [Transform3D](/reference/Transform.md#transform3d)
  {FIELD} transform
     {RO} No
   {DESC} The transform that determines the mesh's position, rotation, and scale.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} active
     {RO} No
   {DESC} Whether the mesh will be displayed in the scene or not. Use this to hide and show meshes.
====
   {TYPE} [Material3D](/modules/lib3d.md#material3d)
  {FIELD} material
     {RO} No
   {DESC} The first material assigned to this mesh.
====
   {TYPE} [table](/types/table.md) of [Material3D](/modules/lib3d.md#material3d)
  {FIELD} materials
     {RO} No
   {DESC} The list of materials assigned to this mesh.
====
   {TYPE} [table](/types/table.md) of [table](/types/table.md) of [number](/types/number.md)
  {FIELD} faces
     {RO} No
   {DESC} A list of triangular faces for the mesh, formatted as lists of indices into the other lists (for example: `{1,2,3}`).
====
   {TYPE} [table](/types/table.md) of [number](/types/number.md)
  {FIELD} verts
     {RO} No
   {DESC} A flattened list of vertices for the mesh.
====
   {TYPE} [table](/types/table.md) of [number](/types/number.md)
  {FIELD} texcoords
     {RO} No
   {DESC} A flattened list of texture coordinates for the mesh.
====
   {TYPE} [table](/types/table.md) of [number](/types/number.md)
  {FIELD} normals
     {RO} No
   {DESC} A flattened list of vertex normals for the mesh.
====
   {TYPE} [table](/types/table.md) of [number](/types/number.md)
  {FIELD} colors
     {RO} No
   {DESC} A flattened list of vertex colors for the mesh.
====
   {TYPE} [table](/types/table.md) of [number](/types/number.md)
  {FIELD} tangents
     {RO} No
   {DESC} A flattened list of vertex tangents for the mesh.
====
   {TYPE} [table](/types/table.md) of [number](/types/number.md)
  {FIELD} facenormals
     {RO} No
   {DESC} A flattened list of face normals for the mesh.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} isValid
     {RO} Yes
   {DESC} Will be `false` if the mesh has been destroyed.
{ENDTABLE}


## Light3D

A 3D light object that can illuminate meshes in the 3D scene.

### Instance members

Instance members must be accessed through a reference to a specific [Light3D](/modules/lib3d.md#light3d) object.
```lua
local l = lib3d.Light{}
l.brightness = 10
l:destroy()
```
<Note type="warning">Attempting to call instance members statically will result in an error!</Note>

### Instance Methods

[What is a method?](/types/function.md#methods)

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} destroy()
    {RET} [nil](/types/nil.md)
   {DESC} Permanently destroys the light object, removing it from the scene.
{ENDTABLE}

### Instance Fields

{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE} [Transform3D](/reference/Transform.md#transform3d)
  {FIELD} transform
     {RO} No
   {DESC} The transform that determines the light's position and rotation.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} active
     {RO} No
   {DESC} Whether the light will be displayed in the scene or not. Use this to hide and show lights.
====
   {TYPE} [Color](/reference/Color.md)
  {FIELD} color
     {RO} No
   {DESC} The color of the light.
====
   {TYPE} [number](/types/number.md)
  {FIELD} brightness
     {RO} No
   {DESC} The brightness of the light.
====
   {TYPE} [number](/types/number.md)
  {FIELD} radius
     {RO} No
   {DESC} <Badge type="tip">If type is POINT</Badge> The radius of the light source. Will be [nil](/types/nil.md) if the light is a `DIRECTIONAL` light.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} isValid
     {RO} Yes
   {DESC} Will be `false` if the light has been destroyed.
{ENDTABLE}


## Camera3D

A 3D camera object that can act as a viewpoint into the 3D scene.

### Instance members

Instance members must be accessed through a reference to a specific [Camera3D](/modules/lib3d.md#camera3d) object.
```lua
local c = lib3d.Camera{}
c.fov = 90
c:clear(0)
```
<Note type="warning">Attempting to call instance members statically will result in an error!</Note>

### Instance Methods

[What is a method?](/types/function.md#methods)

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} clear(

[number](/types/number.md) priority

   )
    {RET} [nil](/types/nil.md)
   {DESC} Clears the camera's render target at the given priority.
====
   {NAME} draw(

[number](/types/number.md) priority

   )
    {RET} [nil](/types/nil.md)
   {DESC} Renders the scene to the camera's render target at the given priority.
====
   {NAME} getFocalLength()
    {RET} [number](/types/number.md)
   {DESC} Gets the focal length of the camera (effectively the distance at which moving the camera by one pixel corresponds to one pixel movement of a visible object).
====
   {NAME} project(

[Vector3](/reference/vector.md#vector3) point

)
    {RET} [Vector2](/reference/vector.md#vector2)
   {DESC} Projects a point in 3D space into the screen, using the CPU. Identical to lib3d.project(camera, point)
{ENDTABLE}

### Instance Fields

{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE} [Transform3D](/reference/Transform.md#transform3d)
  {FIELD} transform
     {RO} No
   {DESC} The transform that determines the camera's position and rotation.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} active
     {RO} No
   {DESC} Whether the camera will be active in the scene or not. Use this to disable cameras.
====
   {TYPE} [number](/types/number.md)
  {FIELD} projection
     {RO} No
   {DESC} The type of projections, either `lib3d.projection.PERSPECTIVE` or `lib3d.projection.ORTHOGRAPHIC`.
====
   {TYPE} [number](/types/number.md)
  {FIELD} fov
     {RO} No
   {DESC} The horizontal [field of view angle](https://en.wikipedia.org/wiki/Field_of_view_in_video_games) of the camera, in degrees. Only used in `PERSPECTIVE` rendering mode.
====
   {TYPE} [Vector2](/reference/vector.md#vector2)
  {FIELD} orthosize
     {RO} No
   {DESC} The [`ORTHOGRAPHIC` projection](https://en.wikipedia.org/wiki/Orthographic_projection) size. Only used in `ORTHOGRAPHIC` rendering mode.
====
   {TYPE} [number](/types/number.md)
  {FIELD} nearclip
     {RO} No
   {DESC} The near [clipping plane](https://en.wikipedia.org/wiki/Clipping_(computer_graphics)#Clipping_in_3D_graphics) of the camera.
====
   {TYPE} [number](/types/number.md)
  {FIELD} farclip
     {RO} No
   {DESC} The far [clipping plane](https://en.wikipedia.org/wiki/Clipping_(computer_graphics)#Clipping_in_3D_graphics) of the camera.
====
   {TYPE} [number](/types/number.md)
  {FIELD} flength
     {RO} No
   {DESC} The camera's focal length (effectively the distance at which moving the camera by one pixel corresponds to one pixel movement of a visible object). Assigning to this will also modify the camera's `fov`.
====
   {TYPE} [number](/types/number.md)
  {FIELD} renderscale
     {RO} No
   {DESC} A resolution multiplier. Higher values means higher quality rendering, but at substantial performance costs.
====
   {TYPE} [CaptureBuffer](/reference/graphics.md#capture-buffers)
  {FIELD} target
     {RO} No
   {DESC} The camera's render target (assigned automatically at creation).
{ENDTABLE}


## Material3D

A material object that can determine how 3D meshes appear when rendered.

### Instance members

Instance members must be accessed through a reference to a specific [Material3D](/modules/lib3d.md#material3d) object.
```lua
local m = lib3d.Material(nil, {color = Color.red})
m:setUniform("color", Color.blue)
Misc.dialog(m.color)
```
<Note type="warning">Attempting to call instance members statically will result in an error!</Note>

### Instance Methods

[What is a method?](/types/function.md#methods)

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} getUniform(

[string](/types/string.md) name

   )
    {RET} [object](/types/object.md) value
   {DESC} Returns the current value of the provided uniform.
====
   {NAME} setUniform(

[string](/types/string.md) name,

[object](/types/object.md) value

   )
    {RET} [nil](/types/nil.md)
   {DESC} Sets the value of the provided uniform.
====
   {NAME} getAttribute(

[string](/types/string.md) name

   )
    {RET} [table](/types/table.md) of [object](/types/object.md) value
   {DESC} Returns the current value of the provided attribute.
====
   {NAME} setUniform(

[string](/types/string.md) name,

[table](/types/table.md) of [object](/types/object.md) value

   )
    {RET} [nil](/types/nil.md)
   {DESC} Sets the value of the provided attribute.
{ENDTABLE}

### Instance Fields

{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE} [Shader](/types/Shader.md) shader 
  {FIELD} shader
     {RO} No
   {DESC} The compiled shader associated with this material.
====
   {TYPE} [table](/types/table.md) of [object](/types/object.md)
  {FIELD} uniforms
     {RO} No
   {DESC} A list of the material's uniforms.
====
   {TYPE} [table](/types/table.md) of [table](/types/table.md) of [object](/types/object.md)
  {FIELD} attributes
     {RO} No
   {DESC} A list of the material's attributes.
====
   {TYPE} [Texture](/types/Texture.md) or [CaptureBuffer](#capture-buffers)
  {FIELD} texture
     {RO} No
   {DESC} A texture to apply to the material (readable via `iChannel0` in the [Material Shader](#material-shaders)).
====
   {TYPE} [Color](/reference/Color.md)
  {FIELD} color
     {RO} No
   {DESC} A tint applied to the material.
====
   {TYPE} [table](/types/table.md) of [table](/types/table.md) of ([string](/types/string.md), [number](/types/object.md))
  {FIELD} uniformmap
     {RO} No
   {DESC} A list of uniforms, with their OpenGL type values paired to their names.
====
   {TYPE} [table](/types/table.md) of [string](/types/string.md)
  {FIELD} attributemap
     {RO} No
   {DESC} A list of OpenGL attribute names.
{ENDTABLE}

Materials also allow direct access to any uniform. For example:

```lua
myMaterial.example = 4```

is equivalent to:

```lua
myMaterial.uniforms.example = 4```

This can be used as a useful shorthand. The default material contains the following uniforms that can be accessed this way:


{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
   {DESC} Description
====
   {TYPE} [Texture](/types/Texture.md) or [CaptureBuffer](#capture-buffers)
  {FIELD} normalmap
   {DESC} A normal map texture that will adjust lighting on the mesh.
====
   {TYPE} [Texture](/types/Texture.md) or [CaptureBuffer](#capture-buffers)
  {FIELD} metallicmap
   {DESC} A greyscale texture that will adjust metallicity on the mesh.
====
   {TYPE} [Texture](/types/Texture.md) or [CaptureBuffer](#capture-buffers)
  {FIELD} roughnessmap
   {DESC} A greyscale texture that will adjust roughness on the mesh.
====
   {TYPE} [Texture](/types/Texture.md) or [CaptureBuffer](#capture-buffers)
  {FIELD} occlusionmap
   {DESC} A greyscale texture that will adjust ambient occlusion on the mesh.
====
   {TYPE} [Texture](/types/Texture.md) or [CaptureBuffer](#capture-buffers)
  {FIELD} emissivemap
   {DESC} A texture that will adjust emissive color on the mesh.
====
   {TYPE} [number](/types/number.md)
  {FIELD} metallic
   {DESC} The mesh metallicity between 0 and 1 (multiplied with the metallic map).
====
   {TYPE} [number](/types/number.md)
  {FIELD} roughness
   {DESC} The mesh roughness between 0 and 1 (multiplied with the roughness map).
====
   {TYPE} [number](/types/number.md)
  {FIELD} occlusion
   {DESC} The mesh ambient occlusion strength between 0 and 1 (multiplied with the occlusion map).
====
   {TYPE} [number](/types/number.md)
  {FIELD} emissive
   {DESC} The mesh emissive strength between 0 and 1 (used to blend the emissive map).
{ENDTABLE}


When using custom [Material Shaders](#material-shaders), user-created uniforms will be accessible in the same way.

## Material Shaders

Material shaders are a method of customising materials further than simply tweaking uniforms. They operate slightly differently from regular shaders, in that you only use one shader file: the material shader. In the material shader file, you can assign a `vertex` and `surface` shader to override the defaults. You can also add your own uniforms or attributes, which you can assign via the Material constructor.

The default material shader can be found in `scripts/shaders/lib3d/default_shader.glsl`, and it contains this code:

```glsl
#define SURFACE default_surf

uniform sampler2D iChannel0;

//prefix n_ marks the sampler as a normal map
uniform sampler2D n_normalmap;

uniform sampler2D metallicmap;

uniform sampler2D roughnessmap;

uniform sampler2D occlusionmap;

uniform sampler2D emissivemap;

uniform float metallic = 0;

uniform float roughness = 1;

uniform float occlusion = 1;

uniform float emissive = 0;


//Default surface shader calculations
void default_surf(in fragdata data, inout surfdata o)
{
	o.albedo = texture2D( iChannel0, data.uv ) * data.color;
	vec4 e = texture2D( emissivemap, data.uv );
	o.emissive = e.rgb * e.a * emissive;
	o.normal = normal2D( n_normalmap, data.uv );
	o.metallic = texture2D( metallicmap, data.uv ).r * metallic;
	o.roughness = texture2D( roughnessmap, data.uv ).r * roughness;
	o.occlusion = clamp(mix(1, texture2D( occlusionmap, data.uv ).r, occlusion),0,1);
}```

The vertex and surface elements of a material shader are roughly analagous to the traditional vertex and fragment shader components, but they operate slightly differently. The material vertex shader is a function that receives a [vertdata](#vertdata) struct, which can be written to in order to modify the vertex parameters. The surface function receives both a [fragdata](#fragdata) and a [surfdata](#surfdata) struct, the latter of which can be modified to adjust the surface output.

### Vertex Shaders

To create a vertex shader component, a function should be created in the material shader, structured as follows:

```glsl
void vert(inout vertdata data)
{
   //Code here
}```

This function needs to then be assigned as the vertex shader using the following line at the top of the file:

```glsl
#define VERTEX vert
```

This assigns the function named `vert` as the material shader's vertex function. The [vertdata](#vertdata) struct will be passed the vertex data for the mesh that is currently being rendered, and this data can then be modified from within this function.

#### vertdata

This struct is a collection of information about the current vertex being processed, which can be read and modified.

{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
   {DESC} Description
====
   {TYPE} [vec3](/types/Shader.md)
  {FIELD} position
   {DESC} The object space position of the vertex.
====
   {TYPE} [vec3](/types/Shader.md)
  {FIELD} normal
   {DESC} The object space vertex normal.
====
   {TYPE} [vec4](/types/Shader.md)
  {FIELD} uv
   {DESC} The tangent space UV coordinates. The x and y fields contain the texture coordinates.
====
   {TYPE} [vec4](/types/Shader.md)
  {FIELD} color
   {DESC} The vertex color.
====
   {TYPE} [number](/types/number.md)
  {FIELD} depthOffset
   {DESC} Offsets the objects' effective render depth forward or backward.
{ENDTABLE}

Here is an example vertex function that simply swells the mesh along its normal direction slightly:

```glsl
void vert(inout vertdata data)
{
   data.position += data.normal * 0.2;
}```


### Surface Shaders

To create a surface shader component, a function should be created in the material shader, structured as follows:

```glsl
void surf(in fragdata data, inout surfdata o)
{
   //Code here
}```

This function needs to then be assigned as the surf shader using the following line at the top of the file:

```glsl
#define SURFACE surf
```

This assigns the function named `surf` as the material shader's surface function. The [fragdata](#fragdata) struct will be passed the fragment data for the mesh that is currently being rendered, and the [surfdata](#surfdata) struct can then be modified from within this function to affect the output of the rendering. The [fragdata](#fragdata) struct cannot be modified, as it simply passes data into the surface shader.

#### fragdata

This struct is a collection of information about the current fragment being processed.

{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
   {DESC} Description
====
   {TYPE} [vec2](/types/Shader.md)
  {FIELD} fragposition
   {DESC} The screen space position of the fragment.
====
   {TYPE} [vec3](/types/Shader.md)
  {FIELD} worldposition
   {DESC} The world space position of the fragment.
====
   {TYPE} [vec3](/types/Shader.md)
  {FIELD} worldnormal
   {DESC} The interpolated world space fragment normal.
====
   {TYPE} [vec2](/types/Shader.md)
  {FIELD} uv
   {DESC} The interpolated tangent space texture coordinates.
====
   {TYPE} [vec4](/types/Shader.md)
  {FIELD} color
   {DESC} The interpolated fragment color.
====
   {TYPE} [float](/types/Shader.md)
  {FIELD} depth
   {DESC} The depth of the fragment.
{ENDTABLE}

#### surfdata

This struct is a collection of information about the current surface, which can be assigned to in order to create the surface shader.

{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
   {DESC} Description
====
   {TYPE} [vec4](/types/Shader.md)
  {FIELD} albedo
   {DESC} The albedo base color of the surface.
====
   {TYPE} [vec3](/types/Shader.md)
  {FIELD} emissive
   {DESC} The emissive color of the surface (black is non-emissive).
====
   {TYPE} [vec3](/types/Shader.md)
  {FIELD} normal
   {DESC} The normal of the surface.
====
   {TYPE} [float](/types/Shader.md)
  {FIELD} metallic
   {DESC} The metallicity of the surface between 0 and 1.
====
   {TYPE} [float](/types/Shader.md)
  {FIELD} roughness
   {DESC} The roughness of the surface between 0 and 1.
====
   {TYPE} [float](/types/Shader.md)
  {FIELD} occlusion
   {DESC} The ambient occlusion of the surface between 0 and 1.
{ENDTABLE}

Here is an example surfacce function that mirrors the default behavior:

```glsl
void surf(in fragdata data, inout surfdata o)
{
   o.albedo = texture2D( iChannel0, data.uv ) * data.color;
	vec4 e = texture2D( emissivemap, data.uv );
	o.emissive = e.rgb * e.a * emissive;
	o.normal = normal2D( n_normalmap, data.uv );
	o.metallic = texture2D( metallicmap, data.uv ).r * metallic;
	o.roughness = texture2D( roughnessmap, data.uv ).r * roughness;
	o.occlusion = clamp(mix(1, texture2D( occlusionmap, data.uv ).r, occlusion),0,1);
}```


### Material Shader Fields

Some fields are built in to material shaders, and can be accessed at will. These are listed here.

#### Accessible in Vertex Shaders
{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
   {DESC} Description
====
   {TYPE} [mat4](/types/Shader.md)
  {FIELD} mat_mvp
   {DESC} The Model View Projection matrix.
====
   {TYPE} [mat4](/types/Shader.md)
  {FIELD} obj2world
   {DESC} The object space to world space transformation matrix.
====
   {TYPE} [mat4](/types/Shader.md)
  {FIELD} world2obj
   {DESC} The world space to object space transformation matrix.
====
   {TYPE} [vec3](/types/Shader.md)
  {FIELD} cam_position
   {DESC} The world space position of the camera.
====
   {TYPE} [float](/types/Shader.md)
  {FIELD} cam_nearclip
   {DESC} The near clipping distance of the camera.
====
   {TYPE} [float](/types/Shader.md)
  {FIELD} cam_farclip
   {DESC} The far clipping distance of the camera.
{ENDTABLE}

#### Accessible in Surface Shaders
{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
   {DESC} Description
====
   {TYPE} [mat4](/types/Shader.md)
  {FIELD} mat_mvp
   {DESC} The Model View Projection matrix.
====
   {TYPE} [mat4](/types/Shader.md)
  {FIELD} obj2world
   {DESC} The object space to world space transformation matrix.
====
   {TYPE} [mat4](/types/Shader.md)
  {FIELD} world2obj
   {DESC} The world space to object space transformation matrix.
====
   {TYPE} [vec3](/types/Shader.md)
  {FIELD} cam_position
   {DESC} The world space position of the camera.
====
   {TYPE} [float](/types/Shader.md)
  {FIELD} cam_nearclip
   {DESC} The near clipping distance of the camera.
====
   {TYPE} [float](/types/Shader.md)
  {FIELD} cam_farclip
   {DESC} The far clipping distance of the camera.
====
   {TYPE} [float](/types/Shader.md)
  {FIELD} view_dir
   {DESC} The world space view direction (equivalent to the direction from the `cam_position` to the world space position of the fragment).
====
   {TYPE} [mat3](/types/Shader.md)
  {FIELD} tgt2world
   {DESC} The tangent space to world space transformation matrix.
{ENDTABLE}


### Material Shader Functions

Some functions are built in to material shaders, and can be accessed at will. These are listed here.

{STARTTABLE}
   {NAME} Function
   {RET} Return Values
   {DESC} Description
====
   {NAME} linear_depth()
   {RET} [float](/types/Shader.md)
   {DESC} Returns the linear depth of the current fragment in view space.
====
   {NAME} normalised_linear_depth()
   {RET} [float](/types/Shader.md)
   {DESC} Returns the linear depth of the current fragment in view space, normalised between 0 and 1.
====
   {NAME} fresnel(

[float](/types/Shader.md) power

   )
   {RET} [float](/types/Shader.md)
   {DESC} Performs a fresnel operation, with intensity specified by the given `power`.
====
   {NAME} normal2D(

[sampler2D](/types/Shader.md) sampler,

[vec2](/types/Shader.md) uv

   )
   {RET} [vec3](/types/Shader.md)
   {DESC} Samples a texture as a normal map.
{ENDTABLE}


### Custom Lighting

Material shaders allow for custom lighting functions to be defined. These are assigned in a similar way to vertex and surface shader elements. To define custom lighting functions, you should create a function in the material shader with the following structure:

```glsl
vec3 light(in surfdata data, vec3 direction, vec3 view, vec3 lightcolor, float attenuation)
{
   //Code here
}```

This function needs to then be assigned as the lighting function using the following line at the top of the file:

```glsl
#define LIGHTING light
```

This assigns the function named `light` as the material shader's lighting function. The [surfdata](#surfdata) struct will be passed the surface data as defined by the surface function. It will also receive the light `direction`, the camera's `view` direction, the `lightcolor`, and the `attenuation` (effectively light brightness, accounting for distance). This function returns a `vec3`, which should contain the final RGB color of the surface after lighting has been applied.

Here is an example lighting function that generates simple [Lambert](https://en.wikipedia.org/wiki/Lambertian_reflectance) lighting:

```glsl
vec3 lighting_lambert(in surfdata data, vec3 direction, vec3 view, vec3 lightcolor, float attenuation)
{
	return (max(dot(normalize(data.normal), -direction)*lightcolor*attenuation, 0.0)*data.albedo.rgb)/3.14159265359;
}```

A few lighting functions exist as default, and can be used directly. For example:

```glsl
#define LIGHTING lighting_cel
```

Will activate cel shading without manually defining the `lighting_cel` function, as it is defined for you. These lighting functions are listed here:


{STARTTABLE}
   {NAME} Function
   {DESC} Description
====
   {NAME} lighting_default
   {DESC} Default, [PBR](https://en.wikipedia.org/wiki/Physically_based_rendering) lighting.
====
   {NAME} lighting_lambert
   {DESC} [Lambertian](https://en.wikipedia.org/wiki/Lambertian_reflectance) lighting.
====
   {NAME} lighting_blinnphong
   {DESC} [Blinn-Phong](https://en.wikipedia.org/wiki/Blinn%E2%80%93Phong_reflection_model) lighting.
====
   {NAME} lighting_cel
   {DESC} Cel shaded lighting.
{ENDTABLE}


### Macros

Macro values can also be defined directly in the material shader via the use of `#define` statements. For example:

```glsl
#define UNLIT 1
```

Will disable lighting in the shader entirely. Following is a list of macros and their assignable values.

{STARTTABLE}
   {TYPE} Type
  {FIELD} Macro
   {DESC} Description
====
   {TYPE} [int](/types/Shader.md)
  {FIELD} DEBUG
   {DESC} The debug mode to use. Assign one of the following values: `DEBUG_OFF`, `DEBUG_NORMALS`, `DEBUG_DEPTH`, `DEBUG_POSITION`, `DEBUG_UNLIT`, `DEBUG_OCCLUSION`. For example: 
   `#define DEBUG DEBUG_DEPTH`.
====
   {TYPE} [float](/types/Shader.md)
  {FIELD} ALPHAMODE
   {DESC} The alpha blend mode of the material. By default, materials will ignore alpha via `ALPHA_OPAQUE`. Assign one of the following values: `ALPHA_OPAQUE`, `ALPHA_CUTOFF`, `ALPHA_BLEND`. For example: 
   `#define ALPHAMODE ALPHA_CUTOFF`.

   It is also valid to assign a number between 0 and 1, which will act similar to `ALPHA_CUTOFF`, using the provided value as the cutoff threshold. For example: 
   `#define ALPHAMODE 0.25`
====
   {TYPE} [int](/types/Shader.md)
  {FIELD} NUMLIGHTS
   {DESC} The maximum number of lights that can be considered by the material at any one time. Raising this reduces performance and compatibility, use at your own risk.
====
   {TYPE} [int](/types/Shader.md)
  {FIELD} UV_MODE
   {DESC} The UV wrapping mode to use. By default, UVs will wrap around to remain in the 0 to 1 range. Assign one of the following values: `UV_UNBOUND`, `UV_WRAP`, `UV_CLAMP`. For example: 
   `#define UV_MODE UV_CLAMP`.
====
   {TYPE} [int](/types/Shader.md)
  {FIELD} TONEMAP
   {DESC} Whether or not the tonemapper should be active. Assign either 0 (false) or 1 (true). For example: 
   `#define TONEMAP 0`.
====
   {TYPE} [int](/types/Shader.md)
  {FIELD} UNLIT
   {DESC} Whether or not lighting should be ignored entirely. Assign either 0 (false) or 1 (true). For example: 
   `#define UNLIT 1`.
{ENDTABLE}
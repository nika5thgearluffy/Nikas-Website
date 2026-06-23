# Transform

The Transform class contains definitions of "transforms", which allow physical characteristics to be formulated into an [object hierarchy](https://en.wikipedia.org/wiki/Object_hierarchy).

### Static functions

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} Transform(

[Vector2](/reference/vector.md#vector2) or [Vector3](/reference/vector.md#vector3) position,

[number](/types/number.md) or [Quaternion](/reference/vector.md#quaternion) rotation,

[Vector2](/reference/vector.md#vector2) or [Vector3](/reference/vector.md#vector3) scale
       
)
    {RET} [Transform](/reference/transform.md#transform-2) or [Transform3D](/reference/transform.md#transform3d) transform
   {DESC} Creates a new 2D or 3D transform object, automatically creating the one that matches the provided arguments.
====
   {NAME} Transform.new(

[Vector2](/reference/vector.md#vector2) or [Vector3](/reference/vector.md#vector3) position,

[number](/types/number.md) or [Quaternion](/reference/vector.md#quaternion) rotation,

[Vector2](/reference/vector.md#vector2) or [Vector3](/reference/vector.md#vector3) scale
       
)
    {RET} [Transform](/reference/transform.md#transform-2) or [Transform3D](/reference/transform.md#transform3d) transform
   {DESC} Creates a new 2D or 3D transform object, automatically creating the one that matches the provided arguments.
====
   {NAME} Transform.new2d(

[Vector2](/reference/vector.md#vector2) position,

[number](/types/number.md) rotation,

[Vector2](/reference/vector.md#vector2) scale
       
)
    {RET} [Transform](/reference/transform.md#transform-2) transform
   {DESC} Creates a new 2D transform object, declaring 2D position, rotation (in degrees), and a scale multiplier. Position defaults to `(0,0)`, rotation defaults to `0`, and scale defaults to `(1,1)`.
====
   {NAME} Transform.new3d(

[Vector3](/reference/vector.md#vector3) position,

[Quaternion](/reference/vector.md#quaternion) rotation,

[Vector3](/reference/vector.md#vector3) scale
       
)
    {RET} [Transform3D](/reference/transform.md#transform3d) transform
   {DESC} Creates a new 3D transform object, declaring 3D position, rotation, and a scale multiplier. Position defaults to `(0,0,0)`, rotation defaults to `vector.quatid`, and scale defaults to `(1,1,1)`.
{ENDTABLE}


## Transform

A 2 dimensional transform, used to store 2D positions, rotations, and scales.

### Instance members

Instance members must be accessed through a reference to a specific [Transform](/reference/transform.md#transform-2) object.
```lua
local t = Transform.new2d()
t.position = vector(1,2)
t:rotate(5)
```
<Note type="warning">Attempting to call instance members statically will result in an error!</Note>

### Instance Methods

[What is a method?](/types/function.md#methods)

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} getMat()
    {RET} [Mat3](/reference/vector.md#mat3) matrix
   {DESC} Gets the global transformation matrix for this transform.
====
   {NAME} getMatLocal()
    {RET} [Mat3](/reference/vector.md#mat3) matrix
   {DESC} Gets the local transformation matrix for this transform.
====
   {NAME} getInvMat()
    {RET} [Mat3](/reference/vector.md#mat3) matrix
   {DESC} Gets the inverse global transformation matrix for this transform.
====
   {NAME} getInvMatLocal()
    {RET} [Mat3](/reference/vector.md#mat3) matrix
   {DESC} Gets the inverse local transformation matrix for this transform.
====
   {NAME} setDirty(

[bool](/types/bool.md) noLocal

   )
    {RET} [nil](/types/nil.md)
   {DESC} Sets the transform as "dirty", forcing a recomputation of its transformation matrix. If `noLocal` is `true`, then only the global transformation matrix will be invalidated.
====
   {NAME} lookAt(

[Vector2](/reference/vector.md#vector2) target

   )
    {RET} [nil](/types/nil.md)
   {DESC} Rotates the transform so that its `up` direction points towards the target.
====
   {NAME} rotate(

[number](/types/number.md) angle,

[bool](/types/bool.md) worldspace

   )
    {RET} [nil](/types/nil.md)
   {DESC} Rotates the transform by the specified number of degrees. If `worldspace` is true, the rotation will occur in world space rotation rather than object space (though this is extremely unlikely to be necessary). By default, `worldspace` is `false`.
====
   {NAME} translate(

[Vector2](/reference/vector.md#vector2) vector,

[bool](/types/bool.md) worldspace

   )
    {RET} [nil](/types/nil.md)
   {DESC} Moves the transform by the specified motion vector. If `worldspace` is true, the rotation will occur in world space rotation rather than object space. By default, `worldspace` is `false`.
====
   {NAME} apply(

[Vector2](/reference/vector.md#vector2) vector

   )
    {RET} [Vector2](/reference/vector.md#vector2) vector
   {DESC} Applies the transform to the specified position vector, effectively converting a point from object space to world space.
====
   {NAME} transformPoint(

[Vector2](/reference/vector.md#vector2) vector

   )
    {RET} [Vector2](/reference/vector.md#vector2) vector
   {DESC} Transform the specified position vector, effectively converting a point from object space to world space.
====
   {NAME} transformVector(

[Vector2](/reference/vector.md#vector2) vector

   )
    {RET} [Vector2](/reference/vector.md#vector2) vector
   {DESC} Transform the specified speed vector, applying rotation and scale, but not position.
====
   {NAME} transformDirection(

[Vector2](/reference/vector.md#vector2) vector

   )
    {RET} [Vector2](/reference/vector.md#vector2) vector
   {DESC} Transform the specified direction vector, applying rotation, but not position or scale.
====
   {NAME} invTransformPoint(

[Vector2](/reference/vector.md#vector2) vector

   )
    {RET} [Vector2](/reference/vector.md#vector2) vector
   {DESC} Inverse transform the specified position vector, effectively converting a point from world space to object space.
====
   {NAME} invTransformVector(

[Vector2](/reference/vector.md#vector2) vector

   )
    {RET} [Vector2](/reference/vector.md#vector2) vector
   {DESC} Inverse transform the specified speed vector, applying rotation and scale, but not position.
====
   {NAME} invTransformDirection(

[Vector2](/reference/vector.md#vector2) vector

   )
    {RET} [Vector2](/reference/vector.md#vector2) vector
   {DESC} Inverse transform the specified direction vector, applying rotation, but not position or scale.
====
   {NAME} addChild(

[Transform](/reference/transform.md#transform-2) child,

[bool](/types/bool.md) keepWorld

   )
    {RET} [nil](/types/nil.md)
   {DESC} Attaches the provided transform as a child. If `keepWorld` is `true`, the child will keep its world space coordinates. By default, `keepWorld` is true.
====
   {NAME} setParent(

[Transform](/reference/transform.md#transform-2) parent,

[bool](/types/bool.md) keepWorld

   )
    {RET} [nil](/types/nil.md)
   {DESC} Attaches the transform as a child of the provided transform. If `keepWorld` is `true`, the transform will keep its world space coordinates. By default, `keepWorld` is true.
====
   {NAME} detachChildren()
    {RET} [nil](/types/nil.md)
   {DESC} Removes all children from the transform, effectively setting all their parent objects to [nil](/types/nil.md).
====
   {NAME} getSiblingIndex()
    {RET} [number](/types/number.md) index
   {DESC} Gets the index of this transform in its parents child list.
====
   {NAME} setSiblingIndex(

[number](/types/number.md) index

   )
    {RET} [nil](/types/nil.md)
   {DESC} Sets the index of this transform in its parents child list. Other siblings will be shifted to accommodate.
====
   {NAME} setFirstSibling()
    {RET} [nil](/types/nil.md)
   {DESC} Pushes this transform to be first in its parents child list.
====
   {NAME} setLastSibling()
    {RET} [nil](/types/nil.md)
   {DESC} Pushes this transform to be last in its parents child list.
{ENDTABLE}

### Instance Fields

{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE} [Vector2](/reference/vector.md#vector2)
  {FIELD} position
     {RO} No
   {DESC} The transform local position.
====
   {TYPE} [number](/types/number.md)
  {FIELD} rotation
     {RO} No
   {DESC} The transform local rotation.
====
   {TYPE} [Vector2](/reference/vector.md#vector2)
  {FIELD} scale
     {RO} No
   {DESC} The transform local scale.
====
   {TYPE} [Vector2](/reference/vector.md#vector2)
  {FIELD} wposition
     {RO} No
   {DESC} The transform global position.
====
   {TYPE} [number](/types/number.md)
  {FIELD} wrotation
     {RO} No
   {DESC} The transform global rotation.
====
   {TYPE} [Vector2](/reference/vector.md#vector2)
  {FIELD} wscale
     {RO} No
   {DESC} The transform global scale.
====
   {TYPE} [Transform](/reference/transform.md#transform-2) 
  {FIELD} parent
     {RO} No
   {DESC} The transforms parent. Assigning to this is equivalent to calling `setParent`.
====
   {TYPE} [Vector2](/reference/vector.md#vector2)
  {FIELD} up
     {RO} No
   {DESC} The transform local "up" (+y) vector.
====
   {TYPE} [Vector2](/reference/vector.md#vector2)
  {FIELD} right
     {RO} No
   {DESC} The transform local "right" (+x) vector.
====
   {TYPE} [Vector2](/reference/vector.md#vector2)
  {FIELD} wup
     {RO} No
   {DESC} The transform global "up" (+y) vector.
====
   {TYPE} [Vector2](/reference/vector.md#vector2)
  {FIELD} wright
     {RO} No
   {DESC} The transform global "right" (+x) vector.
====
   {TYPE} [Mat3](/reference/vector.md#mat3)
  {FIELD} obj2world
     {RO} Yes
   {DESC} The "object to world" space transformation matrix.
====
   {TYPE} [Mat3](/reference/vector.md#mat3)
  {FIELD} world2obj
     {RO} Yes
   {DESC} The "world to object" space transformation matrix.
====
   {TYPE} [table](/types/table.md) of [Transform](/reference/transform.md#transform-2) 
  {FIELD} children
     {RO} No
   {DESC} A list of the transform's children.
====
   {TYPE} [number](/types/number.md)
  {FIELD} siblingIdx
     {RO} No
   {DESC} The current sibling index. Assigning to this is equivalent to calling `setSiblingIndex`.
====
   {TYPE} [Transform](/reference/transform.md#transform-2) 
  {FIELD} root
     {RO} Yes
   {DESC} The uppermost parent of this transform in the object hierarchy.
{ENDTABLE}

### Operators

Transform objects contain some special operators.

| Operator | Description
| --- | --- |
| #[Transform](/reference/transform.md#transform-2) | Returns the number of children contained in the transform. |
| pairs([Transform](/reference/transform.md#transform-2)) or ipairs([Transform](/reference/transform.md#transform-2)) | Iterates over the transform's children. |

 
## Transform3D

A 3 dimensional transform, used to store 3D positions, rotations, and scales.

### Instance members

Instance members must be accessed through a reference to a specific [Transform3D](/reference/transform.md#transform3d) object.
```lua
local t = Transform.new3d()
t.position = vector(1,2,3)
t:rotate(vector.up3, 5)
```
<Note type="warning">Attempting to call instance members statically will result in an error!</Note>

### Instance Methods

[What is a method?](/types/function.md#methods)

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} getMat()
    {RET} [Mat4](/reference/vector.md#mat4) matrix
   {DESC} Gets the global transformation matrix for this transform.
====
   {NAME} getMatLocal()
    {RET} [Mat4](/reference/vector.md#mat4) matrix
   {DESC} Gets the local transformation matrix for this transform.
====
   {NAME} getInvMat()
    {RET} [Mat4](/reference/vector.md#mat4) matrix
   {DESC} Gets the inverse global transformation matrix for this transform.
====
   {NAME} getInvMatLocal()
    {RET} [Mat4](/reference/vector.md#mat4) matrix
   {DESC} Gets the inverse local transformation matrix for this transform.
====
   {NAME} setDirty(

[bool](/types/bool.md) noLocal

   )
    {RET} [nil](/types/nil.md)
   {DESC} Sets the transform as "dirty", forcing a recomputation of its transformation matrix. If `noLocal` is `true`, then only the global transformation matrix will be invalidated.
====
   {NAME} lookAt(

[Vector3](/reference/vector.md#vector3) target

   )
    {RET} [nil](/types/nil.md)
   {DESC} Rotates the transform so that its `forward` direction points towards the target.
====
   {NAME} rotate(

[Quaternion](/reference/vector.md#quaternion) rotation,

[bool](/types/bool.md) worldspace

   )
    {RET} [nil](/types/nil.md)
   {DESC} Rotates the transform by the specified quaternion rotation. If `worldspace` is true, the rotation will occur in world space rotation rather than object space. By default, `worldspace` is `false`.
====
   {NAME} rotate(

[Vector3](/reference/vector.md#vector3) axis,

[number](/types/number.md) angle,

[bool](/types/bool.md) worldspace

   )
    {RET} [nil](/types/nil.md)
   {DESC} Rotates the transform by the specified angle around the specified axis. If `worldspace` is true, the rotation will occur in world space rotation rather than object space. By default, `worldspace` is `false`.
====
   {NAME} rotate(

[Vector3](/reference/vector.md#vector3) start,

[Vector3](/reference/vector.md#vector3) end,

[bool](/types/bool.md) worldspace

   )
    {RET} [nil](/types/nil.md)
   {DESC} Rotates the transform by the rotation defined by the specified start and end vectors. If `worldspace` is true, the rotation will occur in world space rotation rather than object space. By default, `worldspace` is `false`.
====
   {NAME} rotate(

[Mat3](/reference/vector.md#mat3) matrix,

[bool](/types/bool.md) worldspace

   )
    {RET} [nil](/types/nil.md)
   {DESC} Rotates the transform by the specified rotation matrix. If `worldspace` is true, the rotation will occur in world space rotation rather than object space. By default, `worldspace` is `false`.
====
   {NAME} rotate(

[number](/types/number.md) roll,

[number](/types/number.md) pitch,

[number](/types/number.md) yaw,

[bool](/types/bool.md) worldspace

   )
    {RET} [nil](/types/nil.md)
   {DESC} Rotates the transform by the specified Euler angles. If `worldspace` is true, the rotation will occur in world space rotation rather than object space. By default, `worldspace` is `false`.
====
   {NAME} translate(

[Vector3](/reference/vector.md#vector3) vector,

[bool](/types/bool.md) worldspace

   )
    {RET} [nil](/types/nil.md)
   {DESC} Moves the transform by the specified motion vector. If `worldspace` is true, the rotation will occur in world space rotation rather than object space. By default, `worldspace` is `false`.
====
   {NAME} apply(

[Vector3](/reference/vector.md#vector3) vector

   )
    {RET} [Vector3](/reference/vector.md#vector3) vector
   {DESC} Applies the transform to the specified position vector, effectively converting a point from object space to world space.
====
   {NAME} transformPoint(

[Vector3](/reference/vector.md#vector3) vector

   )
    {RET} [Vector3](/reference/vector.md#vector3) vector
   {DESC} Transform the specified position vector, effectively converting a point from object space to world space.
====
   {NAME} transformVector(

[Vector3](/reference/vector.md#vector3) vector

   )
    {RET} [Vector3](/reference/vector.md#vector3) vector
   {DESC} Transform the specified speed vector, applying rotation and scale, but not position.
====
   {NAME} transformDirection(

[Vector3](/reference/vector.md#vector3) vector

   )
    {RET} [Vector3](/reference/vector.md#vector3) vector
   {DESC} Transform the specified direction vector, applying rotation, but not position or scale.
====
   {NAME} invTransformPoint(

[Vector3](/reference/vector.md#vector3) vector

   )
    {RET} [Vector3](/reference/vector.md#vector3) vector
   {DESC} Inverse transform the specified position vector, effectively converting a point from world space to object space.
====
   {NAME} invTransformVector(

[Vector3](/reference/vector.md#vector3) vector

   )
    {RET} [Vector3](/reference/vector.md#vector3) vector
   {DESC} Inverse transform the specified speed vector, applying rotation and scale, but not position.
====
   {NAME} invTransformDirection(

[Vector3](/reference/vector.md#vector3) vector

   )
    {RET} [Vector3](/reference/vector.md#vector3) vector
   {DESC} Inverse transform the specified direction vector, applying rotation, but not position or scale.
====
   {NAME} addChild(

[Transform3D](/reference/transform.md#transform3d) child,

[bool](/types/bool.md) keepWorld

   )
    {RET} [nil](/types/nil.md)
   {DESC} Attaches the provided transform as a child. If `keepWorld` is `true`, the child will keep its world space coordinates. By default, `keepWorld` is true.
====
   {NAME} setParent(

[Transform3D](/reference/transform.md#transform3d) parent,

[bool](/types/bool.md) keepWorld

   )
    {RET} [nil](/types/nil.md)
   {DESC} Attaches the transform as a child of the provided transform. If `keepWorld` is `true`, the transform will keep its world space coordinates. By default, `keepWorld` is true.
====
   {NAME} detachChildren()
    {RET} [nil](/types/nil.md)
   {DESC} Removes all children from the transform, effectively setting all their parent objects to [nil](/types/nil.md).
====
   {NAME} getSiblingIndex()
    {RET} [number](/types/number.md) index
   {DESC} Gets the index of this transform in its parents child list.
====
   {NAME} setSiblingIndex(

[number](/types/number.md) index

   )
    {RET} [nil](/types/nil.md)
   {DESC} Sets the index of this transform in its parents child list. Other siblings will be shifted to accommodate.
====
   {NAME} setFirstSibling()
    {RET} [nil](/types/nil.md)
   {DESC} Pushes this transform to be first in its parents child list.
====
   {NAME} setLastSibling()
    {RET} [nil](/types/nil.md)
   {DESC} Pushes this transform to be last in its parents child list.
{ENDTABLE}

### Instance Fields

{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE} [Vector3](/reference/vector.md#vector3)
  {FIELD} position
     {RO} No
   {DESC} The transform local position.
====
   {TYPE} [Quaternion](/reference/vector.md#quaternion)
  {FIELD} rotation
     {RO} No
   {DESC} The transform local rotation.
====
   {TYPE} [Vector3](/reference/vector.md#vector3)
  {FIELD} scale
     {RO} No
   {DESC} The transform local scale.
====
   {TYPE} [Vector3](/reference/vector.md#vector3)
  {FIELD} wposition
     {RO} No
   {DESC} The transform global position.
====
   {TYPE} [Quaternion](/reference/vector.md#quaternion)
  {FIELD} wrotation
     {RO} No
   {DESC} The transform global rotation.
====
   {TYPE} [Vector3](/reference/vector.md#vector3)
  {FIELD} wscale
     {RO} No
   {DESC} The transform global scale.
====
   {TYPE} [Transform3D](/reference/transform.md#transform3d) 
  {FIELD} parent
     {RO} No
   {DESC} The transforms parent. Assigning to this is equivalent to calling `setParent`.
====
   {TYPE} [Vector3](/reference/vector.md#vector3)
  {FIELD} forward
     {RO} No
   {DESC} The transform local "forward" (+z) vector.
====
   {TYPE} [Vector3](/reference/vector.md#vector3)
  {FIELD} up
     {RO} No
   {DESC} The transform local "up" (+y) vector.
====
   {TYPE} [Vector3](/reference/vector.md#vector3)
  {FIELD} right
     {RO} No
   {DESC} The transform local "right" (+x) vector.
====
   {TYPE} [Vector3](/reference/vector.md#vector3)
  {FIELD} wforward
     {RO} No
   {DESC} The transform global "forward" (+z) vector.
====
   {TYPE} [Vector3](/reference/vector.md#vector3)
  {FIELD} wup
     {RO} No
   {DESC} The transform global "up" (+y) vector.
====
   {TYPE} [Vector3](/reference/vector.md#vector3)
  {FIELD} wright
     {RO} No
   {DESC} The transform global "right" (+x) vector.
====
   {TYPE} [Mat4](/reference/vector.md#mat4)
  {FIELD} obj2world
     {RO} Yes
   {DESC} The "object to world" space transformation matrix.
====
   {TYPE} [Mat4](/reference/vector.md#mat4)
  {FIELD} world2obj
     {RO} Yes
   {DESC} The "world to object" space transformation matrix.
====
   {TYPE} [table](/types/table.md) of [Transform3D](/reference/transform.md#transform3d) 
  {FIELD} children
     {RO} No
   {DESC} A list of the transform's children.
====
   {TYPE} [number](/types/number.md)
  {FIELD} siblingIdx
     {RO} No
   {DESC} The current sibling index. Assigning to this is equivalent to calling `setSiblingIndex`.
====
   {TYPE} [Transform3D](/reference/transform.md#transform3d) 
  {FIELD} root
     {RO} Yes
   {DESC} The uppermost parent of this transform in the object hierarchy.
{ENDTABLE}

### Operators

Transform objects contain some special operators.

| Operator | Description
| --- | --- |
| #[Transform3D](/reference/transform.md#transform3d) | Returns the number of children contained in the transform. |
| pairs([Transform3D](/reference/transform.md#transform3d)) or ipairs([Transform3D](/reference/transform.md#transform3d)) | Iterates over the transform's children. |
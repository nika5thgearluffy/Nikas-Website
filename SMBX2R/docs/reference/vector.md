# Vector

The vector class contains a collection of mathematical features for working with linear algebra. It contains a number of different types of object:

| Object | Description |
| --- | --- |
| [Vector2](/reference/vector.md#vector2) | 2 dimensional vector objects (x,y). |
| [Vector3](/reference/vector.md#vector3) | 3 dimensional vector objects (x,y,z). |
| [Vector4](/reference/vector.md#vector4) | 4 dimensional vector objects (x,y,z,w). |
| [Mat2](/reference/vector.md#mat2) | 2x2 matrices. |
| [Mat3](/reference/vector.md#mat3) | 3x3 matrices. |
| [Mat4](/reference/vector.md#mat4) | 4x4 matrices. |
| [Quaternion](/reference/vector.md#quaternion) | [Quaternions](https://en.wikipedia.org/wiki/Quaternion) (w + xi + yj + zk). |

### Constants

Certain objects are predefined and can be accessed using the constants.

| Constant | Type | Constructor equivalent | Description |
| --- | --- | --- | --- |
| vector.zero2 | [Vector2](/reference/vector.md#vector2) | vector(0,0) | An empty 2D vector. |
| vector.up2 | [Vector2](/reference/vector.md#vector2) | vector(0,1) | A 2D vector pointing along positive y. |
| vector.down2 | [Vector2](/reference/vector.md#vector2) | vector(0,1) | A 2D vector pointing along positive y (down in [SMBX coordinates](/concepts/coordinate-spaces.md)). |
| vector.right2 | [Vector2](/reference/vector.md#vector2) | vector(1,0) | A 2D vector pointing along positive x. |
| vector.one2 | [Vector2](/reference/vector.md#vector2) | vector(1,1) | A 2D vector with all components set to 1. |
| vector.zero3 | [Vector3](/reference/vector.md#vector3) | vector(0,0,0) | An empty 3D vector. |
| vector.forward3 | [Vector3](/reference/vector.md#vector3) | vector(0,0,1) | A 3D vector pointing along positive z. |
| vector.up3 | [Vector3](/reference/vector.md#vector3) | vector(0,1,0) | A 3D vector pointing along positive y. |
| vector.down3 | [Vector3](/reference/vector.md#vector3) | vector(0,1,0) | A 3D vector pointing along positive y (down in [SMBX coordinates](/concepts/coordinate-spaces.md)). |
| vector.right3 | [Vector3](/reference/vector.md#vector3) | vector(1,0,0) | A 3D vector pointing along positive x. |
| vector.one3 | [Vector3](/reference/vector.md#vector3) | vector(1,1,1) | A 3D vector with all components set to 1. |
| vector.zero4 | [Vector4](/reference/vector.md#vector4) | vector(0,0,0,0) | An empty 4D vector. |
| vector.w4 | [Vector4](/reference/vector.md#vector4) | vector(0,0,0,1) | A 4D vector pointing along positive w. |
| vector.forward4 | [Vector4](/reference/vector.md#vector4) | vector(0,0,1,0) | A 4D vector pointing along positive z. |
| vector.up4 | [Vector4](/reference/vector.md#vector4) | vector(0,1,0,0) | A 4D vector pointing along positive y. |
| vector.down4 | [Vector4](/reference/vector.md#vector4) | vector(0,1,0,0) | A 4D vector pointing along positive y (down in [SMBX coordinates](/concepts/coordinate-spaces.md)). |
| vector.right4 | [Vector4](/reference/vector.md#vector4) | vector(1,0,0,0) | A 4D vector pointing along positive x. |
| vector.one4 | [Vector4](/reference/vector.md#vector4) | vector(1,1,1,1) | A 4D vector with all components set to 1. |
| vector.empty2 | [Mat2](/reference/vector.md#mat2) | vector.mat2({0,0},{0,0}) | An empty 2x2 matrix. |
| vector.id2 | [Mat2](/reference/vector.md#mat2) | vector.mat2({1,0},{0,1}) | The 2x2 [identity matrix](https://en.wikipedia.org/wiki/Identity_matrix). |
| vector.empty3 | [Mat3](/reference/vector.md#mat3) | vector.mat3({0,0,0},{0,0,0},{0,0,0}) | An empty 3x3 matrix. |
| vector.id3 | [Mat3](/reference/vector.md#mat3) | vector.mat3({1,0,0},{0,1,0},{0,0,1}) | The 3x3 [identity matrix](https://en.wikipedia.org/wiki/Identity_matrix). |
| vector.empty4 | [Mat4](/reference/vector.md#mat4) | vector.mat4({0,0,0,0},{0,0,0,0},{0,0,0,0},{0,0,0,0}) | An empty 4x4 matrix. |
| vector.id4 | [Mat4](/reference/vector.md#mat4) | vector.mat4({1,0,0,0},{0,1,0,0},{0,0,1,0},{0,0,0,1}) | The 4x4 [identity matrix](https://en.wikipedia.org/wiki/Identity_matrix). |
| vector.quatid | [Quaternion](/reference/vector.md#quaternion) | vector.quat(0,0,0) | The identity quaternion corresponding to no rotation. |

### Static functions

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} vector(

[number](/types/number.md) x,

[number](/types/number.md) y
       
)
    {RET} [Vector2](/reference/vector.md#vector2) vector
   {DESC} Creates a new vector object with the given values for x and y.
====
   {NAME} vector(

[number](/types/number.md) x,

[number](/types/number.md) y,

[number](/types/number.md) z
       
)
    {RET} [Vector3](/reference/vector.md#vector3) vector
   {DESC} Creates a new vector object with the given values for x, y, and z.
====
   {NAME} vector(

[number](/types/number.md) x,

[number](/types/number.md) y,

[number](/types/number.md) z,

[number](/types/number.md) w
       
)
    {RET} [Vector4](/reference/vector.md#vector4) vector
   {DESC} Creates a new vector object with the given values for x, y, z, and w.
====
   {NAME} vector.v2(

[number](/types/number.md) x,

[number](/types/number.md) y
       
)
    {RET} [Vector2](/reference/vector.md#vector2) vector
   {DESC} Creates a new vector object with the given values for x and y.
====
   {NAME} vector.v3(

[number](/types/number.md) x,

[number](/types/number.md) y,

[number](/types/number.md) z
       
)
    {RET} [Vector3](/reference/vector.md#vector3) vector
   {DESC} Creates a new vector object with the given values for x, y, and z.
====
   {NAME} vector.v4(

[number](/types/number.md) x,

[number](/types/number.md) y,

[number](/types/number.md) z,

[number](/types/number.md) w
       
)
    {RET} [Vector4](/reference/vector.md#vector4) vector
   {DESC} Creates a new vector object with the given values for x, y, z, and w.
====
   {NAME} vector.mat2(

[number](/types/number.md) m00,

[number](/types/number.md) m01,

[number](/types/number.md) m10,

[number](/types/number.md) m11
       
)
    {RET} [Mat2](/reference/vector.md#mat2) matrix
   {DESC} Creates a new 2x2 matrix object with the given elements. Matrices use [column major ordering](https://en.wikipedia.org/wiki/Row-_and_column-major_order).
====
   {NAME} vector.mat2(

table of [number](/types/number.md) row1,

table of [number](/types/number.md) row2
       
)
    {RET} [Mat2](/reference/vector.md#mat2) matrix
   {DESC} Creates a new 2x2 matrix object with the given rows. Rows must contain two elements. [Vector2](/reference/vector.md#vector2) objects can be substituted for rows.
====
   {NAME} vector.mat3(

[number](/types/number.md) m00,

[number](/types/number.md) m01,

[number](/types/number.md) m02,

[number](/types/number.md) m10,

[number](/types/number.md) m11,

[number](/types/number.md) m12,

[number](/types/number.md) m20,

[number](/types/number.md) m21,

[number](/types/number.md) m22
       
)
    {RET} [Mat3](/reference/vector.md#mat3) matrix
   {DESC} Creates a new 3x3 matrix object with the given elements. Matrices use [column major ordering](https://en.wikipedia.org/wiki/Row-_and_column-major_order).
====
   {NAME} vector.mat3(

table of [number](/types/number.md) row1,

table of [number](/types/number.md) row2,

table of [number](/types/number.md) row3
       
)
    {RET} [Mat3](/reference/vector.md#mat3) matrix
   {DESC} Creates a new 3x3 matrix object with the given rows. Rows must contain three elements. [Vector3](/reference/vector.md#vector3) objects can be substituted for rows.
====
   {NAME} vector.mat4(

[number](/types/number.md) m00,

[number](/types/number.md) m01,

[number](/types/number.md) m02,

[number](/types/number.md) m03,

[number](/types/number.md) m10,

[number](/types/number.md) m11,

[number](/types/number.md) m12,

[number](/types/number.md) m13,

[number](/types/number.md) m20,

[number](/types/number.md) m21,

[number](/types/number.md) m22,

[number](/types/number.md) m23,

[number](/types/number.md) m30,

[number](/types/number.md) m31,

[number](/types/number.md) m32,

[number](/types/number.md) m33
       
)
    {RET} [Mat4](/reference/vector.md#mat4) matrix
   {DESC} Creates a new 4x4 matrix object with the given elements. Matrices use [column major ordering](https://en.wikipedia.org/wiki/Row-_and_column-major_order).
====
   {NAME} vector.mat4(

table of [number](/types/number.md) row1,

table of [number](/types/number.md) row2,

table of [number](/types/number.md) row3,

table of [number](/types/number.md) row4
       
)
    {RET} [Mat4](/reference/vector.md#mat4) matrix
   {DESC} Creates a new 4x4 matrix object with the given rows. Rows must contain four elements. [Vector4](/reference/vector.md#vector4) objects can be substituted for rows.
====
   {NAME} vector.quat(

[number](/types/number.md) w,

[number](/types/number.md) x,

[number](/types/number.md) y,

[number](/types/number.md) z
       
)
    {RET} [Quaternion](/reference/vector.md#quaternion) quaternion
   {DESC} Creates a new quaternion object of the form w + xi + yj + zk.
====
   {NAME} vector.quat(

[number](/types/number.md) roll,

[number](/types/number.md) pitch,

[number](/types/number.md) yaw
       
)
    {RET} [Quaternion](/reference/vector.md#quaternion) quaternion
   {DESC} Creates a new normalized quaternion object, describing the 3D rotation with [Euler representation](https://en.wikipedia.org/wiki/Euler_angles) (roll, pitch, yaw).
====
   {NAME} vector.quat(

[Mat3](/reference/vector.md#mat3) matrix
       
)
    {RET} [Quaternion](/reference/vector.md#quaternion) quaternion
   {DESC} Creates a new normalized quaternion object, describing the 3D rotation encoded in the given rotation matrix.
====
   {NAME} vector.quat(

[Vector3](/reference/vector.md#vector3) axis,

[number](/types/number.md) angle
       
)
    {RET} [Quaternion](/reference/vector.md#quaternion) quaternion
   {DESC} Creates a new normalized quaternion object, describing the 3D rotation given by rotating an object the specified number of degrees around the given axis.
====
   {NAME} vector.quat(

[Vector3](/reference/vector.md#vector3) from,

[Vector3](/reference/vector.md#vector3) to
       
)
    {RET} [Quaternion](/reference/vector.md#quaternion) quaternion
   {DESC} Creates a new normalized quaternion object, describing the 3D rotation required to rotate the `from` vector to point along the `to` vector.
====
   {NAME} vector.lerp(

[Vector2](/reference/vector.md#vector2) a,

[Vector2](/reference/vector.md#vector2) b,

[number](/types/number.md) value
       
)
    {RET} [Vector2](/reference/vector.md#vector2) vector
   {DESC} Interpolates between the [Vector2](/reference/vector.md#vector2) objects `a` and `b` by interpolating the x and y values separately. Equivalent to `math.lerp`.
====
   {NAME} vector.lerp(

[Vector3](/reference/vector.md#vector3) a,

[Vector3](/reference/vector.md#vector3) b,

[number](/types/number.md) value
       
)
    {RET} [Vector3](/reference/vector.md#vector3) vector
   {DESC} Interpolates between the [Vector3](/reference/vector.md#vector3) objects `a` and `b` by interpolating the x, y, and z values separately. Equivalent to `math.lerp`.
====
   {NAME} vector.lerp(

[Vector4](/reference/vector.md#vector4) a,

[Vector4](/reference/vector.md#vector4) b,

[number](/types/number.md) value
       
)
    {RET} [Vector4](/reference/vector.md#vector4) vector
   {DESC} Interpolates between the [Vector4](/reference/vector.md#vector4) objects `a` and `b` by interpolating the x, y, z, and w values separately. Equivalent to `math.lerp`.
====
   {NAME} vector.lerp(

[Mat2](/reference/vector.md#mat2) a,

[Mat2](/reference/vector.md#mat2) b,

[number](/types/number.md) value
       
)
    {RET} [Mat2](/reference/vector.md#mat2) matrix
   {DESC} Interpolates between the [Mat2](/reference/vector.md#mat2) objects `a` and `b` by interpolating the component values separately. Equivalent to `math.lerp`.
====
   {NAME} vector.lerp(

[Mat3](/reference/vector.md#mat3) a,

[Mat3](/reference/vector.md#mat3) b,

[number](/types/number.md) value
       
)
    {RET} [Mat3](/reference/vector.md#mat3) matrix
   {DESC} Interpolates between the [Mat3](/reference/vector.md#mat3) objects `a` and `b` by interpolating the component values separately. Equivalent to `math.lerp`.
====
   {NAME} vector.lerp(

[Mat4](/reference/vector.md#mat4) a,

[Mat4](/reference/vector.md#mat4) b,

[number](/types/number.md) value
       
)
    {RET} [Mat4](/reference/vector.md#mat4) matrix
   {DESC} Interpolates between the [Mat4](/reference/vector.md#mat4) objects `a` and `b` by interpolating the component values separately. Equivalent to `math.lerp`.
====
   {NAME} vector.lerp(

[Quaternion](/reference/vector.md#quaternion) a,

[Quaternion](/reference/vector.md#quaternion) b,

[number](/types/number.md) value
       
)
    {RET} [Quaternion](/reference/vector.md#quaternion) quaternion
   {DESC} Interpolates between the [Quaternion](/reference/vector.md#quaternion) objects `a` and `b` by interpolating the component values separately. Equivalent to `math.lerp`.
====
   {NAME} vector.slerp(

[Quaternion](/reference/vector.md#quaternion) a,

[Quaternion](/reference/vector.md#quaternion) b,

[number](/types/number.md) value
       
)
    {RET} [Quaternion](/reference/vector.md#quaternion) quaternion
   {DESC} Interpolates between the [Quaternion](/reference/vector.md#quaternion) objects `a` and `b`, by using the shortest rotational transformation.
====
   {NAME} vector.randomOnCircle(

[number](/types/number.md) radius
       
)
    {RET} [Vector2](/reference/vector.md#vector2) vector
   {DESC} Creates a new vector object that points to a random location on the surface of a circle with the given radius.
====
   {NAME} vector.randomInCircle(

[number](/types/number.md) radius
       
)
    {RET} [Vector2](/reference/vector.md#vector2) vector
   {DESC} Creates a new vector object that points to a random location inside a circle with the given radius.
====
   {NAME} vector.randomDir2()
    {RET} [Vector2](/reference/vector.md#vector2) vector
   {DESC} Creates a new vector object with length 1 that points in a random 2D direction.
====
   {NAME} vector.randomOnSphere(

[number](/types/number.md) radius
       
)
    {RET} [Vector3](/reference/vector.md#vector3) vector
   {DESC} Creates a new vector object that points to a random location on the surface of a sphere with the given radius.
====
   {NAME} vector.randomInSphere(

[number](/types/number.md) radius
       
)
    {RET} [Vector3](/reference/vector.md#vector3) vector
   {DESC} Creates a new vector object that points to a random location inside a sphere with the given radius.
====
   {NAME} vector.randomDir3()
    {RET} [Vector3](/reference/vector.md#vector3) vector
   {DESC} Creates a new vector object with length 1 that points in a random 3D direction.
{ENDTABLE}


## Vector2

A 2 dimensional [vector object](https://en.wikipedia.org/wiki/Euclidean_vector), commonly used to store 2D positions or speeds.

### Instance members

Instance members must be accessed through a reference to a specific [Vector2](/reference/vector.md#vector2) object.
```lua
local v = vector.right2
v.y = 0.5
local vd = v:normalize()
```
<Note type="warning">Attempting to call instance members statically will result in an error!</Note>

### Instance Methods

[What is a method?](/types/function.md#methods)

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} normalize()
    {RET} [Vector2](/reference/vector.md#vector2) vector
   {DESC} Normalizes the vector, keeping its direction unchanged, but adjusting its length to be 1.
====
   {NAME} rotate(

[number](/types/number.md) angle
   
)
    {RET} [Vector2](/reference/vector.md#vector2) vector
   {DESC} Rotates the vector clockwise by the specified number of degrees. Negative values will rotate counter-clockwise.
====
   {NAME} lookat(

[Vector2](/reference/vector.md#vector2) target
   
)
    {RET} [Vector2](/reference/vector.md#vector2) vector
   {DESC} Rotates the vector to point along the same direction as the target.
====
   {NAME} project(

[Vector2](/reference/vector.md#vector2) target
   
)
    {RET} [Vector2](/reference/vector.md#vector2) vector
   {DESC} Projects the vector into the target vector. More about [vector projection](https://en.wikipedia.org/wiki/Vector_projection).
====
   {NAME} dot(

[Vector2](/reference/vector.md#vector2) other
   
)
    {RET} [number](/types/number.md) product
   {DESC} Performs a scalar [dot product](https://en.wikipedia.org/wiki/Dot_product) between the object and the other provided vector.
====
   {NAME} tov3()
    {RET} [Vector3](/reference/vector.md#vector3) vector
   {DESC} Converts the vector to a 3D representation, filling in 0 for the z component.
====
   {NAME} tov4()
    {RET} [Vector4](/reference/vector.md#vector4) vector
   {DESC} Converts the vector to a 4D representation, filling in 0 for the z and w components.
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
   {DESC} X coordinate.
====
   {TYPE} [number](/types/number.md)
  {FIELD} y
     {RO} No
   {DESC} Y coordinate.
====
   {TYPE} [number](/types/number.md)
  {FIELD} sqrlength
     {RO} Yes
   {DESC} The squared length of the vector.
====
   {TYPE} [number](/types/number.md)
  {FIELD} length
     {RO} Yes
   {DESC} The length of the vector.
{ENDTABLE}

### Operators

Vector objects contain some special operators that allow for more compact calculations.

| Operator | Description
| --- | --- |
| [Vector2](/reference/vector.md#vector2)+[Vector2](/reference/vector.md#vector2) | Basic vector addition. |
| [Vector2](/reference/vector.md#vector2)+[number](/types/number.md) | Equivalent to adding a vector with all elements of the same value. |
| [number](/types/number.md)+[Vector2](/reference/vector.md#vector2) | Equivalent to adding a vector with all elements of the same value. |
| [Vector2](/reference/vector.md#vector2)-[Vector2](/reference/vector.md#vector2) | Basic vector subtraction. |
| [Vector2](/reference/vector.md#vector2)-[number](/types/number.md) | Equivalent to subtracting a vector with all elements of the same value. |
| [number](/types/number.md)-[Vector2](/reference/vector.md#vector2) | Equivalent to subtracting from a vector with all elements of the same value. |
| [Vector2](/reference/vector.md#vector2)*[Vector2](/reference/vector.md#vector2) | Element-wise multiplication (e.g. `vector(a,b) * vector(c,d) = vector(a*c,b*d)`). |
| [Vector2](/reference/vector.md#vector2)*[number](/types/number.md) | Multiplies all elements by the given value, effectively equivalent to multiplying the vectors length. |
| [number](/types/number.md)*[Vector2](/reference/vector.md#vector2) | Multiplies all elements by the given value, effectively equivalent to multiplying the vectors length. |
| [Vector2](/reference/vector.md#vector2)/[Vector2](/reference/vector.md#vector2) | Element-wise division (e.g. `vector(a,b) / vector(c,d) = vector(a/c,b/d)`). |
| [Vector2](/reference/vector.md#vector2)/[number](/types/number.md) | Divides all elements by the given value, effectively equivalent to dividing the vectors length. |
| [number](/types/number.md)/[Vector2](/reference/vector.md#vector2) | Equivalent to dividing a vector with all elements of the same value. |
| [Vector2](/reference/vector.md#vector2)..[Vector2](/reference/vector.md#vector2) | Performs a scalar [dot product](https://en.wikipedia.org/wiki/Dot_product) between the two vectors. |
| [Vector2](/reference/vector.md#vector2)%[Vector2](/reference/vector.md#vector2) | Projects the first vector onto the second vector. More about [vector projection](https://en.wikipedia.org/wiki/Vector_projection).|

## Vector3

A 3 dimensional [vector object](https://en.wikipedia.org/wiki/Euclidean_vector), commonly used to store 3D positions or speeds.

### Instance members

Instance members must be accessed through a reference to a specific [Vector3](/reference/vector.md#vector3) object.
```lua
local v = vector.right3
v.y = 0.5
local vd = v:normalize()
```
<Note type="warning">Attempting to call instance members statically will result in an error!</Note>

### Instance Methods

[What is a method?](/types/function.md#methods)

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} normalize()
    {RET} [Vector3](/reference/vector.md#vector3) vector
   {DESC} Normalizes the vector, keeping its direction unchanged, but adjusting its length to be 1.
====
   {NAME} rotate(

[number](/types/number.md) roll,
[number](/types/number.md) pitch,
[number](/types/number.md) yaw
   
)
    {RET} [Vector3](/reference/vector.md#vector3) vector
   {DESC} Rotates the vector by the given [Euler rotation](https://en.wikipedia.org/wiki/Euler_angles).
====
   {NAME} rotate(

[number](/types/number.md) angle,
[Vector3](/reference/vector.md#vector3) axis
   
)
    {RET} [Vector3](/reference/vector.md#vector3) vector
   {DESC} Rotates the vector by the given number of degrees around the provided axis.
====
   {NAME} rotate(

[Mat3](/reference/vector.md#mat3) matrix
   
)
    {RET} [Vector3](/reference/vector.md#vector3) vector
   {DESC} Rotates the vector using the provided rotation matrix.
====
   {NAME} lookat(

[Vector3](/reference/vector.md#vector3) target
   
)
    {RET} [Vector3](/reference/vector.md#vector3) vector
   {DESC} Rotates the vector to point along the same direction as the target.
====
   {NAME} project(

[Vector3](/reference/vector.md#vector3) target
   
)
    {RET} [Vector3](/reference/vector.md#vector3) vector
   {DESC} Projects the vector onto the target vector. More about [vector projection](https://en.wikipedia.org/wiki/Vector_projection).
====
   {NAME} planeproject(

[Vector3](/reference/vector.md#vector3) normal
   
)
    {RET} [Vector3](/reference/vector.md#vector3) vector
   {DESC} Projects the vector onto the plane determined by the given normal vector. More about [vector projection](https://en.wikipedia.org/wiki/Vector_projection).
====
   {NAME} dot(

[Vector3](/reference/vector.md#vector3) other
   
)
    {RET} [number](/types/number.md) product
   {DESC} Performs a scalar [dot product](https://en.wikipedia.org/wiki/Dot_product) between the object and the other provided vector.
====
   {NAME} cross(

[Vector3](/reference/vector.md#vector3) other
   
)
    {RET} [Vector3](/reference/vector.md#vector3) product
   {DESC} Performs a vector [cross product](https://en.wikipedia.org/wiki/Cross_product) between the object and the other provided vector.
====
   {NAME} tov2()
    {RET} [Vector2](/reference/vector.md#vector2) vector
   {DESC} Converts the vector to a 2D representation, discarding the z component.
====
   {NAME} tov4()
    {RET} [Vector4](/reference/vector.md#vector4) vector
   {DESC} Converts the vector to a 4D representation, filling in 0 for the w component.
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
   {DESC} X coordinate.
====
   {TYPE} [number](/types/number.md)
  {FIELD} y
     {RO} No
   {DESC} Y coordinate.
====
   {TYPE} [number](/types/number.md)
  {FIELD} z
     {RO} No
   {DESC} Z coordinate.
====
   {TYPE} [number](/types/number.md)
  {FIELD} sqrlength
     {RO} Yes
   {DESC} The squared length of the vector.
====
   {TYPE} [number](/types/number.md)
  {FIELD} length
     {RO} Yes
   {DESC} The length of the vector.
{ENDTABLE}

### Operators

Vector objects contain some special operators that allow for more compact calculations.

| Operator | Description
| --- | --- |
| [Vector3](/reference/vector.md#vector3)+[Vector3](/reference/vector.md#vector3) | Basic vector addition. |
| [Vector3](/reference/vector.md#vector3)+[number](/types/number.md) | Equivalent to adding a vector with all elements of the same value. |
| [number](/types/number.md)+[Vector3](/reference/vector.md#vector3) | Equivalent to adding a vector with all elements of the same value. |
| [Vector3](/reference/vector.md#vector3)-[Vector3](/reference/vector.md#vector3) | Basic vector subtraction. |
| [Vector3](/reference/vector.md#vector3)-[number](/types/number.md) | Equivalent to subtracting a vector with all elements of the same value. |
| [number](/types/number.md)-[Vector3](/reference/vector.md#vector3) | Equivalent to subtracting from a vector with all elements of the same value. |
| [Vector3](/reference/vector.md#vector3)*[Vector3](/reference/vector.md#vector3) | Element-wise multiplication (e.g. `vector(a,b,c) * vector(d,e,f) = vector(a*d,b*e,c*f)`). |
| [Vector3](/reference/vector.md#vector3)*[number](/types/number.md) | Multiplies all elements by the given value, effectively equivalent to multiplying the vectors length. |
| [number](/types/number.md)*[Vector3](/reference/vector.md#vector3) | Multiplies all elements by the given value, effectively equivalent to multiplying the vectors length. |
| [Vector3](/reference/vector.md#vector3)/[Vector3](/reference/vector.md#vector3) | Element-wise division (e.g. `vector(a,b,c) / vector(d,e,f) = vector(a/d,b/e,c/f)`). |
| [Vector3](/reference/vector.md#vector3)/[number](/types/number.md) | Divides all elements by the given value, effectively equivalent to dividing the vectors length. |
| [number](/types/number.md)/[Vector3](/reference/vector.md#vector3) | Equivalent to dividing a vector with all elements of the same value. |
| [Vector3](/reference/vector.md#vector3)..[Vector3](/reference/vector.md#vector3) | Performs a scalar [dot product](https://en.wikipedia.org/wiki/Dot_product) between the two vectors. |
| [Vector3](/reference/vector.md#vector3)^[Vector3](/reference/vector.md#vector3) | Performs a vector [cross product](https://en.wikipedia.org/wiki/Cross_product) between the two vectors. |
| [Vector3](/reference/vector.md#vector3)%[Vector3](/reference/vector.md#vector3) | Projects the first vector onto the second vector. More about [vector projection](https://en.wikipedia.org/wiki/Vector_projection).|


## Vector4

A 4 dimensional [vector object](https://en.wikipedia.org/wiki/Euclidean_vector). These are commonly used to store 3D positions with an extra component for depth information when performing 3D rendering.

### Instance members

Instance members must be accessed through a reference to a specific [Vector4](/reference/vector.md#vector4) object.
```lua
local v = vector.right4
v.y = 0.5
local vd = v:normalize()
```
<Note type="warning">Attempting to call instance members statically will result in an error!</Note>

### Instance Methods

[What is a method?](/types/function.md#methods)

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} normalize()
    {RET} [Vector4](/reference/vector.md#vector4) vector
   {DESC} Normalizes the vector, keeping its direction unchanged, but adjusting its length to be 1.
====
   {NAME} rotate(

[number](/types/number.md) roll,
[number](/types/number.md) pitch,
[number](/types/number.md) yaw
   
)
    {RET} [Vector4](/reference/vector.md#vector4) vector
   {DESC} Rotates the vector by the given 3D [Euler rotation](https://en.wikipedia.org/wiki/Euler_angles).
====
   {NAME} rotate(

[number](/types/number.md) angle,
[Vector3](/reference/vector.md#vector3) axis
   
)
    {RET} [Vector4](/reference/vector.md#vector4) vector
   {DESC} Rotates the vector by the given number of degrees around the provided 3D axis.
====
   {NAME} rotate(

[Mat3](/reference/vector.md#mat3) matrix
   
)
    {RET} [Vector4](/reference/vector.md#vector4) vector
   {DESC} Rotates the vector using the provided 3D rotation matrix.
====
   {NAME} rotate(

[Mat4](/reference/vector.md#mat4) matrix
   
)
    {RET} [Vector4](/reference/vector.md#vector4) vector
   {DESC} Rotates the vector using the provided 4D rotation matrix.
====
   {NAME} lookat(

[Vector3](/reference/vector.md#vector3) target
   
)
    {RET} [Vector4](/reference/vector.md#vector4) vector
   {DESC} Rotates the vector to point along the same direction as the 3D target.
====
   {NAME} project(

[Vector4](/reference/vector.md#vector4) target
   
)
    {RET} [Vector4](/reference/vector.md#vector4) vector
   {DESC} Projects the vector onto the target vector. More about [vector projection](https://en.wikipedia.org/wiki/Vector_projection).
====
   {NAME} planeproject(

[Vector4](/reference/vector.md#vector4) normal
   
)
    {RET} [Vector4](/reference/vector.md#vector4) vector
   {DESC} Projects the vector onto the hyperplane determined by the given normal vector. More about [vector projection](https://en.wikipedia.org/wiki/Vector_projection).
====
   {NAME} dot(

[Vector4](/reference/vector.md#vector4) other
   
)
    {RET} [number](/types/number.md) product
   {DESC} Performs a scalar [dot product](https://en.wikipedia.org/wiki/Dot_product) between the object and the other provided vector.
====
   {NAME} tov2()
    {RET} [Vector2](/reference/vector.md#vector2) vector
   {DESC} Converts the vector to a 2D representation, discarding the z and w components.
====
   {NAME} tov3()
    {RET} [Vector3](/reference/vector.md#vector3) vector
   {DESC} Converts the vector to a 4D representation, discarding the w component.
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
   {DESC} X coordinate.
====
   {TYPE} [number](/types/number.md)
  {FIELD} y
     {RO} No
   {DESC} Y coordinate.
====
   {TYPE} [number](/types/number.md)
  {FIELD} z
     {RO} No
   {DESC} Z coordinate.
====
   {TYPE} [number](/types/number.md)
  {FIELD} w
     {RO} No
   {DESC} W coordinate.
====
   {TYPE} [number](/types/number.md)
  {FIELD} sqrlength
     {RO} Yes
   {DESC} The squared length of the vector.
====
   {TYPE} [number](/types/number.md)
  {FIELD} length
     {RO} Yes
   {DESC} The length of the vector.
{ENDTABLE}

### Operators

Vector objects contain some special operators that allow for more compact calculations.

| Operator | Description
| --- | --- |
| [Vector4](/reference/vector.md#vector4)+[Vector4](/reference/vector.md#vector4) | Basic vector addition. |
| [Vector4](/reference/vector.md#vector4)+[number](/types/number.md) | Equivalent to adding a vector with all elements of the same value. |
| [number](/types/number.md)+[Vector4](/reference/vector.md#vector4) | Equivalent to adding a vector with all elements of the same value. |
| [Vector4](/reference/vector.md#vector4)-[Vector4](/reference/vector.md#vector4) | Basic vector subtraction. |
| [Vector4](/reference/vector.md#vector4)-[number](/types/number.md) | Equivalent to subtracting a vector with all elements of the same value. |
| [number](/types/number.md)-[Vector4](/reference/vector.md#vector4) | Equivalent to subtracting from a vector with all elements of the same value. |
| [Vector4](/reference/vector.md#vector4)*[Vector4](/reference/vector.md#vector4) | Element-wise multiplication (e.g. `vector(a,b,c,d) * vector(e,f,g,h) = vector(a*e,b*f,c*g,d*h)`). |
| [Vector4](/reference/vector.md#vector4)*[number](/types/number.md) | Multiplies all elements by the given value, effectively equivalent to multiplying the vectors length. |
| [number](/types/number.md)*[Vector4](/reference/vector.md#vector4) | Multiplies all elements by the given value, effectively equivalent to multiplying the vectors length. |
| [Vector4](/reference/vector.md#vector4)/[Vector4](/reference/vector.md#vector4) | Element-wise division (e.g. `vector(a,b,c,d) / vector(e,f,g,h) = vector(a/e,b/f,c/g,d/h)`). |
| [Vector4](/reference/vector.md#vector4)/[number](/types/number.md) | Divides all elements by the given value, effectively equivalent to dividing the vectors length. |
| [number](/types/number.md)/[Vector4](/reference/vector.md#vector4) | Equivalent to dividing a vector with all elements of the same value. |
| [Vector4](/reference/vector.md#vector4)..[Vector4](/reference/vector.md#vector4) | Performs a scalar [dot product](https://en.wikipedia.org/wiki/Dot_product) between the two vectors. |
| [Vector4](/reference/vector.md#vector4)%[Vector4](/reference/vector.md#vector4) | Projects the first vector onto the second vector. More about [vector projection](https://en.wikipedia.org/wiki/Vector_projection).|



## Mat2

A 2x2 [matrix object](https://en.wikipedia.org/wiki/Matrix_(mathematics)), commonly used to store 2D [linear transformations](https://en.wikipedia.org/wiki/Transformation_matrix).

### Instance members

Instance members must be accessed through a reference to a specific [Mat2](/reference/vector.md#mat2) object.
```lua
local v = vector.id2
v:set(1,1,4)
```
<Note type="warning">Attempting to call instance members statically will result in an error!</Note>

### Instance Methods

[What is a method?](/types/function.md#methods)

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} get(
   
[number](/types/number.md) i,
[number](/types/number.md) j
   
   )
    {RET} [number](/types/number.md) value
   {DESC} Gets the value in the matrix at coordinate (i,j).
====
   {NAME} set(
   
[number](/types/number.md) i,
[number](/types/number.md) j,
[number](/types/number.md) value
   
   )
    {RET} nil
   {DESC} Sets the value in the matrix at coordinate (i,j).
====
   {NAME} tomat3()
    {RET} [Mat3](/reference/vector.md#mat3) matrix
   {DESC} Converts the matrix to a 3x3 matrix, with the current matrix in the top left, and the remainder filled by 0s.
====
   {NAME} tomat4()
    {RET} [Mat4](/reference/vector.md#mat4) matrix
   {DESC} Converts the matrix to a 4x4 matrix, with the current matrix in the top left, and the remainder filled by 0s.
{ENDTABLE}

### Instance Fields

{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE} [number](/types/number.md)
  {FIELD} det
     {RO} Yes
   {DESC} The [matrix determinant](https://en.wikipedia.org/wiki/Determinant).
====
   {TYPE} [number](/types/number.md)
  {FIELD} trace
     {RO} Yes
   {DESC} The [trace](https://en.wikipedia.org/wiki/Trace_(linear_algebra)) of the matrix.
====
   {TYPE} [Mat2](/reference/vector.md#mat2)
  {FIELD} inverse
     {RO} Yes
   {DESC} The [inverse](https://en.wikipedia.org/wiki/Invertible_matrix) of the matrix. *Note that this will be `nil` if the matrix is not invertible.*
====
   {TYPE} [Mat2](/reference/vector.md#mat2)
  {FIELD} transpose
     {RO} Yes
   {DESC} The [transpose](https://en.wikipedia.org/wiki/Transpose) of the matrix.
{ENDTABLE}

### Operators

Matrix objects contain some special operators that allow for more compact calculations.

| Operator | Description
| --- | --- |
| [Mat2](/reference/vector.md#mat2)+[Mat2](/reference/vector.md#mat2) | Element-wise addition of both matrices. |
| [Mat2](/reference/vector.md#mat2)+[number](/types/number.md) | Equivalent to adding a matrix with all elements of the same value. |
| [number](/types/number.md)+[Mat2](/reference/vector.md#mat2)| Equivalent to adding a matrix with all elements of the same value. |
| [Mat2](/reference/vector.md#mat2)-[Mat2](/reference/vector.md#mat2) | Element-wise subtraction of a matrix. |
| [Mat2](/reference/vector.md#mat2)-[number](/types/number.md) | Equivalent to subtracting a matrix with all elements of the same value. |
| [number](/types/number.md)-[Mat2](/reference/vector.md#mat2) | Equivalent to subtracting from a matrix with all elements of the same value. |
| [Mat2](/reference/vector.md#mat2)*[Mat2](/reference/vector.md#mat2) | [Matrix multiplication](https://en.wikipedia.org/wiki/Matrix_multiplication). |
| [Mat2](/reference/vector.md#mat2)*[number](/types/number.md) | Multiplies all elements by the given value. |
| [number](/types/number.md)*[Mat2](/reference/vector.md#mat2) | Multiplies all elements by the given value. |
| [Mat2](/reference/vector.md#mat2)*[Vector2](/reference/vector.md#vector2) | [Multiplies](https://en.wikipedia.org/wiki/Matrix_multiplication) the matrix with the given vector. |
| [Mat2](/reference/vector.md#mat2)/[Mat2](/reference/vector.md#mat2) | [Multiplies](https://en.wikipedia.org/wiki/Matrix_multiplication) the first matrix with the [inverse](https://en.wikipedia.org/wiki/Invertible_matrix) of the second matrix. |
| [Mat2](/reference/vector.md#mat2)/[number](/types/number.md) | Divides all elements by the given value. |
| [number](/types/number.md)/[Mat2](/reference/vector.md#mat2) | [Multiplies](https://en.wikipedia.org/wiki/Matrix_multiplication) a matrix with all elements of the same value with the [inverse](https://en.wikipedia.org/wiki/Invertible_matrix) of the given matrix. |


## Mat3

A 3x3 [matrix object](https://en.wikipedia.org/wiki/Matrix_(mathematics)), commonly used to store 3D [linear transformations](https://en.wikipedia.org/wiki/Transformation_matrix).

### Instance members

Instance members must be accessed through a reference to a specific [Mat3](/reference/vector.md#mat3) object.
```lua
local v = vector.id3
v:set(1,1,1,4)
```
<Note type="warning">Attempting to call instance members statically will result in an error!</Note>

### Instance Methods

[What is a method?](/types/function.md#methods)

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} get(
   
[number](/types/number.md) i,
[number](/types/number.md) j
   
   )
    {RET} [number](/types/number.md) value
   {DESC} Gets the value in the matrix at coordinate (i,j).
====
   {NAME} set(
   
[number](/types/number.md) i,
[number](/types/number.md) j
[number](/types/number.md) value
   
   )
    {RET} nil
   {DESC} Sets the value in the matrix at coordinate (i,j).
====
   {NAME} tomat2()
    {RET} [Mat2](/reference/vector.md#mat2) matrix
   {DESC} Converts the matrix to a 2x2 matrix, discarding the bottom right of the matrix.
====
   {NAME} tomat4()
    {RET} [Mat4](/reference/vector.md#mat4) matrix
   {DESC} Converts the matrix to a 4x4 matrix, with the current matrix in the top left, and the remainder filled by 0s.
{ENDTABLE}

### Instance Fields

{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE} [number](/types/number.md)
  {FIELD} det
     {RO} Yes
   {DESC} The [matrix determinant](https://en.wikipedia.org/wiki/Determinant).
====
   {TYPE} [number](/types/number.md)
  {FIELD} trace
     {RO} Yes
   {DESC} The [trace](https://en.wikipedia.org/wiki/Trace_(linear_algebra)) of the matrix.
====
   {TYPE} [Mat3](/reference/vector.md#mat3)
  {FIELD} inverse
     {RO} Yes
   {DESC} The [inverse](https://en.wikipedia.org/wiki/Invertible_matrix) of the matrix. *Note that this will be `nil` if the matrix is not invertible.*
====
   {TYPE} [Mat3](/reference/vector.md#mat3)
  {FIELD} transpose
     {RO} Yes
   {DESC} The [transpose](https://en.wikipedia.org/wiki/Transpose) of the matrix.
{ENDTABLE}

### Operators

Matrix objects contain some special operators that allow for more compact calculations.

| Operator | Description
| --- | --- |
| [Mat3](/reference/vector.md#mat3)+[Mat3](/reference/vector.md#mat3) | Element-wise addition of both matrices. |
| [Mat3](/reference/vector.md#mat3)+[number](/types/number.md) | Equivalent to adding a matrix with all elements of the same value. |
| [number](/types/number.md)+[Mat3](/reference/vector.md#mat3)| Equivalent to adding a matrix with all elements of the same value. |
| [Mat3](/reference/vector.md#mat3)-[Mat3](/reference/vector.md#mat3) | Element-wise subtraction of a matrix. |
| [Mat3](/reference/vector.md#mat3)-[number](/types/number.md) | Equivalent to subtracting a matrix with all elements of the same value. |
| [number](/types/number.md)-[Mat3](/reference/vector.md#mat3) | Equivalent to subtracting from a matrix with all elements of the same value. |
| [Mat3](/reference/vector.md#mat3)*[Mat3](/reference/vector.md#mat3) | [Matrix multiplication](https://en.wikipedia.org/wiki/Matrix_multiplication). |
| [Mat3](/reference/vector.md#mat3)*[number](/types/number.md) | Multiplies all elements by the given value. |
| [number](/types/number.md)*[Mat3](/reference/vector.md#mat3) | Multiplies all elements by the given value. |
| [Mat3](/reference/vector.md#mat3)*[Vector3](/reference/vector.md#vector3) | [Multiplies](https://en.wikipedia.org/wiki/Matrix_multiplication) the matrix with the given vector. |
| [Mat3](/reference/vector.md#mat3)/[Mat3](/reference/vector.md#mat3) | [Multiplies](https://en.wikipedia.org/wiki/Matrix_multiplication) the first matrix with the [inverse](https://en.wikipedia.org/wiki/Invertible_matrix) of the second matrix. |
| [Mat3](/reference/vector.md#mat3)/[number](/types/number.md) | Divides all elements by the given value. |
| [number](/types/number.md)/[Mat3](/reference/vector.md#mat3) | [Multiplies](https://en.wikipedia.org/wiki/Matrix_multiplication) a matrix with all elements of the same value with the [inverse](https://en.wikipedia.org/wiki/Invertible_matrix) of the given matrix. |


## Mat4

A 4x4 [matrix object](https://en.wikipedia.org/wiki/Matrix_(mathematics)), commonly used to store 3D [linear transformations](https://en.wikipedia.org/wiki/Transformation_matrix), with an extra row and column to allow [translation](https://en.wikipedia.org/wiki/Translation_(geometry)) to be encoded along with depth information during 3D rendering.

### Instance members

Instance members must be accessed through a reference to a specific [Mat4](/reference/vector.md#mat4) object.
```lua
local v = vector.id4
v:set(1,1,1,1,4)
```
<Note type="warning">Attempting to call instance members statically will result in an error!</Note>

### Instance Methods

[What is a method?](/types/function.md#methods)

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} get(
   
[number](/types/number.md) i,
[number](/types/number.md) j
   
   )
    {RET} [number](/types/number.md) value
   {DESC} Gets the value in the matrix at coordinate (i,j).
====
   {NAME} set(
   
[number](/types/number.md) i,
[number](/types/number.md) j
[number](/types/number.md) value
   
   )
    {RET} nil
   {DESC} Sets the value in the matrix at coordinate (i,j).
====
   {NAME} tomat2()
    {RET} [Mat2](/reference/vector.md#mat2) matrix
   {DESC} Converts the matrix to a 2x2 matrix, discarding the bottom right of the matrix.
====
   {NAME} tomat3()
    {RET} [Mat3](/reference/vector.md#mat3) matrix
   {DESC} Converts the matrix to a 3x3 matrix, discarding the bottom right of the matrix.
{ENDTABLE}

### Instance Fields

{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE} [number](/types/number.md)
  {FIELD} det
     {RO} Yes
   {DESC} The [matrix determinant](https://en.wikipedia.org/wiki/Determinant).
====
   {TYPE} [number](/types/number.md)
  {FIELD} trace
     {RO} Yes
   {DESC} The [trace](https://en.wikipedia.org/wiki/Trace_(linear_algebra)) of the matrix.
====
   {TYPE} [Mat3](/reference/vector.md#mat3)
  {FIELD} inverse
     {RO} Yes
   {DESC} The [inverse](https://en.wikipedia.org/wiki/Invertible_matrix) of the matrix. *Note that this will be `nil` if the matrix is not invertible.*
====
   {TYPE} [Mat3](/reference/vector.md#mat3)
  {FIELD} transpose
     {RO} Yes
   {DESC} The [transpose](https://en.wikipedia.org/wiki/Transpose) of the matrix.
{ENDTABLE}

### Operators

Matrix objects contain some special operators that allow for more compact calculations.

| Operator | Description
| --- | --- |
| [Mat4](/reference/vector.md#mat4)+[Mat4](/reference/vector.md#mat4) | Element-wise addition of both matrices. |
| [Mat4](/reference/vector.md#mat4)+[number](/types/number.md) | Equivalent to adding a matrix with all elements of the same value. |
| [number](/types/number.md)+[Mat4](/reference/vector.md#mat4)| Equivalent to adding a matrix with all elements of the same value. |
| [Mat4](/reference/vector.md#mat4)-[Mat4](/reference/vector.md#mat4) | Element-wise subtraction of a matrix. |
| [Mat4](/reference/vector.md#mat4)-[number](/types/number.md) | Equivalent to subtracting a matrix with all elements of the same value. |
| [number](/types/number.md)-[Mat4](/reference/vector.md#mat4) | Equivalent to subtracting from a matrix with all elements of the same value. |
| [Mat4](/reference/vector.md#mat4)*[Mat4](/reference/vector.md#mat4) | [Matrix multiplication](https://en.wikipedia.org/wiki/Matrix_multiplication). |
| [Mat4](/reference/vector.md#mat4)*[number](/types/number.md) | Multiplies all elements by the given value. |
| [number](/types/number.md)*[Mat4](/reference/vector.md#mat4) | Multiplies all elements by the given value. |
| [Mat4](/reference/vector.md#mat4)*[Vector4](/reference/vector.md#vector4) | [Multiplies](https://en.wikipedia.org/wiki/Matrix_multiplication) the matrix with the given vector. |
| [Mat4](/reference/vector.md#mat4)/[Mat4](/reference/vector.md#mat4) | [Multiplies](https://en.wikipedia.org/wiki/Matrix_multiplication) the first matrix with the [inverse](https://en.wikipedia.org/wiki/Invertible_matrix) of the second matrix. |
| [Mat4](/reference/vector.md#mat4)/[number](/types/number.md) | Divides all elements by the given value. |
| [number](/types/number.md)/[Mat4](/reference/vector.md#mat4) | [Multiplies](https://en.wikipedia.org/wiki/Matrix_multiplication) a matrix with all elements of the same value with the [inverse](https://en.wikipedia.org/wiki/Invertible_matrix) of the given matrix. |


## Quaternion

Quaternions are a form of 4-dimensional [complex number](https://en.wikipedia.org/wiki/Complex_number) that can be written as w + xi + yj + zk, such that i² = j² = k² = ijk = -1. They are commonly used for encoding 3D rotations in order to avoid [Gimbal Lock](https://en.wikipedia.org/wiki/Gimbal_lock).

### Instance members

Instance members must be accessed through a reference to a specific [Quaternion](/reference/vector.md#quaternion) object.
```lua
local q = vector.quat(90,90,90)
q:normalize()
```
<Note type="warning">Attempting to call instance members statically will result in an error!</Note>

### Instance Methods

[What is a method?](/types/function.md#methods)

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} normalize()
    {RET} [Quaternion](/reference/vector.md#quaternion) value
   {DESC} Normalizes the quaternion. All rotations are described by normalized quaternions.
====
   {NAME} rotateTo(
   
[Quaternion](/reference/vector.md#quaternion) target,
[number](/types/number.md) speed
   
   )
    {RET} [Quaternion](/reference/vector.md#quaternion) value
   {DESC} Rotates the quaternion towards the target with the given rotational speed in degrees.
====
   {NAME} lookTo(
   
[Vector3](/reference/vector.md#vector3) forward
   
   )
    {RET} nil
   {DESC} Points the quaternion along the target forward vector.
====
   {NAME} lookTo(
   
[Vector3](/reference/vector.md#vector3) forward,
[Vector3](/reference/vector.md#vector3) up
   
   )
    {RET} nil
   {DESC} Points the quaternion along the target forward vector, attempting to orient using the provided up vector.
====
   {NAME} dot(

[Quaternion](/reference/vector.md#quaternion) other
   
)
    {RET} [number](/types/number.md) product
   {DESC} Performs a scalar [dot product](https://en.wikipedia.org/wiki/Dot_product) between the object and the other provided quaternion.
====
   {NAME} toeuler()
    {RET} [number](/types/number.md) roll, [number](/types/number.md) pitch, [number](/types/number.md) yaw
   {DESC} Converts the quaternion to a [Euler representation](https://en.wikipedia.org/wiki/Euler_angles) (roll, pitch, yaw).
====
   {NAME} tomat()
    {RET} [Mat3](/reference/vector.md#mat3) matrix
   {DESC} Converts the quaternion to a 3x3 rotation matrix.
====
   {NAME} tomat3()
    {RET} [Mat3](/reference/vector.md#mat3) matrix
   {DESC} Converts the quaternion to a 3x3 rotation matrix.
====
   {NAME} tomat4()
    {RET} [Mat4](/reference/vector.md#mat4) matrix
   {DESC} Converts the quaternion to a 4x4 rotation matrix.
{ENDTABLE}

### Instance Fields

{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE} [Quaternion](/reference/vector.md#quaternion)
  {FIELD} inverse
     {RO} Yes
   {DESC} The inverse of the quaternion.
====
   {TYPE} [number](/types/number.md)
  {FIELD} sqrnorm
     {RO} Yes
   {DESC} The square of the [norm](https://en.wikipedia.org/wiki/Quaternion#Conjugation,_the_norm,_and_reciprocal) of the quaternion.
====
   {TYPE} [number](/types/number.md)
  {FIELD} norm
     {RO} Yes
   {DESC} The [norm](https://en.wikipedia.org/wiki/Quaternion#Conjugation,_the_norm,_and_reciprocal) of the quaternion.
====
   {TYPE} [Vector3](/reference/vector.md#vector3)
  {FIELD} euler
     {RO} Yes
   {DESC} A vector containing the [Euler representation](https://en.wikipedia.org/wiki/Euler_angles) (roll, pitch, yaw) of the quaternion.
====
   {TYPE} [Quaternion](/reference/vector.md#quaternion)
  {FIELD} normalized
     {RO} Yes
   {DESC} A normalized quaternion computed from the current quaternion's values.
{ENDTABLE}

### Operators

Quaternion objects contain some special operators that allow for more compact calculations.

| Operator | Description
| --- | --- |
| [Quaternion](/reference/vector.md#quaternion)+[Quaternion](/reference/vector.md#quaternion) | Quaternion addition. |
| [Quaternion](/reference/vector.md#quaternion)+[number](/types/number.md) | Adds the given value to the quaternion's w component. |
| [number](/types/number.md)+[Quaternion](/reference/vector.md#quaternion)| Adds the given value to the quaternion's w component. |
| [Quaternion](/reference/vector.md#quaternion)-[Quaternion](/reference/vector.md#quaternion) | Quaternion subtraction. |
| [Quaternion](/reference/vector.md#quaternion)-[number](/types/number.md) | Subtracts the given value from the quaternion's w component. |
| [number](/types/number.md)-[Quaternion](/reference/vector.md#quaternion) | Equivalent to subtracting from a quaterion whose w component is the given value, and whose other components are 0. |
| [Quaternion](/reference/vector.md#quaternion)*[Quaternion](/reference/vector.md#quaternion) | Quaternion multiplication. |
| [Quaternion](/reference/vector.md#quaternion)*[number](/types/number.md) | Multiplies all elements by the given value. |
| [number](/types/number.md)*[Quaternion](/reference/vector.md#quaternion) | Multiplies all elements by the given value. |
| [Quaternion](/reference/vector.md#quaternion)*[Vector3](/reference/vector.md#vector3) | Applies the quaternion transformation to the given vector. |
| [Quaternion](/reference/vector.md#quaternion)/[Quaternion](/reference/vector.md#quaternion) | Quaternion division. |
| [Quaternion](/reference/vector.md#quaternion)/[number](/types/number.md) | Divides all elements by the given value. |
| [number](/types/number.md)/[Quaternion](/reference/vector.md#quaternion) | Equivalent to dividing a quaterion whose w component is the given value, and whose other components are 0. |
| [Quaternion](/reference/vector.md#quaternion)..[Quaternion](/reference/vector.md#quaternion) | Performs a scalar [dot product](https://en.wikipedia.org/wiki/Dot_product) between the two quaternions. |

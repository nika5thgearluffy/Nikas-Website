# Colliders

The Colliders class provides functionality for checking for collision between objects or custom collision zones.

## Collision Object

The type Collision Object on this page refers to any object that has an attached collider. This includes collider types like Box, Tri, Poly and Rect, as well as the built-in types Player, Block and NPC.

## Static members

These elements are static to the class itself and can be accessed like so:
```lua
local boxCollider = Colliders.Box(-200000, -200600, 300, 600) -- x, y, width, height

function onTick()
   if Colliders.collide(boxCollider, player) then
      Text.print("Colliding!", 0, 0)
   end
end
```

### Collision Group Constants

Collision group constants should be used for the atype and btype parameters of the Colliders.getColliding function.

| Constant | Description |
| --- | --- |
| Colliders.COLLIDER | The default a/b parameter |
| Colliders.NPC | The a/b parameter describes NPC IDs |
| Colliders.BLOCK | The a/b parameter describes Block IDs |

### Static functions

#### Constructors

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} Colliders.Point(

[number](/types/number.md) x,

[number](/types/number.md) y
       
)
    {RET} [Point Collider](/reference/Colliders.md#point-collider) pointCollider
   {DESC} Creates a new point collider.
====
   {NAME} Colliders.Box(

[number](/types/number.md) x,

[number](/types/number.md) y,

[number](/types/number.md) width,

[number](/types/number.md) height
       
)
    {RET} [Box Collider](/reference/Colliders.md#box-collider) boxCollider
   {DESC} Creates a new axis-aligned box collider.
====
   {NAME} Colliders.Rect(

[number](/types/number.md) x,

[number](/types/number.md) y,

[number](/types/number.md) width,

[number](/types/number.md) height,

[number](/types/number.md) rotation
       
)
    {RET} [Rect Collider](/reference/Colliders.md#rect-collider) rectCollider
   {DESC} Creates a new rect collider. Rect colliders are slightly more expensive to compute collisions for than box colliders, but can be rotated.
====
   {NAME} Colliders.Circle(

[number](/types/number.md) x,

[number](/types/number.md) y,

[number](/types/number.md) radius
       
)
    {RET} [Circle Collider](/reference/Colliders.md#circle-collider) circleCollider
   {DESC} Creates a new circle collider.
====
   {NAME} Colliders.Tri(

[number](/types/number.md) x,

[number](/types/number.md) y,

[Vector2](/reference/vector.md) point1,

[Vector2](/reference/vector.md) point2,

[Vector2](/reference/vector.md) point3
       
)
    {RET} [Tri Collider](/reference/Colliders.md#tri-collider) triCollider
   {DESC} Creates a new triangle collider. Aside from vectors, pairs of x and y coordinates can also be supplied to the points {x, y}.
====
   {NAME} Colliders.Poly(

[number](/types/number.md) x,

[number](/types/number.md) y,

[vararg](/types/table.md) of [Vector2](/reference/vector.md) points
       
)
    {RET} [Poly Collider](/reference/Colliders.md#poly-collider) polyCollider
   {DESC} Creates a new polygon collider. After the center point, any number of vertices can be supplied. Will throw an error if two edges cross over each other. Aside from vectors, pairs of x and y coordinates can also be supplied to the points {x, y}.
{ENDTABLE}


#### Helpers

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} Colliders.getAABB(

[Collision Object](/reference/Colliders.md#collision-object) object
       
)
    {RET} [Box Collider](/reference/Colliders.md#box-collider) boxCollider
   {DESC} Gets the box collider axis-aligned bounding box for the given object. Box colliders return themselves.
====
   {NAME} Colliders.getHitbox(

[Collision Object](/reference/Colliders.md#collision-object) object
       
)
    {RET} [Collider](/reference/Colliders.md) collider
   {DESC} Gets the collider associated with the collision object.
====
   {NAME} Colliders.getSpeedHitbox(

[Collision Object](/reference/Colliders.md#collision-object) object
       
)
    {RET} [Collider](/reference/Colliders.md) collider
   {DESC} Gets the collider associated with the collision object, taking into account its speed. 
====
   {NAME} Colliders.bounceResponse(

[Collision Object](/reference/Colliders.md#collision-object) firstObject,

[number](/types/number.md) strength
       
)
    {RET} [nil](/type/nil.md)
   {DESC} Causes the object to "bounce" upwards as if they had just stomped on an enemy. Colliders cannot be used as the object. 
{ENDTABLE}

#### Collision checks

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} Colliders.collide(

[Collision Object](/reference/Colliders.md#collision-object) firstObject,

[Collision Object](/reference/Colliders.md#collision-object)  secondObject
       
)
    {RET} [bool](/type/bool.md) areColliding
   {DESC} Checks for collision between two objects. 
====
   {NAME} Colliders.speedCollide(

[Collision Object](/reference/Colliders.md#collision-object) firstObject,

[Collision Object](/reference/Colliders.md#collision-object)  secondObject
       
)
    {RET} [bool](/type/bool.md) areColliding
   {DESC} Checks for collision between two objects while taking their movement speed into account. 
====
   {NAME} Colliders.getColliding(

[named](/types/table.md) args
)
    {RET} [table](/types/table.md) of colliding objects
   {DESC} Checks for collisions between a and b, where a and b can be collision objects or lists of collision objects. If both a and b are lists, the returned table contains collision pairs in the form of {collidingAObject, collidingBObject}. If a/b is a list of IDs, the respective atype or btype needs to be set to define the type of ID used to either Colliders.NPC or Colliders.BLOCK. The filter function is defined as function(collidingObject) and returns true if the collidingObject should be considered in the collision check.

   <details><summary>Available args</summary>

| Argument | Description |
| --- | --- |
| Singular or [table](/types/table.md) of either [number](/types/number.md) or [Collision Object](/reference/Colliders.md#collision-object) a | First object (group) in the collision. If a number/table of numbers, it is considered an ID or list of IDs and atype needs to be set. |
| Singular or [table](/types/table.md) of either [number](/types/number.md) or [Collision Object](/reference/Colliders.md#collision-object) b | Second object (group) in the collision. If a number/table of numbers, it is considered an ID or list of IDs and btype needs to be set. |
| [Collision Group](/reference/Colliders.md#collision-group-constants) atype | Collision group type if a is a list of IDs |
| [Collision Group](/reference/Colliders.md#collision-group-constants) btype | Collision group type if b is a list of IDs |
| [number](/types/number.md) or [table](/types/table.md) of [number](/types/number.md) section | Section(s) to check in |
| [function](/types/function.md) filter | A function that filters the results. For blocks, hidden blocks are filtered by default. For NPCs, generator, hidden and friendly NPCs are filtered by default. |

</details>
====
   {NAME} Colliders.raycast(

[Vector2](/reference/vector.md) start,

[Vector2](/reference/vector.md) direction,

Singular or [table](/types/table.md) of [Collision Object](/reference/Colliders.md#collision-object) candidates
       
)
    {RET}

[bool](/type/bool.md) isColliding,

[Vector2](/reference/vector.md) intersectionPoint,

[Vector2](/reference/vector.md) intersectionNormal,

[Collision Object](/reference/Colliders.md#collision-object) hitObject
   {DESC} Performs a linecast starting at start and going in the specified direction by the length of the direction vector. The ray checks for collisions against the objects specified in the candidates table. Returns whether any object was hit by the ray, the point of intersection, the normal vector at that point and the collider that it first intersected.
====
   {NAME} Colliders.linecast(

[Vector2](/reference/vector.md) start,

[Vector2](/reference/vector.md) end,

Singular or [table](/types/table.md) of [Collision Object](/reference/Colliders.md#collision-object) candidates
       
)
    {RET}

[bool](/type/bool.md) isColliding,

[Vector2](/reference/vector.md) intersectionPoint,

[Vector2](/reference/vector.md) intersectionNormal,

[Collision Object](/reference/Colliders.md#collision-object) hitObject
   {DESC} Performs a linecast starting at start and stopping at end, traversing the line between the two points. The linecast checks for collisions against the objects specified in the candidates table. Returns whether any object was hit by the linecast, the point of intersection, the normal vector at that point and the collider that it first intersected.
====
   {NAME} Colliders.bounce(

[Collision Object](/reference/Colliders.md#collision-object) firstObject,

[Collision Object](/reference/Colliders.md#collision-object) secondObject
       
)
    {RET} [bool](/type/bool.md) areColliding,
    
[bool](/type/bool.md) isSpinjumpingPlayer
   {DESC} Determines if the first object has just bounced on the second object. The second return value will be true if the first object is a spinjumping player. Colliders cannot be used as the first object. 
====
   {NAME} Colliders.slash(

[Player](/reference/player.md) player,

[Collision Object](/reference/Colliders.md#collision-object) object
       
)
    {RET} [bool](/type/bool.md) isSlashing
   {DESC} Determines if the player has performed a sword slash and hit the object. Always returns false if not Link.
====
   {NAME} Colliders.downSlash(

[Player](/reference/player.md) player,

[Collision Object](/reference/Colliders.md#collision-object) object
       
)
    {RET} [bool](/type/bool.md) isSlashing
   {DESC} Determines if the player has performed a downwards sword slash and hit the object. Always returns false if not Link.
====
   {NAME} Colliders.tail(

[Player](/reference/player.md) player,

[Collision Object](/reference/Colliders.md#collision-object) object
       
)
    {RET} [bool](/type/bool.md) isSwiping
   {DESC} Determines if the player has performed a tanooki tail spin and hit the object. Always returns false if not wearing a tanooki suit or raccoon tail.
====
   {NAME} Colliders.tongue(

[Player](/reference/player.md) player,

[Collision Object](/reference/Colliders.md#collision-object) object
       
)
    {RET} [bool](/type/bool.md) isSwiping
   {DESC} Determines if the player has performed a Yoshi tongue attack and hit the object. Always returns false if not riding Yoshi.
{ENDTABLE}

## Classes

The colliders class defines various classes for different types of colliders, each with its own instance methods and fields.

Instance members must be accessed through a reference to a specific [Collider](/reference/Colliders.md) object.
```lua
local c = Colliders.Box(0, 0, 32, 32)
c:Debug(true)
function onTick()
   c.x = player.x
   c.y = player.y
end
```
<Note type="warning">Attempting to call instance members statically will result in an error!</Note>

### Shared instance methods

There are some methods shared by all types of colliders.

[What is a method?](/types/function.md#methods)

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} Draw([Color](/reference/Color.md) color)
    {RET} [nil](/types/nil.md)
   {DESC} Draws the collider to the screen with the specified color. If no color is supplied, the default will be used.
====
   {NAME} Debug([bool](/types/bool.md) enable)
    {RET} [nil](/types/nil.md)
   {DESC} Enables/disables debug drawing of the collider.
{ENDTABLE}

### Point Collider

Point colliders are colliders that only exist at a single point.

#### Instance Fields

{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE} [number](/types/number.md)
  {FIELD} x
     {RO} No
   {DESC} X-Coordinate
====
   {TYPE} [number](/types/number.md)
  {FIELD} y
     {RO} No
   {DESC} Y-Coordinate
{ENDTABLE}

### Box Collider

Box colliders are axis-aligned bounding boxes, meaning that they are rectangles that are always in line with the x and y axes. Thus, they cannot be rotated, but make up for it with faster collision checks than the similar Rect colliders. Their x and y coordinates are in the top left corner of the collider.

#### Instance Fields

{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE} [number](/types/number.md)
  {FIELD} x
     {RO} No
   {DESC} X-Coordinate
====
   {TYPE} [number](/types/number.md)
  {FIELD} y
     {RO} No
   {DESC} Y-Coordinate
====
   {TYPE} [number](/types/number.md)
  {FIELD} width
     {RO} No
   {DESC} Width
====
   {TYPE} [number](/types/number.md)
  {FIELD} height
     {RO} No
   {DESC} Height
{ENDTABLE}

### Rect Collider

Rect colliders are rectangular, like box colliders, but can be rotated. Their x and y coordinates are in the center of the collider.

#### Instance Methods

[What is a method?](/types/function.md#methods)

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} Rotate([number](/types/number.md) angle)
    {RET} [nil](/types/nil.md)
   {DESC} Rotates the rect collider by the specified angle in degrees.
{ENDTABLE}

#### Instance Fields

{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE} [number](/types/number.md)
  {FIELD} x
     {RO} No
   {DESC} X-Coordinate
====
   {TYPE} [number](/types/number.md)
  {FIELD} y
     {RO} No
   {DESC} Y-Coordinate
====
   {TYPE} [number](/types/number.md)
  {FIELD} width
     {RO} No
   {DESC} Width
====
   {TYPE} [number](/types/number.md)
  {FIELD} height
     {RO} No
   {DESC} Height
====
   {TYPE} [number](/types/number.md)
  {FIELD} rotation
     {RO} No
   {DESC} Angle of rotation in degrees
{ENDTABLE}

### Circle Collider

Circle colliders are colliders that are evenly scaled circles. Their x and y coordinates are in the center of the collider.

#### Instance Fields

{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE} [number](/types/number.md)
  {FIELD} x
     {RO} No
   {DESC} X-Coordinate
====
   {TYPE} [number](/types/number.md)
  {FIELD} y
     {RO} No
   {DESC} Y-Coordinate
====
   {TYPE} [number](/types/number.md)
  {FIELD} radius
     {RO} No
   {DESC} Radius of the circle
{ENDTABLE}

### Tri Collider

Tri colliders are triangular colliders. Their x and y coordinates describe the anchor point of rotation, while the list of vertices defines the shape of the collision area.

#### Instance Methods

[What is a method?](/types/function.md#methods)

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} Get([number](/types/number.md) index)
    {RET} [table](/types/table.md) of [number](/types/number.md) vertex
   {DESC} Returns the x and y coordinate of the vertex of the given index as a table formatted as a number pair {x, y}.
====
   {NAME} Rotate([number](/types/number.md) angle)
    {RET} [nil](/types/nil.md)
   {DESC} Rotates the tri collider by the specified angle in degrees.
====
   {NAME} Translate(

[number](/types/number.md) x,

[number](/types/number.md) y
)
    {RET} [nil](/types/nil.md)
   {DESC} Translates (offsets) the collider by the specified amount along the x and y axes.
====
   {NAME} Scale([number](/types/number.md) scaleFactor)
    {RET} [nil](/types/nil.md)
   {DESC} Scales (resizes) the collider by the specified scale factor.
{ENDTABLE}

#### Instance Fields

{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE} [number](/types/number.md)
  {FIELD} x
     {RO} No
   {DESC} X-Coordinate
====
   {TYPE} [number](/types/number.md)
  {FIELD} y
     {RO} No
   {DESC} Y-Coordinate
====
   {TYPE} [table](/types/table.md) of [number](/types/number.md) pairs
  {FIELD} tris
     {RO} No
   {DESC} The vertex list of the triangle collider. When manually editing this list, the minX, minY, maxX and maxY fields need to be updated manually as well. If winding order is anticlockwise, triangulation will fail. Make sure to keep the vertex list winding order clockwise when editing.
====
   {TYPE} [number](/types/number.md)
  {FIELD} minX
     {RO} No
   {DESC} Cached minimum x coordinate of the collider's bounding box.
====
   {TYPE} [number](/types/number.md)
  {FIELD} maxX
     {RO} No
   {DESC} Cached maximum x coordinate of the collider's bounding box.
====
   {TYPE} [number](/types/number.md)
  {FIELD} minY
     {RO} No
   {DESC} Cached minimum y coordinate of the collider's bounding box.
====
   {TYPE} [number](/types/number.md)
  {FIELD} maxY
     {RO} No
   {DESC} Cached maximum y coordinate of the collider's bounding box.
{ENDTABLE}

### Poly Collider

Poly colliders are polygonal colliders. Their x and y coordinates describe the anchor point of rotation, while the list of vertices defines the shape of the collision area. Unlike tri colliders, poly colliders can express any shape that does not cross over itself.

#### Instance Methods

[What is a method?](/types/function.md#methods)

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} Rotate([number](/types/number.md) angle)
    {RET} [nil](/types/nil.md)
   {DESC} Rotates the poly collider by the specified angle in degrees.
====
   {NAME} Translate(

[number](/types/number.md) x,

[number](/types/number.md) y
)
    {RET} [nil](/types/nil.md)
   {DESC} Translates (offsets) the collider by the specified amount along the x and y axes.
====
   {NAME} Scale([number](/types/number.md) scaleFactor)
    {RET} [nil](/types/nil.md)
   {DESC} Scales (resizes) the collider by the specified scale factor.
{ENDTABLE}

#### Instance Fields

{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE} [number](/types/number.md)
  {FIELD} x
     {RO} No
   {DESC} X-Coordinate
====
   {TYPE} [number](/types/number.md)
  {FIELD} y
     {RO} No
   {DESC} Y-Coordinate
====
   {TYPE} [table](/types/table.md) of [Tri Collider](/reference/Colliders.md#tri-collider) tris
  {FIELD} tris
     {RO} No
   {DESC} The list of generated tri colliders that form the polygon. When editing this list, you must also update the minX, maxX, minY and maxY cached edges of the bounding box.
====
   {TYPE} [number](/types/number.md)
  {FIELD} minX
     {RO} No
   {DESC} Cached minimum x coordinate of the collider's bounding box.
====
   {TYPE} [number](/types/number.md)
  {FIELD} maxX
     {RO} No
   {DESC} Cached maximum x coordinate of the collider's bounding box.
====
   {TYPE} [number](/types/number.md)
  {FIELD} minY
     {RO} No
   {DESC} Cached minimum y coordinate of the collider's bounding box.
====
   {TYPE} [number](/types/number.md)
  {FIELD} maxY
     {RO} No
   {DESC} Cached maximum y coordinate of the collider's bounding box.
{ENDTABLE}
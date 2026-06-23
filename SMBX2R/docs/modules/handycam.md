# Handycam

As a module, handycam needs to be loaded in order to be accessible in your level or episode:
```lua
local handycam = require("handycam")
```

Handycam is a library for advanced camera control. It allows for zooming, rotation, and camera movement independent of the player. Note that anything outside the regular screen size will not be rendered, so while rotation and zooming out are possible, they may produce solid borders on the screen.

## Accessing Cameras

HandyCameras can be accessed for both player 1 and player 2 by simply indexing the library. For example:

```lua
local cam1 = handycam[1]
```

Can be used to access the advanced camera associated with player 1. Similarly:

```lua
local cam2 = handycam[2]
```

Can be used to access the advanced camera associated with player 2.

## Functions

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} ease(

[function](/types/function.md) input

)
    {RET} [function](/types/function.md)
   {DESC} Converts an easing function from the format used by [the easing library](/ext/easing) to one that can be used by Handycam.

{ENDTABLE}


### Static fields

{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} handycam.enableCrispUpscale
     {RO} No
   {DESC} If set to `true`, a crisp scaling algorithm will be used when zooming in to preserve pixel proportions. If disabled, zooming will use Nearest Neighbour scaling. Defaults to `true`.
{ENDTABLE}

## HandyCamera

Advanced camera objects with some additional functionality.

### Instance members

Instance members must be accessed through a reference to a specific [HandyCamera](/modules/handycam.md#handycamera) object. Setting these values to [nil](/types/nil.md) will normally revert them to default behaviour.
```lua
local c = handycam[1]
Misc.dialog(c.x, c.y)
```
<Note type="warning">Attempting to call instance members statically will result in an error!</Note>

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
   {DESC} The x coordinate of the centre of the camera.
====
   {TYPE} [number](/types/number.md)
  {FIELD} y
     {RO} No
   {DESC} The y coordinate of the centre of the camera.
====
   {TYPE} [number](/types/number.md)
  {FIELD} rotation
     {RO} No
   {DESC} The rotation of the camera in degrees.
====
   {TYPE} [number](/types/number.md)
  {FIELD} zoom
     {RO} No
   {DESC} The zoom factor of the camera (1 means 100% zoom).
====
   {TYPE} [table](/types/table.md)
  {FIELD} targets
     {RO} No
   {DESC} A list of targets for the camera to attempt to keep in frame. Any object with and `x` and `y` field is usable as a target. Will be ignored if `x` and `y` are assigned to.
====
   {TYPE} [number](/types/number.md)
  {FIELD} xOffset
     {RO} No
   {DESC} A horizontal offset used when tracking targets. Will be ignored if `x` is assigned to.
====
   {TYPE} [number](/types/number.md)
  {FIELD} yOffset
     {RO} No
   {DESC} A vertical offset used when tracking targets. Will be ignored if `y` is assigned to.
====
   {TYPE} [number](/types/number.md)
  {FIELD} width
     {RO} Yes
   {DESC} The zoomed width of the camera, in pixels (higher `zoom` means smaller `width`).
====
   {TYPE} [number](/types/number.md)
  {FIELD} height
     {RO} Yes
   {DESC} The zoomed height of the camera, in pixels (higher `zoom` means smaller `height`).
====
   {TYPE} [number](/types/number.md)
  {FIELD} trauma
     {RO} No
   {DESC} Similar to Defines.earthquake, a number representing the duration and strength of a shaking effect.
====
   {TYPE} [number](/types/number.md)
  {FIELD} rotationalTrauma
     {RO} No
   {DESC} Similar to Defines.earthquake, a number representing the duration and strength of a shaking effect. Only applies rotational shake.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} isValid
     {RO} Yes
   {DESC} Determines if the [HandyCamera](/modules/handycam.md#handycamera) is valid. [HandyCamera](/modules/handycam.md#handycamera) objects can be made invalid by called `myCamera:release()`. 
====
   {TYPE} [number](/types/number.md)
  {FIELD} idx
     {RO} Yes
   {DESC} The player index of the camera.
{ENDTABLE}

### Instance Methods

[What is a method?](/types/function.md#methods)

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} transition(
   
   [named](/types/table.md) transitionArgs
   
)
    {RET} [nil](/types/nil.md)
   {DESC} Adjusts a [HandyCamera](/modules/handycam.md#handycamera) object's properties slowly over time, starting immediately. Unless `noClear` is set, the transition queue will be emptied upon calling `transition`.
   
<details><summary>Transition Arguments</summary>

| Argument | Description |
| --- | --- |
| N/A | All [HandyCamera](/modules/handycam.md#handycamera) [instance fields](/modules/handycam.md#instance-fields) (except for those marked `Read-only`) can be used as arguments to adjust their values. Assigning any to `false` will transition them to their default state.
| [number](/types/number.md) time | The time, in seconds, for the transition to occur. |
| [function](/types/function.md) ease | An easing function to adjust the timing of the transition. This will be passed a single [number](/types/number.md) argument that linearly increases from `0` to `1`, and should return a single [number](/types/number.md) value between `0` and `1`. |
| [bool](/types/bool.md) ignoreBounds | If set to `true`, the camera will ignore the section boundaries during the transition, and may display content outside the section boundaries. Defaults to `false`. |
| [bool](/types/bool.md) noClear | If set to `true`, the camera's transition queue will not be cleared when the transition begins. Defaults to `false`. |
</details>

====
   {NAME} queue(
   
   [named](/types/table.md) transitionArgs
   
)
    {RET} [number](/types/number.md)
   {DESC} Adds a transition operation to the end of the camera's transition queue. Queued transitions will be executed in the order they were added, each beginning after the previous one finishes, until the queue is empty or the queue is cleared. Returns a unique ID which can be used to remove the queued transition later.
   
<details><summary>Transition Arguments</summary>

| Argument | Description |
| --- | --- |
| N/A | All [HandyCamera](/modules/handycam.md#handycamera) [instance fields](/modules/handycam.md#instance-fields) (except for those marked `Read-only`) can be used as arguments to adjust their values. Assigning any to `false` will transition them to their default state.
| [number](/types/number.md) time | The time, in seconds, for the transition to occur. |
| [function](/types/function.md) ease | An easing function to adjust the timing of the transition. This will be passed a single [number](/types/number.md) argument that linearly increases from `0` to `1`, and should return a single [number](/types/number.md) value between `0` and `1`. |
| [bool](/types/bool.md) ignoreBounds | If set to `true`, the camera will ignore the section boundaries during the transition, and may display content outside the section boundaries. Defaults to `false`. |
</details>
====
   {NAME} unqueue(
   
   [number](/types/number.md) ID
   
)
    {RET} [bool](/types/bool.md)
   {DESC} Removes a transition operation that was previously added to the transition queue, using its unique ID. Returns `true` if the operation was successfully removed, and `false` if not.
====
   {NAME} unqueue()
    {RET} [bool](/types/bool.md)
   {DESC} Removes the transition operation that was most recently added to the transition queue. Returns `true` if the operation was successfully removed, and `false` if not.
====
   {NAME} clearQueue()
    {RET} [nil](/types/nil.md)
   {DESC} Empties the transition queue of all transition operations.
====
   {NAME} skip()
    {RET} [nil](/types/nil.md)
   {DESC} Instantly finishes the current transition operation and proceeds to the next operation in the transition queue.
====
   {NAME} abort()
    {RET} [nil](/types/nil.md)
   {DESC} Stops the current transition operation in its current state and proceeds to the next operation in the transition queue.
<Note type="warning">This is prone to leaving the camera in awkward states as it abandons transitions part way. Use with caution.</Note>
====
   {NAME} finish()
    {RET} [nil](/types/nil.md)
   {DESC} Instantly finishes all queued transition operations and empties the transition queue.
====
   {NAME} reset()
    {RET} [nil](/types/nil.md)
   {DESC} Instantly reverts the camera to its default behaviour and clears the transition queue.
====
   {NAME} release()
    {RET} [nil](/types/nil.md)
   {DESC} Hard resets the camera to its default behaviour and deletes the HandyCamera, reverting to SMBX core camera behaviour.
====
   {NAME} worldToScreen(
   
   [number](/types/number.md) x,
   [number](/types/number.md) y,
   
)
    {RET} [number](/types/number.md),[number](/types/number.md)
   {DESC} Converts a world space coordinate to a camera space coordinate, accounting for zoom, rotation, etc.
====
   {NAME} worldToScreen(
   
   [Vector2](/reference/vector.md#vector2) position
   
)
    {RET} [number](/types/number.md),[number](/types/number.md)
   {DESC} Converts a world space coordinate to a camera space coordinate, accounting for zoom, rotation, etc.
====
   {NAME} screenToWorld(
   
   [number](/types/number.md) x,
   [number](/types/number.md) y,
   
)
    {RET} [number](/types/number.md),[number](/types/number.md)
   {DESC} Converts a camera space coordinate to a world space coordinate, accounting for zoom, rotation, etc.
====
   {NAME} screenToWorld(
   
   [Vector2](/reference/vector.md#vector2) position
   
)
    {RET} [number](/types/number.md),[number](/types/number.md)
   {DESC} Converts a camera space coordinate to a world space coordinate, accounting for zoom, rotation, etc.
{ENDTABLE}

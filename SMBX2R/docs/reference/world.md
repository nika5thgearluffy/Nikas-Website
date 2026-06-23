# World

The world class exposes general functions for the player on the overworld.

## Static Members

These members are accessed as parts of the static world table.
```lua
world.playerX = 0
world.playerY = 0
```

### Static Fields

<!-- (Consider an icon for "read only".) -->
{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE} [number](/types/number.md)
  {FIELD} world.playerX
     {RO} No
   {DESC} The player's x-coordinate on the world map
====
   {TYPE} [number](/types/number.md)
  {FIELD} world.playerY
     {RO} No
   {DESC} The player's y-coordinate on the world map
====
   {TYPE} [number](/types/number.md)
  {FIELD} world.playerWalkingDirection
     {RO} No
   {DESC} The direction the player walks in on the overworld. Can be a number between 0 and 4, corresponding to idle, up, left, down and right respectively.
====
   {TYPE} [number](/types/number.md)
  {FIELD} world.playerCurrentDirection
     {RO} Yes
   {DESC} The direction the player is currently facing. Between 1 and 4, corresponding to up, left, down and right respectively.
====
   {TYPE} [number](/types/number.md)
  {FIELD} world.playerWalkingTimer
     {RO} No
   {DESC} The timer while the player is walking on the map. Naturally increments from 0 to 32 by 2 each frame. If the timer is 32, the player's movement finishes as the game considers this the condition for arriving on the next tile.
====
   {TYPE} [number](/types/number.md)
  {FIELD} world.playerWalkingFrame
     {RO} No
   {DESC} The current frame of the player world map animation sprite to be drawn.
====
   {TYPE} [number](/types/number.md)
  {FIELD} world.playerWalkingFrameTimer
     {RO} No
   {DESC} The timer of the walking animation, incrementing by 1 per frame for an animation that switches every 8 frames.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} world.playerIsCurrentWalking
     {RO} Yes
   {DESC} Whether or not the player is currently walking.
====
   {TYPE} [string](/types/string.md) or [nil](/types/nil.md)
  {FIELD} world.levelTitle
     {RO} Yes
   {DESC} The name of the level the player currently is standing on. Nil if the player is moving.
====
   {TYPE} [Level Tile](/reference/level-overworld.md) or [nil](/types/nil.md)
  {FIELD} world.levelObj
     {RO} Yes
   {DESC} The level object the player currently is standing on. Nil if the player is moving.
{ENDTABLE}
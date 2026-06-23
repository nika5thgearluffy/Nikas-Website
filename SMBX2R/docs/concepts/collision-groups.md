# Collision Groups

Blocks, NPCs and Players can be assigned to groups for which collisions can be enabled and disabled by modifying the collision matrix. By default, two objects belonging to different collision groups will collide, and two objects belonging to the same collision group won't, unless they belong in the default collision group, which is represented by the empty string.

## How to use

In the following, `npc`, `block` and `playerObj` refer to an arbitrary NPC, block and player respectively.

```lua
-- Disable collisions between groups "a" and "b"
Misc.groupsCollide["a"]["b"] = false

-- The collision matrix is symmetric, so the next line is redundant.
-- Misc.groupsCollide["b"]["a"] = false

-- Enable collisions within group "a"
Misc.groupsCollide["a"]["a"] = true

-- Disable collisions between the default group and the "intangible" group
Misc.groupsCollide[""]["intangible"] = false

-- Assign npc to group "a"
npc.collisionGroup = "a"

-- Assign block to group "intangible"
block.collisionGroup = "intangible"

-- Assign playerObj to the default group
playerObj.collisionGroup = ""

-- Check if playerObj and block collide
assert(not Misc.canCollideWith(playerObj, block))

-- Check if npc collides with group "b"
assert(not Misc.collidesWithGroup(npc, "b"))

-- Check if group "someGroup" collides with group "otherGroup"
assert(Misc.groupsCollide["someGroup"]["otherGroup"])
```

# Common NPC Questions

This page details common problems people run into when working with NPCs.

Note: Some code on this page refers to a variable `npc`. This indicates some reference to an NPC. In your code, the variable might be called "self", "v", "n", "myNPC" or something else. It needs to be retrieved from either an NPC for loop, or a lunalua event that passes a NPC reference.

### How can I make a player fall through an NPC instead of bouncing on it?

To prevent a normal bounce, set `jumphurt = true`. To prevent spinjumping, also set `spinjumpsafe = false`. If you don't want the player to take damage from landing on the NPC, also set `nohurt = true`.

### How do I make a spiky NPC immune to spinjumps?

Spinjump immunity, as well as boot stomp immunity, is tied to registering HARM_TYPE_SPINJUMP in the NPC lua file's registerHarmTypes section.
Some IDs below 293 have special case handling in SMBX 1.3 code that makes them behave a bit unusually, such as Spinies dying from Boot but not from Spinjump. To achieve this effect on NPCs that are immune to regular jumps (HARM_TYPE_JUMP), register the HARM_TYPE_SPINJUMP harm type as well as an onNPCHarm event for the NPC, and check whether the kill method was a spinjump or a boot, and cancel whichever you want the NPC to be immune to.

```lua
-- myNPC is the name of your library. If this is not in a library, remove the "myNPC."
function myNPC.onNPCHarm(eventObj, harmedNPC, harmType, culprit)
    -- NPC_ID is a constant in npc-n.lua files and doesn't need to be changed there. If this is not in a npc-n.lua file, it needs to be replaced with the ID you want to check.
    if harmedNPC.id == NPC_ID and harmType == HARM_TYPE_SPINJUMP then
        -- If the NPC was killed by spinjump a player and the player is NOT on a mount (Spinjump immunity but no boot immunity)
        -- (for the inverse, change == 0 to ~= 0)
        if culprit and type(culprit) == "Player" and culprit.mount == 0 then
            eventObj.cancelled = true
        end
    end
end
```

Do note that SMBX naturally attempts a HARM_TYPE_JUMP after a cancelled HARM_TYPE_SPINJUMP, so if your NPC has the HARM_TYPE_JUMP registered as well, it will still die.

### My NPC kills all other NPCs while held and it's too strong. How do I prevent this?

Set `harmlessgrab = true` to prevent the NPC from killing anything while held. If you want the NPC to kill one NPC and die at the same time, instead register the HARM_TYPE_HELD in the NPC lua file's registerHarmTypes section.

### How can you make an NPC freezable from above?

Ensure `noiceball = false` and `npcblocktop = false` are set. The npcblocktop config determines whether thrown NPCs bounce off or hurt the NPC, which includes ice ball interactions.

### How can I make an NPC move with the layer?

By default, NPCs with `isvine = true` or `iscoin = true` set move along their layers. To make any NPC move along with its layer, you can load npcutils `local npcutils = require("npcs/npcutils")` in lua and call this in the NPC's onTickNPC: `npcutils.applyLayerMovement(npc)`.

### How do I make an NPC chase the player?

You can use `Player.getNearest(x, y)` to find the nearest player to the NPC, and then use that information to determine how the NPC should behave.

```lua
local nearPlayer = Player.getNearest(npc.x + 0.5 * npc.width, npc.y + 0.5 * npc.height)

if nearPlayer.x + 0.5 * nearPlayer.width < npc.x + 0.5 * npc.width then
    if npc.direction == 1 then
        npc.direction = -1
    end
else
    if npc.direction == -1 then
        npc.direction = 1
    end
end
```

### Best practices for NPC for loops?

Make sure to use as few loops as possible, and iterate over as few NPCs as possible. Prefer using npc-n.lua files to add functions like onTickNPC and onDrawNPC over using loops. When using loops, using NPC.iterateIntersecting over a relevant region followed by further ID checks often turns out more performant than the equivalent NPC.iterateByFilterMap or NPC.iterate call(s).

### How can I prevent long "or" chains for checking multiple IDs?

You can use a lookup table! It is a table with indices that correspond to all cases where the if statement should pass. It is set up like so:
   ```lua
-- add NPC IDs to the table as you wish
local validNPCIDs = table.map({1, 2, 3, 4, 5})
   ```
... and used in an if statement like so:
   ```lua
if (validNPCIDs[npc.id]) then
   ```
Lookup tables can also be used for the NPC.iterateByFilterMap function.

### What happens when multiple npc-n.lua files of the same ID exist?

The npc-n.lua files are unique in how they work. A normal lua library, when present once in basegame and once in the episode/level folder, will load the first file it finds via the resolveFile chain (level folder -> episode folder -> basegame). npc-n.lua files, on the other hand, work additively.

This is to say that the npc-n.lua file in basegame is always loaded, and a custom npc-n.lua file of the same ID adds the code it contains on top of the existing basegame functionality. For example, if you have a local npc-301.lua file (Thwimp), you can register an onTickNPC event in it where you place `npc.speedX = -2`. The Thwimp will now constantly move left at this speed, but will otherwise continue acting like a Thwimp.

If you instead want to completely override an NPC's code, or change how it works fundamentally, you should make a copy of the basegame npc-n.lua file and re-name it to an ID in the [Custom Range](/concepts/custom-range.md).

### How do I change an NPC's config properties as part of their AI? (example: an NPC with conditional jumphurt)

Since NPC config properties are inherent to an ID of NPC, the cleanest way to go about this is to use multiple IDs. Using an AI file, shared code between the IDs can be accessed by both NPCs.
The npc:transform method, since it is often used to transform NPCs permanently, cleans up the NPC's data._basegame table. To transform an NPC into another without losing this, make a temporary backup of the data table like so:
```lua
local data = npc.data._basegame
npc:transform(newID)
npc.data._basegame = data
```
# Common Code Recipes

Below is a selection of code snippits that get used a lot. They all have a list of ingredients that you need to provide for them, but can otherwise be copied as-is.

## Locking/Forcing Player Inputs

```lua

-- ingredients:
--- p: a player class instance

-- above functions
local thisFrameInputs = {}
local forcedInputs = {}
local inputLocked = false

-- in onEvent, onPostNPCKill, onLoadSection or anywhere else you wish to lock the inputs:
inputLocked = true --/false
forcedInputs.right = true --/false

-- in onTick
if inputLocked then
    thisFrameInputs[p.idx] = thisFrameInputs[p.idx] or {}
    for k,v in pairs(p.keys) do
        thisFrameInputs[p.idx][k] = v
        p.keys[k] = forcedInputs[k]
    end
end

-- in onTickEnd
if (thisFrameInputs[p.idx]) then
    for k,v in pairs(p.keys) do
        p.keys[k] = thisFrameInputs[p.idx][k]
        thisFrameInputs[p.idx][k] = v
    end
end
```

This is the first recipe on this page. Below is an example of how it can be applied:

```lua
local thisFrameInputs = {}
local forcedInputs = {}
local inputLocked = false

function onEvent(eventName)
    if eventName == "lockInputs" then
        inputLocked = true
    end
    if eventName == "makePlayerMoveRight" then
        inputLocked = true
        forcedInputs.right = true
    end
    if eventName == "releaseInputs" then
        inputLocked = false
    end
end

function onTick()
    if inputLocked then
        for _, p in ipairs(Player.get()) do
            thisFrameInputs[p.idx] = thisFrameInputs[p.idx] or {}
            for k,v in pairs(p.keys) do
                thisFrameInputs[p.idx][k] = v
                p.keys[k] = forcedInputs[k]
            end
        end
    end
end

function onTickEnd()
    for _, p in ipairs(Player.get()) do
        if (thisFrameInputs[p.idx]) then
            for k,v in pairs(p.keys) do
                p.keys[k] = thisFrameInputs[p.idx][k]
                thisFrameInputs[p.idx][k] = v
            end
        end
    end
end
```

Note how the sections dedicated to a section of the code have been placed in it, and how the ingredient p is available in every instance where the code asks for it. This kind of pattern is how every one of these recipes can be applied. Regarding the one above in particular: The for loop over players could also just be "local p = player" to fetch the first player at the cost of multiplayer compatibility. In other words, there are multiple solutions to every recipe.

## Draw text to an npc, player or block

This recipe is commonly used for debugging things during development.

```lua

-- ingredients:
--- target: a player, npc or block class instance

-- in onTick, onTickEnd or onDraw (also applicable to the on***NPC/on***Block functions)
-- the first argument is the value to print. x and y are examples. For NPCs for instance, target.friendly, target.msg, target.data.initialized or other values are also valid. Anything you would want, really.
Text.print(target.x, target.x - camera.x, target.y - camera.y)
Text.print(target.y, target.x - camera.x, target.y - camera.y + 20)
```

## Redigit's Grounded Check

This function is commonly used in place of Player:isOnGround

```lua
local function isOnGroundRedigit(p) -- detects if the player is on the ground, the redigit way. more reliable than just p:isOnGround().
    return (
        (
            p.speedY == 0 -- "on a block"
            or p:mem(0x176,FIELD_WORD) ~= 0 -- on an NPC/moving block
            or p:mem(0x48,FIELD_WORD) ~= 0 -- on a slope
        )
        and not p.climbing
    )
end
```
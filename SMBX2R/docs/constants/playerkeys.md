# Player Keys constants

Constants for the state of player input. Values are set up as a 4-way boolean, causing press/hold events to evaluate to true, and release/up events to evaluate to false. These checks can be used on all player keys inputs: up, down, left, right, jump, altJump, run, altRun, pause, dropItem

```lua
if player.keys.jump == KEYS_PRESSED then
    player:kill()
end
```

| Constant | Value | Description |
| --- | --- | --- |
| KEYS_PRESSED | 1 | The frame the key is pressed. |
| KEYS_DOWN | true | Every frame the key is held. |
| KEYS_UNPRESSED | nil | The frame the key is released. |
| KEYS_UP | false | Every frame the key is not pressed. |

## Input locking template

```lua

-- Set to true to enforce an input lock
local inputLocked = false

-- Set the likes of heldInputs.right = true to force player inputs durring an input lock
local heldInputs = {}

-- Does not need to be modified
local lastInputs = {}

-- Merge into your own onTick
function onTick()
    if inputLocked then
        for k,v in pairs(player.keys) do
            lastInputs[k] = player.keys[k]
            player.keys[k] = heldInputs[k] or false
        end
    end
end

-- Merge into your own onTickEnd
function onTickEnd()
    if inputLocked then
        for k,v in pairs(player.keys) do
            player.keys[k] = lastInputs[k]
        end
    end
end

```
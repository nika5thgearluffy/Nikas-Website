# Number

Numbers are value types that represent integers, floats, and hexadecimal values.

Lua does not feature strict distinctions between integers and floats, and as such, all arithmetic between two decimal numbers is valid.

```lua
local timer = -50
local timerIncrement = 0.1

function onTick()
    timer = timer + timerIncrement
    Text.print(timer, 100, 100)
end
```

## Hexadecimal numbers

Hexadecimal numbers are primarily used for memory offsets and color values. They are distinguished from decimal numbers through the 0x-Prefix.

```lua
local GREEN = 0x00FF00
local GREEN_TRANSPARENT = 0x00FF0077

function onTick()
    Text.print(player:mem(0x114, FIELD_WORD), 100, 100)
    Text.print(player.frame, 100, 120)
end
```
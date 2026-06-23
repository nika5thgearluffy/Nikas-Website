# Function

A function is a reference type variable that can execute code within itself.
In the example below, a function-type variable with the name "add" is created and later changed.

```lua
local function add(a) -- function definition
    return a + 5
end

Misc.dialog(add(15)) -- function call

add = function(a,b) -- new function definition (overwrites old)
    return a + b
end

Misc.dialog(add(15, 20)) -- function call
```

When defining a function, parentheses serve as a container for custom values that can be provided to the function. If, during a function call, these values are not filled in, they will be nil.

## Methods

Methods are functions that are invoked with a colon rather than a dot. Functionally, the following is true:
`player:kill()` is equivalent to `player.kill(player)`
Methods are used to reduce redundancy in code.

## Variable Argument Count (vararg)

Functions have the ability to take an unspecified number of arguments. Using vararg, all arguments to the right of explicitly defined ones can be wrapped in a table:

```lua
local function add(input, ...)
    local sum = input
    local mustAdd = {...}
    for k,v in ipairs(mustAdd) do
        sum = sum + mustAdd
    end
    return sum
end

Misc.dialog(add(15, 18, 22, 25, 19))
Misc.dialog(add(1, 23, 45, 67))
```

## Named arguments

Some functions in LunaLua rely on something called named args. Named args are simply a single table argument, with certain named table indices requested by the function itself.

```lua
local function showText(args)
    Text.print(args.text, args.x, args.y)
end

function onTick()
    showText{
        x = 100,
        y = 100,
        text = "Hello there!"
    }
end
```
# Bool

A bool (or boolean) is a value type that is either true or false. In evaluation, they can use the "not"-operator to invert the statement.

```lua
local active = false

function onStart()
    if (not active) then
        active = not active -- The inverse of false is true.
    end
end

function onDraw()
    if (active) then
        Text.print("This is now active!", 100, 100)
    end
end
```
# Vararg

Vararg (or variable arguments) is a design pattern for functions that allows a varying number of arguments to be passed to it without requiring explicit use of a table.
The function will receive the argument as `...` which can then be wrapped into a table and iterated over.

```lua
local active = false

local function dialog(...)
    local args = {...}
    for k,v in ipairs(args) do
        Misc.dialog(v)
    end
end

dialog("Hello!")
dialog("You can pass", "multiple arguments", "even", 2, "or", false)
```
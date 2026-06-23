# nil

Nil is lua's concept of nothingness. If a variable is uninitialized, it is nil. Some other languages use a similar concept which they call "null", though while null is usually only applicable to certain data types (namely pointer types), nil applies to any variable, even those within tables.

When using nil, you can consider it to mean "does not exist", and you can use it to check whether a variable has been initialised, or to remove it (by assigning nil to the variable)

```lua
local list = {
    15,
    20,
    18,
    0
}
list[15] = "Surrounded by nil!"

function onTick()
    for i=1, 18 do
        Text.print(list[i], 100, 20 * i)
    end
end
```
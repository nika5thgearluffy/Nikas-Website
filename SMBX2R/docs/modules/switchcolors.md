# Switch Colors

```lua
local switchcolors = require("switchcolors")
```

Switchcolors manages configurations and signals for
different colours of switches, including custom ones\!

```lua
--Registers a new switch colour. Returns an activator for it, as well as its numeric key for further checking.
local activator, myColor = switchcolors.registerColor(string name)

--Calling activator will toggle a switch
activator()

--You can use the switchcolors.onSwitch event to catch switch toggles
function switchcolors.onSwitch(color)
    if color == myColor then
        --do stuff specific to your switch colour
        --here you can use switchcolors.switch to switch blocks of 2 specific IDs
        switchcolors.switch(id1, id2)
    end
end

--The same procedure is also available for palace switches
local activator, myColor = switchcolors.registerPalace(string name)

activator()

function switchcolors.onPalaceSwitch(color)
    if color == myColor then
        --do stuff
    end
end
```
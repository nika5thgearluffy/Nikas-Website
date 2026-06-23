# Libraries

A library, or module, is a lua file that can be loaded by another lua file to expose additional functionality. Libraries are used to make code easier to repurpose and share with others.

## Loading libraries

To load a library, use the require-Function with the name of the library. The name is automatically resolved in the level folder, episode folder, data/scripts directory and data/scripts/base directory. To load a file from a subfolder, the relative path to one of these must be used.

```lua
-- When loading a library, do not add the '.lua' file extension.
local textplus = require("textplus")

-- Libraries are loaded into the variable specified to the left of the equals-sign. Their functionality can now be accessed using that variable name.
function onDraw() 
    textplus.print{
        text = "Hello",
        x = 0,
        y = 0
    }
end
```

## Creating Libraries

Libraries are fundamentally tables with extra functionality added by the user. Take this library for example, which outlines a barebones structure of a library:

```lua
-- First, declare the table you want to return.
local libraryTable = {}

-- Local values cannot be accessed outside of the scope of the library.
local myNumber = 2
-- To export a variable as part of the library, make it a part of the library table.
libraryTable.myBool = false

-- The same principle applies to functions.
local function add(a, b)
    return a + b
end

function libraryTable.subtract(a, b)
    return a - b
end

-- The onInitAPI function can be used if you want to use lunalua events in your library
function libaryTable.onInitAPI()
    -- This causes the onStart event to be called on this library
    registerEvent(libraryTable, "onStart")
end

-- The onStart event also needs to be part of the library table for this to work
function libraryTable.onStart()
    Misc.dialog("onStart says", "Hello!")
end

-- Finally, return the table
return libraryTable
```

Using this library, called, say, "testLibrary.lua", would allow you to do the following, then:

```lua
local testLibrary = require("testLibrary")

-- This will print nil, because the myNumber variable only exists in the library (see above)
Misc.dialog("myNumber is", myNumber)

-- This will print false. The boolean is accessible.
Misc.dialog("myBool is", testLibrary.myBool)

-- Exposed variables can be set externally.
testLibrary.myBool = true
Misc.dialog(testLibrary.myBool)

-- The same principle applies to functions.
Misc.dialog("Subtracting 3 from 5 gives", testLibrary.subtract(5, 3))

-- After all these dialogs appeared, the library's onStart will also execute.
```

## Common library interfaces

Below detailed are a few common ways in which library functionality is exposed to the user.

### Variables

Most commonly, simple variables are added to the library table and can then be accessed by the user.

```lua
-- testLibrary.lua
testLibrary.myBool = false
-------------------
-- luna.lua
testLibrary.myBool = true
```

A common weakness of the variable is that it is very error-prone. A user could haphazardly set the variable to an invalid value. It can also only set one thing at a time, which can be very cumbersome in larger structures.

### Functions

Functions are a more controlled way of interfacing with a library. When calling a function, a lot of complexity can be hidden from the user, making library use easier and less error-prone.


```lua
-- testLibrary.lua
local elements = {}

function testLibrary.createElement(x,y,name)
    table.insert(elements, {
        x = x or 0,
        y = y or 0,
        width = 64,
        height = 32,
        name = name or "New element"
    })
end
-------------------
-- luna.lua
testLibrary.createElement(24, 12, "First element")
testLibrary.createElement(48, 120, "Second element")
```

Note how by using a function, only the key elements that users should be able to change are able to be changed at all.

### Callback Functions

One weakness of interfaces outlined above is that they don't address scenarios where users might want to add their own handling for a specific scenario. Say for instance your library gives the player a sword attack, and when the sword hits a block, an action specific to the block type happens. As the library creator, you might find it useful for users to be able to define custom handlers for custom blocks.

To do this, registration functions are commonly used which take a function from user code as an argument. When the action (sword hitting block) happens, the library then looks in the lookup table for the registered callback function and executes it.


```lua
-- testLibrary.lua
local callbackMap = {}

function testLibrary.registerBlockCallback(blockID, callbackFunction)
    callbackMap[blockID] = callbackFunction
end

local function defaultResponse(block, thisPlayer)
    Misc.dialog("Some block was hit")
end

function onTick()
    -- After updating the position and confirming the active state of the sword collider
    for k,v in ipairs(Colliders.getColliding{a = swordCollider, b = Block.SOLID, btype = Colliders.BLOCK}) do
        if callbackMap[v.id] then
            -- p here is the player variable, assuming this code is in a for loop iterating over Player.get
            callbackMap[v.id](v, p)
        else
            defaultResponse(v, p)
        end
    end
end
-------------------
-- luna.lua

local function blockCallback(block, player)
    Misc.dialog("The sword has hit a registered block!")
end
-- Note specifically how we don't add the () after blockCallback. Adding the () would be executing the function, whereas just typing its name is merely using it as a variable,
testLibrary.registerBlockCallback(1, blockCallback)
```

Callbacks are fairly niche interfaces in terms of how rarely they show up, but when working on a library for which they may be useful, they can provide an elegant solution to making code future-proof and scalable.

## Conditionally loading libraries

Libraries are inherently modular tools and developed by a variety of people. Sometimes when developing a library, you might notice that it doesn't interface well with another library, and you want to add functionality to support it. However, you cannot be sure that whoever uses your library is also using the other library. If they are not, a simple require call would cause an error.

The way around this error is to use lua's pcall function to catch any errors that may occur during the require call of the other library. After attempting to load it, the below otherLibrary variable should be null-checked, with the conditional support of the other library only activated if the otherLibrary reference is not null.

```lua
local otherLibrary
pcall(function() otherLibrary = require("otherLibrary") end)
```
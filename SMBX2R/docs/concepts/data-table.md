# Data Table

Blocks, BGOs and NPCs are capable of storing user-defined data in their respective "data"-fields. This data-field is a flexible extension of what old NPCs used the ai1-ai5 fields for.

## How to use

The data table works just like any other table. You can read/write any variable to it, and it will persist until the NPC dies or the values are cleared.

```lua
function myCustomLibrary.onTickEndNPC(myNPC)
    if not myNPC.data.initialized then
        myNPC.data.initialized = true
        myNPC.data.frame = 1
    end

    myNPC.animationFrame = myNPC.data.frame
end
```

## Extra settings

[Extra settings](/concepts/extra-settings.md) are imported into the data._settings sub-table. See the linked page for more information.

## Clearing of the data table

The data table is reset when an NPC dies or its ID is changed by means of NPC:transform.
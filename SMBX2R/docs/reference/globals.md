# Globals

Global functions and variables that are not part of any specific namespace can be found here.

## Variables

| Variable | Description |
| --- | --- |
| player | The first player object. |
| player2 | The second player object (or nil). |
| camera | The first camera object. |
| camera2 | The second camera object (or nil). |
| isOverworld | True if on the world map. |

## Functions

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} require(

[string](/types/string.md) libraryName

)
    {RET} [object](/types/object.md) library
   {DESC} Loads a library. Seeks in the following folders: <br> Level folder (if in level) -> Episode folder -> data/scripts folder -> data/scripts/base folder. Returns the found library.
====
   {NAME} triggerEvent(

[string](/types/string.md) eventName

)
    {RET} [nil](/types/nil.md)
   {DESC} Triggers a SMBX event of the given name. If the event with the name provided doesn't exist, nothing will happen.
====
   {NAME} registerEvent(

[table](/types/table.md) libraryTable,

[string](/types/string.md) eventName

)
    {RET} [nil](/types/nil.md)
   {DESC} Registers an event in the event loop. The libraryTable is the table which is contains the bound event.
====
   {NAME} registerEvent(

[table](/types/table.md) libraryTable,

[string](/types/string.md) eventName,

[string](/types/string.md) alias

)
    {RET} [nil](/types/nil.md)
   {DESC} Registers an event in the event loop. The libraryTable is the table which is contains the bound event. If an alias is specified, the libraryTable must contain a function with the alias, rather than the original event name.
====
   {NAME} registerEvent(

[table](/types/table.md) libraryTable,

[string](/types/string.md) eventName,

[string](/types/string.md) alias,

[bool](/types/bool.md) beforeMainCall

)
    {RET} [nil](/types/nil.md)
   {DESC} Registers an event in the event loop. The libraryTable is the table which is contains the bound event. If an alias is specified, the libraryTable must contain a function with the alias, rather than the original event name. If beforeMainCall is set to false, the event will execute after the main call to luna.lua's handler of the event.
====
   {NAME} registerCustomEvent(

[table](/types/table.md) libraryTable,

[string](/types/string.md) eventName

)
    {RET} [nil](/types/nil.md)
   {DESC} Registers a custom event. Once registered, other codes can register it like any other event, and this library is able to call it manually (like any other function call), causing it to be executed on listening endpoints.
{ENDTABLE}

# ConfigTypes


As a module, configTypes needs to be loaded in order to be accessible in your level or episode.
```lua
local configTypes = require("configTypes")
```

ConfigTypes defines the types and converters for NPC config, Block config and other configs. The most prominent use of configTypes is to mark a config field as an array to make it an editable array from lua.

## Use case

```lua
local configTypes = require("configTypes")
npcManager.setNpcSettings{
   ...
   arrayField = configTypes.asArray({4, 6, 8})
   ...
}
```

## Functions

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} configTypes.asArray(

[object](/types/object.md) array,

[string](/types/string.md) type

)
    {RET} [table](/types/table.md) convertedArray
   {DESC} Wraps a config variable as an array that can be set from config files using square brackets `[1, 2, 3]`, `[false, true, false]`, etc. If the type argument is not specified, the type is attempted to be inferred from the first argument. 
====
   {NAME} configTypes.convertPropType(

[object](/types/object.md) value,

[string](/types/string.md) type

)
    {RET} [object](/types/object.md) convertedValue
   {DESC} Attempts to convert the input value to the desired type, if possible.
====
   {NAME} configTypes.encodeNumber(

[object](/types/object.md) value

)
    {RET} [number](/types/number.md) convertedValue
   {DESC} Attempts to convert the input value to a number.
====
   {NAME} configTypes.encodeBoolean(

[object](/types/object.md) value

)
    {RET} [bool](/types/bool.md) convertedValue
   {DESC} Attempts to convert the input value to a boolean.
{ENDTABLE}
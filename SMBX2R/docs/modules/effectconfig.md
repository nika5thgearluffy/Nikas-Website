# Effectconfig

As a module, effectconfig needs to be loaded in order to be accessible in your level or episode:
```lua
local effectconfig = require("game/effectconfig")
```

Effectconfig is the library managing the [import, onTick, onInit and onDeath configs](/features/effect-config.md) for X2-specific [effects](/reference/effect.md). By loading effectconfig and adding new functions to its tables, the range of possible imports can be extended.

## Fields

{STARTTABLE}
   {NAME} Field
   {DESC} Description
====
   {NAME} defaults
    {RET} [table](/types/table.md) of [Effect Config Defaults](/features/effect-config.md)
   {DESC} Contains all configs that can be used with the import config.
====
   {NAME} onInit
    {RET} [table](/types/table.md) of [Function](/types/function.md)
   {DESC} Contains all configs that can be used with the onInit config.
====
   {NAME} onTick
    {RET} [table](/types/table.md) of [Function](/types/function.md)
   {DESC} Contains all configs that can be used with the onTick config.
====
   {NAME} onDeath
    {RET} [table](/types/table.md) of [Function](/types/function.md)
   {DESC} Contains all configs that can be used with the onDeath config.
{ENDTABLE}

## Usage example

When adding your own effect configs, make sure to prefix them with CUSTOM_, C_ or another prefix to prevent conflicts in the future.

```lua
local effectconfig = require("game/effectconfig")

-- All onInit, onTick and onDeath functions get the effect particle passed as parameter
effectconfig.onTick.CUSTOM_TICK_SLOWDOWNSPIN = function(effect)
   effect.rotation = effect.rotation * 0.75
end

-- Same as an effect config TXT file, barring number range syntax
effectconfig.defaults.CUSTOM_AI_SPINNY = {
   onTick = "CUSTOM_TICK_SLOWDOWNSPIN",
   lifetime = 100,
   speedX = {-2, 2},
   speedY = -1,
   gravity = 0.1,
   angle = {-180, 180},
   rotation = {-360, 360}
}

```
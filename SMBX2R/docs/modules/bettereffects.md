# Bettereffects

As a module, bettereffects needs to be loaded in order to be accessible in your level or episode:
```lua
local bettereffects = require("game/bettereffects")
```

Bettereffects is the library managing X2-specific [effects](/reference/effect.md). In some cases, it is necessary to load bettereffects, as Effect.get and its sibling functions are currently restricted to 1.3 effects.

## Functions

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} getEffectSpawners()
    {RET} [table](/types/table.md) of [Effect Spawner](/reference/effect.md)
   {DESC} Returns all effect spawners.
====
   {NAME} getEffectSpawners(

[number](/types/number.md) or [table](/types/table.md) or [number](/types/number.md) id
)
    {RET} [table](/types/table.md) of [Effect Spawner](/reference/effect.md)
   {DESC} Returns all effect spawners of the specified ID(s).
====
   {NAME} getEffectObjects()
    {RET} [table](/types/table.md) of [Effect Particle](/reference/effect.md)
   {DESC} Returns all effect particles.
====
   {NAME} getEffectObjects(

[number](/types/number.md) or [table](/types/table.md) or [number](/types/number.md) id
)
    {RET} [table](/types/table.md) of [Effect Particle](/reference/effect.md)
   {DESC} Returns all effect particles of the specified ID(s).
{ENDTABLE}
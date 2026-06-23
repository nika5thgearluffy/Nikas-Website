# Xmem

As a module, xmem needs to be loaded in order to be accessible in your level or episode.
```lua
local xmem = require("xmem")
```

Xmem is responsible for the "memdump" and "memlog" methods on Block, NPC and Player objects. For accessing those, xmem does not need to be loaded. The only case in which one might want to load it is to access the memdump and memlog methods for global memory offsets.

## Functions

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} memdump(

[hex](/types/number.md) lowerBound,

[hex](/types/number.md) upperBound

)
    {RET} [nil](/types/nil.md)
   {DESC} Prints the current state of global memory addresses to the screen for debugging. If the arguments are not specified, they default to the minium and maximum values respectively.
====
   {NAME} memlog(

[hex](/types/number.md) lowerBound,

[hex](/types/number.md) upperBound

)
    {RET} [nil](/types/nil.md)
   {DESC} Logs the current state of global memory addresses into a file in the data/logs directory. If the arguments are not specified, they default to the minium and maximum values respectively.
{ENDTABLE}
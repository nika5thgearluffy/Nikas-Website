# Clear pipes

Clear pipes are a set of blocks that can transport players and NPCs from place to place quickly. In previous versions, special register functions were used to mark NPCs are valid for clear pipe travel. Since Beta 5, please use the [NPC config](/features/npc-config.md) "useclearpipe" instead.

This page is currently incomplete.

## Functions

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} overrideInput(

   [Player](/reference/player.md) player,

   [string](/types/string.md) inputDirection,

   [bool](/types/bool.md) value

   )
    {RET} [nil](/types/nil.md)
   {DESC} Forces a key on a player in a clear pipe.
{ENDTABLE}
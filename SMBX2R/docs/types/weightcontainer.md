# Weight Container

Weight containers are abstract representations of weight attached to players and NPCs. They can be used to change the weight of the container over time while affecting the enemy, and they are used to detach itself from the NPC.

## Instance fields

{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE} [object](/types/object.md)
  {FIELD} owner
     {RO} Yes
   {DESC} A reference to the owner of the weight. This could be invalid if the NPC or player has died.
====
   {TYPE} [number](/types/number.md)
  {FIELD} weight
     {RO} No
   {DESC} The current weight of this container.
{ENDTABLE}
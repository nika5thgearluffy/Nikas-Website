# Checkpoint

Checkpoints are temporary mid-level save points that allow players to restart from them when they die. By default, they last until the level is completed, or the game is shut down.

## Static Members

These elements are static to the class itself and can be accessed like so:
```lua
local checkpoints = Checkpoint.get()
```

<!-- (Unlike instance functions and fields, these have 'Checkpoint' prepended, which is inconsistent but potentially helpful.) -->
### Static Functions
{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} Checkpoint([named](/types/table.md) args)
    {RET} [Checkpoint](/reference/checkpoint.md) newCheckpoint
   {DESC} Creates a new checkpoint object in the current level.
<details><summary>Arguments</summary>

| Argument | Description |
| --- | --- |
| [number](/types/number.md) x <Badge type="tip">Required</Badge>  | X coordinate to spawn the player at when respawning from this checkpoint. |
| [number](/types/number.md) y <Badge type="tip">Required</Badge>  | Y coordinate to spawn the player at when respawning from this checkpoint. |
| [number](/types/number.md) section <Badge type="tip">Required</Badge>  | Section number to spawn the player at when respawning from this checkpoint. |
| [function](/types/function.md) actions | A function that is run when the player spawns from this checkpoint. The function is run once for each player, and uses the blueprint: `actionFunction(checkpointObject, playerObject)`. |
| [number](/types/number.md) or [string](/types/string.md) sound | A sound effect to play when the player collects this checkpoint. Can accept either a sound ID or a file path. |
| [number](/types/number.md) powerup | A powerup value to boost the player up to when this checkpoint is collected. The player will not lose powerups of the same or higher tier than the one listed here, but will be pushed up to this powerup from lower tiers. |

</details>
====
   {NAME} Checkpoint([number](/types/number.md) id)
    {RET} [Checkpoint](/reference/checkpoint.md) checkpoint
   {DESC} Gets the checkpoint with the specified checkpoint ID. Returns [nil](/types/nil.md) if no checkpoint with that ID exists.
====
   {NAME} Checkpoint.getActive()
    {RET} [Checkpoint](/reference/checkpoint.md) activeCheckpoint
   {DESC} Gets the currently active checkpoint, or returns [nil](/types/nil.md) if there is none.
====
   {NAME} Checkpoint.getActiveIndex()
    {RET} [number](/types/number.md) activeCheckpointIdx
   {DESC} Gets the currently active checkpoint's index. -1 if no checkpoint is active.
====
   {NAME} Checkpoint.get()
    {RET} [table](/types/table.md) of [Checkpoint](/reference/checkpoint.md) checkpoints
   {DESC} Returns a table of references to all checkpoints in the level.
====
   {NAME} Checkpoint.reset()
    {RET} [nil](/types/nil.md)
   {DESC} Resets all collected checkpoints in the current level. This will not respawn any checkpoint [NPCs](/reference/npc.md), but will un-collect all the checkpoints and stop the player from spawning at the checkpoint upon death.
====
   {NAME} Checkpoint.registerNPC([number](/types/number.md) or [table](/types/table.md) of [number](/types/number.md) id)
    {RET} [nil](/types/nil.md)
   {DESC} Registers a specific [NPC](/reference/npc.md) ID or list of IDs to create a [Checkpoint](/reference/checkpoint.md) as soon as they appear in the level. The checkpoints will have the same properties as the default Checkpoint NPCs, but can by changed by accessing `myNPC.data._basegame.checkpoint` to get the checkpoint object associated with the specific NPC. Note that NPCs spawned after the level starts will not function as Checkpoints, as they will not exist when the level restarts for the player to spawn at.
{ENDTABLE}

## Instance Members

Instance members must be accessed through a reference to a specific [Checkpoint](/reference/checkpoint.md) object.
```lua
myCheckpoint.powerup = 2
myCheckpoint:collect()
```
<Note type="warning">Attempting to call instance members statically will result in an error!</Note>

### Instance Methods

[What is a method?](/types/function.md#methods)

<!-- (The "true" in some of these is not ideal. Consider some way to denote optional arguments and an easy way to see how a function changed depending on which arguments have what values.) -->
<!-- (Needs a control for named args.) -->

{STARTTABLE}
   {NAME} Method
    {RET} Return Values
   {DESC} Description
====
   {NAME} collect(

[Player](/reference/player.md) collectedBy

)
    {RET} [nil](/types/nil.md)
   {DESC} Collects the checkpoint and sets it as the currently active checkpoint. The event `onCheckpoint` will be called afterwards.
====
   {NAME} reset()
    {RET} [nil](/types/nil.md)
   {DESC} Resets the current checkpoint, un-collecting it and preventing the player from respawning at it. This will not respawn any NPCs that were collected to activate this checkpoint.
{ENDTABLE}

### Instance Fields

<!-- (Consider an icon for "read only".) -->
{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} collected
     {RO} Yes
   {DESC} Has the Checkpoint been collected?
====
   {TYPE} [number](/types/number.md)
  {FIELD} idx
     {RO} Yes
   {DESC} The Checkpoint's internal index.
====
   {TYPE} [number](/types/number.md)
  {FIELD} id
     {RO} Yes
   {DESC} The Checkpoint's internal index.
{ENDTABLE}
<!-- (These badges could be used/modified for deprecated items of other kinds, too!) -->

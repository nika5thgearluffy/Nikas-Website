# Common warnings

Warning messages are non-breaking hints for developers that warn them about common mistakes or deprecations (scripts that are scheduled for removal in future versions). This page details common instances and how to deal with them.
Warnings are identified by a red line specifying their nature, and a stacktrace below each warning.

## XXX is deprecated. Use XXX instead.

![Eventu deprecation warning](/images/guides/warning_eventu.png)

Deprecation warnings warn of a script being used that is scheduled for removal because a better alternative has become standard. Deprecated code, while working just fine in the current version, might require an update of the level or episode to ensure its compatibility with future versions.

The red line with the purple underline indicates the deprecated library and recommended replacement. In the stacktrace, the first instance of a script you worked on will tell you the file and line from which the warning was thrown.

### eventu is deprecated.

The [Routine class](/reference/Routine.md) is a direct upgrade to the old eventu library. You can replace all instances of the word "eventu" with "Routine" in your code, and get rid of the require call at the top.

### npcconfig is deprecated.

The [NPC config](/features/npc-config.md) completely replaces the old npcconfig.lua, and references to npcconfig.lua can be entirely replaced by using NPC.config instead.

### graphX/mathematX/textblox is deprecated.

Textblox served as an old text wrapping system. It has since been replaced by [textplus](/modules/textplus.md). Converting from one system to another requires the reformatting of font files, and potential custom implementation of word bubble systems.

### paralx is deprecated.

Paralx is the precursor to paralx2, the system used by [parallaxing backgrounds](/features/parallaxing-backgrounds.md). Most uses of the old paralx can be replicated by using a paralx2 background2-n.txt without the need for writing any lua code on top of that. For more complex tasks like runtime modification of a parallaxing background, the module [paralx2](/modules/paralx2.md) can be loaded.

### cameraman is deprecated.

The cameraman system has been replaced by the [handycam](/modules/handycam.md) module.

### pnpc/pblock is deprecated.

Pnpc and pblock used to be the way to provide NPCs and Blocks with their respective [Data Tables](/concepts/data-table.md). Nowadays, these tables exist by default and the object references are persistent. Thus, the old library needs to be no longer loaded and all instances to pnpc/pblock.wrap() can be removed.

### encrypt is deprecated.

Encrypt and, by extension, the data class were an old persistent data saving mechanism that has since been replaced by the much easier to use [SaveData and GameData](/concepts/savedata-gamedata.md) tables.

### inputs is deprecated.

The old inputs library has been replaced by the player-internal [player.keys and player.rawKeys](/reference/player.md) fields.

### multipoints is deprecated.

Most use cases of the old multipoints system are obsolete as the new checkpoint NPCs (400, 430) are inherently capable of multiple checkpoints. For advanced use cases, use the [Checkpoint](/reference/Checkpoint.md) class instead.

## Improperly calling XXX before onStart.

Not all runtime objects are initialized before onStart. This includes players, NPCs, blocks, Layers, BGOs and other runtime items. Initialize the variable causing this warning in onStart to ensure it gets properly initialized.

## Overwritten handler XXX in FILE

This warning indicates that one of your files has a duplicate function definition. There can only be one instance of each function in a file. If you need to do several things in for example onTick, put them in the same onTick, just below each other.

```lua

BAD: Only the bottom onTick executes
function onTick()
    -- do X
end
function onTick()
    -- do Y
end
------------------------------------
GOOD: The code runs as expected
function onTick()
    -- do X
    -- do Y
end
```
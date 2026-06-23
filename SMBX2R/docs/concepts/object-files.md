# Object files

Objects (Blocks, NPCs) load their code via special lua files, often referred to as npc-n.lua, or block-n.lua, where n is an arbitrary number.

When taking a look in the "SMBX/data/scripts/npcs" and "scripts/blocks" folders, you can see that files are numbered like their respective graphics files are. If you copy one of those files (take the Thwimp, NPC 301, for example) into your [level folder](/concepts/level-episode-folder.md) and rename it to npc-751.lua ([Custom Range](/concepts/custom-range.md)), your local NPC 751 will act exactly like a Thwimp would, without any additional lua code.

This modular system makes it easy for people to duplicate basegame NPC and block behaviour, but also makes drag-and-drop NPC and Block plugin packs very easy to create, only requiring .lua, .png and .ini files for each object that’s part of the pack.

Object files get passed a global variable NPC_ID, which is equal to the number after the dash in the file's filename. Using this variable, you can create ID checks that work regardless of the ID of the entity.

Templates for object files for creating custom entities can be found in the [Templates folder](/features/templates-folder.md).

For more information on creating your own entities, here is a [guide](/guides/how-to-custom-entities.md).

| Object type | Has object files? |
| --- | --- |
| Block | Yes |
| BGO | No |
| NPC | Yes |
| Effect | No |
| Player | No |
| Powerup | No |
| Tile | No |
| Scenery | No |
| Level | No |
| Path | No |
| Musicbox | No |
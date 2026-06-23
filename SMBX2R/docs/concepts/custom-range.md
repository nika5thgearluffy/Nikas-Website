# The Custom Range

The Custom Range is a range of IDs reserved for per-level and per-episode object replacements. These items are guaranteed to never have any basegame behaviour.

<Note type="warning">Unused objects outside of those ranges are subject to be used by us (the developers) in future releases, and should be left as-is for the purposes of keeping your levels/episodes compatible.</Note>

Custom range ID values can be found in the table below. In future updates, new IDs and ranges will be added as necessary:

| Object type | Range (minumum - maximum (inclusive)) |
| --- | --- |
| Block | 751-1000 |
| BGO | 751-1000 |
| NPC | 751-1000 |
| Effect | 751-1000 |
| Player | No Custom Range |
| Powerup | No Custom Range |
| Tile | No Custom Range |
| Scenery | No Custom Range |
| Level | No Custom Range |
| Path | No Custom Range |
| Musicbox | No Custom Range |

For items you place in the editor directly it’s important to remember that their editor appearance is defined by an [ini file](/concepts/editor-configurations.md). Examples of such ini files can be found in the appropriate subdirectory of “SMBX\data\PGE\configs\SMBX2-Integration\items”. You can copy any of these as a template for your own custom object into your level or episode folder in order to get started. Please refrain from editing the example files directly, as doing so will mess up your installation.

After the object is set up, press F8 in the editor to reload the level. Your new object can now be found through the Tileset Itembox’s Tileset Editor.
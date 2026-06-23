# Extra Settings

Various objects support per-ID or per-type additional settings configurations for display in the editor. These so-called extra settings are defined via JSON files that are loaded either via the name of the JSON (if per-type), or as part of the [editor configuration ini file](/concepts/editor-configurations.md) (if per-ID). Additionally, extra settings can be defined for sections and entire levels.
Whether these affect a level or an episode depends on whether they're placed in the level folder or the episode folder.

<a href="/Extra_Settings_JSON_Layout.html">Specification of the Extra Settings JSON Layout</a>

- global_block.json: Defines level/episode-wide block settings.
- global_bgo.json: Defines level/episode-wide BGO settings.
- global_npc.json: Defines level/episode-wide NPC settings.

The locations into which relevant settings are inported are as follows:
- Block, BGO and NPC settings are imported into an object's "data.\_settings" table. Settings from the relevant global files are imported into the "data.\_settings.\_global" table instead.

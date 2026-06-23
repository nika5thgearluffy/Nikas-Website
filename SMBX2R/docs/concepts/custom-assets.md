# Custom Assets

A custom asset (if purely visual: a custom graphic) is a level- or episode-specific replacement to a basegame asset, or a new asset that custom lua code uses to augment custom functionality (for example, a custom sound effect that plays when an enemy is defeated).

This page goes over different types of custom assets and their rules.

## How to use

Custom assets generally involve a lot of management of files with different file extensions. We recommend you enable visible file extensions on your operating system (Windows, Linux, Mac) so that you can more easily see them and avoid accidental mistakes.

All custom assets follow a few basic rules:
- Custom assets can generally be applied to [Level and Episode folders](/concepts/level-episode-folder.md). Special rules can be found below.
- If the asset is a replacement for a basegame asset, the custom asset needs to have the same name as the basegame asset
- - For example, if you want to replace the SMB3 Goomba NPC npc-1's sprite for your episode, npc-1.png, you put a file called npc-1 into your level or episode folder.
- -  File extension matters. For image files, both .png and .gif are supported (png is recommended). For audio files, [many file types](https://wohlsoft.ru/pgewiki/SDL_Mixer_X#SFX_Formats) are supported. A .wav sound can be replaced with an .ogg sound, a .png image can be replaced with a .gif image.
- If you change the contents of the episode or level folder while the editor is open, you need to press F8 or the circling arrows button at the top to reload the level's assets.

### Special rules: BGM Music files

Music files for the game's background music don't automatically count as custom assets. You will find that putting a "sm64-water.ogg" into your episode or level folder will not do anything by itself. In order to apply music files, copy the [Template Folder](/features/templates-folder.md)'s music.ini file into your episode folder, and set the path to your custom music rooted in your episode folder. Per-level replacements aren't currently available.

### Special rules: Graphics

Graphics that replace anything in the data/graphics folder have an extra folder they can be placed in, in addition to the level and episode folders.

If you place a folder named "graphics" in your episode folder, and create subdirectories matching those in data/graphics, graphics in those folders will be replaced as if they were in the episode folder (they will replace the asset in the entire episode).

### Special rules: folders.ini

You can include a file named "folders.ini" in your episode or level folder to specify where the editor will load graphics and config files (.ini files for NPCs, blocks, and BGOs) from.

Here is how an episode-wide folders.ini file might look when you use a graphics subfolder:
```ini
[folders]
blocks = graphics/block
bgos = graphics/background
npcs = graphics/npc
wallpapers = graphics/background2

wm-terrains = graphics/tile
wm-scenery = graphics/scene
wm-paths = graphics/path
wm-level = graphics/level
wm-players = graphics/player

demo = graphics/mario
iris = graphics/luigi
kood = graphics/peach
rao = graphics/toad
sheath = graphics/link

catnips = graphics/yoshi
```

There are some important quirks with folders.ini to be aware of:
- the actual keys specified for each entry do not matter as long as they are distinct from one another;  having two "wm-terrains" entries, for example, will cause the first one to be ignored.
- tilesets are not loaded through folders.ini and instead must be either kept in the episode scope or copied into a level's resource folder.
- most importantly, folders.ini files are only used by the editor and will not impact graphics while the game is running.

```ini
[folders]
; graphics in these folders will display in both the editor and at runtime because they follow the basegame graphics folder structure
blocks = graphics/block
bgos = graphics/background
friendsandenemies = graphics/npc
backgrounds = graphics/background2

; graphics in these folders will display correctly in the editor but be ignored at runtime
blockstwo = graphics/custom/beach/block
beegos = graphics/custom/beach/background
morenpcs = graphics/custom/altnpc
greg = graphics/custom/beach/background2
```

However, libraries can be used to load graphics from otherwise-unsupported paths at runtime.  The experimental library [cgfxBridge.lua](https://www.smbxgame.com/forums/viewtopic.php?t=29687) in particular imports custom graphics (including both .ini and .txt configs) from the paths specified in folders.ini files;  with it properly implemented in your episode, all of the paths in the above example will be used at runtime.  npc-n.lua and block-n.lua files, as well as tilesets, will still need to be copied over.


### Special rules: npc-n.lua, block-n.lua

The per-object lua files don't replace, but instead append to the logic of their basegame files. This is because of consistency with pre-SMBX2 blocks and NPCs whose logic cannot be overridden via a local lua file. If you want to make a replacement of a basegame NPC or block, you can use the [Custom Range](/concepts/custom-range.md).

## Content Packs

Content packs (often called NPC packs, Block packs, BGO packs when they contain a specific type of asset) are a type of custom asset that include lua code and functionality for new blocks, bgos or NPCs. These assets make use of the [Custom Range](/concepts/custom-range.md) to add new assets that don't replace any existing ones.

### How to use

The basic rules for content packs are the same for other custom assets, but their source files are a bit more complicated and often require a bit of editing to work properly.

After downloading the pack and opening it, navigate its contents until you get to a folder that looks like the image below. Some packs only contain one such folders, but some packs are collections of many different assets of different styles and functionality. Crucially, files named npc-751.txt, ini, lua, png are what you are looking for.

![Pack contents](/images/concepts/custom-assets-1.png)

#### Which files do I copy?

The next step is to copy these assets over into your level or episode folder. Fundamentally, everything of the same ID belongs together, <b>but there might be more files that these assets depend on!</b>

The simple solution is to copy the entire folder and not worry any further, but if you only want a subsection of the contents, you will have to watch out for the following:

- Tileset.ini files. These are helper files that add tilesets for the assets to the editor.
- Effect files. NPCs and Blocks might spawn effects when they get destroyed or defeated. These are generally named effect-n.png and .txt.
 - These are most easily found if the images look related, but can be confirmed by looking for instances of effect IDs in the lua file. Try looking for Effect.spawn/Animation.spawn calls or numbers in the 751-1000 range in a NPC's registerHarmTypes function.
- Extra settings json files. These files provide in-editor extra options for the asset. These files are often called npcsettings_xxxxx.json or blocksettings_xxxxx.json.
 - Whether or not a NPC uses extra settings can be seen by looking at the npc/block-n.ini and seeing if the extra-settings field is set.
- AI folders and files. Some scripts put shared code into an "AI file". This is a lua file that could be named anything, but most script creators put it into a subfolder named AI.
 - Make sure to import this if the .lua files you are importing have a line like "local myScript = require("<b>AI/</b>someOtherFile"). Pay close attention to the AI/.
- Sound files.
 - If the lua script or AI file does any calls to SFX.play() with a text parameter, make sure to copy any sound files of that name you find.
- Other images.
 - Look at the relevant lua files and find instances of Graphics.loadImage to figure out what image files are required.

It is possible that other files are relevant as well, so it's always safer to copy too much rather than too little. For complicated packs with confusing folder structures that deviate from this, we recommend creators put a readme in the zip archive to explain their pack's layout.

Once you have determined which files to copy, you can copy the files into your level or episode folder.

#### I already have an NPC of this ID...

Since IDs in the custom range are freely flexible, it could happen that you are trying to copy one npc-751 from pack A and one npc-751 from pack B. Naturally it's impossible to have two files of the same name, but thankfully this modularity means that files can be renamed!

![Renaming a set of files](/images/concepts/custom-assets-2.png)

1. Rename the files of the secondary pack you are importing to fill IDs currently not occupied. Make sure to stay within the [Custom Range](/concepts/custom-range.md).
2. Open the npc/block-n.ini file for the assets you have renamed, to make sure they use the same image file as their name suggests.

![Editing the name in the ini](/images/concepts/custom-assets-3.png)

3. If effects are used, make sure to open the .lua file as well. It is sometimes the case that custom assets use the "npcID" or "NPC_ID" variable for an effect ID that relates to them. If this is the case, rename the effect as well.
4. If you copied tileset files, the ID refererences will break here. You'll have to adjust the tilesets in the editor later. If you didn't copy a tileset, you can easily create one using the "Show custom" toggle in the editor's tileset editor.

![Adding a tileset](/images/concepts/custom-assets-4.png)


And that's it! You can now start using packs you have downloaded here in your levels. If they don't show up in the editor immediately, make sure to refresh with F8. Please enjoy!
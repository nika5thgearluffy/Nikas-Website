# Level and episode folders

The hierarchy in which custom assets for levels are applied is divided into so-called "level folders" and "episode folders".

## Episode folder

The "episode folder" is the folder which contains the level file and its respective level folder. It is called such because this is the directory in which, in an episode, every level file and level folder will be placed. [Custom Assets](/concepts/custom-assets.md) placed within this folder apply to every level in this directory.

## Level folder

The "level folder" is a folder in the same directory as the level file which has the same name as the level file, minus the extension. [Custom Assets](/concepts/custom-assets.md) placed within this folder only apply to the level of the given name and cannot be accessed by levels of other names. If a custom asset exists both in the level and episode folder, the level folder file override the episode folder file.

luna.lua files are an exception in that episode-wide luna.lua files are also executed even if a level folder has a luna.lua file. In this case, both files are used at the same time.

## Example

- MyEpisode - This is the episode folder
 - mylevel - This is a level folder
   - Assets for the level myLevel
 - myotherlevel - Another level folder
   - Assets for the level myOtherLevel
 - mylevel.lvlx
 - myotherlevel.lvlx
 - Assets for all levels in the MyEpisode folder
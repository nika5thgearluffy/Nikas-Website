# Launcher Pages

Episodes in SMBX2 can have launcher pages that can be customised with HTML, CSS, and various configuration variables. This page explains how to set up and configure a launcher page.

## File Setup

When creating a launcher page, certain files are necessary. Firstly, you should make a folder named "launcher" in your episode folder. The most important file in that folder is the "info.json" file. This file will contain all the data that configures your launcher page. If you want a custom page layout, you should also include a file named "index.html".

![launcher setup](/images/features/launcherfiles.png)

## A note on JSON types

Some JSON types are not quite the same as Lua types. Of particular not is the "JSON Array", which acts in a similar way to a table. However, JSON Arrays are simply lists of values, formatted like so:

```json
	"myArray": [1, 2, 4]
```

JSON arrays usually only use one type for every entry in the array.

## Available Fields for info.json

| Field | Type | Description |
| --- | --- | --- |
| mainPage | [string](/types/string.md) | The name of the main .html file for the launcher page. Usually, this will be set to "index.html", or left out entirely. |
| episodeIcon | [string](/types/string.md) | The name of the icon image file to use for the episode. This will appear next to the episode name in the launcher's episode list. |
| current-version | JSON Array ([number](/types/number.md)) | Can be used to set a version number for the episode. List entries are used for different scale of version numbers (with earlier entries being higher value versions). This field is used in conjunction with `update-check-website` to allow episodes to check for updates. |
| update-check-website | [string](/types/string.md) | A URL leading to an online .json file, which can be used to check against the version number stored in `current-version`. This will prompt an update notice if the current version is smaller than the version found here. See the section below for how to format this version check .json file. |
| credits | [string](/types/string.md) | A string that can override the "credits" field in .wld files, separated by /n characters to indicate new lines. This will only be reflected in the launcher page. |
| allowTwoPlayer | [bool](/types/bool.md) | Determines whether the second player character select will be enabled. Defaults to `true`. |
| allowPlayerSelection | [bool](/types/bool.md) | Determines whether any character select will be enabled. Defaults to `true`. |
| allowedCharacters | JSON Array ([number](/types/number.md)) | A list of allowed character IDs. Currently, only values 1-5 are valid entries to this array. |
| characterNames | JSON Array ([string](/types/string.md)) | A list of alternative character names. The names must be listed in order of their character IDs, for example: `["Alt Mario", "Alt Luigi", "Alt Peach", "Alt Toad", "Alt Link"]` |
| allowSaveSelection | [bool](/types/bool.md) | Determines whether the save slot selection will be enabled. Defaults to `true`. |
| collectible | [string](/types/string.md) | Determines a custom singular form to use for the main episode collectible. Defaults to `"star"`. |
| collectibles | [string](/types/string.md) | Determines a custom plural form to use for the main episode collectible. Defaults to `"stars"`. |
| starIcon | [string](/types/string.md) | The name of the icon image file to be used to indicate the main episode collectible in the launcher. |
| stars | [number](/types/number.md) | An override for the maximum number of the main episode collectible in the episode. |
| progressDisplay | [string](/types/string.md) | If this is set to `"percent"`, the episode progress will be displayed as a percentage value rather than an explicit collectible count. |
| maxProgress | [number](/types/number.md) | Used to override a "maximum" progress value. This is used in conjuction with the [Progress](/reference/progress.md) class to measure episode progress in place of the basic star count. |
| customProgress | [bool](/types/bool.md) | Rarely necessary, used to force the launcher to measure progress by the value in the [Progress](/reference/progress.md) class instead of using the star count. This is not needed if the `maxProgress` field is in use. Defaults to `false`. |
| noAchievementBorders | [bool](/types/bool.md) | Determines whether the [Achievements](/features/achievements.md) page for this episode has borders around the achievement icons or not. Defaults to `false`. |

Using these values, the info.json file can be configured as in this example:

```json
{
	"mainPage": "index.html",
	"episodeIcon": "icon.png",
	"stars": 100
}
```

## Version Check JSON

When creating an online .json file for version checking, the file needs three fields, formatted like so:

```json
{
    "current-version": [2, 0, 0],
    "update-message": "A message to report the latest changes to the player.",
    "download-url": "http://downloadupdate.codehaus.moe"
}```


| Field | Type | Description |
| --- | --- | --- |
| current-version | JSON Array ([number](/types/number.md)) | Similar to the info.json `curent-version` setting, this will be compared with the local version number to check if the episode requires an update. |
| update-message | [string](/types/string.md) | A message that will be reported to the player in the update message, if their copy of the episode is outdated. |
| download-url | [string](/types/string.md) | A web address that will be served to the player in the update message, prompting them to visit this URL to download the update. |


## Special HTML objects

When constructing your episode "index.html" file, there are some special objects you can use to automatically display certain details about your episode. You can use these like so:

```html
<div class="_episodeTitle"></div>
<div class="_starsContainer">This only appears if the episode has collectibles.</div>
```

| Class Name | Description |
| --- | --- |
| _episodeTitle | Populates the object with the name of the episode. |
| _episodeIcon | Populates the object with the episode icon image. |
| _stars | Populates the object with the maximum number of collectibles, or the maximum progress for the episode, as well as their icon or name. Will not display if the episode contains no collectibles or max progress settings. |
| _starsCount | Populates the object with the maximum number of collectibles, or the maximum progress for the episode. |
| _starsIcon | Populates the object with the collectible icon image. |
| _starsContainer | Hides the object if the episode contains no collectibles or max progress settings. |
| _credits | Populates the object with the episode credits, or the value found in the `credits` field of the launcher config. Will not display if no credits were found in the episode. |
| _creditsContainer | Hides the object if no credits were found in the episode. |

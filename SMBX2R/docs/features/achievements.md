# Achievements

This page is for defining achievements. For information on how to access and progress them through lua, click [here](/reference/achievements.md).

Achievements are defined through ini files placed in an "achievements" subfolder within the episode folder. They follow a specific naming pattern, that defines their order and associated icon file.

## Filenames

In this table, n is to be substituted for an integer number starting at 1.

| Filename | Description |
| --- | --- |
| ach-n.ini | The definition file for the n'th achievement. |
| ach-n.png | The (optional) icon for the n'th achievement. A size of 64x64 pixels is ideal. |
| ach-nl.png | The (optional) locked icon for the n'th achievement. A size of 64x64 pixels is ideal. |

## Available Fields for the ini

| Field | Type | Description |
| --- | --- | --- |
| name | [string](/types/string.md) | The achievement's name. Must be unique among all achievements. Defaults to "Achievement n" where n is the index of the achievement. |
| desc/description | [string](/types/string.md) | The achievement's description. Defaults to "Perform the required task to unlock this achievement." |
| collected-desc/collected-description | [string](/types/string.md) | The achievement's description when collected. Defaults to the regular description. |
| hidden | [bool](/types/bool.md) | Whether the achievement is hidden. Defaults to false. |
| condition-n | [string](/types/string.md) | Defines a condition of type "event" which triggers once the respective vanilla event is executed. The value is the name of the event, and n is the condition's index. |
| condition-n | [bool](/types/bool.md) | Defines a condition of type "boolean" which triggers once the set to true from lua. The value is true or false, and n is the condition's index. |
| condition-n | [number](/types/number.md) | Defines a condition of type "number" which triggers the value is reached. The value defines the required limit to be reached, and n is the condition's index. |
| condition-n-desc | [string](/types/string.md) | The (optional) description of the n'th condition. Defaults to nil. |

Using these values, an achievements may be defined like so:

```ini
name = "Violent Tendencies"
desc = "Defeat 100 Goombas!"
condition-1 = 100
condition-1-desc = "Goombas defeated"
```
# Light Config

This is a set of config features that can be used by other object types (such as Blocks, NPCs and BGOs) in their respective config files.

| Name | Type | Description | Default |
| --- | --- | --- | --- |
| lightoffsetx | [number](/types/number.md) | Horizontal offset of the light source relative to the center of the object. | 0 |
| lightoffsety | [number](/types/number.md) | Vertical offset of the light source relative to the center of the object. | 0 |
| lightradius | [number](/types/number.md) | Radius of the light source. | 0 |
| lightbrightness | [number](/types/number.md) | Brightness of the light source. | 1 |
| lightflicker | [bool](/types/bool.md) | Whether or not the light should slightly flicker. | false |
| lightcolor | [Color](/reference/Color.md) | The color of the light source. Can either be the name of a color constant, or a hex value (i.e. 0xFFFFFFFF). | white |
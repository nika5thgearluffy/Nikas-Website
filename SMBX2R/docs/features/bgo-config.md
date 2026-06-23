# BGO Config

BGO config provides an easy way to change properties of background objects without needing to do any programming. BGO config is defined in a txt file with identical name to the BGO whose ID you wish to replace. For example, a "background-1.txt" may look like this:

```json
frames = 4
framespeed = 4
```

## Available args

| Name | Type | Description | Default |
| --- | --- | --- | --- |
| Animation |
| frames | [number](/types/number.md) | Number of frames of the BGO animation. | 1 |
| framespeed | [number](/types/number.md) | The amount of ticks it takes for the BGO animation frame to change. Lower numbers = faster animation. | 8 |
| width | [number](/types/number.md) | The width of the BGO. | Inferred from sprite & frames |
| height | [number](/types/number.md) | The height of the BGO. | Inferred from sprite & frames |
| Other |
| priority | [Render Priority](/concepts/render-priority.md) | The priority to render the BGO to. | -85 |
| climbable | [bool](/types/bool.md) | If true, the BGO acts as a fence piece. | false |

## Light args

Additionally, all [cross-object config values for adding lights](/features/light-config.md) can be used.
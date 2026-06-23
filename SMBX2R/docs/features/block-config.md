# Block Config

Block config provides an easy way to change properties of blocks without needing to do any programming. Block config is defined in a txt file with identical name to the block whose ID you wish to replace. For example, a "block-1.txt" may look like this:

```json
frames = 4
framespeed = 4
```

## Available args

| Name | Type | Description | Default |
| --- | --- | --- | --- |
| Animation |
| frames | [number](/types/number.md) | Number of frames of the block animation. For blocks, frames are defined to be a fixed 32 pixels tall. | 1 |
| framespeed | [number](/types/number.md) | The amount of ticks it takes for the block animation frame to change. Lower numbers = faster animation. | 8 |
| width | [number](/types/number.md) | The width of the block. | Inferred from sprite |
| height | [number](/types/number.md) | The height of the block. | Inferred from sprite |
| Collision |  |  (applying multiple might not always work) |
| sizable | [bool](/types/bool.md) | Whether or not the block is sizable. Sizables are always considered semisolid. | false |
| semisolid | [bool](/types/bool.md) | Whether or not the block is a semisolid. | false |
| passthrough | [bool](/types/bool.md) | If true, the block has no collision. | false |
| lava | [bool](/types/bool.md) | If true, the block acts as lava. | false |
| floorslope | [number](/types/number.md) | -1, 0 and 1 depending on the direction of the floor slope. | 0 |
| ceilingslope | [number](/types/number.md) | -1, 0 and 1 depending on the direction of the ceiling slope. | 0 |
| walkpaststair | [bool](/types/bool.md) | A player approaching a semisolid slope setting this flag to true will not ascend the slope if the slope is touching ground. | false |
| bumpable | [bool](/types/bool.md) | If true, the block can be bumped by players and NPCs. | false |
| playerfilter | [Character](/constants/characters.md) | Character ID that is allowed to pass through this block. -1 means all character IDs. | 0 |
| npcfilter | [number](/types/number.md) | NPC ID that is allowed to pass through this block. -1 means all NPC IDs. | 0 |
| Other |
| pswitchable | [bool](/types/bool.md) | If true, the block turns into a coin when a P-Switch is hit. | false |
| smashable | [number](/types/number.md) | Determines how durable the block should be with regards to certain NPCs that break blocks. Can be a number between 0 and 3. 1 = hit/triggered by the NPC, but not broken; 2 = broken by the NPC; 3 = effortlessly broken by the NPC | 0 |
| customhurt | [bool](/types/bool.md) | Set to true to register your block as part of the list of harmful blocks. | false |
| noshadows | [bool](/types/bool.md) | If set to true, the block will not be able to cast shadows in dark sections. | false |
| ediblebyvine | [bool](/types/bool.md) | If set to true, the block can be eaten by Mutant Vine NPCs. | false |

## Light args

Additionally, all [cross-object config values for adding lights](/features/light-config.md) can be used.

## Block AI Specific Args

These args are only availble for specific types of blocks. The config value is usually determined by a type of shared AI code. Basegame IDs using the AI are supplied for convenience.

| Name | Type | Description | Default |
| --- | --- | --- | --- |

#### TNT + Nitro [IDs 682, 683]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| flashcolor | [Color](/reference/Color.md) | The color the TNT or Nitro block flashes in. | white |
| randomflashes | [bool](/types/bool.md) | Whether flashes should randomly occur during gameplay. | false |
| randomjumps | [bool](/types/bool.md) | Whether the block should randomly appear to jump in place. | false |

#### Escalators [IDs 684, 685, 1133, 1134, 1152, 1153]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| speed | [number](/types/number.md) | A positive value representing the conveyor speed. | 0 |
| direction | [Direction](/constants/direction.md) | The direction the conveyor should push. | 0 |

#### Brittle [IDs 732, 733, 734, 735, 736, 740]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| ignoreplayers | [bool](/types/bool.md) | If true, players are unable to trigger the brittle block. | false |
| ignorenpcs | [bool](/types/bool.md) | If true, NPCs are unable to trigger the brittle block. | false |
| triggerweight | [number](/types/number.md) | The minimum weight an object needs to trigger the destruction animation. | 2 |
| effectid | [number](/types/number.md) | The ID of the effect to spawn once the block is removed. | 0 |

#### Reserve [IDs 737, 739]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| hitid | [number](/types/number.md) | The Block ID to turn into once hit. | No change |

#### Switch Blocks [IDs 746, 747, 748, 749]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| offswitchid | [number](/types/number.md) | The Block ID of the "off" switch state. | / |
| onswitchid | [number](/types/number.md) | The Block ID of the "on" switch state. | / |
| color | [string](/types/string.md) | String representation of the color to use. Unrecognized color names will be registered as new colors. | / |
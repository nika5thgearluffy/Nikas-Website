# Defines

The Defines namespace contains fields that manipulate global game settings, such as gravity.

```lua
function onStart()
    Defines.player_grav = 0.1
end
```

## Level Settings

| Field | Default value | Limits | Description |
| --- | --- | --- | --- |
| Defines.earthquake | 0 | Min: 0 | The current earthquake effect intensity. Decreases by 1 every tick while above 0. |
| Defines.levelFreeze | false | --- | If true, the timer switch effect is active, preventing everything but the player from moving. |
| Defines.pswitch_music | true | --- | Whether P-Switch music is enabled. |
| Defines.pswitch_duration | 777 | Min: 0 | The duration of the P-Switch. |
| Defines.npc_despawntimer | 180 | Min: -1 | The despawn timer for most NPCs. |
| Defines.npc_throwfriendlytimer | 30 | Min: 0 | The duration during which thrown NPCs are friendly to the player that threw them. |
| Defines.npc_walkerspeed | 1.2 | Min: 0 | The speed multiplier of NPCs with iswalker set. |
| Defines.npc_mushroomspeed | 1.8 | Min: 0 | The speed multiplier of Mushroom NPCs. |
| Defines.weak_lava | false | --- | If set to true, Lava will harm players instead of killing them. Changing this will also make lava solid, and loses 6 pixels of leeway on top collisions that regular lava has. |

## Movement Settings

| Field | Default value | Limits | Description |
| --- | --- | --- | --- |
| Defines.gravity | 12 | Min: 0 | The terminal velocity of the player. Slight misnomer. |
| Defines.player_grav | 0.4 | Min: 0 | The falling acceleration of players. |
| Defines.npc_grav | 0.26 | Min: 0 | The falling acceleration of NPCs. |
| Defines.jumpheight | 20 | Min: 0 | The player's default jump height. |
| Defines.jumpspeed | -5.7 | Max: 0 | The player's speedY during the upwards jump motion. |
| Defines.jumpheight_bounce | 20 | Min: 0 | The player's jump height when bouncing off an NPC. |
| Defines.jumpheight_player | 22 | Min: 0 | The player's bounce response when bouncing off another player's head. |
| Defines.jumpheight_noteblock | 25 | Min: 0 | The player's bounce response when bouncing off a note block. |
| Defines.jumpheight_greenspring | 55 | Min: 0 | The player's bounce response when bouncing off a green spring. |
| Defines.player_walkspeed | 3 | Min: 0 | The player's maximum walking speed. |
| Defines.player_runspeed | 6 | Min: 0 | The player's maximum running speed. |
| Defines.projectilespeedx | 7.1 | Min: 0 | The speed at which shot NPCs and kicked shells move. |

## Player Settings

| Field | Default value | Limits | Description |
| --- | --- | --- | --- |
| Defines.player_grabSideEnabled | true | --- | If grabbing things from the side is enabled. |
| Defines.player_grabTopEnabled | true | --- | If grabbing things from the top is enabled. |
| Defines.player_grabShellEnabled | true | --- | If grabbing shells is enabled. |
| Defines.player_link_shieldEnabled | true | --- | If Link's shield is enabled. |
| Defines.player_link_fairyVineEnabled | true | --- | If Link's should turn into a fairy when climbing. |

## Effect Settings

| Field | Default value | Limits | Description |
| --- | --- | --- | --- |
| Defines.effect_NpcToCoin | 11 | Min: 0 | ID of the effect used by the NPC-to-coin transformation effect (enabled when collecting a goal). |
| Defines.effect_Zoomer_killEffectEnabled | true | --- | If the explosion effect is enabled for the zoomer NPC. |

## Coin Settings

| Field | Default value | Limits | Description |
| --- | --- | --- | --- |
| Defines.coinValue | 1 | Min: 0; Max: 99 | Worth of a regular coin NPC (does not affect the NPC-to-coins function) |
| Defines.coin5Value | 5 | Min: 0; Max: 99 | Worth of a 5-coin NPC. |
| Defines.coin20Value | 20 | Min: 0; Max: 99 | Worth of a 20-coin NPC. |

## Link Block Settings

| Field | Default value | Limits | Description |
| --- | --- | --- | --- |
| Defines.block_hit_link_rupeeID1 | 251 | Min: 0; Max: 300 | NPC ID for the most common NPC spawned when Link hits a block with coins inside. |
| Defines.block_hit_link_rupeeID2 | 252 | Min: 0; Max: 300 | NPC ID for an NPC spawned when Link hits a block with coins inside (20:3 chance). |
| Defines.block_hit_link_rupeeID3 | 253 | Min: 0; Max: 300 | NPC ID for an NPC spawned when Link hits a block with coins inside (60:3 chance). |

## Link Kill Settings

| Field | Default value | Limits | Description |
| --- | --- | --- | --- |
| Defines.kill_drop_link_rupeeID1 | 251 | Min: 0; Max: 300 | NPC ID for the most common NPC spawned when Link kills an NPC. |
| Defines.kill_drop_link_rupeeID2 | 252 | Min: 0; Max: 300 | NPC ID for an NPC spawned when Link kills an NPC (15:3 chance). |
| Defines.kill_drop_link_rupeeID2 | 253 | Min: 0; Max: 300 | NPC ID for an NPC spawned when Link kills an NPC (40:3 chance). |

## Sound Settings

| Field | Default value | Limits | Description |
| --- | --- | --- | --- |
| Defines.sound_NpcToCoin | 14 | Min: 0 | ID of the sound effect used by the NPC-to-coin transformation effect (enabled when collecting a goal). |

## Victory Settings

| Field | Default value | Limits | Description |
| --- | --- | --- | --- |
| Defines.npcToCoinValue | 1 | Min: 0; Max: 99 | Number of coins granted per NPC killed by the NPC-to-coin effect. |
| Defines.npcToCoinValueReset | 100 | Min: 1; Max: 100 | How many coins get subtracted from the coin-value when the coin value hits 100 coins by means of the NPC-to-coin effect. |
| Defines.smb3RouletteScoreValueStar | [10](/constants/score.md) | Min: 1; Max: 12 | Score value of the SMB3 Roulette Star. |
| Defines.smb3RouletteScoreValueFlower | [8](/constants/score.md) | Min: 1; Max: 12 | Score value of the SMB3 Roulette Flower. |
| Defines.smb3RouletteScoreValueMushroom | [6](/constants/score.md) | Min: 1; Max: 12 | Score value of the SMB3 Roulette Mushroom. |

## Cheat Settings

See: [Cheats](features/cheats.md)

| Field | Default value | Limits | Description |
| --- | --- | --- | --- |
| Defines.cheat_shadowmario | false | --- | Whether the shadowstar cheat is active. |
| Defines.cheat_ahippinandahoppin | false | --- | Whether the jumpman cheat is active. |
| Defines.cheat_sonictooslow | false | --- | Whether the sonicstooslow cheat is active. |
| Defines.cheat_illparkwhereiwant | false | --- | Whether the illparkwhereiwant cheat is active. |
| Defines.cheat_wingman | false | --- | Whether the wingman cheat is active. |
| Defines.cheat_captainn | false | --- | Whether the captainn cheat is active. |
| Defines.cheat_flamethrower | false | --- | Whether the flamethrower cheat is active. |
| Defines.cheat_moneytree | false | --- | Whether the moneytree cheat is active. |
| Defines.cheat_speeddemon | false | --- | Whether the speeddemon cheat is active. |
| Defines.cheat_donthurtme | false | --- | Whether the donthurtme cheat is active. |
| Defines.cheat_stickyfingers | false | --- | Whether the stickyfingers cheat is active. |
| Defines.player_hasCheated | false | --- | Whether the player cannot save due to cheating. |
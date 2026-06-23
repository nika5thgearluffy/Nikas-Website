# Enemy harm type constants

Constants for enemy harm types.

## Basic Harm Types

| Constant | Value | Description |
| --- | --- | --- |
| HARM_TYPE_JUMP | 1 | Damaging an NPC by jumping on it. |
| HARM_TYPE_FROMBELOW | 2 | Damaging an NPC by bumping a block the NPC is standing on. |
| HARM_TYPE_NPC | 3 | Damaging an NPC by various means, such as when crushed, exploded, harmed by a thrown NPC or slid into. Slight misnomer. |
| HARM_TYPE_PROJECTILE_USED | 4 | Damage dealt to a projectile NPC when it hits something. |
| HARM_TYPE_HELD | 5 | Damage dealt by an NPC held by the player. |
| HARM_TYPE_LAVA | 6 | Damage dealt by contact with lava. |
| HARM_TYPE_TAIL | 7 | Damaging an NPC with a player's tanooki tail spin attack. |
| HARM_TYPE_SPINJUMP | 8 | Damaging an NPC by spinjumping on it. |
| HARM_TYPE_VANISH | 9 | Damage dealt to an NPC when it vanishes (being collected or eaten). |
| HARM_TYPE_SWORD | 10 | Damaging an NPC via one of Link's attack methods. |

## Extended Harm Types

Extended harm types may be passed to [NPC:harm()](/reference/npc.md) as a method of harming an NPC. They are not used in other contexts.

| Constant | Value | Description |
| --- | --- | --- |
| HARM_TYPE_EXT_FIRE | -1 | Damaging an NPC with player-thrown fire balls. |
| HARM_TYPE_EXT_ICE | -2 | Damaging an NPC with player-thrown ice balls. |
| HARM_TYPE_EXT_HAMMER | -3 | Damaging an NPC with player-thrown hammers. |
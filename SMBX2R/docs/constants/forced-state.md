# Player forced state constants

Constants for player.forcedState values. Note that some may be unsafe to set. Also, there are no states for powering down from 3 hearts with any other powerup.

| Constant | Value | Description |
| --- | --- | --- |
| FORCEDSTATE_NONE | 0 | No forced state. |
| FORCEDSTATE_POWERUP_BIG | 1 | Powering up to big state. |
| FORCEDSTATE_POWERDOWN_SMALL | 2 | Powering down to small state. |
| FORCEDSTATE_PIPE | 3 | Entering a pipe (crashes if no valid warp is provided). |
| FORCEDSTATE_POWERUP_FIRE | 4 | Powering up to fire state. |
| FORCEDSTATE_POWERUP_LEAF | 5 | Powering up to leaf state. |
| FORCEDSTATE_RESPAWN | 6 | Respawning in Multiplayer. Known to be glitchy when manipulated. |
| FORCEDSTATE_DOOR | 7 | Entering a door (crashes if no valid warp is provided). |
| FORCEDSTATE_INVISIBLE | 8 | Invisibility while transforming into a fairy or different character. |
| FORCEDSTATE_ONTONGUE | 9 | On another player's yoshi's tongue. |
| FORCEDSTATE_SWALLOWED | 10 | Swallowed by another player's yoshi. |
| FORCEDSTATE_POWERUP_TANOOKI | 11 | Powering up to tanooki state. |
| FORCEDSTATE_POWERUP_HAMMER | 12 | Powering up to hammer state. |
| FORCEDSTATE_POWERUP_ICE | 41 | Powering up to ice state. |
| FORCEDSTATE_POWERDOWN_FIRE | 227 | Powering down from fire while at 3 hearts. |
| FORCEDSTATE_POWERDOWN_ICE | 228 | Powering down from ice while at 3 hearts. |
| FORCEDSTATE_FLAGPOLE | 300 | On a flagpole. |
| FORCEDSTATE_MEGASHROOM | 499 | Mega shroom transformation state. |
| FORCEDSTATE_TANOOKI_POOF | 500 | Tanooki statue transformation poof. |
| FORCEDSTATE_BOSSBASS | 600 | Tanooki statue transformation poof. |

# NPC forced state constants

Constants for npc.forcedState values. Note that some may be unsafe to set.

| Constant | Value | Description |
| --- | --- | --- |
| NPCFORCEDSTATE_NONE | 0 | No forced state. |
| NPCFORCEDSTATE_BLOCK_RISE | 1 | Coming out of a block upwards. |
| NPCFORCEDSTATE_DROPPED_ITEM | 2 | Dropping from a player's reserve itembox. |
| NPCFORCEDSTATE_BLOCK_FALL | 3 | Coming out of a block downwards. |
| NPCFORCEDSTATE_WARP | 4 | Coming out of a warp generator. |
| NPCFORCEDSTATE_YOSHI_TONGUE | 5 | On a Yoshi's tongue. |
| NPCFORCEDSTATE_YOSHI_MOUTH | 6 | In a Yoshi's mouth. |
| NPCFORCEDSTATE_INVISIBLE | 8 | Invisible. |
| NPCFORCEDSTATE_IN_JAR | 208 | Contained in Mother Brain Jar or held by Buster Beetle/Clawgrip. |
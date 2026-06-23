# Level victory constants

There are two types of constants related to beating a level.

## Level End State

The level end state constants relate to level end animation, and are the values used by Level.winState(endState).

| Constant | Value | Description |
| --- | --- | --- |
| LEVEL_END_STATE_ROULETTE | 1 | SMB3 Card Roulette. |
| LEVEL_END_STATE_SMB3ORB | 2 | SMB3 ?-Orb. |
| LEVEL_END_STATE_KEYHOLE | 3 | SMW Keyhole Exit. |
| LEVEL_END_STATE_SMB2ORB | 4 | SMB2 Crystal Orb. |
| LEVEL_END_STATE_GAMEEND | 5 | Game End - Bowser Defeat victory. |
| LEVEL_END_STATE_STAR | 6 | SMB3 Star Exit. |
| LEVEL_END_STATE_TAPE | 7 | SMW Goal Tape. |
| LEVEL_END_STATE_SWITCHPALACE | 8 | Switch Palace. |
| LEVEL_END_STATE_FLAGPOLE | 9 | Flagpole. |
| LEVEL_END_STATE_SMW | 10 | SMW Goal Orb. |

## Level Win Type

The level win type constants relate to the victory flags on the overworld (i.e. unlocking paths) and determine which type of victory has occured in a level. This value does not necessarily match the end state.
This is the value passed to the onExitLevel event, and also a value that you can pass to Level.exit(winType)

| Constant | Value | Description |
| --- | --- | --- |
| LEVEL_WIN_TYPE_NONE | 0 | Didn't win. |
| LEVEL_WIN_TYPE_ROULETTE | 1 | SMB3 Card Roulette. |
| LEVEL_WIN_TYPE_SMB3ORB | 2 | SMB3 ?-Orb (currently called "boss defeat" in editor) |
| LEVEL_WIN_TYPE_OFFSCREEN | 3 | Offscreen exit. |
| LEVEL_WIN_TYPE_KEYHOLE | 4 | SMW Keyhole exit. |
| LEVEL_WIN_TYPE_SMB2ORB | 5 | SMB2 Crystal Orb. |
| LEVEL_WIN_TYPE_WARP | 6 | Warp exit. |
| LEVEL_WIN_TYPE_STAR | 7 | SMB3 Star exit. |
| LEVEL_WIN_TYPE_TAPE | 8 | SMW Goal Tape. |
| LEVEL_WIN_TYPE_SWITCHPALACE | 9 | SMW Switch Palace. |
| LEVEL_WIN_TYPE_FLAGPOLE | 10 | Flagpole. |
| LEVEL_WIN_TYPE_SMWORB | 11 | SMW Goal Orb. |

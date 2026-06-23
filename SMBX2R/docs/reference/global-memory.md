# Global Memory

This is an incomplete list of global memory addresses. They can be accessed and manipulated through the global mem function.

```lua
local mouseX = mem(0x00B2D6BC, FIELD_DFLOAT) -- Sets mouseX to the mouse's current X position on the screen
mem(0x00B2C5A8, FIELD_WORD, 0) -- Sets coin count to 0
```

## Memory Offsets

<Note type="warning">Be careful when manipulating memory offsets directly! Doing so may yield unexpected results.</Note>
<Note type="tip">Please keep in mind that some of these fields are not fully researched. These fields are marked with a (?).</Note>

{STARTTABLE}
  {FIELD} Field
   {TYPE} Fieldtype
   {DESC} Description
====
   {SECT} Victory-related
====
  {FIELD} 0x00B2C59E
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} 0 if not winning, else representative of the current [Level End State](/constants/level-victory.md). <Badge type="tip">Use Level.winState</Badge>
====
  {FIELD} 0x00B2C5D4
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} 0 if not winning, else representative of the current [Level Win Type](/constants/level-victory.md).
====
   {SECT} P-Switch-related
====
  {FIELD} 0x00B2C62C
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} P-Switch Timer
====
  {FIELD} 0x00B2C62E
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Stopwatch Timer
====
  {FIELD} 0x00B2C630
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Index of the player that triggered the most recent P-Switch of Stopwatch effect.
====
  {FIELD} 0x00B2C87C
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} P-Switch/Stopwatch Length
====
   {SECT} Block Animation-related
====
  {FIELD} 0x00B2BEBC
   {TYPE} [FIELD_DWORD](/constants/memory-field-types.md)
   {DESC} Pointer to block animation timer array
====
  {FIELD} 0x00B2BEA0
   {TYPE} [FIELD_DWORD](/constants/memory-field-types.md)
   {DESC} Pointer to block animation frame array
====
   {SECT} Input-related
====
  {FIELD} 0x00B2D6BC
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} Mouse Cursor X-Coordinate
====
  {FIELD} 0x00B2D6C4
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} Mouse Cursor Y-Coordinate
====
  {FIELD} 0x00B2D6D2
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Whether the mouse cursor is moving
====
  {FIELD} 0x00B2D6CC
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Whether a mouse button is being pressed
====
  {FIELD} 0x00B2D6D0
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Whether a mouse button is being released
====
  {FIELD} 0x00B2C884
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Whether a keyboard key is being released
====
  {FIELD} 0x00B2C6E8
   {TYPE} [FIELD_FLOAT](/constants/memory-field-types.md)
   {DESC} The rising speed of player jumps (while player offset 0x11C > 0)
====
   {SECT} UI-related
====
  {FIELD} 0x00B251E0
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} The current star count. **WARNING: The game internally keeps track of stars based on the section of the level they were collected in. Changing this value can break save files.**
====
  {FIELD} 0x00B2C8A8
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} The star count in the current level.
====
  {FIELD} 0x00B2C5A8
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} The current coin count.
====
  {FIELD} 0x00B2C5AC
   {TYPE} [FIELD_FLOAT](/constants/memory-field-types.md)
   {DESC} The current lives count.
====
  {FIELD} 0x00B2C8E4
   {TYPE} [FIELD_DWORD](/constants/memory-field-types.md)
   {DESC} The current points count. **NO LONGER USED: Use Misc.score and Misc.givePoints instead!**
====
  {FIELD} 0x00B250E2
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Whether or not the pause menu or a text box is visible.
====
  {FIELD} 0x00B2C880
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} The currently chosen option on the vanilla pause menu.
====
   {SECT} Episode-related
====
  {FIELD} 0x00B2C624
   {TYPE} [FIELD_STRING](/constants/memory-field-types.md)
   {DESC} The name of the current episode.
====
  {FIELD} 0x00B25724
   {TYPE} [FIELD_STRING](/constants/memory-field-types.md)
   {DESC} The filename of the episode's intro level, or if it is a hub-styled episode, its hub level.
====
  {FIELD} 0x00B25728
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Whether this is a hub-styled episode (skips world map).
====
  {FIELD} 0x00B2572A
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Whether or not the "Restart Last Level on Death" flag is active.
====
  {FIELD} 0x00B2C906
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} The total number of stars in the episode.
====
   {SECT} Overworld-related
====
  {FIELD} 0x00B258D4
   {TYPE} [FIELD_DWORD](/constants/memory-field-types.md)
   {DESC} Pointer to the overworld path array.
====
  {FIELD} 0x00B25910
   {TYPE} [FIELD_DWORD](/constants/memory-field-types.md)
   {DESC} Pointer to the overworld tile array.
====
  {FIELD} 0x00B2592C
   {TYPE} [FIELD_DWORD](/constants/memory-field-types.md)
   {DESC} Pointer to the overworld scenery array.
====
  {FIELD} 0x00B25974
   {TYPE} [FIELD_DWORD](/constants/memory-field-types.md)
   {DESC} Pointer to the overworld musicbox array.
====
  {FIELD} 0x00B25994
   {TYPE} [FIELD_DWORD](/constants/memory-field-types.md)
   {DESC} Pointer to the overworld level array.
====
   {SECT} Miscellaneous
====
  {FIELD} 0x00B2C620
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Whether or not the game is on the title screen.
====
  {FIELD} 0x00B2C89C
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Whether or not the game is in the credits.
====
  {FIELD} 0x00B2D760
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} If greater than 0, the Battle Mode Text "Mario VS Luigi" is displayed.
====
  {FIELD} 0x00B2D762
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} If greater than 0, the Battle Mode Text "Wins!" is displayed.
====
  {FIELD} 0x00B25108
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} If true, the FPS counter is visible.
====
  {FIELD} 0x00B2510C
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} Must be set to 0 when disabling the FPS counter.
====
   {SECT} Screen Mode
====
  {FIELD} 0x00B25130
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Screen Type

<details><summary>Screen Type Values</summary>

| Value | Description |
| --- | --- |
| 0 | Single player, follows player 1 |
| 1 | Split Screen Vertical (Not used by multiplayer, unused?) |
| 2 | Follow all players, used for most of the supermario# cheats |
| 3 | Follow all players, players cannot leave screen (Unused?) |
| 4 | Split Screen Horizontal (Not used by multiplayer, unused?) |
| 5 | Multiplayer Co-op. Screen is dynamic, and can be either split or joined. See dynamic screen type for the splitting state. |
| 6 | Singleplayer "Co-op". Used by the supermario2 cheat |
| 7 | Credits mode, follows all players |
| 8 | Old online multiplayer mode |

</details>

====
  {FIELD} 0x00B25132
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Dynamic Screen Type

<details><summary>Dynamic Screen Type Values</summary>

| Value | Description |
| --- | --- |
| 1 | Horizontal Split Screen (player 1 on left, player 2 on right) |
| 2 | Horizontal Split Screen (player 1 on right, player 2 on left) |
| 3 | Vertical Split Screen (player 1 on bottom, player 2 on top) |
| 4 | Vertical Split Screen (player 1 on top, player 2 on bottom) |
| 5 | Single Screen |

</details>
====
  {FIELD} 0x00B2C896
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} The index of the player object being controlled when the screen type is 6 (Singleplayer "Co-Op")

{ENDTABLE}

# Level (Levels)

This page is for the Level namespace accessed from within a level. If you're looking for the Level tiles on the overworld, go [here](reference/level-overworld.md).

## Static Members

These elements are static to the class itself and can be accessed like so:
```lua
Level.exit()
```
### Static functions
{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} Level.filename()
    {RET} [string](types/string.md) name
   {DESC} Returns the filename of the level.
====
   {NAME} Level.folderPath()
    {RET} [string](types/string.md) path
   {DESC} Returns the path to the current level folder.
====
   {NAME} Level.format()
    {RET} [string](types/string.md) format
   {DESC} Returns the level's file extension.
====
   {NAME} Level.name()
    {RET} [string](types/string.md) name
   {DESC} Returns the level's title, as seen in the editor.
====
   {NAME} Level.exit(

[Win Type](/constants/level-victory.md) winType

)
    {RET} [nil](types/nil.md)
   {DESC} Exits the level immediately. Optionally, a win type can be passed to signal to the world map the certain way in which the level was beaten. **Note:** Exiting a level in this way will *not* respect the current win state (either from collecting a level exit or using `Level.winState(state)`). If you want to exit a level with a specific exit type, you should provide a winType rather than using `Level.winState`.
====
   {NAME} Level.endState(

[End State](/constants/level-victory.md) endState

)
    {RET} [nil](types/nil.md)
   {DESC} Sets the current victory animation. Once the animation concludes, the level will exit.
====
   {NAME} Level.endState()
    {RET} [End State](/constants/level-victory.md) endState
   {DESC} Returns the current victory animation.
====
   {NAME} Level.load(

[string](types/string.md) filename,

[string](types/string.md) episodeFolderName,

[number](types/number.md) warpIndex

)
    {RET} [nil](types/nil.md)
   {DESC} Loads the level with the specified name. If filename is nil, reloads the current level. If episodeFolderName is nil, it defaults to the current episode. If warpIndex is nil, the player is warped to the level entrance flag.
====
   {NAME} Level.finish(

[End State](/constants/level-victory.md) endState,

[boolean](types/boolean.md) delayed

)
    {RET} [nil](types/nil.md)
   {DESC} Ends the level with a given end state (LEVEL_END_STATE_\*), specified by endState. If delayed is true, it starts the victory animation rather than instantly ending (note that it doesn't play the sound effect). If endState isn't specified or is nil, defaults to the current end state. If delay isn't specified or nil, defaults to false.
====
   {NAME} Level.endStateToWinType(

[End State](/constants/level-victory.md) endState

)
    {RET} [Win Type](/constants/level-victory.md) winType
   {DESC} Converts the given end state (LEVEL_END_STATE_\*) into a win type (LEVEL_WIN_TYPE_\*).
====
   {NAME} Level.winTypeToEndState(

[End State](/constants/level-victory.md) winType

)
    {RET} [Win Type](/constants/level-victory.md) endState
   {DESC} Converts the given win type (LEVEL_WIN_TYPE_\*) into an end state (LEVEL_END_STATE_\*).
====
   {NAME} Level.loadPlayerHitBoxes(

[Character](/constants/characters.md) characterId,

[Powerup](/constants/powerups.md) powerup,

[string](types/string.md) iniFilename

)
    {RET} [nil](types/nil.md)
   {DESC} Loads hitbox information for the specified character's powerup state from the given hitbox configuration ini file.
====
   {NAME} Level.winState(

[End State](/constants/level-victory.md) endState

)
    {RET} [nil](types/nil.md)
   {DESC} Deprecated alias for Level.endState.
====
   {NAME} Level.winState()
    {RET} [End State](/constants/level-victory.md) endState
   {DESC}  Deprecated alias for Level.endState.
====
{ENDTABLE}

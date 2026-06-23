# Misc

The Misc namespace exposes miscellaneous helper functions that don't fit into other classes.
Functions in this class work in levels as well as on the overworld, unless otherwise noted.

## Static Members

These elements are static to the class itself and can be accessed like so:
```lua
Misc.doPow()
```

### Static gameplay manipulation functions
{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} Misc.npcToCoins()
    {RET} [nil](/types/nil.md)
   {DESC} Converts every NPC on screen to coins (like when hitting an exit). <Badge type="tip">Level only</Badge>
====
   {NAME} Misc.toggleSyncSwitch()
    {RET} [nil](/types/nil.md)
   {DESC} Toggles the synced switch state. <Badge type="tip">Level only</Badge>
====
   {NAME} Misc.score()
    {RET} [number](/types/number.md) score
   {DESC} Returns the current score.
====
   {NAME} Misc.score([number](/types/number.md) score)
    {RET} [nil](/types/nil.md)
   {DESC} Adds the given value of points to the current score. By adding negative points, you can subtract score.
====
   {NAME} Misc.coins()
    {RET} [number](/types/number.md) coins
   {DESC} Returns the current value of the coin counter.
====
   {NAME} Misc.coins(

[number](/types/number.md) coins,

[bool](/types/bool.md) playCoinSound,

)
    {RET} [nil](/types/nil.md)
   {DESC} Adds the given value of coins to the coin counter. When the coin counter exceeds 100, 1-ups are granted until the coin counter is below 100 again. If playCoinSound is set to true, it plays the default coin sound.
====
   {NAME} Misc.givePoints(
      
[number](/types/number.md) index,

[vector2](/reference/vector.md) position,

[bool](/types/bool.md) suppressSound

)
    {RET} [nil](/types/nil.md)
   {DESC} Spawns a score effect in the given position. Plays the coin or 1-up sound if not suppressed. [Score values](/constants/score.md)
====
   {NAME} Misc.doPOW()
    {RET} [nil](/types/nil.md)
   {DESC} Triggers a screen-wide POW-Effect (like when a POW Block is thrown). <Badge type="tip">Level only</Badge>
====
   {NAME} Misc.doPOW(

[string](/types/string.md) powtype,

[number](/types/number.md) x,

[number](/types/number.md) y,

[number](/types/number.md) radius

)
    {RET} [nil](/types/nil.md)
   {DESC} Triggers a POW effect of a given POW type at a given position with a given radius for the pulse effect. <Badge type="tip">Level only</Badge>
====
   {NAME} Misc.doPSwitch(
      
[bool](/types/bool.md) activate

)
    {RET} [nil](/types/nil.md)
   {DESC} Activates (or deactivates) the full P-Switch routine (including music and timer). <Badge type="tip">Level only</Badge>
====
   {NAME} Misc.doPSwitchRaw(
      
[bool](/types/bool.md) activate

)
    {RET} [nil](/types/nil.md)
   {DESC} Activates (or deactivates) the P-Switch state. This version does not affect the timer or music, and instead acts as a permanent switch. <Badge type="tip">Level only</Badge>
====
   {NAME} Misc.cheatBuffer()
    {RET} [string](/types/string.md) cheatBufferText
   {DESC} Returns the cheat buffer text.
====
   {NAME} Misc.cheatBuffer(
      
[string](/types/string.md) value

)
    {RET} [nil](/types/nil.md)
   {DESC} Sets the cheat buffer text to the provided value.
====
   {NAME} Misc.doBombExplosion(
      
[number](/types/number.md) x,

[number](/types/number.md) y,

[number](/types/number.md) type

)
    {RET} [nil](/types/nil.md)
   {DESC} Legacy method of creating bomb explosions. For more information on the newer method and explosion types, check out the [Explosion](/reference/explosion.md) class. <Badge type="tip">Level only</Badge> <Badge type="tip">Use Explosion.spawn</Badge>
====
   {NAME} Misc.getCursorPosition()
    {RET} [number](/types/number.md) x, [number](/types/number.md) y
   {DESC} Returns 2 values for x and y in framebuffer space, so NaN if the mouse is outside of the window.
====
   {NAME} Misc.setCursor(

[Texture](/types/texture.md) image,
      
[number](/types/number.md) xHotspot,

[number](/types/number.md) yHotspot

   )
    {RET} [nil](/types/nil.md)
   {DESC} Sets the cursor appearance. Set the image to nil to reset it to default, or false to hide the cursor.
====
   {NAME} Misc.GetKeyState(
      
[number](/types/number.md) vk

)
    {RET} [bool](/types/bool.md) isPressed
   {DESC} Returns the state of the given key by the key code. vk is the virtual-key code. You can find out more about them [here](https://docs.microsoft.com/de-de/windows/win32/inputdev/virtual-key-codes?redirectedfrom=MSDN) and are able to pass the contents from that page directly into this function (i.e. VK_4).
{ENDTABLE}


### Static Beat Timer functions
{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} Misc.setBPM(
      
[number](/types/number.md) bpm
      
)
    {RET} [nil](/types/nil.md)
   {DESC} Sets the BPM for the beat timer. 
====
   {NAME} Misc.getBPM()
    {RET} [number](/types/number.md) bpm
   {DESC} Gets the current BPM for the beat timer.
====
   {NAME} Misc.setBeatTime(
      
[number](/types/number.md) beatLength
      
)
    {RET} [nil](/types/nil.md)
   {DESC} Sets the current length of a beat.
====
   {NAME} Misc.setBeepCount(
      
[number](/types/number.md) startTime,

[number](/types/number.md) numBeeps
      
)
    {RET} [nil](/types/nil.md)
   {DESC} Sets the number of beeps before a beat block state change. Start time is the normalized (0-1) point between two beats when the beeps start.
====
   {NAME} Misc.getBeatTime()
    {RET} [number](/types/number.md) beatLength
   {DESC} Gets the current length of a beat.
====
   {NAME} Misc.getBeatClock()
    {RET} [number](/types/number.md) beatTime
   {DESC} Gets the current beat timer value.
====
   {NAME} Misc.setBeatSignature(
      
[number](/types/number.md) signature
      
)
    {RET} [nil](/types/nil.md)
   {DESC} Sets the beat signature.
====
   {NAME} Misc.getBeatSignature()
    {RET} [number](/types/number.md) signature
   {DESC} Gets the current beat signature.
{ENDTABLE}

### Static Beat Timer variables
| Type | Field | Read-only? | Description |
| --- | --- | --- | --- |
| [bool](/types/bool.md) | Misc.beatUsesMusicClock | No | Whether or not the beat uses the current song's music clock as the beat timer. |
| [number](/types/number.md) | Misc.beatOffset | No | Offset of the beat timer relative to the song. |

### Static glitch fix manipulation functions
{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} Misc.SetNPCDownwardClipFix(

[bool](/types/bool.md) enabled

)
    {RET} [nil](/types/nil.md)
   {DESC} Sets the state of the NPC downward clip fix (enabled by default).
====
   {NAME} Misc.SetNPCCeilingBugFix(

[bool](/types/bool.md) enabled

)
    {RET} [nil](/types/nil.md)
   {DESC} Sets the state of the NPC-cling-to-ceiling fix (enabled by default).
====
   {NAME} Misc.SetLinkClowncarFairyFix(

[bool](/types/bool.md) enabled

)
    {RET} [nil](/types/nil.md)
   {DESC} Sets the state of the Link clowncar fairy fix (enabled by default).
====
   {NAME} Misc.SetPowerupPowerdownPositionFix(

[bool](/types/bool.md) enabled

)
    {RET} [nil](/types/nil.md)
   {DESC} Sets the state of the fix for powerup/powerdown animation causing jitters in player position (enabled by default).
====
   {NAME} Misc.SetPlayerDownwardClipFix(

[bool](/types/bool.md) enabled

)
    {RET} [nil](/types/nil.md)
   {DESC} Sets the state of the Player downward clip fix (enabled by default).
====
   {NAME} Misc.SetPlayerFilterBounceFix(

[bool](/types/bool.md) enabled

)
    {RET} [nil](/types/nil.md)
   {DESC} Sets the state of the Player filter block bounce glitch fix (enabled by default).
====
   {NAME} Misc.SetNPCSectionFix(

[bool](/types/bool.md) enabled

)
    {RET} [nil](/types/nil.md)
   {DESC} Sets the state of the NPC section setting fix (enabled by default).
====
   {NAME} Misc.SetSlideJumpFix(

[bool](/types/bool.md) enabled

)
    {RET} [nil](/types/nil.md)
   {DESC} Sets the state of the slide jump fix (enabled by default).
====
   {NAME} Misc.SetFenceBugFix(

[bool](/types/bool.md) enabled

)
    {RET} [nil](/types/nil.md)
   {DESC} Sets the state of the fence speed fix (enabled by default). <Note type="warning">Player field climbingBGO won't work and player offset 0x2C is always -1 if this fix is disabled!</Note>
====
   {NAME} ___(

[bool](/types/bool.md) enabled

)
    {RET} [nil](/types/nil.md)
   {DESC} Sets the state of the invisible fence fix?
{ENDTABLE}


### Static Time functions
{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} Misc.SetEngineTPS(

[number](/types/number.md) tps

)
    {RET} [nil](/types/nil.md)
   {DESC} Sets the ticks per second for the engine.
====
   {NAME} Misc.GetEngineTPS()
    {RET} [number](/types/number.md) tps
   {DESC} Returns the current ticks per second.
====
   {NAME} Misc.SetEngineSpeed(

[number](/types/number.md) ratio

)
    {RET} [nil](/types/nil.md)
   {DESC} Sets the speed for the engine.
====
   {NAME} Misc.GetEngineSpeed()
    {RET} [number](/types/number.md) ratio
   {DESC} Gets the current engine speed.
====
   {NAME} Misc.SetEngineTickDuration(

[number](/types/number.md) duration

)
    {RET} [nil](/types/nil.md)
   {DESC} Sets the duration of a tick in milliseconds.
====
   {NAME} Misc.SetNominalTPS(

[number](/types/number.md) tps

)
    {RET} [nil](/types/nil.md)
   {DESC} Sets the ticks per second for lunatime calculations. The nominal TPS should not be altered after the level started, as it could break timing calculations.
====
   {NAME} Misc.GetEngineTPS()
    {RET} [number](/types/number.md) tps
   {DESC} Returns the current ticks per second for lunatime calculations. The nominal TPS should not be altered after the level started, as it could break timing calculations.
====
   {NAME} Misc.SetNominalSpeed(

[number](/types/number.md) ratio

)
    {RET} [nil](/types/nil.md)
   {DESC} Sets the speed for lunatime calculations. The nominal TPS should not be altered after the level started, as it could break timing calculations.
====
   {NAME} Misc.GetEngineSpeed()
    {RET} [number](/types/number.md) ratio
   {DESC} Gets the current engine speed.
====
   {NAME} Misc.SetNominalTickDuration(

[number](/types/number.md) duration

)
    {RET} [nil](/types/nil.md)
   {DESC} Sets the duration of a tick in milliseconds.
====
   {NAME} Misc.GetEngineTickDuration()
    {RET} [number](/types/number.md) duration
   {DESC} Gets the current duration of a tick in milliseconds.
{ENDTABLE}

### Static game state manipulation functions
{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} Misc.openPauseMenu()
    {RET} [nil](/types/nil.md)
   {DESC} Opens the pause menu.
====
   {NAME} Misc.pause(

[bool](/types/bool.md) waitForDrawingQueue)

)
    {RET} [nil](/types/nil.md)
   {DESC} Pauses the entire game. If waitForDrawingQueue is set to true, it will wait for the graphics drawing queue to be empty before pausing. This allows it to work in events such as onDraw (that happen after SMBX execution in the frame), but may cause it to function incorrectly in events like onTick (that happen before SMBX execution in the frame).
====
   {NAME} Misc.unpause()
    {RET} [nil](/types/nil.md)
   {DESC} Unpauses the game. Counterpoint to pause().
====
   {NAME} Misc.isPaused()
    {RET} [bool](/types/bool.md) isPaused
   {DESC} Returns whether or not the game is paused, either by lua or natively.
====
   {NAME} Misc.isPausedByLua()
    {RET} [bool](/types/bool.md) isPaused
   {DESC} Returns whether or not the game is paused. Only takes pauses from pause() and unpause() into account.
====
   {NAME} Misc.saveGame()
    {RET} [nil](/types/nil.md)
   {DESC} Saves the game to the current save slot.
====
   {NAME} Misc.exitGame()
    {RET} [nil](/types/nil.md)
   {DESC} Exits the game to the main menu.
====
   {NAME} Misc.exitEngine()
    {RET} [nil](/types/nil.md)
   {DESC} Instantly shuts down SMBX.
====
   {NAME} Misc.inEditor()
    {RET} [bool](/types/bool.md) inEditor
   {DESC} Returns true if the game is currently being played from the editor.
====
   {NAME} Misc.inMarioChallenge()
    {RET} [bool](/types/bool.md) inMarioChallenge
   {DESC} Returns true if the Mario Challenge is currently active.
====
   {NAME} Misc.isGifRecording()
    {RET} [bool](/types/bool.md) isRecordingGif
   {DESC} Returns true if the gif recorder is currently active.
====
   {NAME} Misc.isFullscreen()
    {RET} [bool](/types/bool.md) isFullscreen
   {DESC} Returns true if the game is currently in full screen mode.
====
   {NAME} Misc.setFullscreen([bool](/types/bool.md) fullscreen)
    {RET} [nil](/types/nil.md)
   {DESC} Sets the fullscreen mode of the game.
====
   {NAME} Misc.saveSlot()
    {RET} [number](/types/number.md) slot
   {DESC} Returns the current save slot.
====
   {NAME} Misc.saveSlot(

[number](/types/number.md) slot

)
    {RET} [nil](/types/nil.md)
   {DESC} Sets the current save slot to the given value. Future saving will record to the new save slot. <Note type="warning">This won't reload any save data, so use carefully!</Note>
====
   {NAME} Misc.loadEpisode(

[string](/types/string.md) episodeTitle

)
    {RET} [bool](/types/bool.md) didLoad
   {DESC} Loads another episode given by the episode title. If the episode was not found then <b>false</b> is returned. If succeeded, <b>true</b> is returned. The actual switch is done during the next internal SMBX code execution (after the next onTick event finishes). This means that additional code may run between calling this function and the game loading the new episode. <b>Note that holding the run button may interrupt this process and the game may stay at the title screen.</b>
{ENDTABLE}

### Static controller state functions
{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} Misc.RumbleSelectedController(

[number](/types/number.md) playerIndex,

[number](/types/number.md) milliseconds,

[number](/types/number.md) strength

)
    {RET} [nil](/types/nil.md)
   {DESC} Rumbles the selected player's controller for the set length with the set strength. The arguments default to 1, 1000 and 1.0.
====
   {NAME} Misc.GetSelectedControllerPowerLevel(

[number](/types/number.md) playerIndex

)
    {RET} [number](/types/number.md) powerLevel
   {DESC} Returns the selected player's controller's power level (between 0 for empty and 4 for full).
====
   {NAME} Misc.GetSelectedControllerName(

[number](/types/number.md) playerIndex

)
    {RET} [string](/types/string.md) name
   {DESC} Returns the selected player's controller's name ("Unknown" if none).
{ENDTABLE}
====
   {NAME} Misc.GetSelectedControllerStickPosition(
      
[number](/types/number.md) playerIndex

)
    {RET} [number](/types/number.md) x, [number](/types/number.md) y
   {DESC} Returns the position of the control stick for the given controller.
{ENDTABLE}


### Static loadscreen functions

<Note type="warning">Static loadscreen functions can only be called from loadscreen.lua!</Note>

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} Misc.setLoadScreenTimeout([number](/types/number.md) seconds)
    {RET} [nil](/types/nil.md)
   {DESC} Forces the load screen to be alive for a minimum amount of time. By default, the load screen finishes as soon as it's able to, but using this function, a minimum length can be enforced (for example, 0.5 for half a second).
====
   {NAME} Misc.getLoadingFinished()
    {RET} [bool](/types/bool.md) isFinished
   {DESC} Returns whether loading has finished.
{ENDTABLE}

### Static debug functions
{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} Misc.dialog(

[vararg](/concepts/vararg.md) of [object](/types/object.md) debugInfo

)
    {RET} [nil](/types/nil.md)
   {DESC} Spawns a popup dialog message with each argument in its own line. Useful for debugging code that doesn't run every frame.
====
   {NAME} Misc.richDialog(

[string](/types/string.md) title,

[object](/types/object.md) content,

[bool](/types/bool.md) readOnly

)
    {RET} [nil](/types/nil.md)
   {DESC} Spawns a more fancy popup dialog message.
====
   {NAME} Misc.setDialogDepth(

[number](/types/number.md) depth

)
    {RET} [nil](/types/nil.md)
   {DESC} Sets the depth (verbosity) of Misc.dialog and Misc.richDialog printouts.
====
   {NAME} Misc.monitor(

[object](/types/object.md) object,

[table](/types/table.md) of [string](/types/string.md) fields,

[string](/types/string.md) title

)
    {RET} [nil](/types/nil.md)
   {DESC} Live monitors a list of fields that belong to the given object. A title can be provided to organize the printed data.
====
   {NAME} Misc.stopMonitoring(

[object](/types/object.md) object

)
    {RET} [nil](/types/nil.md)
   {DESC} Stops monitoring an object.
====
   {NAME} Misc.warn(

[string](/types/string.md) warningMessage,

[number](/types/number.md) severity

)
    {RET} [nil](/types/nil.md)
   {DESC} Spawns a little red warning in the corner of the screen during <b>edit mode</b>. Once the level is reloaded, it will display a more elaborate call stack dialog with the warning message. The higher the severity, the further back the warning appears in this dialog. Useful for notifying users of deprecated code or unintended situations.
{ENDTABLE}

### Static game window functions

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} Misc.setWindowTitle(

[string](/types/string.md) title

)
    {RET} [nil](/types/nil.md)
   {DESC} Sets the title of the game window.
====
   {NAME} Misc.setWindowIcon(

[Texture](/types/texture.md) icon

)
    {RET} [nil](/types/nil.md)
   {DESC} Sets the icon of the game window.
{ENDTABLE}

### Static file path and name functions
{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} Misc.getFullPath(

[string](/types/string.md) file

)
    {RET} [string](/types/string.md) filePath
   {DESC} Returns the absolute path to the given file.
====
   {NAME} Misc.levelFolder()
    {RET} [string](/types/string.md) path or [nil](/types/nil.md)
   {DESC} Returns the name of the current level folder. If there is none, nil is returned. <Badge type="tip">Level only</Badge>
====
   {NAME} Misc.levelPath()
    {RET} [string](/types/string.md) path or [nil](/types/nil.md)
   {DESC} Returns the path of the current level folder. If there is none, nil is returned. <Badge type="tip">Level only</Badge>
====
   {NAME} Misc.episodePath()
    {RET} [string](/types/string.md) path
   {DESC} Returns the path to the current episode. If not called from within an episode, the SMBX root path is returned.
====
   {NAME} Misc.episodeName()
    {RET} [string](/types/string.md) name
   {DESC} Returns the name of the current episode. If not called from within an episode, "SMBX2" is returned.
====
   {NAME} Misc.listFiles(

[string](/types/string.md) path

)
    {RET} [table](/types/table.md) of [string](/types/string.md) fileNames
   {DESC} Returns a list of files in the given path. The path can start from the SMBX Directory, or can be an absolute path.
====
   {NAME} Misc.listLocalFiles(

[string](/types/string.md) path

)
    {RET} [table](/types/table.md) of [string](/types/string.md) fileNames
   {DESC} Returns a list of files in the given path. The path starts from the current level folder (when in a level) or the current episode folder (when on the overworld). If the path is an empty string, then all files from that directory will be returned. If you wish to access the episode folder from a level, you must specify ".." as the path.
====
   {NAME} Misc.listDirectories(

[string](/types/string.md) path

)
    {RET} [table](/types/table.md) of [string](/types/string.md) folderNames
   {DESC} Returns a list of folder names in the given folder. The path can start from the SMBX Directory, or can be an absolute path.
====
   {NAME} Misc.resolveFile(

[string](/types/string.md) path

)
    {RET} [string](/types/string.md) filePath or [nil](/types/nil.md)
   {DESC} Searches for a file given by the path in the following directories:<br>Custom level folder -> Episode folder -> {SMBX}/data/scripts folder -> {SMBX}/data folder.<br> The absolute path will be returned (or nil if nothing was found).
====
   {NAME} Misc.multiResolveFile(

[vararg](/concepts/vararg.md) of [string](/types/string.md) path

)
    {RET} [string](/types/string.md) filePath or [nil](/types/nil.md)
   {DESC} Searches for a file given by the path in the following directories:<br>Custom level folder (if called in a level) -> Episode folder -> {SMBX}/data/scripts folder -> {SMBX}/data folder.<br> The absolute path will be returned (or nil if nothing was found). This function differs from the other resolveFile functions in that it takes multiple file strings as arguments. All strings are searched for in one directory (in the order they're passed as arguments) before the next one is searched in.
====
   {NAME} Misc.resolveGraphicsFile(

[string](/types/string.md) path

)
    {RET} [string](/types/string.md) filePath or [nil](/types/nil.md)
   {DESC} Searches for a file given by the path in the following directories:<br>Custom level folder -> Episode folder -> {SMBX}/data/graphics folder.<br> The absolute path will be returned (or nil if nothing was found).
====
   {NAME} Misc.resolveSoundFile(

[string](/types/string.md) path

)
    {RET} [string](/types/string.md) filePath or [nil](/types/nil.md)
   {DESC} Searches for a file given by the path in the following directories:<br>Custom level folder -> Episode folder -> {SMBX}/data/sounds folder -> {SMBX}/data/sounds/extended folder.<br> The absolute path will be returned (or nil if nothing was found).
   ====
   {NAME} Misc.resolveMusicFile(

[string](/types/string.md) path

)
    {RET} [string](/types/string.md) filePath or [nil](/types/nil.md)
   {DESC} Searches for a music file given by the path in the following directories:<br>Episode folder -> {SMBX}/data folder -> {Episode folder + music folder -> {SMBX}/data/music folder.<br> The absolute path will be returned (or nil if nothing was found).
====
   {NAME} Misc.resolveDirectory(

[string](/types/string.md) path

)
    {RET} [string](/types/string.md) filePath or [nil](/types/nil.md)
   {DESC} Searches for a directory given by the path in the following directories:<br>Custom level folder -> Episode folder -> {SMBX}/data/scripts folder -> {SMBX}/data folder.<br> The absolute path will be returned (or nil if nothing was found).
{ENDTABLE}

### Static collision group functions

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} Misc.canCollideWith(

[Block](/reference/block.md) or [NPC](/reference/npc.md) or [Player](/reference/player.md) first,

[Block](/reference/block.md) or [NPC](/reference/npc.md) or [Player](/reference/player.md) second

)
    {RET} [bool](/types/bool.md) canCollide
   {DESC} Checks whether two objects collide with eachother.
====
   {NAME} Misc.collidesWithGroup(

[Block](/reference/block.md) or [NPC](/reference/npc.md) or [Player](/reference/player.md) object,

[string](/types/string.md) collisionGroup

)
    {RET} [bool](/types/bool.md) canCollide
   {DESC} Checks whether an object collides with objects in a given collision group.
{ENDTABLE}

### Static collision group variables
| Type | Field | Read-only? | Description |
| --- | --- | --- | --- |
| [table](/types/table.md) of [table](/types/table.md) of [bool](/types/bool.md) | Misc.groupsCollide | Yes | The collision matrix. Misc.groupsCollide\[a\]\[b\] contains whether groups a and b collides and can be modified. <Note type="warning">It is ill-advised to use this variable with only one index!</Note>|

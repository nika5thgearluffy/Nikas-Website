# Audio

Audio is used for manipulation of the game's background music. It used to be also responsible for sound effects. However, sound effect handling has since been moved to [SFX](/reference/SFX.md). The old SFX-related part of the Audio interface is documented [here](https://wohlsoft.ru/pgewiki/LunaLua_global_Sound_and_Music_functions).

## Static Members

These elements are static to the class itself and can be accessed like so:
```lua
Audio.MusicChange(player.section, 1)
```

### Static Functions

#### Common Functions

These functions are common music functions that provide dynamic usage of music playback with the ability to play any custom music in a section. Fade-in and fade-out effects are available as well. [List of supported audio formats](https://wohlsoft.ru/pgewiki/SDL2_mixer#Music_Formats)

| Function | Return Values | Description |
| --- | --- | --- |
| Audio.MusicChange([number](/types/number.md) section, [number](/types/number.md) musicID, [number](/types/number.md) fadeDurationMS) | [nil](/types/nil.md) | Changes a section's music to the ID of basegame music specified. Set to 0 for no music. Fade duration can optionally be set to specify for how many milliseconds the music should fade in. The path supports additional trailing parameters based on the type of file. See [Music Parameters](/reference/audio.md#music-parameters) |
| Audio.MusicChange([number](/types/number.md) section, [string](/types/string.md) musicName, [number](/types/number.md) fadeDurationMS) | [nil](/types/nil.md) | Changes a section's music to a custom music track of the given name. This uses SMBX's music resolution function, which roots music paths in the episode folder. If you have music in a subfolder, provide the path starting from the episode folder (example: music/mysong.ogg). The path supports additional trailing parameters based on the type of file. See [Music Parameters](/reference/audio.md#music-parameters). Fade duration can optionally be set to specify for how many milliseconds the music should fade in. |
| Audio.MusicFadeOut([number](/types/number.md) section, [number](/types/number.md) fadeDurationMS) | [nil](/types/nil.md) | Stops the music of a section with a fade out effect (if a player is in the section). Afterwards, the music is set to silence (ID 0). |
| Audio.MusicIsPlaying() | [bool](/types/bool.md) isPlaying | Returns if any music is currently playing. |
| Audio.MusicIsPaused() | [bool](/types/bool.md) isPaused | Returns if any music is currently paused. |
| Audio.MusicIsFading() | [bool](/types/bool.md) isFading | Returns if any music is currently fading in or out. |
| Audio.MusicVolume() | [number](/types/number.md) volume | Returns the background music's volume. Default is 64, max is 128. |
| Audio.MusicVolume([number](/types/number.md) volume) | [nil](/types/nil.md) | Sets the background music's volume. Default is 64, max is 128. |
| Audio.MusicRewind() | [nil](/types/nil.md) | Rewinds the current music back to the start. Does not reverse the music playback. |
| Audio.MusicGetInstChannelCount() | [number](/types/number.md) count | Gets the number of instrument channels in the current track (used for tracker files like SPC). |
| Audio.MusicInstChannelMute([number](/types/number.md) id) | [nil](/types/nil.md) | Mutes the instrument channel of the given index (used for tracker files like SPC). |
| Audio.MusicInstChannelUnmute([number](/types/number.md) id) | [nil](/types/nil.md) | Unmutes the instrument channel of the given index (used for tracker files like SPC). |
| Audio.MusicGetTempo() | [number](/types/number.md) tempo | Gets the tempo of the current track. -1 if unsupported. |
| Audio.MusicSetTempo([number](/types/number.md) tempo) | [nil](/types/nil.md) | Sets the tempo of the current track. |
| Audio.MusicGetPitch() | [number](/types/number.md) pitch | Gets the pitch of the current track. -1 if unsupported. |
| Audio.MusicSetPitch([number](/types/number.md) pitch) | [nil](/types/nil.md) | Sets the pitch of the current track. |
| Audio.MusicGetSpeed() | [number](/types/number.md) speed | Gets the speed of the current track. -1 if unsupported. |
| Audio.MusicSetSpeed([number](/types/number.md) speed) | [nil](/types/nil.md) | Sets the speed of the current track. |
| Audio.MusicTitle() | [string](/types/string.md) title | Returns the music title from metadata (if empty, filename will be returned) |
| Audio.MusicTitleTag() | [string](/types/string.md) titleTag | Returns the title tag from metadata (if empty, returns an empty string) |
| Audio.MusicArtistTag() | [string](/types/string.md) artistTag | Returns the artist tag from metadata (if empty, returns an empty string) |
| Audio.MusicAlbumTag() | [string](/types/string.md) albumTag | Returns the album tag from metadata (if empty, returns an empty string) |
| Audio.MusicCopyrightTag() | [string](/types/string.md) copyrightTag | Returns the copyright tag from metadata (if empty, returns an empty string) |
| Audio.MusicGetPos() | [number](/types/number.md) positionSeconds | Returns the current position of the playing music in seconds. |
| Audio.MusicSetPos([number](/types/number.md) seconds) | [nil](/types/nil.md) | Sets the current position of the playing music in seconds. |
| Audio.MusicGetLoopStart() | [number](/types/number.md) loopStart | Returns the start of the music's loop. Returns -1 if none is set. |
| Audio.MusicGetLoopLength() | [number](/types/number.md) loopLength | Returns the length of the music's loop. Returns -1 if none is set. |
| Audio.MusicGetLoopEnd() | [number](/types/number.md) loopEnd | Returns the end of the music's loop. Returns -1 if none is set. |
| Audio.MusicClock() | [number](/types/number.md) currentTime | Returns the current playback time of the music. |
| Audio.MixedSfxVolume() | [number](/types/number.md) currentVolume | Returns the current volume of sound effects (including those emitted from SMBX 1.3). The default and maximum value is 128. |
| Audio.MixedSfxVolume([number](/types/number.md) newVolume) | [nil](/types/nil.md) | Sets the current volume of sound effects (including those emitted from SMBX 1.3). The default and maximum value is 128. |
| Audio.MusicGet([bool](/types/bool.md) withArguments) | [string](/types/string.md) filepath | Returns the music that is currently playing on a level/world (if silent, returns an empty string). A [boolean](/types/bool.md) can be set to get the music with or without SDL arguments. |
| Audio.MusicGetArguments() | [string](/types/string.md) arguments | Returns the music arguments set with the music that is playing on a level/world. Can be separately added with Audio.MusicGet(false) in Lua. |
| Audio.MusicCount() | [table](/types/table.md) musicCounts | Gets the count of all music in all variations. Sorted as world music first, special music next, then level music last. |

#### SDL Stream Functions

These advanced functions enable more fine control over music playback by hooking into the SDL Mixer X stream directly and playing music regardless of current section. In order to use them, you need to first seize the audio stream. Once done using it, you should release it.

| Function | Return Values | Description |
| --- | --- | --- |
| Audio.SeizeStream([number](/types/number.md) section) | [nil](/types/nil.md) | Seizes the audio stream for a certain section. Specify -1 for all sections or the world map. Seizing the stream allows the below functions to be used. |
| Audio.ReleaseStream([number](/types/number.md) section) | [nil](/types/nil.md) | Releases the audio stream for a certain section. Specify -1 for all sections or the world map. Once released, music control is handed back to SMBX. |
| Audio.resetMciSections() | [nil](/types/nil.md) | Releases the audio stream for all seized sections. |
| Audio.MusicOpen([string](/types/string.md) filename) | [nil](/types/nil.md) | Opens a specified music file. |
| Audio.MusicPlay() | [nil](/types/nil.md) | Plays the currently loaded music. |
| Audio.MusicPlayFadeIn([number](/types/number.md) fadeMilliseconds) | [nil](/types/nil.md) | Plays the currently loaded music, fading it in over the specified time. |
| Audio.MusicStop() | [nil](/types/nil.md) | Stops the currently loaded music. |
| Audio.StopFadeOut([number](/types/number.md) fadeMilliseconds) | [nil](/types/nil.md) | Stops the currently loaded music, fading it out over the specified time. |
| Audio.MusicPause() | [nil](/types/nil.md) | Pauses the currently loaded music. |
| Audio.MusicResume() | [nil](/types/nil.md) | Resumes the currently loaded music. |

## Music Parameters

Certain music formats support extra parameters. You can find more info [here](https://wohlsoft.ru/pgewiki/SDL_Mixer_X#Path_arguments).

These parameters are appended to a music path. This works in the editor as well as when loading music via MusicChange or MusicOpen:
```lua
-- Plays the 21st track of the NSF with a gain of 1.0 and speed of 1.5x
Audio.MusicChange("mymusic.nsf|21;g=1.0;t=1.5")
-- Plays the OGG file with multi track support, 4 channels and 11 mono tracks.
Audio.MusicChange("mymusic.ogg|m1;c4;r11")
```

## SoundOverride

You can override SMBX sound effects by accessing Audio.sounds\[sfxID\], allowing runtime replacement of sound effects like so:
```lua
local myNewSound = SFX.open("mynewsound.ogg")
Audio.sounds[1].sfx = myNewSound

Audio.sounds[1].sfx = nil -- resets the sound back to the default sound
```
A list of SFX IDs can be found [here](/concepts/sfx-list.md).

| Function | Return Values | Description |
| --- | --- | --- |
| Audio.sounds\[sfxID\].sfx | [MixChunk](/types/MixChunk.md) soundObject | The current sound object used for the given sound effect ID |
| Audio.sounds\[sfxID\].muted | [bool](/types/bool.md) muted | Whether the sound effect is muted for the given sound effect ID |

You can also override SMBX music set as well, allowing runtime replacement of music like so (Replaces the SMB3 Overworld theme):
```lua
local myNewSong = Misc.resolveMusicFile("songs/my-new-level-music.ogg")
Audio.MusicChangeIndex(3, 1, myNewSong)
```

A list of music IDs can be found in the music.ini file on your SMBX2R installation.

| Function | Return Values | Description |
| --- | --- | --- |
| Audio.MusicGetIndex([number](/types/number.md) musicType, [number](/types/number.md) musicID) | [string](/types/string.md) filePath | Returns a song that is set from the music.ini system. |
| Audio.MusicChangeIndex([number](/types/number.md) musicType, [number](/types/number.md) musicID, [string](/types/string.md) filePath) | [nil](/types/nil.md) | Changes a song that is set from the music.ini system. If playing the music that is set, the music will change automatically when this is run. |

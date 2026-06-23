# SFX

The SFX class allows you to play and manipulate sound effects.

## Static members

These elements are static to the class itself and can be accessed like so:
```lua
local mySound = SFX.play(1)
```

### Constants

Certain values are constant and can be used as enum configurations in other functions.

| Constant | Type | Value | Description |
| --- | --- | --- | --- |
| SFX.SOURCE_POINT | [number](/types/number.md) | 0 | An audio source type that originates from a single point. |
| SFX.SOURCE_CIRCLE | [number](/types/number.md) | 1 | An audio source type that originates from a circle. |
| SFX.SOURCE_BOX | [number](/types/number.md) | 2 | An audio source type that originates from an axis-aligned box. |
| SFX.SOURCE_LINE | [number](/types/number.md) | 3 | An audio source type that originates from a line. |
| SFX.LISTEN_PLAYER | [number](/types/number.md) | 0 | A listening position centered on the player. |
| SFX.LISTEN_CAMERA | [number](/types/number.md) | 1 | A listening position centered on the middle of the camera. |
| SFX.FALLOFF_NONE | [function](/types/function.md) | ![No Audio Falloff](/images/audiofalloff_none.png) | Audio distance falloff mode that does not fade the audio with distance. |
| SFX.FALLOFF_LINEAR | [function](/types/function.md) | ![Linear Audio Falloff](/images/audiofalloff_linear.png) | Audio distance falloff mode that fades the audio linearly with distance. |
| SFX.FALLOFF_SQUARE | [function](/types/function.md) | ![Square Audio Falloff](/images/audiofalloff_square.png) | Audio distance falloff mode that fades the audio with the inverse square of the distance (closest to physically accurate). |

### Static functions

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} SFX.create(

[named](/types/table.md) args
       
)
    {RET} [AudioSource](/reference/SFX.md#audiosource) source
   {DESC} Creates a new physical audio source in the world.
   
<details><summary>Arguments</summary>

| Argument | Description |
| --- | --- |
| [number](/types/number.md) x <Badge type="tip">Required</Badge>  | X position of the audio source. |
| [number](/types/number.md) y <Badge type="tip">Required</Badge>  | Y position of the audio source. |
| [number](/types/number.md) falloffRadius <Badge type="tip">Required</Badge>  | Distance from the source that the listener needs to be before the sound is silent. |
| [number](/types/number.md) or [string](/types/string.md) or [MixChunk](/types/MixChunk.md) sound  | The sound ID/file path/object to play. |
| [function](/types/function.md) falloffType | A falloff function to use, formatted as `falloff(squaredFalloff, squaredDistance)`. Can also use the `SFX.FALLOFF_` constants. Defaults to `SFX.FALLOFF_SQUARE`. |
| [number](/types/number.md) type | The shape of the audio source, from the `SFX.SOURCE_` constants. Defaults to `SFX.SOURCE_POINT`. |
| [bool](/types/bool.md) play | Whether the sound should play immediately. Defaults to `true`. |
| [number](/types/number.md) loops | The number of loops for this sound to play for. 0 to loop forever. Defaults to `0`. |
| [number](/types/number.md) volume | The volume of this audio source, between 0 and 1. Defaults to 1. |
| [object](/types/object.md) parent | An object to attach this audio source to. Any object will be acceptable so long as it has both an `x` and `y` member field. |
| [table](/types/table.md) of [string](/types/string.md) tags | A list of string tags to apply to this audio object. Allows volume to be adjusted for every sound with a given tag. |
| [string](/types/string.md) tag | A single string tag to apply to this audio object. Allows volume to be adjusted for every sound with a given tag.|
| [number](/types/number.md) sourceRadius <Badge type="tip">If type is CIRCLE</Badge>  | The radius of the audio source circle. |
| [number](/types/number.md) sourceWidth <Badge type="tip">If type is BOX</Badge>  | The width of the audio source box. |
| [number](/types/number.md) sourceHeight <Badge type="tip">If type is BOX</Badge>  | The height of the audio source box. |
| [Vector2](/reference/vector.md#vector2) sourceVector <Badge type="tip">If type is LINE</Badge>  | The vector describing the source line. The line will span from `{x,y}` to `{x,y}+sourceVector`. |

</details>
====
   {NAME} SFX.play(

[number](/types/number.md) or [string](/types/string.md) or [MixChunk](/types/MixChunk.md) sound
       
)
    {RET} [SoundEffect](/reference/SFX.md#soundeffect) sound
   {DESC} Plays a sound effect once. 
====
   {NAME} SFX.play(

[number](/types/number.md) or [string](/types/string.md) or [MixChunk](/types/MixChunk.md) sound
       
)
    {RET} [SoundEffect](/reference/SFX.md#soundeffect) sound
   {DESC} Plays a sound effect once. 
====
   {NAME} SFX.play(

[number](/types/number.md) or [string](/types/string.md) or [MixChunk](/types/MixChunk.md) sound,

[number](/types/number.md) volume
       
)
    {RET} [SoundEffect](/reference/SFX.md#soundeffect) sound
   {DESC} Plays a sound effect once with the given volume.
====
   {NAME} SFX.play(

[number](/types/number.md) or [string](/types/string.md) or [MixChunk](/types/MixChunk.md) sound,

[number](/types/number.md) volume,

[number](/types/number.md) loops
       
)
    {RET} [SoundEffect](/reference/SFX.md#soundeffect) sound
   {DESC} Plays a sound effect with the given volume and number of loops (0 to loop forever). 
====
   {NAME} SFX.play(

[number](/types/number.md) or [string](/types/string.md) or [MixChunk](/types/MixChunk.md) sound,

[number](/types/number.md) volume,

[number](/types/number.md) loops,

[number](/types/number.md) delay
       
)
    {RET} [SoundEffect](/reference/SFX.md#soundeffect) sound
   {DESC} Plays a sound effect with the given volume and number of loops (0 to loop forever), with a specified buffer delay. The same sound cannot be played within `delay` frames of each other. 
====
   {NAME} SFX.play(

[named](/types/table.md) args
       
)
    {RET} [SoundEffect](/reference/SFX.md#soundeffect) sound
   {DESC} Plays a sound effect with the given arguments.
   
<details><summary>Arguments</summary>

| Argument | Description |
| --- | --- |
| [number](/types/number.md) or [string](/types/string.md) or [MixChunk](/types/MixChunk.md) sound <Badge type="tip">Required</Badge>  | The sound ID/file path/object to play. |
| [number](/types/number.md) loops | The number of loops for this sound to play for. 0 to loop forever. Defaults to `1`. |
| [number](/types/number.md) volume | The volume of this audio source, between 0 and 1. Defaults to `1`. |
| [number](/types/number.md) pan | The left/right panning of this audio clip, between -1 and 1. Defaults to `0`. |
| [table](/types/table.md) of [string](/types/string.md) tags | A list of string tags to apply to this audio object. Allows volume to be adjusted for every sound with a given tag. |
| [string](/types/string.md) tag | A single string tag to apply to this audio object. Allows volume to be adjusted for every sound with a given tag.|
| [number](/types/number.md) delay | The number of frames before the same sound effect can be played again. Defaults to `4`. |

</details>
====
   {NAME} SFX.open(

[string](/types/string.md) path
       
)
    {RET} MixChunk soundObject
   {DESC} Loads a sound file into a MixChunk.

{ENDTABLE}

### Static fields

{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE} [number](/types/number.md)
  {FIELD} SFX.listener
     {RO} No
   {DESC} Should the audio from [AudioSource](/reference/SFX.md#audiosource) objects be listened to from the player (`SFX.LISTEN_PLAYER`) or the camera (`SFX.LISTEN_CAMERA`)?
====
   {TYPE} [table](/types/table.md) of [number](/types/number.md)
  {FIELD} SFX.volume
     {RO} No
   {DESC} A special table that automatically populates with any tag provided to a sound effect. The table contains a series of volume values that will multiply with every [AudioSource](/reference/SFX.md#audiosource) and [SoundEffect](/reference/SFX.md#soundeffect) that contains that tag. This can be used to adjust the volume of many different sounds simultaneously, without having to keep references to each one individually.
   There are two special built-in tags: the `MASTER` tag is applied to every sound played via the [SFX](/reference/SFX.md) class, and `UNTAGGED` is applied to every sound without a tag (ignoring `MASTER`).
   Here's a couple examples:
   ```lua
   SFX.volume.MASTER = 0.5 --set all sounds to half their normal volume
   SFX.volume.myTag = 2 --double the volume of all sounds tagged with "myTag"
   ```
   ```lua
   SFX.volume.UNTAGGED = 2 --double the volume of all sounds without a tag
   SFX.volume.myTagA = 3 --triple the volume of all sounds tagged with "myTagA"
   SFX.volume.myTagB = 1.5 --multiply the volume of all sounds tagged with "myTagB" by 1.5
   ```
{ENDTABLE}


## AudioSource

### Instance members

Instance members must be accessed through a reference to a specific [AudioSource](/reference/SFX.md#audiosource) object.
```lua
local s = SFX.create{x=0,y=0,sound=1,falloffRadius=128}
if s.playing then
	s:stop()
end
```
<Note type="warning">Attempting to call instance members statically will result in an error!</Note>

### Instance Methods

[What is a method?](/types/function.md#methods)

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} play()
    {RET} [nil](/types/nil.md)
   {DESC} Resumes this audio source, if it was paused.
====
   {NAME} stop()
    {RET} [nil](/types/nil.md)
   {DESC} Pauses the audio source, if it is playing.
====
   {NAME} destroy()
    {RET} [nil](/types/nil.md)
   {DESC} Destroys the audio source, stopping it playing and preventing it from being referenced again.
{ENDTABLE}

### Instance Fields

{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE} [number](/types/number.md)
  {FIELD} x
     {RO} No
   {DESC} The X coordinate of the audio source.
====
   {TYPE} [number](/types/number.md)
  {FIELD} y
     {RO} No
   {DESC} The Y coordinate of the audio source.
====
   {TYPE} [number](/types/number.md)
  {FIELD} type
     {RO} No
   {DESC} The shape of the audio source, from the `SFX.SOURCE_` constants.
====
   {TYPE} [number](/types/number.md)
  {FIELD} falloffRadius
     {RO} No
   {DESC} Distance from the source that the listener needs to be before the sound is silent.
====
   {TYPE} [function](/types/function.md)
  {FIELD} falloffType
     {RO} No
   {DESC} The current falloff function. Can also be one of the `SFX.FALLOFF_` constants.
====
   {TYPE} [MixChunk](/types/MixChunk.md)
  {FIELD} sound
     {RO} No
   {DESC} The current sound effect.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} playing
     {RO} No
   {DESC} Whether the sound is currently playing or not.
====
   {TYPE} [number](/types/number.md)
  {FIELD} loops
     {RO} No
   {DESC} The number of loops the sound is playing (note that while this can be changed, doing so will not affect the sound without restarting it).
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} audible
     {RO} Yes
   {DESC} Whether or not the sound effect can currently be heard.
====
   {TYPE} [number](/types/number.md)
  {FIELD} volume
     {RO} No
   {DESC} The volume of the audio source, between 0 and 1.
====
   {TYPE} [object](/types/object.md)
  {FIELD} parent
     {RO} No
   {DESC} The parent object this audio source is attached to (could be any object that contains both an `x` and `y` field, or could be [nil](/types/nil.md))
====
   {TYPE} [number](/types/number.md)
  {FIELD} sourceRadius <Badge type="tip">If type is CIRCLE</Badge>
     {RO} No
   {DESC} The radius of the audio source circle.
====
   {TYPE} [number](/types/number.md)
  {FIELD} sourceWidth <Badge type="tip">If type is BOX</Badge>
     {RO} No
   {DESC} The width of the audio source box.
====
   {TYPE} [number](/types/number.md)
  {FIELD} sourceHeight <Badge type="tip">If type is BOX</Badge>
     {RO} No
   {DESC} The height of the audio source box.
====
   {TYPE} [Vector2](/reference/vector.md#vector2)
  {FIELD} sourceVector <Badge type="tip">If type is LINE</Badge>
     {RO} No
   {DESC} The vector describing the source line. The line will span from `{x,y}` to `{x,y}+sourceVector`.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} isValid
     {RO} Yes
   {DESC} Returns `false` if the audio source has been destroyed.
 
{ENDTABLE}


## SoundEffect

### Instance members

Instance members must be accessed through a reference to a specific [SoundEffect](/reference/SFX.md#soundeffect) object.
```lua
local s = SFX.play(1)
if s.volume > 0.5 then
	s:pause()
end
```
<Note type="warning">Attempting to call instance members statically will result in an error!</Note>

### Instance Methods

[What is a method?](/types/function.md#methods)

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} pause()
    {RET} [nil](/types/nil.md)
   {DESC} Pauses the sound effect.
====
   {NAME} resume()
    {RET} [nil](/types/nil.md)
   {DESC} Resumes the paused sound effect.
====
   {NAME} stop()
    {RET} [nil](/types/nil.md)
   {DESC} Stops the sound effect completely, effectively ending it early.
====
   {NAME} expire(
   
[number](/types/number.md) frames

)
    {RET} [nil](/types/nil.md)
   {DESC} Stops the sound effect after the specified number of frames.
====
   {NAME} fadeout(
   
[number](/types/number.md) milliseconds

)
    {RET} [nil](/types/nil.md)
   {DESC} Fades out the sound effect over the specified number of milliseconds (seconds*1000).
====
   {NAME} isplaying()
    {RET} [bool](/types/bool.md) playing
   {DESC} Returns `true` if the sound is currently playing.
====
   {NAME} ispaused()
    {RET} [bool](/types/bool.md) paused
   {DESC} Returns `true` if the sound is currently paused.
====
   {NAME} isfading()
    {RET} [bool](/types/bool.md) fading
   {DESC} Returns `true` if the sound is currently fading out.
{ENDTABLE}

### Instance Fields

{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE} [number](/types/number.md)
  {FIELD} volume
     {RO} No
   {DESC} The volume of the sound effect, between 0 and 1.
====
   {TYPE} [number](/types/number.md)
  {FIELD} pan
     {RO} No
   {DESC} The panning of the sound effect, between -1 and 1 (left and right).
====
   {TYPE} [table](/types/table.md) of [string](/types/string.md)
  {FIELD} tags
     {RO} No
   {DESC} A list of the tags associated with this sound effect.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} isValid
     {RO} Yes
   {DESC} Returns `false` if the sound effect has finished or was stopped.
{ENDTABLE}

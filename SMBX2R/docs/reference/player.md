# Player

Players are human-controlled characters that serve as the primary way for players to interact with the game in standard levels. Players are only used within *Levels*. If you're looking for the player's controlled entity on *World Maps*, check out the [World Class](/reference/world.md) instead.

## Constants

The player class defines global constants for quick access to certain features.

| Constant | Type | Value |
| --- | --- | --- |
| player | [Player](/reference/player.md) | The first player. |
| player2 | [Player](/reference/player.md) | The second player. If only one player is in the level, this constant is [nil](/types/nil.md) |

Additionally, there are constants for [character indices](/constants/characters.md).

## Static Members

These elements are static to the class itself and can be accessed like so:
```lua
local players = Player.get()
```

<!-- (Unlike instance functions and fields, these have 'Player' prepended, which is inconsistent but potentially helpful.) -->
### Static Functions
| Function | Return Values | Description |
| --- | --- | --- |
| Player.count() | [number](/types/number.md) playerCount | Gets the number of players currently in the level. |
| Player.get() | [table](/types/table.md) of [Player](/reference/player.md) players | Returns a table of references to all players currently in the level. |
| Player.getNearest(<br>[number](/types/number.md) x,<br>[number](/types/number.md) y<br>) | [Player](/reference/player.md) player | Returns the player closest to a given coordinate. |
| Player.getIntersecting(<br>[number](/types/number.md) left,<br>[number](/types/number.md) top,<br>[number](/types/number.md) right,<br>[number](/types/number.md) bottom<br>) | [table](/types/table.md) of [Player](/reference/player.md) players | Returns a table of references to all players that intersect with the defined area. |
| Player.getTemplates() | [table](/types/table.md) of [Player](/reference/player.md) playerTemplates | Returns all player templates. Player templates are the saved up player states for each character. They are saved, when the player hits a character-switch block. The results of modifing one of these templates will become apparent when a player hits the character switch block for the corresponding template. |
| Player.getTemplate([number](/types/number.md) id) | [Player](/reference/player.md) playerTemplate | Returns the player template of a given ID. Player templates are the saved up player states for each character. They are saved, when the player hits a character-switch block. The results of modifing one of these templates will become apparent when a player hits the character switch block for the corresponding template. |
| Player.convertFrame(<br>[number](/types/number.md) frame,<br>[number](/types/number.md) direction<br>) | [number](/types/number.md) x,<br>[number](/types/number.md) y | Turns a spritesheet frame into its corresponding x and y coordinate on the spritesheet. |
| Player.setCostume(<br>[Character](/constants/characters.md) character,<br>[string](/types/string.md) costumeName,<br>[bool](/types/bool.md) volatile<br>) | [nil](/types/nil.md) | Sets a player character's costume. If the volatile flag is set to true, the costume does not save. |
| Player.getCostume(<br>[Character](/constants/characters.md) character) | [string](/types/string.md) costumeName | Gets the name of the currently equipped costume by the specified character. |
| Player() | [Player](/reference/player.md) player | Returns the first player. You might want to use the constant player instead. |
| Player([number](/types/number.md) index) | [Player](/reference/player.md) player | Returns the player object at the given index. |


## Instance Members

Instance members must be accessed through a reference to a specific [Player](/reference/player.md) object.
```lua
player2.character = CHARACTER_TOAD
player2:kill()
```
<Note type="warning">Attempting to call instance members statically will result in an error!</Note>

### Instance Methods

[What is a method?](/types/function.md#methods)

<!-- (The "true" in some of these is not ideal. Consider some way to denote optional arguments and an easy way to see how a function changed depending on which arguments have what values.) -->
<!-- (Needs a control for named args.) -->

{STARTTABLE}
   {NAME} Method
    {RET} Return Values
   {DESC} Description
====
   {NAME} mem(

[hex](/types/number.md) offset,

[FieldType](/constants/memory-field-types.md) type

)
    {RET} [object](/types/object.md) value
   {DESC} Returns a value of the Player struct at a specific memory address-offset.
====
   {NAME} mem(

[hex](/types/number.md) offset,

[FieldType](/constants/memory-field-types.md) type,

[object](/types/object.md) value

)
    {RET} [nil](/types/nil.md)
   {DESC} Sets a value of the Player struct at a specific memory address-offset.
====
   {NAME} harm()
    {RET} [nil](/types/nil.md)
   {DESC} Harms the player. Does nothing while the player is invulnerable.
====
   {NAME} kill()
    {RET} [nil](/types/nil.md)
   {DESC} Kills the player instantly.
====
   {NAME} getWeight()
    {RET} [number](/types/number.md) weight
   {DESC} Returns the sum of the player's weight and all attached weights.
====
   {NAME} attachWeight([number](/types/number.md) weight)
    {RET} [WeightContainer](/types/weightcontainer.md) weight
   {DESC} Attaches a new weight to the player. Returns a weight container for the weight that was just added.
====
   {NAME} detachWeight([WeightContainer](/types/weightcontainer.md) weight)
    {RET} [bool](/types/bool.md) success
   {DESC} Detaches a weight container from a player. Fails if the weight container belongs to a different object or is not attached to the player. Returns whether the weight was removed or not.
====
   {NAME} transform(

[CharacterIndex](/constants/characters.md) index,

[bool](/types/bool.md) effect

)
    {RET} [nil](/types/nil.md)
   {DESC} Transforms the player into another character. If effect is true, then a character block type effect will be applied to the player.
====
   {NAME} getCurrentPlayerSetting()
    {RET} [PlayerSettings](/reference/playersettings.md)
   {DESC} Returns a PlayerSettings object of the current character and powerup state of the Player.
====
   {NAME} isGroundTouching()
    {RET} [bool](/types/bool.md)
   {DESC} Returns true if the player is touching the ground.
====
   {NAME} isOnGround()
    {RET} [bool](/types/bool.md)
   {DESC} Returns true if the player is touching the ground.
====
   {NAME} isUnderwater()
    {RET} [bool](/types/bool.md)
   {DESC} Returns true if the player is currently in water.
====
   {NAME} isClimbing()
    {RET} [bool](/types/bool.md)
   {DESC} Returns true if the player is climbing.
====
   {NAME} isInvincible()
    {RET} [bool](/types/bool.md)
   {DESC} Returns true if the player is invincible.
====
   {NAME} isDead()
    {RET} [bool](/types/bool.md)
   {DESC} Returns true if the player is dead.
====
   {NAME} getCurrentSpriteIndex()
    {RET} [number](/types/number.md) x,

[number](/types/number.md) y
   {DESC} Returns the current indexX and indexY of the sprite on the spritesheet. Can be used with [PlayerSettings](/reference/playersettings.md).
====
   {NAME} setCurrentSpriteIndex(

[number](/types/number.md) x,

[number](/types/number.md) y,

[bool](/types/bool.md)forceDirection

)
    {RET} [nil](/types/nil.md)
   {DESC} Sets the current sprite on the spritesheet. If forceDirection is true, then the direction of the player will be set. <Note type="warning">This may not work, depending on the player's movement!</Note> Can be used with [PlayerSettings](/reference/playersettings.md).
====
   {NAME} render([named](/types/table.md) args)
    {RET} [nil](/types/nil.md)
   {DESC} Renders the player according to the provided arguments.

<details><summary>Available args</summary>

| Argument | Description |
| --- | --- |
| [number](/types/number.md) frame | The frame to render |
| [number](/types/number.md) direction | Facing direction |
| [number](/types/number.md) powerup | Powerup |
| [number](/types/number.md) character | Character index |
| [bool](/types/bool.md) drawplayer | Whether to draw the player |
| [number](/types/number.md) mount | Mount type |
| [number](/types/number.md) mounttype | Mount color |
| [number](/types/number.md) x | x-Coordinate |
| [number](/types/number.md) y | y-Coordinate |
| [bool](/types/bool.md) ignorestate | Ignore forced state |
| [number](/types/number.md) priority | Render priority |
| [number](/types/number.md) mountpriority | Mount render priority |
| [bool](/types/bool.md) sceneCoords | Render to world space? |
| [Texture](/types/texture.md) texture | Spritesheet to use |
| [Color](/reference/Color.md) color | Tint |
| [FragShader](/types/shader.md) shader | Shader |
| [table](/types/table.md) uniforms | Shader uniforms |
| [table](/types/table.md) attributes | Shader attributes |
| [Color](/reference/Color.md) mountcolor | Mount Tint |
| [FragShader](/types/shader.md) mountshader | Mount Shader |
| [table](/types/table.md) mountuniforms | Mount Shader uniforms |
| [table](/types/table.md) mountattributes | Mount Shader attributes |

</details>

====
   {NAME} memdump(

[hex](/types/number.md) lowerBound,

[hex](/types/number.md) upperBound

)
    {RET} [nil](/types/nil.md)
   {DESC} Prints the current state of a Player's memory addresses to the screen for debugging. If the arguments are not specified, they default to the minium and maximum values respectively.
====
   {NAME} memlog(

[hex](/types/number.md) lowerBound,

[hex](/types/number.md) upperBound

)
    {RET} [nil](/types/nil.md)
   {DESC} Logs the current state of a Player's memory addresses into a file in the data/logs directory. If the arguments are not specified, they default to the minium and maximum values respectively.
====
   {NAME} getCurrentSpriteIndex()
    {RET} [number](/types/number.md) x,

[number](/types/number.md) y
   {DESC} Returns the current indexX and indexY of the sprite on the spritesheet. Can be used with [PlayerSettings](/reference/playersettings.md).
====
   {NAME} playAnim(

[table](/types/table.md) of [number](/types/number.md) frames,

[number](/types/number.md) speed,

[bool](/types/bool.md) loop,

[number](/types/number.md) priority)
    {RET} [PlayerAnimation](/reference/playeranimation.md) animation
   {DESC} Causes the player to animate according to a defined sequence.
====
   {NAME} playAnim(

[table](/types/table.md) of [number](/types/number.md) frames,

[number](/types/number.md) speed,

[bool](/types/bool.md) loop,

[number](/types/number.md) priority, true)
    {RET} [PlayerAnimation](/reference/playeranimation.md) animation
   {DESC} Causes the player to animate according to a defined sequence. Frame is interpreted as an x-y coordinate in this variation.
====
   {NAME} setFrame([number](/types/number.md) frame)
    {RET} [nil](/types/nil.md)
   {DESC} Sets the player's current frame. Unlike the frame field, calling this in onTick will reliably apply the new frame.
====
   {NAME} setFrame([number](/types/number.md) frame, true)
    {RET} [nil](/types/nil.md)
   {DESC} Sets the player's current frame. Unlike the frame field, calling this in onTick will reliably apply the new frame. Uses x and y coordinates for the frame on the spritesheet.
====
   {NAME} getFrame([number](/types/number.md) frame)
    {RET} [number](/types/number.md) frame
   {DESC} Gets the player's current frame as a spritesheet frame.
====
   {NAME} getFrame([number](/types/number.md) frame, true)
    {RET} [number](/types/number.md) x,
    
   [number](/types/number.md) y
   {DESC} Gets the player's current frame as a x and y coordinate on the spritesheet.
====
   {NAME} teleport(
      
[number](/types/number.md) x,

[number](/types/number.md) y,

[bool](/types/bool.md) bottomCenterAligned

)
    {RET} [nil](/types/nil.md)
   {DESC} Instantly teleports the player to the target position. If bottomCenterAligned is true, the coordinates correspond to where the bottom center of the player's hitbox will be positioned after teleportation. Otherwise, it will be the top left corner.
{ENDTABLE}

### Instance Fields

<!-- (Consider an icon for "read only".) -->
{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} isValid
     {RO} Yes
   {DESC} Validates that the player object exists.
====
   {TYPE} [number](/types/number.md)
  {FIELD} idx
     {RO} Yes
   {DESC} The player's index in the internal list of players.
====
   {TYPE} [table](/types/table.md)
  {FIELD} data
     {RO} No
   {DESC} The Player's [Data Table](/concepts/data-table.md).
====
   {TYPE} [number](/types/number.md)
  {FIELD} x
     {RO} No
   {DESC} The player's x coordinate (left edge of the hitbox).
====
   {TYPE} [number](/types/number.md)
  {FIELD} y
     {RO} No
   {DESC} The player's y coordinate (top edge of the hitbox).
====
   {TYPE} [number](/types/number.md)
  {FIELD} width
     {RO} No
   {DESC} The width of the player's hitbox.
====
   {TYPE} [number](/types/number.md)
  {FIELD} height
     {RO} No
   {DESC} The height of the player's hitbox.
====
   {TYPE} [number](/types/number.md)
  {FIELD} speedX
     {RO} No
   {DESC} The player's horizontal speed.
====
   {TYPE} [number](/types/number.md)
  {FIELD} speedY
     {RO} No
   {DESC} The player's vertical speed.
====
   {TYPE} [number](/types/number.md)
  {FIELD} slidingTimeSinceOnSlope
     {RO} No
   {DESC} The number of frames the player has been sliding while not colliding with a slope.
====
   {TYPE} [number](/types/number.md)
  {FIELD} direction
     {RO} No
   {DESC} The player's facing direction. Can be either -1 or 1.
====
   {TYPE} [RECT](/reference/rect.md)
  {FIELD} screen
     {RO} Yes
   {DESC} Returns a RECT of the distance between the player and the edges of the camera.
====
   {TYPE} [number](/types/number.md)
  {FIELD} section
     {RO} No
   {DESC} The index of the section the player is in.
====
   {TYPE} [Section](/reference/section.md)
  {FIELD} sectionObj
     {RO} Yes
   {DESC} Gets a reference to the section the player is in.
====
   {TYPE} [number](/types/number.md)
  {FIELD} powerup
     {RO} No
   {DESC} The player's current [powerup state](/constants/powerups.md).
====
   {TYPE} [number](/types/number.md)
  {FIELD} reservePowerup
     {RO} No
   {DESC} ID of the [NPC](/reference/npc.md) in the player's reserve item box.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} isMega
     {RO} Yes
   {DESC} Whether the player is currently in the Mega Mushroom state.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} keepPowerOnMega
     {RO} No
   {DESC} Whether the player should keep their Tier 2 Powerup when transforming into the Mega state.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} hasStarman
     {RO} Yes
   {DESC} Whether the player is currently affected by a Starman's invulnerability.
====
   {TYPE} [number](/types/number.md)
  {FIELD} character
     {RO} No
   {DESC} The player's current [character index](/constants/characters.md).
====
   {TYPE} [NPC](/reference/npc.md)
  {FIELD} holdingNPC
     {RO} Yes
   {DESC} The [NPC](/reference/npc.md) currently held by the player. If the player is not holding an NPC, this value is [nil](/types/nil.md).
====
   {TYPE} [NPC](/reference/npc.md)
  {FIELD} standingNPC
     {RO} Yes
   {DESC} The [NPC](/reference/npc.md) currently stood on by the player. If the player is not standing on an NPC, this value is [nil](/types/nil.md).
====
   {TYPE} [NPC](/reference/npc.md)
  {FIELD} climbingNPC
     {RO} Yes
   {DESC} The last [NPC](/reference/npc.md) the player climbed on. If the player has not climbed on an NPC since the level was loaded, this value is [nil](/types/nil.md).
====
   {TYPE} [BGO](/reference/bgo.md)
  {FIELD} climbingBGO
     {RO} Yes
   {DESC} The last [BGO](/reference/bgo.md) the player climbed on. If the player has not climbed on an NPC since the level was loaded, this value is [nil](/types/nil.md).
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} climbing
     {RO} Yes
   {DESC} Mirror to isClimbing().
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} noblockcollision
     {RO} No
   {DESC} Ignores collision with blocks.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} nonpcinteraction
     {RO} No
   {DESC} Ignores collision with NPCs.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} noplayerinteraction
     {RO} No
   {DESC} Ignores collision with other Players.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} inClearPipe
     {RO} Yes
   {DESC} If the player is currently in a clear pipe.
====
   {TYPE} [number](/types/number.md)
  {FIELD} clearPipeDirection
     {RO} Yes
   {DESC} The index of the current movement direction if the player is inside a clear pipe (defaults to 0 if not in one.)
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} isFairy
     {RO} Yes
   {DESC} If the player is currently a fairy.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} inLaunchBarrel
     {RO} Yes
   {DESC} If the player is currently in a launch barrel.
====
   {TYPE} [Mount](/constants/mounts.md)
  {FIELD} mount
     {RO} No
   {DESC} The type of mount currently mounted by the player.
====
   {TYPE} [Mount Color](/constants/mounts.md)
  {FIELD} mountColor
     {RO} No
   {DESC} The color of the mounted mount.
====
   {TYPE} [number](/types/number.md)
  {FIELD} deathTimer
     {RO} No
   {DESC} The player's death timer. If >0, the player has died.
====
   {TYPE} [number](/types/number.md)
  {FIELD} invincibilityTimer
     {RO} No
   {DESC} The player's invincibility timer.
====
   {TYPE} [number](/types/number.md)
  {FIELD} slashTimer
     {RO} No
   {DESC} The cooldown timer for Link's slash.
====
   {TYPE} [number](/types/number.md)
  {FIELD} grabTopTimer
     {RO} No
   {DESC} The timer for grabbing objects from above (herb, grabtop NPCs)
====
   {TYPE} [number](/types/number.md)
  {FIELD} tanookiStatueTimer
     {RO} No
   {DESC} The timer for remaining in the tanooki statue state.
====
   {TYPE} [number](/types/number.md)
  {FIELD} warpCooldown
     {RO} No
   {DESC} The cooldown timer for using warps.
====
   {TYPE} [number](/types/number.md)
  {FIELD} mountingCooldown
     {RO} No
   {DESC} The cooldown timer for jumping onto mounts.
====
   {TYPE} [number](/types/number.md)
  {FIELD} tanookiStatueCooldown
     {RO} No
   {DESC} The cooldown timer for changing into the tanooki statue.
====
   {TYPE} [number](/types/number.md)
  {FIELD} frame
     {RO} No
   {DESC} The player's current animation frame. Values correspond to [this chart](/http://i.imgur.com/1dnW3g3.png)
====
   {TYPE} [ForcedState](/constants/forced-state.md)
  {FIELD} forcedState
     {RO} No
   {DESC} The player's current [forced state](/constants/forced-state.md).
====
   {TYPE} [number](/types/number.md)
  {FIELD} forcedTimer
     {RO} No
   {DESC} The timer related to the player's current forced state.
====
   {TYPE} [PlayerKeys](/constants/playerkeys.md)
  {FIELD} keys
     {RO} Yes
   {DESC} A [PlayerKeys](/constants/playerkeys.md) object containing information on the player's current input. Individual key presses can be manipulated in order to control the player's movement.
====
   {TYPE} [PlayerKeys](/constants/playerkeys.md)
  {FIELD} rawKeys
     {RO} Yes
   {DESC} A [PlayerKeys](/constants/playerkeys.md) object containing information on the player's current input. Unlike keys, rawKeys will always return the unaltered player input and cannot be manipulated directly.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} slidingOnSlope
     {RO} No
   {DESC} Whether the player is currently sliding on a slope.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} slidingQuickly
     {RO} No
   {DESC} Whether the player is sliding fast enough to kill enemies.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} isDucking
     {RO} No
   {DESC} Whether the player is currently ducking.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} isSpinJumping
     {RO} No
   {DESC} Whether the player is currently performing a spin jump.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} isTanookiStatue
     {RO} No
   {DESC} Whether the player is currently in the tanooki statue form.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} rainbowShellSurfing
     {RO} No
   {DESC} Whether the player is currently riding a rainbow shell.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} upKeyPressing
     {RO} No
   {DESC} Whether the player is currently pressing up. <Badge type="tip">Use field keys.up</Badge>
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} downKeyPressing
     {RO} No
   {DESC} Whether the player is currently pressing down. <Badge type="tip">Use field keys.down</Badge>
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} leftKeyPressing
     {RO} No
   {DESC} Whether the player is currently pressing left. <Badge type="tip">Use field keys.left</Badge>
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} rightKeyPressing
     {RO} No
   {DESC} Whether the player is currently pressing right. <Badge type="tip">Use field keys.right</Badge>
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} jumpKeyPressing
     {RO} No
   {DESC} Whether the player is currently pressing jump. <Badge type="tip">Use field keys.jump</Badge>
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} altJumpKeyPressing
     {RO} No
   {DESC} Whether the player is currently pressing altJump. <Badge type="tip">Use field keys.altJump</Badge>
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} altRunKeyPressing
     {RO} No
   {DESC} Whether the player is currently pressing altRun. <Badge type="tip">Use field keys.altRun</Badge>
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} runKeyPressing
     {RO} No
   {DESC} Whether the player is currently pressing run. <Badge type="tip">Use field keys.run</Badge>
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} dropItemKeyPressing
     {RO} No
   {DESC} Whether the player is currently pressing dropItem. <Badge type="tip">Use field keys.dropItem</Badge>
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} pauseKeyPressing
     {RO} No
   {DESC} Whether the player is currently pressing pause. <Badge type="tip">Use field keys.pause</Badge>
====
   {TYPE} [string](/types/string.md)
  {FIELD} collisionGroup
     {RO} No
   {DESC} The collision group this player belongs to.
====
   {TYPE} [number](/types/number.md)
  {FIELD} collisionGroupIndex
     {RO} Yes
   {DESC} The numerical index of the collision group this player belongs to. Used internally to make collision checks faster.
====
   {TYPE} [table](/types/table.md) of [Weight Container](/types/weightcontainer.md)
  {FIELD} _weightContainers
     {RO} No
   {DESC} A list of all weights attached to the player.
{ENDTABLE}
<!-- (These badges could be used/modified for deprecated items of other kinds, too!) -->

### Instance Memory Offsets

These offsets can be manipulated by the instance's mem method.
<Note type="warning">Be careful when manipulating memory offsets directly! Doing so may yield unexpected results.</Note>
<Note type="tip">Please keep in mind that some of these fields are not fully researched. These fields are marked with a (?).</Note>

{STARTTABLE}
  {FIELD} Field
   {TYPE} Fieldtype
   {DESC} Description
====
   {SECT} Character-related
====
  {FIELD} 0x00
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Can Toad use his double jump?
====
  {FIELD} 0x02
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Star sparkling effect on the player
====
  {FIELD} 0x04
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Whether or not the player is using the unfinished airship vehicle NPC. Forcing to true results in disabling horizontal movement and ducking. Does not get reset upon loading a new level. 
====
  {FIELD} 0x06
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Greater than 0 when in quicksand.
====
  {FIELD} 0x08
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Number of Bombs Link has in his inventory
====
  {FIELD} 0x0A
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Is the player on slippery ground?
====
  {FIELD} 0x0C
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Is the player a fairy?
====
  {FIELD} 0x0E
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Has the fairy already been used in this jump?
====
  {FIELD} 0x10
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Frames until the fairy runs out.
====
  {FIELD} 0x12
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Does Link have a key?
====
  {FIELD} 0x14
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Link Slash cooldown timer
====
  {FIELD} 0x16
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Number of HP-hearts (used by all characters)
====
  {FIELD} 0x18
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Is Peach's hover currently available?
====
  {FIELD} 0x1A
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Has the player already pressed the jump button for Peach's hover?
====
  {FIELD} 0x1C
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Peach hover timer
====
  {FIELD} 0x20
   {TYPE} [FIELD_FLOAT](/constants/memory-field-types.md)
   {DESC} Princess hover Y wave speed
====
  {FIELD} 0x24
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Princess hover Y wave direction
====
   {SECT} Environment-related
====
  {FIELD} 0x26
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Timer for grabbing objects from above (herb, grabtop NPCs)
====
  {FIELD} 0x28
   {TYPE} [FIELD_FLOAT](/constants/memory-field-types.md)
   {DESC} Momentum stored from before a grab from top was initiated
====
  {FIELD} 0x2C
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} Index of the NPC currently climbed on or opposite of the index of the BGO currently climbed on depending on whether the player is climbing a NPC or a BGO <Badge type="tip">Use field climbingNPC or climbingBGO</Badge>
====
  {FIELD} 0x34
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} 2 when in water or quicksand. Can be set to force the player to be underwater.
====
  {FIELD} 0x36
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Is the player currently underwater?
====
  {FIELD} 0x38
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Water stroke cooldown
====
  {FIELD} 0x3A
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} If greater than 0, counts down and temporarily disables gravity for the player. Used when launching off of an upwards slope.
====
  {FIELD} 0x3C
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Is the player sliding?
====
  {FIELD} 0x3E
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Is the player generating sliding smoke puffs?
====
  {FIELD} 0x40
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Climbing state (3 climbing, 2 pushed up against edge of climbable area) <Badge type="tip">Use field climbing</Badge>
====
  {FIELD} 0x42
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} An unused timer originally intended to keep the player from kicking their own shell when shell-surfing.  If greater than 0, it cancels some collisions between players and NPCs they have thrown.
====
  {FIELD} 0x44
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Is riding a rainbow shell?
====
  {FIELD} 0x46
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} The ID of the NPC used to reach the current powerup state, used for the reserve box (e.g., collecting an SMB3 fire flower will set this to 14)
====
  {FIELD} 0x48
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Index of the slope being stood on
====
   {SECT} Tanooki Suit-related
====
  {FIELD} 0x4A
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Currently using the statue mode?
====
  {FIELD} 0x4C
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Statue transform cooldown timer
====
  {FIELD} 0x4E
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Frames spent as statue
====
   {SECT} Spinjump-related
====
  {FIELD} 0x50
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Is the player currently spinjumping?
====
  {FIELD} 0x52
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Spinjump timer
====
  {FIELD} 0x54
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Direction of spinjump fireball shots, for non-fire states stays at the direction the spinjump started on
====
   {SECT} Player State-related
====
  {FIELD} 0x56
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Current enemy kill combo count
====
  {FIELD} 0x58
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Ground sliding smoke puffs state
====
  {FIELD} 0x5A
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} ID of intersecting warp entrance
====
  {FIELD} 0x5C
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Yoshi Ground Pound Flag
====
  {FIELD} 0x5E
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Yoshi Ground Pound Upwards Bounce Flag
====
  {FIELD} 0x60
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Whether or not the player can groundpound when using a purple yoshi.
====
  {FIELD} 0x62
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} If greater than 0, will count down and the player cannot let go of the NPC they're currently holding, even if not holding the run button.
====
   {SECT} Mount-related
====
  {FIELD} 0x64
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Does Yoshi have the earthquake ability?
====
  {FIELD} 0x66
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Does Yoshi have the flight ability?
====
  {FIELD} 0x68
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Does Yoshi have the fire ability?
====
  {FIELD} 0x6A
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Wings' current frame (Yoshi and Boot)
====
  {FIELD} 0x6C
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Wings' animation timer (Yoshi and Boot)
====
  {FIELD} 0x6E
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Yoshi Head X-Offset
====
  {FIELD} 0x70
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Yoshi Head Y-Offset
====
  {FIELD} 0x72
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Yoshi's head animation frame (0-4 is left, 5-9 is right)
====
  {FIELD} 0x74
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Yoshi swallow timer
====
  {FIELD} 0x76
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Yoshi body X position offset
====
  {FIELD} 0x78
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Yoshi body Y position offset
====
  {FIELD} 0x7A
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Yoshi's body animation frame (0-6 is left, 7-13 is right)
====
  {FIELD} 0x7C
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Yoshi animation frame timer (rapidly increments from 0 to 32, freezes in the air, resets to 0 when pressing down; probably used to to move body and head with the animation)
====
  {FIELD} 0x80
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} Tongue X-Position
====
  {FIELD} 0x88
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} Tongue Y-Position
====
  {FIELD} 0x90
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} Tongue Width
====
  {FIELD} 0x98
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} Tongue Height
====
  {FIELD} 0xA0
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} Allocated for the "speed" of the tongue, but unused.
====
  {FIELD} 0xA8
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} Allocated for the "speed" of the tongue, but unused.
====
  {FIELD} 0xB0
   {TYPE} [FIELD_FLOAT](/constants/memory-field-types.md)
   {DESC} Tongue X-Start/End Position
====
  {FIELD} 0xB4
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Tongue length
====
  {FIELD} 0xB6
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Is the tongue retracting?
====
  {FIELD} 0xB8
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Index of NPC currently on the tongue (0 if no NPC)
====
  {FIELD} 0xBA
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Index of the player currently on the tongue (0 if no player)
====
  {FIELD} 0xBC
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Mounting cooldown
====
  {FIELD} 0xBE
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Unused
====
   {SECT} Position-related
====
  {FIELD} 0xC0
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} Player X-Position <Badge type="tip">Use field x</Badge>
====
  {FIELD} 0xC8
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} Player Y-Position <Badge type="tip">Use field y</Badge>
====
  {FIELD} 0xD0
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} Player Width <Badge type="tip">Use field width</Badge>
====
  {FIELD} 0xD8
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} Player Height <Badge type="tip">Use field height</Badge>
====
  {FIELD} 0xE0
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} Player X-Speed <Badge type="tip">Use field speedX</Badge>
====
  {FIELD} 0xE8
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} Player Y-Speed <Badge type="tip">Use field speedY</Badge>
====
   {SECT} Unsorted
====
  {FIELD} 0xF0
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} [Character index](/constants/characters.md) <Badge type="tip">Use field character</Badge>
====
   {SECT} Input-related
====
  {FIELD} 0xF2
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Up key pressing? <Badge type="tip">Use field keys.up</Badge>
====
  {FIELD} 0xF4
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Down key pressing? <Badge type="tip">Use field keys.down</Badge>
====
  {FIELD} 0xF6
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Left key pressing? <Badge type="tip">Use field keys.left</Badge>
====
  {FIELD} 0xF8
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Right key pressing? <Badge type="tip">Use field keys.right</Badge>
====
  {FIELD} 0xFA
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Jump key pressing? <Badge type="tip">Use field keys.jump</Badge>
====
  {FIELD} 0xFC
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} AltJump key pressing? <Badge type="tip">Use field keys.altJump</Badge>
====
  {FIELD} 0xFE
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} AltRun key pressing? <Badge type="tip">Use field keys.altRun</Badge>
====
  {FIELD} 0x100
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Run key pressing? <Badge type="tip">Use field keys.run</Badge>
====
  {FIELD} 0x102
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Drop item key pressing? <Badge type="tip">Use field keys.dropItem</Badge>
====
  {FIELD} 0x104
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Pause key pressing? <Badge type="tip">Use field keys.pause</Badge>
====
  {FIELD} 0x106
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Direction faced (-1 is left, 1 is right) <Badge type="tip">Use field direction</Badge>
====
   {SECT} Mount-related
====
  {FIELD} 0x108
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} [Mount ID](/constants/mounts.md) <Badge type="tip">Use field mount</Badge>
====
  {FIELD} 0x10A
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} [Mount color](/constants/mounts.md) <Badge type="tip">Use field mountColor</Badge>
====
  {FIELD} 0x10C
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Yoshi: Whether the tongue is out<br>Boots: Whether the player is able to jump while hopping
====
  {FIELD} 0x10E
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Yoshi: Y-Offset<br>Boots: Turns 0 when ducking, goes from 5 to -6 when not. Related to player Y-speed
====
  {FIELD} 0x110
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Current frame for Shoe/Clown Car, unused for Yoshi
====
   {SECT} State-related
====
  {FIELD} 0x112
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} [Current powerup](/constants/powerups.md) <Badge type="tip">Use field powerup</Badge>
====
  {FIELD} 0x114
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Current animation frame shown <Badge type="tip">Use field frame</Badge>
====
  {FIELD} 0x118
   {TYPE} [FIELD_FLOAT](/constants/memory-field-types.md)
   {DESC} Animation timer
====
  {FIELD} 0x11C
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Frames left of upwards jump momentum while holding jump (this is how the game handles jumping)
====
  {FIELD} 0x11E
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Has the player already used the jump button? (Can be set to false to disable jumping)
====
  {FIELD} 0x120
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Has the player already used the altJump button? (Can be set to false to disable spinjumping or getting out of a mount)
====
  {FIELD} 0x122
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} [Forced state](/constants/forced-state.md) <Badge type="tip">Use field forcedState</Badge>
====
  {FIELD} 0x124
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} Forced state timer <Badge type="tip">Use field forcedTimer</Badge>
====
  {FIELD} 0x12C
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Has the player already used the down button? (Used for purple yoshi ground pound)
====
  {FIELD} 0x12E
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} In ducking state?
====
  {FIELD} 0x130
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Has the player not already used the dropItem button?
====
  {FIELD} 0x132
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Has the player's hitbox height changed while in the air this frame?
====
  {FIELD} 0x134
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Has the player's hitbox height changed this frame?
====
  {FIELD} 0x136
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Was spit out of Yoshi's mouth?
====
  {FIELD} 0x138
   {TYPE} [FIELD_FLOAT](/constants/memory-field-types.md)
   {DESC} X-momentum push
====
  {FIELD} 0x13C
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Has the player died?
====
  {FIELD} 0x13E
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Player death timer <Badge type="tip">Use field deathTimer</Badge>
====
  {FIELD} 0x140
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Powerup blinking timer (Decrements from 50 (powerup) or 150 (hurt) back to 0, player is invulnerable when this is nonzero)
====
  {FIELD} 0x142
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Powerup blinking state (flickers between true and false)
====
  {FIELD} 0x144
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Set when the player bounces on an NPC or exits the clown car. It prevents the player from getting crushed by ceiling blocks for the next frame.
====
   {SECT} Collision-related
====
  {FIELD} 0x146
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Bottom collision (set to 2 on contact, counts down) (used for getting crushed)
====
  {FIELD} 0x148
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Left collision (set to 2 on contact, counts down) (used for getting crushed)
====
  {FIELD} 0x14A
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Top collision (set to 2 on contact, counts down) (used for getting crushed)
====
  {FIELD} 0x14C
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Right collision (set to 2 on contact, counts down) (used for getting crushed)
====
  {FIELD} 0x14E
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Pushed by a moving layer/NPC (set to 2 on contact, counts down) (used for getting crushed)
====
  {FIELD} 0x150
   {TYPE} [FIELD_FLOAT](/constants/memory-field-types.md)
   {DESC} Unused
====
   {SECT} Object-related
====
  {FIELD} 0x154
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Index of NPC being held (stores the index into the NPC array + 1) (index to a specific NPC that was generated only, -1 can't carry anything) <Badge type="tip">Use field holdingNPC unless you need to force players to hold an NPC</Badge>
====
  {FIELD} 0x156
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Is the stickyfingers cheat active?
====
  {FIELD} 0x158
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Reserve itembox contents (0 is empty) <Badge type="tip">Use field reservePowerup</Badge>
====
   {SECT} Section-related
====
  {FIELD} 0x15A
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Current section index <Badge type="tip">Use field section</Badge>
====
  {FIELD} 0x15C
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Warp cooldown timer
====
  {FIELD} 0x15E
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Target warp exit ID (not reset after finished warping)
====
   {SECT} Attack-related
====
  {FIELD} 0x160
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Cooldown for several types of projectiles (fireballs, hammers, link slash, yoshi tongue, etc.)
====
  {FIELD} 0x162
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Secondary projectile cooldown (link projectiles)
====
  {FIELD} 0x164
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Tail swipe timer
====
   {SECT} Flight-related
====
  {FIELD} 0x168
   {TYPE} [FIELD_FLOAT](/constants/memory-field-types.md)
   {DESC} P-Speed/running counter for leaf flight (Mario needs 35, Luigi needs 40, Peach needs 80, Toad needs 60, Link needs 10)
====
  {FIELD} 0x16C
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Can start flying?
====
  {FIELD} 0x16E
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Is currently flying?
====
  {FIELD} 0x170
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Flight time remaining
====
  {FIELD} 0x172
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Run button already used? (Can be set to false to prevent run button actions such as fireballs)
====
  {FIELD} 0x174
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Jump button already used? (Can be set to false to disable leaf Toad's double jump)
====
   {SECT} Standing-related
====
  {FIELD} 0x176
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Index of NPC being stood on (stores the index into the NPC array + 1, 0 when not standing on an NPC, equal to -player index when standing on a moving block) <Badge type="tip">Use field standingNPC</Badge>
====
  {FIELD} 0x178
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Set to 56 when the player is standing on a clown car controlled by another player, otherwise set to 0.
====
  {FIELD} 0x17A
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Jump button already used? (Can be set to false to disable entering levels on the map)
====
   {SECT} Unsorted
====
  {FIELD} 0x17C
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Stores how much the player has been pushed by blocks while driving a Clown Car. Used to correct the relative locations of other players and NPCs standing on the Clown Car after the driving player's horizontal speed was applied to them.
====
  {FIELD} 0x180
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Unused
====
  {FIELD} 0x182
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Unused
====
  {FIELD} 0x184
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Unused
{ENDTABLE}

# PlayerSettings

PlayerSettings objects store the information from player hitbox ini files.

## Static Members

These elements are static to the class itself and can be accessed like so:
```lua
local smallMarioSetting = PlayerSettings.get(CHARACTER_MARIO, PLAYER_SMALL)
```

<!-- (Unlike instance functions and fields, these have 'Player' prepended, which is inconsistent but potentially helpful.) -->
### Functions

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} PlayerSettings.get(

[number](/types/number.md) character,
[number](/types/number.md) powerup

)
    {RET} [PlayerSettings](/reference/playersettings.md) settings
   {DESC} Returns the PlayerSettings object for the character and powerup specified. NOTE: Currently SMBX2-specific characters all have a "base character" whose settings they are modifying. If you are trying to modify a SMBX2 character, use (example) [playerManager.getBaseID(CHARACTER_KLONOA)](/modules/playermanager.md#functions) to retrieve the base character first.
{ENDTABLE}

## Instance Members

Instance members must be accessed through a reference to a specific [PlayerSettings](/reference/playersettings.md) object.
```lua
local settings = player:getCurrentPlayerSetting()
settings.hitboxHeight = 20
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
   {NAME} getSpriteOffsetX(

[number](/types/number.md) indexX,
[number](/types/number.md) indexY

)
    {RET} [number](/types/number.md) xOffset
   {DESC} Returns the x-offset of the player hitbox for the spritesheet frame indexed by indexX and indexY. Indices must be 0-9, starting in the top left cell. The result of [Player.convertFrame](/reference/player.md#static-functions) can be used as input for this.
====
   {NAME} getSpriteOffsetY(

[number](/types/number.md) indexX,
[number](/types/number.md) indexY

)
    {RET} [number](/types/number.md) yOffset
   {DESC} Returns the y-offset of the player hitbox for the spritesheet frame indexed by indexX and indexY. Indices must be 0-9, starting in the top left cell. The result of [Player.convertFrame](/reference/player.md#static-functions) can be used as input for this.
====
   {NAME} setSpriteOffsetX(

[number](/types/number.md) indexX,
[number](/types/number.md) indexY,
[number](/types/number.md) value

)
    {RET} [nil](/types/nil.md)
   {DESC} Sets the value of the x-offset of the player hitbox for the spritesheet frame indexed by indexX and indexY. Indices must be 0-9, starting in the top left cell. The result of [Player.convertFrame](/reference/player.md#static-functions) can be used as input for this.
====
   {NAME} setSpriteOffsetY(

[number](/types/number.md) indexX,
[number](/types/number.md) indexY,
[number](/types/number.md) value

)
    {RET} [nil](/types/nil.md)
   {DESC} Sets the value of the y-offset of the player hitbox for the spritesheet frame indexed by indexX and indexY. Indices must be 0-9, starting in the top left cell. The result of [Player.convertFrame](/reference/player.md#static-functions) can be used as input for this.
{ENDTABLE}


### Instance Fields

<!-- (Consider an icon for "read only".) -->
{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE} [number](/types/number.md)
  {FIELD} hitboxWidth
     {RO} No
   {DESC} Width of the player's hitbox. This value is the same regardless the current player frame.
====
   {TYPE} [number](/types/number.md)
  {FIELD} hitboxHeight
     {RO} No
   {DESC} Height of the player's hitbox. Used when the player is not ducking.
====
   {TYPE} [number](/types/number.md)
  {FIELD} hitboxDuckHeight
     {RO} No
   {DESC} Height of the player's hitbox when ducking.
====
   {TYPE} [number](/types/number.md)
  {FIELD} grabOffsetX
     {RO} No
   {DESC} Horizontal offset of held items (assuming right-facing). This value only takes effect if the player isn't configured to hold items overhead in the calibrator tool.
====
   {TYPE} [number](/types/number.md)
  {FIELD} grabOffsetY
     {RO} No
   {DESC} Vertical offset of held items. This value only takes effect if the player isn't configured to hold items overhead in the calibrator tool.
{ENDTABLE}
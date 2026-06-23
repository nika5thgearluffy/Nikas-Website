# PlayerManager

As a module, PlayerManager needs to be loaded in order to be accessible in your level or episode:
```lua
local playerManager = require("playermanager")
```

PlayerManager controls SMBX2-specific player character settings and utility.

## Functions

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} overrideCharacterLib(

   [Character](/constants/characters.md) character,

   [Library](/concepts/libraries.md) library

   )
    {RET} [nil](/types/nil.md)
   {DESC} Overrides the character library for the specified SMBX2-specific character with the library provided.
====
   {NAME} registerGraphic(

   [Character](/constants/characters.md) character,

   [string](/types/string.md) identifier,

   [string](/types/string.md) filename

   )
    {RET} [string](/types/string.md) identifier
   {DESC} Registers the graphic as an overridable graphic stored in a subfolder named after the character it is registered to.
====
   {NAME} getGraphic(

   [Character](/constants/characters.md) character,

   [string](/types/string.md) identifier

   )
    {RET} [Texture](/types/texture.md) graphic
   {DESC} Returns a graphic registered to the character by its identifier.
====
   {NAME} registerSound(

   [Character](/constants/characters.md) character,

   [string](/types/string.md) identifier,

   [string](/types/string.md) filename

   )
    {RET} [string](/types/string.md) identifier
   {DESC} Registers the sound effect as an overridable sound stored in a "sound/character/" subfolder.
====
   {NAME} getSound(

   [Character](/constants/characters.md) character,

   [string](/types/string.md) identifier

   )
    {RET} [SFX](/reference/SFX.md) sound
   {DESC} Returns a sound registered to the character by its identifier.
====
   {NAME} registerCollider(

   [Character](/constants/characters.md) character,

   [number](/types/number.md) playerIndex,

   [string](/types/string.md) identifier,

   [Collider](/reference/Colliders.md) collider

   )
    {RET} [Collider](/reference/Colliders.md) collider
   {DESC} Registers a collider to the player. playerIndex relates to multiplayer: Index 1 is player 1, Index 2 is player 2, etc (for supermario128 cheat there can be up to 128). Colliders registered via this method have a special "active" boolean field.
====
   {NAME} getCollider(

   [Character](/constants/characters.md) character,

   [number](/types/number.md) playerIndex,

   [string](/types/string.md) identifier

   )
    {RET} [Collider](/reference/Colliders.md) collider
   {DESC} The same as [player:getCollider](/reference/player.md). Returns an active registered collider of the given name for the specified player index and character. nil if none are found.
====
   {NAME} getCharacters()
    {RET} [table](/types/table.md) characterInfo
   {DESC} Returns a list of all characters with fields name (name of the character), switchBlock (id of the switch block), filterBlock (id of the block that is passthrough when that character), base (id of the base character), deathEffect (id of the death effect).
====
   {NAME} getName(

   [Character](/constants/characters.md) character

   )
    {RET} [string](/types/string.md) name
   {DESC} Gets the specified character's name.
====
   {NAME} getBaseID(

   [Character](/constants/characters.md) character

   )
    {RET} [Character](/constants/characters.md) baseCharacter
   {DESC} Gets the specified character's base character id.
====
   {NAME} resolveIni(

   [string](/types/string.md) filename,

   [string](/types/string.md) filepath

   )
    {RET} [string](/types/string.md) trueFilePath
   {DESC} Searches for the specified character hitbox ini using an extended Misc.resolveFile that includes the default location for character configuration files.
====
   {NAME} getHitboxPath(

   [Character](/constants/characters.md) character,

   [Powerup](/constants/powerups.md) powerup

   )
    {RET} [string](/types/string.md) filepath
   {DESC} Returns the file path for the ini configuration for the specified character+powerup combo.
====
   {NAME} refreshHitbox(

   [Character](/constants/characters.md) character

   )
    {RET} [nil](/types/nil.md)
   {DESC} Refreshes the character hitboxes. Warning: Could mess things up if used on characters that are currently not active. Use with caution.
====
   {NAME} setCostume(

   [Character](/constants/characters.md) character,

   [string](/types/string.md) filepath,

   [bool](/types/bool.md) volatile

   )
    {RET} [nil](/types/nil.md)
   {DESC} The same as [Player.setCostume/player:setCostume](/reference/player.md). Sets a costume for a character. If volatile is true, the costume is discarded upon next load.
====
   {NAME} getCostume(

   [Character](/constants/characters.md) character

   )
    {RET} [string](/types/table.md) costume name
   {DESC} The same as [Player.getCostume/player:getCostume](/reference/player.md). Gets the name of the currently equipped costume by the specified character.
====
   {NAME} getCostumeFromData(

   [Character](/constants/characters.md) character

   )
    {RET} [string](/types/table.md) costume name
   {DESC} Returns the current costume name if a non-volatile costume is stored in SaveData for the character.
====
   {NAME} getCostumes(

   [Character](/constants/characters.md) character

   )
    {RET} [table](/types/table.md) of [string](/types/table.md) costume names
   {DESC} Returns a list of all costumes registered to the character.
====
   {NAME} getCostumeImage(

   [Character](/constants/characters.md) character,

   [Powerup](/constants/powerups.md) powerup

   )
    {RET} [Texture](/types/texture.md)
   {DESC} Returns the player spritesheet for the specified player and powerup given the currently equipped costume.
====
   {NAME} winStateCheck()
    {RET} [nil](/types/nil.md)
   {DESC} Forces player keys to false if the player has won the level. Currently incompatible with multiplayer.
{ENDTABLE}

## Fields

{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE} [table](/types/table.md) of [Character](/constants/characters.md) characters
  {FIELD} overworldCharacters
     {RO} No
   {DESC} A list of all characters available to switch between on the overworld. Defaults to all characters unless otherwise specified in the world file.
{ENDTABLE}
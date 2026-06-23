# Explosion

Explosions are objects that create effects and generally cause destruction. They last for only a single frame, and don't exist afterward.

## Static Members

These elements are static to the class itself and can be accessed like so:
```lua
local explosions = Explosion.get()

local myExplosionID = Explosion.register(64, 10, 43, true, false)
local newExplosion = Explosion.spawn(player.x, player.y, myExplosionID, player)
```

### Static Functions
{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} Explosion.spawn([number](/types/number.md) x, [number](/types/number.md) y, [number](/types/number.md) id, [Player](/reference/player.md) player)
    {RET} [Explosion](/reference/explosion.md) newExplosion or [nil](/types/nil.md)
   {DESC} Spawns a new explosion. Player is the player that's responsible for the explosion, and is optional. <Note type="warning">Can return nil if the explosion is cancelled.</Note>
====
   {NAME} Explosion.create([number](/types/number.md) x, [number](/types/number.md) y, [number](/types/number.md) id, [number](/types/number.md) playerIndex, [bool](/types/bool.md) spawnEffect)
    {RET} [Explosion](/reference/explosion.md) newExplosion
   {DESC} Spawns a new explosion. Player index is the index of the player that's responsible for the explosion, and is optional. Using this does not add it to the list returned by Explosion.get(). <Note type="warning">Can return nil if the explosion is cancelled.</Note>
====
   {NAME} Explosion.get()
    {RET} [table](/types/table.md) of [Explosion](/reference/explosion.md) explosions
   {DESC} Returns a table of references to all explosions that are currently active. <Note type="tip">Use onExplosion/onPostExplosion for reacting to explosions.</Note>
====
   {NAME} Explosion.get([number](/types/number.md) or [table](/types/table.md) ids)
    {RET} [table](/types/table.md) of [Explosion](/reference/explosion.md) explosions
   {DESC} Returns a table of references to all explosions of the given id(s) that are currently active. <Note type="tip">Use onExplosion/onPostExplosion for reacting to explosions.</Note>
====
   {NAME} Explosion.register([number](/types/number.md) id, [number](/types/number.md) radius, [number](/types/number.md) effectID, [number](/types/number.md) or [string](/types/string.md) sound, [bool](/types/bool.md) strong, [bool](/types/bool.md) friendly)
    {RET} [number](/types/number.md) explosionID
   {DESC} Registers a new type of explosion of a specific ID. If strong is true, it can break through grey brick blocks (block-457). If friendly is true, it won't hurt any players.
====
   {NAME} Explosion.register([number](/types/number.md) radius, [number](/types/number.md) effectID, [number](/types/number.md) or [string](/types/string.md) sound, [bool](/types/bool.md) strong, [bool](/types/bool.md) friendly)
    {RET} [number](/types/number.md) explosionID
   {DESC} Registers a new type of explosion with an automatically assigned ID, and returns that ID. If strong is true, it can break through grey brick blocks (block-457). If friendly is true, it won't hurt any players.
{ENDTABLE}

### Default Explosion IDs

{STARTTABLE}
   {TYPE} ID
   {DESC} Description
====
   {TYPE} 0
   {DESC} Peach bomb
====
   {TYPE} 1
   {DESC} Unused (reserved ID)
====
   {TYPE} 2
   {DESC} SMB2 bomb
====
   {TYPE} 3
   {DESC} SMB3 bomb
====
   {TYPE} 4
   {DESC} TNT block explosion
====
   {TYPE} 5
   {DESC} Nitro block explosion
{ENDTABLE}

## Instance Members

Instance members must be accessed through a reference to a specific [Explosion](/reference/explosion.md) object.
```lua
myExplosion.radius = 128
```
<Note type="warning">Attempting to call instance members statically will result in an error!</Note>

### Instance Fields

<!-- (Consider an icon for "read only".) -->
{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
   {DESC} Description
====
   {TYPE} [number](/types/number.md)
  {FIELD} x
   {DESC} The X position of the explosion's centre.
====
   {TYPE} [number](/types/number.md)
  {FIELD} y
   {DESC} The Y position of the explosion's centre.
====
   {TYPE} [number](/types/number.md)
  {FIELD} radius
   {DESC} The radius of the explosion's hitbox.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} strong
   {DESC} Whether or not it can break grey brick blocks (block-457).
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} friendly
   {DESC} Whether or not it can hurt players.
====
   {TYPE} CircleCollider
  {FIELD} collider
   {DESC} A circle collider representing the explosion hitbox.
{ENDTABLE}
<!-- (These badges could be used/modified for deprecated items of other kinds, too!) -->

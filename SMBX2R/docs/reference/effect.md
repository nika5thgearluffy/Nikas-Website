# Effect

Effects are visual effects that happen when NPCs die, blocks break and various other actions are performed.

Currently, effects are split into two systems: The SMBX 1.3 system, used for effect IDs 1-161, and the SMBX2 effects system, used for effect IDs 162 onwards.

For documentation of the SMBX 1.3 effects system, please refer to [this page](https://wohlsoft.ru/pgewiki/Animation_(class)).

## Static Members

These elements are static to the class itself and can be accessed like so:
```lua
local effects = Effect.get()
```

### Static Functions
| Function | Return Values | Description |
| --- | --- | --- |
| Effect.count() | [number](/types/number.md) Number of effects | Returns the number of 1.3 effects currently active. |
| Effect.get() | [table](/types/table.md) of [Effect](/reference/effect.md) Effects | Returns a table of references to all 1.3 effects in the level. |
| Effect.get([number](/types/number.md) or [table](/types/table.md) ids) | [table](/types/table.md) of [Effect](/reference/effect.md) Effects | Returns a table of references to all 1.3 effects of the given id(s). For obtaining SMBX2 effects lists while the effect systems are split, refer to [bettereffects](/modules/bettereffects.md). |
| Effect.getIntersecting([number](/types/number.md) x1, [number](/types/number.md) y1, [number](/types/number.md) x2, [number](/types/number.md) y2) | [table](/types/table.md) of [Effect](/reference/effect.md) Effects | Returns a table of references to all 1.3 effects that are within the rectangle defined by the 4 coordinates, where x1 and y1 must be smaller than x2 and y2 respectively. |
| Effect.spawn([number](/types/number.md) id, [number](/types/number.md) x, [number](/types/number.md) y, [number](/types/number.md) variant, [number](/types/number.md) npcID, [bool](/types/bool.md) drawOnlyMask) | [Effect](/reference/effect.md) Effect | Spawns a new effect at the given location. Variant is optional and specifies which variant of an effect to use. npcID is optional and will set the npcID variable on effects spawned (used by some effects like Yoshi Eggs). DrawOnlyMask makes the effect silhouette render (only 1.3 effects). |
| Effect.spawn([number](/types/number.md) id, [object](/types/object.md) target, [number](/types/number.md) variant, [number](/types/number.md) npcID, [bool](/types/bool.md) drawOnlyMask) | [Effect](/reference/effect.md) Effect | Spawns a new effect at the location of the given object with x, y, width and height fields (Player, NPC, Block or other). If the ID is higher than 161, a SMBX2 effect is spawned. Else, a 1.3 effect is spawned. Variant is optional and specifies which variant of an effect to use. npcID is optional and will set the npcID variable on effects spawned (used by some effects like Yoshi Eggs). DrawOnlyMask makes the effect silhouette render (only 1.3 effects). |

### Static Fields

{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE} [table](/types/table.md) of [Effect Config](/features/effect-config.md)
  {FIELD} Effect.config
     {RO} No
   {DESC} Lua representation of all Effect config. The way to access individual fields is as follows: Effect.config[id].field. (ex. Effect.config[1].width = 5). Fields can be read and set.
{ENDTABLE}

## Instance members

Instance members must be accessed through a reference to a specific SMBX2 [Effect](/reference/effect.md) object.

SMBX2 effects are split into two types of objects: The spawner, and the effect particle. When you Effect.spawn an effect, you create an effect spawner. This spawner then spawns the individual effect objects from the config. Setting values on the spawner will override the config values when it spawns effects, but will not affect already spawned effects.

Example:

```lua
local effectSpawner

function onStart()
   effectSpawner = Effect.spawn(162, player)
   -- Will affect all effects spawned from this spawner
   effectSpawner.x = player.x + 100
end

function onTick()
   -- Will manipulate effects that have already been spawned
   for k,v in ipairs(effectSpawner.effects) do
      v.speedX = v.speedX + 0.2
   end
end
```

<Note type="warning">Attempting to call instance members statically will result in an error!</Note>

### Shared Instance Methods

[What is a method?](/types/function.md#methods)

{STARTTABLE}
   {NAME} Method
    {RET} Return Values
   {DESC} Description
====
   {NAME} kill()
    {RET} [nil](/types/nil.md)
   {DESC} Kills the effect spawner or effect particle instantly.
{ENDTABLE}

### Spawner Instance Fields

These fields are available on the effect spawner object. In addition to the fields listed, marked particle instance fields be set to override their config counterpart. More info in the below section on particle instance fields.

Fields marked with (RANGE) can be a number range, expressed as a table with 2 indices specifying the lower and upper bounds.

```lua
local spawner = Effect.spawn(200, player)
spawner.xOffset = 4
spawner.yOffset = {-4, 4}
```

<!-- (Consider an icon for "read only".) -->
{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE} [number](/types/number.md)
  {FIELD} id
     {RO} No
   {DESC} The Effect spawner's ID.
====
   {TYPE} [number](/types/number.md)
  {FIELD} x
     {RO} No
   {DESC} The Effect spawner's x coordinate.
====
   {TYPE} [number](/types/number.md)
  {FIELD} y
     {RO} No
   {DESC} The Effect spawner's y coordinate.
====
   {TYPE} [number](/types/number.md) (RANGE)
  {FIELD} xOffset
     {RO} No
   {DESC} Override for the xOffset config property.
====
   {TYPE} [number](/types/number.md) (RANGE)
  {FIELD} yOffset
     {RO} No
   {DESC} Override for the yOffset config property.
====
   {TYPE} [SFX](/reference/SFX.md)
  {FIELD} sound
     {RO} No
   {DESC} Override for the sound config property. Sound to play when an effect spawns.
====
   {TYPE} [number](/types/number.md)
  {FIELD} width
     {RO} No
   {DESC} The Effect spawner's width. Defaults to the width and height of the first spawned effect.
====
   {TYPE} [number](/types/number.md)
  {FIELD} height
     {RO} No
   {DESC} The Effect spawner's height. Defaults to the width and height of the first spawned effect.
====
   {TYPE} [number](/types/number.md)
  {FIELD} spawnerSpeedX
     {RO} No
   {DESC} The Effect spawner's horizontal speed. Distinct from speedX, which applies as the config value override for the spawned effect object.
====
   {TYPE} [number](/types/number.md)
  {FIELD} spawnerSpeedY
     {RO} No
   {DESC} The Effect spawner's vertical speed. Distinct from speedX, which applies as the config value override for the spawned effect object.
====
   {TYPE} [number](/types/number.md)
  {FIELD} lastX
     {RO} No
   {DESC} Last frame's position of the spawner, for updating the position of the spawner's particles.
====
   {TYPE} [number](/types/number.md)
  {FIELD} lastY
     {RO} No
   {DESC} Last frame's position of the spawner, for updating the position of the spawner's particles.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} skipPositionUpdate
     {RO} No
   {DESC} If set to true, child effects will not move with their spawner.
====
   {TYPE} [number](/types/number.md)
  {FIELD} timer
     {RO} No
   {DESC} Counts up from 0. Used for spawning delayed effect particles.
====
   {TYPE} [number](/types/number.md)
  {FIELD} variant
     {RO} No
   {DESC} The variant number passed from the Effect.spawn call.
====
   {TYPE} [object](/types/object.md)
  {FIELD} parent
     {RO} No
   {DESC} Stores the x/y values, or the target's x/y/width/height/speedX/speedY from the Effect.spawn call.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} waitingToRemove
     {RO} No
   {DESC} If true, the spawner is waiting for its effects to despawn, so that it can be safely removed.
====
   {TYPE} [table](/types/table.md) of [Effect](/reference/effect.md)
  {FIELD} effects
     {RO} No
   {DESC} The list of spawned effect particles for this spawner.
====
   {TYPE} [table](/types/table.md) of [number](/types/number.md)
  {FIELD} startTimes
     {RO} No
   {DESC} A map of effect particle layers to their delay values.
====
   {TYPE} [table](/types/table.md) of [bool](/types/bool.md)
  {FIELD} finished
     {RO} No
   {DESC} A map of effect particle layers to whether or not they have already been spawned.
{ENDTABLE}

### Particle Instance Fields

These fields are used by the effect's particle instance objects. Many of these fields are applied from effect config, and can have an override set on the spawner before the particle is spawned.

Overridable fields marked with (RANGE) can be a number range on the SPAWNER, expressed as a table with 2 indices specifying the lower and upper bounds.

```lua
local spawner = Effect.spawn(200, player)
spawner.xOffset = 4
spawner.yOffset = {-4, 4}
```

<!-- (Consider an icon for "read only".) -->
{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
     {SO} Spawner-Overridable?
   {DESC} Description
====
   {TYPE} [number](/types/number.md)
  {FIELD} id
     {RO} No
     {SO} Yes
   {DESC} The Effect's ID.
====
   {TYPE} [number](/types/number.md)
  {FIELD} x
     {RO} No
     {SO} Yes
   {DESC} The Effect's x coordinate.
====
   {TYPE} [number](/types/number.md)
  {FIELD} y
     {RO} No
     {SO} Yes
   {DESC} The Effect's y coordinate.
====
   {TYPE} [number](/types/number.md)
  {FIELD} width
     {RO} No
     {SO} Yes
   {DESC} The Effect's width.
====
   {TYPE} [number](/types/number.md)
  {FIELD} height
     {RO} No
     {SO} Yes
   {DESC} The Effect's height.
====
   {TYPE} [number](/types/number.md)
  {FIELD} speedX
     {RO} No
     {SO} Yes
   {DESC} The Effect's horizontal speed. Sums the spawner's spawnerSpeedX with the speedX config/override.
====
   {TYPE} [number](/types/number.md)
  {FIELD} speedY
     {RO} No
     {SO} Yes
   {DESC} The Effect's vertical speed. Sums the spawner's spawnerSpeedY with the speedY config/override.
====
   {TYPE} [number](/types/number.md)
  {FIELD} maxSpeedX
     {RO} No
     {SO} Yes (RANGE)
   {DESC} The Effect's maximum horizontal speed.
====
   {TYPE} [number](/types/number.md)
  {FIELD} maxSpeedY
     {RO} No
     {SO} Yes (RANGE)
   {DESC} The Effect's maximum vertical speed.
====
   {TYPE} [number](/types/number.md)
  {FIELD} direction
     {RO} No
     {SO} Yes
   {DESC} The Effect's facing direction.
====
   {TYPE} [number](/types/number.md)
  {FIELD} gravity
     {RO} No
     {SO} Yes (RANGE)
   {DESC} The Effect's per-tick gravity.
====
   {TYPE} [number](/types/number.md)
  {FIELD} xAlign
     {RO} No
     {SO} Yes
   {DESC} Determines the horizontal sprite anchor for the Effect. Left is 0, Right is 1.
====
   {TYPE} [number](/types/number.md)
  {FIELD} yAlign
     {RO} No
     {SO} Yes
   {DESC} Determines the vertical sprite anchor for the Effect. Top is 0, Bottom is 1.
====
   {TYPE} [number](/types/number.md)
  {FIELD} lifetime
     {RO} No
     {SO} Yes (RANGE)
   {DESC} The particle's lifetime, expressed in frames.
====
   {TYPE} [number](/types/number.md)
  {FIELD} timer
     {RO} No
     {SO} No
   {DESC} Counts down from lifetime, towards 0. Manages the particle's lifetime and often parts of its logic.
====
   {TYPE} [number](/types/number.md)
  {FIELD} subTimer
     {RO} No
     {SO} No
   {DESC} Unused by any SMBX2 particles, but included for future compatibility.
====
   {TYPE} [number](/types/number.md)
  {FIELD} variant
     {RO} No
     {SO} Yes
   {DESC} The variant of the effect.
====
   {TYPE} [number](/types/number.md)
  {FIELD} variants
     {RO} No
     {SO} Yes
   {DESC} The number of variants the effect has.
====
   {TYPE} [object](/types/object.md)
  {FIELD} parent
     {RO} No
     {SO} Yes
   {DESC} Stores the spawner's parent values.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} isHidden
     {RO} No
     {SO} No
   {DESC} If true, the Effect's execution is halted and the Effect is invisible.
====
   {TYPE} [Texture](/types/texture.md)
  {FIELD} img
     {RO} No
     {SO} Yes
   {DESC} The image that is drawn for the Effect.
====
   {TYPE} [number](/types/number.md)
  {FIELD} priority
     {RO} No
     {SO} Yes
   {DESC} The Effect's render priority.
====
   {TYPE} [number](/types/number.md)
  {FIELD} animationFrame
     {RO} No
     {SO} Yes
   {DESC} The Effect's animation frame.
====
   {TYPE} [number](/types/number.md)
  {FIELD} animationTimer
     {RO} No
     {SO} Yes
   {DESC} The Effect's animation timer.
====
   {TYPE} [number](/types/number.md)
  {FIELD} frames
     {RO} No
     {SO} Yes
   {DESC} The number of frames the Effect has per direction per variant.
====
   {TYPE} [number](/types/number.md)
  {FIELD} framestyle
     {RO} No
     {SO} Yes
   {DESC} The framestyle of the Effect (0 or 1).
====
   {TYPE} [number](/types/number.md)
  {FIELD} framespeed
     {RO} No
     {SO} Yes
   {DESC} The number of frames between changes to the animation.
====
   {TYPE} [number](/types/number.md)
  {FIELD} angle
     {RO} No
     {SO} Yes (RANGE)
   {DESC} The angle of the Effect.
====
   {TYPE} [number](/types/number.md)
  {FIELD} rotation
     {RO} No
     {SO} Yes (RANGE)
   {DESC} The per-frame change of angle of the Effect.
====
   {TYPE} [number](/types/number.md)
  {FIELD} frameOffset
     {RO} No
     {SO} Yes
   {DESC} The sprite sheet animation frame offset caused by variants.
====
   {TYPE} [number](/types/number.md)
  {FIELD} npcID
     {RO} No
     {SO} Yes
   {DESC} Used by some effects to spawn NPCs as part of their logic.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} drawOnlyMask
     {RO} No
     {SO} Yes
   {DESC} If true, the Effect is drawn all black. (only works for 1.3 effects right now)
{ENDTABLE}
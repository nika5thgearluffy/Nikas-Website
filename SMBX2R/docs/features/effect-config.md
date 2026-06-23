# Effect Config

<Note type="warning">Effect config is currently only usable for effect IDs 162 and up.</Note>

Effect config provides an easy way to change properties of effects without needing to do any programming. Effect config is defined in a txt file with identical name to the effect whose ID you wish to replace. For example, a "effect-162.txt" may look like this:

```json
[Layer1]
import = AI_ARC
frames = 2
framestyle = 1
framespeed = 8

[Layer2]
template = Layer1
framespeed = 4
```

Effect config files are similar, but not identical to other config files for blocks, npcs, background objects and parallaxing backgrounds.

Just like parallaxing background config, effect config makes use of layers in the file, denoted by `[layerName]` blocks at the top of a section of configuration values. Each layer corresponds to one instance of an effect being spawned with the provided parameters. Layers can be used to spawn multiple effects images at once in one configuration.

<Note type="warning">Effect config layers need an image. By default, they will attempt to use an effect-id.png file of the same ID as the file name. This can be overridden with the "img" parameter (see below). If no image file is provided, the effect config file will throw an error.</Note>

## Default effects

If you are lost or want to look at default effects for reference, you can find basegame effect config definitions in the data/config/effects directory in your SMBX2 installation.

## Alignment constants

Alignment constants can be used for spawnBind and offset fields in the config file.

| Name | Value |
| --- | --- |
| LEFT | 0 |
| TOP | 0 |
| CENTER | 0.5 |
| CENTRE | 0.5 |
| MID | 0.5 |
| MIDDLE | 0.5 |
| RIGHT | 1 |
| BOTTOM | 1 |

## Priority constants

Priority constants can be used for priority field in the config file.

| Name | Value |
| --- | --- |
| BACKGROUND | -60 |
| FOREGROUND | -5 |

## Number ranges

Just like particle configs, effect configs can use number ranges for certain config fields. This means that a random value between the two extremes is selected.

```
[1]
speedX = -2:2
```

This config chooses a random speedX value between -2 and 2 for every effect it spawns.

## Available args

| Name | Type | Description | Default |
| --- | --- | --- | --- |
| Spawning |
| img | [number](/types/number.md) | ID of the effect image to use. | Same as the effect file ID. |
| delay | [number](/types/number.md) | Number of frames after the effect is spawned before this layer should spawn. | 0 |
| xAlign | [number](/types/number.md) | Horizontal position of the layer's X coordinate relative to the sprite. Also the anchor of rotation. | LEFT |
| yAlign | [number](/types/number.md) | Vertical position of the layer's Y coordinate relative to the sprite. Also the anchor of rotation. | TOP |
| spawnBindX | [number](/types/number.md) | Horizontal anchor of the effect layer relative to the parent, if spawned with an x/y/width/height object rather than just a position. | LEFT |
| spawnBindY | [number](/types/number.md) | Vertical anchor of the effect layer relative to the parent, if spawned with an x/y/width/height object rather than just a position. | TOP |
| xOffset | [number](/types/number.md) (RANGE) | Horizontal offset relative to the effect spawn position. | 0 |
| yOffset | [number](/types/number.md) (RANGE) | Vertical offset relative to the effect spawn position. | 0 |
| lifetime | [number](/types/number.md) (RANGE) | Number of frames before this effect layer despawns. | 65 |
| sound | [number](/types/number.md) | ID of sound effect to play on spawn. | None |
| Animation |
| frames | [number](/types/number.md) | Number of frames of the effect animation. | 1 |
| framespeed | [number](/types/number.md) | The amount of ticks it takes for the effect animation frame to change. Lower numbers = faster animation. | 8 |
| width | [number](/types/number.md) | The width of the effect image. | Inferred from sprite |
| height | [number](/types/number.md) | The height of the effect image. | Inferred from sprite and frames |
| priority | [number](/types/number.md) | The effect's [Render Priority](/concepts/render-priority.md). | FOREGROUND (-5) |
| opacity | [number](/types/number.md) | The effect's opacity. | 1 |
| direction | [number](/types/number.md) | The effect layer's direction. | -1 |
| variants | [number](/types/number.md) | Number of variations of the animation. | 1 |
| variant | [number](/types/number.md) | The variation index used by the layer. | 1 |
| Behaviour |
| import | Config table | An effect config to import. See below for more info. | None |
| onInit | Config function | An onInit function to use. See below for more info. | None |
| onTick | Config function | An onTick function to use. See below for more info. | None |
| onDeath | Config function | An onDeath function to use. See below for more info. | None |
| template | Config layer name | Copies another config layer's config. | None |
| speedX | [number](/types/number.md) (RANGE) | The effect's initial horizontal speed. | 0 |
| speedY | [number](/types/number.md) (RANGE) | The effect's initial vertical speed. | 0 |
| gravity | [number](/types/number.md) (RANGE) | The effect's gravity. | 0 |
| maxSpeedX | [number](/types/number.md) (RANGE) | The effect's maximum horizontal speed. | -1 (infinite) |
| maxSpeedY | [number](/types/number.md) (RANGE) | The effect's maximum vertical speed. | -1 (infinite) |
| angle | [number](/types/number.md) | The effect's initial angle. | 0 |
| rotation | [number](/types/number.md) (RANGE) | The effect's rotation per frame. | 0 |

## Spritesheet layout

The total number of frames on an effect spritesheet is as follows for framestyles 0 and 1:
`frames * (framestyle+1) * variants`
A spritesheet with 2 frames, framestyle 1 and 2 variants will be laid out like this:
```
Left 1 Variant 1
Left 2 Variant 1
Right 1 Variant 1
Right 2 Variant 1
Left 1 Variant 2
Left 2 Variant 2
Right 1 Variant 2
Right 2 Variant 2
```

Variant sprites are a concept unique to effects. An example would be the different colours of yoshi egg contained in a single effect. The variant used by an effect can be set with specific Effect.spawn function calls, too.

## template

The template config copies the config of another layer.

```
[Layer1]
import = AI_ARC
frames = 2
framespeed = 6
speedX = 2
speedY = 4

[Layer2]
template=Layer1
speedX = -2
```

Layer2 inherits speedY = 4, frames = 2 and framespeed = 6, as well as AI_ARC. But its speedX is overridden to be -2.

## import, onInit, onTick, onDeath

These four behaviour fields are special import fields for importing behaviour from effectconfig.lua. Configurations can be added to the relevant effectconfig.lua tables and imported to effect files with these fields by providing the name. The built-in configs are available below:

| Type | Name | Description |
| --- | --- | --- |
| import | AI_DROP | Simply falls down. |
| import | AI_STOMPED | Stationary for a short while, then disappears. |
| import | AI_SINGLE | Disappears after the sprite sheet animation played once from start to finish. |
| import | AI_SINGLE_DOUBLESPEED | Like AI_SINGLE, but doubles the speed of the effect. |
| import | AI_SLIDEPUFF | Like AI_SINGLE, but messes with speedY in the tick function to replicate the slide puff effect. |
| import | AI_DOOR | Replicates the opening and closing effect of a door. |
| import | AI_PLAYER | Replicates a player death effect. |
| import | AI_ARC | Replicates the effect of an NPC getting knocked up in an arc and falling down. |
| import | AI_EGG | Replicates the Yoshi Egg effect. If an effect with this AI is spawned with the npcID flag set in the Effect.spawn call, it will spawn that NPC. |
| import | AI_SPINJUMP | Replicates the spinjump cloud behaviour. |
| import | AI_WIGGLE | The effect is knocked up and falls down, but at lower gravity and with a wiggling motion. |
| import | AI_STARCOIN | The effect movement used by the Star Coin NPC. |
| import | AI_COIN | Replicates the coin-out-of-block effect. |
| import | AI_SLEEP | The motion of the ZZZ sleep effects of the Rip van Fish NPC. |
| import | AI_FIREBALL | Movement of a fireball's fire trail. |
| import | AI_ICEBALL | Like AI_FIREBALL, but with frames=3. |
| import | AI_BABYYOSHI | A Baby Yoshi's spawn effect. Tries to spawn a Yoshi when finished. |
| import | AI_TURNBLOCK | The turn block's effect. |
| import | AI_PEACHBOMB | The peach bomb explosion effect. |
| import | AI_LARRY | The effect of Larry's shell flying into the air. |
| import | AI_MOTHER | The effect of Mother Brain dying. |
| import | AI_BOMB_SMB3 | The SMB3 Bomb Explosion effect. |
| import | AI_WATERBUBBLE | The effect of an underwater breathing bubble. |
| import | AI_WATERSPLASH | The effect of water surface splashes. |
| import | AI_RESERVESPARK | The spark effect used by reserve item blocks. |
| import | AI_CRASHSWITCH | The crash switch exclamation mark. |
| onInit | INIT_LEGACYBOSS | Handles NPC spawning for legacy boss NPCs (Boom Boom). |
| onInit | INIT_SETDIR | Sets the effect's direction to -1 if speed is positive, 1 if negative. |
| onInit | INIT_BABYYOSHI | Initializes a Baby Yoshi effect. |
| onInit | INIT_GLASSSHARDS | Randomizes the variant of the mother brain glass shards. |
| onInit | INIT_1INDEXED | Correction function for 1-indexed variants in Redigit code. |
| onTick | TICK_EGG | Runs per-frame logic for eggs. |
| onTick | TICK_WIGGLE | Handles the wiggle of a wiggling effect. |
| onTick | TICK_STARCOIN | The Star Coin's bounce movement. |
| onTick | TICK_TURNBLOCK | Prevents the effect from dying while the player is overlapping. Syncs frame with all other effects of this ID. |
| onTick | TICK_SLEEP | Per-frame logic for Rip van Fish's sleep effect. |
| onTick | TICK_SLOWDOWN | Gradually slows down y-speed. |
| onTick | TICK_BOMB_SMB3 | Spawns a lot of bomb effects. |
| onTick | TICK_PINGPONG | Plays the animation forwards, then backwards. Used by the door AI. |
| onTick | TICK_SINGLE | Forces the effect to die after one animation cycle. |
| onTick | TICK_DOUBLESPEED | Forces the effect to die after one animation cycle. Doubles the speed of the effect. |
| onTick | TICK_WATERBUBBLE | Movement of the breathing bubble. |
| onTick | TICK_WATERSPLASH | Logic for the water splash effect. |
| onTick | TICK_MOTHER | Spawns a lot of Mother Brain explosion effects. |
| onTick | TICK_SINGLE_DOUBLESPEED | Uses TICK_SINGLE and doubles X-Speed. |
| onTick | TICK_SLIDEPUFF | Uses TICK_SINGLE and gently moves the effect upwards. |
| onTick | TICK_FIREBALL | Uses TICK_SINGLE and randomizes position every frame. |
| onTick | TICK_PEACHBOMB | Uses TICK_SINGLE and spawns random sparkles. |
| onTick | TICK_ARC | Gradually slows down speedX. |
| onTick | TICK_LARRY | The movement of Larry's death effect. |
| onTick | TICK_BLAARG | The movement of Blaaarg's eyes. |
| onTick | TICK_RESERVESPARK | The movement of the reserve item block's spark. |
| onTick | TICK_COIN | The coin-out-of-block effect's logic. |
| onTick | TICK_CHUCK | Logic for a Chargin' Chuck hurt effect. Tries to turn back into a Chuck when finished. |
| onTick | TICK_CRASHSWITCH | The movement of the exclamation mark of the crash switch. |
| onDeath | DEATH_TURNBLOCK | Turns the turn block effect back into a block. |
| onDeath | DEATH_COIN | Spawns a score effect and adds to the score and coin counters. |
| onDeath | DEATH_EGG | Spawns an NPC or a Baby Yoshi effect. |
| onDeath | DEATH_SMOKE | Spawns a smoke puff. |
| onDeath | DEATH_SHELL | Spawns a shell hit star effect. |
| onDeath | DEATH_SPAWNNPCID | Spawns an NPC of the npcID stored in the effect. |
| onDeath | DEATH_LEGACYBOSS | Spawns the legacy boss's goal item. |
# SFX List

All of the sound effects that were present in 1.3 (under original SFX IDs) have an ID number and can be played just by using the ID, like so:

```lua
-- Plays the jump sound effect.
SFX.play(1)
```

Meanwhile, all of the sound effects from X2 (under extended sounds and character sounds) cannot be played by just using an ID, but can still be loaded and then played.

```lua
-- Load sound/extended/bumper (note that with resolveSoundFile, an file extension or specifying the extended folder is unnecessary. Also note that this should generally be outside of any functions, to avoid finding it every time.)
local mySound = Misc.resolveSoundFile("bumper")

-- Play it.
SFX.play(mySound)
```

## Original SFX IDs

{STARTTABLE}
   {ID} ID
   {FN} Filename
 {NAME} Name
 {DESC} Notes
{SOUND} Audio
====
   {ID} 1
   {FN} player-jump.ogg
 {NAME} Jump
 {DESC}
{SOUND} {AUDIO = sounds/player-jump.ogg}
====
   {ID} 2
   {FN} stomped.ogg
 {NAME} Stomp
 {DESC}
{SOUND} {AUDIO = sounds/stomped.ogg}
====
   {ID} 3
   {FN} block-hit.ogg
 {NAME} Block Hit
 {DESC}
{SOUND} {AUDIO = sounds/block-hit.ogg}
====
   {ID} 4
   {FN} block-smash.ogg
 {NAME} Block Smashed
 {DESC}
{SOUND} {AUDIO = sounds/block-smash.ogg}
====
   {ID} 5
   {FN} player-shrink.ogg
 {NAME} Shrink
 {DESC}
{SOUND} {AUDIO = sounds/player-shrink.ogg}
====
   {ID} 6
   {FN} player-grow.ogg
 {NAME} Grow
 {DESC}
{SOUND} {AUDIO = sounds/player-grow.ogg}
====
   {ID} 7
   {FN} mushroom.ogg
 {NAME} Mushroom
 {DESC}
{SOUND} {AUDIO = sounds/mushroom.ogg}
====
   {ID} 8
   {FN} player-died.ogg
 {NAME} Player Died
 {DESC}
{SOUND} {AUDIO = sounds/player-died.ogg}
====
   {ID} 9
   {FN} shell-hit.ogg
 {NAME} Shell Kick
 {DESC}
{SOUND} {AUDIO = sounds/shell-hit.ogg}
====
   {ID} 10
   {FN} player-slide.ogg
 {NAME} Skid
 {DESC}
{SOUND} {AUDIO = sounds/player-slide.ogg}
====
   {ID} 11
   {FN} item-dropped.ogg
 {NAME} Drop Item
 {DESC}
{SOUND} {AUDIO = sounds/item-dropped.ogg}
====
   {ID} 12
   {FN} has-item.ogg
 {NAME} Got Item
 {DESC}
{SOUND} {AUDIO = sounds/has-item.ogg}
====
   {ID} 13
   {FN} camera-change.ogg
 {NAME} Camera
 {DESC}
{SOUND} {AUDIO = sounds/camera-change.ogg}
====
   {ID} 14
   {FN} coin.ogg
 {NAME} Coin
 {DESC}
{SOUND} {AUDIO = sounds/coin.ogg}
====
   {ID} 15
   {FN} 1up.ogg
 {NAME} 1UP
 {DESC}
{SOUND} {AUDIO = sounds/1up.ogg}
====
   {ID} 16
   {FN} lava.ogg
 {NAME} Lava
 {DESC}
{SOUND} {AUDIO = sounds/lava.ogg}
====
   {ID} 17
   {FN} warp.ogg
 {NAME} Warp
 {DESC}
{SOUND} {AUDIO = sounds/warp.ogg}
====
   {ID} 18
   {FN} fireball.ogg
 {NAME} Fireball
 {DESC}
{SOUND} {AUDIO = sounds/fireball.ogg}
====
   {ID} 19
   {FN} level-win.ogg
 {NAME} SMB3 Exit
 {DESC}
{SOUND} {AUDIO = sounds/level-win.ogg}
====
   {ID} 20
   {FN} boss-beat.ogg
 {NAME} Defeat Boss
 {DESC}
{SOUND} {AUDIO = sounds/boss-beat.ogg}
====
   {ID} 21
   {FN} dungeon-win.ogg
 {NAME} Dungeon Clear
 {DESC}
{SOUND} {AUDIO = sounds/dungeon-win.ogg}
====
   {ID} 22
   {FN} bullet-bill.ogg
 {NAME} Bullet Bill
 {DESC}
{SOUND} {AUDIO = sounds/bullet-bill.ogg}
====
   {ID} 23
   {FN} grab.ogg
 {NAME} Grab
 {DESC}
{SOUND} {AUDIO = sounds/grab.ogg}
====
   {ID} 24
   {FN} spring.ogg
 {NAME} Spring
 {DESC}
{SOUND} {AUDIO = sounds/spring.ogg}
====
   {ID} 25
   {FN} hammer.ogg
 {NAME} Hammer
 {DESC}
{SOUND} {AUDIO = sounds/hammer.ogg}
====
   {ID} 26
   {FN} slide.ogg
 {NAME} Slide
 {DESC}
{SOUND} {AUDIO = sounds/slide.ogg}
====
   {ID} 27
   {FN} newpath.ogg
 {NAME} New Path
 {DESC}
{SOUND} {AUDIO = sounds/newpath.ogg}
====
   {ID} 28
   {FN} level-select.ogg
 {NAME} Level Select
 {DESC}
{SOUND} {AUDIO = sounds/level-select.ogg}
====
   {ID} 29
   {FN} do.ogg
 {NAME} Do
 {DESC}
{SOUND} {AUDIO = sounds/do.ogg}
====
   {ID} 30
   {FN} pause.ogg
 {NAME} Pause
 {DESC}
{SOUND} {AUDIO = sounds/pause.ogg}
====
   {ID} 31
   {FN} key.ogg
 {NAME} Key
 {DESC}
{SOUND} {AUDIO = sounds/key.ogg}
====
   {ID} 32
   {FN} pswitch.ogg
 {NAME} Switch
 {DESC}
{SOUND} {AUDIO = sounds/pswitch.ogg}
====
   {ID} 33
   {FN} tail.ogg
 {NAME} Tail
 {DESC}
{SOUND} {AUDIO = sounds/tail.ogg}
====
   {ID} 34
   {FN} racoon.ogg
 {NAME} Racoon
 {DESC}
{SOUND} {AUDIO = sounds/racoon.ogg}
====
   {ID} 35
   {FN} boot.ogg
 {NAME} Boot
 {DESC}
{SOUND} {AUDIO = sounds/boot.ogg}
====
   {ID} 36
   {FN} smash.ogg
 {NAME} Smash
 {DESC}
{SOUND} {AUDIO = sounds/smash.ogg}
====
   {ID} 37
   {FN} thwomp.ogg
 {NAME} Thwomp
 {DESC}
{SOUND} {AUDIO = sounds/thwomp.ogg}
====
   {ID} 38
   {FN} birdo-spit.ogg
 {NAME} Birdo Spit
 {DESC}
{SOUND} {AUDIO = sounds/birdo-spit.ogg}
====
   {ID} 39
   {FN} birdo-hit.ogg
 {NAME} Birdo Hit
 {DESC}
{SOUND} {AUDIO = sounds/birdo-hit.ogg}
====
   {ID} 40
   {FN} smb2-exit.ogg
 {NAME} SMB2 Exit
 {DESC}
{SOUND} {AUDIO = sounds/smb2-exit.ogg}
====
   {ID} 41
   {FN} birdo-beat.ogg
 {NAME} Birdo Beat
 {DESC}
{SOUND} {AUDIO = sounds/birdo-beat.ogg}
====
   {ID} 42
   {FN} npc-fireball.ogg
 {NAME} Big Fireball
 {DESC}
{SOUND} {AUDIO = sounds/npc-fireball.ogg}
====
   {ID} 43
   {FN} fireworks.ogg
 {NAME} Fireworks
 {DESC}
{SOUND} {AUDIO = sounds/fireworks.ogg}
====
   {ID} 44
   {FN} bowser-killed.ogg
 {NAME} Bowser Killed
 {DESC}
{SOUND} {AUDIO = sounds/bowser-killed.ogg}
====
   {ID} 45
   {FN} game-beat.ogg
 {NAME} SMB3 Game Beat
 {DESC}
{SOUND} {AUDIO = sounds/game-beat.ogg}
====
   {ID} 46
   {FN} door.ogg
 {NAME} Door
 {DESC}
{SOUND} {AUDIO = sounds/door.ogg}
====
   {ID} 47
   {FN} message.ogg
 {NAME} Message
 {DESC}
{SOUND} {AUDIO = sounds/message.ogg}
====
   {ID} 48
   {FN} yoshi.ogg
 {NAME} Yoshi
 {DESC}
{SOUND} {AUDIO = sounds/yoshi.ogg}
====
   {ID} 49
   {FN} yoshi-hurt.ogg
 {NAME} Yoshi Hurt
 {DESC}
{SOUND} {AUDIO = sounds/yoshi-hurt.ogg}
====
   {ID} 50
   {FN} yoshi-tongue.ogg
 {NAME} Yoshi Tongue
 {DESC}
{SOUND} {AUDIO = sounds/yoshi-tongue.ogg}
====
   {ID} 51
   {FN} yoshi-egg.ogg
 {NAME} Yoshi Egg
 {DESC}
{SOUND} {AUDIO = sounds/yoshi-egg.ogg}
====
   {ID} 52
   {FN} got-star.ogg
 {NAME} Got Star Exit
 {DESC}
{SOUND} {AUDIO = sounds/got-star.ogg}
====
   {ID} 53
   {FN} zelda-kill.ogg
 {NAME} Zelda Kill
 {DESC}
{SOUND} {AUDIO = sounds/zelda-kill.ogg}
====
   {ID} 54
   {FN} player-died2.ogg
 {NAME} Player Died 2
 {DESC}
{SOUND} {AUDIO = sounds/player-died2.ogg}
====
   {ID} 55
   {FN} yoshi-swallow.ogg
 {NAME} Yoshi Swallow
 {DESC}
{SOUND} {AUDIO = sounds/yoshi-swallow.ogg}
====
   {ID} 56
   {FN} ring.ogg
 {NAME} Sonic Ring
 {DESC}
{SOUND} {AUDIO = sounds/ring.ogg}
====
   {ID} 57
   {FN} dry-bones.ogg
 {NAME} Dry Bones
 {DESC}
{SOUND} {AUDIO = sounds/dry-bones.ogg}
====
   {ID} 58
   {FN} smw-checkpoint.ogg
 {NAME} SMW Checkpoint
 {DESC}
{SOUND} {AUDIO = sounds/smw-checkpoint.ogg}
====
   {ID} 59
   {FN} dragon-coin.ogg
 {NAME} Dragon Coin
 {DESC}
{SOUND} {AUDIO = sounds/dragon-coin.ogg}
====
   {ID} 60
   {FN} smw-exit.ogg
 {NAME} SMW Exit
 {DESC}
{SOUND} {AUDIO = sounds/smw-exit.ogg}
====
   {ID} 61
   {FN} smw-blaarg.ogg
 {NAME} Blaarg
 {DESC}
{SOUND} {AUDIO = sounds/smw-blaarg.ogg}
====
   {ID} 62
   {FN} wart-bubble.ogg
 {NAME} Wart Bubble
 {DESC}
{SOUND} {AUDIO = sounds/wart-bubble.ogg}
====
   {ID} 63
   {FN} wart-die.ogg
 {NAME} Wart Die
 {DESC}
{SOUND} {AUDIO = sounds/wart-die.ogg}
====
   {ID} 64
   {FN} sm-block-hit.ogg
 {NAME} SM Block Hit
 {DESC}
{SOUND} {AUDIO = sounds/sm-block-hit.ogg}
====
   {ID} 65
   {FN} sm-killed.ogg
 {NAME} SM Killed
 {DESC}
{SOUND} {AUDIO = sounds/sm-killed.ogg}
====
   {ID} 66
   {FN} sm-hurt.ogg
 {NAME} SM Hurt
 {DESC}
{SOUND} {AUDIO = sounds/sm-hurt.ogg}
====
   {ID} 67
   {FN} sm-glass.ogg
 {NAME} SM Glass
 {DESC}
{SOUND} {AUDIO = sounds/sm-glass.ogg}
====
   {ID} 68
   {FN} sm-boss-hit.ogg
 {NAME} SM Boss Hit
 {DESC}
{SOUND} {AUDIO = sounds/sm-boss-hit.ogg}
====
   {ID} 69
   {FN} sm-cry.ogg
 {NAME} SM Cry
 {DESC}
{SOUND} {AUDIO = sounds/sm-cry.ogg}
====
   {ID} 70
   {FN} sm-explosion.ogg
 {NAME} SM Explosion
 {DESC}
{SOUND} {AUDIO = sounds/sm-explosion.ogg}
====
   {ID} 71
   {FN} climbing.ogg
 {NAME} Climbing
 {DESC}
{SOUND} {AUDIO = sounds/climbing.ogg}
====
   {ID} 72
   {FN} swim.ogg
 {NAME} Swim
 {DESC}
{SOUND} {AUDIO = sounds/swim.ogg}
====
   {ID} 73
   {FN} grab2.ogg
 {NAME} Light Grab
 {DESC}
{SOUND} {AUDIO = sounds/grab2.ogg}
====
   {ID} 74
   {FN} smw-saw.ogg
 {NAME} Saw
 {DESC}
{SOUND} {AUDIO = sounds/smw-saw.ogg}
====
   {ID} 75
   {FN} smb2-throw.ogg
 {NAME} SMB2 Throw
 {DESC}
{SOUND} {AUDIO = sounds/smb2-throw.ogg}
====
   {ID} 76
   {FN} smb2-hit.ogg
 {NAME} SMB2 Hit
 {DESC}
{SOUND} {AUDIO = sounds/smb2-hit.ogg}
====
   {ID} 77
   {FN} zelda-stab.ogg
 {NAME} Zelda Stab
 {DESC}
{SOUND} {AUDIO = sounds/zelda-stab.ogg}
====
   {ID} 78
   {FN} zelda-hurt.ogg
 {NAME} Zelda Hurt
 {DESC}
{SOUND} {AUDIO = sounds/zelda-hurt.ogg}
====
   {ID} 79
   {FN} zelda-heart.ogg
 {NAME} Zelda Heart
 {DESC}
{SOUND} {AUDIO = sounds/zelda-heart.ogg}
====
   {ID} 80
   {FN} zelda-died.ogg
 {NAME} Zelda Died
 {DESC}
{SOUND} {AUDIO = sounds/zelda-died.ogg}
====
   {ID} 81
   {FN} zelda-rupee.ogg
 {NAME} Zelda Rupee
 {DESC}
{SOUND} {AUDIO = sounds/zelda-rupee.ogg}
====
   {ID} 82
   {FN} zelda-fire.ogg
 {NAME} Zelda Fire
 {DESC}
{SOUND} {AUDIO = sounds/zelda-fire.ogg}
====
   {ID} 83
   {FN} zelda-item.ogg
 {NAME} Zelda Item
 {DESC}
{SOUND} {AUDIO = sounds/zelda-item.ogg}
====
   {ID} 84
   {FN} zelda-key.ogg
 {NAME} Zelda Key
 {DESC}
{SOUND} {AUDIO = sounds/zelda-key.ogg}
====
   {ID} 85
   {FN} zelda-shield.ogg
 {NAME} Zelda Shield
 {DESC}
{SOUND} {AUDIO = sounds/zelda-shield.ogg}
====
   {ID} 86
   {FN} zelda-dash.ogg
 {NAME} Zelda Dash
 {DESC}
{SOUND} {AUDIO = sounds/zelda-dash.ogg}
====
   {ID} 87
   {FN} zelda-fairy.ogg
 {NAME} Zelda Fairy
 {DESC}
{SOUND} {AUDIO = sounds/zelda-fairy.ogg}
====
   {ID} 88
   {FN} zelda-grass.ogg
 {NAME} Zelda Grass
 {DESC}
{SOUND} {AUDIO = sounds/zelda-grass.ogg}
====
   {ID} 89
   {FN} zelda-hit.ogg
 {NAME} Zelda Hit
 {DESC}
{SOUND} {AUDIO = sounds/zelda-hit.ogg}
====
   {ID} 90
   {FN} zelda-sword-beam.ogg
 {NAME} Zelda Sword Beam
 {DESC}
{SOUND} {AUDIO = sounds/zelda-sword-beam.ogg}
====
   {ID} 91
   {FN} bubble.ogg
 {NAME} Bubble
 {DESC}
{SOUND} {AUDIO = sounds/bubble.ogg}
{ENDTABLE}

## Extended SFX Names

{STARTTABLE}
   {FN} Filename
 {NAME} Name
 {DESC} Notes
{SOUND} Audio
====
   {FN} alt-saw.ogg
 {NAME} Alt Saw
 {DESC} Currently unused.
{SOUND} {AUDIO = sounds/extended/alt-saw.ogg}
====
   {FN} beat-switch.ogg
 {NAME} Beat Block Switch
 {DESC} 
{SOUND} {AUDIO = sounds/extended/beat-switch.ogg}
====
   {FN} beat-warn.ogg
 {NAME} Beat Block Warn
 {DESC} 
{SOUND} {AUDIO = sounds/extended/beat-warn.ogg}
====
   {FN} birdflap.ogg
 {NAME} Bird Flap
 {DESC} Used by the SMW birds.
{SOUND} {AUDIO = sounds/extended/birdflap.ogg}
====
   {FN} bowlingball.ogg
 {NAME} Bowling Ball Hit
 {DESC} 
{SOUND} {AUDIO = sounds/extended/bowlingball.ogg}
====
   {FN} bubble-shield-jump.ogg
 {NAME} Bubble Shield Jump
 {DESC} Currently unused.
{SOUND} {AUDIO = sounds/extended/bubble-shield-jump.ogg}
====
   {FN} bubble-shield.ogg
 {NAME} Bubble Shield Get
 {DESC} Currently unused.
{SOUND} {AUDIO = sounds/extended/bubble-shield.ogg}
====
   {FN} bumper.ogg
 {NAME} Bumper Low
 {DESC} Used for small bumper bounces.
{SOUND} {AUDIO = sounds/extended/bumper.ogg}
====
   {FN} bumper2.ogg
 {NAME} Bumper High
 {DESC} Used for large bumper bounces.
{SOUND} {AUDIO = sounds/extended/bumper2.ogg}
====
   {FN} cape-swoop.ogg
 {NAME} Cape Swoop
 {DESC} Currently unused.
{SOUND} {AUDIO = sounds/extended/cape-swoop.ogg}
====
   {FN} chuck-stomp.ogg
 {NAME} Chuck Stomp
 {DESC} 
{SOUND} {AUDIO = sounds/extended/chuck-stomp.ogg}
====
   {FN} chuck-whistle.ogg
 {NAME} Chuck Whistle
 {DESC} 
{SOUND} {AUDIO = sounds/extended/chuck-whistle.ogg}
====
   {FN} crash-switch.ogg
 {NAME} Crash Anti-Nitro Switch
 {DESC} 
{SOUND} {AUDIO = sounds/extended/crash-switch.ogg}
====
   {FN} cratebreak1.ogg
 {NAME} Crate Break 1
 {DESC} Currently unused.
{SOUND} {AUDIO = sounds/extended/cratebreak1.ogg}
====
   {FN} cratebreak2.ogg
 {NAME} Crate Break 2
 {DESC} Currently unused.
{SOUND} {AUDIO = sounds/extended/cratebreak2.ogg}
====
   {FN} cratebreak3.ogg
 {NAME} Crate Break 3
 {DESC} Currently unused.
{SOUND} {AUDIO = sounds/extended/cratebreak3.ogg}
====
   {FN} cratebreak4.ogg
 {NAME} Crate Break 4
 {DESC} Currently unused.
{SOUND} {AUDIO = sounds/extended/cratebreak4.ogg}
====
   {FN} crate_break.ogg
 {NAME} Crate Break
 {DESC} 
{SOUND} {AUDIO = sounds/extended/crate_break.ogg}
====
   {FN} doo-beam-start.ogg
 {NAME} Waddle Doo Beam Start
 {DESC} 
{SOUND} {AUDIO = sounds/extended/doo-beam-start.ogg}
====
   {FN} doo-beam.ogg
 {NAME} Waddle Doo Beam Loop
 {DESC} 
{SOUND} {AUDIO = sounds/extended/doo-beam.ogg}
====
   {FN} flame-shield-dash.ogg
 {NAME} Flame Shield Dash
 {DESC} Currently unused.
{SOUND} {AUDIO = sounds/extended/flame-shield-dash.ogg}
====
   {FN} flame-shield.ogg
 {NAME} Flame Shield Get
 {DESC} Currently unused.
{SOUND} {AUDIO = sounds/extended/flame-shield.ogg}
====
   {FN} foo-die.ogg
 {NAME} Foo Death
 {DESC} 
{SOUND} {AUDIO = sounds/extended/foo-die.ogg}
====
   {FN} foo-exhale.ogg
 {NAME} Foo Exhale
 {DESC} 
{SOUND} {AUDIO = sounds/extended/foo-exhale.ogg}
====
   {FN} foo-inhale.ogg
 {NAME} Foo Inhale
 {DESC} 
{SOUND} {AUDIO = sounds/extended/foo-inhale.ogg}
====
   {FN} frightlight-appear.ogg
 {NAME} Frightlight Appear
 {DESC} 
{SOUND} {AUDIO = sounds/extended/frightlight-appear.ogg}
====
   {FN} frightlight-startle.ogg
 {NAME} Frightlight Startle
 {DESC} 
{SOUND} {AUDIO = sounds/extended/frightlight-startle.ogg}
====
   {FN} frightlight-wibrel.ogg
 {NAME} Fightlight Ambient 1
 {DESC} 
{SOUND} {AUDIO = sounds/extended/frightlight-wibrel.ogg}
====
   {FN} frightlight-wooble.ogg
 {NAME} Fightlight Ambient 2
 {DESC} 
{SOUND} {AUDIO = sounds/extended/frightlight-wooble.ogg}
====
   {FN} frightlight-worble.ogg
 {NAME} Fightlight Ambient 3
 {DESC} 
{SOUND} {AUDIO = sounds/extended/frightlight-worble.ogg}
====
   {FN} frightlight-wurble.ogg
 {NAME} Fightlight Ambient 4
 {DESC} 
{SOUND} {AUDIO = sounds/extended/frightlight-wurble.ogg}
====
   {FN} fuzzy-dizzy.ogg
 {NAME} Fuzzy Touched
 {DESC} 
{SOUND} {AUDIO = sounds/extended/fuzzy-dizzy.ogg}
====
   {FN} giantgoomba-die.ogg
 {NAME} Giant Goomba Split
 {DESC} 
{SOUND} {AUDIO = sounds/extended/giantgoomba-die.ogg}
====
   {FN} hurry-up.ogg
 {NAME} Timer Under 100
 {DESC} 
{SOUND} {AUDIO = sounds/extended/hurry-up.ogg}
====
   {FN} kirbybomb.ogg
 {NAME} Kirby Chain Block Destroyed
 {DESC} 
{SOUND} {AUDIO = sounds/extended/kirbybomb.ogg}
====
   {FN} kyaa.ogg
 {NAME} Kyaa!
 {DESC} Used only by cheats.
{SOUND} {AUDIO = sounds/extended/kyaa.ogg}
====
   {FN} launchbarrel_entering.ogg
 {NAME} Launch Barrel Entered
 {DESC} 
{SOUND} {AUDIO = sounds/extended/launchbarrel_entering.ogg}
====
   {FN} launchbarrel_fire.ogg
 {NAME} Launch Barrel Fire
 {DESC} 
{SOUND} {AUDIO = sounds/extended/launchbarrel_fire.ogg}
====
   {FN} leaf.ogg
 {NAME} Brittle Leaf Destroyed
 {DESC} 
{SOUND} {AUDIO = sounds/extended/leaf.ogg}
====
   {FN} magikoopa-magic.ogg
 {NAME} Magikoopa Magic
 {DESC} Almost identical to 41.
{SOUND} {AUDIO = sounds/extended/magikoopa-magic.ogg}
====
   {FN} megagoomba-die.ogg
 {NAME} Mega Goomba Split
 {DESC} 
{SOUND} {AUDIO = sounds/extended/megagoomba-die.ogg}
====
   {FN} megashroom.ogg
 {NAME} Mega Mushroom Music
 {DESC} 
{SOUND} {AUDIO = sounds/extended/megashroom.ogg}
====
   {FN} nitro-bounce-1.ogg
 {NAME} Nitro Bounce 1
 {DESC} 
{SOUND} {AUDIO = sounds/extended/nitro-bounce-1.ogg}
====
   {FN} nitro-bounce-2.ogg
 {NAME} Nitro Bounce 2
 {DESC} 
{SOUND} {AUDIO = sounds/extended/nitro-bounce-2.ogg}
====
   {FN} nitro-bounce-3.ogg
 {NAME} Nitro Bounce 3
 {DESC} 
{SOUND} {AUDIO = sounds/extended/nitro-bounce-3.ogg}
====
   {FN} nitro-bounce.ogg
 {NAME} Nitro Bounce
 {DESC} Currently unused.
{SOUND} {AUDIO = sounds/extended/nitro-bounce.ogg}
====
   {FN} nitro.ogg
 {NAME} Nitro Explosion
 {DESC} 
{SOUND} {AUDIO = sounds/extended/nitro.ogg}
====
   {FN} phanto-awaken.ogg
 {NAME} Phanto Awaken
 {DESC} 
{SOUND} {AUDIO = sounds/extended/phanto-awaken.ogg}
====
   {FN} phanto-move.ogg
 {NAME} Phanto Move
 {DESC} 
{SOUND} {AUDIO = sounds/extended/phanto-move.ogg}
====
   {FN} phanto-shake.ogg
 {NAME} Phanto Shake
 {DESC} 
{SOUND} {AUDIO = sounds/extended/phanto-shake.ogg}
====
   {FN} pig-grunt.ogg
 {NAME} Tantrunt Grunt
 {DESC} 
{SOUND} {AUDIO = sounds/extended/pig-grunt.ogg}
====
   {FN} pig-squeal.ogg
 {NAME} Tantrunt Squeal
 {DESC} 
{SOUND} {AUDIO = sounds/extended/pig-squeal.ogg}
====
   {FN} rinkygun-shoot.ogg
 {NAME} Rinky Gun Shoot
 {DESC} 
{SOUND} {AUDIO = sounds/extended/rinkygun-shoot.ogg}
====
   {FN} shield-loss.ogg
 {NAME} Sonic Shield Lost
 {DESC} Currently unused.
{SOUND} {AUDIO = sounds/extended/shield-loss.ogg}
====
   {FN} shield.ogg
 {NAME} Sonic Shield Get
 {DESC} Currently unused.
{SOUND} {AUDIO = sounds/extended/shield.ogg}
====
   {FN} sonic-beep.ogg
 {NAME} Asteron Activated
 {DESC} 
{SOUND} {AUDIO = sounds/extended/sonic-beep.ogg}
====
   {FN} sonic-break.ogg
 {NAME} Sonic Monitor Broken
 {DESC} 
{SOUND} {AUDIO = sounds/extended/sonic-break.ogg}
====
   {FN} spike-block.ogg
 {NAME} Synced Spike Block
 {DESC} 
{SOUND} {AUDIO = sounds/extended/spike-block.ogg}
====
   {FN} starcoin-collect.ogg
 {NAME} Star Coin Collected
 {DESC} 
{SOUND} {AUDIO = sounds/extended/starcoin-collect.ogg}
====
   {FN} starcoin-collectall.ogg
 {NAME} All Star Coins Collected
 {DESC} 
{SOUND} {AUDIO = sounds/extended/starcoin-collectall.ogg}
====
   {FN} starman.ogg
 {NAME} Starman Music
 {DESC} 
{SOUND} {AUDIO = sounds/extended/starman.ogg}
====
   {FN} swooperflap.ogg
 {NAME} Swooper Flap
 {DESC} 
{SOUND} {AUDIO = sounds/extended/swooperflap.ogg}
====
   {FN} thunder-shield-jump.ogg
 {NAME} Thunder Shield Jump
 {DESC} Currently unused.
{SOUND} {AUDIO = sounds/extended/thunder-shield-jump.ogg}
====
   {FN} thunder-shield.ogg
 {NAME} Thunder Shield Get
 {DESC} Currently unused.
{SOUND} {AUDIO = sounds/extended/thunder-shield.ogg}
====
   {FN} tnt.ogg
 {NAME} TNT Beep
 {DESC} 
{SOUND} {AUDIO = sounds/extended/tnt.ogg}
====
   {FN} waitinginthesky.ogg
 {NAME} Starman Music Cheat
 {DESC} Only used by cheats.
{SOUND} {AUDIO = sounds/extended/waitinginthesky.ogg}
====
   {FN} warp-short.ogg
 {NAME} Short Warp
 {DESC} 
{SOUND} {AUDIO = sounds/extended/warp-short.ogg}
====
   {FN} yeah.ogg
 {NAME} Yeah!
 {DESC} Only used by cheats.
{SOUND} {AUDIO = sounds/extended/yeah.ogg}
{ENDTABLE}

## Character SFX Names

{STARTTABLE}
   {FN} Filename
 {NAME} Name
 {DESC} Notes
{SOUND} Audio
====
   {FN} mm_charge1.ogg
 {NAME} Mega Man Charge Start
 {DESC} 
{SOUND} {AUDIO = sounds/character/mm_charge1.ogg}
====
   {FN} mm_charge2.ogg
 {NAME} Mega Man Charge Loop
 {DESC} 
{SOUND} {AUDIO = sounds/character/mm_charge2.ogg}
====
   {FN} mm_chargerelease.ogg
 {NAME} Mega Man Charge Release
 {DESC} 
{SOUND} {AUDIO = sounds/character/mm_chargerelease.ogg}
====
   {FN} mm_cursor.ogg
 {NAME} Mega Man Menu Cursor
 {DESC} 
{SOUND} {AUDIO = sounds/character/mm_cursor.ogg}
====
   {FN} mm_hurt.ogg
 {NAME} Mega Man Hurt
 {DESC} 
{SOUND} {AUDIO = sounds/character/mm_hurt.ogg}
====
   {FN} mm_itemgetlong.ogg
 {NAME} Mega Man Item Get Long
 {DESC} 
{SOUND} {AUDIO = sounds/character/mm_itemgetlong.ogg}
====
   {FN} mm_itemgetshort.ogg
 {NAME} Mega Man Item Get Short
 {DESC} 
{SOUND} {AUDIO = sounds/character/mm_itemgetshort.ogg}
====
   {FN} mm_pause.ogg
 {NAME} Mega Man Pause
 {DESC} 
{SOUND} {AUDIO = sounds/character/mm_pause.ogg}
====
   {FN} mm_shoot.ogg
 {NAME} Mega Man Shoot
 {DESC} 
{SOUND} {AUDIO = sounds/character/mm_shoot.ogg}
====
   {FN} mm_teleport.ogg
 {NAME} Mega Man Teleport
 {DESC} 
{SOUND} {AUDIO = sounds/character/mm_teleport.ogg}
====
   {FN} wario_buzzer.ogg
 {NAME} Wario Buzzer
 {DESC} Currently unused.
{SOUND} {AUDIO = sounds/character/wario_buzzer.ogg}
====
   {FN} wario_footstep1.ogg
 {NAME} Wario Footstep 1
 {DESC} 
{SOUND} {AUDIO = sounds/character/wario_footstep1.ogg}
====
   {FN} wario_footstep2.ogg
 {NAME} Wario Footstep 2
 {DESC} 
{SOUND} {AUDIO = sounds/character/wario_footstep2.ogg}
====
   {FN} wario_footstep3.ogg
 {NAME} Wario Footstep 3
 {DESC} 
{SOUND} {AUDIO = sounds/character/wario_footstep3.ogg}
====
   {FN} klonoa_die.ogg
 {NAME} Klonoa Death
 {DESC} 
{SOUND} {AUDIO = sounds/character/klonoa_die.ogg}
====
   {FN} klonoa_flutter.ogg
 {NAME} Klonoa Flutter
 {DESC} 
{SOUND} {AUDIO = sounds/character/klonoa_flutter.ogg}
====
   {FN} klonoa_grab.ogg
 {NAME} Klonoa Grab
 {DESC} 
{SOUND} {AUDIO = sounds/character/klonoa_grab.ogg}
====
   {FN} klonoa_hurt.ogg
 {NAME} Klonoa Hurt
 {DESC} 
{SOUND} {AUDIO = sounds/character/klonoa_hurt.ogg}
====
   {FN} klonoa_ring.ogg
 {NAME} Klonoa Ring Attack
 {DESC} 
{SOUND} {AUDIO = sounds/character/klonoa_ring.ogg}
====
   {FN} klonoa_throw.ogg
 {NAME} Klonoa Throw
 {DESC} 
{SOUND} {AUDIO = sounds/character/klonoa_throw.ogg}
====
   {FN} klonoa_wahoo.ogg
 {NAME} Klonoa Mid-air Jump
 {DESC} 
{SOUND} {AUDIO = sounds/character/klonoa_wahoo.ogg}
====
   {FN} klonoa_yah.ogg
 {NAME} Klonoa Yah
 {DESC} 
{SOUND} {AUDIO = sounds/character/klonoa_yah.ogg}
====
   {FN} nbm_death.ogg
 {NAME} Ninja Bomberman Death
 {DESC} 
{SOUND} {AUDIO = sounds/character/nbm_death.ogg}
====
   {FN} snake_alert.ogg
 {NAME} Snake Alert
 {DESC} 
{SOUND} {AUDIO = sounds/character/snake_alert.ogg}
====
   {FN} zelda_song1_1.ogg
 {NAME} Zelda Player Save
 {DESC} 
{SOUND} {AUDIO = sounds/character/zelda_song1_1.ogg}
====
   {FN} zelda_song1_2.ogg
 {NAME} Zelda Player Restore
 {DESC} 
{SOUND} {AUDIO = sounds/character/zelda_song1_2.ogg}
====
   {FN} zelda_song2_1.ogg
 {NAME} Zelda Block Save
 {DESC} 
{SOUND} {AUDIO = sounds/character/zelda_song2_1.ogg}
====
   {FN} zelda_song2_2.ogg
 {NAME} Zelda Block Restore
 {DESC} 
{SOUND} {AUDIO = sounds/character/zelda_song2_2.ogg}
====
   {FN} zelda_song3_1.ogg
 {NAME} Zelda NPC Save
 {DESC} 
{SOUND} {AUDIO = sounds/character/zelda_song3_1.ogg}
====
   {FN} zelda_song3_2.ogg
 {NAME} Zelda NPC Restore
 {DESC} 
{SOUND} {AUDIO = sounds/character/zelda_song3_2.ogg}
====
   {FN} zelda_warp.ogg
 {NAME} Zelda Warp
 {DESC} 
{SOUND} {AUDIO = sounds/character/zelda_warp.ogg}
====
   {FN} ur_claw.ogg
 {NAME} Ultimate Rinka Leaf Ability
 {DESC} 
{SOUND} {AUDIO = sounds/character/ur_claw.ogg}
====
   {FN} ur_fire.ogg
 {NAME} Ultimate Rinka Fire Ability
 {DESC} 
{SOUND} {AUDIO = sounds/character/ur_fire.ogg}
====
   {FN} ur_ice.ogg
 {NAME} Ultimate Rinka Ice Ability
 {DESC} 
{SOUND} {AUDIO = sounds/character/ur_ice.ogg}
====
   {FN} ur_invincible.ogg
 {NAME} Ultimate Rinka Tanooki Ability
 {DESC} 
{SOUND} {AUDIO = sounds/character/ur_invincible.ogg}
====
   {FN} ur_metalblade.ogg
 {NAME} Ultimate Rinka Shoot
 {DESC} 
{SOUND} {AUDIO = sounds/character/ur_metalblade.ogg}
====
   {FN} ur_powerstone.ogg
 {NAME} Ultimate Rinka Hammer Ability
 {DESC} 
{SOUND} {AUDIO = sounds/character/ur_powerstone.ogg}
====
   {FN} ub_charging.wav
 {NAME} Uncle Broadsword Charging
 {DESC} 
{SOUND} {AUDIO = sounds/character/ub_charging.wav}
====
   {FN} ub_drop.wav
 {NAME} Uncle Broadsword Drop
 {DESC} 
{SOUND} {AUDIO = sounds/character/ub_drop.wav}
====
   {FN} ub_knife.wav
 {NAME} Uncle Broadsword Charged
 {DESC} 
{SOUND} {AUDIO = sounds/character/ub_knife.wav}
====
   {FN} ub_lunge.wav
 {NAME} Uncle Broadsword Lunge
 {DESC} 
{SOUND} {AUDIO = sounds/character/ub_lunge.wav}
====
   {FN} ub_swipe.wav
 {NAME} Uncle Broadsword Swipe
 {DESC} 
{SOUND} {AUDIO = sounds/character/ub_swipe.wav}
====
   {FN} samus_missile.ogg
 {NAME} Samus Missile
 {DESC} 
{SOUND} {AUDIO = sounds/character/samus_missile.ogg}
====
   {FN} samus_shoot.ogg
 {NAME} Samus Shoot
 {DESC} 
{SOUND} {AUDIO = sounds/character/samus_shoot.ogg}
====
   {FN} samus_shoot_ice.ogg
 {NAME} Samus Shoot Ice
 {DESC} 
{SOUND} {AUDIO = sounds/character/samus_shoot_ice.ogg}
====
   {FN} samus_shoot_missile.ogg
 {NAME} Samus Shoot Missile
 {DESC} 
{SOUND} {AUDIO = sounds/character/samus_shoot_missile.ogg}
====
   {FN} samus_twirl.ogg
 {NAME} Samus Twirl
 {DESC} 
{SOUND} {AUDIO = sounds/character/samus_twirl.ogg}
{ENDTABLE}
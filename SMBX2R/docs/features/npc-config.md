# NPC Config

NPC config provides an easy way to change properties of NPCs without needing to do any programming. NPC config is defined in a txt file with identical name to the NPC whose ID you wish to replace. For example, a "npc-1.txt" may look like this:

```json
frames = 4
framespeed = 4
```

## General config

### Animation
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| frames | [number](/types/number.md) | Number of frames of the NPC animation loop. This value is per direction, so for framestyle=1 it's half the total number of frames on the sheet, and for framestyle=2 it's a quarter. | 1 |
| framespeed | [number](/types/number.md) | The amount of ticks it takes for the NPC animation frame to change. Lower numbers = faster animation. | 8 |
| framestyle | [number](/types/number.md) | The spritesheet layout preset. 0 = Goomba-like; 1 = Koopa-like; 2 = Shy Guy-like. | 0 |
| gfxwidth | [number](/types/number.md) | The width of one frame on the NPC's spritesheet. Note: Should you need to change this value, make sure to also specify gfxheight, even if it's unchanged. | 32 |
| gfxheight | [number](/types/number.md) | The height of one frame on the NPC's spritesheet. Note: Should you need to change this value, make sure to also specify gfxwidth, even if it's unchanged. | 32 |
| gfxoffsetx | [number](/types/number.md) | Horizontal offset of the sprite relative to the hitbox anchor (middle). | 0 |
| gfxoffsety | [number](/types/number.md) | Vertcal offset of the sprite relative to the hitbox anchor (bottom). | 0 |
| foreground | [bool](/types/bool.md) | If true, the NPC is rendered to a higher priority (usually -15). | false |

### Collision
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| width | [number](/types/number.md) | The width of the NPC's hitbox (anchored to center of sprite). | 32 |
| height | [number](/types/number.md) | The height of the NPC's hitbox (anchored to bottom of sprite). | 32 |
| noblockcollision | [bool](/types/bool.md) | If true, the NPC will no longer be able to interact with other blocks and NPCs (unless thrown). | false |
| npcblock | [bool](/types/bool.md) | Whether or not this NPC blocks the movement of other NPCs. | false |
| npcblocktop | [bool](/types/bool.md) | Whether or not thrown NPCs bounce off this NPC (i.e. collide with it from the top like with a block). | false |
| playerblock | [bool](/types/bool.md) | Whether or not the NPC blocks player movement. | false |
| playerblocktop | [bool](/types/bool.md) | Whether or not players and NPCs can stand on the NPC. | false |

### Interaction
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| jumphurt | [bool](/types/bool.md) | If true, it is impossible to bounce off the NPC with a regular jump. NPCs without nohurt will also inflict damage when jumped on. | false |
| nohurt | [bool](/types/bool.md) | If true, the NPC will not be able to harm players. | false |
| spinjumpsafe | [bool](/types/bool.md) | If true, the NPC can be spinjumped on safely. | false |
| grabside | [bool](/types/bool.md) | Whether or not the NPC can be grabbed from the side. | false |
| grabtop | [bool](/types/bool.md) | Whether or not the NPC can be grabbed from the top. | false |
| harmlessgrab | [bool](/types/bool.md) | If true, the NPC is unable to hit other NPCs while held. | false |
| harmlessthrown | [bool](/types/bool.md) | If true, the NPC is unable to hit other NPCs while thrown. | false |
| ignorethrownnpcs | [bool](/types/bool.md) | If true, the NPC is unaffected by thrown NPCs. | false |
| noyoshi | [bool](/types/bool.md) | If true, Yoshi cannot swallow this NPC. | false |
| nofireball | [bool](/types/bool.md) | If true, renders the NPC immune to fireballs. | false |
| noiceball | [bool](/types/bool.md) | If true, renders the NPC immune to iceballs. | false |
| nogliding | [bool](/types/bool.md) | If true, the NPC ignores gliding blocks. | false |
| linkshieldable | [bool](/types/bool.md) | If true, the NPC can be shielded by Link. | false |
| noshieldfireeffect | [bool](/types/bool.md) | If true, there will be no fire effect spawned when the NPC is shielded by Link. | false |
| notcointransformable | [bool](/types/bool.md) | If true, collecting a goal will not transform the NPC into coins. | false |
| nopowblock | [bool](/types/bool.md) | Disables the NPC's reaction to a POW effect. | false |
| nowalldeath | [bool](/types/bool.md) | Prevents the NPC from dying when released in a wall. | false |
| useclearpipe | [bool](/types/bool.md) | Whether the NPC is able to enter clear pipes. | false |
| clearpipegroup | [string](/types/string.md) | Registers the NPC to one of several clear pipe interaction groups. Currently supported are: "fireballs", "iceballs" and "iceblocks". Interactions determine death and ID transformation on collision, mirroring what would happen if an ice ball hit a Goomba outside of a clear pipe. | "" |

### Behaviour
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| cliffturn | [bool](/types/bool.md) | Whether or not the NPC will turn around on ledges. | false |
| speed | [number](/types/number.md) | The NPC's horizontal movement speed multiplier. | 1 |
| terminalvelocity | [number](/types/number.md) | The NPC's maximum vertical speed. | 8 |
| staticdirection | [bool](/types/bool.md) | Forces changes to the NPC's direction to be done explicitly. | false |
| luahandlesspeed | [bool](/types/bool.md) | Causes built-in SMBX code to ignore the 'speed' config, in favor of letting an NPC's Lua code handle it. | false |
| nogravity | [bool](/types/bool.md) | If true, the NPC is unaffected by gravity. | false |
| nowaterphysics | [bool](/types/bool.md) | If true, the NPC is unaffected by water and quicksand. | false |
| standsonclowncar | [bool](/types/bool.md) | If true, the NPC will stay on a player-controlled clown car. | false |
| weight | [number](/types/number.md) | Determines the NPC's weight. If greater than 0, the NPC is able to trigger things like brittle blocks or donut blocks from above. | false |
| isheavy | [bool](/types/bool.md) | True if a NPC's weight is nonzero. Setting this to true sets weight to 2. | false |
| ishot | [bool](/types/bool.md) | Whether or not the NPC is able to melt cold turn blocks. | false |
| iscold | [bool](/types/bool.md) | Whether or not the NPC is able to extinguish hot turn blocks. | false |
| iselectric | [bool](/types/bool.md) | Whether or not the NPC carries electric properties. | false |
| durability | [number](/types/number.md) | Number of hits the NPC can survive against elemental blocks. -1 = infinite. | 0 |
| score | [number](/constants/score.md) | The score value given by the NPC when killed. | 1 |
| vulnerableharmtypes | [table](/types/table.md) | A table of harm type enums (e.g. {HARM_TYPE_JUMP, HARM_TYPE_SPINJUMP}). For 1.3-NPCs, the specified harm types are added. For new NPCs, this replaces the existing harm types. Can only be set through lua. | None |
| isstationary | [bool](/types/bool.md) | Applies the movement logic of held items like Mushroom Blocks and SMW Keys. | false |
| slippery | [bool](/types/bool.md) | If true, the NPC is slippery when the player stands on it. | false |

### Category
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| iscustomswitch | [bool](/types/bool.md) | Used by switch NPCs to define the NPC_SWITCH list in lua. No inherent behaviour. | false |
| powerup | [bool](/types/bool.md) | Used by powerups to define the NPC_POWERUP list in lua. No inherent behaviour. | false |
| Predetermined AI |  |  (applying multiple might not always work) |
| iswalker | [bool](/types/bool.md) | If true, the NPC acts like a walker (such as Goombas, Koopas, Spinies...) | false |
| isbot | [bool](/types/bool.md) | If true, the NPC acts like a Zelda 2 Bot. | false |
| isvegetable | [bool](/types/bool.md) | If true, the NPC acts like a vegetable. | false |
| isshoe | [bool](/types/bool.md) | If true, the NPC acts like a boot mount. | false |
| isyoshi | [bool](/types/bool.md) | If true, the NPC acts like a yoshi mount. | false |
| isinteractable | [bool](/types/bool.md) | If true, the NPC can be collected. | false |
| iscoin | [bool](/types/bool.md) | If true, the NPC acts like a coin. | false |
| isvine | [bool](/types/bool.md) | If true, the NPC can be climbed on. | false |
| iscollectablegoal | [bool](/types/bool.md) | If true, the NPC acts like a collectable goal. | false |
| isflying | [bool](/types/bool.md) | If true, the NPC acts like a flying NPC (Parakoopa AI). | false |
| iswaternpc | [bool](/types/bool.md) | If true, the NPC acts like an underwater NPC (Cheep Cheep AI). | false |
| isshell | [bool](/types/bool.md) | If true, the NPC acts like a shell. | false |
| istoad | [bool](/types/bool.md) | If true, the NPC acts like a Toad NPC and will grant a mushroom when "eaten". | false |

### Line Guide
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| lineguided | [bool](/types/bool.md) | If true, the NPC will interact with line guides. Some NPCs may not work properly on line guides. | false |
| linespeed | [number](/types/number.md) | The speed, in pixels per tick, at which the NPC moves while on a line guide. | 2 |
| linejumpspeed | [number](/types/number.md) | The speed, in pixels per tick, at which the NPC will "jump off" the end of a line guide if it is moving upward. | 4 |
| collideswhenattached | [bool](/types/bool.md) | If true, this NPC won't lose collision when attached to line guides. | false |
| usehiddenlines | [bool](/types/bool.md) | If true, the NPC will interact with line guides that are on hidden layers. | false |
| lineactivebydefault | [bool](/types/bool.md) | If true, the NPC starts active by default ("active" refers to an NPC that is moving along a line guide. An inactive "lineguided" NPC will still attach to line guides, but will not move along them until activated). | true |
| lineactivateonstanding | [bool](/types/bool.md) | If true, the NPC is activated when a player stands on it. | false |
| lineactivatenearby | [bool](/types/bool.md) | If true, the NPC activates all adjacent NPCs with the same ID when it is activated. | false |
| linefallwheninactive | [bool](/types/bool.md) | If true, the NPC is affected by gravity when inactive. | false |
| linesensoralignh | [number](/types/number.md) | The horizontal alignment of the sensor (the part of the NPC that attaches to the line guides). 0 = left edge, 1 = right edge | 0.5 (center) |
| linesensoralignv | [number](/types/number.md) | The vertical alignment of the sensor. 0 = top edge, 1 = bottom edge | 0.5 (center) |
| linesensoroffsetx | [number](/types/number.md) | The horizontal offset of the sensor.  | 0 |
| linesensoroffsety | [number](/types/number.md) | The vertical offset of the sensor. | 0 |
| extendeddespawntimer | [bool](/types/bool.md) | If true, the NPC will take 3000 ticks to despawn when offscreen instead of the usual 180. | false |
| buoyant | [bool](/types/bool.md) | If true, the NPC floats on water. | false |

### Semi-Global
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| health | [number](/types/number.md) | Sets the health of the NPC. By default only supported by boss NPCs (Boom Boom, Birdo, Big Boo, SMB3 Bowser, SMB1 Bowser, Wart, Mother Brain, Mouser, Larry, Ludwig, Fry Guy), Clawgrip, but can be used by your own NPCs for the purposes of handling customizable HP. Extended per-npc uses are specified per ID in the specifics section below. | / |
| Editor only |
| grid | [number](/types/number.md) | Defines the grIDsnap offset. Often set to 16 or 32 for half- and full-block offsets. | 32 |
| gridoffsetx | [number](/types/number.md) | Defines the NPC's placement offset relative to the grid. | 0 |
| gridoffsety | [number](/types/number.md) | Defines the NPC's placement offset relative to the grid. | 0 |
| gridalign | [number](/types/number.md) | Defines align mode: 0 - at center of the global cell, 1 - at edge of the global cell. | 0 |
| image | [string](/types/string.md) | Relative path to an image file to override the NPC's editor appearance. | / |

### Light

Additionally, all [cross-object config values for adding lights](/features/light-config.md) can be used.

## NPC AI Specific Config

These config fields are only availble for specific types of NPC. The config value is usually determined by a type of shared AI code. Basegame IDs using the AI are supplied for convenience.

This list is currently incomplete. Additional args can be found on the old [spreadsheet](https://docs.google.com/spreadsheets/d/1arkr_h1r1ZABZFpc22mcbi2N8QDw3hjNsb_zA0BCKJk/edit#gid=1557876631) or in individual NPC lua files.

<!--- Todo: Find a way for the subheaders to be more noticable and maybe show up on the sidebar. --->
#### 2-3 Arrow Lift (Tilt Lift) [IDs 556, 557]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| inertia | [number](/types/number.md) | Laziness when switching directions. Higher is lazier. | / |
| defaultarrow | [number](/types/number.md) | Which arrow to default to when the player steps off. -1 = keep moving, 0 = none | 0 |
| needsactivation | [bool](/types/bool.md) | Does the player need to step on it once before it moves? | true |
| inset | [number](/types/number.md) | Number of pixels the outer arrows are moved towards the center of the sprite. | 0 |
| effectid | [number](/types/number.md) | Effect ID from which the arrow sprites are pulled. | / |

#### SMB3 Arrow Lift [ID 419]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| spawnid | [number](/types/number.md) | ID of the lift ghost spawned. | / |
| life | [number](/types/number.md) | Ticks of lifetime of the spawned ghost. | 500 |
| nospecialanimation | [bool](/types/bool.md) | Disables special animation handling. | false |

#### SMB3 Arrow Lift Ghost [ID 418]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| life | [number](/types/number.md) | Ticks of lifetime. | 500 |
| dirlist | [table](/types/table.md) | Order in which the directions are chosen when jumping repeatedly. | {0, 1, 0, 2} |
| nospecialanimation | [bool](/types/bool.md) | Disables special animation handling. | false |

#### Asteron[ID 499]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| searchradius | [number](/types/number.md) | Activation Radius. | / |
| warningtime | [number](/types/number.md) | Ticks between activation and explosion. | / |
| spikeid | [number](/types/number.md) | ID of the spike NPC. | / |
| spikexspeeds | [table](/types/table.md) | Table of X-Speed values for the spawned spikes. Only editable through lua. | / |
| spikeyspeeds | [table](/types/table.md) | Table of Y-Speed values for the spawned spikes. Only editable through lua. | / |

#### Baby Yoshis [IDs 325-332]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| blinktimer | [number](/types/number.md) | Blinking frequency in ticks. | 25 |
| blinklength | [number](/types/number.md) | The length of a blink in ticks. | 8 |
| bounceheight | [number](/types/number.md) | The height of idle bounces. | -2 |
| hunger | [number](/types/number.md) | Number of NPCs that have to be eaten before the Yoshi grows into an adult. Negative = infinite. | 5 |

#### Baby Yoshis (Cyan, Pink) [IDs 331, 332]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| spawnnpc | [number](/types/number.md) | ID of the NPC spawned when an NPC is eaten. | / |

#### Baby Yoshi (Purple) [ID 330]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| slamdelay | [number](/types/number.md) | Delay of the pow effect. | 20 |
| powradius | [number](/types/number.md) | Radius of the pow effect. | 150 |
| powtype | [string](/types/string.md) | Type of pow effect. | SMW |

#### Berries [IDs 397, 398, 399]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| limit | [number](/types/number.md) | Number of berries that have to be eaten by Yoshi before the reward routine activates. | / |

#### Walking Bobomb (SMW) [ID 408]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| chase | [number](/types/number.md) | Chase interval in seconds. | 2 |
| spawnid | [number](/types/number.md) | ID of the stunned variant. | / |

#### Stunned Bobomb (SMW) [ID 409]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| fuse | [number](/types/number.md) | Time before exploding in seconds. | 4 |

#### Big Goombas (Splitters) [IDs 466, 467]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| splits | [number](/types/number.md) | Number of NPCs to split into. | 2 |
| splitid | [number](/types/number.md) | NPC ID to split into. | / |
| health | [number](/types/number.md) | Number of fireballs before a split. | / |

#### Big (Palace) Switch [IDs 440, 441, 442, 443, 445]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| pressedheight | [number](/types/number.md) | Height of the NPC after it has been pressed. | / |
| synchronize | [bool](/types/bool.md) | If true, the state of the switch is synced across all switches of this ID. | / |
| switchon | [bool](/types/bool.md) | If true, the NPC can turn "off" blocks into "on" blocks. | / |
| switchoff | [bool](/types/bool.md) | If true, the NPC can turn "on" blocks into "off" blocks. | / |
| color | [string](/types/string.md) | String representation of the switch color. Unrecognized names will be interpreted as new switch colors. | / |
| exitlevel | [bool](/types/bool.md) | Whether pressing the switch exits the level. | true |
| save | [bool](/types/bool.md) | Whether pressing the switch saves across levels. | / |
| bursts | [number](/types/number.md) | Number of effect bursts after hitting the switch. Recommended to be 11 when exitlevel is true, 1 otherwise. | 11 |
| burstinterval | [number](/types/number.md) | Ticks between effect bursts. | 50 |
| blockon | [number](/types/number.md) | ID of the affected "on" block. | / |
| blockoff | [number](/types/number.md) | ID of the affected "off" block. | / |

#### Bird (Grounded) [IDs 501, 502, 503, 504]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| toflying | [number](/types/number.md) | ID of flying bird to transform into. | / |

#### Bird (Flying) [IDs 505, 506, 507, 508]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| togrounded | [number](/types/number.md) | ID of grounded bird variant. | / |
| takeoffspeed | [number](/types/number.md) | Acceleration when beginning to fly. | / |

#### Bombshell Koopa [ID 578]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| spawnid | [number](/types/number.md) | ID of the shell to spawn. | / |

#### Bombshell Koopa Shell [ID 579]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| warningdelay | [number](/types/number.md) | Ticks until the NPC starts flashing. | Explosiondelay - 120 |
| explosiondelay | [number](/types/number.md) | Ticks until the NPC explodes. | 320 |
| restingframes | [number](/types/number.md) | Number of frames used for the non-warning period of the shell animation. | / |
| nospecialanimation | [bool](/types/bool.md) | Disables special animation handling. | false |

#### Boo Circle [ID 294]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| defaultspeed | [number](/types/number.md) | Speed multiplier for the boo circle's editor speed. | / |

#### Boo Circle Boo [ID 469]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| bootypes | [number](/types/number.md) | Number of appearances to choose from. | 3 |

#### Boo Snake [ID 298]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| taillength | [number](/types/number.md) | Number of boos on the tail. | 5 |

#### Boohemoth [ID 444]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| shufflespeedmultiplier | [number](/types/number.md) | Speed multiplier while shuffling. | 0.7 |
| shytime | [number](/types/number.md) | Seconds spent being shy when looked at. | 2 |
| peektime | [number](/types/number.md) | Seconds spent peeking before shuffling when looked at. | 2 |
| bouncestrength | [number](/types/number.md) | Strength of the bounce when hurting the player. | 6 |

#### Boomerang [ID 615]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| riseheight | [number](/types/number.md) | How much higher than spawn-y the boomerang rises. | / |
| fallheight | [number](/types/number.md) | How much lower than spawn-y the boomerang rises. | / |
| trajectorywidth | [number](/types/number.md) | Horizontal range of the boomerang's flight path. | / |

#### Boos (Lua-implemented) [ID 586]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| maxspeedx | [number](/types/number.md) | Maximum horizontal speed. | / |
| maxspeedy | [number](/types/number.md) | Maximum vertical speed. | / |
| accelx | [number](/types/number.md) | Horizontal acceleration. | / |
| accely | [number](/types/number.md) | Vertical acceleration. | / |
| decelx | [number](/types/number.md) | Horizontal deceleration. | / |
| decely | [number](/types/number.md) | Vertical deceleration. | / |

#### Boss Bass, Big Slurp [ID 653, 718]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| swimframes | [number](/types/number.md) | Number of frames in the swimming animation. | 2 |
| jumpframes | [number](/types/number.md) | Number of frames in the jumping animation. Frames counted in "frames" but not in swimframes and jumpframes will count as the landing animation | 2 |
| canjump | [bool](/types/bool.md) | If true, Boss Bass tries to leap at players to eat them. | true |
| followsplayer | [bool](/types/bool.md) | If true, Boss Bass chases players. | true |
| hitboxoffsettop | [number](/types/number.md) | Offset of the mouth hitbox from the top of the NPC's hitbox in pixels. | 8 |
| hitboxheight | [number](/types/number.md) | Height of the mouth hitbox in pixels. | 8 |
| jumpboxwidth | [number](/types/number.md) | Width of the jump detection range hitbox. | 100 |
| jumpboxheight | [number](/types/number.md) | Height of the jump detection range hitbox. | 180 |
| jumpboxtop | [number](/types/number.md) | Offset of the jump hitbox from the top of the NPC's hitbox in pixels. | -140 |
| alwayseats | [bool](/types/bool.md) | If true, Boss Bass ignore its eating cooldown. | false |
| eatingkillsplayer | [bool](/types/bool.md) | If true, players instantly die to being eaten. | true |
| nohurt | [bool](/types/bool.md) | If false, players take regular damage from Boss Bass. If true, Boss Bass can kill them. If eatingkillsplayer is false and nohurt is true, Boss Bass can carry players in its mouth. | true |
| jumpspeedx | [number](/types/number.md) | Horizontal speed when jumping. | 3 |
| jumpspeedy | [number](/types/number.md) | Vertical speed when jumping. | 7.5 |
| eatenplayerejectforce | [number](/types/number.md) | Force with which players who were in Boss Bass' mouth get ejected when they press jump. | 20 |
| eatsound | [number](/types/number.md)| ID of the sound effect to play when Boss Bass eats something. | 55 |
| eattimer | [number](/types/number.md) | Frames after eating during which Boss Bass can't eat. | 20 |

#### Bowser Statue (SMW) [ID 355]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| fireinterval | [number](/types/number.md) | Ticks between volleys. | 140 |
| firenpc | [number](/types/number.md) | Id of the NPC to spawn. | / |
| firespeed | [number](/types/number.md) | Horizontal speed of the spawned NPC. | 1.5 |

#### Bowser Statue (Jumping SMW) [ID 357]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| jumpinterval | [number](/types/number.md) | Ticks between jumps. | 30 |

#### Breaking Turn Block [ID 364]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| defaultcontent | [number](/types/number.md) | Optional default content ID. | 0 |
| triggerwidth | [number](/types/number.md) | Width of the activation trigger box. | / |
| triggerheight | [number](/types/number.md) | Height of the activation trigger box. | / |

#### Bros [IDs 614, 616, 618]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| holdoffsetx | [number](/types/number.md) | Horizontal offset of thrown npc while held. | / |
| holdoffsety | [number](/types/number.md) | Vertical offset of thrown npc while held. | / |
| throwoffsetx | [number](/types/number.md) | Horizontal offset of thrown npc when thrown. | / |
| throwoffsety | [number](/types/number.md) | Vertical offset of thrown npc when thrown. | / |
| walkframes | [number](/types/number.md) | Time spent walking in a direction before turning around. | / |
| jumpframes | [number](/types/number.md) | Delay between jumps. | / |
| jumpspeed | [number](/types/number.md) | Upwards jump force. | / |
| jumptimerange | [number](/types/number.md) | A number of frames that may be added to the jump delay. | / |
| thowspeedx | [number](/types/number.md) | Initial horizontal speed of the thrown NPC. | / |
| thowspeedy | [number](/types/number.md) | Initial vertical speed of the thrown NPC. | / |
| waitframeslow | [number](/types/number.md) | Lower bound for the throwing cooldown. | / |
| waitframeshigh | [number](/types/number.md) | Upper bound for the throwing cooldown. | / |
| initialtimer | [number](/types/number.md) | Initial value for the throwing cooldown, to accelerate the first throw. | / |
| holdframes | [number](/types/number.md) | Number of ticks for which the NPC is held before being thrown. | / |
| throwid | [number](/types/number.md) | ID of the thrown NPC. | / |
| quake | [bool](/types/bool.md) | Whether or not landing after a jump causes an earthquake. | false |
| stunframes | [number](/types/number.md) | How long the quake stuns the player for. | / |
| quakeintensity | [number](/types/number.md) | Intensity of the visual quake effect. | / |
| followplayer | [bool](/types/bool.md) | If true, the NPC will always face the closest player. Otherwise, it will always face the direction it was placed in. | true |

#### Bully [IDs 648, 649]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| wanderframes | [number](/types/number.md) | Number of wander frames. Remainder is number of knockback frames. | 2 |
| wanderspeed | [number](/types/number.md) | The speed that the NPC wanders around its spawn position at. | 1 |
| wanderdistance | [number](/types/number.md) | The maximum distance that the NPC can normally wander from its spawn position | 96 |
| startchasedistance | [number](/types/number.md) | The distance a player needs to be in for the NPC to start chasing them. | 160 |
| stopchasedistance | [number](/types/number.md) | The distance a player needs to be in for the NPC to continue chasing them. | 224 |
| stopchasecooldown | [number](/types/number.md) | Frames for player to be out of sotpchasedistance for the chase to really stop | 60 |
| chasespeed | [number](/types/number.md) | The maximum speed the NPC will chase a player at | 3.5 |
| chaseacceleration | [number](/types/number.md) | How fast the NPC accelerates while chasing a player. | 0.08 |
| knockbackspeed | [number](/types/number.md) | The speed at which the NPC gets knocked back when bumped. | 5 |
| knockbackfalloff | [number](/types/number.md) | By how much the knockback is decreased each frame | 0.085 |
| otherknockbackspeed | [number](/types/number.md) | The speed at which the colliding object gets knocked back | 6.5 |
| noticebounce | [number](/types/number.md) | Whether and how to hit blocks when knocked back. 0 is no effect, 1 hits any block, 2 breaks certain blocks and hits others | 0 |
| chasehitblocks | [number](/types/number.md) | Whether and how to hit blocks when chasing. 0 is no effect, 1 hits any block, 2 breaks certain blocks and hits others | 0 |
| knockbackhitblocks | [number](/types/number.md) | The bounce height when noticing a player | 0 |

#### Bumpers [IDs 582, 583, 584, 585, 594, 595, 596, 597, 598, 599, 604, 605]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| bouncestrength | [number](/types/number.md) | Bounce force. | 7.5 |
| jumpmultiplier | [number](/types/number.md) | If jump or spinjump is held, this multiplier is applied to bouncestrength. | 2 |
| bounceplayer | [bool](/types/bool.md) | Should the bumper bounce players? | true |
| bouncenpc | [bool](/types/bool.md) | Should the bumper bounce NPCs? | false |
| hitbox | [Function](/types/function.md) | Only settable in code. Defined as a lua function taking the NPC as an argument and returning a [Collider](/reference/colliders.md) | / |

#### Bunbun [ID 580]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| delay | [number](/types/number.md) | Ticks between throws. | 80 |
| spawnid | [number](/types/number.md) | ID of the spawned NPC. | 581 |
| idleframes | [number](/types/number.md) | Animation frames in the idle cycle. The remaining frames in the "frames" config are used for the throwing animation. | / |
| npcspawndelay | [number](/types/number.md) | Ticks between beginning the spawn cycle and spawning the NPC. | / |
| nospecialanimation | [bool](/types/bool.md) | Disables special animation handling. | false |

#### Buoyant Platform [IDs 391]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| wateraccel | [number](/types/number.md) | Acceleration while underwater. | -0.1 |
| fallaccel | [number](/types/number.md) | Multiplier for regular NPC gravity while out of water. | 0.25 |
| speedcap | [number](/types/number.md) | Terminal velocity. | 1.25 |
| liquidoffsettop, liquidoffsetbottom | [number](/types/number.md) | Determine the top and bottom of the hitbox within which buoyancy is detected. | -8, 24 |

#### Burners, Burner Beetle [ID 544, 545, 546, 548, 549]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| spawndelay | [number](/types/number.md) | Delay after which the fire is spawned. | 1 |
| fireid | [number](/types/number.md) | Id of the fire NPC. | 547 |
| burnerframes | [number](/types/number.md) | Used by the Burner Beetle to determine how many frames the burner (separate to the beetle) has. | 0 |
| burnerframestype | [number](/types/number.md) | Used by the Burner Beetle to determine the framestyle of the burner (separate to the beetle). | 0 |
| ignoreplayers | [bool](/types/bool.md) | If true, players are unable to trigger the step-activated burner. | false |
| ignorenpcs | [bool](/types/bool.md) | If true, NPCs are unable to trigger the step-activated burner. | false |
| triggerweight | [number](/types/number.md) | The minimum weight an object needs to trigger the step-activated burner. | 2 |

#### Busters [IDs 587, 588]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| target[n] | [number](/types/number.md) | IDs that can be picked up by this NPC, where n is a number starting at 1 (target1, target2, ...). |  |
| collideryoffset | [number](/types/number.md) | Vertical offset of the search area relative to the bottom of the NPC's hitbox. | / |
| useai1 | [bool](/types/bool.md) | If true, grabbed NPCs are transformed into what ever value is stored in its ai1 field. | false |
| throwspeedx | [number](/types/number.md) | Horizontal speed of the thrown NPC. | / |
| throwspeedy | [number](/types/number.md) | Vertical speed of the thrown NPC. | / |
| friendlythrow | [bool](/types/bool.md) | If true, buster beetles will still throw their held NPCs | / |

#### Cannons [IDs 685, 686, 687, 688, 689, 690, 691, 692, 693, 694]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| shotcount | [number](/types/number.md) | Number of shots fired at once. | 1 |
| shotspeed | [number](/types/number.md) | Speed of the fired projectile. | 2 |
| pulsex, pulsey | [bool](/types/bool.md) | Causes the NPC to do a pulsing animation when shooting if true. | true, true |
| shotsound | [number](/types/number.md) | ID of the sound effect when shooting. | 22 |
| shotid | [number](/types/number.md) | Default ID of the fired NPC. | 22 |
| effectid | [number](/types/number.md) | ID of the poof effect when shooting. | 131 |
| effectoffsetx, effectoffsety | [number](/types/number.md) | Offset of the poof effect from the spawn location. | -16, -16 |

#### Chain Chomp [ID 654]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| looseJumpSpeedX, looseJumpSpeedY | [number](/types/number.md) | Jump speed when not attached to a chain | 2, -5.5  |
| chainedJumpSpeedX, chainedJumpSpeedY | [number](/types/number.md) | Jump speed when attached to a chain | 1.5, -3  |
| escapeSpeedX, escapeSpeedY | [number](/types/number.md) | Speed of the jump when escaping from the chain. | 7, -6.5 |
| underwaterSpeedX | [number](/types/number.md) | Movement speed when underwater. | 1.2 |
| underwaterFloatSpeed | [number](/types/number.md) | Speed when floating underwater. | 1 |
| underwaterFloatTime | [number](/types/number.md) | Duration of the float. | 16 |
| deceleration | [number](/types/number.md) | Movement speed deceleration. | 0.05 |
| patrolTime | [number](/types/number.md) | Duration in frames spent patrolling around the post. | 128 |
| prepareTime | [number](/types/number.md) | Duration in frames spent preparing for a jump. | 32 |
| lungeTime | [number](/types/number.md) | Duration in frames for the lunge. | 64 |
| lungeMinRandomAngle, lungeMaxRandomAngle | [number](/types/number.md) | The angle range in which the lunge can happen. | -35, -10 |
| lungeTargetExtraRadius | [number](/types/number.md) | By how many pixels to increase the radius when lunging. | 32 |
| lungeSpeed | [number](/types/number.md) | Speed of the lunge. | 12 |
| returnGravityMultiplier | [number](/types/number.md) | Gravity multiplier when returning from the lunge. | 1 |
| returnSpeedPerBlock | [number](/types/number.md) | Multiplier of x-speed for each block distance traversed while returning from a lunge. | 0.8 |
| targetPlayersNormally | [bool](/types/bool.md) | If true, targets players when not friendly. | true |
| targetEnemiesNormally | [bool](/types/bool.md) | If true, targets enemies when not friendly. | false |
| destroyBlocksNormally | [bool](/types/bool.md) | If true, destroys blocks when not friendly. | true |
| targetPlayersFriendly | [bool](/types/bool.md) | If true, targets players when not friendly. | false |
| targetEnemiesFriendly | [bool](/types/bool.md) | If true, targets enemies when not friendly. | true |
| destroyBlocksFriendly | [bool](/types/bool.md) | If true, destroys blocks when not friendly. | true |
| chainEffectID | [number](/types/number.md) | ID of the effect that draws the chain. | |
| chainCount | [number](/types/number.md) | Number of chains. | 4 |
| chainTimeDifference | [number](/types/number.md) | How many frames of movement between the chains. | 8 |

#### Chain Chomp Post [IDs 650, 651]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| chainEffectID | [number](/types/number.md) | ID of the effect that draws the chain. | |
| chainSnapThreshold | [number](/types/number.md) | How far a chain needs to be past its max length to snap. | 64 |
| disableSpinJumpWhenHeld | [bool](/types/bool.md) | If true, players holding the post cannot spinjump. | true |

#### Chucks (all) [IDs 311, 312, 313, 314, 315, 316, 317, 318]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| hurteffect | [number](/types/number.md) | ID of the hurt effect. | / |
| deatheffect | [number](/types/number.md) | ID of the death effect. | / |
| health | [number](/types/number.md) | Initial HP. | 3 |
| npconhit | [number](/types/number.md) | NPC ID to turn into after hurt for the first time. | / |

#### Chuck (Chargin') [ID 311]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| startrange | [number](/types/number.md) | Y-Coordinate differnece the player has to be above the chuck in order to activate it. | 48 |
| calmrange | [number](/types/number.md) | Y-Coordinate differnece the player has to be below the chuck in order to deactivate it. | 48 |
| destoyblocktable | [table](/types/table.md) of [number](/types/number.md) | Only settable through lua. A table of block IDs that can be destroyed. | {90, 4, 188, 60, 293, 667, 457, 668, 526} |

#### Chuck (Clappin') [ID 312]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| jumprange | [number](/types/number.md) | Y-Coordinate difference the player has to be above the chuck in order to make it clap. | 64 |
| jumprangemax | [number](/types/number.md) | Maximum Y-Coordinate difference the player can be above the chuck in order to make it clap. | 256 |
| jumpheight | [number](/types/number.md) | Upwards jump force. | 7 |

#### Chuck (Pitchin') [ID 313]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| jumprange | [number](/types/number.md) | Y-Coordinate difference the player has to be above the chuck in order to make it jump. | 80 |
| jumpheight | [number](/types/number.md) | Upwards jump force. | 6.5 |
| throwtime | [number](/types/number.md) | Ticks before a throw. | 30 |
| throwcooldown | [number](/types/number.md) | Ticks after a throw. | 15 |
| volleycooldown | [number](/types/number.md) | Ticks between throw volleys. | 90 |
| defaultvolley | [number](/types/number.md) | Number of baseballs thrown during a volley by default. | 6 |
| projectileid | [number](/types/number.md) | Id of the thrown projectile. | 319 |

#### Chuck (Splittin') [ID 314]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| range | [number](/types/number.md) | Activation range. | 192 |
| splits | [number](/types/number.md) | Number of additional NPCs to split into. | 2 |
| splitnpc | [number](/types/number.md) | ID of the NPC to spawn when splitting. | 311 |
| postsplitnpc | [number](/types/number.md) | Id to transform into after splitting. | 311 |

#### Chuck (Bouncin') [ID 315]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| range | [number](/types/number.md) | Activation range. | 192 |
| jumpheight | [number](/types/number.md) |  Upwards jump force. | 8 |

#### Chuck (Diggin') [ID 316]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| startwait | [number](/types/number.md) | Ticks to wait before beginning a volley. | 110 |
| digwait | [number](/types/number.md) | Ticks spent digging. | 55 |
| liftwait | [number](/types/number.md) | Ticks spent lifting. | 45 |
| donewait | [number](/types/number.md) | Time spent waiting after any rock was dug up. | 60 |
| rockemergeid | [number](/types/number.md) | ID of the rock spawning effect. | 173 |
| rockxspeed | [number](/types/number.md) | Horizontal speed of the emerging rock. | 1 |
| rockyspeed | [number](/types/number.md) | Vertical speed of the emerging rock. | 5 |
| defaultvolley | [number](/types/number.md) | Number of rocks to dig up per volley. | 3 |
| projectileid | [number](/types/number.md) | ID of the emerging projectile. <badge type="tip">Coming soon</badge> | 320 |

#### Chuck (Whistlin') [ID 317]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| range | [number](/types/number.md) | Activation radius. | 96 |
| hitcooldown | [number](/types/number.md) | Cooldown after getting hit. | 30 |
| whistlecooldown | [number](/types/number.md) | Ticks it takes for the whistle to deactivate once the NPC doesn't whistle anymore. | 300 |

#### Chuck (Puntin') [ID 318]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| starttimelower | [number](/types/number.md) | Lower bound of the randomized kick start time. | 90 |
| starttimeupper | [number](/types/number.md) | Upper bound of the randomized kick start time. | 120 |
| kickcooldown | [number](/types/number.md) | Ticks between kicks. | 100 |
| footballid | [number](/types/number.md) | Id of the spawned NPC. | 321 |
| footballspeedx | [number](/types/number.md) | Horizontal NPC of the spawned NPC. | 5 |
| footballspeedy | [number](/types/number.md) | Vertical NPC of the spawned NPC. | 0 |

#### Checkpoints [IDs 400, 430]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| spawnoffsetx | [number](/types/number.md) | Horizontal offset between player spawn location and the checkpoint. | / |
| spawnoffsety | [number](/types/number.md) | Vertical offset between player spawn location and the checkpoint. | / |

#### Cherries [ID 558]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| starid | [number](/types/number.md) | ID of the star to spawn when all cherries are collected. | / |
| limit | [number](/types/number.md) | Number of cherries necessary to collect for the star to spawn. | / |

#### Clawgrip [ID 608]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| grabCheckTime | [number](/types/number.md) | Interval in frames in which Clawgrip checks for anything grabbable in its range. | 45 |
| picktime | [number](/types/number.md) | Duration of the picking animation. | 32 |
| holdtime | [number](/types/number.md) | Duration of the holding animation. | 32 |
| readytime | [number](/types/number.md) | Duration of the lifting animation. | 32 |
| hurttime | [number](/types/number.md) | Duration of the hurt effect. | 64 |
| grabsfx | [number](/types/number.md) | ID of the grab sound. | 23 |
| throwsfx | [number](/types/number.md) | ID of the throw sound. | 25 |
| throwspeedxs | [table](/types/table.md) of [number](/types/number.md) | List of randomly selectable x-speeds to apply to the thrown object. | [6.5] |
| throwspeedys | [table](/types/table.md) of [number](/types/number.md) | List of randomly selectable y-speeds to apply to the thrown object. | [-7, -1.5] |

#### Clawgrip's Boulder [ID 609]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| spriteleftwidth, spriterightwidth | [number](/types/number.md) | How much wider the vase is than the NPC inside. | 14, 14 |
| containedheight | [number](/types/number.md) | Height of the contained NPC. | 38 |
| containedyoffset | [number](/types/number.md) | Y-Offset of the contained NPC sprite. | -10 |
| containedleftcutoff, containedrightcutoff | [number](/types/number.md) | How many pixels on the left and right edges of the contained NPC spritesheet don't get rendered. | 2, 2 |

#### Clear Vase [ID 700]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| cannontime | [number](/types/number.md) | Ticks spent waiting in a clear pipe cannon before being ejected. | 32 |

#### Clear pipe NPCs (any NPC in a clear pipe) [ID 468]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| cannontime | [number](/types/number.md) | Ticks spent waiting in a clear pipe cannon before being ejected. | 32 |

#### Cloud Drops [ID 463, 464]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| horizontal | [bool](/types/bool.md) | Whether the cloud drop moves horizontally. | / |
| range | [number](/types/number.md) | Range of movement. <badge type="tip">Coming soon</badge> | / |

#### Cobrat [IDs 371, 372, 373]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| spawnid | [number](/types/number.md) | ID of the projectile fired. | / |
| transformid | [number](/types/number.md) | ID of the NPC to transform into. | / |
| transformonjump | [bool](/types/bool.md) | Whether to transform into transformid at the peak of its jump. | / |
| hideoffset | [bool](/types/bool.md) | Vertical offset from the block the cobrat hides in. | / |
| SMW Coin Snake | | ID 528 <badge type="tip">Coming soon</badge> |
| coinframes | [number](/types/number.md) | The number of frames for the coin animation. The remaining (frames - coinframes) frames will be used for the block animation | 4 |
| coinlimit | [number](/types/number.md) | The maximum number of coins to spawn before vanishing. Set to -1 for no limit. | 50 |
| coinid | [number](/types/number.md) | The ID of the coin NPC to spawn. | 33 (SMW Coin) |

#### Crate [IDs 433, 434]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| explosive | [bool](/types/bool.md) | Whether or not the crate should explode. | false |

#### Curry Nipper [IDs 709]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| projectileid | [number](/types/number.md) | ID of the fire projectile. | 526 |
| playerprojectileid | [number](/types/number.md) | ID of the fire projectile when held by a player. | 13 |
| firesound | [number](/types/number.md) | Sound that plays when a projectile is spit. | 18 |
| spitframes | [number](/types/number.md) | Number of animation frames for spitting. Remainder of "frames" defines number of idle frames. | 2 |
| spitframespeed | [number](/types/number.md) | Framespeed when spitting fire. | 6 |

#### Dino Rhino [ID 383]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| dinotorchid | [number](/types/number.md) | ID to turn into when bounced on. | / |
| turninterval | [number](/types/number.md) | Ticks between direction changes based on closest player's coordinates. | 40 |

#### Dino Torch [ID 382]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| horzflamenpc | [number](/types/number.md) | ID of the horizontal fire. | / |
| vertflamenpc | [number](/types/number.md) | ID of the vertical fire. | / |
| roamtime | [number](/types/number.md) | Ticks spent roaming before shooting fire. | 240 |
| turninterval | [number](/types/number.md) | Ticks between direction changes based on closest player's coordinates. | 30 |

#### Dino Torch Fire [IDs 384, 385]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| framesets | [number](/types/number.md) | Sets of animation cycles used by the fire. Fire is harmful on the final frameset | / |
| duration | [number](/types/number.md) | The total duration of the fire's lifetime. The speed of the extend/retract animation tries to adhere to the framespeed value, but might speed up for short durations if it would otherwise never have the time to fully extend. | / |

#### Donut Blocks [IDs 591, 592, 714, 715, 716, 717]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| ignoreplayers | [bool](/types/bool.md) | If true, players are unable to trigger the donut block. | false |
| ignorenpcs | [bool](/types/bool.md) | If true, NPCs are unable to trigger the donut block. | false |
| triggerweight | [number](/types/number.md) | The minimum weight an object needs to trigger the falling animation. | 2 |
| time | [number](/types/number.md) | Ticks before falling when stood on. | 30 |
| maxspeed | [number](/types/number.md) | Maximum falling speed. | 4.5 |
| cooldown | [number](/types/number.md) | Seconds between despawn and respawn. Negative values prevent respawn. | 5 |

#### Dry Bones (bone-throwing) [ID 415]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| spawnid | [number](/types/number.md) | ID of the projectile to throw. | / |

#### Egg Plant, Egg-ry Plant [IDs 627, 628]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| spitframes | [number](/types/number.md) | Subset of the frames config dedicated to spitting. | 5 | 
| spitoffset | [number](/types/number.md) | Vertical offset of the spawned NPC. | 0 | 
| containednpc | [number](/types/number.md) | Default contained NPC ID. | 96 | 

#### Enemy Fireball [ID 390]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| bounces | [number](/types/number.md) | Number of bounces before disappearing. | 3 |
| turnfromnpcs | [bool](/types/bool.md) | Turn around when hitting NPCs. | false |

#### Falling Platform [ID 367]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| falldelay | [number](/types/number.md) | Ticks before fast fall begins. | 25 |
| delayspeed | [number](/types/number.md) | Fall speed during initial slow fall. | 0.5 |
| fallaccel | [number](/types/number.md) | Gravity multiplier for the fast fall. | 1 |

#### Fire Bro [ID 389]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| projectileid | [number](/types/number.md) | ID of the projectile fired. | 390 |
| friendlyprojectileid | [number](/types/number.md) | ID of the projectile fired when held by the player. | 13 |
| lowjumpheight, highjumpheight | [number](/types/number.md) | Random range of the jump height. | 4, 6 |
| jumptimemin, jumptimemax | [number](/types/number.md) | Random time between jumps. | 65, 85 |
| shoottimemin, shoottimemax | [number](/types/number.md) | Random delay between shots. | 135, 180 |
| walktime | [number](/types/number.md) | Time spent walking before turning around. | 60 |
| shotcount | [number](/types/number.md) | Number of projectiles fired. | 2 |
| shotspeedx | [number](/types/number.md) | Horizontal speed of fired projectiles. | 3.5 |
| shotsound | [number](/types/number.md) | Sound played when the fireball is spawned. | / |
| npcheldfirerate | [number](/types/number.md) | multiplier for the shoot time when held by a NPC. | 0.75 |

#### Fire Snake [ID 307]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| tailid | [number](/types/number.md) | ID of the tail NPC. | 308 |

#### Fireball (SMB2) [ID 348]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| effectid | [number](/types/number.md) | ID of the death effect. | / |

#### Fire Chomp, Spiky Fire Chomp [ID 704, 707]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| idletime | [number](/types/number.md) | Ticks spent idly chasing players. | 150 |
| explodetime | [number](/types/number.md) | Ticks leading up to the explosion. | 80 |
| shoottime | [number](/types/number.md) | Ticks spent shooting. | 32 |
| shootdelay | [number](/types/number.md) | How many ticks into shoottime the projectile is fired. | 16 |
| shootframes | [number](/types/number.md) | Number of animation frames used for shooting. | 2 |
| idleframes | [number](/types/number.md) | Number of animation frames used for idle. | 1 |
| explodeframes | [number](/types/number.md) | Number of animation frames used for exploding. | 2 |
| taildeathdelay | [number](/types/number.md) | Delay between tail pieces dying. | 1 |
| tailid | [number](/types/number.md) | ID of the tail NPC. | 705 |
| projectileid | [number](/types/number.md) | ID of the projectile ID. | 706 |
| closeness | [number](/types/number.md) | Closeness. | How close the tail pieces are together |
| acceleration | [number](/types/number.md) | Movement acceleration during idle state. | 0.0648 |
| maxspeed | [number](/types/number.md) | Maximum movement speed. | 2 |
| tailoffsetx, tailoffsety | [number](/types/number.md) | Offset of the tail from the NPC's body. | 0, 0 |
| taileffectid | [number](/types/number.md) | ID of the tail's death effect. | 300 |
| shootsound | [number](/types/number.md) | ID of the sound used for shooting. | 16 |

#### Flagpole [ID 394]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| useforcedstate | [bool](/types/bool.md) | Whether to use player forced states. | true |
| polelength | [number](/types/number.md) | Length of the pole. | 288 (9*32) |
| poletopframes | [number](/types/number.md) | Number of frames for the top of the pole | 1 |
| polemidframes | [number](/types/number.md) | Number of frames for the middle of the pole. | 1 |
| flagframes | [number](/types/number.md) | Number of frames for the flag. | 4 |
| flagoffsetx, flagoffsety | [number](/types/number.md) | Positional offset of the flag, measured from the top. | 16, 0 |
| flagendoffsetx, flagendoffsety | [number](/types/number.md) | Positional offset of the end of the flagpole animation, measured from the bottom. | 16, -32 |
| flagsfx | [string](/types/string.md) | Sound played when the flagpole animation begins. | extended/flagpole |
| endsfx | [string](/types/string.md) | Sound played when the player dismounts the flag. | extended/smb1-course-clear |

#### Fliprus [ID 539]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| idleframes | [number](/types/number.md) | First frames of the total "frames" set. | 4 |
| attackframes | [number](/types/number.md) | Next batch of frames of the total "frames" set. | 2 |
| flipframes | [number](/types/number.md) | Last batch of frames of the total "frames" set. | 4 |
| spawnid | [number](/types/number.md) | ID of the spawned NPC. | 540 |
| throwspeedx | [number](/types/number.md) | Horizontal speed of the spawned NPC. | / |
| throwspeedy | [number](/types/number.md) | Vertical speed of the spawned NPC. | / |

#### Fliprus Snowball [ID 540]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| turnfromnpcs | [bool](/types/bool.md) | Turn around when hitting NPCs. | false |

#### Flutter [ID 613]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| stunframes | [number](/types/number.md) | Number of ticks after getting hit before turning angry. | 120 |
| chargespeed | [number](/types/number.md) | Movement speed of the angry flutter. | 4.8 |
| maxspeedx | [number](/types/number.md) | Maximum horizontal velocity. | / |
| maxspeedy | [number](/types/number.md) | Maximum vertical velocity. | / |
| flightperiod | [number](/types/number.md) | Ticks it takes for a full flight sine wave to complete. | / |
| stundecel | [number](/types/number.md) | Deceleration while stunned. | / |
| zerospthreshold | [number](/types/number.md) | Minimum speed value before speed gets set to 0 when stunned. | / |

#### Flying Dry Bones [IDs 388, 417]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| effectid | [number](/types/number.md) | Effect ID when killed. | / |
| playsound | [number](/types/number.md) | ID of the sound effect played when bonked. | / |
| recovery | [number](/types/number.md) | Ticks of recovery after being bonked for the first time. | / |
| transformid | [number](/types/number.md) | ID of the NPC to transform into when bonked. | / |

#### Flying Spiny [ID 380]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| spawnid | [number](/types/number.md) | ID of the spawned spikes. | / |

#### Foo [ID 401]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| blowframes | [number](/types/number.md) | Number of animation frames per direction used for blowing. The rest are used for the idle animation. | / |
| statetimers | [table](/types/table.md) | Only settable through lua. Sets the ticks the NPC spends on its states. | {128, 230} |

#### Football [ID 321]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| lowheight | [number](/types/number.md) | Bounce force for the low height. | 4.5 |
| mediumheight | [number](/types/number.md) | Bounce force for the medium height. | 6 |
| highheight | [number](/types/number.md) | Bounce force for the max height. | 9.5 |

#### Frightlight [ID 572]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| hideframes | [number](/types/number.md) | Ticks spent hidden. | 32 |
| hiderespawnframes | [number](/types/number.md) | Ticks spent hidden when respawning. | 160 |
| invisibleframes | [number](/types/number.md) | Ticks spent invisible. | 128 |

#### Fry Guy [ID 351]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| splits | [number](/types/number.md) | Number of Sizzle Guys to explode into. | 4 |

#### Fuzzy (YI) [ID 420]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| dizzytime | [number](/types/number.md) | Number of seconds the dizzy effect lasts. Negative = infinite. | / |
| dizzystrength | [number](/types/number.md) | Strength of the dizzy effect. | / |
| dizzytransitiontime | [number](/types/number.md) | Number of seconds it takes for the dizzy effect to start and end. | / |

#### Grafs [IDs 42, 492, 493]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| forcespawn | [bool](/types/bool.md) | Whether to force Grafs to stay spawned forever. | false |
| setpos | [bool](/types/bool.md) | If true, Graf position is set directly, bypassing speedX and speedY. | true |
| relativecoords | [bool](/types/bool.md) | If true, the Graf's coordinate system is relative to the NPC's spawn location, rather than the origin of the scene. | true |
| blocks | [bool](/types/bool.md) | If true, the Graf's coordinates are measured in blocks, rather than pixels. | true |
| seconds | [bool](/types/bool.md) | If true, the Graf's time scale uses seconds rather than ticks. | true |
| invert | [bool](/types/bool.md) | If true, the Y-Axis on the Graf's coordinate system is mirrored. | true |
| absolutetime | [bool](/types/bool.md) | If true, total time since the level started is used for the Graf's math equations, rather than the time since the NPC's spawn. | false |
| parametric | [bool](/types/bool.md) | Whether or not the input string is parametric. | true |
| ribbon | [bool](/types/bool.md) | Whether or not to spawn a ribbon trail while moving. | false |

#### Goal Tape, Goal Orb [IDs 353, 354]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| movementspeed | [number](/types/number.md) | Movement speed of the NPC. | 2 |
| requiredcollisiontype | [number](/types/number.md) | Required type of collision for the exit to count. 0 is like SMM, 1 like SMM2 and 2 like SMW | / |
| dodarken | [bool](/types/bool.md) | Whether to do the darken effect. | true |
| doirisout | [bool](/types/bool.md) | Whether to do the iris out transition. | / |
| pausegame | [bool](/types/bool.md) | Whether to pause the game during the ending sequence. | / |
| isorb | [bool](/types/bool.md) | True if this is a goal orb. | / |
| posetime | [number](/types/number.md) | The frame on which the pose is done. | 464 |
| startexittime | [number](/types/number.md) | The frame on which the iris out starts. | 560 (600 for orb) |
| usevictoryposes | [bool](/types/bool.md) | If true, the player will use a victory pose if applicable. | true |
| mainsfx | [string](/types/string.md) | Sound that plays when collecting tehe tape. | goalTape_main.ogg (goalTape_orb.ogg for orb) |
| irisoutsfx | [string](/types/string.md) | Sound that plays when the iris out happens. | goalTape_irisOut.ogg |
| heldnpctransform | [bool](/types/bool.md) | Whether to transform held NPCs. | / |
| displaycharactername | [bool](/types/bool.md) | Whether to display the character's name. | true |
| displaycourseclear | [bool](/types/bool.md) | Whether to display the text "course clear". | true |
| dotimercountdown | [bool](/types/bool.md) | Whether to do a countdown for the timer, if applicable. | true |
| wintype | [number](/types/number.md) | The win type to use. | 8 (LEVEL_WIN_TYPE_TAPE) (11 for orb (LEVEL_WIN_TYPE_SMWORB)) |
| timerscoremultiplier | [number](/types/number.md) | How many points each timer second is worth. | 50 |
| timercountdownspeed | [number](/types/number.md) | How many frames it takes to count down the timer. | 128 |
| countdownstartsfx, countdownloopsfx, countdownendsfx | [string](/types/string.md) | SFX for the timer countdown. | goalTape_countdown_start.wav, goalTape_countdown_start.wav, goalTape_countdown_start.wav |

#### Grrrols [IDs 531, 532]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| destroyblocks | [bool](/types/bool.md) | Whether or not the NPC is able to destroy blocks. | true |
| eyeoffsetx | [number](/types/number.md) | Horizontal offset of the eyes relative to the center of the sprite. | / |
| eyeoffsety | [number](/types/number.md) | Vertical offset of the eyes relative to the center of the sprite. | / |
| grrrolstrength | [number](/types/number.md) | Determines the strength of Grrrols relative to one another. Grrrols with higher strength can kill Grrrols with lower strength. | 0 |

#### Hatters [IDs 562, 563]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| bonkedframes | [number](/types/number.md) | Number of animation frames per direction used by the bonking state. The rest is used for walking. | / |
| bonktime | [number](/types/number.md) | Duration of the bonk effect. | / |
| waketime | [number](/types/number.md) | Duration of the waking up animation. | / |

#### Hiding Lakitu only [ID 710]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| idletime | [number](/types/number.md) | Ticks spent hiding in the pipe. | 48 |
| watchtime | [number](/types/number.md) | Ticks spent looking left and right. | 64 |
| readytime | [number](/types/number.md) | Ticks spent ready before throwing. | 24 |
| throwtime | [number](/types/number.md) | Ticks spent throwing. | 32 |
| watchheight | [number](/types/number.md) | How far out of the pipe the lakitu is when watching. | 20 |
| raisespeed, lowerspeed | [number](/types/number.md) | Vertical speed when emerging from/submerging back into the pipe. | 1, 1.5 |
| throwxspeed, throwyspeed | [number](/types/number.md) | Speed of the thrown NPC. | 1.5, -5 |
| changesize | [bool](/types/bool.md) | Whether or not the NPC's hitbox and graphics change size when moving. | true |
| becomefriendly | [bool](/types/bool.md) | If true, the NPC is friendly when fully retracted. | true |
| throwsfx | [number](/types/number.md) | ID of the sound to play when throwing. | 25 |
| minplayerdistance | [number](/types/number.md) | Minimum distance from the player to be able to start rising. | 48 |
| defaultthrowid | [number](/types/number.md) | Default ID of the projectile. | 286 |
| throwframes | [number](/types/number.md) | Number of frames used for throwing. | 1 |
| throwframespeed | [number](/types/number.md) | Framespeed for the throw animation. | 8 |

#### Hopping Flame [ID 358]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| spawnid | [number](/types/number.md) | ID of the trail to spawn. | / |

#### Hot Foot [ID 402]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| restingframes | [number](/types/number.md) | Number of animation frames per direction used for resting. The rest is used for walking. | frames/2 |
| nospecialanimation | [bool](/types/bool.md) | Disables special animation handling. | false |

#### Icicles [IDs 541, 542, 543]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| respawntimer | [number](/types/number.md) | Time before a shattered icicle respawns. | 120 |
| waittime | [number](/types/number.md) | Time waiting before falling. | 32 |
| respawnduration | [number](/types/number.md) | Duration of the respawn animation. | 24 |
| shakedistance | [number](/types/number.md) | Distance from the player at which the icicle starts shaking. | 96 |
| shakespeed | [number](/types/number.md) | Frequency of the shake sine wave. | 0.4 |
| shakestrength | [number](/types/number.md) | Amplitude of the shake sine wave. | 3 |
| falldistance | [number](/types/number.md) | Distance from the player at which the icicle starts falling. | 64 |
| effectid | [number](/types/number.md) | ID of the death effect. | 296 |
| dripeffectid | [number](/types/number.md) | ID of the drip effect. | 297 |
| maxspeed | [number](/types/number.md) | Maximum falling speed. | 6 |
| fallsound | [string](/types/string.md) | Sound that plays when falling. | extended/icicle_fall |
| breaksound | [string](/types/string.md) | Sound that plays when breaking. | extended/icicle_break |

#### Jumping Piranha Plant [IDs 518, 519]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| jumpstartspeed | [number](/types/number.md) | Speed when starting a jump. | -6 |
| jumprisinggravity | [number](/types/number.md) | Gravity when moving upwards. | 0.1 |
| jumpfallinggravity | [number](/types/number.md) | Gravity when moving downwards. | 0.01 |
| jumpMaxSpeed | [number](/types/number.md) | Terminal velocity of the NPC when falling. | 1 |
| hidetime | [number](/types/number.md) | Ticks spent hiding in the pipe. | 50 |
| resttime | [number](/types/number.md) | Ticks spent idling while out of the pipe. | 3 |
| ignoreplayers | [bool](/types/bool.md) | If true, the plant can emerge even if players are nearby. | false |
| ishorizontal | [bool](/types/bool.md) | If true, the plant moves horizontally | false |
| isjumping | [bool](/types/bool.md) | Whether or not the NPC acts as a jumping piranha plant. | true |
| defaultfireid | [number](/types/number.md) | Default ID of the projectile. | 527 |
| firesound | [number](/types/number.md) | ID of the sound to play. 0 disables sound. | 18 |
| firespitframes | [number](/types/number.md) | Number of animation frames used for shooting | 2 |
| firespitframespeed | [number](/types/number.md) | Framespeed used for shooting | 4 |

#### King Bill [IDs 428, 429]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| basespeed | [number](/types/number.md) | Base movement speed along its axis of travel. | 5 |
| breaksturdy | [bool](/types/bool.md) | Whether blocks like ?-Blocks and Cement Blocks can be broken. | true |
| vertical | [bool](/types/bool.md) | Whether to travel along the vertical axis. False means the horizontal axis is used. | false |
| effect | [number](/types/number.md) | ID of the death effect. | / |

#### Lakitu (SMB1) [ID 610]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| delay | [number](/types/number.md) | Delay between throwing Spiny Eggs. | 230 |
| spawnid | [number](/types/number.md) | ID of the NPC to spawn. | 611 |
| idleframes | [number](/types/number.md) | Number of animation frames in the idle loop. | frames/2 |
| animationlength | [number](/types/number.md) | How many ticks the throwing animation takes. | 25 |
| centeroffset | [number](/types/number.md) | Horizontal offset of the NPC relative to the position to home in on. | 0 |
| xspmax | [number](/types/number.md) | Maximum horizontal speed. | 8 |
| distaccelfactor | [number](/types/number.md) | Acceleration multiplier based on distance. | 0.005 |
| eggxsp | [number](/types/number.md) | Horizontal speed of the spawned NPC. | 2 |
| eggysp | [number](/types/number.md) | Vertical speed of the spawned NPC. | 7 |
| nospecialanimation | [bool](/types/bool.md) | Disables special animation handling. | false |
| inheritfriendly | [bool](/types/bool.md) | Whether spawned NPCs should inherit the friendly config from the Lakitu. | false |

#### Lakitu (SMB3, SMW) [IDs 47, 284]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| inheritfriendly | [bool](/types/bool.md) | Whether spawned NPCs should inherit the friendly config from the Lakitu. | false |

#### Lakitu Shop Post [ID 711]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| lakaituid | [number](/types/number.md) | ID of the Lakitu NPC to spawn. | 712 |

#### Launch Barrel [IDs 600, 601, 602, 603]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| delay | [number](/types/number.md) | Ticks after entering before a barrel can be exited again. | 8 |
| cooldown | [number](/types/number.md) | Ticks after being shot out before a recently used barrel can be re-entered. | 30 |
| launchtimer | [number](/types/number.md) | Number of ticks for which to apply the launch force. -1 means the player will fly until they hit an obstacle. | 65 |
| correctgravity | [bool](/types/bool.md) | Whether or not to adjust speed to cancel out gravity. | true |

#### Lineguided Cannons [IDs 535, 536]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| containednpc | [number](/types/number.md) | ID of the default contained NPC. | 134 |

#### Lineguided Rope [ID 338]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| mainlength | [number](/types/number.md) | Pixel height of the repeated segment of the sprite. | 32 |
| endlength | [number](/types/number.md) | Pixel height of the ending segment of the sprite. | 32 |
| extension | [number](/types/number.md) | Inset to prevent cutoff with the engine block NPC. | 4 |
| centerplayers | [bool](/types/bool.md) | Whether or not players should be fixed to the center of the rope. | / |
| activebydefault | [bool](/types/bool.md) | Whether engine blocks with attached ropes should activate without requiring the player to touch them. | false |

#### Lineguided Saws [IDs 533, 534]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| inset | [number](/types/number.md) | Inset to prevent cutoff with the engine block NPC. | 8 |
| toplength | [number](/types/number.md) | Pixel height/width of the end segment of the sprite. | 16 |
| middlelength | [number](/types/number.md) | Pixel height/width of the looping segment of the sprite. | 16 |
| baselength | [number](/types/number.md) | Pixel height/width of the segment of the sprite that is attached to the engine block. | 30 |

#### Magikoopa [ID 299]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| sparkleoffsetx | [number](/types/number.md) | Horizontal offset of the sparkles on the wand. | / |
| sparkleoffsety | [number](/types/number.md) | Vertical offset of the sparkles on the wand. | / |
| magicoffsetx | [number](/types/number.md) | Horizontal offset of the spawned magic npc. | / |
| magicoffsety | [number](/types/number.md) | Vertical offset of the spawned magic npc. | / |
| premagictime | [number](/types/number.md) | Ticks before firing magic. | 48 |
| postmagictime | [number](/types/number.md) | Ticks after firing magic. | 64 |
| appeartime | [number](/types/number.md) | Duration of the fade-in animation in ticks. | 32 |
| disappeartime | [number](/types/number.md) | Duration of the fade-out animation in ticks. | 16 |
| hiddentime | [number](/types/number.md) | Time spent invisible between appearances in ticks. | 128 |
| respawntime | [number](/types/number.md) | Time spent invisible after getting killed if set to respawn in ticks. | 256 |
| magic | [number](/types/number.md) | ID of the NPC spawned. | 300 |
| minframeleft | [number](/types/number.md) | First left-facing frame of the sprite sheet animation. | / |
| maxframeleft | [number](/types/number.md) | Last left-facing frame of the sprite sheet animation. | / |
| minframeright | [number](/types/number.md) | First right-facing frame of the sprite sheet animation. | / |
| maxframeright | [number](/types/number.md) | Last right-facing frame of the sprite sheet animation. | / |

#### Magikoopa Magic [ID 300]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| movespeed | [number](/types/number.md) | Velocity at which the NPC moves. | 3 |
| transformations | [table](/types/table.md) | NPC IDs that turn blocks can be transformed into. | [54, 112, 33, 185, 301, 165] |
| blocktargets | [table](/types/table.md) | Blocks that can be transformed into magic. | [96] |
| sound | [table](/types/table.md) | Path to the sound file to play on spawn. | magikoopa-magic |

#### Math (Countdown) Platform [ID 387]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| default | [number](/types/number.md) | Default lifetime in seconds. | 4 |
| second | [number](/types/number.md) | Ticks between countdowns. | 60 |
| fallaccel | [number](/types/number.md) | Multiplier for gravity when falling. | 1 |

#### Mechakoopa [ID 368]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| stunid | [number](/types/number.md) | ID of the NPC after getting stunned. | 369 |

#### Mechakoopa [ID 369]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| recoverid | [number](/types/number.md) | ID of the NPC after getting back up. | 368 |

#### Megashroom [ID 425]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| bounceanims | [number](/types/number.md) | Animation frames in the bounce animation. | 3 |
| keeppower | [bool](/types/bool.md) | If true, valueable powerups will be retained across the mega state. | false |

#### Minigame Cloud [ID 410]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| thrown | [number](/types/number.md) | Total number of items thrown. | 10 |
| spawnid | [number](/types/number.md) | ID of the reward spawned after successful minigame completion. | / |

#### Monty Mole [ID 309]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| keephole | [bool](/types/bool.md) | Whether or not the Mole leaves behind a permanent hole. | true |
| jumpheight | [number](/types/number.md) | Jump force of the mole if emerging. | 9.5 |
| holeid | [number](/types/number.md) | ID of the hole BGO to spawn. | / |

#### Mutant Vine Head [IDs 553, 555]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| playercontrolled | [bool](/types/bool.md) | Index of the Player that controls the head. false means redirectors control it. | false |
| eatsblocks | [bool](/types/bool.md) | Whether or not the vine is able to eat . | false |
| vineid | [number](/types/number.md) | ID of the regular vine to spawn. | / |
| thornedid | [number](/types/number.md) | ID of the thorned vine to spawn. | / |

#### Ninji (SMW Jumping) [ID 407]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| bounceheights | [table](/types/table.md) | List of bounces the Ninji performs. | [4.5, 4.5, 6.5, 8.5] |
| startbounce | [number](/types/number.md) | The index of the first bounce in the cycle. | 3 |
| wait | [number](/types/number.md) | Ticks of waiting between bounces. | 65 |

#### Number Platform (YI) [ID 340]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| numberframes | [number](/types/number.md) | Number of frames on the spritesheet dedicated to numbers. | 10 |
| numberwidth | [number](/types/number.md) | Width of a number. | 32 |
| numbergap | [number](/types/number.md) | Preferred gap between digits in multi-digit numbers. | 20 |
| numbercolors | [table](/types/table.md) of [Color](/reference/Color.md) | Table of colors for the numbers. Must be set from lua, currently. | / |
| containednpcspeedx, containednpcspeedy | [number](/types/number.md) | Speed of the contained NPC when it emerges. | 0, -6 |
| ignoreplayers | [bool](/types/bool.md) | If true, players are unable to trigger the step-activated burner. | false |
| ignorenpcs | [bool](/types/bool.md) | If true, NPCs are unable to trigger the step-activated burner. | false |
| triggerweight | [number](/types/number.md) | The minimum weight an object needs to trigger the step-activated burner. | 1 |
| disappeareffect | [number](/types/number.md) | Effect ID of the disappear effect. | 294 |
| disappeartype | [number](/types/number.md) | Default disapear type. 0 is despawn, 1 is die, 2 is respawn | 0 |
| spawneddisappeartype | [string](/types/string.md) | Disappear type when spawned from a generator. | 1 (die) |
| respawnduration | [string](/types/string.md) | Ticks before the number platform respawns if the disappeartype lets it respawn | 160 |
| pressedsound | [number](/types/number.md) | Path to the pressed sound | number-platform-pressed |
| disappearsound | [number](/types/number.md) | Path to the disappear sound | number-platform-disappear |
| countdownsound | [string](/types/string.md) | Path to the countdown sound | number-platform-countdown |
| respawnsound | [string](/types/string.md) | Path to the respawn sound | number-platform-disappear |

#### Paddlewheel [ID 421]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| maxrotspeed | [number](/types/number.md) | Maximum rotation speed. | 0.3 |
| resist | [number](/types/number.md) | Friction when rotating. | 0.01 |
| platformid | [number](/types/number.md) | ID of the platforms to spawn. | 422 |
| linespeedmultiplier | [number](/types/number.md) | Speed multiplier while lineguides. | 5 |
| autorotate | [number](/types/number.md) | If true, the Paddlewheel will constantly rotate at maximum speed. | false |
| linewidth | [number](/types/number.md) | Width of the line. | 1 |
| linecolor | [Color](/reference/Color.md) | Color of the line. | white |

#### Pansers [IDs 345, 346, 347]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| effectid | [number](/types/number.md) | ID of the death effect. | / |
| speedx | [number](/types/number.md) | Horizontal movement speed. | / |
| shotspeedx | [number](/types/number.md) | Initial X-Speed of the spawned NPC. | / |
| shotspeedy | [number](/types/number.md) | Initial Y-Speed of the spawned NPC. | / |
| turntime | [number](/types/number.md) | Seconds between turning to face closest player. | / |
| reloadtime | [number](/types/number.md) | Ticks between volleys. | / |
| firetime | [number](/types/number.md) | Ticks between shots in a volley. | / |
| shots | [number](/types/number.md) | Shots per volley. | / |
| projectileid | [number](/types/number.md) | ID of the NPC spawned. | 348 |

#### Parabeetles [IDs 303, 304]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| ridespeedstart | [number](/types/number.md) | Vertical speed when stepped on. | / |
| ridespeeddelta | [number](/types/number.md) | Vertical speed change over time while stepped on. | / |
| ridespeedend | [number](/types/number.md) | Vertical speed limit when stood on for a while. | / |
| returnspeed | [number](/types/number.md) | Vertical speed limit for returning to the original Y-Coordinate after the player stepped off the Parabeetle. | / |
| returnspeeddelta | [number](/types/number.md) | Vertical speed change over time while not stepped on. | / |
| ridespeed | [number](/types/number.md) | If set, overrides gradual ride speed change with constant ride speed. | / |
| returndelay | [number](/types/number.md) | Ticks after the player steps off before the NPC begins the return trip. | / |

#### Phantos [IDs 370, 625, 626]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| awakenoffscreen | [bool](/types/bool.md) | If true, this Phanto can awaken while offscreen. | / |
| enterawayfromplayer | [bool](/types/bool.md) | If true, following phantos will always enter the screen on the opposite side of the screen from the player they're following. | / |
| homingspeed | [number](/types/number.md) | Vertical speed multiplier when homing. | / |
| flashstartframe | [number](/types/number.md) | First frame in the flashing animation. | / |
| flashendframe | [number](/types/number.md) | Last frame in the flashing animation. | / |
| sleepstartframe | [number](/types/number.md) | First frame in the sleeping animation. | / |
| sleependframe | [number](/types/number.md) | Last frame in the sleeping animation. | / |
| chasestartframe | [number](/types/number.md) | First frame in the chasing animation. | / |
| chaseendframe | [number](/types/number.md) | Last frame in the chasing animation. | / |
| stoptype | [number](/types/number.md) | Enum for the on-stop behaviour (0-2), corresponding to "stop", "stop when the player leaves the section" and "never stop". | 0 |

#### Piranha Plants [IDs 512, 513, 514, 515, 521, 522, 523, 524, 529, 701, 702, 703]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| movementspeed | [number](/types/number.md) | Speed when going in or coming out of the pipe. | 1.5 |
| hidetime | [number](/types/number.md) | Ticks spent hiding in the pipe. | 50 |
| resttime | [number](/types/number.md) | Ticks spent idling while out of the pipe. | 50 |
| ignoreplayers | [bool](/types/bool.md) | If true, the plant can emerge even if players are nearby. | false |
| ishorizontal | [bool](/types/bool.md) | If true, the plant moves horizontally | false |
| changesize | [bool](/types/bool.md) | Whether or not the NPC's hitbox and graphics change size when moving. | true |
| becomefriendly | [bool](/types/bool.md) | If true, the NPC is friendly when fully retracted. | true |
| defaultfireid | [number](/types/number.md) | Default ID of the projectile. | 0 |
| firesound | [number](/types/number.md) | ID of the sound to play. 0 disables sound. | 18 |
| firespitframes | [number](/types/number.md) | Number of animation frames used for shooting | 0 |
| firespitframespeed | [number](/types/number.md) | Framespeed used for shooting | 0 |

#### Popup Coin [ID 378]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| defaultcontents | [number](/types/number.md) | NPC ID to default to if no content is provided. | / |

#### Ptooie [IDs 375, 377]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| walktimer | [number](/types/number.md) | Seconds between a direction change. | 5 |
| blowheight# | [number](/types/number.md) | # is a number starting at 1. Blowheights are randomly selected from the provided pool and determine how many pixels high the projectile should be lifted. | / |
| ballid | [number](/types/number.md) | ID of the Projectile. | 376 |

#### Ptooie Ball [ID 376]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| maxspeed | [number](/types/number.md) | Maximum movement speed while hovering. | 4 |

#### POW Blocks [IDs 720, 721, 722]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| powradius | [number](/types/number.md) | Radius of the pow effect. | / |
| powtype | [string](/types/string.md) | Type of pow effect. | / |

#### Respawner [ID 637]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| padding | [number](/types/number.md) | Pixels of camera padding where spawn will still be registered. | 32 |

#### Reznor [ID 413]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| projectileid | [number](/types/number.md) | ID of the spawned projectile. | 414 |
| turns | [bool](/types/bool.md) | Whether or not Reznor may turn to face the player. | / |

#### Reznor Fireball [ID 414]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| alwaysaim | [bool](/types/bool.md) | Whether or not the fireball will always aim towards the player, even if not spawned by a Reznor. | false |

#### Ring Monitor [ID 494]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| value | [number](/types/number.md) | Coin value when broken. | 10 |

#### Rip van Fish [ID 386]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| radius | [number](/types/number.md) | Activation radius. | / |
| speedcap | [number](/types/number.md) | Cap for vertical and horizontal speed. | / |
| accel | [number](/types/number.md) | Acceleration while awake. | / |
| fallspeed | [number](/types/number.md) | Falling speed while asleep. | 0.125 |
| sleepframespeed | [number](/types/number.md) | Framespeed while asleep. | 50 |

#### Rock [ID 320]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| bounceheight | [number](/types/number.md) | Height of the rock's bounce. | / |

#### Rocky Wrench [ID 395]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| wrenchdiagonal | [number](/types/number.md) | Number of ticks during which the spawned wrench moves diagonally. | / |
| hwrenchoffset | [number](/types/number.md) | Horizontal offset of the spawned wrench. | / |
| vwrenchoffset | [number](/types/number.md) | Vertical offset of the spawned wrench. | / |
| revealspeed | [number](/types/number.md) | Duration of the appearing animation in seconds. | / |
| hidespeed | [number](/types/number.md) | Duration of the disappearing animation in seconds. | / |
| peektime | [number](/types/number.md) | Ticks spent peeking before appearing fully. | / |
| cooldown | [number](/types/number.md) | Ticks between throwing a wrench and hiding. | / |
| spawnid | [number](/types/number.md) | ID of the NPC to spawn. | 396 |

#### Rotary Lift [ID 570]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| radius | [number](/types/number.md) | Ejection radius. | width/2 |
| force | [number](/types/number.md) | Force applied to objects caught in the NPC's radius. | / |
| rotationspeed | [number](/types/number.md) | Angular velocity while spinning in degrees per tick. | / |
| affectsnpc | [bool](/types/bool.md) | Whether or not forces should be applied to colliding NPCs in addition to the player. | true |
| forcetype | [number](/types/number.md) | Enum for behaviour. 0: Force objects away. 1: Force objects in the direction of rotation. 2: A mix of 0 and 1. | 2 |
| spintime | [number](/types/number.md) | Ticks spent in the spinning state. | / |
| cooltime | [number](/types/number.md) | Ticks spent in the idle state. | / |
| bias | [number](/types/number.md) | Smaller values for forcetype 2 apply greater perpendicular force at the ledges. | 1.85 |

#### Rotating Bill Blaster [ID 438]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| projectileid <badge type="tip">Coming soon</badge> | [number](/types/number.md) | The ID of the projectile to fire by default. Set to a positive value to fire an NPC with that ID. Set to a negative value for coins (example: -5 = fire 5 coins) | 17 (Bullet Bill)
| coinid <badge type="tip">Coming soon</badge> | [number](/types/number.md) | The ID of the NPC to use when set to fire coins. | 10 (SMB3 Coin) |

#### Rotating Bill Blaster and Base [ID 438, 439]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| beforefire <badge type="tip">Coming soon</badge> | [number](/types/number.md) | Number of frames the bill blaster waits before firing. | 96 |
| afterfire <badge type="tip">Coming soon</badge> | [number](/types/number.md) | Number of frames the bill blaster waits before turning. Still used when not rotating. | 64 |

#### Salsa Nipper [IDs 708]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| triggerwidth, triggerheight | [number](/types/number.md) | Size of the jump trigger box. | 30, 256 |
| patroldistance | [number](/types/number.md) | Horizontal distance covered when patrolling. | 128 |
| turnaroundwait | [number](/types/number.md) | Ticks spent waiting before turning around. | 60 |
| jumpspeed | [number](/types/number.md) | Jump speed. | -7 |
| hopspeed | [number](/types/number.md) | Vertical speed for a hop. | -1.5 |
| jumpframes | [number](/types/number.md) | Number of animation frames for jumping. Remainder of "frames" defines number of idle frames. | 2 |
| jumpframespeed | [number](/types/number.md) | Framespeed when jumping. | 8 |
| fireid | [number](/types/number.md) | ID of the fire projectile. | 526 |
| firespeedx, firespeedy | [number](/types/number.md) | Speed of the projectile. | 0, -6 |
| firesound | [number](/types/number.md) | Sound that plays when a projectile is spit. | 18 |

#### Sea Mine [ID 363]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| wateraccel | [number](/types/number.md) | Gravity multiplier while in the water. | / |
| fallaccel | [number](/types/number.md) | Gravity multiplier while out of water. | / |
| sinkmultiplier | [number](/types/number.md) | Gravity multiplier while sinking to stabilize the mine. | 1.06 |

#### Scuttlebug (Hanging) [ID 509]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| dropspeed | [number](/types/number.md) | Speed at which the NPC drops with its string. | / |
| hangspeed | [number](/types/number.md) | Maximum speed while vertically oscillating. | / |
| hangheight | [number](/types/number.md) | Amplitude of the hanging oscillation. | / |
| stringpriority | [number](/types/number.md) | Render priority of the string. | / |
| hangtime | [number](/types/number.md) | 0: Drop after sinking. -1: Hang forever. | -1 |
| stringretractspeed | [number](/types/number.md) | Speed at which an abandoned string retracts. | / |
| spawnid | [number](/types/number.md) | ID to turn into when losing the string. | 510 |

#### Scuttlebug (Walking) [ID 510]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| boostheight | [number](/types/number.md) | Jump force when changing direction. | / |
| bouncewaitdelay | [number](/types/number.md) | Cooldown for direction changes. | / |

#### Shoe Goombas [IDs 379, 392, 393]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| jumpheight | [number](/types/number.md) | Height of the Goomba's jump. | / |
| flytime | [number](/types/number.md) | Active ticks of the flutter. | 0 |
| shoeid | [number](/types/number.md) | ID of the shoe to drop. | / |
| lavaproof | [bool](/types/bool.md) | Whether or not the NPC should spawn particles while standing on lava. | false |
| spawnednpc | [number](/types/number.md) | NPC ID to spawn when landing. | 0 |

#### Sine Enemies (Blurp, Green Bubble) [IDs 302, 322]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| chase | [number](/types/number.md) | If true, the NPC turns to face the player when spawning. | / |
| frequency | [number](/types/number.md) | Frequency of the sine wave. | / |
| amplitude | [number](/types/number.md) | Amplitude of the sine wave. | / |
| wavestart | [number](/types/number.md) | Offset for the start of the sine wave. | / |

#### Skewers [IDs 423, 424]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| hitboxoffset | [number](/types/number.md) | Hitbox pixel offset perpendicular to axis of movement. | 18 |
| waitdelay | [number](/types/number.md) | Ticks of wait time while retracted. | / |
| extendeddelay | [number](/types/number.md) | Ticks of wait time after smashing. | / |
| extendspeed | [number](/types/number.md) | Speed at which to extend. | 16 |
| retractspeed | [number](/types/number.md) | Speed at which to return. | 4 |
| hitsblocks | [bool](/types/bool.md) | Whether or not the Skewer is able to hit blocks. | true |
| horizontal | [bool](/types/bool.md) | If true, the NPC is sideways. | / |

#### Small Switches [IDs 451, 452, 453, 454, 606, 607]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| switchon | [bool](/types/bool.md) | If true, the NPC can turn "off" blocks into "on" blocks. | / |
| switchoff | [bool](/types/bool.md) | If true, the NPC can turn "on" blocks into "off" blocks. | / |
| color | [string](/types/string.md) | String representation of the switch color. Unrecognized names will be interpreted as new switch colors. | / |
| blockon | [number](/types/number.md) | ID of the affected "on" block. | / |
| blockoff | [number](/types/number.md) | ID of the affected "off" block. | / |
| effect | [number](/types/number.md) | ID of the effect spawned when stepped on. | / |
| permanent | [bool](/types/bool.md) | If true, the switch does not disappear when pressed, but sticks around in a pressed state. | / |

#### Snailicorn [IDs 623, 624]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| stunframes | [bool](/types/bool.md) | Subset of the frames config dedicated to the hurt animation. | 1 |

#### Snake Block [ID 344]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| altdiagonalmovement | [bool](/types/bool.md) | If true, an alternative way of spawning blocks during diagonal movements is used. | false |
| nohitpause | [bool](/types/bool.md) | If true, the snake block continues moving even when a player is in a powerdown animation. | false |
| basespeed | [number](/types/number.md) | Speed of the Snake Block (preferred over vanilla speed flag) | 1.5 |
| soundid | [number](/types/number.md) | ID of the sound effect played while moving. | / |

#### Snifits [IDs 470, 471]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| burst | [number](/types/number.md) | Number of bullets to fire in quick succession. | / |
| interval | [number](/types/number.md) | Ticks between burst shots. | / |
| shottimer | [number](/types/number.md) | Ticks between bursts. | / |
| prepare | [bool](/types/bool.md) | If true, the NPC will briefly stand still and shake before firing. | / |
| jumps | [bool](/types/bool.md) | If true, the NPC will occasionally jump. | / |
| Spawners (Boohemoth, Bullet, Cheep Chepp) | | IDs 636, 638, 639 <badge type="tip">Coming soon</badge> |
| padding | [number](/types/number.md) | Pixels of camera spawn leniency. | 32 |

#### Spike (SMB3) [ID 365]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| spawnid | [number](/types/number.md) | ID of the spawned NPC. | / |

#### Spike (SMM), Snow Spike [IDs 640, 642, 644, 646]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| idletime | [number](/types/number.md) | Ticks spent waiting before spawning a ball. | / |
| holdtime | [number](/types/number.md) | Ticks spent holding the ball before throwing it. | / |
| throwid | [number](/types/number.md) | ID of the spawned NPC. | / |
| throwxspeed, throwyspeed | [number](/types/number.md) | Speed of the thrown spike ball. | / |
| throwsfx | [string](/types/string.md) | SFX to play after throwing the spike ball. | / |

#### Spike Ball (SMM), Spike Snowball [IDs 641, 643, 645, 647]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| issnsowball | [bool](/types/bool.md) | Whether to treat it as a snowball, rather than a spike ball. | / |
| islarge | [bool](/types/bool.md) | Whether the ball is large and thus more powerful. | / |
| startingspeed | [number](/types/number.md) | Horizontal speed when spawning. | / |
| bounceheight | [number](/types/number.md) | Vertical speed when bouncing on the ground. | / |
| slopeacceleration | [number](/types/number.md) | Acceleration when going down slopes. | / |
| useoldslopeacceleration | [bool](/types/bool.md) | If true, old slope speed calculations are used. | / |
| maxspeed | [number](/types/number.md) | Maximum movement speed of the NPC. | / |

#### Spiny Egg (SMB1) [ID 611]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| transformid | [number](/types/number.md) | ID to transform into upon touching the ground. | 612 |

#### Springs (Red) [IDs 455, 456, 457, 458]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| force | [number](/types/number.md) | Launch force in their respective direction. | 15 (4 for horizontal) |
| weakforce | [number](/types/number.md) | Jump force for players not holding jump. If negative, a multiplier on force. If positive, an absolute value. | -0.77 |
| npcforce | [number](/types/number.md) | Jump force for NPCs. If negative, a multiplier on force. If positive, an absolute value. | -0.77 |
| springdropcooldown | [number](/types/number.md) | Cooldown for performing a spring drop. | / |
| usedirectiontobounce | [bool](/types/bool.md) | If true, bounces the player in the NPC's facing direction (horizontal springs). | / |
| isstationary | [bool](/types/bool.md) | If true, disables the SMW bounce physics. | / |

#### Star Coin [ID 310]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| collectedframes | [number](/types/number.md) | Subset of frames used for already collected Star Coins. | frames/2 |
| shellcollectable | [bool](/types/bool.md) | Whether or not the star coin can be collected with a shell. | true |

#### Starman [IDs 293, 538, 559]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| duration | [number](/types/number.md) | Duration of the invincibility effect in seconds. | / |

#### Stretch [IDs 323, 324]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| stretchframes | [number](/types/number.md) | Subset of frames used for the appearing/disappearing animation. | 3 |

#### Sumo Bro [ID 360]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| stomps | [number](/types/number.md) | Number of stomps in a row. | 1 |
| earthquake | [number](/types/number.md) | Intensity of the earthquake that should happen when the Bro stomps. | 5 |
| stompframes | [number](/types/number.md) | Number of animation frames dedicated to the stomping animation. | 3 |
| spawnid | [number](/types/number.md) | ID of the NPC to spawn. | 361 |

#### Sumo Bro Lightning [ID 361]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| spawnid | [number](/types/number.md) | ID of the NPC to spawn. | 362 |

#### Sumo Bro Fire [ID 362]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| spread | [number](/types/number.md) | Number of times fire should spread in either direction. -1 = infinite. | 2 |
| delay | [number](/types/number.md) | Ticks between spreads. | / |
| framecount | [number](/types/number.md) | Number of animation frames for each segment of the animation. | / |
| top | [number](/types/number.md) | Number of ticks during which the fire remains at peak height. | / |

#### Swinging Platform Controllers [IDs 656, 658, 660, 662, 664]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| defaultplatformid | [number](/types/number.md) | Default ID of the attached NPC. | / |
| rotationbehaviour | [number](/types/number.md) | Type of rotation behaviour. 0 is weighted, 1 is auto, 2 is back and forth. | / |
| weightbias | [number](/types/number.md) | Bias to apply when beginning a rotation (determines direction). | / |


#### Tantrunt [ID 564]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| earthquake | [number](/types/number.md) | Strength of the earthquake effect when slamming into things. | 0 |
| poweffect | [bool](/types/bool.md) | Whether to cause a pow effect when slamming into things. | true |
| powradius | [number](/types/number.md) | Radius of the pow effect. | 600 |
| powtype | [string](/types/string.md) | Type of pow effect. | legacy |

#### Targeting Fishbone [ID 652]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| idleframes | [number](/types/number.md) | Subset of the frames config used for the idle animation. | 2 |
| visionlength | [number](/types/number.md) | Length of the vision cone. | 300 |
| visionwidth | [number](/types/number.md) | Lateral width of the vision cone. | 60 |
| chasespeedmax | [number](/types/number.md) | Maximum speed when chasing. | 3 |
| chaseacceleration | [number](/types/number.md) | Accleeration per tick when chasing. | 0.025 |
| usespotlight | [bool](/types/bool.md) | Whether to use a spotlight to telegraph the vision cone. | true |
| spotpower | [number](/types/number.md) | Spotpower for the spot light. | 15 |
| needswater | [bool](/types/bool.md) | If true, the NPC's regular behavior is restricted to underwater. | false |
| collisionhit | [bool](/types/bool.md) | If true, the NPC gets destroyed when it collides with blocks and NPCs while chasing. | true |
| ignorewalls | [bool](/types/bool.md) | Whether to ignore walls. | false |

#### Thwimp [ID 301]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| jumpspeed | [number](/types/number.md) | Upwards jump force. | 12 |
| jumpforce | [number](/types/number.md) | Sideways jump force. | 7 |
| waittime | [number](/types/number.md) | Ticks between bounces. | 65 |

#### Thwomps [IDs 295, 432, 435, 437]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| slamspeed | [number](/types/number.md) | Speed at which the Thwomp slams. Values above 8 will act weird due to vanilla physics. | 6 |
| acceleration | [number](/types/number.md) | Rate at which Thwomp accelerates. 0 instantly reaches slamspeed. | 0.4 |
| recoverspeed | [number](/types/number.md) | Speed at which the Thwomp returns to its home position. | 2 |
| accelrecover | [number](/types/number.md) | Speed at which Thwomp accelerates when recovering. 0 instantly reaches recoverspeed. | 0.2 |
| earthquake | [number](/types/number.md) | Intensity of the earthquake that should happen when the Thwomp slams. | 0 |
| smash | [number](/types/number.md) | 0 = No smashing. 1 = Breaks a single layer of smashable blocks. 2: Breaks through multiple layers. 3: Like 2, but doesn't lose momentum while smashing. | 0 |
| smashsturdy | [bool](/types/bool.md) | Whether blocks like ?-Blocks and Cement Blocks can be broken. | false |
| horizontal | [bool](/types/bool.md) | If true, the NPC moves horizontally instead of vertically. | false |
| mad | [number](/types/number.md) | Mad Thwomps will repeatedly slam back and forth. 0 = Not mad. 1 = Mad, but needs activation. 2: Permanently mad. | 0 |
| cooldown | [number](/types/number.md) | Ticks the Thwomp stays still after slamming. | / |
| range | [number](/types/number.md) | Pixels the player needs to be below/in front of/above the thwomp for it to activate. | 300 |
| revertslidepatch | [bool](/types/bool.md) | Set to true to revert to old behavior where thwomps would slide indefinitely after coming in contact with conveyors. | false |

#### Torpedo Ted [ID 305]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| leftspeed | [number](/types/number.md) | Speed cap while moving left. | / |
| rightspeed | [number](/types/number.md) | Speed cap while moving right. | / |
| acceleration | [number](/types/number.md) | Horizontal acceleration. | / |
| deceleration | [number](/types/number.md) | Vertical deceleration. | / |

#### Torpedo Ted Spawner [ID 306]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| delay | [number](/types/number.md) | Ticks of wait time between spawns. | / |
| force | [number](/types/number.md) | Vertical force with which the Torpedo Ted is ejected. | / |
| traveldistance | [number](/types/number.md) | Pixels travelled between states. | / |
| heldframe | [number](/types/number.md) | Frame of the spawned NPC when held. | / |
| spawnerpriority | [number](/types/number.md) | Priority of the NPC. | / |
| spawnpriority | [number](/types/number.md) | Priority of the spawned NPC. | / |
| anchory | [number](/types/number.md) | Y-Anchor of the spawned NPC to the claw. 1 is top, -1 is bottom. | / |
| spawnid | [number](/types/number.md) | Id of the NPC spawned. | 305 |

#### Twister [ID 655]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| windstrength | [number](/types/number.md) | Upwards applied to players and NPCs. | 1 |
| windwidth, windheight | [number](/types/number.md) | The width and height of the wind's triangular hitbox. | 96, 150 |
| penaltyPerWeight | [number](/types/number.md) | How heavily the NPC's weight impacts the hover strength. Higher values create a stronger falloff. | 10 |
| maxspeed | [number](/types/number.md) | Maximum speed for players and npcs in the tornado. | 6 |
| playerboostmaxspeed | [number](/types/number.md) | Maximum speed for boosting the player when pressing jump. | 10 |
| playerboosttimer | [number](/types/number.md) | How long the player jump boost is applied. | 12 |
| effectid | [number](/types/number.md) | Id of the tornado effect. | 288 |
| forcejump | [number](/types/number.md) | The type of jump to force. 1 is regular, 2 is spin. 0 is none. | 1 |
| boostplayer | [bool](/types/bool.md) | Whether players are caught in the tornado. | true |
| boostnpc | [bool](/types/bool.md) | Whether NPCs are caught in the tornado. | true |

#### Uncle Broadsword's Boomerang [ID 436]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| health | [number](/types/number.md) | The Boomerang loses health with every impact. This defines the initial health. | 3 |

#### Venus Fire Trap [IDs 516, 517]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| movementspeed | [number](/types/number.md) | Speed when going in or coming out of the pipe. | 1.5 |
| hidetime | [number](/types/number.md) | Ticks spent hiding in the pipe. | 50 |
| resttime | [number](/types/number.md) | Ticks spent idling while out of the pipe. | 100 |
| ignoreplayers | [bool](/types/bool.md) | If true, the plant can emerge even if players are nearby. | false |
| ishorizontal | [bool](/types/bool.md) | If true, the plant moves horizontally | false |
| changesize | [bool](/types/bool.md) | Whether or not the NPC's hitbox and graphics change size when moving. | true |
| becomefriendly | [bool](/types/bool.md) | If true, the NPC is friendly when fully retracted. | true |
| isvenusfiretrap | [bool](/types/bool.md) | If true, the NPC will attempt to look at a nearby player. | true |
| defaultfireid | [number](/types/number.md) | ID of the fireball. | 511 |
| firesound | [number](/types/number.md) | Sound ID of the sound to play when shooting. 0 disables sound. | 18 |

#### Venus Fire Trap Fireball [ID 511]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| minspeedy, maxspeedy | [number](/types/number.md) | Limits the fireball's vertical speed. | -2, 2 |

#### Waddle Doo [ID 472]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| beamlength | [number](/types/number.md) | Number of segments spawned for the beam. | 4 |
| beamanglestart | [number](/types/number.md) | Start angle of the beam. | 30 |
| beamangleend | [number](/types/number.md) | End angle of the beam. | 150 |
| walktime | [number](/types/number.md) | Ticks spent walking before firing a beam. | 240 |
| chargetime | [number](/types/number.md) | Chargeup time for the beam. | / |
| beamtime | [number](/types/number.md) | Beam interpolation duration. | / |
| sparkspawndelay | [number](/types/number.md) | If > 0, Sparks are spawned from closest to farthest with this delay defining the delay between each individual spawn. | / |
| sparkkilldelay | [number](/types/number.md) | Similar to sparkspawndelay, but for when the sparks are killed. | / |
| sparkid | [number](/types/number.md) | ID of the spark NPC. | 473 |

#### Waddle Doo Spark [ID 473]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| dooid | [number](/types/number.md) | ID of the related Waddle Doo NPC. | 472 |

#### Walking Rinka Shooter [ID 666]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| walkshootdelay | [number](/types/number.md) | Fire delay while walking. | 200 |
| heldshootdelay | [number](/types/number.md) | Fire delay while held by a player. | 100 |
| spawnid | [number](/types/number.md) | ID of the NPC to spawn while held. Will always spawn a Rinka (210) when not held. | 667 |

#### Water Leaper (Trouter, Podoboo, Dolphin) [IDs 350, 459, 460, 461, 589, 590]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| down | [string](/types/string.md) | The direction the NPC considers to be down. Can be down, left, right or up. | down |
| type | [string](/types/string.md) | Determines the terminator (resting place check). Can be water, lava, section or fixed. Fixed emulates NPC 12's jumping behaviour. | water |
| resttime | [number](/types/number.md) | Ticks spent idling between jumps. | 65 |
| gravitymultiplier | [number](/types/number.md) | Multiplier applied to the NPC's gravity. | 1 |
| jumpspeed | [number](/types/number.md) | Default jump force for fixed-type leapers. | 8 |
| effect | [number](/types/number.md) | Effect IDspawned when entering or exiting a terminator. | 0 |
| sound | [number](/types/number.md) | Sound played when entering or exiting a terminator. | 0 |
| friendlyrest | [bool](/types/bool.md) | If true, the NPC is friendly while resting between cycles. | false |

#### Wiggler [IDs 446, 448]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| trailcount | [number](/types/number.md) | Number of trail segments. | 4 |
| trailid | [number](/types/number.md) | ID of the trail segment NPC. | / |
| angryid | [number](/types/number.md) | ID to transform into when jumped on. | 448 |
| distance | [number](/types/number.md) | Pixels between each segment. | / |
| dieswhenthrown | [bool](/types/bool.md) | If true, restores old throw behavior. | / |

#### Wiggler Segment [IDs 447, 449]
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| angryid | [number](/types/number.md) | ID to transform into when jumped on. | 449 |

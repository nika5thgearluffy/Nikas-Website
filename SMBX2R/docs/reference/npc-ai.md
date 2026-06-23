# NPC AI

This page includes descriptions of the AI of all basegame NPCs with special behaviour. They can be accessed as part of a NPC instance of the given ID. This page is likely incomplete.

## 1-100

#### 3 (Red Paragoomba)

<Badge type="tip">ai1</Badge> Increments 1 per tick, at 32 the jumps are starting and it only increments one per jump until 35.

#### 3, 7, 24, 73, 113, 114, 115, 116, 172, 174, 195 (Shells) (or any other NPC with isshell set)

<Badge type="tip">ai4</Badge> Timer counts up from 0 to 3 when changing direction and spawning hit effect.

#### 8, 93 (Rightside-up Piranha Plant)

<Badge type="tip">ai1</Badge> Timer (increments to a different thereshold based on ai2)<br>
<Badge type="tip">ai2</Badge> State (1=showing up [ai1 0-32], 2=showing [ai1 0-49], 3=going down [ai1 0-32], 4=hiding [ai1 33-74])

#### 10, 33, 88, 103, 138, 152, 251, 252, 253, 258, 274, 411, 558 (Coin) (or any other NPC with iscoin set)

<Badge type="tip">ai1</Badge> 1 if gravity should take effect

#### 12 (Podoboo (Deprecated))

<Badge type="tip">ai1</Badge> Timer<br>
<Badge type="tip">ai2</Badge> State (1 = jumping, 2 = falling)

#### 13 (Player Fireball)

<Badge type="tip">ai1</Badge> State (1-5 corresponding to the fireball style of the first 5 player characters)<br>
<Badge type="tip">ai2</Badge> 1 if Peach's fireball bounced off a wall

#### 15 (Boom Boom)

<Badge type="tip">ai1</Badge> State (0 = running, 1 = spiked, 2 = transition to spiked, 3 = jumping, 4 = hurt)<br>
<Badge type="tip">ai2</Badge> Timer

#### 21 (Bill Blaster)

<Badge type="tip">ai1</Badge> Timer: Increments 1 per tick, at 200 one bullet bill is fired unless the player is over or underneath the blaster. (incremeting will not be paused!)

#### 22 (Billy Gun)

<Badge type="tip">ai1</Badge> Timer: Increments 10 per tick when the player is holding the billy gun, at 200 one bullet bill is fired.

#### 25 (SMB2 Ninji)

<Badge type="tip">ai1</Badge> Timer: Decrements from 5 to 0 while grounded. When the value is 0 then the ninji jumps.

#### 28 (Cheep Cheep) (other cheep cheeps too?)

<Badge type="tip">ai1</Badge> Selected AI behaviour (starting at 0, in oder or Editor options)<br>
<Badge type="tip">ai4</Badge> 0/1 for swimming up/down

#### 29 (SMB1 Hammer Bro)

<Badge type="tip">ai1</Badge> Direction timer: Sign corresponds to direction, resets roughly every 100 ticks.<br>
<Badge type="tip">ai2</Badge> Jump timer: Increments 1 per tick (while not shooting), if reaches 250 then super-jump is executed and the timer resets<br>
<Badge type="tip">ai3</Badge> Throwing releated. High number = more throws

#### 34 (Leaf)

<Badge type="tip">ai1</Badge> Timer: From 1 to 6. Controls the "swing"-effect for correct speed. When the value 6 is reached the direction of this swing is switched.

#### 37, 180 (Thwomp (Deprecated))

<Badge type="tip">ai1</Badge> State (0=idle, 1=falling, 2=down, 3=retreating)<br>
<Badge type="tip">ai2</Badge> Timer: For state 2 => from 0 to 100; When hit value 100 then state is switched to 3.

#### 38, 43, 44 (Boo)

<Badge type="tip">ai1</Badge> State (0=idle, 1=follow)

#### 39 (Birdo)

<Badge type="tip">ai1</Badge> State (0=movement, 1=fire, or -30 to 0 if got hit)<br>
<Badge type="tip">ai2</Badge> Timer: Increments 1 per tick; if reaches 125 then jump, if reaches 250 then shoot, at 280 resets to 0<br>
<Badge type="tip">ai3</Badge> Movement timer: Increments 1 per tick, NPC changes direction when the timer hits 500

#### 45 (Throw Block)

<Badge type="tip">ai1</Badge> State (0=inactive, 1=active)<br>
<Badge type="tip">ai2</Badge> Timer: The block disappears when it reaches 450, or when the timer is 0 and the block collides with a wall.

#### 46, 212 (Donut Block)

<Badge type="tip">ai1</Badge> State (0=inactive, 1=active)<br>
<Badge type="tip">ai2</Badge> 1 if stood on<br>
<Badge type="tip">ai3</Badge> Timer: Increments when ai2 == 1. 0-5 for red, 0-30 for brown. Toggles ai1 when limit is reached.

#### 47 (SMB3 Lakitu)

<Badge type="tip">ai1</Badge> Travel direction<br>
<Badge type="tip">ai2</Badge> 0 when sinking, 1 when rising<br>
<Badge type="tip">ai3</Badge> State: (0=bobs down, 1=bobs up, 2=telegraph, 3=throw)<br>
<Badge type="tip">ai4</Badge> Preparing to throw timer: Resets if at 0 when it reaches the player, starts from 100 and decreases by 1 each frame.<br>
<Badge type="tip">ai5</Badge> Throw timer: Starts at 0, will not start counting until ai4 is also 0. Increases by 1 every 6 ticks up to 20, then a Spiny Egg is thrown and the timer resets (but does not begin counting yet).

#### 49 (Toothy Pipe)

<Badge type="tip">ai1</Badge> State (0=idle, 1=held)<br>
<Badge type="tip">ai2</Badge> NPC Array Index of Toothy NPC (NOTE: This number being high may be cause for lag)

#### 50 (Toothy)

<Badge type="tip">ai1</Badge> Stays 1, if set to 0 then Toothy despawns

#### 51 (Upside-down piranha plant)

<Badge type="tip">ai1</Badge> Timer (increments to a different thereshold based on ai2)<br>
<Badge type="tip">ai2</Badge> State (1=showing up [ai1 0-42], 2=showing [ai1 0-49], 3=going down [ai1 0-42], 4=hiding [ai1 43-109])

#### 52 (Horizontal piranha plant)

<Badge type="tip">ai1</Badge> Timer (increments to a different thereshold based on ai2)<br>
<Badge type="tip">ai2</Badge> State (1=showing up [ai1 0-32], 2=showing [ai1 0-49], 3=going down [ai1 0-32], 4=hiding [ai1 33-109])

#### 54 (Fighterfly)

<Badge type="tip">ai1</Badge> Timer: From 0 to 29. When reached value 29 then the jump is beeing made.<br>

#### 60, 62, 64, 66 (Switch Platform)

<Badge type="tip">ai1</Badge> SpeedX<br>
<Badge type="tip">ai2</Badge> SpeedY<br>
<Badge type="tip">ai5</Badge> ID of line guide attached to. 0 if none.

#### 74 (Piranhacus Giganticus)

<Badge type="tip">ai1</Badge> Timer (increments to a different thereshold based on ai2)<br>
<Badge type="tip">ai2</Badge> State (1=showing up [ai1 0-42], 2=showing [ai1 0-49], 3=going down [ai1 0-42], 4=hiding [ai1 43-74])

#### 75 (Jumping Toad)

<Badge type="tip">ai1</Badge> Timer: [Tick 0-9 Anticipation], [Tick 0-9 Jumping], When falling down timer stays at value 100

#### 76, 121, 122, 123, 124 (Parakoopa) (Flying NPC AI)

<Badge type="tip">ai1</Badge> Selected AI behaviour (starting at 0, in oder or Editor options)<br>
<Badge type="tip">ai3</Badge> For Hover left/right: Direction flag for up/down movement

#### 84, 181 (SMB3 Bowser Statue, SMW Bowser Statue (Deprecated))

<Badge type="tip">ai1</Badge> Counts up, shoots a fireball at a random value between 200 and 400.

#### 86 (SMB3 Bowser)

<Badge type="tip">ai1</Badge> Resets to 9 when starting to jump high and decrements 1 per tick. Not sure but may start arcing after it hits 0<br>
<Badge type="tip">ai2</Badge> Timer used to determine what attack phase Bowser does; increases randomly by 0 to 1 per tick.<br>
<Badge type="tip">ai3</Badge> Timer used for Bowser's attack phases.<br>
<Badge type="tip">ai4</Badge> State (2=hopping, 3=jumping high+falling, 4=shooting fireballs, 10=turning right after hitting ground, -10=turning left after hitting ground)<br>
<Badge type="tip">ai5</Badge> Targeted player. (When 0, Bowser looks to target a new player. Is 0 after ground pounding.)

#### 91 (Pluckable Grass)

<Badge type="tip">ai1</Badge> The NPC ID of the content in the herb.
<Badge type="tip">ai2</Badge> If ai1 is 288 (magic potion), this stores the target section for that NPC.

#### 95, 98, 99, 100, 148, 149, 150, 228 (Yoshi)

<Badge type="tip">ai1</Badge> 1 when hurt/running<br>
<Badge type="tip">ai2</Badge> Counter related to head movement when hurt

#### 96 (Yoshi Egg)

<Badge type="tip">ai1</Badge> The ID of the NPC contained within the egg

#### 97, 196 (Power Star)

<Badge type="tip">ai1</Badge> 1 if the star was already collected<br>
<Badge type="tip">ai2</Badge> 0 if moving up, 1 if moving down<br>
<Badge type="tip">ai4</Badge> Direction Flag Timer (From 0 to 4; When 4 reset to 0 and toggle the Direction Flag)

## 101-200

#### 104 (SMB3 Wood Platform)

<Badge type="tip">ai1</Badge> SpeedY<br>
<Badge type="tip">ai2</Badge> SpeedX

#### 105 (SMW Sinking Platform)

<Badge type="tip">ai1</Badge> 1 if falling/stood on by the player

#### 126, 127, 128 (LoZ Bit/Bot)

<Badge type="tip">ai1</Badge> AI-State (2 = Moving [ai2 0-119], 1 = Charging [ai2 0-89 or 29], -1 = Jumping [ai2 stays at 0 until reaching the floor]). Note: The AI States are quite random.<br>
<Badge type="tip">ai2</Badge> Timer

#### 129 (Tweeter)

<Badge type="tip">ai1</Badge> Jump Timer: 0 to 3, on every jump this timer increases by 1 until it reaches value 3. Then the next jump is a high jump and the timer resets to 0.

#### 130, 131 (Snifit, Red/Blue)

<Badge type="tip">ai1</Badge> Shot Timer: Counts up, starts shaking at > 120, shoots at 150 and then resets.<br>
<Badge type="tip">ai2</Badge> Shake Direction: While shaking, alternates between 0 and 1 every frame. 0 means shake to left, 1 means shake to right.

#### 132 (Snifit, Grey)

<Badge type="tip">ai1</Badge> Shot Timer: Counts up, and shoots at 160. Usually set to 0 after shot, but if ai3 is 2, it gets set to 140.<br>
<Badge type="tip">ai2</Badge> Jump Timer: Counts up when on ground, jumps at 100.<br>
<Badge type="tip">ai3</Badge> Double Shot Counter: Counts down with each shot. If less than 0, wraps around to 2.

#### 134 (Mouser Bomb)

<Badge type="tip">ai1</Badge> Timer (until explode): 0-349 until explode; When 250 reached then AI-State is 1.<br>
<Badge type="tip">ai2</Badge> AI-State: 0 = Idle, 1 = Short before exploding<br>
<Badge type="tip">ai3</Badge> Bomb animation state: 0-14 repeating when AI-State is 1.

#### 135 (SMB2 Bob-omb)

<Badge type="tip">ai1</Badge> Timer (until explode): 0-549 until explode; When 450 reached then AI-State is 1.<br>
<Badge type="tip">ai2</Badge> AI-State: 0 = Idle, 1 = Short before exploding

#### 137 (SMB3 Kicked Bob-omb)

<Badge type="tip">ai1</Badge> Timer (until explode): 0-349 until explode; When 250 reached then AI-State is 1.<br>
<Badge type="tip">ai2</Badge> AI-State: 0 = Idle, 1 = Short before exploding<br>
<Badge type="tip">ai3</Badge> Bomb animation state: 0-10 repeating when AI-State is 1.

#### 166 (Kicked Galoomba)

<Badge type="tip">ai1</Badge> Wake Up Timer: Counts up, wakes up at 400 (but only if on ground or in the player's hands)

#### 167 (Para-Galoomba)

<Badge type="tip">ai1</Badge> Timer/AI-State: 0-61 Simple Movement; 62 First Jump and lock on to the Jump-Timer; 63 Second Jump; 64 Third Jump; 65 Fifth Jump;<br>
<Badge type="tip">ai2</Badge> Jump Timer: AI-State 62-64: Increment 1 per tick, from 0-15; AI-State 65: Increment 2 per tick; When reched 15, then jump if possible.

#### 168 (Bully)

<Badge type="tip">ai2</Badge> AI-State: 0 = following player, 1 = kicked off by player

#### 179 (Grinder (Deprecated))

<Badge type="tip">ai1</Badge> Speed Y<br>
<Badge type="tip">ai2</Badge> Speed X<br>
<Badge type="tip">ai5</Badge> The ID of the line BGO the Grinder is on

#### 189 (Dry Bones)

<Badge type="tip">ai1</Badge> State: 1 when stunned.<br>
<Badge type="tip">ai2</Badge> Wake Up Timer: Counts up when ai1 is 1, wakes up at 400 (but only if ai3 is 0).<br>
<Badge type="tip">ai3</Badge> Shake Direction: While shaking, alternates between 0 and 1 every frame. 0 means shake to right, 1 means shake to left.

#### 190 (Skull Raft)

<Badge type="tip">ai1</Badge> State: 1 when moving.

#### 194, 195 (Rainbow Shell)

<Badge type="tip">ai5</Badge> Animation Timer 0-15: Used to decide colour of shell.

#### 197 (SMW Goal Tape)

<Badge type="tip">ai1</Badge> Direction: 0 means move down, 1 means move up.<br>
<Badge type="tip">ai2</Badge> Lower ground Y position.

#### 199 (Blargg)

<Badge type="tip">ai1</Badge> State: 0 means waiting, 1 means looking around, 2 means jumping up.<br>
<Badge type="tip">ai2</Badge> Timer: In state 1, counts up to 90 and enters state 2.

#### 200 (SMB Bowser)

<Badge type="tip">ai1</Badge> State: 0 for just walking, 1 for preparing fireball, 2 for after fireball shot. In state 0, there is a 1/100 every frame of going to state 1, and also another 1/100 of jumping if grounded.<br>
<Badge type="tip">ai2</Badge> Movement direction (in state 0): 0 means walking left, 1 means to the right.<br>
<Badge type="tip">ai3</Badge> Fire breathing timer: Counts up, 0 - 39 for before fire, 40 - 70 for after fire. Shoots fire at 40.<br>
<Badge type="tip">ai4</Badge> Hammer timer: counts up and decides to throw a hammer mostly at random. For full behaviour, see the code (https://github.com/smbx/smbx-legacy-source/blob/master/modNPC.bas#L10321).<br>
<Badge type="tip">ai5</Badge> Index of closest player.

## 201-300

#### 201 (Wart)

<Badge type="tip">ai1</Badge> State: 0 for idle, 1 for spitting bubbles, 2 for taking damage, 3 for death.<br>
<Badge type="tip">ai2</Badge> Movement direction (in state 0): 0 means walking left, 1 means to the right.<br>
<Badge type="tip">ai3</Badge> Timer: Determines when switching between states 0 and 1.  0 to 180 for idle, 0 to 130 when spitting bubbles.<br>
<Badge type="tip">ai4</Badge> Death timer: 0 to 120<br>

#### 205 (Zoomer), Spark (206), Spike Top (207)

<Badge type="tip">ai1</Badge> Walking side: 0 - in air (falling down), 1 - top, 2 - left, 3 - bottom, 4 - right<br>
<Badge type="tip">ai2</Badge> Unknown: -1 when on the top and right sides of a block, is 1 on the left and bottom sides<br>
<Badge type="tip">ai3</Badge> Unknown Timer<br>
<Badge type="tip">ai5</Badge> Edge Timer: If an edge is reached, the timer counts from 1 to 6. At 6 the NPC switches the walking side.<br>

#### 209 (Mother Brain)

<Badge type="tip">ai1</Badge> Shaking timer: 0 to 44 (0 = idle, otherwise the lower the value, the more intense the shaking)<br>

#### 210 (Rinka)

<Badge type="tip">ai1</Badge> State: 0 for waiting, 1 for moving<br>
<Badge type="tip">ai2</Badge> Timer: counts up from 0 to 88, begins moving at 88<br>

#### 211 (Rinka Block)

<Badge type="tip">ai1</Badge> Spawn timer: 0 to 200 (increments by random values around 1 and 2). Spawns a new Rinka NPC once 200 is reached and then resets to 0.<br>

#### 231 (Blooper)

<Badge type="tip">ai1</Badge> 1 when starting the level in water, 0 otherwise.<br>
<Badge type="tip">ai2</Badge> Vertical movement counter: increases when moving up, decreases when moving down (-60 when not in water and either falling or not moving.)<br>

#### 245 (Venus Fire Trap)

<Badge type="tip">ai1</Badge> State Timer: equals 42 at activation. In state 1, counts from 0 to its pixel length. In state 2, it counts from 0 to 100, shooting a fireball at 50. In state 3, counts from 0 to its length. On state 4, continues counting from recent value to 150. If player is detected, resets to 140)<br>
<Badge type="tip">ai2</Badge> State: 1 - Emerging, 2 - Exposed and shooting, 3 - Retracting, 4 - Hidden. Equals 4 at activation<br>
<Badge type="tip">ai4</Badge> Unknown, always 1<br>

#### 247 (Pokey)

<Badge type="tip">ai1</Badge> Eqauls -3 when this is a body segment<br>
<Badge type="tip">ai2</Badge> Eqauls 2 when this is the bottom segment<br>

#### 256, 257 (Big Piranha Plant)

<Badge type="tip">ai1</Badge> State Timer: equals 71 at activation. In state 1, counts from 0 to its pixel length. In state 2, equals 0. In state 3, counts from 0 to its height. On state 4, continues counting from recent value to 150. If player is detected, resets to 140)<br>
<Badge type="tip">ai2</Badge> State: 1 - Emerging, 2 - Exposed, 3 - Retracting, 4 - Hidden. Equals 4 at activation<br>

#### 259 (Roto Disc)

<Badge type="tip">ai1</Badge> Current quarter circle: cycles through 0 to 3 over the course of a loop, increments or decrements depending on the direction.<br>
<Badge type="tip">ai2</Badge> Unused/Unknown?<br>
<Badge type="tip">ai3</Badge> Unused/Unknown?<br>
<Badge type="tip">ai4</Badge> Frame timer<br>
<Badge type="tip">ai5</Badge> Switches to 0 for a frame when ai1 changes. Checks for vertical/horizontal lines on the path?<br>

#### 260 (Firebar)

<Badge type="tip">ai1</Badge> Distance from the center of the circle ("Firebar position" property in the editor)<br>
<Badge type="tip">ai2</Badge> Current quarter circle: cycles through 0 to 3 over the course of a loop, increments or decrements depending on the direction.<br>
<Badge type="tip">ai3</Badge> Unused/Unknown?<br>
<Badge type="tip">ai4</Badge> Unused/Unknown?<br>
<Badge type="tip">ai5</Badge> Switches to 0 for a frame when ai1 changes. Checks for vertical/horizontal lines on the path?<br>

#### 261 (Nipper Plant)

<Badge type="tip">ai1</Badge> AI-State: 0 = Jumping, 1 = Moving<br>
<Badge type="tip">ai2</Badge> Timer for standing without moving and hopping.<br>

#### 262 (Mouser)
<Badge type="tip">ai1</Badge> Timer for throwing bombs. Decrement to 0 after throwing a bomb(?).<br>
<Badge type="tip">ai2</Badge> AI-State: 0 = Moving backward, 1 = Moving forward(?)<br>
<Badge type="tip">ai3</Badge> Timer for jumping. Set to 0 when on ground.<br>
<Badge type="tip">ai4</Badge> Timer for preparing to throw bombs. Decrement to 0 before spawning a bomb(?).<br>

#### 263 (Ice Block)

<Badge type="tip">ai1</Badge> Contained NPC ID<br>
<Badge type="tip">ai2</Badge> Displaced frame?<br>
<Badge type="tip">ai3</Badge> Nogravity flag. Set to 0 when grabbed.<br>

#### 265 (Ice Ball)

<Badge type="tip">ai1</Badge> AI State: 1 is bouncing, 5 is flying horizontally<br>
<Badge type="tip">ai5</Badge> Number of bounces. After the 2nd bounce, the ice ball will be destroyed on impact with the ground.<br>

#### 266 (Link's Sword Beam)

<Badge type="tip">ai1</Badge> Despawn Timer: counts from 0 to 40<br>

#### 267 (Larry Koopa)

<Badge type="tip">ai1</Badge> AI State: 0 is walking, 1 is preparing to fire, 2 is shooting<br>
<Badge type="tip">ai2</Badge> Movement direction: left is -1, right is 1<br>
<Badge type="tip">ai3</Badge> Jump timer: counts 0 to a random number between 40 and 60<br>
<Badge type="tip">ai4</Badge> Shooting timer: in AI State 0, counts from 0 to around 130 (can be exceeded if he was jumping when the number passed 130). In AI state 2, equals y position to aim at<br>
<Badge type="tip">ai5</Badge> Unknown, always equals 1<br>

#### 268 (Larry Koopa's Shell)

<Badge type="tip">ai1</Badge> AI State: 0 is staying still, 1 is moving, 3 is jumping out of the shell<br>
<Badge type="tip">ai2</Badge> AI State Timer: in state 0, counts from 0 to 60.  In state 1, counts from 0 to 300.  In state 3, counts from 0 to 20, turning the NPC to ID 267 at 20<br>
<Badge type="tip">ai5</Badge> Unknown, always equals 1<br>

#### 269 (Larry Koopa's Magic Beam)

<Badge type="tip">ai1</Badge> Displayed frame: 0 = Frame 1, 1 = Frame 2, 2 = Frame 3<br>
<Badge type="tip">ai2</Badge> Timer for displayed frame: Counts from 0 to 21. At 16: sets ai1 to 1, at 21: sets ai1 to 2.<br>

#### 270 (Jumping Pirhana Plant)

<Badge type="tip">ai1</Badge> AI-State: 0 = Hidden, 1 = Moving upwards, 2 = Moving downwards<br>
<Badge type="tip">ai2</Badge> Timer for AI-State; in state 0, counts from 60 to -20; in state 1, counts from 0 to 100<br>

#### 271 (Swooper)

<Badge type="tip">ai1</Badge> AI-State: 0 = Hidden, 1 = Moving upwards, 2 = Moving downwards<br>
<Badge type="tip">ai2</Badge> When in AI State 1, the y-position the NPC is aiming at.<br>

#### 272 (Hoopster)

<Badge type="tip">ai1</Badge> Direction: down = 1, up = -1 (Rapidly switches between -1 and 2 when not fixed to something they can climb on)<br>

#### 275 (Volcano Lotus)

<Badge type="tip">ai1</Badge> AI-State: 0 = Idle, 1 = Preparing for shot, 2 = After shot<br>
<Badge type="tip">ai2</Badge> AI State Timer: in state 0, counts from 0 to 170.  In state 1, counts from 0 to 70 and shoots at 70; in state 2, counts from 0 to 50<br>

#### 276 (Volcano Lotus Fireball)

<Badge type="tip">ai1</Badge> Direction: 0 = up, 1 = down<br>
<Badge type="tip">ai2</Badge> X Movement: loops from 0 to 11 (moves left during 0-5, moves right during 6-11)<br>

#### 278 (Propeller Block)

<Badge type="tip">ai1</Badge> When held and the player's Y speed isn't decreasing while jumping, equals 0.  Otherwise equal to 1.<br>

#### 279 (Flame-Thrower Propeller Block)

<Badge type="tip">ai1</Badge> When held and the player's Y speed isn't decreasing while jumping, equals 0.  Otherwise equal to 1.<br>
<Badge type="tip">ai2</Badge> Fireball timer: loops from 0 to 79, shooting a fireball every 20 frames. Rapidly switches between 25 and 100 when spinjumping. CAREFUL! Landing on the ground while this value is above 79 will stop the flamethrower from shooting.<br>
<Badge type="tip">ai3</Badge> Held direction while spinning: -1 is left, 1 is right.<br>
<Badge type="tip">ai4</Badge> Always 0.<br>
<Badge type="tip">ai5</Badge> Unknown, random value.<br>

#### 280 (Ludwig Koopa)

<Badge type="tip">ai1</Badge> AI State: 0 is standing, 1 is preparing to fire, 2 is firing, 3 = jumping into shell<br>
<Badge type="tip">ai2</Badge> Direction: left is -1, right is 1<br>
<Badge type="tip">ai3</Badge> State timer: counts 0 to 40.  At 0, sets ai1 to 0.  When between 1 and 20, sets ai1 to 1.  When above 20, sets ai1 to 2.<br>
<Badge type="tip">ai4</Badge> Unknown, always equals 0<br>
<Badge type="tip">ai5</Badge> Unknown, always equals 1<br>

#### 281 (Ludwig Koopa's Shell)

<Badge type="tip">ai1</Badge> AI State: 0 is staying still, 1 is moving, 3 is jumping out of the shell<br>
<Badge type="tip">ai2</Badge> AI State Timer: in state 0, counts from 0 to 60.  In state 1, counts from 0 to 300, turning the NPC to ID 280 at 300<br>
<Badge type="tip">ai3</Badge> Jump Timer: increments to a random number, then jumps.  Almost always jumps before reaching 50.  Set to 1 when state is 3.<br>
<Badge type="tip">ai5</Badge> Unknown, always equals 1.<br>

#### 283 (Bubble)

<Badge type="tip">ai1</Badge> Contained NPC ID<br>
<Badge type="tip">ai2</Badge> Movement direction: -1 is up, 1 is down<br>
<Badge type="tip">ai3</Badge> Equals 1 when popping.<br>

#### 284 (SMW Lakitu)

<Badge type="tip">ai1</Badge> Thrown NPC ID<br>
<Badge type="tip">ai2</Badge> Equals 1 on activation, set to 0 a while after throwing<br>
<Badge type="tip">ai3</Badge> AI State: 0=Haven't yet passed over player, 2=Getting ready to throw, 3=Like 0 but after having thrown before<br>
<Badge type="tip">ai4</Badge> Throw countdown/cooldown: Counts down from 100 to 0 when preparing to throw.<br>
<Badge type="tip">ai5</Badge> Throw timer: Counts up every tick. If equal to or larger than 150, the lakitu is above the player, and is not inside of a block, then the NPC will be thrown.<br>

#### 286 (SMW Spiny Egg)

<Badge type="tip">ai1</Badge> Flag for colliding with the ground, when 1 transforms NPC into ID 285<br>
<Badge type="tip">ai2</Badge> Unknown, equals 0 when thrown by Lakitu, placed before testing or coming from a bubble, otherwise equals -1.<br>

#### 288 (Magic Potion)

<Badge type="tip">ai2</Badge> Target Section (-1 = no section, otherwise 0 to 20)<br>
<Badge type="tip">ai3</Badge> equals 1 when transforming into the door.<br>

#### 289 (Subspace Door)

<Badge type="tip">ai2</Badge> Target Section (-1 = no section, otherwise 0 to 20)<br>

#### 290 (Rideable Airship Piece)

<Badge type="tip">ai2</Badge> Always equals -1<br>
<Badge type="tip">ai4</Badge> Mounted flag (equals 1 if true)<br>
<Badge type="tip">ai5</Badge> X direction<br>

#### 291 (Princess Peach's Bomb)

<Badge type="tip">ai3</Badge> Frame timer<br>
<Badge type="tip">ai4</Badge> Explosion state<br>

#### 292 (Toad's Boomerang)

<Badge type="tip">ai1</Badge> Unknown, set to 1 on activation<br>
<Badge type="tip">ai5</Badge> Follows player character flag (1 is follows)<br>

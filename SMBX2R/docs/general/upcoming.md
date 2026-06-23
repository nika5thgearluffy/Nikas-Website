# Upcoming Functionality

This is a list of functionality that will be available in the next release (as of writing this, Beta 5 Patch 4.)

Once the update is out, remember to move the corresponding entries to their respective pages.


### Static Functions
{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} Misc.lives()
    {RET} [number](/types/number.md)
   {DESC} Returns the current value of the life counter.
====
   {NAME} Misc.lives(

[number](/types/number.md) lives,

[bool](/types/bool.md) playSound,

)
    {RET} [number](/types/number.md)
   {DESC} Sets the current value of the life counter. If playSound is set to true, it plays either the default 1up sound or the default death sound depending on whether the change results in the player gaining or losing lives.
====
   {NAME} Misc.SetMovingFenceBugFix(

[bool](/types/bool.md) enabled
)
    {RET} [nil](/types/nil.md)
   {DESC} Sets the state of the moving fence fix (enabled by default).
====
   {NAME} Misc.SetMovingVineBugFix(

[bool](/types/bool.md) enabled
)
    {RET} [nil](/types/nil.md)
   {DESC} Sets the state of the moving vine fix (enabled by default).
====
   {NAME} Misc.SetInvisibleFenceBugFix(

[bool](/types/bool.md) enabled
)
    {RET} [nil](/types/nil.md)
   {DESC} Sets the state of the invisible fence fix (enabled by default).
====
   {NAME} Misc.SetReserveItemHeightFix(

[bool](/types/bool.md) enabled
)
    {RET} [nil](/types/nil.md)
   {DESC} Sets the state of the reserve item height fix (enabled by default).
====
   {NAME} Misc.SetNPCRespawnFix(

[bool](/types/bool.md) enabled
)
    {RET} [nil](/types/nil.md)
   {DESC} Sets the state of the frame-perfect despawn bug fix (enabled by default).
{ENDTABLE}

#### Deprecated
{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} Misc.SetFenceBugFix(

[bool](/types/bool.md) enabled
)
    {RET} [nil](/types/nil.md)
   {DESC} Deprecated alias for Misc.SetMovingFenceBugFix() and Misc.SetInvisibleFenceBugFix().
{ENDTABLE}


### Static Fields

No new static fields for any class as of writing this.

{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE}  
  {FIELD}  
     {RO}  
   {DESC}  
{ENDTABLE}


### Instance Methods

[What is a method?](/types/function.md#methods)

No new instance methods for any class as of writing this.

{STARTTABLE}
   {NAME} Method
    {RET} Return Values
   {DESC} Description
====
   {NAME}  
    {RET}  
   {DESC}  
{ENDTABLE}

### Instance Fields
{STARTTABLE}
  {CLASS} Class
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
  {CLASS} [Block](/reference/block.md) or [NPC](/reference/npc.md) or [Player](/reference/player.md) object
   {TYPE} [vector2](/reference/vector.md)
  {FIELD} centre
     {RO} No
   {DESC} The center position of the object.
====
  {CLASS} [Block](/reference/block.md) or [NPC](/reference/npc.md) or [Player](/reference/player.md) object
   {TYPE} [vector2](/reference/vector.md)
  {FIELD} center
     {RO} No
   {DESC} Alias for centre.
====
  {CLASS} [Block](/reference/block.md) or [NPC](/reference/npc.md) or [Player](/reference/player.md) object
   {TYPE} [vector2](/reference/vector.md)
  {FIELD} bottomCentre
     {RO} No
   {DESC} The bottom center position of the object.
====
  {CLASS} [Block](/reference/block.md) or [NPC](/reference/npc.md) or [Player](/reference/player.md) object
   {TYPE} [vector2](/reference/vector.md)
  {FIELD} bottomCenter
     {RO} No
   {DESC} Alias for bottomCentre.
====
  {CLASS} [Event](/reference/events.md)
   {TYPE} [bool](/types/bool.md)
  {FIELD} forceUp
     {RO} No
   {DESC} Whether to hold the player's up key for the duration of the event.
====
  {CLASS} [Event](/reference/events.md)
   {TYPE} [bool](/types/bool.md)
  {FIELD} forceDown
     {RO} No
   {DESC} Whether to hold the player's down key for the duration of the event.
====
  {CLASS} [Event](/reference/events.md)
   {TYPE} [bool](/types/bool.md)
  {FIELD} forceLeft
     {RO} No
   {DESC} Whether to hold the player's left key for the duration of the event.
====
  {CLASS} [Event](/reference/events.md)
   {TYPE} [bool](/types/bool.md)
  {FIELD} forceRight
     {RO} No
   {DESC} Whether to hold the player's right key for the duration of the event.
====
  {CLASS} [Event](/reference/events.md)
   {TYPE} [bool](/types/bool.md)
  {FIELD} forceJump
     {RO} No
   {DESC} Whether to hold the player's jump key for the duration of the event.
====
  {CLASS} [Event](/reference/events.md)
   {TYPE} [bool](/types/bool.md)
  {FIELD} forceAltJump
     {RO} No
   {DESC} Whether to hold the player's alt jump key for the duration of the event.
====
  {CLASS} [Event](/reference/events.md)
   {TYPE} [bool](/types/bool.md)
  {FIELD} forceRun
     {RO} No
   {DESC} Whether to hold the player's run key for the duration of the event.
====
  {CLASS} [Event](/reference/events.md)
   {TYPE} [bool](/types/bool.md)
  {FIELD} forceAltRun
     {RO} No
   {DESC} Whether to hold the player's alt run key for the duration of the event.
====
  {CLASS} [Event](/reference/events.md)
   {TYPE} [bool](/types/bool.md)
  {FIELD} forceDropItem
     {RO} No
   {DESC} Whether to hold the player's drop item key for the duration of the event.
====
  {CLASS} [Event](/reference/events.md)
   {TYPE} [bool](/types/bool.md)
  {FIELD} noSmoke
     {RO} No
   {DESC} If true, layers that are shown/hidden by this event will not spawn a smoke effect.
{ENDTABLE}

#### Deprecated
{STARTTABLE}
  {CLASS} Class
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
  {CLASS} [Event](/reference/events.md)
   {TYPE} [bool](/types/bool.md)
  {FIELD} controlUp
     {RO} No
   {DESC} Deprecated alias for Event.forceUp.
====
  {CLASS} [Event](/reference/events.md)
   {TYPE} [bool](/types/bool.md)
  {FIELD} controlDown
     {RO} No
   {DESC} Deprecated alias for Event.forceDown.
====
  {CLASS} [Event](/reference/events.md)
   {TYPE} [bool](/types/bool.md)
  {FIELD} controlLeft
     {RO} No
   {DESC} Deprecated alias for Event.forceLeft.
====
  {CLASS} [Event](/reference/events.md)
   {TYPE} [bool](/types/bool.md)
  {FIELD} controlRight
     {RO} No
   {DESC} Deprecated alias for Event.forceRight.
====
  {CLASS} [Event](/reference/events.md)
   {TYPE} [bool](/types/bool.md)
  {FIELD} controlJump
     {RO} No
   {DESC} Deprecated alias for Event.forceJump.
====
  {CLASS} [Event](/reference/events.md)
   {TYPE} [bool](/types/bool.md)
  {FIELD} controlAltJump
     {RO} No
   {DESC} Deprecated alias for Event.forceAltJump.
====
  {CLASS} [Event](/reference/events.md)
   {TYPE} [bool](/types/bool.md)
  {FIELD} controlAltRun
     {RO} No
   {DESC} Deprecated alias for Event.forceRun.
====
  {CLASS} [Event](/reference/events.md)
   {TYPE} [bool](/types/bool.md)
  {FIELD} controlDropItem
     {RO} No
   {DESC} Deprecated alias for Event.forceAltRun.

====
  {CLASS} [Event](/reference/events.md)
   {TYPE} [bool](/types/bool.md)
  {FIELD} controlPause
     {RO} No
   {DESC} Deprecated alias for Event.forceDropItem.

====
  {CLASS} [Event](/reference/events.md)
   {TYPE} [bool](/types/bool.md)
  {FIELD} noSmok
     {RO} No
   {DESC} Deprecated alias for Event.noSmoke.

{ENDTABLE}

### Config Fields
| Class (ID or AI) | Name | Type | Description | Default |
| --- | --- | --- | --- | --- |
| [NPC](/reference/npc.md) | falloffvineonstomp | [bool](/types/bool.md) | If true, the player will fall off a fence or vine upon colliding with this NPC from below. | true |
| Monty Moles ([NPC](/reference/npc.md) 309) | minhopspeed | [number](/types/number.md) | The minimum speed applied whenever a monty mole jumps. | 2 |
| Monty Moles ([NPC](/reference/npc.md) 309) | maxhopspeed | [number](/types/number.md) | The maximum speed applied whenever a monty mole jumps. | 4 |
| Boomerang ([NPC](/reference/npc.md) 615) | playsound | [bool](/types/bool.md) | If true, boomerangs play the extended sound 'boomerang.ogg' whenever they're thrown. | false |
| Bony Beetle ([NPC](/reference/npc.md) 296) and Bone-Throwing Dry Bones ([NPC](/reference/npc.md) 415) | playsound | [number](/types/number.md) | ID of the sound effect played when bonked (see the [SFX List](/concepts/sfx-list.md) for which sound corresponds to each ID.) | nil |
| Bony Beetle ([NPC](/reference/npc.md) 296) | cantstompwhenspiked | [bool](/types/bool.md) | If true, the player will not bounce off bony beetles when they have their spikes out. | false |
| Bone-throwing Dry Bones ([NPC](/reference/npc.md) 415) | walktimerlimit | [number](/types/number.md) | The number of ticks spent in the walking state before. | 260 |
| Bone-throwing Dry Bones ([NPC](/reference/npc.md) 415) | boppedtimerlimit | [number](/types/number.md) | The number of ticks spent collapsed after being bopped. | 380 |
| Bone-throwing Dry Bones ([NPC](/reference/npc.md) 415) | throwtimerlimit | [number](/types/number.md) | The number of ticks spent preparing to throw. | 60 |

#### Deprecated/Removed
| Class (ID or AI) | Name | Type | Description | Default |
| --- | --- | --- | --- | --- |
| Boohemoth ([NPC](/reference/npc.md) 444) | luacontrolsspeed | [bool](/types/bool.md) | Mistype of 'luahandlesspeed'. Didn't actually do anything. | true |

### Other/Unsorted
MovingFenceBugFix has been upgraded -- The speed of a BGO is now correctly set to 0 if: (i) its layer is stopped, (ii) time is stopped, or (iii) a player is in a state which stops layer movement
# Events

Events, also often called "Classic Events", or "Vanilla Events", are pieces of logic that can be configured in the "Classic Events" tab in the Editor. Events are not to be confused with [Event Tokens](/types/Event.md) or [Lunalua Events](/reference/lunalua-events.md).

By using Events, you can resize sections, change music, change autoscroll speed and direction and trigger other events.

In addition to the editor functions, editing events in lua also allows you to add actions ([functions](/types/function.md)) and [Routines](/reference/Routine.md) that execute when the event is triggered.

## Static Members

These elements are static to the class itself and can be accessed like so:
```lua
function onStart()
   local levelStartEvent = Events.get("Level - Start")
end
```

### Static functions
{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} Events.get()
    {RET} table of [Events](/reference/events.md)
   {DESC} Returns all existing events.
====
   {NAME} Events.get(

[string](/types/string.md) eventName

)
    {RET} [Event](/reference/events.md)
   {DESC} Returns the event object for the eventName. If no event object with eventName is found then nil is returned.
====
   {NAME} Events(

[number](/types/number.md) index

)
    {RET} [Event](/reference/events.md)
   {DESC} Returns the Event object at position index in the global Events table. <Badge type="tip">Use this constructor with caution! Events.get is generally safer to use.</Badge>
====
   {NAME} Events.trigger(

[string](/types/string.md) eventName

)
    {RET} [nil](/types/nil.md)
   {DESC} Triggers an event. Functionally identical to triggerEvent(eventName).
====
   {NAME} Events.count()
    {RET} [number](/types/number.md)
   {DESC} Returns the number of Events in the level.
====
   {NAME} Events.add(

[string](/types/string.md) eventName,

[string](/types/string.md) triggerEvent,

[number](/types/number.md) triggerDelay,

[bool](/types/bool.md) autorun


)
    {RET} [Event](/reference/events.md)
   {DESC} Creates a new event of the name eventName. You can optionally provide an event to trigger, a delay on which to trigger it, and set it to automatically execute.
{ENDTABLE}

### Static Fields

<!-- (Consider an icon for "read only".) -->
{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE} table of [string](/types/string.md)
  {FIELD} waitingNames
     {RO} No
   {DESC} A table of event names currently waiting to trigger a different event.
====
   {TYPE} table of [number](/types/number.md)
  {FIELD} waitingTimers
     {RO} No
   {DESC} A table of timers that events in the waitingNames list are currently waiting for.
{ENDTABLE}

## Instance Members

Instance members must be accessed through a reference to a specific [Events](/reference/events.md) object.
```lua
function onStart()
    local levelStartEvent = Layer.get("Level - Start")
    -- Move the first section to new coordinates
    levelStartEvent:positionSection(0, -10000, -20000, -8000, -16000)
end
```
<Note type="warning">Attempting to call instance members statically will result in an error!</Note>

### Instance Methods

[What is a method?](/types/function.md#methods)
<!--   {NAME} mem(

[hex](/types/number.md) offset,

[FieldType](/constants/memory-field-types.md) type

)
    {RET} [object](/types/object.md) value
   {DESC} Returns a value of the Layer struct at a specific memory address-offset.
====-->

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} mem(

[hex](/types/number.md) offset,

[FieldType](/constants/memory-field-types.md) type

)
    {RET} [object](/types/object.md) value
   {DESC} Returns a value of the Events struct at a specific memory address-offset.
====
   {NAME} mem(

[hex](/types/number.md) offset,

[FieldType](/constants/memory-field-types.md) type,

[object](/types/object.md) value

)
    {RET} [nil](/types/nil.md)
   {DESC} Sets a value of the Events struct at a specific memory address-offset.
====
   {NAME} addAction(

[Function](/types/function.md) action,

[vararg](/concepts/vararg.md) arguments

)
    {RET} [nil](/types/nil.md)
   {DESC} Adds a function to be triggered when the event is triggered. The function is added to the end of the .actions table of the event. The arguments will be passed to the function when it is called.
====
   {NAME} addRoutine(

[Routine](/reference/routine.md) action,

[vararg](/concepts/vararg.md) arguments

)
    {RET} [nil](/types/nil.md)
   {DESC} Adds a function as a routine to be triggered when the event is triggered. The routine is added to the end of the .actions table of the event. The arguments will be passed to the routine when it is called.
====
   {NAME} positionSection(

[number](/types/number.md) idx,

[number](/types/number.md) left,

[number](/types/number.md) top,

[number](/types/number.md) right,

[number](/types/number.md) bottom

)
    {RET} [nil](/types/nil.md)
   {DESC} Sets the boundaries for the section with index idx to set when the event is triggered.
====
   {NAME} trigger()
    {RET} [nil](/types/nil.md)
   {DESC} Triggers this event.
{ENDTABLE}


### Instance Fields

<!-- (Consider an icon for "read only".) -->
{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE} [string](/types/string.md)
  {FIELD} name
     {RO} No
   {DESC} The name of the event.
====
   {TYPE} [number](/types/number.md)
  {FIELD} idx
     {RO} Yes
   {DESC} The event's index in the internal list of Events.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} isValid
     {RO} No
   {DESC} True if the event is valid.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} noSmok
     {RO} No
   {DESC} If true, layers that are shown/hidden by this event will not spawn a 'smok' effect.
====
   {TYPE} [number](/types/number.md)
  {FIELD} soundID
     {RO} No
   {DESC} ID of sound effect to play. See [SFX List](/concepts/sfx-list.md)
====
   {TYPE} [string](/types/string.md)
  {FIELD} msg
     {RO} No
   {DESC} Text message to show when the event is triggered.
====
   {TYPE} [number](/types/number.md)
  {FIELD} endGameType
     {RO} No
   {DESC} 0 if the event does not end the game, 1 if it ends the game.
====
   {TYPE} [string](/types/string.md)
  {FIELD} moveLayer
     {RO} No
   {DESC} The name of the layer moved by the event.
====
   {TYPE} [Layer](/reference/layer.md)
  {FIELD} moveLayerObj
     {RO} No
   {DESC} The layer object moved by the event.
====
   {TYPE} [number](/types/number.md)
  {FIELD} moveLayerSpeedX
     {RO} No
   {DESC} The layer's horizontal movement speed.
====
   {TYPE} [number](/types/number.md)
  {FIELD} moveLayerSpeedY
     {RO} No
   {DESC} The layer's vertical movement speed.
====
   {TYPE} [table](/types/table.md) of [string](/types/string.md)
  {FIELD} layersToHide
     {RO} Yes
   {DESC} A list of layers to hide. This list cannot be overwritten, but it can be added to or removed from.
====
   {TYPE} [table](/types/table.md) of [string](/types/string.md)
  {FIELD} layersToShow
     {RO} Yes
   {DESC} A list of layers to show. This list cannot be overwritten, but it can be added to or removed from.
====
   {TYPE} [table](/types/table.md) of [string](/types/string.md)
  {FIELD} layersToToggle
     {RO} Yes
   {DESC} A list of layers to toggle. This list cannot be overwritten, but it can be added to or removed from.
====
   {TYPE} [string](/types/string.md)
  {FIELD} triggerEvent
     {RO} No
   {DESC} Name of the event to trigger after the delay.
====
   {TYPE} [number](/types/number.md)
  {FIELD} triggerDelay
     {RO} No
   {DESC} Delay before this event triggers another event.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} autostart
     {RO} No
   {DESC} Whether or not the event runs immediately.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} autorun
     {RO} No
   {DESC} Whether or not the event runs immediately.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} controlUp
     {RO} No
   {DESC} Whether to hold the player's up key for the duration of the event.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} controlDown
     {RO} No
   {DESC} Whether to hold the player's down key for the duration of the event.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} controlLeft
     {RO} No
   {DESC} Whether to hold the player's left key for the duration of the event.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} controlRight
     {RO} No
   {DESC} Whether to hold the player's right key for the duration of the event.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} controlJump
     {RO} No
   {DESC} Whether to hold the player's jump key for the duration of the event.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} controlAltJump
     {RO} No
   {DESC} Whether to hold the player's alt jump key for the duration of the event.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} controlAltRun
     {RO} No
   {DESC} Whether to hold the player's run key for the duration of the event. It seems like this field was misnamed.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} controlDropItem
     {RO} No
   {DESC} Whether to hold the player's alt run key for the duration of the event. It seems like this field was misnamed.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} controlPause
     {RO} No
   {DESC} Whether to hold the player's drop item key for the duration of the event. It seems like this field was misnamed. There is no field corresponding to holding the pause key.
====
   {TYPE} [table](/types/table.md) of [string](/types/string.md)
  {FIELD} sectionMusicPath
     {RO} Yes
   {DESC} Table of the paths to the custom music to set for all sections.
====
   {TYPE} [table](/types/table.md) of [number](/types/number.md)
  {FIELD} sectionMusic
     {RO} Yes
   {DESC} Table of the indices of the music to change to for all sections.
====
   {TYPE} [table](/types/table.md) of [number](/types/number.md)
  {FIELD} sectionBg
     {RO} Yes
   {DESC} Table of the indices of the backgrounds for all sections.
====
   {TYPE} [table](/types/table.md) of [number](/types/number.md)
  {FIELD} position
     {RO} Yes
   {DESC} Table of section boundaries for all sections, with values left, top, right and bottom for each entry.
====
   {TYPE} [table](/types/table.md) of [number](/types/number.md)
  {FIELD} positionLeft
     {RO} Yes
   {DESC} Table of section left boundaries for all sections.
====
   {TYPE} [table](/types/table.md) of [number](/types/number.md)
  {FIELD} positionTop
     {RO} Yes
   {DESC} Table of section top boundaries for all sections.
====
   {TYPE} [table](/types/table.md) of [number](/types/number.md)
  {FIELD} positionRight
     {RO} Yes
   {DESC} Table of section right boundaries for all sections.
====
   {TYPE} [table](/types/table.md) of [number](/types/number.md)
  {FIELD} positionBottom
     {RO} Yes
   {DESC} Table of section bottom boundaries for all sections.
====
   {TYPE} [number](/types/number.md)
  {FIELD} autoscrollSection
     {RO} No
   {DESC} Index of the section set to autoscroll. Due to a bug this doesn't really matter and the index of the event in the events list is what determines the autosrolling section instead.
====
   {TYPE} [Section](/reference/section.md)
  {FIELD} autoscrollSectionObj
     {RO} Yes
   {DESC} Reference to the section set to autoscroll. This will return the wrong section since it is based on autoscrollSection.
====
   {TYPE} [number](/types/number.md)
  {FIELD} autoscrollSpeedX
     {RO} No
   {DESC} Horizontal speed of the autoscrolling section when the event triggers.
====
   {TYPE} [number](/types/number.md)
  {FIELD} autoscrollSpeedY
     {RO} No
   {DESC} Horizontal speed of the autoscrolling section when the event triggers.
====
   {TYPE} [table](/types/table.md) of [function](/types/function.md)
  {FIELD} actions
     {RO} Yes
   {DESC} Table of actions that have been added via addAction or addRoutine.
{ENDTABLE}


### Instance Memory Offsets

Most memory offsets for the events class are mapped to correct fields. This table contains only the offsets that have been incorrectly converted to fields.

These offsets can be manipulated by the instance's mem method.
<Note type="warning">Be careful when manipulating memory offsets directly! Doing so may yield unexpected results.</Note>

{STARTTABLE}
  {FIELD} Field
   {TYPE} Fieldtype
   {DESC} Description
====
  {FIELD} 0x56E
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Whether to hold the run key for the duration of the event.
====
  {FIELD} 0x570
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Whether to hold the alt run key for the duration of the event.
====
  {FIELD} 0x572
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Whether to hold the drop item key for the duration of the event.
====
  {FIELD} 0x574
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Whether to hold the pause key for the duration of the event.
{ENDTABLE}
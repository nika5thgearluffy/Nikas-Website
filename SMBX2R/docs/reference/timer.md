# Timer


The timer library lets you easily control the level timer from code.

## Timer without lua

Basic functionality of this module can be used without lua by using the editor's level settings. From the editor you are able to set the time and what happens when the timer ends. Use the library in code directly if you need more control.

## Quick Start

If you want the simplest implementation, take a look at the code below. This will start a timer with 500 seconds on the clock.

```lua
Timer.activate(500)
```

## Functions

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} activate(

[number](/types/number.md) timeValue,

[bool](/types/bool.md) isTicks

)
    {RET} [nil](/types/nil.md)
   {DESC} Enables the timer and sets it to visible. Unpauses the timer if it was paused. If isTicks is true, the timerValue variable will be interpreted as ticks. If timeValue is not provided, this will unpause the timer without changing the time.
====
   {NAME} isActive()
    {RET} [bool](/types/bool.md) active
   {DESC} Returns whether or not the timer is currently decreasing.
====
   {NAME} isVisible()
    {RET} [bool](/types/bool.md) visible
   {DESC} Returns whether or not the timer is currently visible on-screen.
====
   {NAME} deactivate()
    {RET} [nil](/types/nil.md)
   {DESC} Pauses the timer and stops drawing it to the screen, thus deactivating it.
====
   {NAME} toggle()
    {RET} [nil](/types/nil.md)
   {DESC} If the timer is running, this pauses the timer. Else, it unpauses it. This does not affect whether or not the timer is drawn to the screen.
====
   {NAME} setActive([bool](/types/bool.md) active)
    {RET} [nil](/types/nil.md)
   {DESC} Sets the active state of the timer. This does not affect whether or not the timer is drawn to the screen.
====
   {NAME} get()
    {RET} [number](/types/number.md) timer
   {DESC} Returns the amount of ticks left on the timer.
====
   {NAME} getValue()
    {RET} [number](/types/number.md) timer
   {DESC} Returns the timer's current display value.
====
   {NAME} set(

[number](/types/number.md) timeValue,

[bool](/types/bool.md) isTicks

)
    {RET} [nil](/types/nil.md)
   {DESC} Sets the value of the timer to timeValue in seconds. If isTicks is true, timeValue is interpreted as ticks instead.
====
   {NAME} add(

[number](/types/number.md) timeValue,

[bool](/types/bool.md) isTicks

)
    {RET} [nil](/types/nil.md)
   {DESC} Adds timeValue to the current timer. If isTicks is true, timeValue is interpreted as ticks instead.
====
   {NAME} getSecondLength()
    {RET} [number](/types/number.md) length
   {DESC} Returns the length of a second in ticks.
====
   {NAME} setSecondLength(

[number](/types/number.md) secondLength

)
    {RET} [nil](/types/nil.md)
   {DESC} Sets the length of a second. This manipulates the timer's remaining value to ensure that the displayed number doesn't change.
{ENDTABLE}

## Hurry Up

When the timer reaches a specific value, a "hurry up" sound is played. To replace this sound, create an audio file named "hurry-up" in your level or episode folder. The file extension can be any audio format supported by SDL Mixer X.

The time at which the sound effect is played (default: 100) can be changed by changing timer.hurryTime:

```lua
Timer.hurryTime = 60 -- Warn 60 seconds before the timer runs out
```

## Timer End

By default, the end of the timer causes all active players to die or invokes the "Level - Timer End" event. By overriding the timer.onEnd() function, this behaviour can be replaced:
```lua
function Timer.onEnd()
    Misc.dialog("The timer has ended!")
end
```
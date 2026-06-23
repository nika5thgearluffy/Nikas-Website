# Routine

The Routine class handles [Coroutines](https://en.wikipedia.org/wiki/Coroutine). Coroutines are similar to [threads](https://en.wikipedia.org/wiki/Thread_(computing)), in that they allow you to run multiple pieces of code in parallel with each other. In practice, coroutines do not use true parallel processing, but instead passes control over to coroutines when they are run, and allows control to be tossed back and forth via [yield](https://en.wikipedia.org/wiki/Yield_(multithreading)) and resume operations.

## Static members

These elements are static to the class itself and can be accessed like so:
```lua
local deltaTime = Routine.deltaTime
```

Functions that return a Yield object can only be used from within a coroutine, and toss control back to the main thread when run.

### Static functions

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} Routine.run(

[function](/types/function.md) f,

[vararg](/concepts/vararg.md) of [object](/types/object.md) args
       
)
    {RET} [Routine](/reference/Routine.md) routine, [string](/types/string.md) status, [string](/types/string.md) msg
   {DESC} Creates a new coroutine and runs it. Additional arguments are passed to the function f. The `status` and `msg` return values store error messages and information about the coroutine, which are not necessary for most use cases.
====
   {NAME} Routine.wait(

[number](/types/number.md) seconds,

[bool](/types/bool.md) whilePaused
       
)
    {RET} Yield yield
   {DESC} Exits the current coroutine, resuming it after the specified number of seconds. If `whilePaused` is set to `true`, this timer will continue to count down even while the game is paused. By default, `whilePaused` is false.

====
   {NAME} Routine.waitFrames(

[number](/types/number.md) frames,

[bool](/types/bool.md) whilePaused
       
)
    {RET} Yield yield
   {DESC} Exits the current coroutine, resuming it after the specified number of frames. If `whilePaused` is set to `true`, this timer will continue to count down even while the game is paused. By default, `whilePaused` is false.

====
   {NAME} Routine.skip(
[bool](/types/bool.md) whilePaused
       
)
    {RET} Yield yield
   {DESC} Exits the current coroutine, resuming it on the next frame. If `whilePaused` is set to `true`, the coroutine will resume even if the game is paused. By default, `whilePaused` is false.

====
   {NAME} Routine.waitRealSeconds(

[number](/types/number.md) seconds,

[bool](/types/bool.md) whilePaused
       
)
    {RET} Yield yield
   {DESC} Exits the current coroutine, resuming it after the specified number of seconds, adjusted for frame rate. If `whilePaused` is set to `true`, this timer will continue to count down even while the game is paused. By default, `whilePaused` is false. This should not be used for gameplay, as it can cause things to go out of sync, and should be reserved for purely decorative elements.

====
   {NAME} Routine.waitSeconds(

[number](/types/number.md) seconds,

[bool](/types/bool.md) whilePaused
       
)
    {RET} Yield yield
   {DESC} Exits the current coroutine, resuming it after the specified number of seconds. If `whilePaused` is set to `true`, this timer will continue to count down even while the game is paused. By default, `whilePaused` is false. <Badge type="tip">Use function Routine.wait</Badge>

====
   {NAME} Routine.waitInput(

[keycode](/constants/keycode.md) key,
       
)
    {RET} Yield yield
   {DESC} Exits the current coroutine, resuming it after the specified key is pressed.

====
   {NAME} Routine.waitSignal(

[object](/types/object.md) signal,

[bool](/types/bool.md) isTable
       
)
    {RET} Yield yield
   {DESC} Exits the current coroutine, resuming it after the `Routine.signal` is called. If a table is passed as the `signal`, by default it will be considered a list of signals, all of which must be signalled before the coroutine resumes. If `isTable` is set to `true`, the `signal` argument will always be considered a single object, even if it is a table.

====
   {NAME} Routine.waitEvent(

[string](/types/string.md) name
       
)
    {RET} Yield yield
   {DESC} Exits the current coroutine, resuming it after the specified vanilla SMBX event is triggered.

====
   {NAME} Routine.yield()
    {RET} Yield yield
   {DESC} Exits the current coroutine.
====
   {NAME} Routine.continue(

[Routine](/reference/Routine.md) routine
       
)
    {RET} [string](/types/string.md) status, [string](/types/string.md) msg
   {DESC} Resumes a coroutine that was yielded via `Routine.yield`.
====
   {NAME} Routine.abort(

[Routine](/reference/Routine.md) routine
       
)
    {RET} [nil](/types/nil.md)
   {DESC} Abandons a waiting coroutine, preventing it from resuming.
====
   {NAME} Routine.signal(

[object](/types/object.md) signal
       
)
    {RET} [nil](/types/nil.md)
   {DESC} Signals all coroutines that are waiting for the given `signal` via `Routine.waitSignal`. Routines that are waiting on only this signal will be resumed immediately.
====
   {NAME} Routine.loop(

[number](/types/number.md) frames,

[function](/types/function.md) f,

[bool](/types/bool.md) whilePaused
       
)
    {RET} [nil](/types/nil.md)
   {DESC} Can only be used from within a coroutine. Waits for the specifed number of frames, running the function `f` on each frame. If `whilePaused` is set to `true`, this timer will continue to count down even while the game is paused. By default, `whilePaused` is false.
====
   {NAME} Routine.setTimer(

[number](/types/number.md) seconds,

[function](/types/function.md) f,

[bool](/types/bool.md) or [number](/types/number.md) repeated,

[bool](/types/bool.md) whilePaused
       
)
    {RET} [Routine](/reference/Routine.md) routine
   {DESC} Creates a timer that will run the function `f` after the specified number of seconds. If `repeated` is set to `true`, the timer will repeat indefinitely. If `repeated` is set to a number, the timer will repeat the specified number of times. By default, the timer will not repeat. If `whilePaused` is set to `true`, this timer will continue to count down even while the game is paused. By default, `whilePaused` is false.

====
   {NAME} Routine.setFrameTimer(

[number](/types/number.md) frames,

[function](/types/function.md) f,

[bool](/types/bool.md) or [number](/types/number.md) repeated,

[bool](/types/bool.md) whilePaused
       
)
    {RET} [Routine](/reference/Routine.md) routine
   {DESC} Creates a timer that will run the function `f` after the specified number of frames. If `repeated` is set to `true`, the timer will repeat indefinitely. If `repeated` is set to a number, the timer will repeat the specified number of times. By default, the timer will not repeat. If `whilePaused` is set to `true`, this timer will continue to count down even while the game is paused. By default, `whilePaused` is false.

====
   {NAME} Routine.setRealTimer(

[number](/types/number.md) seconds,

[function](/types/function.md) f,

[bool](/types/bool.md) or [number](/types/number.md) repeated,

[bool](/types/bool.md) whilePaused
       
)
    {RET} [Routine](/reference/Routine.md) routine
   {DESC} Creates a timer that will run the function `f` after the specified number of seconds, adjusted for frame rate. If `repeated` is set to `true`, the timer will repeat indefinitely. If `repeated` is set to a number, the timer will repeat the specified number of times. By default, the timer will not repeat. If `whilePaused` is set to `true`, this timer will continue to count down even while the game is paused. By default, `whilePaused` is false. This should not be used for gameplay, as it can cause things to go out of sync, and should be reserved for purely decorative elements.
====
   {NAME} Routine.registerKeyEvent(

[keycode](/constants/keycode.md) key,

[function](/types/function.md) f,

[bool](/types/bool.md) consume
       
)
    {RET} [Routine](/reference/Routine.md) routine
   {DESC} Creates an event that will run the function `f` when the specified key is pressed. If `consume` is set to true, the event will be destroyed after being run once, otherwise it will run every time the key is pressed. By default, `consume` is false.
====
   {NAME} Routine.registerVanillaEvent(

[string](/types/string.md) name

[function](/types/function.md) f,

[bool](/types/bool.md) consume
       
)
    {RET} [Routine](/reference/Routine.md) routine
   {DESC} Creates an event that will run the function `f` when the specified vanilla SMBX event is triggered. If `consume` is set to true, the event will be destroyed after being run once, otherwise it will run every time the event is triggered. By default, `consume` is false.
====
   {NAME} Routine.registerSMBXEvent(

[string](/types/string.md) name

[function](/types/function.md) f,

[bool](/types/bool.md) consume
       
)
    {RET} [Routine](/reference/Routine.md) routine
   {DESC} Creates an event that will run the function `f` when the specified vanilla SMBX event is triggered. If `consume` is set to true, the event will be destroyed after being run once, otherwise it will run every time the event is triggered. By default, `consume` is false. <Badge type="tip">Use function Routine.registerVanillaEvent</Badge>
====
   {NAME} Routine.pause(

[Routine](/reference/Routine.md) routine
       
)
    {RET} [nil](/types/nil.md)
   {DESC} Pauses the waiting timer for a coroutine that is currently waiting via `Routine.wait`, `Routine.waitFrames`, `Routine.waitRealSeconds`, or `Routine.waitSeconds`. This also applies to coroutines created using `Routine.setTimer`, `Routine.setFrameTimer`, and `Routine.setRealTimer`.
====
   {NAME} Routine.resume(

[Routine](/reference/Routine.md) routine
       
)
    {RET} [nil](/types/nil.md)
   {DESC} Resumes a coroutine timer that was paused using `Routine.pause`.
====
   {NAME} Routine.resumeTimer(

[Routine](/reference/Routine.md) routine
       
)
    {RET} [nil](/types/nil.md)
   {DESC} Resumes a coroutine timer that was paused using `Routine.pause`. <Badge type="tip">Use function Routine.resume</Badge>
====
   {NAME} Routine.getTime(

[Routine](/reference/Routine.md) routine
       
)
    {RET} [number](/types/number.md) time
   {DESC} Gets the number of frames remaining until a coroutine resumes if it was made to wait via `Routine.wait`, `Routine.waitFrames`, or `Routine.waitSeconds`. Gets the number of seconds remaining if it was made to wait via `Routine.waitRealSeconds`.
====
   {NAME} Routine.getTimer(

[Routine](/reference/Routine.md) routine
       
)
    {RET} [number](/types/number.md) time
   {DESC} Gets the number of frames remaining until a coroutine resumes if it was made to wait via `Routine.wait`, `Routine.waitFrames`, or `Routine.waitSeconds`. Gets the number of seconds remaining if it was made to wait via `Routine.waitRealSeconds`. <Badge type="tip">Use function Routine.getTime</Badge>
====
   {NAME} Routine.breakTimer()
    {RET} [nil](/types/nil.md)
   {DESC} Can only be used from within a coroutine. Breaks out of a timer created via `Routine.setTimer`, `Routine.setFrameTimer`, or `Routine.setRealTimer`, or and event created via `Routine.registerKeyEvent` or `Routine.registerVanillaEvent`. This prevents them from repeating even if their initial conditions specify that they should.
====
   {NAME} Routine.getDebugID(

[Routine](/reference/Routine.md) routine
       
)
    {RET} [number](/types/number.md) id
   {DESC} Gets the unique ID of a specific coroutine, for debugging purposes.

{ENDTABLE}


## Instance members

Instance members must be accessed through a reference to a specific [Routine](/reference/Routine.md) object.
```lua
local r = Routine.run(function() Routine.wait(10) end)
Misc.dialog(r.waiting)
r:abort()
```
<Note type="warning">Attempting to call instance members statically will result in an error!</Note>

### Instance Methods

[What is a method?](/types/function.md#methods)

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
   ====
   {NAME} getTime()
    {RET} [number](/types/number.md) time
   {DESC} Gets the number of frames remaining until the coroutine resumes if it was made to wait via `Routine.wait`, `Routine.waitFrames`, or `Routine.waitSeconds`. Gets the number of seconds remaining if it was made to wait via `Routine.waitRealSeconds`.
====
   {NAME} getTimer()
    {RET} [number](/types/number.md) time
   {DESC} Gets the number of frames remaining until the coroutine resumes if it was made to wait via `Routine.wait`, `Routine.waitFrames`, or `Routine.waitSeconds`. Gets the number of seconds remaining if it was made to wait via `Routine.waitRealSeconds`. <Badge type="tip">Use method getTime</Badge>
====
   {NAME} continue()
    {RET} [string](/types/string.md) status, [string](/types/string.md) msg
   {DESC} Resumes the coroutine that was yielded via `Routine.yield`.
====
   {NAME} abort()
   {RET} [nil](/types/nil.md)
   {DESC} Abandons the waiting coroutine, preventing it from resuming.
====
   {NAME} pause()
    {RET} [nil](/types/nil.md)
   {DESC} Pauses the waiting timer for the coroutine that is currently waiting via `Routine.wait`, `Routine.waitFrames`, `Routine.waitRealSeconds`, or `Routine.waitSeconds`. This also applies to coroutines created using `Routine.setTimer`, `Routine.setFrameTimer`, and `Routine.setRealTimer`.
====
   {NAME} resume()
    {RET} [nil](/types/nil.md)
   {DESC} Resumes the coroutine timer that was paused using `pause`.
{ENDTABLE}

### Instance Fields

{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} waiting
     {RO} Yes
   {DESC} Returns `true` if the coroutine is waiting.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} yielded
     {RO} Yes
   {DESC} Returns `true` if the coroutine was yielded using `Routine.yield`.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} paused
     {RO} Yes
   {DESC} Returns `true` if the coroutine was paused using `Routine.pause` or `myRoutine:pause()`.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} isValid
     {RO} Yes
   {DESC} Returns `false` if the coroutine has finished or has been abandoned.
{ENDTABLE}

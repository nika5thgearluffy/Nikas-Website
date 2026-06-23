# Easing

NOTE: This page is a work in progress.  Some information may be missing or inaccurate, and there may be unfinished or placeholder text.


As a module, easing needs to be loaded in order to be accessible in your level or episode. The easing file is in the scripts/ext folder, thus, the path needs to be specified as such:
```lua
local easing = require("ext/easing")
```

Easing is an adaptation of [Robert Penner's Easing Equations](http://code.google.com/p/tweener/) to lua.  It provides a variety of functions you can use to smoothly shift from one value to another, similarly to math.lerp(), except instead of shifting with a constant rate of change they accelerate into the full speed ("ease in") and/or slow to a stop ("ease out"). Combined with functions like [Routine.loop()](/reference/Routine.md), you can use this module to make movements and animations that feel more natural and dynamic.

You can preview the different equations as curves [here](https://easings.net/).  (Note that this website does not feature curves corresponding to easing.lua's outIn functions.)

These functions also serve as a basis for the 'transition.EASING_****' constants in the [Transition](/modules/transition.md) module.

## Functions

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
   {GRPH} Example (hover over to animate)
====
   {NAME} easing.linear(

[number](/types/number.md) elapsedTime,

[number](/types/number.md) startValue,

[number](/types/number.md) change,

[number](/types/number.md) duration

)
    {RET} [number](/types/number.md) output
   {DESC} Linearly shifts from startValue to startValue + change, just like math.lerp().  If elapsedTime is 0, the return value is equal to startValue.  If elapsedTime is equal to duration, the return value is equal to startValue + change.
   {GRPH} {EASE=ease}



====
   {NAME} easing.inQuad(

[number](/types/number.md) elapsedTime,

[number](/types/number.md) startValue,

[number](/types/number.md) change,

[number](/types/number.md) duration

)
    {RET} [number](/types/number.md) output
   {DESC} Shifts from startValue to startValue + change with a quadratic ease into the movement.  If elapsedTime is 0, the return value is equal to startValue.  If elapsedTime is equal to duration, the return value is equal to startValue + change.
   {GRPH} {EASE=ease-in-quad}
====
   {NAME} easing.outQuad(

[number](/types/number.md) elapsedTime,

[number](/types/number.md) startValue,

[number](/types/number.md) change,

[number](/types/number.md) duration

)
    {RET} [number](/types/number.md) output
   {DESC} Shifts from startValue to startValue + change with a quadratic ease out of the movement.  If elapsedTime is 0, the return value is equal to startValue.  If elapsedTime is equal to duration, the return value is equal to startValue + change.
   {GRPH} {EASE=ease-out-quad}
====
   {NAME} easing.inOutQuad(

[number](/types/number.md) elapsedTime,

[number](/types/number.md) startValue,

[number](/types/number.md) change,

[number](/types/number.md) duration

)
    {RET} [number](/types/number.md) output
   {DESC} Shifts from startValue to startValue + change with both a quadratic ease into the movement AND out of it.  If elapsedTime is 0, the return value is equal to startValue.  If elapsedTime is equal to duration, the return value is equal to startValue + change.
   {GRPH} {EASE=ease-in-out-quad}
====
   {NAME} easing.outInQuad(

[number](/types/number.md) elapsedTime,

[number](/types/number.md) startValue,

[number](/types/number.md) change,

[number](/types/number.md) duration

)
    {RET} [number](/types/number.md) output
   {DESC} Shifts from startValue to startValue + change with inverted quadratic eases on both ends of the movement;  this results in movement that starts and stops at the greatest rate of change and slows to a stop halfway through.  If elapsedTime is 0, the return value is equal to startValue.  If elapsedTime is equal to duration, the return value is equal to startValue + change.
   {GRPH} {EASE=ease-out-in-quad}




====
   {NAME} easing.inCubic(

[number](/types/number.md) elapsedTime,

[number](/types/number.md) startValue,

[number](/types/number.md) change,

[number](/types/number.md) duration

)
    {RET} [number](/types/number.md) output
   {DESC} Shifts from startValue to startValue + change with a cubic ease into the movement.  If elapsedTime is 0, the return value is equal to startValue.  If elapsedTime is equal to duration, the return value is equal to startValue + change.
   {GRPH} {EASE=ease-in-cubic}
====
   {NAME} easing.outCubic(

[number](/types/number.md) elapsedTime,

[number](/types/number.md) startValue,

[number](/types/number.md) change,

[number](/types/number.md) duration

)
    {RET} [number](/types/number.md) output
   {DESC} Shifts from startValue to startValue + change with a cubic ease out of the movement.  If elapsedTime is 0, the return value is equal to startValue.  If elapsedTime is equal to duration, the return value is equal to startValue + change.
   {GRPH} {EASE=ease-out-cubic}
====
   {NAME} easing.inOutCubic(

[number](/types/number.md) elapsedTime,

[number](/types/number.md) startValue,

[number](/types/number.md) change,

[number](/types/number.md) duration

)
    {RET} [number](/types/number.md) output
   {DESC} Shifts from startValue to startValue + change with both a cubic ease into the movement AND out of it.  If elapsedTime is 0, the return value is equal to startValue.  If elapsedTime is equal to duration, the return value is equal to startValue + change.
   {GRPH} {EASE=ease-in-out-cubic}
====
   {NAME} easing.outInCubic(

[number](/types/number.md) elapsedTime,

[number](/types/number.md) startValue,

[number](/types/number.md) change,

[number](/types/number.md) duration

)
    {RET} [number](/types/number.md) output
   {DESC} Shifts from startValue to startValue + change with inverted cubic eases on both ends of the movement;  this results in movement that starts and stops at the greatest rate of change and slows to a stop halfway through.  If elapsedTime is 0, the return value is equal to startValue.  If elapsedTime is equal to duration, the return value is equal to startValue + change.
   {GRPH} {EASE=ease-out-in-cubic}





====
   {NAME} easing.inQuart(

[number](/types/number.md) elapsedTime,

[number](/types/number.md) startValue,

[number](/types/number.md) change,

[number](/types/number.md) duration

)
    {RET} [number](/types/number.md) output
   {DESC} Shifts from startValue to startValue + change with a quartic ease into the movement.  If elapsedTime is 0, the return value is equal to startValue.  If elapsedTime is equal to duration, the return value is equal to startValue + change.
   {GRPH} {EASE=ease-in-quart}
====
   {NAME} easing.outQuart(

[number](/types/number.md) elapsedTime,

[number](/types/number.md) startValue,

[number](/types/number.md) change,

[number](/types/number.md) duration

)
    {RET} [number](/types/number.md) output
   {DESC} Shifts from startValue to startValue + change with a quartic ease out of the movement.  If elapsedTime is 0, the return value is equal to startValue.  If elapsedTime is equal to duration, the return value is equal to startValue + change.
   {GRPH} {EASE=ease-out-quart}
====
   {NAME} easing.inOutQuart(

[number](/types/number.md) elapsedTime,

[number](/types/number.md) startValue,

[number](/types/number.md) change,

[number](/types/number.md) duration

)
    {RET} [number](/types/number.md) output
   {DESC} Shifts from startValue to startValue + change with both a quartic ease into the movement AND out of it.  If elapsedTime is 0, the return value is equal to startValue.  If elapsedTime is equal to duration, the return value is equal to startValue + change.
   {GRPH} {EASE=ease-in-out-quart}
====
   {NAME} easing.outInQuart(

[number](/types/number.md) elapsedTime,

[number](/types/number.md) startValue,

[number](/types/number.md) change,

[number](/types/number.md) duration

)
    {RET} [number](/types/number.md) output
   {DESC} Shifts from startValue to startValue + change with inverted quartic eases on both ends of the movement;  this results in movement that starts and stops at the greatest rate of change and slows to a stop halfway through.  If elapsedTime is 0, the return value is equal to startValue.  If elapsedTime is equal to duration, the return value is equal to startValue + change.
   {GRPH} {EASE=ease-out-in-quart}




====
   {NAME} easing.inQuint(

[number](/types/number.md) elapsedTime,

[number](/types/number.md) startValue,

[number](/types/number.md) change,

[number](/types/number.md) duration

)
    {RET} [number](/types/number.md) output
   {DESC} Shifts from startValue to startValue + change with a quintic ease into the movement.  If elapsedTime is 0, the return value is equal to startValue.  If elapsedTime is equal to duration, the return value is equal to startValue + change.
   {GRPH} {EASE=ease-in-quint}
====
   {NAME} easing.outQuint(

[number](/types/number.md) elapsedTime,

[number](/types/number.md) startValue,

[number](/types/number.md) change,

[number](/types/number.md) duration

)
    {RET} [number](/types/number.md) output
   {DESC} Shifts from startValue to startValue + change with a quintic ease out of the movement.  If elapsedTime is 0, the return value is equal to startValue.  If elapsedTime is equal to duration, the return value is equal to startValue + change.
   {GRPH} {EASE=ease-out-quint}
====
   {NAME} easing.inOutQuint(

[number](/types/number.md) elapsedTime,

[number](/types/number.md) startValue,

[number](/types/number.md) change,

[number](/types/number.md) duration

)
    {RET} [number](/types/number.md) output
   {DESC} Shifts from startValue to startValue + change with both a quintic ease into the movement AND out of it.  If elapsedTime is 0, the return value is equal to startValue.  If elapsedTime is equal to duration, the return value is equal to startValue + change.
   {GRPH} {EASE=ease-in-out-quint}
====
   {NAME} easing.outInQuint(

[number](/types/number.md) elapsedTime,

[number](/types/number.md) startValue,

[number](/types/number.md) change,

[number](/types/number.md) duration

)
    {RET} [number](/types/number.md) output
   {DESC} Shifts from startValue to startValue + change with inverted quintic eases on both ends of the movement;  this results in movement that starts and stops at the greatest rate of change and slows to a stop halfway through.  If elapsedTime is 0, the return value is equal to startValue.  If elapsedTime is equal to duration, the return value is equal to startValue + change.
   {GRPH} {EASE=ease-out-in-quint}





====
   {NAME} easing.inSine(

[number](/types/number.md) elapsedTime,

[number](/types/number.md) startValue,

[number](/types/number.md) change,

[number](/types/number.md) duration

)
    {RET} [number](/types/number.md) output
   {DESC} Shifts from startValue to startValue + change with a sine ease into the movement.  If elapsedTime is 0, the return value is equal to startValue.  If elapsedTime is equal to duration, the return value is equal to startValue + change.
   {GRPH} {EASE=ease-in-sine}
====
   {NAME} easing.outSine(

[number](/types/number.md) elapsedTime,

[number](/types/number.md) startValue,

[number](/types/number.md) change,

[number](/types/number.md) duration

)
    {RET} [number](/types/number.md) output
   {DESC} Shifts from startValue to startValue + change with a sine ease out of the movement.  If elapsedTime is 0, the return value is equal to startValue.  If elapsedTime is equal to duration, the return value is equal to startValue + change.
   {GRPH} {EASE=ease-out-sine}
====
   {NAME} easing.inOutSine(

[number](/types/number.md) elapsedTime,

[number](/types/number.md) startValue,

[number](/types/number.md) change,

[number](/types/number.md) duration

)
    {RET} [number](/types/number.md) output
   {DESC} Shifts from startValue to startValue + change with both a sine ease into the movement AND out of it.  If elapsedTime is 0, the return value is equal to startValue.  If elapsedTime is equal to duration, the return value is equal to startValue + change.
   {GRPH} {EASE=ease-in-out-sine}
====
   {NAME} easing.outInSine(

[number](/types/number.md) elapsedTime,

[number](/types/number.md) startValue,

[number](/types/number.md) change,

[number](/types/number.md) duration

)
    {RET} [number](/types/number.md) output
   {DESC} Shifts from startValue to startValue + change with inverted sine eases on both ends of the movement;  this results in movement that starts and stops at the greatest rate of change and slows to a stop halfway through.  If elapsedTime is 0, the return value is equal to startValue.  If elapsedTime is equal to duration, the return value is equal to startValue + change.
   {GRPH} {EASE=ease-out-in-sine}





====
   {NAME} easing.inExpo(

[number](/types/number.md) elapsedTime,

[number](/types/number.md) startValue,

[number](/types/number.md) change,

[number](/types/number.md) duration

)
    {RET} [number](/types/number.md) output
   {DESC} Shifts from startValue to startValue + change with a exponential ease into the movement.  If elapsedTime is 0, the return value is equal to startValue.  If elapsedTime is equal to duration, the return value is equal to startValue + change.
   {GRPH} {EASE=ease-in-expo}
====
   {NAME} easing.outExpo(

[number](/types/number.md) elapsedTime,

[number](/types/number.md) startValue,

[number](/types/number.md) change,

[number](/types/number.md) duration

)
    {RET} [number](/types/number.md) output
   {DESC} Shifts from startValue to startValue + change with a exponential ease out of the movement.  If elapsedTime is 0, the return value is equal to startValue.  If elapsedTime is equal to duration, the return value is equal to startValue + change.
   {GRPH} {EASE=ease-out-expo}
====
   {NAME} easing.inOutExpo(

[number](/types/number.md) elapsedTime,

[number](/types/number.md) startValue,

[number](/types/number.md) change,

[number](/types/number.md) duration

)
    {RET} [number](/types/number.md) output
   {DESC} Shifts from startValue to startValue + change with both a exponential ease into the movement AND out of it.  If elapsedTime is 0, the return value is equal to startValue.  If elapsedTime is equal to duration, the return value is equal to startValue + change.
   {GRPH} {EASE=ease-in-out-expo}
====
   {NAME} easing.outInExpo(

[number](/types/number.md) elapsedTime,

[number](/types/number.md) startValue,

[number](/types/number.md) change,

[number](/types/number.md) duration

)
    {RET} [number](/types/number.md) output
   {DESC} Shifts from startValue to startValue + change with inverted exponential eases on both ends of the movement;  this results in movement that starts and stops at the greatest rate of change and slows to a stop halfway through.  If elapsedTime is 0, the return value is equal to startValue.  If elapsedTime is equal to duration, the return value is equal to startValue + change.
   {GRPH} {EASE=ease-out-in-expo}





====
   {NAME} easing.inCirc(

[number](/types/number.md) elapsedTime,

[number](/types/number.md) startValue,

[number](/types/number.md) change,

[number](/types/number.md) duration

)
    {RET} [number](/types/number.md) output
   {DESC} Shifts from startValue to startValue + change with a circular ease into the movement.  If elapsedTime is 0, the return value is equal to startValue.  If elapsedTime is equal to duration, the return value is equal to startValue + change.
   {GRPH} {EASE=ease-in-circ}
====
   {NAME} easing.outCirc(

[number](/types/number.md) elapsedTime,

[number](/types/number.md) startValue,

[number](/types/number.md) change,

[number](/types/number.md) duration

)
    {RET} [number](/types/number.md) output
   {DESC} Shifts from startValue to startValue + change with a circular ease out of the movement.  If elapsedTime is 0, the return value is equal to startValue.  If elapsedTime is equal to duration, the return value is equal to startValue + change.
   {GRPH} {EASE=ease-out-circ}
====
   {NAME} easing.inOutCirc(

[number](/types/number.md) elapsedTime,

[number](/types/number.md) startValue,

[number](/types/number.md) change,

[number](/types/number.md) duration

)
    {RET} [number](/types/number.md) output
   {DESC} Shifts from startValue to startValue + change with both a circular ease into the movement AND out of it.  If elapsedTime is 0, the return value is equal to startValue.  If elapsedTime is equal to duration, the return value is equal to startValue + change.
   {GRPH} {EASE=ease-in-out-circ}
====
   {NAME} easing.outInCirc(

[number](/types/number.md) elapsedTime,

[number](/types/number.md) startValue,

[number](/types/number.md) change,

[number](/types/number.md) duration

)
    {RET} [number](/types/number.md) output
   {DESC} Shifts from startValue to startValue + change with inverted circular eases on both ends of the movement;  this results in movement that starts and stops at the greatest rate of change and slows to a stop halfway through.  If elapsedTime is 0, the return value is equal to startValue.  If elapsedTime is equal to duration, the return value is equal to startValue + change.
   {GRPH} {EASE=ease-out-in-circ}





====
   {NAME} easing.inElastic(

[number](/types/number.md) elapsedTime,

[number](/types/number.md) startValue,

[number](/types/number.md) change,

[number](/types/number.md) duration,

[number](/types/number.md) amplitude,

[number](/types/number.md) period

)
    {RET} [number](/types/number.md) output
   {DESC} Shifts from startValue to startValue + change with a wobbly ease into the movement.  If elapsedTime is 0, the return value is equal to startValue.  If elapsedTime is equal to duration, the return value is equal to startValue + change.  Optionally, you may specify the intensity (amplitude) and frequency (period) of the wobbles.
   {GRPH} {EASE=ease-in-elastic}
====
   {NAME} easing.outElastic(

[number](/types/number.md) elapsedTime,

[number](/types/number.md) startValue,

[number](/types/number.md) change,

[number](/types/number.md) duration

[number](/types/number.md) amplitude,

[number](/types/number.md) period

)
    {RET} [number](/types/number.md) output
   {DESC} Shifts from startValue to startValue + change with a wobbly ease out of the movement.  If elapsedTime is 0, the return value is equal to startValue.  If elapsedTime is equal to duration, the return value is equal to startValue + change.  Optionally, you may specify the intensity (amplitude) and frequency (period) of the wobbles.
   {GRPH} {EASE=ease-out-elastic}
====
   {NAME} easing.inOutElastic(

[number](/types/number.md) elapsedTime,

[number](/types/number.md) startValue,

[number](/types/number.md) change,

[number](/types/number.md) duration

[number](/types/number.md) amplitude,

[number](/types/number.md) period

)
    {RET} [number](/types/number.md) output
   {DESC} Shifts from startValue to startValue + change with both a wobbly ease into the movement AND out of it.  If elapsedTime is 0, the return value is equal to startValue.  If elapsedTime is equal to duration, the return value is equal to startValue + change.  Optionally, you may specify the intensity (amplitude) and frequency (period) of the wobbles.
   {GRPH} {EASE=ease-in-out-elastic}
====
   {NAME} easing.outInElastic(

[number](/types/number.md) elapsedTime,

[number](/types/number.md) startValue,

[number](/types/number.md) change,

[number](/types/number.md) duration

[number](/types/number.md) amplitude,

[number](/types/number.md) period

)
    {RET} [number](/types/number.md) output
   {DESC} Shifts from startValue to startValue + change with inverted wobbly eases on both ends of the movement.  If elapsedTime is equal to duration, the return value is equal to startValue + change.  Optionally, you may specify the intensity (amplitude) and frequency (period) of the wobbles.
   {GRPH} {EASE=ease-out-in-elastic}





====
   {NAME} easing.inBack(

[number](/types/number.md) elapsedTime,

[number](/types/number.md) startValue,

[number](/types/number.md) change,

[number](/types/number.md) duration,

[number](/types/number.md) strength

)
    {RET} [number](/types/number.md) output
   {DESC} Shifts from startValue to startValue + change that "leans" back in anticipation at the start of the movement.  If elapsedTime is 0, the return value is equal to startValue.  If elapsedTime is equal to duration, the return value is equal to startValue + change.  Optionally, you may specify the strength (?) of the anticipation (defaults to 1.70158).
   {GRPH} {EASE=ease-in-back}
====
   {NAME} easing.outBack(

[number](/types/number.md) elapsedTime,

[number](/types/number.md) startValue,

[number](/types/number.md) change,

[number](/types/number.md) duration,

[number](/types/number.md) strength

)
    {RET} [number](/types/number.md) output
   {DESC} Shifts from startValue to startValue + change with some overshoot at the end of the movement.  If elapsedTime is 0, the return value is equal to startValue.  If elapsedTime is equal to duration, the return value is equal to startValue + change.  Optionally, you may specify the strength (?) of the overshoot (defaults to 1.70158).
   {GRPH} {EASE=ease-out-back}
====
   {NAME} easing.inOutBack(

[number](/types/number.md) elapsedTime,

[number](/types/number.md) startValue,

[number](/types/number.md) change,

[number](/types/number.md) duration,

[number](/types/number.md) strength

)
    {RET} [number](/types/number.md) output
   {DESC} Shifts from startValue to startValue + change that both anticipates into the movement AND overshoots at the end of it.  If elapsedTime is 0, the return value is equal to startValue.  If elapsedTime is equal to duration, the return value is equal to startValue + change.  Optionally, you may specify the strength (?) of the eases (defaults to 1.70158).
   {GRPH} {EASE=ease-in-out-back}
====
   {NAME} easing.outInBack(

[number](/types/number.md) elapsedTime,

[number](/types/number.md) startValue,

[number](/types/number.md) change,

[number](/types/number.md) duration,

[number](/types/number.md) strength

)
    {RET} [number](/types/number.md) output
   {DESC} Shifts from startValue to startValue + change with inverted back eases on both ends of the movement.  If elapsedTime is equal to duration, the return value is equal to startValue + change.  Optionally, you may specify the strength (?) of the eases (defaults to 1.70158).
   {GRPH} {EASE=ease-out-in-back}





====
   {NAME} easing.inBounce(

[number](/types/number.md) elapsedTime,

[number](/types/number.md) startValue,

[number](/types/number.md) change,

[number](/types/number.md) duration

)
    {RET} [number](/types/number.md) output
   {DESC} Shifts from startValue to startValue + change with increasingly large bounces away from startValue.  If elapsedTime is 0, the return value is equal to startValue.  If elapsedTime is equal to duration, the return value is equal to startValue + change.
   {GRPH} {EASE=ease-in-bounce}
====
   {NAME} easing.outBounce(

[number](/types/number.md) elapsedTime,

[number](/types/number.md) startValue,

[number](/types/number.md) change,

[number](/types/number.md) duration

)
    {RET} [number](/types/number.md) output
   {DESC} Shifts from startValue to startValue + change with decreasingly small bounces away from startValue + change.  If elapsedTime is 0, the return value is equal to startValue.  If elapsedTime is equal to duration, the return value is equal to startValue + change.
   {GRPH} {EASE=ease-out-bounce}
====
   {NAME} easing.inOutBounce(

[number](/types/number.md) elapsedTime,

[number](/types/number.md) startValue,

[number](/types/number.md) change,

[number](/types/number.md) duration

)
    {RET} [number](/types/number.md) output
   {DESC} Shifts from startValue to startValue + change with bounces on both ends of the movement.  If elapsedTime is 0, the return value is equal to startValue.  If elapsedTime is equal to duration, the return value is equal to startValue + change.
   {GRPH} {EASE=ease-in-out-bounce}
====
   {NAME} easing.outInBounce(

[number](/types/number.md) elapsedTime,

[number](/types/number.md) startValue,

[number](/types/number.md) change,

[number](/types/number.md) duration

)
    {RET} [number](/types/number.md) output
   {DESC} Shifts from startValue to startValue + change with inverted bouncing eases on both ends of the movement.  If elapsedTime is equal to duration, the return value is equal to startValue + change.
   {GRPH} {EASE=ease-out-in-bounce}
{ENDTABLE}
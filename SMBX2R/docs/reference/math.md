# Math

Math is a lua-internal class. Lunalua adds a few helper functions.

[https://www.tutorialspoint.com/lua/lua_math_library.htm](https://www.tutorialspoint.com/lua/lua_math_library.htm)

Math functions can also be used by non-number types that implement arithmetic operators. For example, [Colors](/reference/Color.md).

### Static functions
{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} math.lerp(

[number](/types/number.md) a,

[number](/types/number.md) b,

[number](/types/number.md) time

)
    {RET} [number](/types/number.md) interpolated
   {DESC} Interpolates from a to b by time, where a time of 0 is equal to a and a time of 1 is equal to b.
====
   {NAME} math.anglelerp(

[number](/types/number.md) a,

[number](/types/number.md) b,

[number](/types/number.md) time

)
    {RET} [number](/types/number.md) interpolated
   {DESC} Interpolates from a to b by time, where a time of 0 is equal to a and a time of 1 is equal to b. Wraps around at 0 and 360, so it can be used for interpolating angles.
====
   {NAME} math.invlerp(

[number](/types/number.md) a,

[number](/types/number.md) b,

[number](/types/number.md) interpolated

)
    {RET} [number](/types/number.md) fraction
   {DESC} Performs an inverse lerp, returning the fraction that would be used to obtain the third argument if used in a regular lerp.
====
   {NAME} math.fract(

[number](/types/number.md) num

)
    {RET} [number](/types/number.md) fraction
   {DESC} Returns the part of the input after the decimal point.
====
   {NAME} math.wrap(

[number](/types/number.md) input,

[number](/types/number.md) max

)
    {RET} [number](/types/number.md) wrappedNumber
   {DESC} Wraps an input to be between 0 and maximum, looping back to 0 if it reaches the maximum.
====
   {NAME} math.wrap(

[number](/types/number.md) input,

[number](/types/number.md) min,

[number](/types/number.md) max

)
    {RET} [number](/types/number.md) wrappedNumber
   {DESC} Wraps an input to be between the minimum and the maximum, looping back to the minimum if it reaches the maximum.
====
   {NAME} math.pingpong(

[number](/types/number.md) input,

[number](/types/number.md) max

)
    {RET} [number](/types/number.md) pingPongedNumber
   {DESC} Makes the input pingpong between 0 and maximum, reflecting off 0 and the maximum to stay between the two.
====
   {NAME} math.pingpong(

[number](/types/number.md) input,

[number](/types/number.md) min,

[number](/types/number.md) max

)
    {RET} [number](/types/number.md) pingPongedNumber
   {DESC} Makes the input pingpong between the minimum and maximum, reflecting off the minimum and the maximum to stay between the two.
====
   {NAME} math.clamp(

[number](/types/number.md) value,

[number](/types/number.md) min,

[number](/types/number.md) max

)
    {RET} [number](/types/number.md) clampedValue
   {DESC} Clamps the value to the range between min and max.
====
   {NAME} math.sign(

[number](/types/number.md) a

)
    {RET} [number](/types/number.md) sign
   {DESC} Returns the signum of the input.
{ENDTABLE}
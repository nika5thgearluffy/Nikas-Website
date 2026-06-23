# RNG

The RNG namespace provides functions for generating randomness. Unlike lua's standard randomness, RNG defaults to a random, unpredictable seed.

## Static Members

These elements are static to the class itself and can be accessed like so:
```lua
function onStart()
   local randomValue = RNG.random()
   Misc.dialog(randomValue)
end
```

### Static functions
{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} RNG.new(

[number](/types/number.md) seed

)
    {RET} [RNG](/reference/rng.md) rng
   {DESC} Creates a new instanced RNG object with a specific seed and returns it.
====
   {NAME} RNG.random()
    {RET} [number](/types/number.md) randomValue
   {DESC} Generates a random decimal number between 0 and 1 (inclusive).
====
   {NAME} RNG.random(

[number](/types/number.md) limit

)
    {RET} [number](/types/number.md) randomValue
   {DESC} Generates a random decimal number between 0 and the specified limit (inclusive).
====
   {NAME} RNG.random(

[number](/types/number.md) lowerLimit,

[number](/types/number.md) upperLimit

)
    {RET} [number](/types/number.md) randomValue
   {DESC} Generates a random decimal number between the two limits (inclusive).
====
   {NAME} RNG.randomInt()
    {RET} [number](/types/number.md) randomValue
   {DESC} Generates a random integer number between 0 and 1 (inclusive).
====
   {NAME} RNG.randomInt(

[number](/types/number.md) limit

)
    {RET} [number](/types/number.md) randomValue
   {DESC} Generates a random integer number between 0 and the specified limit (inclusive).
====
   {NAME} RNG.randomInt(

[number](/types/number.md) lowerLimit,

[number](/types/number.md) upperLimit

)
    {RET} [number](/types/number.md) randomValue
   {DESC} Generates a random integer number between the two limits (inclusive).
====
   {NAME} RNG.randomEntry(

[table](/types/table.md) table

)
    {RET} [object](/reference/object.md) randomEntry
   {DESC} Picks a random element in the given table.
====
   {NAME} RNG.irandomEntry(

[table](/types/table.md) table

)
    {RET} [object](/reference/object.md) randomEntry
   {DESC} Picks a random element in the given table, assuming the table is an array with no named fields and no gaps.
====
   {NAME} RNG.randomChar()
    {RET} [string](/types/string.md) char
   {DESC} Generates a random letter, A-Z, either upper case or lower case.
====
   {NAME} RNG.randomChar(

[bool](/types/bool.md) uppercase

)
    {RET} [string](/types/string.md) char
   {DESC} Generates a random letter, A-Z, with case depending on the passed argument.
====
   {NAME} RNG.randomChar(

[string](/types/string.md) limit

)
    {RET} [string](/types/string.md) char
   {DESC} Generates a random letter between A and the specified letter. The range is based on ASCII codes.
====
   {NAME} RNG.randomChar(

[string](/types/string.md) lowerLimit,

[string](/types/string.md) upperLimit

)
    {RET} [string](/types/string.md) char
   {DESC} Generates a random letter between the two specified letters. The range is based on ASCII codes.
====
   {NAME} RNG.randomSign()
    {RET} [number](/types/number.md) number
   {DESC} Returns either -1 or 1.
====
   {NAME} RNG.perlin(

[named](/types/table.md) args

)
    {RET} [Perlin](/reference/rng.md#perlin) perlin
   {DESC} Generates a random perlin noise generator and returns it. The following args are available:
   
<details><summary>Available args</summary>

| Argument | Default | Description |
| --- | --- | --- |
| [number](/types/number.md) amp/amplitude | 1 | The amplitude of the noise |
| [number](/types/number.md) wl/wavelength | 100 | The wavelength of the generated noise |
| [number](/types/number.md) oct/octave | 10 | The number of generated octaves (higher is more expensive but gives more detailed noise) |
| [number](/types/number.md) seed | - | The random seed for this set of noise. |
| [number](/types/number.md) per/persistence | 0.5 | Determines how quickly the amplitudes fall for each successive octave. |
| [number](/types/number.md) mod/modulation | 0.5 | Determines how quickly the frequency falls for each successive octave. |

</details>

{ENDTABLE}

### Static Fields

| Field | Type | Value |
| --- | --- | --- |
| seed | [number](/types/number.md) | The seed of global RNG. |
| Perlin | [Perlin](/reference/rng.md#perlin) | Returns a random perlin noise generator a random seed and default values. |

## Instance Members

Instance members must be accessed through a reference to a specific [RNG](/reference/rng.md) object, obtained through RNG.new
```lua
local r = RNG.new(1)
Misc.dialog(r:random())
```
<Note type="warning">Attempting to call instance members statically will result in an error!</Note>

### Instance Methods

[What is a method?](/types/function.md#methods)

<!-- (The "true" in some of these is not ideal. Consider some way to denote optional arguments and an easy way to see how a function changed depending on which arguments have what values.) -->
<!-- (Needs a control for named args.) -->

{STARTTABLE}
   {NAME} Method
    {RET} Return Values
   {DESC} Description
====
   {NAME} random()
    {RET} [number](/types/number.md) randomValue
   {DESC} Generates a random decimal number between 0 and 1 (inclusive).
====
   {NAME} random(

[number](/types/number.md) limit

)
    {RET} [number](/types/number.md) randomValue
   {DESC} Generates a random decimal number between 0 and the specified limit (inclusive).
====
   {NAME} random(

[number](/types/number.md) lowerLimit,

[number](/types/number.md) upperLimit

)
    {RET} [number](/types/number.md) randomValue
   {DESC} Generates a random decimal number between the two limits (inclusive).
====
   {NAME} randomInt()
    {RET} [number](/types/number.md) randomValue
   {DESC} Generates a random integer number between 0 and 1 (inclusive).
====
   {NAME} randomInt(

[number](/types/number.md) limit

)
    {RET} [number](/types/number.md) randomValue
   {DESC} Generates a random integer number between 0 and the specified limit (inclusive).
====
   {NAME} randomInt(

[number](/types/number.md) lowerLimit,

[number](/types/number.md) upperLimit

)
    {RET} [number](/types/number.md) randomValue
   {DESC} Generates a random integer number between the two limits (inclusive).
====
   {NAME} randomEntry(

[table](/types/table.md) table

)
    {RET} [object](/reference/object.md) randomEntry
   {DESC} Picks a random element in the given table.
====
   {NAME} irandomEntry(

[table](/types/table.md) table

)
    {RET} [object](/reference/object.md) randomEntry
   {DESC} Picks a random element in the given table, assuming the table is an array with no named fields and no gaps.
====
   {NAME} randomChar()
    {RET} [string](/types/string.md) char
   {DESC} Generates a random letter, A-Z, either upper case or lower case.
====
   {NAME} randomChar(

[bool](/types/bool.md) uppercase

)
    {RET} [string](/types/string.md) char
   {DESC} Generates a random letter, A-Z, with case depending on the passed argument.
====
   {NAME} randomChar(

[string](/types/string.md) limit

)
    {RET} [string](/types/string.md) char
   {DESC} Generates a random letter between A and the specified letter. The range is based on ASCII codes.
====
   {NAME} randomChar(

[string](/types/string.md) lowerLimit,

[string](/types/string.md) upperLimit

)
    {RET} [string](/types/string.md) char
   {DESC} Generates a random letter between the two specified letters. The range is based on ASCII codes.
{ENDTABLE}

## Perlin

Generated perlin noise is useful for dynamic generation of textures, object placement and other kinds of patterns.

[More info about perlin noise](http://devmag.org.za/2009/04/25/perlin-noise/)

### Instance Methods

[What is a method?](/types/function.md#methods)

<!-- (The "true" in some of these is not ideal. Consider some way to denote optional arguments and an easy way to see how a function changed depending on which arguments have what values.) -->
<!-- (Needs a control for named args.) -->

{STARTTABLE}
   {NAME} Method
    {RET} Return Values
   {DESC} Description
====
   {NAME} get(

[number](/types/number.md) x

)
    {RET} [number](/types/number.md) value
   {DESC} Returns the value of the generated 1D perlin noise at the given coordinate.
====
   {NAME} get2d(

[number](/types/number.md) x,

[number](/types/number.md) y

)
    {RET} [number](/types/number.md) value
   {DESC} Returns the value of the generated 2D perlin noise at the given coordinates.
{ENDTABLE}

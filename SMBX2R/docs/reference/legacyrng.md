# LegacyRNG

The LegacyRNG namespace provides functions for manipulating the SMBX 1.3 random number generator.

## Static Members

These elements are static to the class itself and can be accessed like so:
```lua
function onStart()
   local lastValue = LegacyRNG.getLastGeneratedNumber()
   Misc.dialog(lastValue)
end
```

### Static Functions
{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} LegacyRNG.generateNumber()
    {RET} [number](/types/number.md) randomValue
   {DESC} Generates a random decimal number between 0 (inclusive) and 1 (exclusive) with the SMBX 1.3 RNG.
====
   {NAME} LegacyRNG.getLastGeneratedNumber()
    {RET} [number](/types/number.md) lastValue
   {DESC} Returns the last number generated with the SMBX 1.3 RNG.
{ENDTABLE}

### Static Fields

| Field | Type | Value |
| --- | --- | --- |
| seed | [number](/types/number.md) | The seed of the SMBX 1.3 RNG represented as a 24bit integer. |

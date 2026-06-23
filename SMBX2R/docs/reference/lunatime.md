# lunatime

The lunatime class handles timing-related functionality, such as getting the current tick or converting between ticks and seconds.

## Static members

These elements are static to the class itself and can be accessed like so:
```lua
local startTicks = lunatime.tick()
```

### Static functions

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} lunatime.tick()
    {RET} [number](/types/number.md) ticks
   {DESC} Gets the current game time in ticks since the level or world map was loaded.
====
   {NAME} lunatime.time()
    {RET} [number](/types/number.md) seconds
   {DESC} Gets the current game time in seconds since the level or world map was loaded.
====
   {NAME} lunatime.drawtick()
    {RET} [number](/types/number.md) ticks
   {DESC} Gets the current draw time in ticks since the level or world map was loaded.  This number counts up while the game is paused.
====
   {NAME} lunatime.drawtime()
    {RET} [number](/types/number.md) seconds
   {DESC} Gets the current draw time in seconds since the level or world map was loaded.  This number counts while the game is paused.
====
   {NAME} lunatime.toTicks(

[number](/types/number.md) seconds

   )
    {RET} [number](/types/number.md) ticks
   {DESC} Converts the provided number of seconds to ticks.
====
   {NAME} lunatime.toSeconds(

[number](/types/number.md) ticks

   )
    {RET} [number](/types/number.md) seconds
   {DESC} Converts the provided number of ticks to seconds.
{ENDTABLE}
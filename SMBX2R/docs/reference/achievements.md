# Achievements

This page is for accessing achievements through lua. For information on how to create achievements, click [here](/features/achievements.md).

The achievements class exposes fields and functions for accessing and manipulating per-episode achievement information.

## Static Members

These members are static to the class itself and can be accessed like so:

```lua
local allAchievements = Achievements.get()
```

### Static functions
{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} Achievements.get()
    {RET} [table](/types/table.md) of [Achievement](/reference/achievements.md) achievements
   {DESC} Returns a copy of the episode's achievement table.
====
   {NAME} Achievements.get(

[string](/types/string.md) name

)
    {RET} [Achievement](/reference/achievements.md) achievement
   {DESC} Returns the achievement of the given name.
====
   {NAME} Achievements.get(

[number](/types/number.md) index

)
    {RET} [Achievement](/reference/achievements.md) achievement
   {DESC} Returns the achievement at the given index. Alternatively, the Achievements table can be indexed to get the same result, meaning that Achievements[1] is equivalent to Achievements.get(1). This only works for numeric indices.
====
   {NAME} Achievements.drawPopup(

[Achievement](/reference/achievements.md) achievement,

[number](/types/number.md) t

)
    {RET} [bool](/types/bool.md) hasFinished
   {DESC} Executes the current draw function for the given achievement. The parameter t determines the time offset of the achievement drawing routine. The function returns true once the drawing process has concluded. <b>This function can be overridden with a custom draw function by setting the value of Achievements.drawPopup.</b>
====
   {NAME} Achievements.drawDefaultPopup(

[Achievement](/reference/achievements.md) achievement,

[number](/types/number.md) t,

[number](/types/number.md) x,

[number](/types/number.md) y,

[number](/types/number.md) align,

[number](/types/number.md) z

)
    {RET} [bool](/types/bool.md) hasFinished
   {DESC} Executes the default draw function for the given achievement. The parameter t determines the time offset of the achievement drawing routine. The function returns true once the drawing process has concluded. Additionally, coordinates, alignment and render priority (z) can be provided as arguments. Alignment is a value of 0, 1 or 2 corresponding to left, right and center respectively.
{ENDTABLE}

## Instance Members

These members are part of individual [Achievement](/reference/achievements.md) objects.

```lua
local ach = Achievements(1)
Misc.dialog(ach.name)
```
<Note type="warning">Attempting to call instance members statically will result in an error!</Note>

### Instance Methods

[What is a method?](/types/function.md#methods)

{STARTTABLE}
   {NAME} Method
    {RET} Return Values
   {DESC} Description
====
   {NAME} getCondition(

[number](/types/number.md) index

)
    {RET} [Achievement Condition](/reference/achievements.md#conditions) condition
   {DESC} Returns the condition of the given index.
====
   {NAME} setCondition(

[number](/types/number.md) index,

[number](/types/number.md) or [bool](/types/bool.md) value,

[bool](/types/bool.md) delayPopup

)
    {RET} [nil](/types/nil.md)
   {DESC} Sets the value of the given condition. The value depends on the achievement's condition type. Event and boolean conditions use boolean values. The achievement popup can optionally be delayed.
====
   {NAME} resetCondition(

[number](/types/number.md) index

)
    {RET} [nil](/types/nil.md)
   {DESC} Resets the value of the condition.
====
   {NAME} reset()
    {RET} [nil](/types/nil.md)
   {DESC} Resets all conditions of the achievement.
====
   {NAME} progressCondition(

[number](/types/number.md) index,

[bool](/types/bool.md) delayPopup

)
    {RET} [nil](/types/nil.md)
   {DESC} Increments the value of the given condition. For numeric type achievements, the value is incremented by 1. For other types, the value is set to true. The achievement popup can optionally be delayed.
====
   {NAME} drawIcon(

[number](/types/number.md) x,

[number](/types/number.md) y,

[number](/types/number.md) width,

[number](/types/number.md) height,

[number](/types/number.md) priority

)
    {RET} [nil](/types/nil.md)
   {DESC} Draws the achievement's icon at the given coordinates and priority.
====
   {NAME} getName()
    {RET} [string](/types/string.md) name
   {DESC} Returns the achievement's name, taking into account its hidden status. If hidden and uncollected, "Hidden Achievement" is returned.
====
   {NAME} getDescription()
    {RET} [string](/types/string.md) description
   {DESC} Returns the achievement's description, taking into account its hidden status. If hidden and uncollected, "Unlock to find out more about this achievement" is returned. Else, the collectedDescription or description are returned, based on collected status and whether a collectedDescription is provided.
====
   {NAME} collect(

[bool](/types/bool.md) delayPopup

)
    {RET} [nil](/types/nil.md)
   {DESC} Forces the achievement to be collected. Optionally, the popup can be delayed.
{ENDTABLE}

### Instance Fields

All fields of achievements are read-only!

{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
   {DESC} Description
====
   {TYPE} [number](/types/number.md)
  {FIELD} id
   {DESC} The numeric index of the achievement in the episode achievement table.
====
   {TYPE} [string](/types/string.md)
  {FIELD} name
   {DESC} The (unique) name of the achievement.
====
   {TYPE} [string](/types/string.md)
  {FIELD} description
   {DESC} The description of the achievement.
====
   {TYPE} [string](/types/string.md)
  {FIELD} collectedDescription
   {DESC} The alternate description of the achievement if collected.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} hidden
   {DESC} Whether the achievement is a hidden (secret) achievement.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} collected
   {DESC} Whether the achievement has been collected.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} popupShown
   {DESC} Whether the achievement has already had its popup shown.
====
   {TYPE} [Texture](/types/texture.md)
  {FIELD} icon
   {DESC} The icon for the achievement.
====
   {TYPE} [Texture](/types/texture.md)
  {FIELD} icon
   {DESC} The alternative icon for the achievement while it has not yet been collected.
====
   {TYPE} [table](/types/table.md) of [AchievementCondition](/reference/achievements.md#conditions)
  {FIELD} conditions
   {DESC} The table of conditions for this achievement.
{ENDTABLE}

## Conditions

Achievement conditions determine how much of the achievement has progressed and how close it is to completion. Only when all conditions have been met will the achievement be considered complete.

Achievement condition references must be obtained through an existing achievement object reference.

### Instance Fields

Some fields are only set for specific condition types.

{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
   {DESC} Description
====
   {TYPE} [string](/types/string.md)
  {FIELD} conditionType
   {DESC} Either number, boolean or event, based on the condition type.
====
   {TYPE} [string](/types/string.md)
  {FIELD} desc
   {DESC} The condition's description, if any.
====
   {TYPE} [number](/types/number.md) or [bool](/types/bool.md)
  {FIELD} value
   {DESC} The current value of the achievement's progress. Type depends on conditionType.
====
   {TYPE} [number](/types/number.md)
  {FIELD} max
   {DESC} The max value of the <b>numeric</b> achievement's progress limit.
====
   {TYPE} [string](/types/string.md)
  {FIELD} event
   {DESC} The name of the event that triggers the <b>event</b> achievement's progress.
{ENDTABLE}
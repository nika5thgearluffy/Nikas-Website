# Section

Sections are arbitrary subdivisions within the level's scene space coordinate system. They can be configured in the editor through the Section Settings window, and manipulated in code through this class.

## Static Members

These elements are static to the class itself and can be accessed like so:
```lua
local currentSection = Section(player.section)
```

<!-- (Unlike instance functions and fields, these have 'Camera' prepended, which is inconsistent but potentially helpful.) -->
### Static Functions
| Function | Return Values | Description |
| --- | --- | --- |
| Section.count() | [number](/reference/section.md) count | Returns the number of sections (21). |
| Section.get() | [table](/types/table.md) of [Section](/reference/section.md) sections | Returns a table of references to all sections. |
| Section.get([number](/types/number.md) index) | [Section](/reference/section.md) section | Returns the section of the given index. Warning: Compared to the editor or internal section counts, these are off by one and go from 1 to 21, rather than 0 to 20. |
| Section([number](/types/number.md) index) | [Section](/reference/section.md) section | Returns the section of the given index. Indices for the section constructor go from 0 to 20. |
| Section.getActiveIndices() | [table](/types/table.md) of [number](/types/number.md) indices | Returns a table of indices of sections with players in them. |
| Section.getActive() | [table](/types/table.md) of [Section](/types/section.md) sections | Returns a table of sections with players in them. |
| Section.getFromCoords([number](/types/number.md) x, [number](/types/number.md) y, [number](/types/number.md) width, [number](/types/number.md) height) | [table](/types/table.md) of [Section](/types/section.md) sections | Returns a table of sections that overlap with the rectangle defined by the given coordinates. |
| Section.getFromCoords([named](/types/table.md) coordinates) | [table](/types/table.md) of [Section](/types/section.md) sections | Returns a table of sections that overlap with the rectangle defined by the given coordinates. The coordinates table should either have 4 sequential entries corresponding to x,y,width and height, or 4 named arguments named as such. |
| Section.getIdxFromCoords([number](/types/number.md) x, [number](/types/number.md) y, [number](/types/number.md) width, [number](/types/number.md) height) | [table](/types/table.md) of [Section](/types/section.md) sections | Returns a table of indices of sections that overlap with the rectangle defined by the given coordinates. |
| Section.getIdxFromCoords([named](/types/table.md) coordinates) | [table](/types/table.md) of [Section](/types/section.md) sections | Returns a table of indices of sections that overlap with the rectangle defined by the given coordinates. The coordinates table should either have 4 sequential entries corresponding to x,y,width and height, or 4 named arguments named as such. |
| Section.getWeatherEffect([Weather](/constants/weather-effects.md) type) | [table](/types/table.md) weatherEffect | Returns the table for the requested weather effect. |


## Instance Members

Instance members must be accessed through a reference to a specific [Section](/reference/section.md) object.
```lua
local sec = Section(0)
sec.backgroundID = 1
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
   {NAME} drawScreenEffect(

[ScreenEffect](/constants/screen-effects.md) type,

[Camera](/reference/camera.md) camera

)
    {RET} [nil](/types/nil.md)
   {DESC} Draws the specified screen effect.
{ENDTABLE}

### Instance Fields

<!-- (Consider an icon for "read only".) -->
{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} isValid
     {RO} Yes
   {DESC} Validates that the section object exists.
====
   {TYPE} [number](/types/number.md)
  {FIELD} idx
     {RO} Yes
   {DESC} The section's index in the internal list of sections.
====
   {TYPE} [RECT](/types/rect.md)
  {FIELD} boundary
     {RO} No
   {DESC} Returns a RECT containing the section's boundary.
====
   {TYPE} [RECT](/types/rect.md)
  {FIELD} origBoundary
     {RO} No
   {DESC} Returns a RECT containing the section's boundary from the start of gameplay.
====
   {TYPE} [number](/types/number.md)
  {FIELD} musicID
     {RO} No
   {DESC} The ID of the music used by the section.
====
   {TYPE} [string](/types/string.md)
  {FIELD} musicPath
     {RO} No
   {DESC} The path to the custom music used by the section. Unused if the custom ID isn't used.
====
   {TYPE} [string](/types/string.md) or [number](/types/number.md)
  {FIELD} music
     {RO} No
   {DESC} The ID or name of the currently used music.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} wrapH
     {RO} No
   {DESC} Whether horizontal wrapping is enabled.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} wrapV
     {RO} No
   {DESC} Whether vertical wrapping is enabled.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} hasOffscreenExit
     {RO} No
   {DESC} Whether walking offscreen in this section exits the level.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} noTurnBack
     {RO} No
   {DESC} Whether the screen may never scroll left in this section.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} isUnderwater
     {RO} No
   {DESC} Whether this section is underwater.
====
   {TYPE} [number](/types/number.md)
  {FIELD} backgroundID
     {RO} No
   {DESC} The ID used for the background in this section.
====
   {TYPE} [Parallax Background](/modules/paralx2.md)
  {FIELD} background
     {RO} No
   {DESC} The parallaxing background object used by this section.
====
   {TYPE} [number](/types/number.md)
  {FIELD} origBackgroundID
     {RO} No
   {DESC} The background ID initially used by this section.
====
   {TYPE} [SectionSettings](/reference/section.md#sectionsettings)
  {FIELD} settings
     {RO} No
   {DESC} The extended editor settings used by this section.
====
   {TYPE} [SectionDarkness](/reference/section.md#sectiondarkness)
  {FIELD} darkness
     {RO} Yes
   {DESC} The darkness configuration used by this section.
====
   {TYPE} [SectionEffects](/reference/section.md#sectioneffects)
  {FIELD} effects
     {RO} Yes
   {DESC} The section effects used by this section.
====
   {TYPE} [SectionBeatOptions](/reference/section.md#sectionbeatoptions)
  {FIELD} beatTimer
     {RO} Yes
   {DESC} The beat timer options used by this section.
{ENDTABLE}
<!-- (These badges could be used/modified for deprecated items of other kinds, too!) -->

## SectionSettings

The SectionSettings table contains information about options chosen in the section settings editor window. The following fields are available:

| Field | Type | Description |
| --- | --- | --- |
| darkness | [SectionDarkness](/reference/section.md#sectiondarkness) | The darkness configuration used by the section. |
| effects | [SectionEffects](/reference/section.md#sectioneffects) | The weather and screen effects used by the section. |
| beat | [SectionBeatOptions](/reference/section.md#sectionbeatoptions) | The beat timer configuration used by the section. |

### SectionDarkness

The SectionDarkness table contains information about the darkness effect used by the section.

| Field | Type | Description |
| --- | --- | --- |
| effect | [Darkness](/reference/darkness.md) | The darkness effect itself. |
| playerLightEffects | [table](/types/table.md) of [Light Source](/reference/darkness.md#light) | A table of lights used for the players, if player light is enabled. |
| enabled | [bool](/types/table.md) | Whether or not the darkness effect is enabled. |
| playerLightEnabled | [bool](/types/table.md) | Whether or not the darkness effect's player lights are enabled. |

### SectionEffects

The SectionEffects table contains information about weather and screen effects used in the section.

| Field | Type | Description |
| --- | --- | --- |
| weather | [Weather](/constants/weather-effects.md) | The used weather effect. |
| screenEffect | [Screen Effect](/constants/screen-effects.md) | The used screen effect. |

### SectionBeatOptions

The SectionBeatOptions table contains information about the beat timer used in the section.

| Field | Type | Description |
| --- | --- | --- |
| enabled | [bool](/types/bool.md) | Whether the beat timer is enabled. |
| useMusicClock | [bool](/types/bool.md) | Whether the music clock should be used for the timer. |
| bpm | [number](/types/number.md) | The current BPM. |
| timeSignature | [number](/types/number.md) | The current time signature. |

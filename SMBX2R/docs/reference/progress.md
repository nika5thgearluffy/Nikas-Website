# Progress

The progress class exposes fields and functions for accessing and manipulating per-episode progression information.

Progress works by using a numeric value between 0 and a maxProgress value, defined in the episode's launcher json.

## Static Members

These members are static to the class itself and can be accessed like so:

```lua
Progress.value = 1
```

### Static Fields

<!-- (Consider an icon for "read only".) -->
{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE} [number](/types/number.md)
  {FIELD} progress
     {RO} Yes
   {DESC} For retrieving the current progress value.
====
   {TYPE} [number](/types/number.md)
  {FIELD} value
     {RO} No
   {DESC} For setting the progress value.
====
   {TYPE} [number](/types/number.md)
  {FIELD} maxProgress
     {RO} Yes
   {DESC} The maximum progress value for the episode.
====
   {TYPE} [string](/types/string.md)
  {FIELD} savename
     {RO} No
   {DESC} The name of the current save file as displayed on the launcher.
{ENDTABLE}
# Cheats

The Cheats class lets you add, remove, modify, deactivate and activate cheat codes in SMBX2. Cheat codes are called by typing in keywords on the keyboard. A list of cheat codes available by default can be found [here](/features/cheats.md).

## Static Members

These elements are static to the class itself and can be accessed like so:
```lua
local invulnerabilityCheat = Cheats.get("donthurtme")
```

### Functions

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} Cheats.get(

[string](/type/string.md) name

)
    {RET} [Cheat](/reference/cheats.md#cheat) foundCheat
   {DESC} Gets a reference to the cheat triggered by the provided string. Returns nil if none were found.
====
   {NAME} Cheats.get(

[number](/type/number.md) id

)
    {RET} [Cheat](/reference/cheats.md#cheat) foundCheat
   {DESC} Gets a reference to the cheat by the cheat's internal ID. Returns nil if none were found.
====
   {NAME} Cheats.reset()
    {RET} [nil](/types/nil.md)
   {DESC} Resets, thus disabling, all cheat codes.
====
   {NAME} Cheats.trigger(

[Cheat](/reference/cheats.md#cheat) cheat,

[bool](/types/bool.md) silent

)
    {RET} [nil](/types/nil.md)
   {DESC} Triggers a cheat. If the first argument is not a cheat, this function tries to do an internal Cheats.get call to resolve it. The silent argument is optional and will prevent any sounds from playing if true.
====
   {NAME} Cheats.register(

[string](/type/string.md) name,

[named](/types/table.md) args

)
    {RET} [Cheat](/reference/cheats.md#cheat) createdCheat
   {DESC} Creates a new cheat.

<details><summary>Args</summary>

| Argument | Description |
| --- | --- |
| [bool](/types/bool.md) isCheat | If not false, this cheat causes the [Defines.player_hasCheated](/reference/defines.md) flag to be triggered, disabling saving. |
| [table](/types/table.md) of [string](/types/string.md) aliases | A list of alternate strings that can be used to trigger this cheat. |
| [table](/types/table.md) of [string](/types/string.md) exclusions | A list of cheats that are mutually exclusive with this one. Cheats in this list will be deactivated when this cheat gets activated. |
| [SFX](/reference/SFX.md) activateSFX | Sound effect to play when the cheat gets activated. Can be a file path or number, too. |
| [SFX](/reference/SFX.md) toggleSFX | Sound effect to play when the cheat gets toggled. Can be a file path or number, too. |
| [SFX](/reference/SFX.md) deactivateSFX | Sound effect to play when the cheat gets deactivated. Can be a file path or number, too. |
| [bool](/types/bool.md) flashPlayer | If true, causes the player to flash for 30 frames when activated, granting invulnerability. |
| [function](/types/function.md) onActivate | A function that runs when the cheat gets activated. If the cheat has a one-time effect that does not persist after activation, this function should return true. |
| [function](/types/function.md) onDeactivate | A function that runs when the cheat gets deactivated. |
| [function](/types/function.md) onToggle | A function that runs when the cheat gets toggled. If the cheat has a one-time effect that does not persist after activation, this function should return true. Gets passed a bool argument of whether the cheat is being activated or deactivated. |
| [function](/types/function.md) (Lunalua Event) | Any [Lunalua Event](/reference/lunalua-events.md) registered will run while the cheat is active. |

</details>
====
   {NAME} Cheats.registerGroup(

[string](/type/string.md) name,

[named](/types/table.md) args

)
    {RET} [Cheat](/reference/cheats.md#cheat) createdCheat
   {DESC} Creates a new cheat group. Cheat groups are cheats that trigger other cheats when triggered. An example is the "holytrinity" cheat, which triggers "jumpman", "shadowstar" and "donthurtme".

<details><summary>Args</summary>

| Argument | Description |
| --- | --- |
| [bool](/types/bool.md) isCheat | If not false, this cheat causes the [Defines.player_hasCheated](/reference/defines.md) flag to be triggered, disabling saving. |
| [table](/types/table.md) of [string](/types/string.md) aliases | A list of alternate strings that can be used to trigger this cheat. |
| [table](/types/table.md) of [string](/types/string.md) cheats | A list of cheats that will be triggered when this cheat group is triggered. |
| [table](/types/table.md) of [string](/types/string.md) exclusions | A list of cheats that are mutually exclusive with this one. Cheats in this list will be deactivated when this cheat gets activated. |
| [SFX](/reference/SFX.md) activateSFX | Sound effect to play when the cheat gets activated. Can be a file path or number, too. |
| [SFX](/reference/SFX.md) toggleSFX | Sound effect to play when the cheat gets toggled. Can be a file path or number, too. |
| [SFX](/reference/SFX.md) deactivateSFX | Sound effect to play when the cheat gets deactivated. Can be a file path or number, too. |
| [bool](/types/bool.md) flashPlayer | If true, causes the player to flash for 30 frames when activated, granting invulnerability. |
| [function](/types/function.md) onActivate | A function that runs when the cheat gets activated. If the cheat has a one-time effect that does not persist after activation, this function should return true. |
| [function](/types/function.md) onDeactivate | A function that runs when the cheat gets deactivated. |
| [function](/types/function.md) onToggle | A function that runs when the cheat gets toggled. If the cheat has a one-time effect that does not persist after activation, this function should return true. Gets passed a bool argument of whether the cheat is being activated or deactivated. |
| [function](/types/function.md) (Lunalua Event) | Any [Lunalua Event](/reference/lunalua-events.md) registered will run while the cheat is active. |

</details>
====
   {NAME} Cheats.registerPlayer(

[string](/type/string.md) name,

[number](/type/number.md) id,

[named](/types/table.md) args

)
    {RET} [Cheat](/reference/cheats.md#cheat) createdCheat
   {DESC} Creates a new cheat that transforms the player into a different ID.

<details><summary>Args</summary>

| Argument | Description |
| --- | --- |
| [bool](/types/bool.md) isCheat | If not false, this cheat causes the [Defines.player_hasCheated](/reference/defines.md) flag to be triggered, disabling saving. |
| [table](/types/table.md) of [string](/types/string.md) aliases | A list of alternate strings that can be used to trigger this cheat. |
| [table](/types/table.md) of [string](/types/string.md) exclusions | A list of cheats that are mutually exclusive with this one. Cheats in this list will be deactivated when this cheat gets activated. |
| [function](/types/function.md) (Lunalua Event) | Any [Lunalua Event](/reference/lunalua-events.md) registered will run while the cheat is active. |

</details>
====
   {NAME} Cheats.deregister(

[string](/types/string.md) name,

[bool](/types/bool.md) keepAliases

)
    {RET} [nil](/types/nil.md)
   {DESC} Deregisters and, if still active, deactivates the cheat's effect. If keepAliases is true, the cheat's aliases are not deleted and one of the aliases becomes the new main.
====
   {NAME} Cheats.addAlias(

[string](/types/string.md) name,

[string](/types/string.md) alias

)
    {RET} [nil](/types/nil.md)
   {DESC} Adds an alias to an existing cheat.
====
   {NAME} Cheats.listCheats()
    {RET} [table](/types/table.md) of [string](/types/string.md) allCheats
   {DESC} Returns a list of all cheat names.
{ENDTABLE}

### Static Fields

<!-- (Consider an icon for "read only".) -->
{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} enabled
     {RO} false
   {DESC} Whether cheats are enabled. Defaults to true.
{ENDTABLE}

# Cheat

Cheat instances provide direct access to the fields of a cheat.

## Instance Members

Instance members must be accessed through a reference to a specific [Cheat](/reference/cheats.md#cheat) object.
```lua
local cheat = Cheats.get("donthurtme")
cheat:trigger()
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
   {NAME} trigger(

[bool](/types/bool.md) silent

)
    {RET} [nil](/types/nil.md)
   {DESC} Triggers this cheat. The silent argument is optional and will prevent any sounds from playing if true.
{ENDTABLE}

### Instance Fields

<!-- (Consider an icon for "read only".) -->
{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE} [number](/types/number.md)
  {FIELD} id
     {RO} Yes
   {DESC} The internal index of the cheat.
====
   {TYPE} [table](/types/table.md) of [string](/types/string.md)
  {FIELD} aliases
     {RO} Yes
   {DESC} A list of aliases for the cheat. To change this list, use Cheats.addAlias and Cheats.deregister.
{ENDTABLE}
<!-- (These badges could be used/modified for deprecated items of other kinds, too!) -->
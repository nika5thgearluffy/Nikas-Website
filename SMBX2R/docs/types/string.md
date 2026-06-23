# String

Strings are reference types that contain text. They are usually denoted using single- or double quotes. You should always use one consistently in your code. Use the other when a string has quotes within.

```lua
local dialogue = "Hello! Nice to meet you."
local dialogue2 = "She said: 'What's the deal? Huh?'"
```

## Concatenation

Strings can be joined with numbers and strings using the concatenation operator.

```lua
local watermelonCount = 50
local familyMember = "sister"
local dialogue = "Today, I will purchase " .. watermelonCount .. " watermelons for my " .. familyMember .. "!"
```

## Functions

The string class provides a few functions for improving the string workflow.
Functions built into lua itself can be found [here](https://www.tutorialspoint.com/lua/lua_strings.htm).

Functions whose first argument is a string can be invoked as a method. Example:

```lua
local myStr = "   hello   "

Misc.dialog(string.trim(myStr))
Misc.dialog(myStr:trim())
```

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} string.trim(

[string](/types/string.md) s

)
    {RET} [string](/types/string.md) trimmedString
   {DESC} Trims leading and trailing whitespace.
====
   {NAME} string.split(

[string](/types/string.md) s,

[string](/types/string.md) pattern,

[bool](/types/bool.md) exclude,

[bool](/types/bool.md) plain

)
    {RET} [table](/types/table.md) of [string](/types/string.md) trimmedString
   {DESC} Splits the string given the given pattern. If plain is false, regex pattern matching is enabled for the pattern.
====
   {NAME} string.compare(

[string](/types/string.md) a,

[string](/types/string.md) b

)
    {RET} [number](/types/number.md) ratio
   {DESC} Compares the length and lexical order of the given strings. If a is longer than b, or a is lexically greater, 1 is returned. If the two are equal, 0 is returned. Else, -1 is returned. <Badge type="tip">You can also do an (a < b) or (a > b) comparison with 2 strings as a shortcut.</Badge>
{ENDTABLE}
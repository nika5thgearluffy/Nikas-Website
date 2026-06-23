# Table

Tables are the bread and butter of lua, allowing code to be more organized and versatile.
Table is a reference type.

## Basics

Tables are similar to lists and arrays of other programming languages. They contain things, and serve as a way to group these things together. Due to the fact that lua is a language with weak typing, the content of a table can be of any type, but the index can also be of any type.
Tables are denoted using {curly braces}.

### List-like (ordered) tables

There are two kinds of tables. The first kind is more like a list/array than the other. In this type of table, all entries are indexed in ascending order, without gaps.

<Note type="warning">Unlike in other programming languages, table indices in lua start with 1, not 0!</Note>


```lua
local myTable = {
    1, -- number
    true, -- boolean
    "Hello", -- string
    { -- nested table
        2,
        false,
        "Goodbye",
    },
    function(a) return 2 * a end, -- function
}
table.insert(myTable, 5)

function onTick()
    Text.print(myTable[1], 100, 100) -- number
    Text.print(myTable[2], 100, 120) -- bool
    Text.print(myTable[3], 100, 140) -- string
    Text.print(myTable[4][1], 100, 160) -- table
    Text.print(myTable[5](18), 100, 180) -- function
end
```

The numbered indices of list-like tables allow tables to be iterated over quickly using the ipairs iterator function:

```lua
function onTick()
    for k,v in ipairs(Player.get()) do -- Player.get() returns a table of player references, in a list-like table.
        Text.print(v.character, 100, 100 + 20 * k)
    end
end
```

### Lookup tables

The other kind of table is the lookup table. While list-like tables have numbered indices in ascending order, lookup tables are defined by their indices being whatever is necessary.
Lookup tables are often used to find certain values based on other values.

```lua
local playerDeadState = {
    [false] = "The player is alive.",
    [true] = "The player is dead."
}

function onTick()
    Text.print(playerDeadState[player.deathTimer > 0], 100, 100)
end
```

Adding and removing objects from a lookup table works by assigning the value to an index directly. For string indices there is also a way to access a value by using a period.

```lua
local myCustomObject = {}

myCustomObject.x = 0 -- the same as myCustomObject["x"] = 0
myCustomObject.y = 0 -- the same as myCustomObject["y"] = 0
myCustomObject.x = nil -- removes the entry from the table

function onTick()
    myCustomObject.y = myCustomObject.y + 1
    Text.print("Hello", 100, myCustomObject.y)
end
```

As hinted at in the variable names for the above example, tables are how more complex objects are created. Indeed, players, NPCs, blocks and other objects are all based on these basic principles for tables.

Lookup tables cannot be iterated over with ipairs and need to be iterated over with pairs instead. The reason is that lookup tables don't have an inherent order, so in order to iterate over it the code has to determine the next object on-the-fly. As such, there is never a guarantee as to the order in which elements in a lookup table are iterated over. It's recommended you avoid situations in which lookup tables need to be iterated over when possible.

## Functions

The table class provides a few functions for improving the table workflow.
Functions built into lua itself can be found [here](https://www.tutorialspoint.com/lua/lua_tables.htm).

Various table functions have two variants, one of which is prefixed with an i. The i-functions are intended for ordered tables and execute faster in general, as the code won't have to search for the next element in the table.

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} table.ifindlast( | table.findlast(

[table](/types/table.md) t,

[object](/types/object.md) value

)
    {RET} [number](/types/number.md) index
   {DESC} Searches for an object in an (ordered | any) table and returns the index of the last instance found.
====
   {NAME} table.ifind( | table.find(

[table](/types/table.md) t,

[object](/types/object.md) value

)
    {RET} [number](/types/number.md) index
   {DESC} Searches for an object in an (ordered | any) table and returns the index of the first instance found.
====
   {NAME} table.ifindall( | table.findall(

[table](/types/table.md) t,

[object](/types/object.md) value

)
    {RET} [table](/types/table.md) of [number](/types/number.md) indices
   {DESC} Searches for an object in an (ordered | any) table and returns a list of indices at which the value was found.
====
   {NAME} table.icontains( | table.contains(

[table](/types/table.md) t,

[object](/types/object.md) value

)
    {RET} [bool](/types/bool.md) index
   {DESC} Searches for an object in an (ordered | any) table and returns true if it was found.
====
   {NAME} table.iclone( | table.clone(

[table](/types/table.md) t

)
    {RET} [table](/types/table.md) clone
   {DESC} Clones the top layer of the input table. References to objects within the table are preserved.
====
   {NAME} table.ideepclone( | table.deepclone(

[table](/types/table.md) t

)
    {RET} [table](/types/table.md) clone
   {DESC} Clones all layers of the input table. This essentially duplicates all objects within the table. <b>This function can be very taxing on performance. Use with caution!</b>
====
   {NAME} table.ishuffle(

[table](/types/table.md) t

)
    {RET} [table](/types/table.md) t
   {DESC} Shuffles the entries in an ordered table.
====
   {NAME} table.map(

[table](/types/table.md) t

)
    {RET} [table](/types/table.md) lookupTable
   {DESC} Takes an ordered table and returns the respective lookup table, where the values of the input table become the keys of the output table. The values of the output table of those indices will be set to true.
====
   {NAME} table.unmap(

[table](/types/table.md) t

)
    {RET} [table](/types/table.md) listTable
   {DESC} Takes a table and returns the respective ordered table, discarding all values and turning the input table's keys into the new values of the returned table.
====
   {NAME} table.join(

[vararg](/concepts/vararg.md) of [table](/types/table.md) tables

)
    {RET} [table](/types/table.md) joinedTable
   {DESC} Iterates a list of input tables and joins arguments together into one table containing all unique arguments from all tables. In case of a duplicate key/index, the first table takes priority, with the last table having the lowest priority.
====
   {NAME} table.append(

[vararg](/concepts/vararg.md) of [table](/types/table.md) tables

)
    {RET} [table](/types/table.md) joinedTable
   {DESC} Iterates a list of ordered tables and constructs a new table containing all values of all input tables. The first argument is inserted first, the last inserted last.
====
   {NAME} table.reverse(

[table](/types/table.md) table

)
    {RET} [table](/types/table.md) reversedTable
   {DESC} Reverses the order of entries in an ordered table and returns the result.
====
   {NAME} table.flatten(

[table](/types/table.md) table

)
    {RET} [table](/types/table.md) flattenedTable
   {DESC} Joins the arguments from a table and all table entries within that table and inserts the results into the returned table. Table entries are only searched for and flattened on the top level, behaving similarly to clone, rather than deepclone.
{ENDTABLE}
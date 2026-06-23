# Iterators

(Written by someone fairly unfamiliar with the subject. Hoeloe/Rednaxela maybe you wanna revise this page a little.)

When browsing the object pages, you might have come across the word iterator a couple of times in the context of getting a reference to, for example, Blocks, BGOs or NPCs.
Particularily, these objects seem to have some similar-looking calls that can be difficult to understand at first. Taking BGOs as an example:

| Getter | Iterator |
| --- | --- |
| BGO.get | BGO.iterate |
| BGO.getIntersecting | BGO.iterateIntersecting |
| BGO.getByFilterMap | BGO.iterateByFilterMap |

The difference in use between these two can be seen here:
```lua
-- Getters
for k,v in ipairs(BGO.get()) do
    -- do stuff
end

-- Iterators
for k,v in BGO.iterate() do
    -- do stuff
end
```

For loops don't automatically know how to parse a table of information. The default functions pairs and ipairs take a table and construct an iterator, an object that the for loop can use to loop over the table input.
For purposes of iterating over Blocks/BGOs/NPCs in a table, using the iterator functions is more performant, because the code never wraps the results into a table and never has to go over ipairs to create a new iterator. The iterator is created from the internal BGO array directly. The code does one loop over the table, rather than two.

## What kind of object are iterators?

The return values to all Iterator calls are a function, a table and a number. The function is called with the table and number as arguments to retrieve the object at the current iteration index. The table is a table of arguments to the filter function, and the number corresponds to the current index of the iterator.
Thus, an iterator is a function like the following:
```lua
local tbl = {}
function iterator(args, idx)
    return tbl[idx]
end
```
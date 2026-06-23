# Text

The Text namespace exposes basic functions for printing text. It's most useful for runtime debugging and displaying native SMBX message boxes. For a more elaborate text printing system, take a look at [textplus](/modules/textplus.md).

## Static Members

These elements are static to the class itself and can be accessed like so:
```lua
function onTick()
    Text.print(player.character, 100, 100)
end
```


### Static functions
{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} Text.print(

[object](/types/object.md) text,

[number](/types/number.md) x,

[number](/types/number.md) y

)
    {RET} [nil](/types/nil.md)
   {DESC} Prints text relative to [screenspace coordinates](/concepts/coordinate-spaces.md) with font type 3. The text does not have to be explicitly converted into a string in order to be displayed.
====
   {NAME} Text.print(

[object](/types/object.md) text,

[number](/types/number.md) type,

[number](/types/number.md) x,

[number](/types/number.md) y

)
    {RET} [nil](/types/nil.md)
   {DESC} Prints text relative to [screenspace coordinates](/concepts/coordinate-spaces.md). The text does not have to be explicitly converted into a string in order to be displayed. The type argument determines the font to use and can be a number between 1 and 4. Type 1 only renders numbers, Type 2 is the black world map font, Type 3 is the default and Type 4 is all white and used for message boxes.
====
   {NAME} Text.printWP(

[object](/types/object.md) text,

[number](/types/number.md) x,

[number](/types/number.md) y,

[number](/types/number.md) priority

)
    {RET} [nil](/types/nil.md)
   {DESC} Prints text relative to [screenspace coordinates](/concepts/coordinate-spaces.md). The text does not have to be explicitly converted into a string in order to be displayed. The priority argument specifies the text's [render priority](/concepts/render-priority.md).
====
   {NAME} Text.printWP(

[object](/types/object.md) text,

[number](/types/number.md) type,

[number](/types/number.md) x,

[number](/types/number.md) y,

[number](/types/number.md) priority

)
    {RET} [nil](/types/nil.md)
   {DESC} Prints text relative to [screenspace coordinates](/concepts/coordinate-spaces.md). The text does not have to be explicitly converted into a string in order to be displayed. The priority argument specifies the text's [render priority](/concepts/render-priority.md). The type argument determines the font to use and can be a number between 1 and 4. Type 1 only renders numbers, Type 2 is the black world map font, Type 3 is the default and Type 4 is all white and used for message boxes.
====
   {NAME} Text.showMessageBox(

[string](/types/string.md) text

)
    {RET} [nil](/types/nil.md)
   {DESC} Displays a SMBX message dialog with the given text.
====
   {NAME} Text.getSize(

[object](/types/object.md) text,

[number](/types/number.md) type

)
    {RET} [number](/types/number.md) width, [number](/types/number.md) height
   {DESC} Returns the size the text would have if displayed with the given type.
{ENDTABLE}
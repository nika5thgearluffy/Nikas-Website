# Color

The Color class streamlines working with colors.

## Static members

These elements are static to the class itself and can be accessed like so:
```lua
local myCol = Color(0.2, 0.55, 0.9)
```

### Constants

Certain colours are predefined and can be accessed using the constants. View this page in dark mode to see nuances between colors more clearly. Use the Constant as defined for Lua scripts, while simply state the Constant without the "Color." in the configuration files of Vanilla objects.

| Constant | Hex Value | Constructor equivalent | Preview |
| --- | --- | --- | --- |
| Color.white | 0xFFFFFFFF | Color(1,1,1) | <span style="color:#FFFFFFFF">■</span> |
| Color.black | 0x000000FF | Color(0,0,0) | <span style="color:#000000FF">■</span> |
| Color.red | 0xFF0000FF | Color(1,0,0) | <span style="color:#FF0000FF">■</span> |
| Color.green | 0x00FF00FF | Color(0,1,0) | <span style="color:#00FF00FF">■</span> |
| Color.blue | 0x0000FFFF | Color(0,0,1) | <span style="color:#0000FFFF">■</span> |
| Color.alphawhite | 0xFFFFFF00 | Color(1,1,1,0) | <span style="color:#FFFFFF00">■</span> |
| Color.alphablack | 0x00000000 | Color(0,0,0,0) | <span style="color:#00000000">■</span> |
| Color.transparent | 0x00000000 | Color(0,0,0,0) | <span style="color:#00000000">■</span> |
| Color.grey | 0x808080FF | Color(0.5,0.5,0.5) | <span style="color:#808080FF">■</span> |
| Color.cyan | 0x00FFFFFF | Color(0,1,1) | <span style="color:#00FFFFFF">■</span> |
| Color.magenta | 0xFF00FFFF | Color(1,0,1) | <span style="color:#FF00FFFF">■</span> |
| Color.yellow | 0xFFFF00FF | Color(1,1,0) | <span style="color:#FFFF00FF">■</span> |
| Color.pink | 0xFF73ABFF | Color(1,0.45,0.67) | <span style="color:#FF73ABFF">■</span> |
| Color.canary | 0xFFF266FF | Color(1,0.95,0.4) | <span style="color:#FFF266FF">■</span> |
| Color.purple | 0xAB66ABFF | Color(0.67,0.4,0.67) | <span style="color:#AB66ABFF">■</span> |
| Color.orange | 0xFF8C54FF | Color(1,0.55,0.33) | <span style="color:#FF8C54FF">■</span> |
| Color.teal | 0x00AB99FF | Color(0,0.67,0.6) | <span style="color:#00AB99FF">■</span> |
| Color.maroon | 0x730000FF | Color(0.45,0,0) | <span style="color:#730000FF">■</span> |
| Color.brown | 0x804D00FF | Color(0.5,0.3,0) | <span style="color:#804D00FF">■</span> |
| Color.lightgrey | 0xBFBFBFFF | Color(0.75,0.75,0.75) | <span style="color:#BFBFBFFF">■</span> |
| Color.lightgray | 0xBFBFBFFF | Color(0.75,0.75,0.75) | <span style="color:#BFBFBFFF">■</span> |
| Color.lightblue | 0x33CCFFFF | Color(0.2,0.8,1) | <span style="color:#33CCFFFF">■</span> |
| Color.lightgreen | 0x80CC99FF | Color(0.5,0.8,0.6) | <span style="color:#80CC99FF">■</span> |
| Color.lightbrown | 0xBF9966FF | Color(0.75,0.6,0.4) | <span style="color:#BF9966FF">■</span> |
| Color.lightred | 0xFF8080FF | Color(1, 0.5, 0.5) | <span style="color:#FF8080FF">■</span> |
| Color.darkgrey | 0x404040FF | Color(0.25,0.25,0.25) | <span style="color:#404040FF">■</span> |
| Color.darkgray | 0x404040FF | Color(0.25,0.25,0.25) | <span style="color:#404040FF">■</span> |
| Color.darkblue | 0x003373FF | Color(0,0.2,0.45) | <span style="color:#003373FF">■</span> |
| Color.darkgreen | 0x005926FF | Color(0,0.35,0.15) | <span style="color:#005926FF">■</span> |
| Color.darkbrown | 0x4D4040FF | Color(0.3,0.25,0.25) | <span style="color:#4D4040FF">■</span> |
| Color.darkred | 0x800000FF | Color(0.5, 0, 0) | <span style="color:#800000FF">■</span> |

### Static functions

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} Color(

[number](/types/number.md) r,

[number](/types/number.md) g,

[number](/types/number.md) b
       
)
    {RET} [Color](/reference/Color.md) color
   {DESC} Creates a new color object with the given values for red, green and blue. All values are between 0 and 1.
====
   {NAME} Color(

[number](/types/number.md) r,

[number](/types/number.md) g,

[number](/types/number.md) b,

[number](/types/number.md) a
       
)
    {RET} [Color](/reference/Color.md) color
   {DESC} Creates a new color object with the given values for red, green and blue. Additionally an alpha argument specifies the transparency of the color. All values are between 0 and 1.
====
   {NAME} Color.fromHSV(

[number](/types/number.md) h,

[number](/types/number.md) s,

[number](/types/number.md) v,

[number](/types/number.md) a
       
)
    {RET} [Color](/reference/Color.md) color
   {DESC} Creates a new color object with the given values for hue, saturation, and value. Additionally an alpha argument specifies the transparency of the color. All values are between 0 and 1.
====
   {NAME} Color.fromHSL(

[number](/types/number.md) h,

[number](/types/number.md) s,

[number](/types/number.md) l,

[number](/types/number.md) a
       
)
    {RET} [Color](/reference/Color.md) color
   {DESC} Creates a new color object with the given values for hue, saturation, and lightness. Additionally an alpha argument specifies the transparency of the color. All values are between 0 and 1.
====
   {NAME} Color.fromHexRGB(

[number](/types/number.md) hex
       
)
    {RET} [Color](/reference/Color.md) color
   {DESC} Creates a new color object from the given 3 byte (#RRGGBB) hexadecimal value.
====
   {NAME} Color.fromHexRGBA(

[number](/types/number.md) hex
       
)
    {RET} [Color](/reference/Color.md) color
   {DESC} Creates a new color object from the given 4 byte (#RRGGBBAA) hexadecimal value.
====
   {NAME} Color.fromHex(

[number](/types/number.md) hex
       
)
    {RET} [Color](/reference/Color.md) color
   {DESC} Creates a new color object from the given 4 byte (#RRGGBBAA) hexadecimal value.
====
   {NAME} Color.lerp(
   
[Color](/reference/Color.md) a,
   
[Color](/reference/Color.md) b,

[number](/types/number.md) value,

)
    {RET} [Color](/reference/Color.md) color
   {DESC} Interpolates between the [Color](/reference/Color.md) objects `a` and `b` by interpolating the RGBA values separately. Equivalent to `math.lerp`.
====
   {NAME} lerpHSV(
   
[Color](/reference/Color.md) a,
   
[Color](/reference/Color.md) b,

[number](/types/number.md) value,

)
    {RET} [Color](/reference/Color.md) color
   {DESC} Interpolates between the [Color](/reference/Color.md) objects `a` and `b` by interpolating the HSVA values separately.
====
   {NAME} Color.parse(

[string](/types/string.md) hex
       
)
    {RET} [Color](/reference/Color.md) color
   {DESC} Creates a new color object based on the text string provided. Inputs can be any of the [constant field names](/reference/Color.md#constants), a string hex value preceeded by either `#` or `0x`, or a Color object.
{ENDTABLE}

## Instance members

Instance members must be accessed through a reference to a specific [Color](/reference/Color.md) object.
```lua
local c = Color.red
c.g = 0.5
local chsl = c:toHSL()
```
<Note type="warning">Attempting to call instance members statically will result in an error!</Note>

### Instance Methods

[What is a method?](/types/function.md#methods)

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} toHexRGB()
    {RET} [number](/types/number.md) hexValue
   {DESC} Converts the Color object to a 3 byte hexadecimal representation, ignoring the alpha channel.
====
   {NAME} toHexRGBA()
    {RET} [number](/types/number.md) hexValue
   {DESC} Converts the Color object to a 4 byte hexadecimal representation.
====
   {NAME} toHex()
    {RET} [number](/types/number.md) hexValue
   {DESC} Converts the Color object to a 4 byte hexadecimal representation.
====
   {NAME} toHSV()
    {RET} [number](/types/number.md) hue,[number](/types/number.md) saturation, [number](/types/number.md) value
   {DESC} Converts the Color object to a HSV encoding.
====
   {NAME} toHSL()
    {RET} [number](/types/number.md) hue,[number](/types/number.md) saturation, [number](/types/number.md) lightness
   {DESC} Converts the Color object to a HSL encoding.
====
   {NAME} lerp(
   
[Color](/reference/Color.md) target,

[number](/types/number.md) value,

)
    {RET} [Color](/reference/Color.md) color
   {DESC} Interpolates between the current [Color](/reference/Color.md) and the target by interpolating the RGBA values separately. Equivalent to `math.lerp`.
====
   {NAME} lerpHSV(
   
[Color](/reference/Color.md) target,

[number](/types/number.md) value,

)
    {RET} [Color](/reference/Color.md) color
   {DESC} Interpolates between the current [Color](/reference/Color.md) and the target by interpolating the HSVA values separately.
{ENDTABLE}

### Instance Fields

{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE} [number](/types/number.md)
  {FIELD} r
     {RO} No
   {DESC} Red value (0-1).
====
   {TYPE} [number](/types/number.md)
  {FIELD} g
     {RO} No
   {DESC} Green value (0-1).
====
   {TYPE} [number](/types/number.md)
  {FIELD} b
     {RO} No
   {DESC} Blue value (0-1).
====
   {TYPE} [number](/types/number.md)
  {FIELD} a
     {RO} No
   {DESC} Alpha value (0-1).
{ENDTABLE}

## Alpha Override

Using the concatenation operator, the alpha value of a certain color object can be overwritten. This does not alter the original color object, and is primarily used for varying alpha values for colors used in draw calls over time.

```lua
function onDraw()
    Graphics.drawScreen{
        color = Color.red .. math.sin(lunatime.tick() * 0.01)
    }
end
```

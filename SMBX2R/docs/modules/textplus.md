# Textplus

As a module, textplus needs to be loaded in order to be accessible in your level or episode:
```lua
local textplus = require("textplus")
```

Textplus is a library for advanced text rendering. It features text rendering options such as custom fonts, render tags, colors, icons, and shaders.

## Quick Start

If you want to get text rendered to the screen quickly, textplus provides a convenient way to do so.

```lua
local textplus = require("textplus")

function onDraw()
    textplus.print{
        x = 0,
        y = 0,
        text = "Hello! You are using textplus!"
    }
end
```

For more optimized use and additional options continue reading.

## Functions

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} strToCodes(

[string](/types/string.md) input

)
    {RET} [table](/types/table.md) of CharacterCodes
   {DESC} Turns an UTF-8 string into a table of unicode character codes that can be passed as input to other textplus functions.
====
   {NAME} loadFont(

[string](/types/string.md) filename

)
    {RET} [Font](/modules/textplus.md#font) font
   {DESC} Loads a font of a given filename. The filename corresponds to the relative path from the level folder to the font ini.
====
   {NAME} parse(

[string](/types/string.md) or [table](/types/table.md) of CharacterCodes text

)
    {RET} FormattedText formattedText
   {DESC} Parses the input text, returning a table containing formatted text information that can be used as input to other functions.
====
   {NAME} parse(

[string](/types/string.md) or [table](/types/table.md) of CharacterCodes text,
[named](/types/table.md) formattingArgs

)
    {RET} FormattedText formattedText
   {DESC} Parses the input text, returning a table containing formatted text information that can be used as input to other functions.

<details><summary>Formatting arguments</summary>

| Argument | Description |
| --- | --- |
| [Font](/modules/textplus.md#font) font | The font to use |
| [Color](/reference/Color.md) color | Tint |
| [number](/types/number.md) xscale | Horizontal scale factor |
| [number](/types/number.md) yscale | Vertical scale factor |
| [bool](/types/bool.md) plaintext | Can be set to true if no tags are used to speed up the parsing process. |

</details>
   
====
   {NAME} parse(

[string](/types/string.md) or [table](/types/table.md) of CharacterCodes text,
[named](/types/table.md) formattingArgs,
[named](/types/table.md) [CustomTags](/modules/textplus.md#custom-tags) customTags

)
    {RET} FormattedText formattedText
   {DESC} Parses the input text, returning a table containing formatted text information that can be used as input to other functions. Additionally, custom tags can be provided. Each custom tag handler also gets passed the formattingArgs table, so you can expand it with whatever arguments you need for your custom tags.

<details><summary>Formatting arguments</summary>

| Argument | Description |
| --- | --- |
| [Font](/modules/textplus.md#font) font | The font to use |
| [Color](/reference/Color.md) color | Tint |
| [number](/types/number.md) xscale | Horizontal scale factor |
| [number](/types/number.md) yscale | Vertical scale factor |

</details>

====
   {NAME} parse(

[string](/types/string.md) or [table](/types/table.md) of CharacterCodes text,
[named](/types/table.md) formattingArgs,
[named](/types/table.md) [CustomTags](/modules/textplus.md#custom-tags) customTags,
[table](/types/table.md) of [string](/types/string.md) autoSelfClosingTags

)
    {RET} FormattedText formattedText
   {DESC} Parses the input text, returning a table containing formatted text information that can be used as input to other functions. This overload is mostly identical to the previous one, but additionally allows you to provide a string of tags that are considered automatically self-closing. More info on that in the tag section below.

<details><summary>Formatting arguments</summary>

| Argument | Description |
| --- | --- |
| [Font](/modules/textplus.md#font) font | The font to use |
| [Color](/reference/Color.md) color | Tint |
| [number](/types/number.md) xscale | Horizontal scale factor |
| [number](/types/number.md) yscale | Vertical scale factor |

</details>

====
   {NAME} layout(

[string](/types/string.md) or FormattedText input

)
    {RET} TextplusLayout layout
   {DESC} Takes an input text and lays it out (wraps it), returning the layout that can be used for rendering.
====
   {NAME} layout(

[string](/types/string.md) or FormattedText input,
[number](/types/number.md) maxWidth,

)
    {RET} TextplusLayout layout
   {DESC} Takes an input text and lays it out (wraps it), returning the layout that can be used for rendering. A maximum width can be provided for wrapping.
====
   {NAME} layout(

[string](/types/string.md) or FormattedText input,
[number](/types/number.md) maxWidth,
[named](/types/table.md) formattingArgs,
[named](/types/table.md) [CustomTags](/modules/textplus.md#custom-tags) customTags,
[table](/types/table.md) of [string](/types/string.md) autoSelfClosingTags

)
    {RET} TextplusLayout layout
   {DESC} Takes an input text and lays it out (wraps it), returning the layout that can be used for rendering. If the input text is a string, layout internally calls parse(). As such, the optional overloads for parse are also available for this function. They are only relevant when providing an unparsed string input text.
====
   {NAME} render(

[named](/types/table.md) args

)
    {RET} [nil](/types/nil.md)
   {DESC} Renders text given the provided arguments.
<details><summary>Available args</summary>

| Argument | Description |
| --- | --- |
| [number](/types/number.md) x<Badge type="tip">Required</Badge> | X-Coordinate to render from |
| [number](/types/number.md) y<Badge type="tip">Required</Badge> | Y-Coordinate to render from |
| [table](/types/table.md) layout<Badge type="tip">Required</Badge> | The text layout to render. |
| [number](/types/number.md) limit | Maximum number of characters to render. The rest will be truncated. |
| [bool](/types/bool.md) sceneCoords | If set to true, scene coordinates are used. |
| [number](/types/number.md) priority | Render priority. Defaults to 0. |
| [CaptureBuffer](/types/CaptureBuffer.md) target | CaptureBuffer to render to. |
| [FragShader](/types/Shader.md) shader | Shader to render text with. |
| [Color](/reference/Color.md) color | Tint |

</details>

====
   {NAME} print(

[named](/types/table.md) args

)
    {RET} [nil](/types/nil.md)
   {DESC} Convenience function that performs parse->layout->render all at once. Accepts all parameters as named arguments. Extra named arguments will be treated as formatting data for textplus.parse.
<details><summary>Available args</summary>

| Argument | Description |
| --- | --- |
| [number](/types/number.md) x<Badge type="tip">Required</Badge> | X-Coordinate to render from |
| [number](/types/number.md) y<Badge type="tip">Required</Badge> | Y-Coordinate to render from |
| [string](/types/string.md) text<Badge type="tip">Required</Badge> | The text to render. |
| [number](/types/number.md) maxWidth | Maximum width for the text to fit in. |
| [number](/types/number.md) limit | Maximum number of characters to render. The rest will be truncated. |
| [Vector2](/types/vector.md) pivot | Pivot point to align the center against. |
| [bool](/types/bool.md) sceneCoords | If set to true, scene coordinates are used. |
| [number](/types/number.md) priority | Render priority. Defaults to 0. |
| [CaptureBuffer](/types/CaptureBuffer.md) target | CaptureBuffer to render to. |
| [FragShader](/types/Shader.md) shader | Shader to render text with. |
| [Color](/reference/Color.md) color | Tint |

</details>

{ENDTABLE}

## Layouts

Layouts store information about text to print. Storing them can save a lot of calculations and speed up work with textplus. Layouts can be iterated over line by line. In other words, layout[1] is the first line of the layout.

{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE} [number](/types/number.md)
  {FIELD} width
     {RO} No
   {DESC} Width of the layout.
====
   {TYPE} [number](/types/number.md)
  {FIELD} height
     {RO} No
   {DESC} Height of the layout.
{ENDTABLE}

## Fonts

Textplus defines its fonts through ini files that provide information for all available glyphs. As an example, here is the standard font 4 used by textplus. It can be found in the data/scripts/textplus/font directory.

![](images/tplusfont4.png)

Accompanying this image file is an ini configuration file providing extended information about the sheet. Below is a breakdown of that ini file.

### Main sheet information

The main section provides general information about the sheet, independent of the individual glyphs.
```ini
[main]
image='textplus/font/4.png'
rows=8
cols=16
ascent=9
descent=1
```
| Argument | Type | Description |
| --- | --- | --- |
| image | [string](/types/string.md) | Path to the font image file. Looks in level folder, worlds folder, and scripts folder in that order. |
| rows | [number](/types/number.md) | Number of rows on the image. |
| cols | [number](/types/number.md) | Number of columns on the image. |
| ascent | [number](/types/number.md) | Pixels above the baseline in a glyph's cell. Defaults to be derived from the glyph default baseline. |
| descent | [number](/types/number.md) | Pixels below the baseline in a glyph's cell. Defaults to be derived from the glyph default baseline.  |
| spacing | [number](/types/number.md) | Pixels of space between each glyph's cell. |
| customTags | [table](/types/number.md) of [Tags](/modules/textplus.md#tags) | List of custom tags for this text. |
| autoTagList | [table](/types/number.md) of [Tags](/modules/textplus.md#tags) | List of custom self-closing tags for this text. |

### Default glyph properties

The default glyph properties section defines default properties for all glyphs in the font. These properties can be overwritten on a per-glyph basis in the glyph section.
```ini
[glyphdefaults]
baseline=1
```
| Argument | Type | Description |
| --- | --- | --- |
| width | [number](/types/number.md) | Width of the glyphs. Defaults to the width of a cell as derived by cols. |
| height | [number](/types/number.md) | Height of the glyphs. Defaults to the height of a cell as derived by rows. |
| baseline | [number](/types/number.md) | Baseline of a cell.  0 is the bottom of the cell. |

### Glyph Map (optional)

A glyph map can be provided to define the exact layout of glyphs in the image.
```ini
[glyphmap]
row1='!"#$%&'()*+,-./0'
row2='123456789:;<=>?@'
row3='ABCDEFGHIJKLMNOP'
row4='QRSTUVWXYZ[\]^_`'
row5='abcdefghijklmnop'
row6='qrstuvwxyz{|} '
```

### Glyph Sections

The font file can additionally contain sections named after each glyph. In these sections, a glyph can override the default glyph properties. Below is only a brief example from the ini:
```ini
[,]
width=3
[-]
width=5
[.]
width=2
[/]
width=5
[0]
width=5
[1]
width=4
[2]
width=5
```

## Tags

Textplus supports in-text tags. These tags can be used to customize parts of text in easy ways.
Tags can have positional and named arguments, and can also be auto-escaped.
Examples:
```
The color tag, using a color as a positional argument.
<color red>text</color>

The wave tag, also using a positional argument to determine its strength.
<wave 2>text</wave>

The glitch tag, providing an intensity through the named chance argument.
<glitch chance=0.5>text</glitch>

The img tag. Despite no closing tag being written in the text, textplus automatically closes this tag. It also uses an image file as a positional argument.
<img file>
```

| Tag | Description |
| --- | --- |
| `<lt>` or `<less>` | Inserts a < character. |
| `<gt>` or `<greater>` | Inserts a > character. |
| `<br>` or `<break>` | Inserts a line break. |
| `<img file>` or `<image file>` | Embeds an image in the text, maintaining its size. The argument is a file path relative to the episode or level folder. |
| `<emoji file>` | Embeds an image in the text, scaling it down to match the text size. The argument is a file path relative to the episode or level folder. |
| `<color col>text</color>` or <br> `<colour col>text</colour>` | Changes the color of the contained text. The argument can either be a Color object, a hex code, or one of the following keywords: white, black, red\*, green\*, blue\*, grey\*, gray\*, cyan, magenta, yellow, pink, canary, purple, orange, teal, maroon, brown, rainbow. Colors with an asterisk have light and dark variants (e.g. lightgrey, darkred) |
| `<align side>text</align>` | Aligns the contained text inside the text box. The argument can be one of the following keywords: left, center, right |
| `<italic [strength=2]>` or `<i [strength=2]>` | Formats text in italics. |
| `<wave [strength=1]>text</wave>` | Causes the contained text to move in a sine wave. Strength optionally defines the strength of the wave. |
| `<tremble [strength=1]>text</tremble>` | Causes the contained text to jitter. Strength optionally defines the intensity of the shaking. |
| `<size factor>text</size>` | Changes the size of the contained text. Factor is a number multiplier, meaning that 2 is twice, and 0.5 is half as big as surrounding text with no size tag.|
| `<glitch freq [delay=1] [useemoji=true]>text</glitch>` or `<garbage freq [delay=1] [useemoji=true]>text</garbage>` | Causes the contained text to change its characters at random. The first argument is a number between 0 and 1 that indicates how often the characters are glitched, with 0 meaning never, and 1 meaning constantly. The optional second and third arguments control the update frequency and whether the effect should include any emoji in the current font, respectively. |
| `<plaintext>text</plaintext>` | Causes the text inside of it to ignore tags.

## Custom Tags

You pass a custom tags table to the parse function's argument for custom tags.

A do-nothing tag named "fred" would be defined as follows:
```lua
function customTags.fred(fmt, out, args)
    -- Return the parent formatting unchanged, since we're not a formatting modification tag
    return fmt
end
```

`fmt` is the formatting table in the context surrounding the tag

`args` is a table of arguments to the tag (both positional and named are supported)

`out` is a the parsed list of text segments, up to when this tag gets parsed. Additional text segments can be appended by the tag if you want

The return value is the formatting table that should apply to anything contained within the tag.

A plain formatting tag should just create a clone of fmt with modified contents and return that. A shallow table copy is sufficient for fmt, no need for a deep clone.

For example, to make a tag called "wide" that doubles the "xscale" formatting property, you would do something like:
```lua
function customTags.wide(fmt, out, args)
    fmt = table.clone(fmt)
    fmt.xscale = 2 * fmt.xscale
    return fmt
end
```

Here's a list of valid 'fmt' properties:
{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE} [Font](/modules/textplus.md#font)
  {FIELD} font
     {RO} Yes
   {DESC} The font used by the current segment.
====
   {TYPE} [Color](/reference/Color.md)
  {FIELD} color
     {RO} No
   {DESC} The color of the current segment.
====
   {TYPE} [number](/types/number.md)
  {FIELD} xscale
     {RO} No
   {DESC} The horizontal scale factor of the current segment.
====
   {TYPE} [number](/types/number.md)
  {FIELD} yscale
     {RO} No
   {DESC} The vertical scale factor of the current segment.
====
   {TYPE} [number](/types/number.md)
  {FIELD} spacing
     {RO} No
   {DESC} A spacing modifier added to the glyph/cell width. 0 by default.
====
   {TYPE} [number](/types/number.md)
  {FIELD} italic
     {RO} No
   {DESC} If greater than 0, skews the characters like the italic tag. 0 by default.
====
   {TYPE} [number](/types/number.md)
  {FIELD} tremble
     {RO} No
   {DESC} If greater than 0, shakes the characters like the tremble tag. 0 by default.
====
   {TYPE} [number](/types/number.md)
  {FIELD} wave
     {RO} No
   {DESC} If greater than 0, moves the characters in a sine wave like the wave tag. 0 by default.
====
   {TYPE} [table](/types/table.md)
  {FIELD} glitch
     {RO} No
   {DESC} A table containing the properties of glitch effects:

<details><summary>glitch arguments</summary>

| Argument | Description |
| --- | --- |
| [number](/types/number.md) chance | Corresponds to the first argument of the glitch tag, a value between 0 and 1 that determines the extent of the glitching effect. |
| [number](/types/number.md) delay | Corresponds to the second argument of the glitch tag, the number of frames before the glitched text changes. 1 by default. |
| [bool](/types/bool.md) useemoji | Corresponds to the third argument of the glitch tag;  if true, the glitch effect includes emoji. |

</details>
====
   {TYPE} [function](/types/function.md)
  {FIELD} posFilter
     {RO} No
   {DESC} A function that lets you modify the position of each character in the segment. The function should have six arguments (x, y, the segment's fmt table, the current glyph index, the width of the character, and the height of the character) and return the new x and y coordinates as separate values.
====
   {TYPE} [function](/types/function.md)
  {FIELD} vertFilter
     {RO} No
   {DESC} A function that lets you modify the vertices of each character in the segment. The function should have seven arguments (the current character's vertex table, x, y, the segment's fmt table, the segment's image, the segment's width, and the segment's height) and return a modified copy of the vertex table.
{ENDTABLE}


As a note, a "text segment" is such a list of character codes, plus a 'fmt' field in the same table set to point to the formatting metadata that will be used to render that text. Additionlly text segments may alternatively be an image, in which case you would not include any character codes but have the fields `img`, `width`, and `height` set. Custom tags may also add other custom fields in text segments if resulting text segment is to be specially handled after parsing or layout. Note that the output of `textplus.parse` is just a list of text segments.

As an example, if you wish to make a tag which adds the text "hello world" whereever it is placed, you could define it's tag handler as follows:
```lua
-- The tag <fred> always outputs the string 'hello world'
function customTags.fred(fmt, out, args)
    -- Convert output string to text segment (list of character codes)
    local textSegment = textplus.strToCodes('hello world')

    -- Have this text segment inherit the parent formatting state
    textSegment.fmt = fmt

    -- Append the text segment to the output list
    out[#out+1] = textSegment

    -- Return the parent formatting unchanged, since we're not a formatting modification tag
    return fmt
end
```

In order to pass your custom tags to textplus.parse, you can then use the table you used to define them. In this case, that would be customTags. Additionally, fred can be defined to be auto-closing, since it just inserts a string:
```lua
local formattedText = textplus.parse("Mario: <wide><fred></wide>", {}, customTags, {"fred"})
```

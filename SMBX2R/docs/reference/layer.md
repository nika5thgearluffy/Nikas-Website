# Layer

Layers are named groups of placeable objects in *Levels*. They can be hidden to deactivate all objects they contain as well as have speed values which apply movement to their objects. Layers do not affect the order in which objects are displayed; if you're looking for that, check out the [Render Priority](/concepts/render-priority.md) page instead.
<Note type="warning">Except when using the Layer() constructor, Layers are only accessible starting in onStart!</Note>


## Static Members

These elements are static to the class itself and can be accessed like so:
```lua
function onStart()
   local defaultLayer = Layer.get("Default")
end
```

### Static functions
{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} Layer.get()
    {RET} table of [Layer](/reference/layer.md)
   {DESC} Returns all existing layers.
====
   {NAME} Layer.get(

[string](/types/string.md) layerName

)
    {RET} [Layer](/reference/layer.md)
   {DESC} Returns the Layer object for the layerName. If no layer object with layerName is found then nil is returned.
====
   {NAME} Layer.find(

[string](/types/string.md) substring

)
    {RET} table of [Layer](/reference/layer.md)
   {DESC} Returns a list of all Layers with a name that contains the substring.
====
   {NAME} Layer(

[number](/types/number.md) index

)
    {RET} [Layer](/reference/layer.md)
   {DESC} Returns the Layer object at position index in the global Layer table. <Badge type="tip">Use this constructor with caution! Layer.get is generally safer to use.</Badge>
====
   {NAME} Layer.count()
    {RET} [number](/types/number.md)
   {DESC} Returns the number of Layers in the level.
====
   {NAME} Layer.isPaused()
    {RET} [bool](/types/bool.md)
   {DESC} Checks if any layer's movement has been paused by player states.
{ENDTABLE}


## Instance Members

Instance members must be accessed through a reference to a specific [Layer](/reference/layer.md) object.
```lua
function onStart()
    local defaultLayer = Layer.get("Default")
    local movingLayer = Layer.get("Moving")
    defaultLayer:hide(true)
    movingLayer.speedX = 5
end
```
<Note type="warning">Attempting to call instance members statically will result in an error!</Note>

### Instance Methods

[What is a method?](/types/function.md#methods)
<!--   {NAME} mem(

[hex](/types/number.md) offset,

[FieldType](/constants/memory-field-types.md) type

)
    {RET} [object](/types/object.md) value
   {DESC} Returns a value of the Layer struct at a specific memory address-offset.
====-->

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} setSpeedX(

[number](/types/number.md) value

)
    {RET} [nil](/types/nil.md)
   {DESC} Sets the horizontal speed of the layer.
====
   {NAME} setSpeedY(

[number](/types/number.md) value

)
    {RET} [nil](/types/nil.md)
   {DESC} Sets the vertical speed of the layer.
====
   {NAME} stop()
    {RET} [nil](/types/nil.md)
   {DESC} Stops the layer's movements.
====
   {NAME} show(

[bool](/types/bool.md) noSmoke

)
    {RET} [nil](/types/nil.md)
   {DESC} Shows the layer. If noSmoke is true, then no smoke will be displayed on showing.
====
   {NAME} hide(

[bool](/types/bool.md) noSmoke

)
    {RET} [nil](/types/nil.md)
   {DESC} Hides the layer. If noSmoke is true, then no smoke will be displayed on hiding.
====
   {NAME} toggle(

[bool](/types/bool.md) noSmoke

)
    {RET} [nil](/types/nil.md)
   {DESC} Toggles (alternates between shown and hidden) the layer. If noSmoke is true, then no smoke will be displayed on toggling.
====
   {NAME} isPaused()
    {RET} [bool](/types/bool.md)
   {DESC} Checks if this particular layer's movement has been paused by player states.
{ENDTABLE}


### Instance Fields

<!-- (Consider an icon for "read only".) -->
{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE} [string](/types/string.md)
  {FIELD} name
     {RO} No
   {DESC} The name of the layer.
====
   {TYPE} [number](/types/number.md)
  {FIELD} idx
     {RO} Yes
   {DESC} The layer's index in the internal list of Layers.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} isHidden
     {RO} No
   {DESC} Whether the layer is hidden.
====
   {TYPE} [number](/types/number.md)
  {FIELD} speedX
     {RO} No
   {DESC} The layer's horizontal speed.
====
   {TYPE} [number](/types/number.md)
  {FIELD} speedY
     {RO} No
   {DESC} The layer's vertical speed.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} pauseDuringEffect
     {RO} No
   {DESC} Whether this layer pauses during effects that freeze the level, such as the player shrinking after taking damage.
{ENDTABLE}


### Instance Memory Offsets

While the Layer class supports direct memory access, unlike in some other classes, all fields are properly mapped into instance variables. As such, there is no need to use the layer's memory access method.
<!--
These offsets can be manipulated by the instance's mem method.
<Note type="warning">Be careful when manipulating memory offsets directly! Doing so may yield unexpected results.</Note>

  {FIELD} Field
   {TYPE} Fieldtype
   {DESC} Description
====
  {FIELD} 0x00
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Does this layer get paused by player effects? <Badge type="tip">Use field pauseDuringEffect</Badge>
====
  {FIELD} 0x02
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Unknown
====
  {FIELD} 0x04
   {TYPE} [FIELD_STRING](/constants/memory-field-types.md)
   {DESC} The layer's name string <Badge type="tip">Use field name</Badge>
====
  {FIELD} 0x08
   {TYPE} [FIELD_BOOL](/constants/memory-field-types.md)
   {DESC} Is this layer currently hidden? <Badge type="tip">Use field isHidden</Badge>
====
  {FIELD} 0x0A
   {TYPE} [FIELD_WORD](/constants/memory-field-types.md)
   {DESC} Unknown
====
  {FIELD} 0x0C
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} Layer X-Speed <Badge type="tip">Use field speedX</Badge>
====
  {FIELD} 0x10
   {TYPE} [FIELD_DFLOAT](/constants/memory-field-types.md)
   {DESC} Layer Y-Speed <Badge type="tip">Use field speedY</Badge>
-->

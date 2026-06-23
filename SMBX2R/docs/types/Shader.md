# Shader

Shaders are visual effects handled by the user's graphics card that can be used in Graphics.glDraw, as well as rendering calls that use Graphics.glDraw under the hood.

Lunalua uses vertex and fragment shaders that are written in GLSL. First the vertex shader (if defined) runs for each vertex of the drawn polygon, then the fragment shader runs for each pixel within the area defied by the polygon. At the top of each file, #version 120 must be specified.

## Vertex Shader

The vertex shader sets up TexCoord, Position and FrontColor values for the fragment shader. These values should be set somewhere in the main function.

```glsl
#version 120

void main()
{    
	gl_TexCoord[0] = gl_TextureMatrix[0] * gl_MultiTexCoord0;
	gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;
	gl_FrontColor = gl_Color;
}
```

TODO: Values provided to vertex shaders.

## Fragment Shader

The fragment shader sets up the final color for each pixel. This value should be set somewhere in the main function.

```glsl
#version 120
uniform sampler2D iChannel0;

void main()
{
	vec4 c = texture2D(iChannel0, gl_TexCoord[0].xy);
	
	gl_FragColor = c * gl_Color;
}
```

TODO: Values provided to fragment shaders.

## Lua-side

### Constructor

You can either use static functions or instance methods to compile your shader.

```lua
local myShader = Shader.fromFile(vertexShaderFileName, fragmentShaderFileName)

-- or alternatively
local myShader = Shader()
myShader:compileFromFile(vertexShaderFileName, fragmentShaderFileName)
```

To draw using your shader, supply the shader as the shader argument to a draw call.

### Static Functions

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} Shader.fromFile(

[string](/types/string.md) vertexShaderFilename,

[string](/types/string.md) fragmentShaderFilename

)
    {RET} [nil](/types/nil.md)
   {DESC} Compiles a new shader given the respective vertex and fragment shader source files. Nil can be supplied to either argument to ignore that type of shader code.
====
   {NAME} Shader.fromSource(

[string](/types/string.md) vertexShaderCode,

[string](/types/string.md) fragmentShaderCode

)
    {RET} [nil](/types/nil.md)
   {DESC} Compiles a new shader given the respective vertex and fragment shader inline defined code. Nil can be supplied to either argument to ignore that type of shader code.
{ENDTABLE}

### Instance Methods

These methods are available once the shader has been constructed. Attempting to call any of these statically will result in an error.

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} compileFromFile(

[string](/types/string.md) vertexShaderFilename,

[string](/types/string.md) fragmentShaderFilename

)
    {RET} [nil](/types/nil.md)
   {DESC} Compiles the shader given the respective vertex and fragment shader source files. Nil can be supplied to either argument to ignore that type of shader code.
====
   {NAME} compileFromSource(

[string](/types/string.md) vertexShaderCode,

[string](/types/string.md) fragmentShaderCode

)
    {RET} [nil](/types/nil.md)
   {DESC} Compiles the shader given the respective vertex and fragment shader inline defined code. Nil can be supplied to either argument to ignore that type of shader code.
====
   {NAME} getAttributeInfo()
    {RET} [AttributeInfo](/types/Shader.md#attributeuniform-info)
   {DESC} Returns a table with information of all **active** attributes. The key of the table is the variable name. The value represents another table with the specific information.
====
   {NAME} getUniformInfo()
    {RET} [AttributeInfo](/types/Shader.md#attributeuniform-info)
   {DESC} Returns a table with information of all **active** uniforms. The key of the table is the variable name. The value represents another table with the specific information.
{ENDTABLE}

### Instance Fields

| Field | Type | Description |
| --- | --- | --- |
| isCompiled | [bool](/types/bool.md) | Whether the shader has been successfully compiled. |

### Attribute/Uniform info

These are the values which you can query with the getAttributeInfo and getUniformInfo methods.

| Name | Type | Description |
| --- | --- | --- |
| id | [number](/types/number.md) | The location of the attribute/uniform. |
| type | [number](/types/number.md) | The data type of the array. |
| arrayDepth | [number](/types/number.md) | The dimension of the array. If it is not an array, then the value is 0. For an array the value is 1. |
| arrayCount | [number](/types/number.md) | How many elements the array can contain. This is only needed if the attribute/uniform is an array. |
| name | [string](/types/string.md) | The name with a possible array suffix. Same as rawName if the attribute/uniform is not an array. |
| rawName | [string](/types/string.md) | The name without any qualifier. |

### Setup

To load shaders into your code, you can use the Shader() constructor and then compile the shader:

```lua
local myShader = Shader()
myShader:compileFromFile("vertexShader.vert", "fragmentShader.frag")
```

The arguments to compileFromFile are optional, though at least one should be provided. Else there would be no effect.

Once the shader is compiled, it can be supplied as the shader argument to draw calls derivative of glDraw (or using glDraw under the hood), supplying attributes and uniforms through the respective argument to the draw call. The glDraw call's texture argument will be automatically passed to the fragment shader's iChannel0 uniform.

```lua
function onDraw()
    Graphics.drawScreen{
        shader = myShader,
        uniforms = {
            iTime = lunatime.tick()
        },
        attributes = { -- each entry in the attribute table is a table named after the attribute, containing per-vertex data
            myAttribute = {0, 0, 1, 1}
        }
    }
end
```

## Conditionals and Performance

Because of how often the code within a shader will run, performance optimization plays a key role when writing a shader.

### Logic.glsl

A common way to reduce performance overhead is to minimize uncertainty in the way the code runs. Knowing which code to execute or how often a for loop should run speeds up the execution significantly. As such, if-statements and for loops of variable length should generally be avoided.
As a supplement for if statements, math equations can be used in conjunction with a mix statement. For this, the library logic.glsl is included in basegame by default. The below example renders a different color depending on whether the value of the iTime uniform is greater than 50.

```glsl
#version 120

#include "shaders/logic.glsl"

uniform float iTime;

void main() {
    vec4 col = mix(vec4(1), vec4(0), gt(iTime, 50))
    gl_FragColor = col;
}
```

#### Available functions through logic.glsl

All functions take two float values and return either 1 or 0, corresponding to whether the condition was or was not met.

| Name | Description |
| --- | --- |
| lt | Is a less than b? |
| le | Is a less than or equal to b? |
| gt | Is a greater than b? |
| ge | Is a greater than or equal to b? |
| and | Returns 1 only if a and b are also 1. |
| or | Returns 1 if either a or b are 1. |
| xor | Returns 1 if only one of a or b is 1. |
| nt | Returns 0 if the input is 1, 1 if the input is 0. |
| eq | Returns 1 if a is equal to b. |
| neq | Returns 1 if a is not equal to b. |
# Load Screen Environment

In SMBX2 it's possible to create a custom loading screen for an episode by creating a file called loadscreen.lua and placing it in the episode's main directory.

Since the load screen should not take a long time to be loaded, it only has access to a stripped-down version of LunaLua.

The following things are supported:

- [Global Memory](/reference/global-memory.md)
- [Graphics](/reference/graphics.md)
- [Misc](/reference/misc.md)
- Loading libraries that conform to these restrictions
- Native lua libraries, like io and math.

The only lunalua event exposed to load screens is onDraw.

Load screens also have no concept of a dedicated folder for assets by default. However, this can be remedied by creating the path manually:

```lua
local loadScreenPath = mem(0x00B2C61C, FIELD_STRING) .. "loadscreen/"
```
This path can be prepended to assets placed in a "loadscreen" folder in the main episode directory.
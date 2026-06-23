# SMBX Version

The SMBX version constants help in making version-specific code. They represent a numeric value, meaning that comparison operators will work for running code on, for example, "all versions older than X".

<Note type="warning">You should check for the existence of these constants before using them, as shown below. Older versions do not include the constants for future versions.</Note>

```lua
if not VER_BETA4 or SMBX_VERSION <= VER_BETA4 then
    -- Execute old code.
end
```

| Constant | Description |
| --- | --- |
| SMBX_VERSION | Represents the current version. |
| VER_BETA5_PATCH_4 | SMBX2 2.0.0.b5.4 | 
| VER_BETA5_PATCH_4_RC | SMBX2 2.0.0.b5.4-RC | 
| VER_BETA5_PATCH_3 | SMBX2 2.0.0.b5.3 | 
| VER_BETA5_PATCH_2 | SMBX2 2.0.0.b5.2 | 
| VER_BETA5_PATCH_1_2 | SMBX2 2.0.0.b5.1.2 | 
| VER_BETA5_PATCH_1_1 | SMBX2 2.0.0.b5.1.1 | 
| VER_BETA5_PATCH_1 | SMBX2 2.0.0.b5.1 | 
| VER_BETA5 | SMBX2 2.0.0.b5 | 
| VER_BETA4_PATCH_4_1 | SMBX2 2.0.0.b4.4.1 |
| VER_BETA4_PATCH_4 | SMBX2 2.0.0.b4.4 |
| VER_BETA4_PATCH_3_1 | SMBX2 2.0.0.b4.3.1 |
| VER_BETA4_PATCH_3 | SMBX2 2.0.0.b4.3 |
| VER_BETA4_PATCH_2_1 | SMBX2 2.0.0.b4.2.1 |
| VER_BETA4_PATCH_2 | SMBX2 2.0.0.b4.2 |
| VER_BETA4_HOTFIX | SMBX2 2.0.0.b4.1 |
| VER_BETA4 | SMBX2 2.0.0.b4 |
| VER_PAL_HOTFIX | SMBX2 2.0.0.b4.p2.0.1 |
| VER_PAL | SMBX2 2.0.0.b4.p2 |
| VER_MAGLX3 | SMBX2 2.0.0.b4.p1 |
| VER_BETA3 | SMBX2 2.0.0.b3 |
| VER_BETA2 | SMBX2 2.0.0.b2 |
| VER_BETA1 | SMBX2 2.0.0.b1 |

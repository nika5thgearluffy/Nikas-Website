# Coordinate Spaces

The term coordinate space describes the plane on which coordinates in the game are mapped.
The SMBX coordinate system is two-dimensional, with X-coordinates increasing towards the right, and Y-coordinates increasing towards the bottom. When talking about coordinates, x is generally mentioned before y.

![SMBX Coordinate System](/images/concepts/coordinate-system.png)

SMBX natively has three coordinate spaces that derive from this.

## Screen-space coordinates

Screen-space coordinates are the coordinates relative to SMBX's 800x600 pixel large screen window. The top-left corner is the coordinate (0,0), and the bottom right corner is (800,600). This coordinate space is useful for screen overlay effects and singleplayer HUDs.

## Camera-space coordinates

Camera-space coordinates are a variation on screen-space coordinates. Instead of capturing the entire 800x600 pixel area, a camera's coordinate system ranges from (0,0) in the top left to (width, height) in the bottom right. Here, width and height may change depending on the number of cameras and where they are placed relative to one another.
For example, with two cameras in multiplayer side-by-side, both cameras will be shrunk to 400 pixels in width (adding up to the 800 pixel width of the screen as a whole).
This coordinate space is useful for multiplayer HUDs.

## Scene-space (Level/World) coordinates

The scene-space coordinate system is used by all entities in the game, be it NPCs, players, blocks or world map tiles. It's what is used to determine how all these objects are positioned in relation to one another.
Within SMBX's scene-space coordinate system, numbers quickly get quite large. This is because SMBX internally positions all its sections in a diagonal row, (20000, 20000) pixels apart from one another.

![SMBX Level Coordinate Space](/images/concepts/level-coordinate-space.png)

As such, Section 0 starts out at coordinates (-200000, -200600) (the 600 pixels on the y-axis are because the bottom of the first screen is what aligns with the round numbers).
Hardcoding coordinates in this system can be cumbersome due to how big they get. If you need a static reference to a scene-space coordinate, it's recommended to either attach it to some kind of object or use the "Copy Preferences" option in the editor's object selection context menu to copy out a coordinate.
This coordinate space is useful for anything interacting with entities in the game, or coexisting with it. A few examples include: Custom NPCs, position checks, and most particle effects.

### World maps

World maps use the same coordinate space. However, as world maps only have one section, the origin of the world map is at (0,0) on the coordinate system.
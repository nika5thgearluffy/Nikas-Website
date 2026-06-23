# Player Sprite Offsets

Previously, in SMBX 1.3, player sprites were always
anchored to the top left of a 100x100 pixel grid cell. This limitation
made it difficult to work with character sprites of different
dimensions, as player sprites would frequently dip into the ground from
the lack of vertical grid space.

![](images/image23.png)

SMBX2’s editor provides a tool that helps address this.
The tool is located in data/pge/pge\_calibrator.exe and opens up this
GUI:

![](images/image7.png)

MrDoubleA has created uniform offsets for all base characters, to make working with custom character sprites easier. If these offsets work for your use case, you may not need to use the calibrator tool at all.
[https://www.smbxgame.com/forums/viewtopic.php?t=26127](https://www.smbxgame.com/forums/viewtopic.php?t=26127)

## Using the calibrator tool

First, load a spritesheet into the calibrator using the “open
sprite” button in the lower right. Once a player spritesheet is loaded,
a cell from the sheet is displayed on the right. As you can see here,
Luigi is already positioned much more centered on the grid than Mario
from earlier. The position on the grid is something you can help
visualise for yourself [using this
overlay](https://i.imgur.com/1dnW3g3.png).
Good practice is to make sure that where you want your hitbox to be is
in the same position for every cell. It saves a lot of work later
on\!

The general workflow with this program is as
follows:

1.  Select a frame on the character matrix. This will open an
    overlay where you can see all frames on the sheet. Make sure to
    check the checkboxes next to all sprites you want to use, and select
    one to begin
    working![](images/image13.png)
2.  Once you have your first sprite selected, hit the
    “Edit” button to enable hitbox modification for your entire
    spritesheet.
3.  Now it’s time to configure the global defaults for
    width, height and height while ducking. All units are measured in
    pixels. Focus for now on the character dimensions. It helps to jump
    ahead to “GFX Offsets of Frame” to try and roughly align the hitbox
    with the player, making sure the green rectangle covers the solid
    collision box you want. Hint: It’s often a good idea to make the
    hitbox slightly smaller than the sprite, to give players some
    leeway. Take notice of how Luigi’s arms and head are sticking out of
    the green rectangle a bit.  
    These dimensions are uniform across the entire spritesheet, so
    setting them up is a one-time manner.
4.  Next up are grab offsets. Unfortunately, it isn’t
    possible to switch from “top” to “side” type at the moment (it does
    nothing). You can also not change the offset for characters that use
    “top” offsets natively (Toad, Peach). You can change the offsets for
    characters based on Mario or Luigi, however. That’s how Wario’s
    Wario-Land-Style grab offset was made in SMBX2\!
5.  This lower section includes values unique to each
    frame. It is where having a uniform offset on the spritesheet really
    helps out. Because if your sprites are aligned well, you are able to
    use the same offset values for each frame. “Is duck frame” and
    “right direction” should also be checked where appropriate. Their
    names explain their function pretty well. The third checkbox doesn’t
    affect anything. Repeat this section for every sprite you use on the
    sheet.
6.  Now you can save the spritesheet with the button on
    the lower right\! This will save a .ini file named after the
    spritesheet you edited. If this file is in your level or episode
    directoy, SMBX2 will automatically load it for the character and
    powerup it’s named after\!

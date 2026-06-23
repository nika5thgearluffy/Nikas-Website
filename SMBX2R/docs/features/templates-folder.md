# The \_templates Folder

This folder includes templates for various files used by SMBX2. You can copy them into your level folder and modify them, to make it easier to create new achievements, NPCs and others.

## ach-n.ini

Template for an achievement definition. When put into
an episode’s “achievements” folder, this will show up as one of the
achievements on the launcher. For more information on achievements, see [here](/features/achievements.md).

## Dummy.png

A generic image file referred to in multiple other
configuration files in the dummy folder. Only needs to be copied for
testing before the image is replaced.

## background2-n.ini, background2-n.txt

A template for [parallaxing backgrounds](/features/parallaxing-backgrounds.md). Copy it and Dummy.png to your level folder and rename the “n” in the file to the number of the background you want to replace, then make changes to the file until you get the desired result! You should, however, delete all the fields you aren’t using, since some will override others and give unexpected results!

## background-n.ini, background-n.txt

A template for new BGOs in the [custom range](/concepts/custom-range.md). Take a look in the files after copying them over to your level
folder to see different customization options. The “ini” file determines
the editor appearance, while the “txt” file has effects on the game
while it’s played. Rename the “n” in the files to the ID you wish to
occupy and make sure the BGO has an image file associated with it (for
example background-751.png).

## Block-n.lua, block-n.ini

A template for new Blocks in the [custom range](/concepts/custom-range.md)
detailed below. Rename the “n” in the file to the number of the Block ID
you want to occupy and make sure the Block has a corresponding image
file associated with it. The example block-n.lua will simply destroy the
block as a check to see if everything works. The “ini” file determines
the editor appearance, while the “lua” file has effects on the game
while it’s played.

## block-n.txt

A template for a Block config file for existing Blocks.
Includes defaults for all configurable options. Excess options can be
removed.

## npc-n.lua, npc-n.ini

A template for new NPCs in the [custom range](/concepts/custom-range.md). Rename the “n” in the file to the number of the NPC ID you want
to occupy and make sure the NPC has a corresponding image file
associated with it. The example npc-n.lua will simply jump up and down
in place, as a check to see if everything works. The “ini” file
determines the editor appearance, while the “lua” file has effects on
the game while it’s played.

## npc-n.txt

A template for a NPC config file for existing NPCs.
Includes defaults for all configurable options. Excess options can be
removed.

## example.lua

A template for a LunaLua library file. Contains various
example functions, but doesn’t do anything by itself. Copy the file over
and load it to get started more easily with creating your own
libraries.

## particles\_example.ini, ribbon\_example.ini

Configuration files for particle emitters and ribbon
trails for the particles library discussed further below in the
handbook. Copy the files over and play around with the configuration
options to get a feel for how the systems are set up\! Don’t forget to
load the emitter and draw it, too!

## music.ini/sounds.ini

Configuration files for the global music/sound locations.
No longer necessary for replacing music and sounds, as they now get replaced when named the same as their basegame counterparts.

## standard.vert, standard.frag

Example files for GLSL shaders. Shaders and the details
of these files are discussed further in the Shader Programming section
of the handbook.
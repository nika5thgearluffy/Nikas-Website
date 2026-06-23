# Editor

The Editor can sometimes be a tricky UI to navigate. If
you know where to look, however, you will be able to find what you need
fairly quickly. Below are some pointers to the most important features
of the editor.

## Important buttons and options

The following options in the editor are among the most
commonly used ones. You can learn about the functions of the buttons
that are not listed by hovering over them for a second.

-----

![](images/image36.png)<br />
The button with this icon opens the Tileset Itembox,
the main method of adding objects to a level. Its functionality is
further explained in a later segment.

-----

![](images/image31.png)![](images/image20.png)<br />
Before you can test your level, you need to place a
start point for the first player. Green Mario’s start point is
optional.

-----

![](images/image11.png)![](images/image14.png)<br />
These buttons are used to draw zones of water and
quicksand respectively. These zones can be moved and resized after
placement, too.

-----

![](images/image16.png)<br />
Opens the “Warps and Doors” window, in which warps can
be configured. There are various unsupported features in this window,
all of which are further detailed in the “Unsupported Features” segment
below.

-----

![](images/image41.png)<br />
Opens the “Section Settings” window, in which various
section-specific properties can be configured. Unsupported features of
this window are listed in the “unsupported Features” segment.

-----

![](images/image1.png)![](images/image5.png)<br />
Open the “Layers” and “Events” windows respectively.
Together, these can be used to create moving layers and toggle layer
visibility. Events can further be used to play sound effects, lock
player input, manipulate the section and even execute lua code (using
LunaLua’s onEvent event).

-----

![](images/image25.png)<br />
The section buttons transport you to the specified
section instantly. 

-----

![](images/image38.png)<br />
Enabling a lock will prevent any of the tiles of that
type to be interacted with. From left to right, the locks are: Blocks,
Background Objects, NPCs, Warps, Liquids.

-----

![](images/image10.png)<br />
“Snap to grid” and manipulation of grid size can be
used for more granular placement of elements such as blocks and
background objects. “Default by item” describes the default grid
alginment option.

-----

![](images/image35.png)<br />
If you are starting to notice that the editor is
lagging, disabling the animation with a click of this button should
help\!

-----

![](images/image18.png)<br />
Opens (and, if necessary, creates) a lunalua script in
the level folder of the currently active level.

-----

![](images/image6.png)<br />
Changes the editor’s language. Translations may not
always be perfectly accurate, but if English doesn’t do the job for you,
hopefully you will be able to find your way around more easily with a
different language\!

## Setting Up Your Level Folder

In order to use custom assets in your level, you best
adhere to the recommended folder structure. The following figure
displays what is often referred to as the “Episode Folder” (since, if
this level were part of an episode, it would be the directory in which
every level would be located).

![](images/image4.png)<br />
Make sure you’re using lvlx files rather than the old
lvl file format. The old format doesn’t support various new features,
like per-npc behaviour settings for certain NPCs.

Above the .lvlx file is a folder using the same name as
the level file. This folder is what’s called a “Level Folder”. In it you
can place custom assets which will be applied locally to the
level:

![](images/image15.png)<br />
From lua scripts, to custom graphics, to music - any
custom asset for the level should be placed in here to make it obvious
which level what assets belong to.

If you are already testing your level in the editor and are making
changes to the custom graphics in the level folder while editing, you
need to press the
F8 key in order to
refresh the contents of the level folder, in order to get them to
display properly in the
editor.

## Using the Tileset Itembox

The Tileset Itembox is the main container for all
elements accessible in SMBX2.

![](images/image40.png)<br />
By switching between the different tabs, you are able
to navigate to the items you want to place in your level.

-----

Please keep in mind that level-specific gameplay elements cannot be used when building an overworld, and overworld-specific elements cannot be used when building a level.

-----

Even though quick access to all features is nice, there
is still a lot of clicking involved in order to get to the items you
want to access. This is where the “Custom” tab is helpful.

![](images/image21.png)

With a press of this button, you will be brought into a
Tileset Editor, in which you can create your own tilesets of any
kind.

The editor features a search bar, with which you can
search by an item’s name, as well as its ID. You can also filter tiles
in order to only show sprites with custom assets, or sprites without.
After giving the tileset a name and hitting “Save”, it will be saved
into the level folder and the tileset will automatically be displayed as
part of the “Custom” tab in the Tileset Itembox.

![](images/image39.png)

![](images/image9.png)
# How to: Custom entities

This page gives a brief overview for beginners over how to set up a custom entity. By entity, this guide refers to Blocks and NPCs, though its ideas are mostly applicable for modifying BGOs, Players and other entities as well.

Required knowledge. Please familiarize yourself with these pages before reading further.

- [Tables](/types/table.md)
- [Data Table](/concepts/data-table.md)
- [Custom Range](/concepts/custom-range.md)
- [Templates Folder](/features/templates-folder.md)
- [Level/Episode Folder](/concepts/level-episode-folder.md)
- [Extra Settings](/concepts/extra-settings.md)
- [Libraries](/concepts/libraries.md)

Relevant knowledge. Please keep these pages open in another tab while reading, as information from these pages may be referenced at times.

- [Editor Configurations](/concepts/editor-configurations.md)

You can read this guide as either a guide for making a custom block, or a custom NPC. Among the two, choose which pages suit your needs.

- [Block Config](/features/block-config.md)
- [Block Class](/reference/block.md)
- [Blockutils.lua](/modules/blockutils.md)
- [NPC Config](/features/npc-config.md)
- [NPC Class](/reference/npc.md)
- [Npcutils.lua](/modules/npcutils.md)

## Step 1: Copy your template from the templates folder

The templates folder (data/_templates directory) contains a lot of useful files which can help kickstart the creation of your custom entity. Navigate to it and observe the files therein. Many aren't useful for our needs in this guide, so focus on the following set of files.
- Dummy.png
- block-n.ini/npc-n.ini
- block-n.lua/npc-n.lua

You might also notice block/npc-n.txt files. These files are primarily useful when modifying existing Blocks or NPCs. When creating our own, we define the configuration within the lua file and thus don't need a separate txt file to house them.

Once you have chosen the three files you need, copy them over into your level or episode folder.
Going forward this guide will mostly be referring to your entity as an NPC, but keep in mind that this works for Blocks as well.

### Step 1.1: Choose an ID, rename the files

Using the ID "n" as these files currently do won't do. We'll need to select a new ID in the custom range (between 751 and 1000 for Blocks and NPCs) and rename the files. For the purpose of this guide, I will use 751. Also rename Dummy.png to match the naming convention of the other two files. For example:
- npc-751.png
- npc-751.ini
- npc-751.lua

One last thing needs renaming. Open the npc-751.ini (or whatever custom range ID you gave it) and change the "image" tag's target to match the name of the png file. This will make sure the NPC image shows up correctly in the editor.

## Step 2: Import your spritesheet, make sure it shows up right

The now-renamed npc-751.png doesn't look like your desired NPC yet. Open the file in your image editing software of choice, and edit it to suit your needs. Make sure to follow the conventions of SMBX spritesheets: Frames are stacked vertically and have the same dimensions.

![How to: Spritesheet format](/images/guides/howto_spritesheet.png)

After adjusting your spritesheet, make sure to edit the .ini and .lua file's config block to set the visual properties such as frames, framestyle, framespeed, width, height, gfxwidth, gfxheight, gfxoffsetx and gfxoffsety to match your spritesheet.

Once everything is correctly configured, your NPC should show up in the editor (.ini) and game (.lua) and animate correctly.

## Step 3: Further adjust NPC config

SMBX2 has a lot of NPC config to choose from to customize an NPC's out-of-the-box behaviour. Take a look over the configs in the template and use any that seem like they would fit your NPC. For example, the nogravity config is useful when making a flying NPC, and the iswalker config applies the movement of a Goomba without requiring any extra code.

## Step 4: Configuring vulnerable harm types

Below the NPC config block in the lua file is a section where harm types are configured for the NPC. Here you can set what your NPC should take damage from. Uncomment any lines that would be relevant to your NPC.

## Step 5: Writing the logic of the NPC

If you run the game now you will notice that your NPC jumps (or your Block gets hit immediately). That's odd. There is nothing you did. Don't worry, though! All this means is that so far, everything is working as intended.
This is a test script that serves the function of letting you know that your code runs and the setup is done. Take a look at "onTickNPC" or "onTickBlock" near the bottom of the script. The debug behaviour is below the "Execute Main AI" comment and can be safely removed.

In its place, you want to include your own logic. This is where your own creativity and knowledge comes into play.

If you are new to making custom entities, I recommend trying some of the practice entities in the section below.

### Initializing your data variables

If you are using variables like timers, colliders or state variables, they are best initialized in the "initialization block".
In the template, this is the if-statement "if not data.initialized then". It runs when the NPC gets initialized and is thus perfect for resetting any variables you want to use in your logic.

### State machines

NPCs commonly use something called a "state machine" to execute their logic. State machines are a concept in computer science that separates a logic of an NPC into distinct states. For example, a Snifit NPC has the states "Walk" and "Shoot".

State machines are commonly implemented using a "timer" and a "state" variable, which combine into an if-else chain that separate the states:

```lua
-- in onTickNPC

if data.state == 0 then
    -- Perform a jump when the timer hits 100
    if data.timer > 100 then
        data.state = 1
        data.timer = 0
        v.speedY = -12
        v.speedX = 4 * v.direction
    end
else if data.state == 1 then
    -- Wait, until landing back on the ground
    if data.timer > 2 and v.collidesBlockBottom then
        data.state = 0
        data.timer = 0
        v.speedX = 0
    end
end
data.timer = data.timer + 1
```

Using this simple construction, context-sensitive states can be easily constructed, and it is easy to keep an overview over what the NPC is supposed to do at any given moment.

### Practice Examples

Here are some descriptions of NPC behaviour that serve to introduce you to creating entities. They are in ascending order of difficulty and gradually require more knowledge of lunalua functions.

#### NPCs

- An NPC that behaves like a Goomba (NPC config manipulation)
- An NPC that behaves like a Goomba, but turns around every 2 seconds (Use timers and a state machine)
- An NPC that behaves like a Snifit, but shoots a Bowser's Statue Fireball and plays a sound when doing so (see: NPC.spawn, SFX.play)
- An NPC that chases the player (see: Player.getNearest, npc.direction)
- An NPC that chases the player and can jump up and over ledges (see: Block.getIntersecting)
- An NPC that, when placed in the air, gently descends to the ground and explodes on impact (see: Explosion.spawn, nogravity config)
- An NPC that swims when underwater and walks on land (see: v.underwater, using nowaterphysics config)
- An NPC that has 3 HP (see: onNPCHarm event)
- An NPC that has 3 HP, but the HP can be configured using editor Extra Settings (see: Extra settings)
- An NPC that uses 2 IDs: The first ID walks around and turns into the second ID when hit. The second ID acts as a bomb, exploding on a timer (no extra tools to the previous ones, just more complex)

#### Blocks

- A block that is passthrough and sizeable (Block config manipulation)
- A block that turns into another custom block when hit (see: onPostBlockHit)
- A block that can only be hit when the player has a fire flower (see: cancelling onBlockHit)
- A block that toggles to another block when the player jumps, and vice-versa (using onTick, not onTickBlock, for performance, by checking the player's jump first (2 IDs))
- A passthrough block that turns semisolid when an NPC overlaps with it for the first time (onIntersectBlock (2 IDs))
- The above block, but the ID of NPC that triggers the change depends on Extra settings (see: Extra settings)

## Step 6: Edge case testing

After finishing your entity, it's time to celebrate. Great job! Even making a simple entity shows great understanding of lunalua and programming. At this point, you might be looking to release your creation to share it with the community. For this purpose, I recommend taking some extra time to test various edge cases in the NPC logic.

The [SMBX2 Progress Sheet](https://docs.google.com/spreadsheets/d/1GiNoNS1Zlrw5I1kJxbSywXaRQ17Xp_XDsJmsYM1_vOI/edit#gid=2143263124) has a section for our "NPC Checklist", which is what the developers use to check various edge cases. They place the NPC in these niche situations and test if everything goes according to plan. Sometimes NPCs don't behave quite right when held or being generated, and the code needs to be tweaked as a result.

While the solution for every edge case and NPC is different, the adjacent "NPC Checklist Help" sheet on the above linked spreadsheet contains notes on how various common edge cases can be tackled.

And once you have solved the edge cases, you're done for real! Great work!
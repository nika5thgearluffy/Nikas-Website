# How to: Using Draw Functions

This page gives a brief overview for beginners over how to draw your own images to the screen, or the game world. This page covers the Graphics.drawImage family of functions, as well as some glDraw-related applications. It does not cover use of the [Sprite Class](/reference/sprite.md).

Required knowledge. Please familiarize yourself with these pages before reading further.

- [Graphics](/reference/graphics.md)
- [Texture](/types/texture.md)
- [Misc](/reference/misc.md)
- [Level/Episode Folder](/concepts/level-episode-folder.md)

## Step 1: Create an image, place it in your level or episode folder

You can use an image from the internet or use an image editing tool such as Aseprite, Paint.NET, Gimp or Photoshop to create your own or edit an existing image. It's best to use a tool that supports layers and transparency (not MSPaint).

You should save the image in your level folder if you want to use it for that level only, or your episode folder if you want to use it for your entire episode. The name doesn't matter, but it should be relevant to what the purpose of the image is. The extension should be .png.

For the next steps, we'll use the following file name:
```md
testImage.png
```

It is possible to save images into subdirectories as well, but if you do this you have to specify the subdirectory when loading the image, like "subdirectory/testImage.png".

## Step 2: Loading the image in your code

Loading the image is a simple call to a Graphics.loadImage-related function.

```lua
-- Case 1: The file is in the level or episode folder
-- Method 1
local myImg = Graphics.loadImage("testImage.png")
-- Method 2
local myImg = Graphics.loadImage(Misc.resolveFile("testImage.png"))
-- Method 3
local myImg = Graphics.loadImageResolved("testImage.png")
-- Case 2: The file is in a subdirectory
-- Method 1
local myImg = Graphics.loadImage("subfolder/testImage.png")
-- Method 2
local myImg = Graphics.loadImage(Misc.resolveFile("subfolder/testImage.png"))
-- Method 3
local myImg = Graphics.loadImageResolved("subfolder/testImage.png")
```

Each of the above lines will create that variable for you to use for drawing the image later. There are some nuances, though.
Method 1 will fail if the image or the subfolder is in the episode folder, as by default Graphics.loadImage only searches in the level folder. Thus using loadImageResolved is recommended when you might want your image to be drawn in all levels of an episode.

## Step 3: Drawing the image

Now that you have the loaded image, it is time to draw it.

```lua
local myImg = Graphics.loadImageResolved("testImage.png")

function onDraw()
    Graphics.drawImage(myImg, 0, 0)
end
```

OnDraw is a LunaLua event that runs every frame and is perfect for drawing images. Since it runs every frame, we don't want to have to load the image every frame as well. Hence why the first line is above the onDraw.

This code will draw the test image into the top left corner of the screen. The 0,0 specify x and y coordinates of 0.

There are many variations of Graphics.drawImage with different properties. Here are a couple ways to change the onDraw call for different results:
```lua
Graphics.drawImage(myImg, 0, 0, 0.5) -- Draws the image at half opacity
Graphics.drawImageWP(myImg, 0, 0, -95) -- Draws the image in the far back
Graphics.drawImageWP(myImg, 0, 0, 0.5, -95) -- Draws the image in the far back, at half priority
Graphics.drawImageToSceneWP(myImg, player.x, player.y, -95) -- Draws the image in the far back, anchored to the first player's top-left corner.
Graphics.drawImage(myImg, 400 - myImg.width, 300 - myImg.height / 8, myImg.height/4, myImg.width, myImg.height/4, 10) -- Draws the 2nd frame of a 4-frame image to a very high priority, to the center of the screen.
```

The Graphics.draw function provides an alternative to Graphics.drawImage and Text.print functions that utilizes named arguments. The functionality is the same. The next portions will use Graphics.draw for clarity.

## Bonus 1: Making it move

Drawing a static image is cool by itself, but one characteristic of many images in games is that they change over time. The trick to doing this is to not use numbers, but instead variables for the x and y position of the image.

One of the prior examples accomplishes this by setting the x and y to the position of the player, but making images move is not limited to the objects already in the game:

```lua
local myImg = Graphics.loadImageResolved("testImage.png")
local myImgPosition = vector(400, 300) -- this vector defines a x and y coordinate for our image

-- Move in a circle, but not when the game is paused!
function onTick()
    myImgPosition.x = math.sin(lunatime.tick() / 10) * 64
    myImgPosition.y = math.cos(lunatime.tick() / 10) * 64
end

function onDraw()
    -- Subtracting half the dimensions of the drawn image makes it centered on myImgPosition
    Graphics.draw{
        type= RTYPE_IMAGE,
        x = 400 - 0.5 * myImg.width,
        y = 300 - 0.5 * myImg.height,
        priority = 5
    }
end
```

## Bonus 2: Frames

The last example of Step 3 included some esoteric divisions to fill in some extra arguments for the drawImage call to draw a subsection of the image. In draw functions that use named args, these are called "sourceX", "sourceY", "sourceWidth" and "sourceHeight". As in, the x,y,width and height of the source image spritesheet section to draw. Using a common math formula we can imitate the rendering of, say, a Goomba:

```lua
-- Try it for yourself!
function onDraw()
    local config = NPC.config[1]
    local img = Graphics.sprites.npc[1].img
    local width, height, frames = config.gfxwidth, config.gfxheight, config.frames

    -- These values may be 0 in 1.3 NPC configs!
    if width == 0 then
        width = config.width
    end
    if height == 0 then
        height = config.height
    end
    if frames == 0 then
        frames = math.floor(img.height / config.height)
    end


    local frame = math.floor(lunatime.tick() / config.framespeed) % frames

    Graphics.draw{
        type= RTYPE_IMAGE,
        image = img,
        x = player.x + 0.5 * player.width - 0.5 * width,
        y = player.y - height,
        sceneCoords = true,
        sourceX = 0,
        sourceY = height * frame,
        sourceWidth = width,
        sourceHeight = height,
        priority = 5
    }
end
```

To briefly break down this formula:
```lua
local frame = math.floor(timer / framespeed) % numFramesInLoop + offset
```
Using a timer, it divides it by how many frames should happen between a frame ticking over. The math.floor() ensures we don't draw between frames. % numFramesInLoop limits the frame to a number between 0 and the frame count - 1. Optionally, an offset can be added to move this range. For example a 4-frame loop of 0,1,2,3 to a loop of 3,4,5,6 (with an offset of 3).

## Bonus 3: Scaling, Rotation

The Graphics.draw and Graphics.drawImage functions are limited to exact replications of the source image. For scaling and rotation, it is necessary to use glDraw-based functions, including drawBox, drawScreen, drawLine, drawCircle or the Sprite class.

```lua
-- Try it for yourself!
function onDraw()
    local config = NPC.config[1]
    local img = Graphics.sprites.npc[1].img
    local width, height, frames = config.gfxwidth, config.gfxheight, config.frames

    -- These values may be 0 in 1.3 NPC configs!
    if width == 0 then
        width = config.width
    end
    if height == 0 then
        height = config.height
    end
    if frames == 0 then
        frames = math.floor(img.height / config.height)
    end


    local frame = math.floor(lunatime.tick() / config.framespeed) % frames

    Graphics.drawBox{
        type= RTYPE_IMAGE,
        texture = img,
        x = player.x + 0.5 * player.width,
        y = player.y - height,
        sceneCoords = true,
        sourceX = 0,
        sourceY = height * frame,
        sourceWidth = width,
        sourceHeight = height,
        priority = 5,
        centered = true,
        rotation = lunatime.tick(),
        width = width * 2,
        height = height * 2
    }
end
```

In addition to scaling and rotation, glDraw-based functions give you control over an image's tint, and lets you apply shaders as well (though writing your own shaders is a lot more advanced).

## Bonus 4: Fading

Graphics.glDraw-based functions simply draw color if no texture is provided. Using this knowledge it is possible to draw a screen fade in a single line:
```lua
Graphics.drawScreen{color = Color.black .. opacity, priority = 10}
```
The "opacity" variable can then be adjusted in a range from 0-1 in another section of code.

## Practice Examples

Here are some tasks that may help ease you into mastering graphics drawing in SMBX2. They are in ascending order of difficulty and gradually require more knowledge of lunalua functions.

- Draw an image of your choice anywhere on screen.
- Make the image bounce around like an [old-school DVD logo](https://www.bouncingdvdlogo.com/).
- Draw a fancy hat on top of the player.
- Using a for loop, draw a fancy hat on every enemy in the level. (Make sure to check for fields that make NPCs invisible, like isGenerator or despawnTimer <= 0)
- Using Text.print and function onPostNPCKill, draw the number of NPCs the player has killed in the level.
- Give the counter from the previous challenge [this icon](https://i.imgur.com/jBPbmtJ.png) (A skull icon with 4 frames of animation).
- Using a for loop, draw a segmented health bar for a Boom Boom NPC, with one segment per remaining health point.
- Using Graphics.drawBox's width, draw a continuous health bar for a Boom Boom NPC.
- For all BGOs of an ID, set their isHidden to true and instead re-draw their image. Using Graphics.drawBox, make the re-drawn image slowly rotate back and forth as if affected by the wind.
- Using a sprite from a sizeable block, draw a sizeable block using sourceX/Y/Width/Height to draw sub-sections of the image! The size should change over time. You can either have the edge/center segments stretched or repeating.
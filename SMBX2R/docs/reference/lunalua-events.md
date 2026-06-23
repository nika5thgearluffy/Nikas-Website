# Lunalua Events

Lunalua events (unlike SMBX events) are internally defined functions that you can add to your code files.

## Per-Tick Events

These events run every tick (sometimes under specific conditions). The timing at which they run makes them useful for different tasks.

| Event | Description |
| --- | --- |
| onInputUpdate() | Runs every tick. Executes just after input has updated, making it useful for pause menu navigation. |
| onTick() | Runs every tick the game isn't paused. Executes directly before SMBX internal code, making it useful for handling (for example) player input during gameplay. |
| onTickEnd() | Runs every tick the game isn't paused. Executes directly after SMBX internal code, making it useful for reacting to what happened in the internal loop before the scene is drawn. |
| onCameraUpdate([number](/type/number.md) camIdx) | Runs every tick, even when the game is paused. Executes once for each camera, just after the camera's position was internally updated. Good for making modifications to camera position. Passes the index of the current camera. |
| onDraw() | Runs every tick, even when the game is paused. Executes at the start of the tick's draw cycle. Useful as it's the only draw function that only executes once per tick. |
| onCameraDraw([number](/type/number.md) camIdx) | Runs every tick, even when the game is paused. Executes once for each camera, just before the scene is rendered for it. Gets the respective camera's index passed. |
| onHUDDraw([number](/type/number.md) camIdx) | Runs every tick, even when the game is paused, just before the HUD is drawn. Runs once per camera. |
| onDrawEnd() | Executes every tick after drawing has finished. As the last event of the tick, this event is useful for any cleanup necessary for this frame. |

## Triggered Events

These events only run under specific circumstances and (almost exclusively) execute during internal smbx code.

{STARTTABLE}
   {NAME} Event
   {DESC} Description
====
   {NAME} onInitAPI()
   {DESC} Runs in a library just as the library has finished loading. Useful for initializing library events (more info below).
====
   {NAME} onStart()
   {DESC} Runs at the start of the game, after all libraries have been loaded. This is the first point in time when entities like players, NPCs and blocks are loaded in.
====
   {NAME} onSaveGame()
   {DESC} Runs when the game is saved.
====
   {NAME} onSectionChange(

[number](/type/number.md) sectionIdx,

[number](/type/number.md) playerIdx

)
   {DESC} Runs when a player moves to a different section. Prefer this over onLoadSection.
====
   {NAME} onLoadSection(

[number](/type/number.md) playerIdx

)
   {DESC} Runs when any section is loaded. Just like onLoopSection, this function will be called once per player. Prefer onSectionChange.
====
   {NAME} onLoadSection#(

[number](/type/number.md) playerIdx

)
   {DESC} Runs when section # (where # is a number between 0 and 20) is loaded. Just like onLoopSection, this function will be called once per player. Prefer onSectionChange.
====
   {NAME} onEvent(

[string](/type/string.md) eventName

)
   {DESC} Executes just after next frame's onLoop when a vanilla SMBX event is called. Passes the name of the called event.
====
   {NAME} onEventDirect(

[EventToken](/types/Event.md) eventToken,

[string](/types/string.md) eventName

)
   {DESC} Executes <b>immediately</b> when a vanilla SMBX event is called. Passes the name of the called event and a token that can be used to cancel the execution of the event. <Note type="warning">Be careful not to call more events from here, as it might cause crashes.</Note>
====
   {NAME} onPostEventDirect(

[string](/types/string.md) eventName

)
   {DESC} Executes <b>immediately</b> when a vanilla SMBX event is called, just after onEventDirect successfully goes through. Passes the name of the called event. Since this event runs only when onEventDirect was not cancelled, it is useful for running code that should happen only when the event actually executed.
====
   {NAME} onMessageBox(

[EventToken](/types/Event.md) eventToken,

[string](/types/string.md) content,

[Player](/reference/player.md) player,

[NPC](/reference/NPC.md) npcTalkedTo

)
   {DESC} Executes <b>immediately</b> when a vanilla SMBX message box is scheduled to appear. Passes the content of the message box and a token that can be used to cancel the box from appearing. If a player is talking to an NPC, the respective objects are passed as the third and fourth argument.
====
   {NAME} onBlockHit(

[EventToken](/types/Event.md) eventToken,

[Block](/reference/block.md) hitBlock,

[bool](/types/bool.md) fromUpper,

[Player](/reference/player.md) playerOrNil

)
   {DESC} Executes <b>immediately</b> when a block is hit. Passes the block, whether or not it was hit from above, the player if it was the culprit, and a token that can be used to cancel the hit event. 
====
   {NAME} onPostBlockHit(

[Block](/reference/block.md) hitBlock,

[bool](/types/bool.md) fromUpper,

[Player](/reference/player.md) playerOrNil

)
   {DESC} Executes <b>immediately</b> when a block is hit, just after onBlockHit goes through. Passes the block, whether or not it was hit from above and the player if it was the culprit. Since this event runs only when onBlockHit was not cancelled, it is useful for running code that should happen only when blocks were actually hit.
====
   {NAME} onBlockRemove(

[EventToken](/types/Event.md) eventToken,

[Block](/reference/block.md) hitBlock

)
   {DESC} Executes <b>immediately</b> when a block is removed. Passes the block and a token that can be used to cancel the hit event. 
====
   {NAME} onPostBlockRemove(

[Block](/reference/block.md) hitBlock)
   {DESC} Executes <b>immediately</b> when a block is hit, just after onBlockRemove goes through. Passes the block that is being removed. Since this event runs only when onBlockRemove was not cancelled, it is useful for running code that should happen only when blocks were actually removed.
====
   {NAME} onColorSwitch(

[number](/types/number.md) color

)
   {DESC} Executes when a switch block's color is switched. Passes the switch's color as an integer. <Badge type="tip">You can use switchcolors.lua for extended switch color integration instead.</Badge>
====
   {NAME} onSyncSwitch(

[bool](/types/bool.md) active

)
   {DESC} Executes when synced switch state changes and passes the new state as a bool.
====
   {NAME} onWarp(

[Warp](/reference/warp.md) warp,

[Player](/reference/player.md) player

)
   {DESC} Executes when a warp completes (the moment of teleportation).
====
   {NAME} onWarpEnter(

[EventToken](/types/Event.md) eventToken,

[Warp](/reference/warp.md) warp,

[Player](/reference/player.md) player

)
   {DESC} Executes when a warp is initiated.
====
   {NAME} onPostWarpEnter(

[Warp](/reference/warp.md) warp,

[Player](/reference/player.md) player

)
   {DESC} Executes when a warp is initiated, if the onWarpEnter event was not cancelled.
====
   {NAME} onBeatWarn(

[number](/types/number.md) beepsLeft

)
   {DESC} Executes when a state change warning beat occurs and passes the remaining number of warning beeps after this one (last one is 0).
====
   {NAME} onBeatStateChange(

[bool](/types/bool.md) active

)
   {DESC} Executes when beat state changes and passes the new state as a bool.
====
   {NAME} onNPCHarm(

[EventToken](/types/Event.md) eventToken,

[NPC](/reference/npc.md) killedNPC,

[harmType](/constants/enemy-harm-types.md) harmType,

[Player](/reference/player.md) or [NPC](/reference/npc.md) culpritOrNil

)
   {DESC} Executes <b>immediately</b> when any NPC takes damage. Passes the NPC, the harm type causing the damage, and any culprit if it exists. Additionally, a token that can be used to cancel the hit event is passed.
====
   {NAME} onPostNPCHarm(

[NPC](/reference/npc.md) killedNPC,

[harmType](/constants/enemy-harm-types.md) harmType,

[Player](/reference/player.md) or [NPC](/reference/npc.md) culpritOrNil

)
   {DESC} Executes <b>immediately</b> when any NPC takes damage. Passes the NPC, the harm type causing the damage, and any culprit if it exists. Since this event runs only when onNPCHarm was not cancelled, it is useful for running code that should happen only when NPCs were actually hit.
====
   {NAME} onNPCTransform(

[NPC](/reference/npc.md) killedNPC,

[number](/types/number.md) oldId,

[harmType](/constants/enemy-harm-types.md) reason
)
   {DESC} Executes when any NPC changes its ID. Passes the NPC, the old ID it changed from and the harm type causing the transformation.
====
   {NAME} onNPCKill(

[EventToken](/types/Event.md) eventToken,

[NPC](/reference/npc.md) killedNPC,

[harmType](/constants/enemy-harm-types.md) harmType
)
   {DESC} Executes <b>immediately</b> when any NPC is killed. Passes the NPC, the harm type causing the kill, and a token that can be used to cancel the death.
====
   {NAME} onPostNPCKill(

[NPC](/reference/npc.md) killedNPC,

[harmType](/constants/enemy-harm-types.md) harmType

)
   {DESC} Executes <b>immediately</b> when any NPC is killed. Passes the NPC and the harm type causing the kill. Since this event runs only when onNPCHarm was not cancelled, it is useful for running code that should happen only when NPCs were actually hit.
====
   {NAME} onNPCCollect(

[EventToken](/types/Event.md) eventToken,

[NPC](/reference/npc.md) collectedNPC,

[Player](/reference/player.md) player
)
   {DESC} Executes <b>immediately</b> when any NPC is collected. Passes the NPC, the player that collected it, and a token that can be used to cancel the death.
====
   {NAME} onPostNPCCollect(

[NPC](/reference/npc.md) collectedNPC,

[Player](/reference/player.md) player

)
   {DESC} Executes <b>immediately</b> when any NPC is collected. Passes the NPC and the player that collected it. Since this event runs only when onNPCCollect was not cancelled, it is useful for running code that should happen only when NPCs were actually collected.
====
   {NAME} onPlayerHarm(

[EventToken](/types/Event.md) eventToken,

[Player](/reference/player.md) harmedPlayer

)
   {DESC} Executes <b>immediately</b> when a player takes damage. Passes the Player and a token for cancelling the damage event.
====
   {NAME} onPostPlayerHarm(

[Player](/reference/player.md) harmedPlayer

)
   {DESC} Executes <b>immediately</b> when a player takes damage. Passes the Player that takes damage. Since this event runs only when onPlayerHarm was not cancelled, it is useful for running code that should happen only when players were actually hit.
====
   {NAME} onPlayerKill(

[EventToken](/types/Event.md) eventToken,

[Player](/reference/player.md) harmedPlayer

)
   {DESC} Executes <b>immediately</b> when a player dies. Passes the Player and a token for cancelling the kill event.
====
   {NAME} onPostPlayerKill(

[Player](/reference/player.md) harmedPlayer

)
   {DESC} Executes <b>immediately</b> when a player dies. Passes the Player that died. Since this event runs only when onPlayerKill was not cancelled, it is useful for running code that should happen only when players were actually killed.
====
   {NAME} onPOW(

[EventToken](/types/Event.md) eventToken

)
   {DESC} Executes <b>immediately</b> when a POW effect happens.
====
   {NAME} onPostPOW()
   {DESC} Executes <b>immediately</b> when a POW effect happens. Since this event runs only when onPOW was not cancelled, it is useful for running code that should happen only when POW effects actually happen.
====
   {NAME} onNPCPOWHit(

[EventToken](/types/Event.md) eventToken,

[NPC](/reference/npc.md) hitNPC,

[string](/types/string.md) powtype

)
   {DESC} Executes <b>immediately</b> when a NPC gets hit by a POW effect. Passes an event token for cancellation, the NPC getting hit, and the type of POW effect that happens.
====
   {NAME} onPostNPCPOWHit(

[NPC](/reference/npc.md) hitNPC,

[string](/types/string.md) powtype

)
   {DESC} Executes <b>immediately</b> when a NPC gets hit by a POW effect. Passes the NPC getting hit, and the type of POW effect that happens. Since this event only occurs if onNPCPOWHit was not cancelled, it is useful for cases when the POW effect actually gets applied to the NPC.
====
   {NAME} onBlockPOWHit(

[EventToken](/types/Event.md) eventToken,

[Block](/reference/block.md) hitBlock,

[string](/types/string.md) powtype

)
   {DESC} Executes <b>immediately</b> when a Block gets hit by a POW effect. Passes an event token for cancellation, the Block getting hit, and the type of POW effect that happens.
====
   {NAME} onPostBlockPOWHit(

[Block](/reference/block.md) hitBlock,

[string](/types/string.md) powtype

)
   {DESC} Executes <b>immediately</b> when a Block gets hit by a POW effect. Passes the Block getting hit, and the type of POW effect that happens. Since this event only occurs if onBlockPOWHit was not cancelled, it is useful for cases when the POW effect actually gets applied to the Block.
====
   {NAME} onMouseButtonEvent(

[number](/types/number.md) mouseButton,

[number](/types/number.md) state,

[number](/types/number.md) x,

[number](/types/number.md) y

)
   {DESC} Executes when a mouse button is pressed. Passes the button index, the state of the button and its relative X and Y to the SMBX window.
====
   {NAME} onKeyboardKeyPress(

[number](/types/number.md) vkey,

[string](/types/string.md) keyname

)
   {DESC} Executes when a key on a keyboard is pressed, passing the virtual keycode and the string representing the alphanumeric key, if applicable.
====
   {NAME} onKeyboardKeyRelease(

[number](/types/number.md) vkey,

[string](/types/string.md) keyname

)
   {DESC} Executes when a key on a keyboard is released, passing the virtual keycode and the string representing the alphanumeric key, if applicable.
====
   {NAME} onKeyboardPress(

[VKey](https://docs.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes) keyCode

)
   {DESC} Executes when a key on the keyboard is pressed. Since there is no onKeyboardUp event, the way to check for key releases is to use Misc.GetKeyState.
====
   {NAME} onKeyboardPressDirect(

[VKey](https://docs.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes) keyCode,

[bool](/types/bool.md) isARepetitionDueToHolding,

[string](/types/string.md) char

)
   {DESC} Executes when a key on the keyboard is pressed. This event is called when a key on the keyboard is pressed. Unlike onKeyboardPress, this event will work while the game is frozen with Misc.pause(). Since there is no onKeyboardUp event, the way to check for key releases is to use Misc.GetKeyState. The third argument represents the string typed by the keystroke. May be nil if the pressed key does not result in typed characters, and may be more than one character for some input methods in some languages.
====
   {NAME} onPasteText(

[string](/types/string.md) pastedText

)
   {DESC} Executes when text is pasted into the game using CTRL + V.
====
   {NAME} onControllerButtonPress(

[number](/types/number.md) button,

[number](/types/number.md) playerIdx,

[string](/types/string.md) controllerName

)
   {DESC} Executes when a key on a controller is pressed, passing a number for a button, the player index the controller is registered to (0 if none), and the name describing the type of controller it is.
====
   {NAME} onControllerButtonRelease(

[number](/types/number.md) button,

[number](/types/number.md) playerIdx,

[string](/types/string.md) controllerName

)
   {DESC} Executes when a key on a controller is released, passing a number for a button, the player index the controller is registered to (0 if none), and the name describing the type of controller it is.
====
   {NAME} onChangeController(

[string](/types/string.md) controllerName,

[number](/types/number.md) playerIdx

)
   {DESC} Executes when the given player switches controllers.
====
   {NAME} onCheckpoint(

[Checkpoint](/reference/checkpoint) checkpoint,

[Player](/reference/Player) player

)
   {DESC} Executes when a player touches a checkpoint. Passes the checkpoint object (not the NPC) and the player that touched the checkpoint.
====
   {NAME} onExit()
   {DESC} Executes just before the level or world map unloads.
====
   {NAME} onExitLevel(

[number](/types/number.md) levelWinType

)
   {DESC} Executes just before the level unloads. The levelWinType is according to the [LEVEL_WIN_TYPE_*](/constants/level-victory#level-win-type) constants.
====
   {NAME} onPause(

[EventToken](/types/Event.md) eventToken,

[Player](/reference/player.md) pausingPlayer

)
   {DESC} Executes <b>immediately</b> when a player pauses the game. Passes the Player and a token for cancelling the pausing event. <Note type="warning">This event is not called when testing in the editor. As a workaround, poll for and change Player.keys.pause in onInputUpdate().</Note>
====
   {NAME} onExplosion(

[EventToken](/types/Event.md) eventToken,

[Explosion](/reference/explosion.md) explosion,

[Player](/reference/player.md) playerSource

)
   {DESC} Executes <b>immediately</b> when an explosion happens. Passes an event token for cancelling the explosion, as well as the explosion object itself and the player causing it (if any).
====
   {NAME} onPostExplosion(

[Explosion](/reference/explosion.md) explosion,

[Player](/reference/player.md) playerSource

)
   {DESC} Executes <b>immediately</b> when an explosion happens, just after onExplosion. Passes the explosion object itself and the player causing it (if any). Since this only runs when the explosion actually happens, this event is useful for executing code once the explosion is guaranteed.
====
   {NAME} onNPCGenerated(

[NPC](/reference/npc.md) generatorNPC,

[NPC](/reference/npc.md) generatedNPC

)
   {DESC} Executes when a generator generates an NPC. Passes the generator and the newly generated NPC.
====
   {NAME} onNPCConfigChange(

[number](/type/number.md) id,

[string](/type/string.md) configName

)
   {DESC} Executes when something changes NPC config. Passes the ID of NPC whose config was changed, as well as the name of the config. The new value can be retrieved through NPC.config[id][configName].
====
   {NAME} onBlockConfigChange(

[number](/type/number.md) id,

[string](/type/string.md) configName

)
   {DESC} Executes when something changes Block config. Passes the ID of Block whose config was changed, as well as the name of the config. The new value can be retrieved through Block.config[id][configName].
====
   {NAME} onBGOConfigChange(

[number](/type/number.md) id,

[string](/type/string.md) configName

)
   {DESC} Executes when something changes BGO config. Passes the ID of BGO whose config was changed, as well as the name of the config. The new value can be retrieved through BGO.config[id][configName].
====
   {NAME} onDrawUnfocusOverlay()
   {DESC} Executes once when the game enters an unfocused state. Elements drawn in this event remain visible until the game gains focus again.
{ENDTABLE}

## Legacy Events

These events (often happening just after onLoop) are old and hardly useful anymore.

| Event | Description |
| --- | --- |
| onLoop() | Legacy version of onTick. Runs at the very start of a tick, even before input updated. <Badge type="tip">Use onTick</Badge> |
| onLoopSection#([number](/type/number.md) playerIdx) | Runs every tick the game isn't paused <b>and</b> only while a player is within the section represented by #, where # is a number between 0 and 20. If both players are in this section at the same time, the function is called <b>twice</b>! <Badge type="tip">Use onTick and an if statement checking the section of a player</Badge> |
| onLoad() | Legacy version of onStart. Runs even earlier and is incredibly unsafe. <Badge type="tip">Use onStart</Badge> |
| onJump([number](/type/number.md) playerIdx) | Legacy function executing when a jump begins. Not recommended to be used as it isn't reliable. <Badge type="tip">Poll for player state in onTick or onTickEnd</Badge> |
| onJumpEnd([number](/type/number.md) playerIdx) | Legacy function executing when a jump ends. Not recommended to be used as it isn't reliable. <Badge type="tip">Poll for player state in onTick or onTickEnd</Badge> |
| onKeyDown([KeyCode](/constants/keycode.md) keyCode, [number](/type/number.md) playerIdx) | Legacy function for determining key presses. Executes when a key is pressed. <Badge type="tip">Poll for player.keys in onTick or onInputUpdate</Badge> |
| onKeyUp([KeyCode](/constants/keycode.md) keyCode, [number](/type/number.md) playerIdx) | Legacy function for determining key presses. Executes when a key stops being pressed. <Badge type="tip">Poll for player.keys in onTick or onInputUpdate</Badge> |

## Registering Events in custom Libraries

When working in a custom library, you have to register all events you want to use to the library table. In order to do that, the [global](/reference/globals.md) registerEvent function can be used:

```lua
local myLib = {}

function myLib.onInitAPI()
    registerEvent(myLib, "onTick")
end

function myLib.onTick()
    -- do things here
end

return myLib
```

## Event Execution Order

Here is an overview over a tick in SMBX. The specific events called may differ depending on various factors such as pause state or the number of cameras visible.

![Event execution order](/images/concepts/event-execution-order.png)

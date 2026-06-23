# Lakitushop

As a module, lakitushop needs to be loaded in order to be accessible in your level or episode.
```lua
local lakitushop = require("lakitushop")
```

Lakitushop lets you define custom shop configurations for the Lakitu Shop Post NPC. Defining them in your episode-wide luna.lua file makes these configurations global across the episode.

## Quick start

The basic use pattern for Lakitushop is to create a new config and then reference it by name from the NPC's extra settings field. Here is a shop configuration that includes one predefined item, one custom item, and a change in configuration:

```lua
local lakitushop = require("lakitushop")

local ITEM_GOOMBA = lakitushop.addItem{
    id = 1,
    price = 99,
    name = "Your best friend"
}

lakitushop.addPreset("myPreset", {
    items = {
        lakitushop.SUPER_LEAF,
        ITEM_GOOMBA
    },
    config = {
        confirmPurchase = true
    }
})
```

## Container Constants
| Constant | Description |
| --- | --- |
| CONTAINER_NONE | NPC doesn't spawn in any container (nil) |
| CONTAINER_RESERVE | NPC spawns in the player's reserve itembox (-1) |
| CONTAINER_BUBBLE | NPC spawns in a bubble (293) |
| CONTAINER_EGG | NPC spawns in an egg (96) |
| CONTAINER_CRATE | NPC spawns in a crate (433) |
| CONTAINER_EXPLOSIVECRATE | NPC spawns in an explosive crate (434) |

## Predefined Item Constants
| Constant | ID | Visible | Price | Price (Currency) | Container |
| --- | --- | --- | --- | --- | --- |
| MUSHROOM | 9 | true | 10 | 15 | / |
| FIREFLOWER | 14 | true | 25 | 30 | / |
| ICEFLOWER | 264 | true | 25 | 30 | / |
| SUPER_LEAF | 34 | true | 25 | 30 | / |
| TANOOKI_SUIT | 169 | true | 75 | 100 | / |
| HAMMER_SUIT | 170 | true | 75 | 100 | / |
| STARMAN | 293 | true | 80 | 150 | / |
| ONEUP | 90 | false | 100 | 100 | / |
| KURIBO_SHOE | 35 | true | 75 | 100 | / |
| PODOBOO_SHOE | 191 | false | 80 | 125 | / |
| LAKITU_SHOE | 193 | false | 85 | 175 | / |
| YOSHI_GREEN | 95 | true | 75 | 125 | CONTAINER_EGG |
| YOSHI_RED | 100 | false | 80 | 150 | CONTAINER_EGG |
| YOSHI_BLUE | 99 | false | 80 | 150 | CONTAINER_EGG |
| YOSHI_YELLOW | 98 | false | 80 | 150 | CONTAINER_EGG |
| YOSHI_PINK | 150 | false | 80 | 150 | CONTAINER_EGG |
| YOSHI_PURPLE | 149 | false | 80 | 150 | CONTAINER_EGG |
| YOSHI_CYAN | 228 | false | 80 | 150 | CONTAINER_EGG |
| YOSHI_BLACK | 148 | false | 85 | 175 | CONTAINER_EGG |

## State

The Lakitu Shop can be in one of these states. Get them via the getState function.

| Constant | Value | Description |
| --- | --- | --- |
| STATE_ERROR | -1 | The shop is displaying an error popup. |
| STATE_NONE | 0 | The shop is closed. |
| STATE_OPENING | 1 | The shop is in the opening animation. |
| STATE_SELECTING | 2 | The shop is open and cursor is responding to inputs. |
| STATE_CLOSING | 3 | The shop is in the closing animation. |
| STATE_SELECTED | 4 | Thanks message state after confirming a purchase. |
| STATE_CONFIRM | 5 | A confirm dialog is open. |

### Instance Fields

{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE} [Lakitu Shop Config](/modules/lakitushop.md#configs)
  {FIELD} defaultConfig
     {RO} No
   {DESC} Default config table. Edit this to customize every shop config's fallback values.
====
   {TYPE} [table](/types/table.md) of [Lakitu Shop Item](/modules/lakitushop.md#items)
  {FIELD} items
     {RO} No
   {DESC} All items registered to the shops. This table is the fallback table if a config doesn't have its own item table.
====
   {TYPE} [table](/types/table.md) of [Textplus Layout](/modules/textplus.md#layouts)
  {FIELD} textLayouts
     {RO} No
   {DESC} Stored texplus layouts for text spoken by the Lakitu. Fields of the table are nocoins, nostock, confirm and thanks.
{ENDTABLE}

## Functions

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} addPreset(

   [string](/types/string.md) name,

   [named](/types/table.md) args

   )
    {RET} [Lakitu Shop](/modules/lakitushop.md)
   {DESC} Creates a new Lakitu Shop preset and returns it. The name is used to refer to it from Lakitu Shop Post extra settings.

<details><summary>Available args</summary>

| Argument | Optional | Description |
| --- | --- | --- |
| [table](/types/table.md) of [Lakitu Shop Item](/modules/lakitushop.md#items) items | Yes | A list of items to include in the shop. Items added to this list will ignore their "visible" flag. |
| [table](/types/table.md) of [Lakitu Shop Config](/modules/lakitushop.md#configs) config | Yes | A config table containing overrides for the lakitushop default config. |
</details>
====
   {NAME} addItem(

   [named](/types/table.md) args

)
    {RET} [Lakitu Shop Item](/modules/lakitushop.md#items) item
   {DESC} Creates a new item for the shop. Item names must be unique.

<details><summary>Available args</summary>

| Argument | Optional | Description |
| --- | --- | --- |
| [string](/types/string.md) name | No | The name of the item in the shop. Must be unique, because it is used to index the save data. |
| [string](/types/string.md) description | Yes | The item's description text. Appended to the name in the speech dialog. |
| [number](/types/number.md) id | Yes | The ID of NPC to spawn. |
| [function](/types/function.md) effectFunction | Yes | The function to execute when the item is purchased, if it should not be a NPC. Overrides id if set. If the function returns a number, it is treated as a NPC ID to spawn. |
| [number](/types/number.md) stock | Yes | The amount of items available for purchase. -1 is infinite. |
| [bool](/types/bool.md) saveStockToSaveData | Yes | If true, stock is saved across runs. Defaults to true. |
| [Lakitushop Container Constant](/modules/lakitushop.md) container | Yes | The container the item should be delivered in. The value can be any NPC ID. Defaults to lakitushop.CONTAINER_NONE. |
| [string](/types/string.md) or [Currency](/modules/currencies.md) currency | Yes | The name or reference to the currency that should be used to pay for the item if currencies are enabled in the shop config. |
| [number](/types/number.md) price | Yes | The price of the item. |
| [function](/types/function.md) priceFunction | Yes | A function that returns the price of the item. Overrides price if set. Can be used to handle discounts. |
| [number](/types/number.md) price | Yes | The price of the item. |
| [function](/types/function.md) priceFunction | Yes | A function that returns the price of the item. Overwrites price if set. Can be used to handle discounts. |
| [number](/types/number.md) currencyPrice | Yes | If set, price is instead treated as a fallback. This argument is used for the default items, but is not very useful for custom items. |
| [bool](/types/bool.md) visible | Yes | Whether the item is visible in the shop. Defaults to true. |
| [function](/types/function.md) visibleFunction | Yes | A function that returns the visible state of the item. |
| [Texture](/types/texture.md) or [string](/types/string.md) icon | Yes | The icon to display next to the name, or its file path. If id is set and icon is not, it defaults to show the center of the first frame of the NPC. |
| [bool](/types/bool.md) closeShopOnBuy | Yes | If true, buying this item closes the shop. Defaults to true for items using id, and false to items using effectFunction. If your effectFunction returns an id for an NPC, make sure to set this to true. |
</details>
====
   {NAME} spawnNPC(

   [number](/types/number.md) id,

   [number](/types/number.md) ai1,

   [number](/types/number.md) x,

   [number](/types/number.md) y,

   [number](/types/number.md) section,
   
   [number](/types/number.md) speedX,
   
   [number](/types/number.md) speedY,

   [number](/types/number.md) warpDirection
)
    {RET} [NPC](/reference/npc.md)
   {DESC} Spawns an NPC with the given properties. This function is used when a NPC ID should be spawned. It can be used in the effectFunction of an item to, for example, spawn it from a pipe upon purchase, or to add custom containers.
====
   {NAME} getState(

   [Player](/reference/player.md) actingPlayer,

   [NPC](/reference/npc.md) or [Vector](/reference/vector.md) or [Warp](/reference/warp.md) lakituShopNPC,

   [string](/types/string.md) or [Lakitu Shop Config](/modules/lakitushop.md#configs) preset
)
    {RET} [Lakitu Shop State](/modules/lakitushop.md#state) state
   {DESC} Checks the current state of the Lakitu Shop. If no preset is specified, the currently active preset is checked. Returns the state enum (click the link in the left column for details)
====
   {NAME} open(
   [string](/types/string.md) or [Lakitu Shop Config](/modules/lakitushop.md#configs) preset
)
    {RET} [nil](/types/nil.md)
   {DESC} Opens the Lakitu Shop menu. The player passed to the function will be the player in control of menu navigation. The LakituShopNPC is expected to call lakitushop.dropItem as part of its logic. If called with a vector4, it takes the xy as the coordinate to spawn the NPC at (centered) and takes the zw as the speed to apply to the NPC. A vector2 is the same thing, but with speed set to 0. If called with a warp, the NPC will emerge from the warp (to simulate projectile generation, use vector4). If the second argument is nil, the item is transferred to the acting player's reserve itembox upon purchase.
====
   {NAME} moveSelection(

   [number](/types/number.md) difference

)
    {RET} [nil](/types/nil.md)
   {DESC} Forces a movement in the shop menu. Navigation is horizontal. To move by a column, add or subtract the number of columns in the current config.
====
   {NAME} close(

   [bool](/types/bool.md) boughtSomething

)
    {RET} [nil](/types/nil.md)
   {DESC} Forces the shop to close.
====
   {NAME} dropItem(

   [NPC](/reference/npc.md) lakituShopNPC,

   [bool](/types/bool.md) condition
)
    {RET} [bool](/types/bool.md)
   {DESC} If implementing custom Lakitu Shop NPCs to drop items for you, the NPC should call this function and it will drop the item when the condition is true and there is an item to spawn. Returns true if an item was dropped.
====
   {NAME} refreshTextLayouts()
    {RET} [nil](/types/nil.md)
   {DESC} Forces a refresh of all the text layouts (no coins, no stock, confirm, thanks) spoken by the lakitu.
====
   {NAME} draw9Slice(

   [Texture](/types/texture.md) texture,

   [number](/types/number.md) x,

   [number](/types/number.md) y,

   [number](/types/number.md) width,

   [number](/types/number.md) height,

   [number](/types/number.md) left,

   [number](/types/number.md) top,

   [number](/types/number.md) right,

   [number](/types/number.md) bottom
)
    {RET} [nil](/types/nil.md)
   {DESC} Draws a texture as a 9-slice at the position x,y with width/height in dimensions. The left, top, right and bottom arguments define how many pixels of the texture off each side are part of the non-stretched edge section.
====
   {NAME} renderShopFrame(

   [number](/types/number.md) x,

   [number](/types/number.md) y,

   [number](/types/number.md) width,

   [number](/types/number.md) height
   
)
    {RET} [nil](/types/nil.md)
   {DESC} Renders the shop's background frame at a specific position. Overwrite this function for custom drawing.
====
   {NAME} drawConfirmationOverlay(

   [number](/types/number.md) x,

   [number](/types/number.md) y,

   [number](/types/number.md) width,

   [number](/types/number.md) height,

   [number](/types/number.md) selection,

   [number](/types/number.md) timer
   
)
    {RET} [nil](/types/nil.md)
   {DESC} Draws the shop's confirmation overlay. Selection is -1, 0 or 1. The timer determines the selection pointer animation. Overwrite this function for custom drawing.
====
   {NAME} drawSpeechBubbleText(

   [number](/types/number.md) x,

   [number](/types/number.md) y,

   [number](/types/number.md) width,

   [number](/types/number.md) height
   
)
    {RET} [nil](/types/nil.md)
   {DESC} Draws the shop's speech bubble text. Overwrite this function for custom drawing.
====
   {NAME} drawThumbsUp(

   [number](/types/number.md) x,

   [number](/types/number.md) y
   
)
    {RET} [nil](/types/nil.md)
   {DESC} Draws the shop's thumbs up effect. Overwrite this function for custom drawing.
====
   {NAME} drawLakitu(

   [number](/types/number.md) x,

   [number](/types/number.md) y,

   [number](/types/number.md) width,

   [number](/types/number.md) height
   
)
    {RET} [nil](/types/nil.md)
   {DESC} Draws the shop's lakitu in the menu. Overwrite this function for custom drawing.
====
   {NAME} drawSpeechBubble(

   [number](/types/number.md) x,

   [number](/types/number.md) y,

   [number](/types/number.md) width,

   [number](/types/number.md) height
   
)
    {RET} [nil](/types/nil.md)
   {DESC} Draws the shop lakitu's speech bubble. Overwrite this function for custom drawing.
====
   {NAME} drawScrollArrows(

   [number](/types/number.md) x,

   [number](/types/number.md) y,

   [number](/types/number.md) width,

   [number](/types/number.md) height,

   [bool](/types/bool.md) shouldRenderTop,

   [bool](/types/bool.md) shouldRenderBottom
   
)
    {RET} [nil](/types/nil.md)
   {DESC} Draws the shop's scroll indicators. Overwrite this function for custom drawing.
====
   {NAME} drawCursor(

   [number](/types/number.md) x,

   [number](/types/number.md) y
   
)
    {RET} [nil](/types/nil.md)
   {DESC} Draws the shop's cursor. Overwrite this function for custom drawing.

{ENDTABLE}

## Items

Lakitu shop items represent the items purchasable in the shop. You can create them using the laitushop.addItem function.

### Instance Methods

[What is a method?](/types/function.md#methods)

{STARTTABLE}
   {NAME} Method
    {RET} Return Values
   {DESC} Description
====
   {NAME} effectFunction()
    {RET} [nil](/types/nil.md) or [number](/types/number.md) npcID
   {DESC} Custom function to execute when the item is purchased. Can be nil. Overrides field id if set.
====
   {NAME} priceFunction()
    {RET} [number](/types/number.md) price
   {DESC} Custom function to calculate the item's price. Can be nil. Overrides field price if set.
====
   {NAME} visibleFunction()
    {RET} [bool](/types/bool.md) visible
   {DESC} Custom function to determine the item's visibility. Can be nil. Overrides field visible if set.
====
   {NAME} getStock()
    {RET} [number](/types/number.md) stock
   {DESC} Returns the current stock of the item.
====
   {NAME} setStock(

   [number](/types/number.md) amount

)
    {RET} [nil](/types/nil.md)
   {DESC} Sets the current stock of the item.
====
   {NAME} getPrice()
    {RET} [number](/types/number.md) price
   {DESC} Gets the current price of the item, accounting for the priceFunction and whether currencies are ine effect.
====
   {NAME} getEffect()
    {RET} [nil](/types/nil.md) or [number](/types/number.md) id
   {DESC} Executes the effect function if it exists and returns the result, or the id field if effectFunction is nil.
====
   {NAME} getVisible()
    {RET} [bool](/types/bool.md) visible
   {DESC} Gets whether or not the item is visible, accounting for visibleFunction.
====
   {NAME} refreshLayouts()
    {RET} [nil](/types/nil.md)
   {DESC} Forcibly refreshes the item's text layouts. Item layouts use the current shop config's speech font.
====
   {NAME} draw(

   [number](/types/number.md) x,

   [number](/types/number.md) y,

   [number](/types/number.md) width,

   [number](/types/number.md) height,

   [bool](/types/bool.md) selected
   
)
    {RET} [nil](/types/nil.md)
   {DESC} Draws the item. Override this for custom drawing.
====
   {NAME} buy()
    {RET} [nil](/types/nil.md)
   {DESC} Attempts to buy the item. Fails if there is no stock or the player doesn't have enough kromer ($$$).
{ENDTABLE}

### Instance Fields

{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE} [string](/types/string.md)
  {FIELD} name
     {RO} No
   {DESC} Name of the item. Changing this can cause issues with the SaveData, so only do it if you're absolutely sure what you're doing.
====
   {TYPE} [string](/types/string.md)
  {FIELD} description
     {RO} No
   {DESC} Item description.
====
   {TYPE} [number](/types/number.md)
  {FIELD} id
     {RO} No
   {DESC} ID of the NPC to spawn. Not used if effectFunction is set.
====
   {TYPE} [Lakitushop Container Constant](/modules/lakitushop.md)
  {FIELD} container
     {RO} No
   {DESC} Container or NPC ID to use. Sets ai1 on the container to this item's NPC ID when spawned.
====
   {TYPE} [number](/types/number.md)
  {FIELD} stock
     {RO} No
   {DESC} The number of items available in the shop. Access this value properly using the getStock and setStock methods.
====
   {TYPE} [number](/types/number.md)
  {FIELD} price
     {RO} No
   {DESC} Price of the item. Not used if priceFunction is set.
====
   {TYPE} [number](/types/number.md)
  {FIELD} currencyPrice
     {RO} No
   {DESC} Price for currencies, if different from price when currencies are not used.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} visible
     {RO} No
   {DESC} Whether the item is visible in the shop. Not used if visibleFunction is set.
====
   {TYPE} [Texture](/types/texture.md)
  {FIELD} icon
     {RO} No
   {DESC} The icon used for displaying the item in the shop.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} defaultIcon
     {RO} No
   {DESC} Set to true if the icon was unset when the item was created. If you change the icon at runtime, you also need to update this.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} saveStockToSaveData
     {RO} No
   {DESC} Whether the stock of the item saves to SaveData._lakituShop.stock[itemName]
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} closeShopOnBuy
     {RO} No
   {DESC} Whether buying this item closes the shop.
{ENDTABLE}

## Configs

Shop configurations configure various parameters of individual or groups of shops. They are set up to fallback onto the default config if the shop doesn't define a field.

## Fields

{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE} [number](/types/number.md)
  {FIELD} columns
     {RO} No
   {DESC} Number of columns visible at a time. Default is 3.
====
   {TYPE} [number](/types/number.md)
  {FIELD} rows
     {RO} No
   {DESC} Number of rows visible at a time. Default is 3.
====
   {TYPE} [number](/types/number.md)
  {FIELD} confirmPurchase
     {RO} No
   {DESC} If true, attempted purchases open a confirmation menu. Default is false
====
   {TYPE} [number](/types/number.md)
  {FIELD} defaultConfirmationOption
     {RO} No
   {DESC} Confirmation dialog initializes to this value. 1 is confirm. -1 is cancel. Default is 0 (requires input).
====
   {TYPE} [number](/types/number.md)
  {FIELD} framesToOpen
     {RO} No
   {DESC} Number of frames it takes to open the shop. Default is 6.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} confirmationInputIsVertical
     {RO} No
   {DESC} If true, up and down keys are used for the confirmation dialog. Default is false.
====
   {TYPE} [table](/types/table.md) of [number](/types/number.md)
  {FIELD} confirmationFrameSequence
     {RO} No
   {DESC} Sequence of animation frames for the confirm cursor. Default is {1,2,3,3,2,1,4,5,5,4}
====
   {TYPE} [number](/types/number.md)
  {FIELD} confirmationArrowFrames
     {RO} No
   {DESC} Number of frames for the confirmation arrow. Default is 4.
====
   {TYPE} [number](/types/number.md)
  {FIELD} confirmationButtonFrames
     {RO} No
   {DESC} Number of frames for the confirmation button. Default is 6.
====
   {TYPE} [Font](/modules/textplus.md#fonts)
  {FIELD} priceFont
     {RO} No
   {DESC} Font used for the prices. Defaults to Font 3.
====
   {TYPE} [Font](/modules/textplus.md#fonts)
  {FIELD} speechFont
     {RO} No
   {DESC} Font used for the prices. Defaults to Font 4.
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} useCurrencies
     {RO} No
   {DESC} If true, shop uses currencies. Defaults to false.
====
   {TYPE} [table](/types/table.md)
  {FIELD} offsets
     {RO} No
   {DESC} Table containing various offsets and margins. See below for details.
====
   {TYPE} [table](/types/table.md)
  {FIELD} graphics
     {RO} No
   {DESC} Table containing various textures. See below for details.
{ENDTABLE}

### Offsets

These fields are part of the offsets table for a config.

{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE} [Vector2](/reference/vector.md)
  {FIELD} lakitu
     {RO} No
   {DESC} X/Y offset of the lakitu image. (-80, 58)
====
   {TYPE} [Vector2](/reference/vector.md)
  {FIELD} itemIcon
     {RO} No
   {DESC} X/Y offset of the item icon's center. (68, 36)
====
   {TYPE} [Vector2](/reference/vector.md)
  {FIELD} cursor
     {RO} No
   {DESC} X/Y offset of the cursor. (-27, 37)
====
   {TYPE} [Vector2](/reference/vector.md)
  {FIELD} speechmargin
     {RO} No
   {DESC} Margin of the speech bubble. (4, 4)
====
   {TYPE} [Vector2](/reference/vector.md)
  {FIELD} speechsize
     {RO} No
   {DESC} Size of the speech bubble. (0, 40)
====
   {TYPE} [Vector4](/reference/vector.md)
  {FIELD} speechrect
     {RO} No
   {DESC} Left, top, right, bottom edges of the speech bubble 9 slice. (14, 14, 14, 14)
====
   {TYPE} [Vector4](/reference/vector.md)
  {FIELD} framerect
     {RO} No
   {DESC} Left, top, right, bottom edges of the shop frame 9 slice. (22, 22, 22, 22)
====
   {TYPE} [Vector4](/reference/vector.md)
  {FIELD} confirmshadowrect
     {RO} No
   {DESC} Left, top, right, bottom edges of the confirm shadow 9 slice. (12, 12, 12, 12)
====
   {TYPE} [Vector2](/reference/vector.md)
  {FIELD} card
     {RO} No
   {DESC} Size of an item card. (100, 90)
====
   {TYPE} [number](/types/number.md)
  {FIELD} cardTop
     {RO} No
   {DESC} Height of the top section of a card (52)
====
   {TYPE} [Vector2](/reference/vector.md)
  {FIELD} margin
     {RO} No
   {DESC} Margin between shop item cards (30, 30)
{ENDTABLE}

### Graphics

These fields are part of the graphics table for a config.

{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE} [Texture](/types/texture.md)
  {FIELD} card
     {RO} No
   {DESC} Used for the item card (hardcoded 58-4)
====
   {TYPE} [Texture](/types/texture.md)
  {FIELD} arrows
     {RO} No
   {DESC} Used for the scroll arrows (hardcoded 58-2)
====
   {TYPE} [Texture](/types/texture.md)
  {FIELD} speech
     {RO} No
   {DESC} Used for the speech bubble (hardcoded 58-3)
====
   {TYPE} [Texture](/types/texture.md)
  {FIELD} hand
     {RO} No
   {DESC} Used for the cursor hand (hardcoded 58-7)
====
   {TYPE} [Texture](/types/texture.md)
  {FIELD} frame
     {RO} No
   {DESC} Used for the shop frame (hardcoded 58-7)
====
   {TYPE} [Texture](/types/texture.md)
  {FIELD} lakitu
     {RO} No
   {DESC} Used for the lakitu sprite (hardcoded 58-5)
====
   {TYPE} [Texture](/types/texture.md)
  {FIELD} confirm
     {RO} No
   {DESC} Used for the confirmation dialog (hardcoded 58-10)
====
   {TYPE} [Texture](/types/texture.md)
  {FIELD} choose
     {RO} No
   {DESC} Used for the confirmation dialog arrows (hardcoded 58-11)
====
   {TYPE} [Texture](/types/texture.md)
  {FIELD} null
     {RO} No
   {DESC} Used if a stock is empty (hardcoded 58-6)
====
   {TYPE} [Texture](/types/texture.md)
  {FIELD} coin
     {RO} No
   {DESC} Used for the price icon if no currency is used (hardcoded 33-2)
{ENDTABLE}
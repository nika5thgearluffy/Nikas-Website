# Currencies

As a module, currencies needs to be loaded in order to be accessible in your level or episode:
```lua
local currencies = require("currencies")
```

Currencies let you define custom money in your levels and episodes. In combination with [Lakitu Shop](/modules/lakitushop.md), you can then pay for things with Dragon Coins, Star Coins, Mushrooms, Cherries or whatever else you want.

## Quick Start

The following snippit creates a new currency. The counter will tick up whenever one of the defined items is collected.

```lua
local currencies = require("currencies")

local cherry_currency = currencies.registerCurrency("Cherry")
cherry_currency:registerCoin(558, 1) -- Cherry NPC has a value of 1

-- onDraw can be used to draw the currencies
function onDraw()
    cherry_currency:draw()
end
```

Alternatively, you can also opt into using one of the default currencies.

```lua
local currencies = require("currencies")

local coin_currency = currencies.registerCurrency(currencies.CURRENCY_COINS)
local starcoin_currency = currencies.registerCurrency(currencies.CURRENCY_STARCOINS)
local dragoncoin_currency = currencies.registerCurrency(currencies.CURRENCY_DRAGONCOINS)

-- You can override draw functions to make the currencies display however you want in the hud:
function coin_currency.draw(currency, x, y, priority)
    Text.print(currency.name, x, y)
    Text.print(currency:getMoney(), x, y + 20)
end

-- onDraw can be used to draw the currencies
function onDraw()
    coin_currency:draw()
    starcoin_currency:draw()
    cherry_currency:draw()
end
```

## Predefined Currencies

These currencies are pre-defined and usable without extra configuration.

| Constant | Description |
| --- | --- |
| CURRENCY_COINS | All coin types. Uses the basegame coin counter to track of increments. |
| CURRENCY_STARCOINS | Star Coins. Tracks the basegame star coin counter. |
| CURRENCY_DRAGONCOINS | The Dragon Coin NPC. |

## Functions

{STARTTABLE}
   {NAME} Function
    {RET} Return Values
   {DESC} Description
====
   {NAME} getCurrency(

   [string](/types/string.md) name

   )
    {RET} [Currency](/modules/currencies.md#currency-instance) currency
   {DESC} Returns a registered currency of the given name.
====
   {NAME} registerCurrency(

   [string](/types/string.md) name,
   [Texture](/types/texture.md) icon

   )
    {RET} [Currency](/modules/currencies.md#currency-instance) currency
   {DESC} Registers a currency by name and with optional icon. The icon is used in the Lakitu Shop.
====
   {NAME} registerCurrency(

   [Currency](/modules/currencies.md#currency-instance) currency defaultCurrency

   )
    {RET} [Currency](/modules/currencies.md#currency-instance) currency
   {DESC} Registers one of the default currencies to mark them as active.
{ENDTABLE}

## Currency Instance

Currency instances let you access the value of the respective currency easily.

### Instance Methods

[What is a method?](/types/function.md#methods)

{STARTTABLE}
   {NAME} Method
    {RET} Return Values
   {DESC} Description
====
   {NAME} registerCoin(

   [number](/types/number.md) id,

   [number](/types/number.md) value

)
    {RET} [nil](/types/nil.md)
   {DESC} Registers a coin to the currency. The value determines by how much the counter increases.
====
   {NAME} registerLimit(

   [number](/types/number.md) limit,

   [function](/types/function.md) reactionFunction

)
    {RET} [nil](/types/nil.md)
   {DESC} Registers a limit to the currency. The first argument is the upper bound of the coin counter value. The second is an optional function that executes once the limit is hit. It gets the number of coins that could not be obtained passed. Use this function to, for example, clear the counter and give players a 1-up.
====
   {NAME} addMoney(

   [number](/types/number.md) value

)
    {RET} [nil](/types/nil.md)
   {DESC} Add money to the counter. Negative values subtract, but cannot go below 0.
====
   {NAME} setMoney(

   [number](/types/number.md) value

)
    {RET} [nil](/types/nil.md)
   {DESC} Sets the absolute value of the counter. Cannot go below 0 or exceed the limit.
====
   {NAME} getMoney()
    {RET} [number](/types/number.md) value
   {DESC} Returns the current value of the counter.
====
   {NAME} compareMoney(

   [number](/types/number.md) valueToCompareTo

)
    {RET} [bool](/types/bool.md) counterValueIsGreater, [number](/types/number.md) difference
   {DESC} Compares the counter value to another number. True if the counter value is greater. Returns the difference as a second arg.
====
   {NAME} draw(

   [number](/types/number.md) x,

   [number](/types/number.md) y,

   [number](/types/number.md) priority,

   [number](/types/number.md) textOffsetX

)
    {RET} [nil](/types/nil.md)
   {DESC} Draws the counter. This is a sample draw function. Override the draw function in your code to your liking to match the style of your hud.
{ENDTABLE}

### Instance Fields

{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
     {RO} Read-only?
   {DESC} Description
====
   {TYPE} [bool](/types/bool.md)
  {FIELD} hijackDefaultCounter
     {RO} Yes
   {DESC} True for CURRENCY_COINS. This indicates that a currency reads the default coin counter. If a currency doing this is registered, the default coin counter will always be 0, and the hijacking currency's counter will see changes to what would otherwise be the default coin counter instead.
====
   {TYPE} [string](/types/string.md)
  {FIELD} name
     {RO} No
   {DESC} Name of the counter.
====
   {TYPE} [Texture](/types/texture.md)
  {FIELD} icon
     {RO} No
   {DESC} Icon of the counter.
{ENDTABLE}
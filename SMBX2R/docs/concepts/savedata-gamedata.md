# SaveData and GameData

SaveData and GameData are SMBX2's methods of information serialization. They are tables that store information persistently, each with their own dedicated purpose.

## SaveData

SaveData is a table that persistently stores information and saves this information into a save file whenever SMBX would internally save or Misc.saveGame() is called.
SaveData should be used for information that is useful across play sessions, such as currency, high scores and completion progress.

## GameData

GameData is a table that persistently stores information, too. However unlike Savedata, GameData will never save this information into a save file, and the information will be lost once the game is closed.
GameData should be used for information that doesn't need to be kept for future play sessions but is critical to have across level loads, such as whether a minigame is active, or whether something has already occured in this play session.

## Using SaveData/GameData

Using them is as simple as using any other table. You can create and organize fields and sub-tables within each of the two tables, and access them from whereever you need. Using the or operator, you can easily initialize a sub-table if it does not yet exist.

```lua
SaveData.hudInfo = SaveData.hudInfo or {
    coins = 0,
    score = 0
}

function onDraw()
    Text.print(SaveData.hudInfo.coins, 100, 100)
end
```

## Per-Level SaveData/GameData

For contests or collabs, it's often not possible to coordinate variable names used in SaveData with other contributors, so a little trick is recommended for creating a level-specific sub-table of the two tables if necessary:

```lua
local saveData, gameData
do
    local levelFilename = Level.filename()

    SaveData[levelFilename] = SaveData[levelFilename] or {}
    GameData[levelFilename] = GameData[levelFilename] or {}
    saveData = SaveData[levelFilename]
    gameData = GameData[levelFilename]
end
```

This initializes the saveData and gameData variables to a subtable of SaveData and GameData respectively. Since the key of the table is the filename of the level currently played, it is guaranteed to remain unique for an episode, avoiding naming conflicts.
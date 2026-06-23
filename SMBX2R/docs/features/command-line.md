# Command Line Arguments

You can start SMBX with command line arguments. The following arguments are supported:

| Argument | Name | Description |
| --- | --- | --- |
| --console | Debug Console | Starts the game with the console. The console can then be used through the [Console class](/reference/console.md) |
| --testLevel= | Start level | Starts the game at the level file provided after =. The --testLevel= prefix can be omitted. |
| --loadWorld= | Start episode | Starts the game at the world file specified after =. If no save slot is provided, this loads into test mode. Otherwise, the episode is loaded. The --loadWorld= prefix can be omitted. |
| --saveslot= | Episode save slot | Specifies a save slot for loading into an episode. |
| --num-players= | Number of players | Specifies the number of players for loading into an episode. |
| --p1c= --p2c | Character | Specifies the character for the players when loading into an episode. |
| --runWhenUnfocused | Keep running while unfocused | When set, the game doesn't pause while the window is focused. |
| --softGL | Force SoftGL | When set, software OpenGL is forced to be used. |
| --forceHardGL | Force HardGL | Prevents fallback to software OpenGL and gives an error instead when it would be necessary. |
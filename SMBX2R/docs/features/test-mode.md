# Test Mode

With a press of the F5 key while the editor is focused,
a SMBX window will open that allows you to test your creation. You can
tab out of the Test Window at any time to make changes to your level in
the background. Another press of the F5 key then refreshes the Test Window with these new changes.

## The Testing Menu

![](images/image29.png)

The Testing Menu lets you customize testing without having to make changes to the level. Its features include the following:

* Setting the amount of players to test with
* Start position for testing. Available
  options:
    - Level start point
    - Any checkpoint
    - Any warp exit
* Colorblind filters. Available options:
    - Protanopia
    - Protanomaly
    - Deuteranopia
    - Deuteranomaly
    - Tritanopia
    - Tritanomaly
    - Achromatopsia
    - Achromatomaly
* Selecting the character for each player, including
  all new characters. You can also:
    - Set their powerup
    - Set their mount

## The Console

A press of the TAB key
during gameplay brings up the developer
console.![](images/image8.png)

The console can be used to execute lines of lua code.
This is particularly useful when working with permanent storage using
[SaveData](/concepts/savedata-gamedata.md).

## Performance Debugging

If you are noticing poor performance in your level, you can
investigate it by pressing
F3 during gameplay,
which brings up the profiler.

![](images/image19.png)

Profiling lasts until F3 is pressed again.
The second press opens a dialog window with the results:

![](images/image37.png)

Results are ordered by impact on performance.
Individual entries detail the line numbers, allowing you to track down
the lines of code that contribute to your level running poorly.

Many basegame-related libraries are not easy to
understand, and if you run into performance issues with basegame
libraries, we recommend talking to us directly on the codehaus discord
server.

[https://discord.gg/aCZqadJ](https://discord.gg/aCZqadJ)

## Red Warnings

While playing levels that make use of deprecated libraries, you might encounter briefly
visible red text near the top of the screen when starting a level. This
message and the corresponding dialog box are only visible in the editor
and warn of deprecated libraries that the level’s lua code uses, or
other non-vital errors. The libraries in question are slated for removal
in a future version of SMBX2, one version after a replacement has been
provided. By updating early, you can make sure your levels retain
compatibility across a leap between versions.

If you want to continue using deprecated libraries for
niche reasons, make sure to make a local copy inside your level or
episode folder for it, so that the removal from basegame in a future
version doesn’t affect your work in the long run.

For more information on how to resolve common warnings, see [here](/guides/warnings.md).

## Encountering Bugs

If you encounter unexpected behaviour or blatant
crashes, please use the bug-shaped icon on the launcher to submit a bug
report or contact us on Discord.

[https://discord.gg/aCZqadJ](https://discord.gg/aCZqadJ)
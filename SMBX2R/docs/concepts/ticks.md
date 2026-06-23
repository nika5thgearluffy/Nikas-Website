# Ticks

A tick (often also referred to as a frame of gameplay) is the time in which all of the game's code executes once, in order of the event execution order.

![Event execution order](/images/concepts/event-execution-order.png)

By default, ticks in SMBX are limited to occuring 2500/39 times per second (≈ 64.1 frames/ticks per second). Using the speeddemon cheat code, this number can be uncapped. The Misc.SetEngineTPS-Function can also change this value.

Since the underlying code won't change when changing this value, manipulation of it will lead to the entire game executing either faster (higher values) or slower (lower values). A timer ticking up every tick will react 64 or 65 after a second by default, 120 at 120FPS and 60 at 60FPS. A goomba moving a distance of one pixel per second will feature the same perceived change in speed.
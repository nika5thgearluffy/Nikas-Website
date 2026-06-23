# Section Settings

Section settings define the properties of a section in a level.

## Style

In this section, the level's background image can be selected. If the pencil icon is pressed, the background's [parallax configuration](/features/parallaxing-backgrounds.md) is opened. If none exists, a new one is created.

## Music

The music section lets you set the default background music for a section. Music paths are always relative to the folder the level file is placed in. Many episodes have a dedicated "music" folder for their custom music, which leads to a path like "music/coolsong.ogg".

## Section Settings

The recursively named Section Settings section contains miscellaneous settings.

- Wrap horizontally: Exiting the camera view on the left or right side makes players and NPCs re-enter on the other end.
- Wrap vertically: Exiting the camera view on the top or bottom side makes players and NPCs re-enter on the other end.
- Offscreen exit: Exiting the camera view horizontally ends the level. Doesn't work with horizontal wrap.
- One-way scrolling: Prevents the camera from moving left.
- Underwater: The entire section is underwater.

## Darkness

Here, settings for a dark section can be configured.

- Dark: Enables the darkness
- Ambient light: The color used when no light is present. Color blending is multiplicative.
- Shadow type: The types of shadows cast on the environment. Keep off for less performance cost.
- Falloff type: The way in which the light dissipates over distance.
- Maximum lights: Maximum number of lights that can be rendered at once.
- Addive brightness: Overlapping lights add their light values together if enabled.
- Player Light: Configure a light around the player.

## Effects

Allows for the configuration of preset weather and screen effects for the section.

## Beat Timer

Configures the beat timer for the section, for use with Beat Blocks and yellow spiked blocks from the SM3DW section.

- Enabled: Enables this section
- BPM: The BPM of the song
- Use Music Clock: If true, uses the playing music's clock for its timer.
- Time Signature: The variable n in a time signature expressed as n/4.
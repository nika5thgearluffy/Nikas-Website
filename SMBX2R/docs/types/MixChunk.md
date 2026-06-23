# MixChunk

MixChunk is an internal format for [SDL Mixer X](https://wohlsoft.ru/pgewiki/SDL_Mixer_X)'s audio chunk. This stores the sample data, the length in bytes of that data, and the volume to use when mixing the sample. Generally only SFX.open() returns this but [the depercated Audio.SFX family of functions](https://wohlsoft.ru/pgewiki/LunaLua_global_Sound_and_Music_functions#Sound_effects_advanced_functions) use and return it as well.


## Instance Fields
{STARTTABLE}
   {TYPE} Type
  {FIELD} Field
   {DESC} Description
====
   {TYPE} [number](/types/number.md)
  {FIELD} allocated
   {DESC} A number indicating whether to free abuf when the chunk is freed. 0 if the memory was not allocated and thus not owned by this chunk and 1 if if the memory was allocated.
====
   {TYPE} [number](/types/number.md)
  {FIELD} abuf
   {DESC} Pointer to the sample data, which is in the output format and sample rate. <Badge type="tip">Does not return properly. possibly unusable!</Badge>
====
   {TYPE} [number](/types/number.md)
  {FIELD} alen
   {DESC} Length of abuf in bytes. Carefully modify this value. if you change it, you should return the initial value back on exiting from levels or worlds to avoid memory leaks!
====
   {TYPE} [number](/types/number.md)
  {FIELD} volume
   {DESC} The volume of the MixChunk, between 0 and 128.
{ENDTABLE}
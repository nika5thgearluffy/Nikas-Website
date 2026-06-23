# Memory Field Types

The memory field type constants describe the type of value passed to or returned by a memory access call. Since these calls directly call upon memory at a certain offset, the type is important in determining how the bytes should be interpreted, and how many bytes should be read.

| Constant | Value | Description |
| --- | --- | --- |
| FIELD_BYTE | 1 | 1 byte integer field. |
| FIELD_WORD | 2 | 2 byte integer field. |
| FIELD_DWORD | 3 | 4 byte integer field. |
| FIELD_FLOAT | 4 | 4 byte decimal field. |
| FIELD_DFLOAT | 5 | 8 byte decimal field. |
| FIELD_STRING | 6 | 4 byte string pointer field, pointing to a different place in memory where the dynamically allocated string is located. |
| FIELD_BOOL | 7 | 2 byte integer field representing a logical value (true/false). |

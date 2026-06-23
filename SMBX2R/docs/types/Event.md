# Event Token

Event tokens are passed to certain lunalua functions. They contain meta information about the event, and are sometimes cancellable.

```lua
function onEventDirect(eventToken, eventName)
    if eventName == "cancelThis" then
        eventToken.cancelled = true
    end
end
```

## Instance variables

| Name | Type | ReadOnly? | Description |
| --- | --- | --- | --- |
| eventName | [string](/types/string.md) | Yes | The name of the event (not a SMBX event) |
| cancellable | [bool](/types/bool.md) | Yes | Whether this event can be cancelled. |
| cancelled | [bool](/types/bool.md) | No | Whether this event is cancelled. |
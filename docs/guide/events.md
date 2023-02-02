# Events

So the events are basically just when you do something (That makes sense). But for example when you are creating data, that is an event.

So quick example:

```js
sheetDbClient.on("dataCreate", () => {
  console.log("Data was created!");
});
```

The same with all the other events. Events List:

- dataCreate
- dataRead
- dataReadById
- dataUpdate
- dataDelete

```js
sheetDbClient.on("<event_type>", () => {
  console.log("<message>");
});
```

## Database Connection

This event is when you connect to the database. It is a good idea to use this event to check if you are connected to the database.

```js
sheetDbClient.on("connect", (connectionString) => {
  console.log(
    "Connected to the database! Connection String: " + connectionString
  );
});
```

If you not are connected, you wil get an error.

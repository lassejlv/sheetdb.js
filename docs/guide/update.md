# Update Data

In here we will update data in the database. We will use the `updateData` method.

```js
const userToUpdate = sheetDbClient.updateData("<row_id>", {
  name: "John Doe",
  age: 20,
});

// When updated
userToUpdate
  .then((db) => console.log(`User with the name: ${db.name} was updated`))
  .catch((err) => console.log(err));
```

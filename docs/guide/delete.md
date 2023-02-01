# Delete Data

In here we will delete data from the database. We will use the `deleteData` method.

```js
const userToDelete = sheetDbClient.deleteData("<row_id>");

// When deleted
userToDelete
  .then((db) => console.log(`User with the id: ${db.id} was deleted`))
  .catch((err) => console.log(err));
```

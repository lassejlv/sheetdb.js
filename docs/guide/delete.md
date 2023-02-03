# Delete Data By ID

In here we will delete data from the database. We will use the `deleteData` method.

```js
const userToDelete = sheetDbClient.deleteDataById("<row_id>");

// When deleted
userToDelete
  .then((db) => console.log(`User with the id: ${db.id} was deleted`))
  .catch((err) => console.log(err));
```

# Delete All Data

In here we will delete all data from the database. We will use the `deleteData` method.

```js
const deleteData = sheetDbClient.deleteData("<row_id>");

// When deleted
deleteData
  .then((db) => console.log(`Deleted ${db.deleted} rows`))
  .catch((err) => console.log(err));
```

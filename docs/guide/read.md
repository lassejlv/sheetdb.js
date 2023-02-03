# Read All Data

This returns all the data in the database. You can use this to get all the data in the database.

```js
const allData = sheetDbClient.readData();

// Getting the data
allData.then((db) => console.log(db)).catch((err) => console.log(err));
```

### Using limits

You can also limit how many rows are returned by using the `limit` parameter.

```js
// returns the first 10 rows
const allData = sheetDbClient.readData({ limit: 10 });
```

# Read Data By Id

This returns data from an specific row by id.

```js
const dataById = sheetDbClient.readDataById("<row_id>");

// Getting the data
dataById.then((db) => console.log(db)).catch((err) => console.log(err));
```

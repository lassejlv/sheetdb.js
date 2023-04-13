# Search for data

So lets say you wan't to search for a user with the name John. You can do this by using the `search` method.

## Search for a specfic row

```js
const findJohnInDatabase = await sheetDbClient.searchData({
    // The Row you want to search for, like the "id"
    row: "name"
    // The value you want to search for
    value: "John"
})
```

Returns:

```js
[
  {
    id: "1",
    name: "John",
    age: "20",
  },
];
```

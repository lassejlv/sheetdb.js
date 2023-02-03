# Create Data

In here we will create basic schema. With an name and age for a user. YOU not have am id property because it will be created automatically.

```js
const schema = {
  name: "John Doe",
  age: 20,
};

const user = sheetDbClient.createData([schema]);

// Getting the data
user.then((db) => console.log(db)).catch((err) => console.log(err));
```

Inside the `createData` method you can pass an array of objects. Each object will be a row in the database. You must put in an array otherwise you will get an error.

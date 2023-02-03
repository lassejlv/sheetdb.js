# Create Data

In here we will create basic schema. With an name and age for a user. YOU can't use the `id` property in the schema. It will be automatically generated.

The `id` that will be generated will be a random string with the current year at the two first characters. For example: `23ee56732fa4`. You can se the `23` at the two first characters. This is the year. The rest of the characters are random.

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

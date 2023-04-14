const { SheetClient } = require("../index");

const sheetDbClient = new SheetClient({
  // Enter ConnectionString APP_ID
  connect: "jy2jkcod1f3rz",
  bearerToken: "1kxkwtdrzouh7n4qkekegm14dxp75h0m927rjuqj",
  basicAuth: {
    username: "d6tg4rhz",
    password: "w8yg8ih8kdgxq65fecqe",
  },
});

// onConnect
sheetDbClient.on("connect", (connectionString) => {
  console.log(`Connected to SheetDB at: ${connectionString}`);
});

(async () => {
  const newUser = await sheetDbClient.deleteData([{ name: "John", age: 20 }]);
  console.log(newUser);
})();

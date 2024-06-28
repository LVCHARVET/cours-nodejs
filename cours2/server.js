const http = require("http");
const app = require("./app");

const PORT = 3000;

http.createServer(app).listen(PORT, () => {
  console.log(`Server at http://localhost:${PORT}`);
});

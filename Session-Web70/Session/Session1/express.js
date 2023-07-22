const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
   res.send("This is first web service h");
});

app.listen(port, () => {
   console.log(`My server is running at PORT=${port}`);
});

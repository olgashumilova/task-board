const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const app = express();

app.use(
  express.json({
    extended: false,
  })
);
app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

// Get help email
app.post(`/getHelpEmail`, (req, res) => {
  let { email } = req.body;
  res.send(`Сообщение будет отправлено на почту ${email}`);
  res.sendStatus = 200;
});

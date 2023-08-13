const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const app = express();

// Array of signed up users
const arrayOfUsers = [];

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(express.static("public"));

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

// User sign up
app.post("/signup", async (req, res) => {
  let { email, password } = req.body;
  let signUpHash;

  await bcrypt
    .hash(password, 10)
    .then((hash) => {
      signUpHash = hash;
    })
    .then(() => {
      if (arrayOfUsers.map((user) => user.email).includes(email)) {
        return res.status(400).send({
          message: "Этот email уже используется",
        });
      } else {
        arrayOfUsers.push({
          id: arrayOfUsers.length,
          email: email,
          password: signUpHash,
          isSignedUp: true,
        });

        return res
          .status(200)
          .send(arrayOfUsers.find((user) => user.email == email));
      }
    })
    .catch(() => {
      return res.send("Что-то пошло не так").status(400);
    });

  if (!req.body) return res.sendStatus(400);
});

// Sign in
app.post(`/signin`, async (req, res) => {
  let { email, password } = req.body;

  if (!req.body) return res.sendStatus(400);

  try {
    if (arrayOfUsers.map((user) => user.email).includes(email)) {
      let oldPasswordHash = arrayOfUsers.find(
        (user) => user.email === email
      ).password;
      const isPasswordValid = await bcrypt.compare(password, oldPasswordHash);
      if (isPasswordValid) {
        return res
          .status(200)
          .send(arrayOfUsers.find((user) => user.email == email));
      } else {
        return res.status(400).send({
          message: "Неправильно введен пароль",
        });
      }
    } else {
      return res.status(400).send({
        message: "Данного пользователя не существует",
      });
    }
  } catch (error) {
    return res.send("Что-то пошло не так").status(400);
  }
});

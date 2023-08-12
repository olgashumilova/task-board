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
  let oldHash = "";

  for (let i = 0; i < arrayOfUsers.length; i++) {
    oldHash = arrayOfUsers[i].password;
  }

  const validPassword = await bcrypt.compare(password, oldHash);

  try {
    if (arrayOfUsers.map((user) => user.isSignedUp).toString() === true) {
      if (!email && !password) {
        res.send("Enter data");
      } else if (email && password) {
        if (email.length > 8) {
          res.send("email can'be more than 8 characters");
        }

        for (let i = 0; i < arrayOfUsers.length; i++) {
          if (arrayOfUsers[i].email !== email) {
            res.send("This user doesn't exist");
          } else if (!validPassword) {
            res.send("Enter valid password");
          } else if (validPassword) {
            res.send(arrayOfUsers[i]);
            res.sendStatus(200);
          }
        }
      } else if (!email) {
        res.send("Enter email");
      } else if (!password) {
        res.send("Enter password");
      }
    } else if (email === "admin" && password === "123admin") {
      arrayOfUsers.push({
        id: arrayOfUsers.length,
        email: email,
        isSignedUp: true,
        password: "123admin",
      });
      for (let i = 0; i < arrayOfUsers.length; i++) {
        res.send(arrayOfUsers[i]);
      }
    } else {
      res.send("Sign up first");
    }
  } catch (error) {
    res.send(error);
  }

  if (!req.body) return res.sendStatus(400);
});

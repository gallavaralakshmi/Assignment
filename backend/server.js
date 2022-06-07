const express = require("express");
const PORT = 3003;
const app = express();

const registerRouter = require("./routes/register");
const loginRouter = require("./routes/login");
const userRouter = require("./routes/user");
const usergoalRouter = require("./routes/usergoal");

app.use("/register", registerRouter);
app.use("/login", loginRouter);
app.use("/users", userRouter);
app.use("/usergoals", usergoalRouter);
app.listen(PORT, () => {
  console.log("GDO is up now");
});

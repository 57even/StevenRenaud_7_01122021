require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");

// Middleware
app.use(helmet());
app.use(express.json());
app.use(express.static("public"));
app.use(cors());

app.use("/", require("./routes/postRoutes"));

app.use("/users/", require("./routes/userRoutes"));

// Global Error Handler
app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(500).json({
    message: "Something went wrong",
  });
});

// Listen on port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));

const express = require('express');
const path = require('path');
const userRoute = require('./routes/user');
const mongoose = require('mongoose');

const PORT = 8001;
const app = express();

mongoose.connect("mongodb://localhost:27017/blogify")
   .then(() => console.log("MongoDB connected"))
   .catch((err) => console.error("MongoDB connection error:", err));

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

// Middleware for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

app.use("/user", userRoute);

app.get('/', (req, res) => {
   res.render("home");
});

app.listen(PORT, () => console.log(`Server started on PORT : ${PORT}`));

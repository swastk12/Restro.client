const express = require("express")
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoute = require("../client/routes/users");
const postRoute = require("../client/routes/posts");
const categoryRoute = require("../client/routes/categorys");
const multer = require("multer")
const path = require("path");


dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));


  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  
  const upload = multer({ storage: storage });
  app.post("/client/upload/", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
  });

app.use("/client/categorys", categoryRoute);
app.use("/client/users", userRoute);
app.use("/client/posts", postRoute);
app.use("/client/categorys", categoryRoute);


app.listen("2000", ()=>{
console.log("backend connected")
})
const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const { dbConnection } = require("./config/dbconnect");
const { cloudinaryConnect } = require("./config/cloudinary");
require("dotenv").config();
const cookieParser = require("cookie-parser");


const app = express();
const port = process.env.PORT || 4000;


//dbconnection
dbConnection();

//cloudnary connect
cloudinaryConnect();

//middleware
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// mountinh



app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

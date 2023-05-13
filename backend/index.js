const express = require("express");
const cors = require("cors");
const connectTomongo = require("./dp");
var bodyParser=require("body-parser")
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}))


app.use(cors());

// Database coonnection
connectTomongo;


// middleware nodejs
app.use(express.json());

//Routes
app.use("/auth", require("./routes/Login"));
app.use("/Addstudent", require("./routes/Addstudent"));
app.use("/college", require("./routes/college"));
app.use("/marksheet", require("./routes/markseet"));
app.use("/Role", require("./routes/role"));


app.listen(9002, () => {
  console.log("BE started at port 9002");
});

const express = require("express");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
// const jwtkey = "e-comm";
const JWT_SECRET = "Harryisagoodb$oy";
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const User = require("../models/User");
var bcrypt = require("bcryptjs");

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  // var msg=[];
  // var msg1,msg2,msg3;
  // console.log(req.body.name)
  // console.log("mesg")
  // if (req.body.name==="") {
  //   msg1 = { name: "name is required" };
  //   msg.push(msg1)
  
  // }
  // if (req.body.email==="") {
  //   msg2 = { email: "email is required" };
  //   msg.push(msg2)
    
  // }
  // if (req.body.password==="") {
  //   msg3 = { password: "password is required" };
  //   msg.push(msg3)
   
  // }
  // console.log(msg);
  // res.json({errors:msg})
let success=false;
  try {
    let user = await User.findOne({ email: req.body.email });
    
    if (user) {
      return res.status(200).json({
        success,
        error: "Sorry a user with this email already exists",
      });
    }

    var salt = bcrypt.genSaltSync(10);
    var secPass = await bcrypt.hash(password, salt);

    user = await User.create({
      name: name,
      email: email,
      password: secPass,
    });

    const data = {
      user: {
        id: user.id,
      },
    };
    const authtoken = jwt.sign(data, JWT_SECRET);
    success = true;
    res.send({ success, authtoken });
    // res.send({ success,message: "successfully save", user: user, authtoken })
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some Error occured");
  }
});






router.get( "/getragisterdata" ,async(req, res) => {
  try {
      const user = await User.find();
      res.json(user);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
});


router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    let success = false;

    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    console.log(req.body);
    try {
      let user = await User.findOne({ email });
      console.log(user);
      // console.log(user);
      if (!user) {
        return res.status(200).json({
          success,
          error: "email not match",
        });
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res.status(200).json({
          success,
          error: "password not match",
        });
      }

      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.send({ success, authtoken });
      // res.send({ message: "successfully login", user: user, authtoken })
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// ROUTE 2: Authenticate a User using: POST "/api/auth/login". No login required
router.post("/getuser", fetchuser, async (req, res) => {
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    console.log(user);
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;

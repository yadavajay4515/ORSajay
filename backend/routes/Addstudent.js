const express=require('express')
const router = express.Router();
const Ajay =require("../models/StudentData");
const fetchuser = require('../middleware/fetchuser');
// const { updateOne } = require('../models/User');s
const { body, validationResult } = require('express-validator');


// get all data

router.get( "/getalldata" ,async(req, res) => {
  try {
      const user = await Ajay.find();
      res.json(user);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
});


// get data only one id 
router.get('/fetchstudent',fetchuser, async (req, res) => {
  try {
      console.log(req.user1.id);
      const student = await Ajay.find({user: req.user1.id });
      res.json(student)
  } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
})







router.post('/addstudent', fetchuser, [
  body('firstname', 'Enter a valid title').isLength({ min: 1 }),
  body('lastname', 'must be atleast 1 characters').isLength({ min: 1 }),], async (req, res) => {
    let success=false;
      try {

        const { firstname,lastname, email, mobileno,collegeid} = req.body

          // If there are errors, return Bad request and the errors
          const errors = validationResult(req);
           if (!errors.isEmpty()) {
              return res.status(200).json({success, errors: errors.array() });
          }
          const user = new Ajay({
            firstname, lastname, email,mobileno,collegeid, user: req.user1.id
          })
          const savedNote = await user.save()
          success=true;
          res.json({success,message:"save data succesfully",savedNote})

      } catch (error) {
          console.error(error.message);
          res.status(500).send("Internal Server Error");
      }
  })

  

//  code with harry update
  router.put('/updatenote/:id', fetchuser, async (req, res) => {
    const { firstname,lastname, email, mobileno,collegeid} = req.body
    const newNote  = {};
    if(firstname){newNote.firstname = firstname};
    if(lastname){newNote.lastname = lastname};
    if(email){newNote.email = email};
    if(mobileno){newNote.mobileno = mobileno};
    if(collegeid){newNote.collegeid = collegeid};

    // Find the note to be updated and update it
    let note = await Ajay.findById(req.params.id);
    if(!note){return res.status(404).send("Not Found")}

    if(note.user.toString() !== req.user1.id){
        return res.status(401).send("Not Allowed");
    }

    note = await Ajay.findByIdAndUpdate(req.params.id, {$set: newNote}, {new:true})
    res.json({note});

    })



// codde with harry delete

    router.delete('/deletenote/:id', fetchuser, async (req, res) => {
      try {
          // Find the note to be delete and delete it
          let note = await Ajay.findById(req.params.id);
          if (!note) { return res.status(404).send("Not Found") }
  
          // Allow deletion only if user owns this Note
          if (note.user.toString() !== req.user1.id) {
              return res.status(401).send("Not Allowed");
          }
  
          note = await Ajay.findByIdAndDelete(req.params.id)
          res.json({ "Success": "Note has been deleted", note: note });
      } catch (error) {
          console.error(error.message);
          res.status(500).send("Internal Server Error");
      }
  })






//   })
//  data base me data ko save karne kam post methor ka
// router.post("/addstudent1", (req, res)=> {
//   console.log(req.body)
//     const { firstname,lastname, email, mobileno,collegeid} = req.body
//     console.log(req.body)

        
//             const user = new  Ajay({
//                 firstname,
//                 lastname,
//                 email,
//                 mobileno,
//                 collegeid
//             })
//              user.save(err  ) => {

//              if(err) {
//               res.send({error:"Enter valid data"})
//           } else {
//               res.send({ sucess:{ message: "Successfully Registered"}})
//           }
//         }
//         }
     
//      )
    


// update karne ke liye (update)
    
// router.put( "/addstudent/:id",async(req, res) => {
//     const id=req.params.id
//     try {

//        const user=  await Ajay.updateOne(
//         {
//             "_id":id
//         }, 
//         req.body
//        )
//        res.json(user)
//       } catch (error) {
//         res.json(error)
        
//       }
//     })


// // single id wala data lane ke liye( get (single id))

router.get("/addstudent/:userid",fetchuser,async(req, res) => {
        const userid = req.params.userid;
        console.log(userid);
           let success=false;
    try {
        const user=await Ajay.findById(userid);
        success=true;
        res.json({success,user});
      } catch (error) {
        res.json({success, message: error });
      }
}
);


// //    Database all data return karega get methord(get (all) data)
//     router.get( "/addstudent",async(req, res) => {
//     try {
//         const user = await Ajay.find();
//         res.json(user);
//       } catch (error) {
//         res.json({ message: error });
//       }
// });


            
// // data delete(delete)
// router.delete( "/addstudent/:userid",async(req, res) => {
//     try {

//         const user = await Ajay.findByIdAndDelete(req.params.userid);
//         res.json(user);
//         // res.send("message delete successful")
//       } catch (error) {
//         res.json({ message: error });
//       }
//     })

    


module.exports = router
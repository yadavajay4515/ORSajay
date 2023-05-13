const express=require('express')
const fetchuser = require('../middleware/fetchuser');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const addmarksheet =require("../models/maksheetshcema");


// router.get( "/getallmarksheet" ,async(req, res) => {
//     try {
//         const user = await addmarksheet.find();
//         res.json(user);
//       } catch (error) {
//         console.error(error.message);
//         res.status(500).send("Internal Server Error");
//       }
//   }); 




  router.get('/fetchmarksheet',fetchuser, async (req, res) => {
    try {
        console.log(req.user1.id);
        const student = await addmarksheet.find({user: req.user1.id });
        res.json(student)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
  })
  
router.post('/Addmarkseet', fetchuser, [
    body('RollNo', 'Enter a valid title').isLength({ min: 1 }),
    body('Name', 'must be atleast 5 characters').isLength({ min: 1 }),], async (req, res) => {
        try {
  
          const { RollNo,Name, Physics, chemistry,Maths} = req.body
  
            // If there are errors, return Bad request and the errors
            const errors = validationResult(req);
             if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const user = new addmarksheet({
                RollNo,Name, Physics, chemistry,Maths, user: req.user1.id
            })
            const savedNote = await user.save()
  
            res.json({message:"save data succesfully",savedNote})
  
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })






    router.put('/updatemarksheet/:id', fetchuser, async (req, res) => {
        const { RollNo,Name, Physics, chemistry,Maths} = req.body
        const newNote  = {};
        if(RollNo){newNote.RollNo = RollNo};
        if(Name){newNote.Name = Name};
        if(Physics){newNote.Physics = Physics};
        if(chemistry){newNote.chemistry = chemistry};
        if(Maths){newNote.state = Maths};
    
        // Find the note to be updated and update it
        let note = await addmarksheet.findById(req.params.id);
        if(!note){return res.status(404).send("Not Found")}
    
        if(note.user.toString() !== req.user1.id){
            return res.status(401).send("Not Allowed");
        }
    
        note = await addmarksheet.findByIdAndUpdate(req.params.id, {$set: newNote}, {new:true})
        res.json({note});
    
        })





        router.delete('/deletemarksheet/:id', fetchuser, async (req, res) => {
            try {
                // Find the note to be delete and delete it
                let note = await addmarksheet.findById(req.params.id);
                if (!note) { return res.status(404).send("Not Found") }
        
                // Allow deletion only if user owns this Note
                if (note.user.toString() !== req.user1.id) {
                    return res.status(401).send("Not Allowed");
                }
        
                note = await addmarksheet.findByIdAndDelete(req.params.id)
                res.json({ "Success": "Note has been deleted", note: note });
            } catch (error) {
                console.error(error.message);
                res.status(500).send("Internal Server Error");
            }
        })
    



        router.get("/addmarksheet/:userid",fetchuser,async(req, res) => {
            const userid = req.params.userid;
            console.log(userid);
               let success=false;
        try {
            const user=await addmarksheet.findById(userid);
            success=true;
            res.json({success,user});
          } catch (error) {
            res.json({success, message: error });
          }
    }
    );
    



 module.exports = router
const express=require('express')
const fetchuser = require('../middleware/fetchuser');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const addcollege =require("../models/collegeschema");


router.get( "/getallcollege" ,async(req, res) => {
    try {
        const user = await addcollege.find();
        res.json(user);
      } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
      }
  }); 




  router.get('/fetchstudent',fetchuser, async (req, res) => {
    try {
        console.log(req.user1.id);
        const student = await addcollege.find({user: req.user1.id });
        res.json(student)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
  })
  
router.post('/Addcollege', fetchuser, [
    body('name', 'Enter a valid title').isLength({ min: 3 }),
    body('phoneno', 'must be atleast 5 characters').isLength({ min: 3 }),], async (req, res) => {
        try {
  
          const { name,phoneno, address, city,state} = req.body
  
            // If there are errors, return Bad request and the errors
            const errors = validationResult(req);
             if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const user = new addcollege({
                name,phoneno, address, city,state, user: req.user1.id
            })
            const savedNote = await user.save()
  
            res.json({message:"save data succesfully",savedNote})
  
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })






    router.put('/updatecollege/:id', fetchuser, async (req, res) => {
        const { name,phoneno, address, city,state} = req.body
        const newNote  = {};
        if(name){newNote.name = name};
        if(phoneno){newNote.phoneno = phoneno};
        if(address){newNote.address = address};
        if(city){newNote.city = city};
        if(state){newNote.state = state};
    
        // Find the note to be updated and update it
        let note = await addcollege.findById(req.params.id);
        if(!note){return res.status(404).send("Not Found")}
    
        if(note.user.toString() !== req.user1.id){
            return res.status(401).send("Not Allowed");
        }
    
        note = await addcollege.findByIdAndUpdate(req.params.id, {$set: newNote}, {new:true})
        res.json({note});
    
        })





        router.delete('/deleteaddcollege/:id', fetchuser, async (req, res) => {
            try {
                // Find the note to be delete and delete it
                let note = await addcollege.findById(req.params.id);
                if (!note) { return res.status(404).send("Not Found") }
        
                // Allow deletion only if user owns this Note
                if (note.user.toString() !== req.user1.id) {
                    return res.status(401).send("Not Allowed");
                }
        
                note = await addcollege.findByIdAndDelete(req.params.id)
                res.json({ "Success": "Note has been deleted", note: note });
            } catch (error) {
                console.error(error.message);
                res.status(500).send("Internal Server Error");
            }
        })





        router.get("/addcollege/:userid",fetchuser,async(req, res) => {
            const userid = req.params.userid;
            console.log(userid);
               let success=false;
        try {
            const user=await addcollege.findById(userid);
            success=true;
            res.json({success,user});
          } catch (error) {
            res.json({success, message: error });
          }
    }
    );
    
    

 module.exports = router
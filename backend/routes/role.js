const express=require('express')
const fetchuser = require('../middleware/fetchuser');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const addrole =require("../models/Addroleschema");





router.get('/fetchrole',fetchuser, async (req, res) => {
    try {
        console.log(req.user1.id);
        const student = await addrole.find({user: req.user1.id });
        res.json(student)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
  })
  




router.post('/Addrole', fetchuser, [
    body('Name', 'Enter a valid title').isLength({ min: 3 }),
    body('Discription', 'must be atleast 5 characters').isLength({ min: 3 }),], async (req, res) => {
        try {
  
          const { Name,Discription} = req.body
  
            // If there are errors, return Bad request and the errors
            const errors = validationResult(req);
             if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const user = new addrole({
                Name,Discription, user: req.user1.id
            })
            const savedNote = await user.save()
  
            res.json({message:"save data succesfully",savedNote})
  
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })



    router.put('/updaterole/:id', fetchuser, async (req, res) => {
        const { Name,Discription, } = req.body
        const newNote  = {};
        if(Name){newNote.Name = Name};
        if(Discription){newNote.Discription = Discription};
      
    
        // Find the note to be updated and update it
        let note = await addrole.findById(req.params.id);
        if(!note){return res.status(404).send("Not Found")}
    
        if(note.user.toString() !== req.user1.id){
            return res.status(401).send("Not Allowed");
        }
    
        note = await addrole.findByIdAndUpdate(req.params.id, {$set: newNote}, {new:true})
        res.json({note});
    
        })


        router.delete('/deleterole/:id', fetchuser, async (req, res) => {
            try {
                // Find the note to be delete and delete it
                let note = await addrole.findById(req.params.id);
                if (!note) { return res.status(404).send("Not Found") }
        
                // Allow deletion only if user owns this Note
                if (note.user.toString() !== req.user1.id) {
                    return res.status(401).send("Not Allowed");
                }
        
                note = await addrole.findByIdAndDelete(req.params.id)
                res.json({ "Success": "Note has been deleted", note: note });
            } catch (error) {
                console.error(error.message);
                res.status(500).send("Internal Server Error");
            }
        })

//    id ke carsponding data fatch karna
        router.get("/addroleget/:userid",fetchuser,async(req, res) => {
            const userid = req.params.userid;
            console.log(userid);
               let success=false;
        try {
            const user=await addrole.findById(userid);
            success=true;
            res.json({success,user});
          } catch (error) {
            res.json({success, message: error });
          }
    }
    );
    



module.exports = router
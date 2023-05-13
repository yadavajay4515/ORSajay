const express = require('express');
const app = express();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

app.use(express.json());
app.post('/ajay', (req, res)=>{ 
    console.log(req.body);
    const user = User(req.body);
    user.save()
    res.send(req.body);
})
app.post('/',[
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
] , (req, res)=>{ 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
      }).then(user => res.json(user))
      .catch(err=> {console.log(err)
    res.json({error: 'Please enter a unique value for email', message: err.message})})

} )
app.listen(3000);
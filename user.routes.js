import { Router, json } from "express";
import  Jwt  from "jsonwebtoken";
import bcrypt from "bcryptjs";



const router = Router();

// register route
router.post("/api/users", async (req, res, next) => {

    try {
        // add user to database
        const salt = bcrypt.genSaltSync(10);

        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        req.body.password = hashedPassword;

       
        const registerResult = await userModel.create(req.body);
        res.status(201).json(registerResult);
    } catch (error) {
        next(error);
    }
});

// Fetch all users
router.get("/api/users", async (req, res, next) => {
    try {
        const fetchUsersResult = await userModel.find({});
        res.status(200).json(findResult);
    } catch (error) {
        next(error);
    }
});


// Login a user
router.post("/api/users/login", async (req, res, next) => {
    try {
        // attempt to login
        const loginResult = await userModel.findOne({email: req.body.email}).exec();

        const isPasswordMatch = await bcrypt.compare(
            req.body.password,
            user.password
          );
        
          if (isPasswordMatch === false) {
            console.log("Error: Invalid credentials");
          }

        // Token generation
        const token = Jwt.sign({id: loginResult._id}, "secretKey");

        console.log(token);


      
    } catch (error) {
        res.status(500).json({message: error});
        next(error);
    }
});

// Logout a user
router.delete('/logout', (req, res, next)=> {
    if(req.session) {
        req.session.destroy(error => {
            if (error) {
                next(error);
                res.status(400).send('Unable to log out');
            } else {
                res.send('Logout successful')
            }
        });
    } else {
        res.end();
    }
});


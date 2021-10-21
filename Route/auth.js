const express = require('express');

const router = express.Router();

require('../Database/DatabaseConnection');
const User = require('../Model/UserSchema');
const LoginUser = require('../Model/AdminSchema');

// router.get('/',(req,res) => {
//     res.send("hello world from the server!!");
// })

//register api
router.post("/register", async (req,res) => {
    console.log(req.body);
    
    const {name,address,destination,qualification,
        ielts,phone,email,percentage,listening,reading,writing,speaking,overallband} = req.body;
    

    try {

       const userExist = await User.findOne({email:email});

        if(userExist)
        {
            res.json({status: 201});
            // return res.status(422).json({error: "Email Already Exist Cannot Register!!!"});
            
        }

        const user = new User({name,address,destination,qualification,
            ielts,phone,email,percentage,listening,reading,writing,speaking,overallband});

        const userRegister = await user.save();
        if(userRegister)
        {
            res.status(200).json({message: "User Registration Successfull!!"});

        }
        
    } catch (error) {
        console.log(error);
    }
})

// delete user
router.get('/delete/:id', async (req,res) =>{
    var id = req.params.id;
    // console.log(id);
    await User.findOneAndRemove({_id:id});
    res.send({message:"Delete User Successfull"});
    
    
})

// read user
router.get('/home', async (req,res) =>{
    const allUsers = await User.find();
    res.send(allUsers);
    

})

router.get('/viewdetails/:id', async(req,res) =>{
//    console.log(req.params.id);
    const yourDetails = await User.findOne({_id:req.params.id});
    res.send(yourDetails);
})



router.get('/update/:id', async (req,res) =>{
    var id = req.params.id;
    
    const userDetails = await User.findOne({_id:id});
    res.send(userDetails)
    // console.log(userDetails);
    
})

// update user

router.post('/update/:id', async (req,res) => {
    var id = req.params.id;
    console.log(id);
    const {name,email,phone,address,destination,qualification,percentage,ielts,listening,reading,writing,speaking,overallband} =req.body;

    try {
        await User.updateOne({_id:id},{name:name, email:email, phone:phone, address:address, destination:destination, qualification:qualification
            ,percentage:percentage,ielts:ielts,writing:writing,speaking:speaking,listening:listening,overallband:overallband,reading:reading});
            return res.status(200).json({message: "User Update Successfull"});
        
    } catch (error) {

        return  res.json({status: 201});

    }
   

    // console.log("updated value in server console:" + updatedValue);
   

})

//login route

router.post('/', async (req,res) => {
    // console.log(req.body);
    try {
        const {username, password} =req.body;
        const loginDetails = await LoginUser.findOne({username:username ,password:password})
        if(loginDetails){
            res.json({status: 201});
        }else
        {
            return res.status(400).json({error:"Login Credential Did Not Match !!!"});
        }
          
        // res.send(userLogin);
        
        
    } catch (error) {
        console.log(error);
    }

})

router.post('/', (req,res) => {
    res.send("hello i am Server");
})



//change login credential
router.post('/changesetting', async (req,res) => {
    try {
        const {newUsername, newPassword,user_id} =req.body;
        
        const checkuser_id = await LoginUser.findOne({user_id:user_id});

        // console.log("data from change login\n" + checkuser_id);
       
        
        if(checkuser_id)
        {
            LoginUser.updateOne({user_id:checkuser_id.user_id},{password:newPassword, username:newUsername}, (err,result) =>{
                if(err){
                    return res.json({response:"Error occured while updating!!",status:400});
                }else{
                    console.log("Password update successfull !!");
                    return res.json({response:"Update successfull!!",status:200});
    
                    
                }
            })
        }else{
            return res.json({response:"User_id Doesnot exist!!",status:401});

        }
     
        
    } catch (error) {
        console.log("Change Login error :" + error);
    }
})

module.exports = router;
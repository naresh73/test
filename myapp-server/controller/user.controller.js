const UserModel = require('../models/user.model.js');

async function CreateAccount(req, res) {
    
    //check if user exist
    const userEmail = await UserModel.findOne({ email: req.body.email });
    const userName = await UserModel.findOne({ username: req.body.username })
    
    if (userEmail && userName) {
        return res.send("user already exisits!");
    }

    else if (userEmail || userName) {
        if (userEmail) {
            return res.send("email already in use")
        }
        else {
            return res.send("username already avilable")
        }
    }

    const newUser = new UserModel(req.body)
    try {
        await newUser.save()
        res.send({
            message: "Account Created Successfully",
            userDetails: newUser
        })
    } catch (error) {
        res.send(error)
    }
}

async function DataOfUsers(req, res) {
    const userDatails = await UserModel.find({});

    try {
        res.send(userDatails)
    } catch (error) {
        res.send(error)
    }
}

async function EditUser(req, res) {
    try {
        await UserModel.findByIdAndUpdate(req.params.id, req.body);
        res.send("Data Updated")
    } catch (error) {
        res.send(error)
    }
}

async function DeleteUser(req, res) {
    try {
        await UserModel.findByIdAndDelete(req.params.id);
        res.send("Data Deleted")
    } catch (error) {
        res.send(error)
    }
}

module.exports = { CreateAccount, DataOfUsers, EditUser, DeleteUser };
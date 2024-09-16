const model  = require('../model/user')
const User = model.User;

exports.createUser  = (req,res) =>{
    const user = new User(req.body);
    user.save()
     .then(() => {
        res.status(201).json(req.body);
        console.log('User saved');
      })
     .catch((err) => {
        res.status(400);
        console.error(err);
      });
}

exports.getAllUsers = async (req,res) => {

    const users = await User.find({});
    res.json(users);

}

exports.getUser = async (req, res) => {
    const id = req.params.id;
    const user = await User.findById(id);
    res.json(user);
}

exports.replaceUser = async (req, res) => {
    
    const id = req.params.id;
    try{
        const doc = await User.findOneAndReplace({_id:id}, req.body , {new:true});
        res.status(201).json(doc);
    }
    catch(err){
        res.status(400).json(err);
    }

}

exports.updateUser = async (req, res) => {

    const id = req.params.id;
    try{
        const doc = await User.findByIdAndUpdate(id, req.body , {new:true});
        res.status(201).json(doc);
    }
    catch(err){
        res.status(400).json(err);
    }

}

exports.deleteUser = async (req, res) => {

    const id = req.params.id;
    try{
        const doc = await User.findOneAndDelete({_id:id});
        res.status(201).json(doc);
        console.log('User deleted')
    }
    catch(err){
        res.status(400).json(err);
    }

}
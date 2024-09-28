const model  = require('../model/storeuser')
const StoreUser = model.StoreUser;

exports.createStoreUser  = async (req,res) =>{
    try{
        const storeUser = await StoreUser.findOneAndUpdate({ email: req.body.email}, req.body , {upsert: true });
        console.log(`Store user saved successfully`);
        res.json(storeUser);
    }
    catch{(err) => {
        res.status(400);
        console.error(err);
    }};
}

exports.getStoreUser = async (req,res) =>{
    emailId = req.params.email;
    try{
       const storeUser = await StoreUser.findOne({email: emailId});
       res.json(storeUser);
    }
    catch(err){
        console.status(403).log(err);
    }
}







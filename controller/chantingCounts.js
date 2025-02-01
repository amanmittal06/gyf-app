const { json } = require('express');
const model  = require('../model/chantingCounts')
const Data = model.Data;

exports.createData  = (req,res) =>{
    const data = new Data(req.body);
    data.save()
     .then(() => {
        res.status(201).json(req.body);
        console.log('Data saved');
      })
     .catch((err) => {
        res.status(400),json(err);
        console.error(err);
      });
}


exports.getDataofAUser = async(req,res) =>{
    const user = req.params.username;
    const datas = await Data.find({username:user});
    res.json(datas);

}


exports.updateData = async (req, res) => {

    const id = req.params.id;
    try{
        const doc = await Data.findByIdAndUpdate(id, req.body);
        res.status(201).json(doc);
    }
    catch(err){
        res.status(400).json(err);
    }

}





const model  = require('../model/newsletter')
const Newsletter = model.Newsletter;

exports.createNewsletter  = (req,res) =>{
    const newsletter = new Newsletter(req.body);
    newsletter.save()
     .then(() => {
        res.status(201).json(req.body);
        console.log('Newsletter saved');
      })
     .catch((err) => {
        res.status(400);
        console.error(err);
      });
}

exports.getAllNewsletters = async (req,res) => {
    const newsletters = await Newsletter.find({});
    res.json(newsletters);
}

exports.getLatestNewsletter = async (req, res) => {
    const newsletter = await Newsletter.find({latest:true});
    res.json(newsletter);
}






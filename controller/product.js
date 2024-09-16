const model  = require('../model/product')
const Product = model.Product;

exports.createProduct  = (req,res) =>{
    const product = new Product(req.body);
    product.save()
     .then(() => {
        res.status(201).json(req.body);
        console.log('Product saved');
      })
     .catch((err) => {
        res.status(400);
        console.error(err);
      });
}

exports.getAllProducts = async (req,res) => {

    const products = await Product.find({});
    res.json(products);

}

exports.getProduct = async (req, res) => {
    const id = req.params.id;
    const product = await Product.findById(id);
    res.json(product);
}

exports.replaceProduct = async (req, res) => {
    
    const id = req.params.id;
    try{
        const doc = await Product.findOneAndReplace({_id:id}, req.body , {new:true});
        res.status(201).json(doc);
    }
    catch(err){
        res.status(400).json(err);
    }

}

exports.updateProduct = async (req, res) => {

    const id = req.params.id;
    try{
        const doc = await Product.findByIdAndUpdate(id, req.body , {new:true});
        res.status(201).json(doc);
    }
    catch(err){
        res.status(400).json(err);
    }

}

exports.deleteProduct = async (req, res) => {

    const id = req.params.id;
    try{
        const doc = await Product.findOneAndDelete({_id:id});
        res.status(201).json(doc);
        console.log('Product deleted')
    }
    catch(err){
        res.status(400).json(err);
    }

}
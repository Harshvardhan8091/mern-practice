import express from 'express'
import mongoose from 'mongoose'

const app = express();
mongoose.connect("mongodb://localhost:27017/ShopDB")
    .then(()=> {console.log('database connection')

    })
    .catch((err)=>{
        console.error('database error: ',err);
    })

    const productSchema=new mongoose.Schema({
        name: String,
        price: Number
    });

const product = mongoose.model('Product', productSchema);


app.get("/products", async (req, res) => {
    const page = parseInt(req.query.page) || 1;

    const limit = 2;
    const skip = limit * (page - 1);

    const product = await product.find({}, {name:1,_id:0}).sort({price:1}).skip(skip).limit(limit);
    res.json({
        page,
        data: product
    });
    
});

app.listen(3000, () => {
    console.log('server is running on port 3000');
}); 
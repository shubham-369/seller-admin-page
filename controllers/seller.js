const sellerProduct = require('../models/seller');

exports.postData = (req, res, next) => {
    const {price, name, category} = req.body;
    sellerProduct.create({
        price: price,
        name: name,
        category: category
    })
    .then(() => {
        console.log('Data saved to the database');
        res.status(201).json({ message: 'Data saved to the database' });
    })
    .catch((error) => {
        console.log('error while sending data to db', error);
        res.status(500).json({error:'Internal server error'});
    })
}

exports.getData = (req, res, next) => {
    sellerProduct.findAll()
    .then((data) => {
        res.status(200).json(data);
    })
    .catch((error) => {
        console.log('error while fetching data from db', error);
        res.status(500).json({error:'Internal server error'});
    })
}

exports.deleteData = (req, res, next) => {
    const id = req.query.id;
    sellerProduct.destroy({where:{id:id}})
    .then(() => {
        console.log('Data deleted from the database');
        res.status(201).json({ message: 'Data deleted from the database' });
    })
    .catch((error) => {
        console.log('error while deleting data from db', error);
        res.status(500).json({error:'Internal server error'});
    })
}

exports.app = (req, res, next) => {
    res.render('index');
}
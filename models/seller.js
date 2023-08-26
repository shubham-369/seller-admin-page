const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const sellerProduct  = sequelize.define('sellerProducts', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    price:{
        type: Sequelize.STRING,
        allowNull: false
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    category:{
        type: Sequelize.STRING,
        allowNull: false
    }
    
});

module.exports = sellerProduct;
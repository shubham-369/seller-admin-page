const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const sellerRoute = require('./routes/seller');
const sequelize = require('./util/database');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(sellerRoute);

const port = process.env.PORT || 9000;

sequelize
.sync()
.then(() => {
    app.listen(port);
})
.catch((error) => {
    console.log('error while running server', error);
})
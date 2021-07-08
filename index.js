const express = require('express');
const mongoose = require('mongoose');
const jwt = require('./src/utils/jwt');
const errorHandler = require('./src/utils/errorHandler');

const PORT = 8000;
const databaseURL = "mongodb+srv://shubham:test123@airline-server-j8sd4.mongodb.net/UserData?retryWrites=true&w=majority";

const app = express();
app.use(express.json())

mongoose.connect(databaseURL, {useNewUrlParser: true, useUnifiedTopology: true,
    'useFindAndModify': false, 'useCreateIndex': true});

const connection = mongoose.connection;
connection.once("open",()=>{
    app.listen(PORT, ()=>{
        console.log("server started at 8000");
    })
}).catch((err)=>{
    console.log("DB Connection error",err);
})
app.use(jwt());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
  })



const routes = require('./src/routes/routes')
app.use('/',routes);
app.use(errorHandler);





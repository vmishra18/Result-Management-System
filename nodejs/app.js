const express = require("express");
const connection = require("./db_connection")
const path = require('path');
const routes = require("./Routes/authRoutes");
const bodyParser = require('body-parser');
const studentRoutes = require("./Routes/studentRoutes");
const ejs = require("ejs");
const app = express();


// connection.connect(function (error) {
//     if (!!error) console.log(error);
//     else console.log('Database Connected!');
// });

//set views file
app.set('views', path.join(__dirname, 'views'));

//set view engine
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', routes);
app.use('/', studentRoutes);

//app.use("/","hiiii");
// Server Listening
app.listen(3000, () => {
    console.log('Server is running at port 3000');
});
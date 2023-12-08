const express = require("express");
const pug = require('pug');
const path = require('path');
const routes = require('./routes/routes')

const app = express();

app.set("view engine","pug");
app.set("views", __dirname + "/views")
app.use(express.static(path.join(__dirname, '/public')));


const urlencodedParser = express.urlencoded({
    extended: false
});

app.get("/",routes.titleFunction)
app.get("/title", routes.titleFunction);
app.get('/orders',routes.index);
app.get("/features",routes.featureFunction);
app.post('/features',urlencodedParser,routes.submitted);
//app.get('/title',routes.home);

app.get("/features",routes.featureFunction);

app.listen(3000);
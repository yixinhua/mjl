const express=require('express');
const xm=require('./routers/xm.js');
const bodyParser=require('body-parser');
const product=require("./routers/product_route.js")
const details=require("./routers/product_details.js")
var app=express();
app.listen(3000);
app.use(express.static('./mypro'));
app.use(express.static('../mjl_first'));
app.use(bodyParser.urlencoded({
  extended:false
}));
app.use("/mypro",xm);
app.use("/product",product);
app.use("/details",details);

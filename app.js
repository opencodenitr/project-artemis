require('dotenv').config();
const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const _=require('lodash');


app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static("public"));

mongoose.connect(process.env.DB_URL,{useNewUrlParser:true,useUnifiedTopology:true});


app.get("/",function(req,res){
  res.render("home");
});


const PORT=process.env.PORT || 3000;
app.listen(PORT,function(){
  console.log('Server is running on port '+PORT);
});

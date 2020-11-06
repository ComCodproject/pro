const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/test" ,{ useUnifiedTopology: true , useNewUrlParser: true })
.then( ()=> console.log("connection successfully")).catch( () => console.log("error"));

//schema and model

const schemaPlay  = new mongoose.Schema({

    
});

//model
const Test = new mongoose.model("Test",schemaPlay);

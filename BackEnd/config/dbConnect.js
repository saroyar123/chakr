const mongoose=require("mongoose");

const dbConnect=()=>{
    mongoose.connect(process.env.databaseUrl)
    .then((con)=>console.log("database is connected"))
    .catch((err)=>console.log(err));
    
}

module.exports=dbConnect

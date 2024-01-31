
const { Schema, default: mongoose } = require("mongoose");


    const graphData=Schema({
        "date":String,
        "avg":Number
    })

    module.exports=mongoose.model("graphData",graphData);
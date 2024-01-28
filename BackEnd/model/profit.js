const { Double } = require("mongodb");
const { Schema, default: mongoose } = require("mongoose");


    const profit=Schema({
        "Timestamp":String,
        "Profit Percentage":Number
    })

    module.exports=mongoose.model("profit",profit);
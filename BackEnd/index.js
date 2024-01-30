const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./config/dbConnect");
const profit = require("./model/profit");
const cors=require("cors")


dotenv.config();

const app = express();
dbConnect();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get("/", (req, res) => {
  res.json({
    suceess: true,
  });
});



// Custom downsampling function
function customDownsampling(data) {
    try {
      const result = [];
      let date=data[0].Timestamp.toString().slice(0,7);
      let sum_of_Total_Prifit_in_a_Month=0;
      let number_of_Days=0;

      console.log("hello")
    data.forEach(element => {
        let newDate=element.Timestamp.toString().slice(0,7);

        if (newDate!=date) {
            let avg=sum_of_Total_Prifit_in_a_Month/number_of_Days;
            result.push({date,avg});
            date=newDate;
            sum_of_Total_Prifit_in_a_Month=0;
            number_of_Days=0;        
            
        }
        sum_of_Total_Prifit_in_a_Month+=element["Profit Percentage"];
        number_of_Days+=1;
    });
    
    console.log("hello 1")
    let avg=sum_of_Total_Prifit_in_a_Month/number_of_Days;
    result.push({date,avg});
    
    console.log(result)
  
      return result;
    } catch (error) {
      return error;
    }
  }


app.get("/data",async(req,res)=>{
    try {
        const Profit=await profit.find();

        const data = customDownsampling(Profit);

        res.status(200).json({
            suceess:true,
            data
        })
    } catch (error) {
        res.status(400).json({
            suceess:false,
            error
        })
    }
})






app.listen(process.env.port, () => {
  console.log("server is runnig");
});

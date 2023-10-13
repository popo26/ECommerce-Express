const axios = require("axios");


const getAllProducts = (req,res)=>{
    axios.get("https://fakestoreapi.com/products").then((response) => {
        const data = response.data;
        //console.log(data);
        res.status(200);
        res.send(data);
      });
}

module.exports = {getAllProducts};
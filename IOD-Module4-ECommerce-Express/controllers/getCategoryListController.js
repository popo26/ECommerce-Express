const axios = require("axios");
const DataFetch = require("../libraries/DataFetch");
const dataFetch = new DataFetch();

const getCetegoryList = (req,res) =>{
    // console.log("req.param is", req.params);
    // const result = req.params;
    // let url;
    
    // result.type == "women"
    //   ? (url = "https://fakestoreapi.com/products/category/women's%20clothing")
    //   : result.type == "men"
    //   ? (url = "https://fakestoreapi.com/products/category/men's%20clothing")
    //   : (url = `https://fakestoreapi.com/products/category/${result.type}`);
    
    // axios.get(url).then((response) => {
    //   const data = response.data;
    //   //console.log(data);
    //   res.status(200);
    //   res.json(data);
    // });

    dataFetch.fetchCategory(req,res);
}

module.exports = {getCetegoryList};


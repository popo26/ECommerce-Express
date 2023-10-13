const axios = require("axios");

const getSelectedItem = (req,res) => {
    console.log("req.param is", req.params);
    const result = req.params;
    const url = `https://fakestoreapi.com/products/${result.id}`;
    axios.get(url).then((response) => {
      const data = response.data;
      //console.log(data);
      res.status(200);
      res.json(data);
    });
}

module.exports = {getSelectedItem};
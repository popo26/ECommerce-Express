const axios = require("axios");

const postItem = (req,res) => {
    console.log("req.param is", req.params);
    const result = req.params;
    axios
      .get(`https://fakestoreapi.com/products/${result.id}`)
      .then((response) => {
        const data = response.data;
        //console.log(data);
        res.status(200);
        res.json(data);
        cartItem.push(data);
        console.log("Cart Item in Add ROute:", cartItem)
      });
}

module.exports = {postItem};


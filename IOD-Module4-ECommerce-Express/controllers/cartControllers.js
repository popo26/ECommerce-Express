const axios = require("axios");

let cartItem = [];

const getCartItems = (req,res) => {
   // res.sendFile("./public/cart.html", { root: __dirname});
   console.log("Cart Item at Cart :", cartItem);
   res.json(cartItem);
}


const postAddItem = (req,res) => {
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

const postDeleteItem = (req,res) => {
  console.log("req.param is", req.params);
  const result = req.params;
  cartItem = cartItem.filter((item) => item.id != result.id);
  console.log("Cart from Delete: ", cartItem);
  res.json(cartItem);

}

module.exports = {getCartItems, postAddItem, postDeleteItem};


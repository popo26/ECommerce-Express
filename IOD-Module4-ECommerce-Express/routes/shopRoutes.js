const express = require("express");
const router = express.Router();
const axios = require("axios");

let cartItem = [];

router.get("/", (req, res) => {
  axios.get("https://fakestoreapi.com/products").then((response) => {
    const data = response.data;
    //console.log(data);
    res.status(200);
    res.send(data);
  });
});

router.get("/cart", (req, res) => {
  // res.sendFile("./public/cart.html", { root: __dirname});
  console.log("Cart Item at Cart :", cartItem);
  res.json(cartItem);
});

router.get("/:type", (req, res) => {
  console.log("req.param is", req.params);
  const result = req.params;
  let url;

  result.type == "women"
    ? (url = "https://fakestoreapi.com/products/category/women's%20clothing")
    : result.type == "men"
    ? (url = "https://fakestoreapi.com/products/category/men's%20clothing")
    : (url = `https://fakestoreapi.com/products/category/${result.type}`);

  axios.get(url).then((response) => {
    const data = response.data;
    //console.log(data);
    res.status(200);
    res.json(data);
  });
});

router.get("/item/:id", (req, res) => {
  console.log("req.param is", req.params);
  const result = req.params;
  const url = `https://fakestoreapi.com/products/${result.id}`;
  axios.get(url).then((response) => {
    const data = response.data;
    //console.log(data);
    res.status(200);
    res.json(data);
  });
});

router.post("/add/:id", (req, res) => {
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
});

router.post("/delete/:id", (req, res) => {
  console.log("req.param is", req.params);
  const result = req.params;
  cartItem = cartItem.filter((item) => item.id != result.id);
  console.log("Cart from Delete: ", cartItem);
  res.json(cartItem);
});

module.exports = router;

const express = require("express");
const router = express.Router();
const axios = require("axios");
const getAllProductsController = require("../controllers/getAllProductsController");
const getCategoryListController = require("../controllers/getCategoryListController");
const getSelectedItemController = require("../controllers/getSelectedItemController");
const postItemController = require("../controllers/postItemController");

let cartItem = [];

router.get("/", (req, res) => {
  getAllProductsController.getAllProducts(req, res);
});

router.get("/cart", (req, res) => {
  // res.sendFile("./public/cart.html", { root: __dirname});
  console.log("Cart Item at Cart :", cartItem);
  res.json(cartItem);
});

router.get("/:type", (req, res) => {
  getCategoryListController.getCetegoryList(req, res);
});

router.get("/item/:id", (req, res) => {
  getSelectedItemController.getSelectedItem(req, res);
});

router.post("/add/:id", (req, res) => {
  // postItemController.postItem(req,res);
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
      console.log("Cart Item in Add ROute:", cartItem);
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

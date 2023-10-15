const axios = require("axios");
const Logger = require("./Logger");
const logging = new Logger();
let cartItems = [];

class CartFetch {
    constructor() {}
//   constructor() {
//     this.id = Math.floor(Math.random() * 100000);
//   }

//   #log = (cartArray) => {
//     console.log("********************************************************");
//     console.log(`Cart Transaction ID:${this.id}`);
//     cartArray == 0
//       ? console.log("No item in the cart.")
//       : console.log(
//           `Current Cart Item IDs: ${cartArray.map((item) => item.id)}`
//         );
//     console.log("********************************************************");
//   };

  getItems = (req, res) => {
    // this.#log(cartItems);
    logging.logCartItems(cartItems);
    res.json(cartItems);
  };

  addItem = (req, res) => {
    const result = req.params;
    axios
      .get(`https://fakestoreapi.com/products/${result.id}`)
      .then((response) => {
        const data = response.data;
        res.status(200);
        res.json(data);
        cartItems.push(data);
        // this.#log(cartItems);
        logging.logCartItems(cartItems);
      });
  };

  deleteItem = (req, res) => {
    const result = req.params;
    cartItems = cartItems.filter((item) => item.id != result.id);
    // this.#log(cartItems);
    logging.logCartItems(cartItems);
    res.json(cartItems);
  };
}

module.exports = CartFetch;

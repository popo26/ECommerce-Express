const axios = require("axios");
const Logger = require("./Logger");
const logging = new Logger();

class DataFetch {

    constructor() {}
//   constructor() {
//     this.id = Math.floor(Math.random() * 1000000);
//   }

  //   #logResultArray = (data) => {
  //     console.log(`ID:${this.id}, Data Length: ${data.length}`);
  //   };

  //   #logResultId = (data) => {
  //     console.log(`ID:${this.id}, Data ID: ${data.id}`);
  //   };

  fetchAll(req, res) {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      const data = response.data;
      //   this.#logResultArray(data);
      logging.logApiFetchResultArray(data);
      res.status(200);
      res.send(data);
    });
  }

  fetchItem(req, res) {
    //console.log("req.param is", req.params);
    const result = req.params;
    const url = `https://fakestoreapi.com/products/${result.id}`;
    axios.get(url).then((response) => {
      const data = response.data;
      //   this.#logResultId(data);
      logging.logApiFetchResultId(data);
      res.status(200);
      res.json(data);
    });
  }

  fetchCategory(req, res) {
    //console.log("req.param is", req.params);
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
      //   this.#logResultArray(data);
      logging.logApiFetchResultArray(data);
      res.status(200);
      res.json(data);
    });
  }
}

module.exports = DataFetch;

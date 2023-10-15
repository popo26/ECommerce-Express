class Logger {
  constructor() {}

  #createId() {
    const randomId = Math.floor(Math.random() * 1000000);
    return randomId;
  }

  logApiFetchResultArray = (data) => {
    const transactionId = this.#createId();
    console.log(`ID:${transactionId}, Data Length: ${data.length}`);
  };

  logApiFetchResultId = (data) => {
    const transactionId = this.#createId();
    console.log(`ID:${transactionId}, Data ID: ${data.id}`);
  };

  logCartItems = (cartArray) => {
    const transactionId = this.#createId();
    console.log("********************************************************");
    console.log(`Cart Transaction ID:${transactionId}`);
    cartArray == 0
      ? console.log("No item in the cart.")
      : console.log(
          `Current Cart Item IDs: ${cartArray.map((item) => item.id)}`
        );
    console.log("********************************************************");
  };
}

module.exports = Logger;

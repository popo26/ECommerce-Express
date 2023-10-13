// receiving item id to display. One-off so don't need sessionStorage
window.onload = function () {
  localStorage.getItem("myId");
  let myId = localStorage.getItem("myId");
  const selectedItem = new Item(myId);
  selectedItem.getItem();
};

class Item {
  constructor(id) {
    this.id = id;
  }
  getItem() {
    axios
      .get(`/shop/item/${this.id}`)
      .then((response) => {
        const data = response.data;
        document.querySelector(".item-image").src = data.image;
        document.querySelector(".item-image").alt = data.title;
        document.querySelector(".item-price").innerHTML = `${data.price} NZD`;
        document.querySelector(".item-title").innerHTML = data.title;
        document.querySelector(".item-description").innerHTML =
          data.description;
        document.querySelector(".item-rating").innerHTML = data.rating.rate;
        document.querySelector(".add-btn").classList.add(`addBtnId${this.id}`);

        document
          .querySelector(`.addBtnId${this.id}`)
          .addEventListener("click", function () {
            sessionStorage.setItem(
              "itemCount",
              !sessionStorage["itemCount"] ? 0 : sessionStorage["itemCount"]
            );
            let currentValue = parseInt(sessionStorage["itemCount"]);
            sessionStorage["itemCount"] = currentValue + 1;
            window.location.href = "/index.html";

            axios
              .post(`/shop/add/${this.id}`, {
                id: this.id,
              })
              .then(function (response) {
                console.log(`sending id: ${response}`);
              })
              .catch(function (error) {
                console.log(error);
              });
          });
      })
      .catch((error) => {
        console.error(`Error: ${error.message}`);
        alert("Error retrieving information.");
      });

    //Track cliking count of Add button.
    // document.querySelector(".add-btn").addEventListener("click", function (e) {
    // document
    //   .querySelector(`.addBtnId${this.id}`)
    //   .addEventListener("click", function (e) {
    //     sessionStorage.setItem(
    //       "itemCount",
    //       !sessionStorage["itemCount"] ? 0 : sessionStorage["itemCount"]
    //     );
    //     let currentValue = parseInt(sessionStorage["itemCount"]);
    //     sessionStorage["itemCount"] = currentValue + 1;
    //     window.location.href = "/index.html";

    //     axios
    //       .post(`/shop/add/${this.id}`, {
    //         id: this.id,
    //       })
    //       .then(function (response) {
    //         console.log(`sending id: ${response}`);
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    //   });
  }
}

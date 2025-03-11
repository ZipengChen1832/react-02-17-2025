const productsAPI = "https://fakestoreapi.com/products";

// by default, fetch will make a GET request
// fetch will return a promise
// fetch(productsAPI)
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });

const button = document.getElementById("getProduct");

const form = document.getElementById("newProduct");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const newName = document.getElementById("newProductName").value;
  const newPrice = document.getElementById("newProductPrice").value;

  const res = await fetch("https://fakestoreapi.com/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: newName, price: newPrice }),
  });
  const data = await res.json();
  console.log("new product", data);
});

button.addEventListener("click", async () => {
  const res = await fetch(productsAPI);
  const products = (await res.json()).slice(0, 5);
  const productsList = document.querySelector(".products");

  for (const product of products) {
    // const productItem = `
    //     <div className="product">
    //         <div class="product__name">Name: ${product.title}</div>
    //         <div class="product__price">Price: ${product.price}</div>
    //     </div>
    // `
    // productsList.innerHTML += productItem;

    ////////////////////// DOM Syntax ////////////////////////
    const productItem = document.createElement("div");
    productItem.classList.add("product");
    const productName = document.createElement("div");
    productName.classList.add("product__name");
    productName.textContent = `Name: ${product.title}`;
    const productPrice = document.createElement("div");
    productPrice.classList.add("product__price");
    productPrice.textContent = `Price: ${product.price}`;
    productItem.append(productName, productPrice);
    productsList.append(productItem);

    //////////////////////// jquery syntax ////////////////////////
    // const productElem = $("<div/>").addClass("product");
    // const name = $("<div/>")
    //   .addClass("product__name")
    //   .text(`Name: ${product.title}`);
    // const price = $("<div/>")
    //   .addClass("product__price")
    //   .text(`Price: ${product.price}`);
    // productElem.append(name, price);
    // productsList.append(productElem);
  }
});

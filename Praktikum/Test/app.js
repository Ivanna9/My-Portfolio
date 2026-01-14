let products = [];
let nextId = 1;

function addProduct(name, price) {
  const product = {
    id: nextId++,
    name: name,
    price: price,
  };
  products.push(product);
  updateDisplay();
  //   console.log(`Додано: ${name} (id: ${product.id})`);
}

function addProductFromInput() {
  const nameInput = document.getElementById("productName");
  const priceInput = document.getElementById("productPrice");
  const name = nameInput.value;
  const price = Number(priceInput.value);
  if (name && price > 0) {
    addProduct(name, price);
    nameInput.value = "";
    priceInput.value = "";
  } else {
    alert("Error");
  }
}

function deleteProduct(id) {
  products = products.filter((product) => product.id !== id);
  updateDisplay();
}

function getTotalPrice() {
  let total = 0;
  for (let product of products) {
    total += product.price;
  }
  return total;
}

function updateDisplay() {
  const listDiv = document.getElementById("produckList");
  listDiv.innerHTML = "";
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = `
        <strong> ${product.name} </strong> - ${product.price} грн
        <button class ="delete-btn" onclick =" deleteProduct(${product.id}">Видалити</button>
        `;
    listDiv.appendChild(productDiv);
  });
  document.getElementById("totalPrice").textContent = getTotalPrice();
}
updateDisplay();

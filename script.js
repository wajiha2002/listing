const products = [
  { name: "Smartphone", price: 299, category: "Electronics", image: "smart phone.jpg" },
  { name: "Laptop", price: 899, category: "Electronics", image:"download.jpg" },
  { name: "T-Shirt", price: 25, category: "Clothing", image: "teashirt.jpg" },
  { name: "Jeans", price: 40, category: "Clothing", image: "jeans.jpg" },
  { name: "poor dad rich dad", price: 10, category: "Books", image: "book1.jpg" },
  { name: "The alchemist", price: 15, category: "Books", image: "book2.jpg" },
  { name: "Headphones", price: 75, category: "Electronics", image: "head.jpg" },
  { name: "Jacket", price: 60, category: "Clothing", image: "jacket.jpg" },
];

const productList = document.getElementById("productList");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const sortPrice = document.getElementById("sortPrice");

function displayProducts(items) {
  productList.innerHTML = "";

  if (!items.length) {
    productList.innerHTML = "<p>No products found.</p>";
    return;
  }

  items.forEach(({ name, price, category, image }) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${image}" alt="${name}" />
      <h3>${name}</h3>
      <p>$${price}</p>
      <p><small>${category}</small></p>
    `;
    productList.appendChild(card);
  });
}

function filterAndSortProducts() {
  const query = searchInput.value.toLowerCase();
  let results = products.filter(p => p.name.toLowerCase().includes(query));

  if (categoryFilter.value !== "all") {
    results = results.filter(p => p.category === categoryFilter.value);
  }

  if (sortPrice.value === "low") {
    results.sort((a, b) => a.price - b.price);
  } else if (sortPrice.value === "high") {
    results.sort((a, b) => b.price - a.price);
  }

  displayProducts(results);
}

searchInput.addEventListener("input", filterAndSortProducts);
categoryFilter.addEventListener("change", filterAndSortProducts);
sortPrice.addEventListener("change", filterAndSortProducts);

displayProducts(products);

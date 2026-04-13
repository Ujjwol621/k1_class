const getProducts = async () => {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    console.log(data);
    createProduct(data.products);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};
getProducts();

const div = document.getElementById("products");
const createProduct = (products) => {
  products.forEach((item) => {
    //     console.log(item.title);
    //     console.log(item.price);
    //     console.log(item.thumbnail);
    div.innerHTML += `    
        <div id="product-box">
        <h2>${item.title}</h2>
        <p>Price: $${item.price}</p>
        <img src="${item.thumbnail}" alt="${item.title}">
    </div>
    `;
  });
};


// list in array 
function App() {
  const products = [
    { id: 1, name: "Laptop", price: 999, image: "https://5.imimg.com/data5/KK/DR/FD/SELLER-13481402/hp-laptop-500x500.jpg"},
    { id: 2, name: "Smartphone", price: 499, image: "https://s.alicdn.com/@sc04/kf/H5565ea7213c14098b2a1c88b640088f34/2025-New-Honor-500-5G-Mobile-Phone-Snapdragon-8s-Gen-4-Octa-Core-120Hz-AMOLED-Display-8000mAh-Battery-LTE-CDMA-Spanish-Quick.jpg" },
    { id: 3, name: "Headphones", price: 199, image: "https://5.imimg.com/data5/IOS/Default/2025/1/479933790/YY/AK/KE/14235105/product-jpeg-500x500.png"},
  ];
  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Price: ${product.price.toFixed(2)}</p>
          </div>
        );
      })}
    </div> 
  )
}
export default App;

/* <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>Price: ${product.price.toFixed(2)}</p>
            <img src={product.image} alt={product.name} />
          </li>
        ))}
      </ul>
    </div> */
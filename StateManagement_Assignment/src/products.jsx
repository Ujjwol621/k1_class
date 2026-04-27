import { useContext } from "react";
import { ValueContext } from "./context/ValueProvider";

function Products() {
  const contextValue = useContext(ValueContext);
  const products = contextValue?.products ?? [];
  console.log("Products from context:", products);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Products Page</h1>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <article
            key={product.id}
            className="overflow-hidden rounded-lg border bg-white shadow-sm"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-90 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="mt-1 text-gray-700">Product ID: {product.id}</p>
              <p className="mt-2 text-xl font-bold text-black">
                ${product.price.toFixed(2)}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Products;

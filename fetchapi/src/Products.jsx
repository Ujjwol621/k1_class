import { useEffect, useState } from "react";
import './Products.css'

function Products() {
    const [products, setProducts] = useState([]);
    const getProducts = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json();
            // console.log(data.products[0].title);
            setProducts(data.products); // to set the products state with the fetched data
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };
    useEffect(() => {
        getProducts();
    }, []);
    // useEffect(() => {}); // runs on every render
    // useEffect(() => {}, []); // runs only on the first render
    // useEffect(() => {}, [x,y,z]); // runs on the first render and whenever x, y, or z changes
    return (
        <div>
            <h1>Product List</h1>
            <div>
                {products?.length > 0 ? (
                    <div className="parent">
                        {products?.map((product) => (
                            <div key={product?.id} className="child">
                                <img src={product?.thumbnail} alt={product?.title} />
                                <h2>{product?.title}</h2>
                                <p>Price: ${product?.price}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Loading...</p>
                )   }
            </div>
        </div>
    )
}

export default Products
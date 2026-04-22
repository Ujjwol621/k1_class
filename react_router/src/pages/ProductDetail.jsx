import { useParams } from "react-router-dom";
function ProductDetail() {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>This is Product Detail Page</h1>
      <p>Product ID: {id}</p>
    </div>
  );
}

export default ProductDetail;

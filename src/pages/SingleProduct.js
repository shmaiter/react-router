import { Link, useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();

  return (
    <section className="section">
      <h2>Product: {id}</h2>
      <Link to={"/products"}>Back to Products</Link>
    </section>
  );
};

export default SingleProduct;

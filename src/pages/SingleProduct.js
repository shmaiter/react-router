import { Link, useParams } from "react-router-dom";
import products from "../data";
const SingleProduct = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);
  const { name, image } = product;

  return (
    <section className="section">
      <h5>{name}</h5>
      <img src={image} alt="name" />
      <Link to={"/products"}>Back to Products</Link>
    </section>
  );
};

export default SingleProduct;

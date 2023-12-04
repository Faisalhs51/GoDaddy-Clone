import ProductCard from "./ProductCard";
import products from "@/constants/Product";

const Product = () => {
  return (
    <section className="py-4 md:px-10">
      {products.map((product) => (
        <ProductCard {...product} key={product.title} />
      ))}
    </section>
  );
};

export default Product;

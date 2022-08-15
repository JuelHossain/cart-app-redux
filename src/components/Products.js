import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

export default function Products() {
  const products = useSelector((state) => state.products);
  return (
    <div className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
      {products?.map((product, index) => {
        const { name, quantity, price } = product;
        return (
          <ProductCard
            key={index}
            name={name}
            quantity={quantity}
            price={price}
          />
        );
      })}
    </div>
  );
}

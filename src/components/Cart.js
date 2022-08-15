import { useSelector } from "react-redux";
import CartCard from "./CartCard";
import TotalItem from "./TotalItem";
import TotalPrice from "./TotalPrice";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
      <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
        {cart.map((item, index) => {
          const { name, quantity } = item;
          return <CartCard key={index} name={name} quantity={quantity} />;
        })}

        <TotalItem cart={cart} />
      </div>
      <TotalPrice cart={cart} />
    </div>
  );
}

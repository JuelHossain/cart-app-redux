import AppTitle from "./components/AppTitle";
import Cart from "./components/Cart";
import Products from "./components/Products";
export default function App() {
  return (
    <div className="bg-gray-50 h-full md:h-screen">
      <AppTitle>Shopping Cart</AppTitle>
      <div className="grid grid-cols-12 gap-6">
        <Products />
        <Cart />
      </div>
    </div>
  );
}











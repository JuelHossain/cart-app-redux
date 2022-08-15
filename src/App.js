import AppTitle from "./components/AppTitle";
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

function Products() {
  const products = [
    { name: "Asus Vivobook X515MA ", quantity: 20, price: 35000 },
    { name: "Dell E1916HV 18.5 Inch ", quantity: 35, price: 9300 },
    { name: "Canon Eos 4000D 18MP ", quantity: 72, price: 36500 },
  ];
  return (
    <div className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
      {products.map((product, index) => {
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

function Cart() {
  const cart = [
    { name: "Asus Vivobook X515MA ", quantity: 1, price: 35000 },
    { name: "Dell E1916HV 18.5 Inch ", quantity: 1, price: 9300 },
    { name: "Canon Eos 4000D 18MP ", quantity: 1, price: 36500 },
  ];
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

function TotalItem({ cart }) {
  return (
    <div className="flex justify-center items-center text-center">
      <div className="text-xl font-semibold">
        <p>Total Item</p>
        <p className="text-5xl">{cart.length}</p>
      </div>
    </div>
  );
}

function TotalPrice({ cart }) {
  return (
    <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
      <div className="flex justify-center items-center text-center">
        <div className="text-xl font-semibold">
          <p>Total Price</p>
          <p className="text-5xl">
            {cart.reduce(
              (total, current) => total + current.price * current.quantity,
              0
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ name, quantity, price }) {
  return (
    <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
      <div className="flex justify-between px-4 items-center">
        <div className="text-lg font-semibold">
          <p>
            {name}({quantity})
          </p>
          <p className="text-gray-400 text-base">Tk {price}</p>
        </div>
        <div className="text-lg font-semibold">
          <button className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

function CartCard({ name, quantity }) {
  return (
    <div className="flex justify-between border-b-2 mb-2">
      <div className="text-lg py-2">
        <p>{name}</p>
      </div>
      <div className="text-lg py-2">
        <div className="flex flex-row space-x-2 w-full items-center rounded-lg">
          <button className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18 12H6"
              />
            </svg>
          </button>
          <p>{quantity}</p>
          <button className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

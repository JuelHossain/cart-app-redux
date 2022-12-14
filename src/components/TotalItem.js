export default function TotalItem({ cart }) {
  return (
    <div className="flex justify-center items-center text-center">
      <div className="text-xl font-semibold">
        <p>Total Item</p>
        <p className="text-5xl">
          {cart.reduce((total, current) => total + current.quantity, 0)}
        </p>
      </div>
    </div>
  );
}

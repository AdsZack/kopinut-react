import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import OrderTypeToggle from "../ui/OrderTypeToggle";

function CheckoutCard({ cart }) {
  return (
    <div className="flex min-h-0 flex-col gap-3 rounded-2xl border border-cream bg-cream-50 p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold">
          {cart.lastOrder ? `Order #${cart.lastOrder.orderNumber}` : "Order #0"}
        </h3>
        {cart.submitError && (
          <p role="alert" className="text-sm text-red-600">
            {cart.submitError}
          </p>
        )}
        <button
          type="button"
          onClick={cart.clear}
          disabled={cart.isEmpty}
          className="rounded-md px-2 py-1 text-sm font-medium text-red-600 hover:bg-red-50 disabled:opacity-40"
        >
          Clear all
        </button>
      </div>

      <OrderTypeToggle value={cart.orderType} onChange={cart.setOrderType} />

      {cart.isEmpty ? (
        <p className="flex-1 py-6 text-center text-sm text-bark/60">
          Belum ada pesanan.
        </p>
      ) : (
        <ul className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto">
          {cart.items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onIncrease={() => cart.addItem(item)}
              onDecrease={() => cart.decreaseItem(item.id)}
              onRemove={() => cart.removeItem(item.id)}
            />
          ))}
        </ul>
      )}

      <CartSummary subtotal={cart.subtotal} tax={cart.tax} total={cart.total} />

      <button
        type="button"
        onClick={cart.checkout}
        disabled={cart.isEmpty || cart.submitting}
        className="h-11 w-full rounded-lg bg-caramel font-bold text-white transition-colors hover:bg-bark disabled:cursor-not-allowed disabled:bg-cream disabled:text-bark/40"
      >
        {cart.submitting ? "Menyimpan..." : "Print Receipts"}
      </button>
    </div>
  );
}
export default CheckoutCard;

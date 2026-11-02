function CheckoutCard() {
  return (
    <div className="flex min-h-0 flex-col gap-3 rounded-2xl border border-cream bg-cream-50 p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold">Order #123</h3>
        <button
          id="clear-checkout"
          type="button"
          className="rounded-md px-2 py-1 text-sm font-medium text-red-600 transition-colors hover:bg-red-50 focus-visible:outline-2 focus-visible:outline-red-600"
        >
          Clear all
        </button>
      </div>
      <div className="grid grid-cols-2 gap-1 rounded-lg bg-cream p-1">
        <div>
          <input
            type="radio"
            name="type-order"
            id="dine-in"
            className="peer sr-only"
          />
          <label
            htmlFor="dine-in"
            className="block rounded-md py-2 text-center text-sm font-semibold text-bark/70 transition-colors hover:text-bark peer-checked:bg-bark peer-checked:text-cream peer-focus-visible:ring-2 peer-focus-visible:ring-caramel peer-focus-visible:ring-offset-1"
          >
            Dine In
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="type-order"
            id="take-away"
            className="peer sr-only"
          />
          <label
            htmlFor="take-away"
            className="block rounded-md py-2 text-center text-sm font-semibold text-bark/70 transition-colors hover:text-bark peer-checked:bg-bark peer-checked:text-cream peer-focus-visible:ring-2 peer-focus-visible:ring-caramel peer-focus-visible:ring-offset-1"
          >
            Take Away
          </label>
        </div>
      </div>
      <div
        id="checkout-list"
        className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto"
      ></div>
      <div className="flex flex-col gap-2 rounded-lg border border-cream bg-white p-3">
        <div className="flex justify-between text-sm">
          <span className="text-bark/70">Subtotal</span>
          <span id="subtotal-value" className="font-medium tabular-nums">
            Rp0
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-bark/70">Tax</span>
          <span id="tax-value" className="font-medium tabular-nums">
            Rp0
          </span>
        </div>
        <hr className="border-dashed border-sage" />
        <div className="flex justify-between">
          <span className="font-bold">Total</span>
          <span id="total-value" className="text-lg font-medium tabular-nums">
            Rp0
          </span>
        </div>
      </div>

      <button
        type="button"
        id="print-receipt"
        className="h-11 w-full rounded-lg bg-caramel font-bold text-white transition-colors hover:bg-bark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-caramel disabled:cursor-not-allowed disabled:bg-cream disabled:text-bark/40"
      >
        Print Receipts
      </button>
    </div>
  );
}
export default CheckoutCard;

import { formatRupiah } from "../../utils/formatRupiah";

function Row({ label, value, strong }) {
  return (
    <div className="flex justify-between text-sm">
      <span className={strong ? "font-bold" : "text-bark/70"}>{label}</span>
      <span className={`tabular-nums ${strong ? "text-lg" : "font-medium"}`}>
        {formatRupiah(value)}
      </span>
    </div>
  );
}

function CartSummary({ subtotal, tax, total }) {
  return (
    <div className="flex flex-col gap-2 rounded-lg border border-cream bg-white p-3">
      <Row label="Subtotal" value={subtotal} />
      <Row label="Tax" value={tax} />
      <hr className="border-dashed border-sage" />
      <Row label="Total" value={total} strong />
    </div>
  );
}
export default CartSummary;

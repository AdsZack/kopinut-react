import { formatRupiah } from "../../utils/formatRupiah";

const iconBtn =
  "grid size-7 place-items-center rounded-md text-bark transition-colors " +
  "hover:bg-cream-100 focus-visible:outline-2 focus-visible:outline-caramel";

function CartItem({ item, onIncrease, onDecrease }) {
  return (
    <li className="flex items-center justify-between gap-2 rounded-lg bg-white p-2">
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold">{item.name}</p>
        <p className="text-xs text-bark/70">{formatRupiah(item.price)}</p>
      </div>
      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={onDecrease}
          className={iconBtn}
          aria-label={`Kurangi ${item.name}`}
        >
          −
        </button>
        <span className="w-6 text-center text-sm tabular-nums">{item.qty}</span>
        <button
          type="button"
          onClick={onIncrease}
          className={iconBtn}
          aria-label={`Tambah ${item.name}`}
        >
          +
        </button>
      </div>
    </li>
  );
}
export default CartItem;

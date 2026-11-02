const OPTIONS = [
  { value: "dine-in", label: "Dine In" },
  { value: "take-away", label: "Take Away" },
];

function OrderTypeToggle({ value, onChange }) {
  return (
    <div className="grid grid-cols-2 gap-1 rounded-lg bg-cream p-1">
      {OPTIONS.map((opt) => (
        <div key={opt.value}>
          <input
            type="radio"
            name="type-order"
            id={opt.value}
            checked={value === opt.value}
            onChange={() => onChange(opt.value)}
            className="peer sr-only"
          />
          <label
            htmlFor={opt.value}
            className="block rounded-md py-2 text-center text-sm font-semibold text-bark/70 transition-colors hover:text-bark peer-checked:bg-bark peer-checked:text-cream peer-focus-visible:ring-2 peer-focus-visible:ring-caramel peer-focus-visible:ring-offset-1"
          >
            {opt.label}
          </label>
        </div>
      ))}
    </div>
  );
}
export default OrderTypeToggle;

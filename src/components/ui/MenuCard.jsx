function MenuCard({ menu, onAdd }) {
  const price = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(menu.price);

  return (
    <article className="flex min-w-0 flex-col gap-3 rounded-xl border border-cream bg-white p-3 shadow-sm transition-shadow hover:shadow-md">
      <img
        src={menu.image_url}
        alt={menu.name}
        className="w-full aspect-4/3 rounded-lg object-cover bg-cream-100"
      />
      <div className="flex flex-col gap-0.5">
        <h3 className="truncate text-base font-semibold text-bark">
          {menu.name}
        </h3>
        <p className="text-sm text-bark/70">{price}</p>
      </div>
      <button
        type="button"
        onClick={onAdd}
        className="mt-auto h-9 w-full rounded-lg bg-caramel text-sm font-semibold text-white
                transition-colors hover:bg-bark active:scale-[0.98]
                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-caramel"
        aria-label={`Add ${menu.name} to cart`}
      >
        Add to cart
      </button>
    </article>
  );
}
export default MenuCard;

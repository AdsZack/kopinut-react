import MenuCard from "../ui/MenuCard";

function MenuList({ menus, loading, error, onAdd }) {
  if (loading) return <p>Memuat...</p>;
  if (error) return <p>Gagal memuat data.</p>;
  if (menus.length === 0) return <p>Data tidak ditemukan.</p>;

  return (
    <div className="grid grid-cols-2 gap-4 overflow-y-auto p-4 md:grid-cols-3 xl:grid-cols-4">
      {menus.map((menu) => (
        <MenuCard key={menu.id} menu={menu} onAdd={() => onAdd(menu)} />
      ))}
    </div>
  );
}
export default MenuList;

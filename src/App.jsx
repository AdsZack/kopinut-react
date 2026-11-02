import Main from "./components/layout/Main";
import Sidebar from "./components/layout/Sidebar";
import { useMenus } from "./hooks/useMenus";

function App() {
  const { menus, loading, error } = useMenus();
  return (
    <div className="grid h-screen grid-cols-[50px_minmax(0,1fr)] overflow-hidden">
      <Sidebar />
      <div className="grid min-h-0 grid-rows-[64px_minmax(0,1fr)] rounded-l-4xl bg-cream-50 pt-2">
        <Main menus={menus} loading={loading} error={error} />
      </div>
    </div>
  );
}

export default App;

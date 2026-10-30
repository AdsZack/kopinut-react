import ContentPanel from "./components/layout/ContentPanel";
import Sidebar from "./components/layout/Sidebar";

function App() {
  return (
    <div className="grid h-screen grid-cols-[50px_minmax(0,1fr)] overflow-hidden">
      <Sidebar />
      <div className="grid min-h-0 grid-rows-[64px_minmax(0,1fr)] rounded-l-4xl bg-cream-50 pt-2">
        <ContentPanel />
      </div>
    </div>
  );
}

export default App;

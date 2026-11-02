import MenuSection from "../menu/MenuSection";
import Header from "./Header";

function Main({ menus, loading, error }) {
  return (
    <>
      <Header />
      <MenuSection menus={menus} loading={loading} error={error} />
    </>
  );
}
export default Main;

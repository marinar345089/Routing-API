import { Theme } from "@radix-ui/themes";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Header from "./components/Header";
import FullProduct from "./pages/FullProduct";
import { useSelector } from "react-redux";

function App() {
  const { theme } = useSelector((store) => store.theme);
  return (
    <Theme
      accentColor="teal"
      grayColor="slate"
      panelBackground="solid"
      radius="small"
      appearance={theme}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<FullProduct />} />
      </Routes>
    </Theme>
  );
}

export default App;

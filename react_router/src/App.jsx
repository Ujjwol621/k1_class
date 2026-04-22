import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import Contact from "./pages/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Admin from "./pages/Admin.jsx";
import ProductManagement from "./pages/ProductManagement.jsx";
import UserManagement from "./pages/UserManagement.jsx";
import OrderManagement from "./pages/OrderManagement.jsx";
import Login from "./pages/Login.jsx";
import ProtectedRoutes from "./pages/ProtectedRoutes.jsx";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProtectedRoutes comp={<Products />} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/productdetail/:id" element={<ProductDetail />} />
        <Route path="/admin/" element={<Admin />}>
          <Route path="productManagement" element={<ProductManagement />} />
          <Route index element={<ProductManagement />} />
          <Route path="userManagement" element={<UserManagement />} />
          <Route path="orderManagement" element={<OrderManagement />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {/* <h2>This is Footer</h2> */}
    </div>
  );
}

export default App;

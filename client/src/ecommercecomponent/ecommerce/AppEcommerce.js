import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import { AuthProvider } from "./Context/Context";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

function AppEcommerce() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/ecommerce" element={<Home />} />
            <Route path="/ecommerce/product/:id" element={<Product />} />
            <Route path="/ecommerce/cart" element={<Cart />} />
            <Route path="/ecommerce/login" element={<Login />} />
          </Routes>
        </Router>
      </AuthProvider>
    </Provider>
  );
}

export default AppEcommerce;

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Routes,
} from "react-router-dom";
import Home from "./Home";

// import Logo from "../img/logo.png";
import ProductDetails from "./ProductDetails";
import ShopCart from "./ShopCart";
import Blog from "./Blog";
import BlogDetails from "./BlogDetails";
import Contect from "./Contect";
import Login from "./Login";
import SignUp from "./SignUp";
const Navbar = () => {
  return (
    <>
      <div className="nav d-flex flex-row">
        <div className="w-25 border p-3">logo</div>
        <div className="w-50 border ">
          <ul className="d-flex flex-row justify-content-start p-3 text-uppercase">
            <li className="p-2">
              <Link to="/">Home</Link>
            </li>
            <li className="p-2">
              <Link to="/women's">Women's</Link>
            </li>
            <li className="p-2">
              <Link to="/men's">Men's</Link>
            </li>
            <li className="p-2">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="p-2">
              <Link to="/pages">Pages</Link>
            </li>
            <li className="p-2">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="p-2">
              <Link to="/contect">Contect</Link>
            </li>
            <li className="p-2">
              <Link to="/login">Login</Link>
            </li>
            <li className="p-2">
              <Link to="/SignUp">SignUp</Link>
            </li>
          </ul>
        </div>

        <div className="w-25 border d-flex flex-row justify-content-between p-4">
          <div className="justify-content-center ">
            <p>login/Register</p>
          </div>
          <div>i1</div>
          <div>i2</div>
          <div>i3</div>
        </div>
      </div>

      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>

        <Route exact path="/" element={<Home></Home>}></Route>
        <Route
          exact
          path="/product-detail"
          element={<ProductDetails />}
        ></Route>
        <Route exact path="/cart" element={<ShopCart />}></Route>
        <Route exact path="/blog" element={<Blog />}></Route>
        <Route exact path="/pages" element={<BlogDetails />}></Route>
        <Route exact path="/contect" element={<Contect />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/SignUp" element={<SignUp />}></Route>
      </Routes>
    </>
  );
};

export default Navbar;

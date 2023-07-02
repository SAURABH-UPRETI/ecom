import { BrowserRouter as Router, Route, Link, Switch, Routes } from "react-router-dom";
import Home from "./Home";
import Logo from "../img/logo.png"
import ProductDetails from "./ProductDetails";
import ShopCart from "./ShopCart";
import Blog from "./Blog";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import Shop from "./Shop";


const Navbar = () => {
    return (
        <>
            <div className="nav d-flex flex-row">
                <div className="w-25 p-3">
                    <img src={Logo}></img>
                </div>
                <div className="w-50">
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
                            <Link to="/cotact">Contact</Link>
                        </li>
                    </ul>
                </div>
                
                <div className="w-25 d-flex flex-row justify-content-around p-4">
                    <div className="justify-content-center">
                        <p>login/Register</p>
                    </div>
                    <div className="d-flex justify-content-around w-50 ">
                    <div className=""><Link to="/search"><SearchSharpIcon/></Link></div>
                    <div><Link to="/fav"><FavoriteBorderSharpIcon/></Link></div>
                    <div><Link to="/cart"><ShoppingCartSharpIcon/></Link></div>
                    
                   </div>
               </div>
                </div>
                
                <Routes>
                <Route exact path="/" element={<Home></Home>}></Route>
                <Route exact path="/product-detail" element={<ProductDetails />}></Route>
                <Route exact path="/cart" element={<ShopCart />}></Route>
                <Route exact path="/blog" element={<Blog/>}></Route>
                <Route exact path="/shop" element={<Shop/>}></Route>

                </Routes>
             
        </>
    )
}

export default Navbar;

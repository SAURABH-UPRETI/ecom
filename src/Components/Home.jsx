import { BrowserRouter as Router, Route, Link, Switch, Routes } from "react-router-dom";
import CategoryImgOne from "../img/categories/category-1.jpg"
import CategoryImgTwo from "../img/categories/category-2.jpg"
import CategoryImgThree from "../img/categories/category-3.jpg"
import CategoryImgFour from "../img/categories/category-4.jpg"
import CategoryImgFive from "../img/categories/category-5.jpg"
import ProductCard from "./ProductCard";

const Home = () => {
    return (
        <>
            <div className="d-flex container-fluid flex-row section-one">
                <div className="d-flex part-one w-50 p-2">
                    <img src={CategoryImgOne}></img>
                </div>
                <div className="d-flex flex-row w-50 part-two">
                    <div className="w-50 p-2">
                    <img src={CategoryImgTwo}></img>
                    </div>
                    <div className="w-50 p-2">
                    <img src={CategoryImgThree}></img>
                    </div>
                    <div className="w-50 p-2">
                    <img src={CategoryImgFour}></img>
                    </div>
                    <div className="w-50 p-2">
                    <img src={CategoryImgFive}></img>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column section-two mt-5">
                <div className="d-flex flex-row">
                    <div className="d-flex w-50 text-uppercase">
                        <h3 className="custom-h3">New  </h3><h3>Products</h3>
                    </div>
                    <div className="d-flex  w-50 ">
                        <ul className="d-flex container-fluid  justify-content-around flex-row mt-3">
                            <li>
                                <Link to="/all">All</Link>
                                
                            </li>
                            <li>
                              <Link to="/women's"> Women's</Link>
                            </li>
                            <li>
                                <Link to="/men's"> Men's</Link>
                            </li>
                            <li>
                              <Link to="/kid's">   Kid's</Link>
                            </li>
                            <li>
                            <Link to="/accessories">Accessories</Link>
                            </li>
                            <li>
                                    <Link to="/cosmetics"> Cosmetics</Link>
                            </li>
                            </ul>
                    </div>
                </div>
                <div className="d-flex flex-row mt-5 justify-content-between">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard/>
                </div>
            </div>
        </>
    )
}
export default Home;
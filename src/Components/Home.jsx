import { BrowserRouter as Router, Route, Link, Switch, Routes } from "react-router-dom";
import CategoryImgOne from "../img/categories/category-1.jpg"
import CategoryImgTwo from "../img/categories/category-2.jpg"
import CategoryImgThree from "../img/categories/category-3.jpg"
import CategoryImgFour from "../img/categories/category-4.jpg"
import CategoryImgFive from "../img/categories/category-5.jpg"
import DiscountImg from "../img/discount.jpg";
import ProductCard from "./ProductCard";
import "../../node_modules/react-slick/dist/react-slick"
import React from "react";
import Slider from "react-slick";
import SmallProductCard from "./SmallProductCard";
import DirectionsCarFilledSharpIcon from '@mui/icons-material/DirectionsCarFilledSharp';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import SupportIcon from '@mui/icons-material/Support';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
const Home = () => {
    var settings = {
        dots: true,
        arrow:false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };
    return (
        <>
            <div className="d-flex container-fluid flex-row section-one">
                <div className="d-flex part-one w-50 p-2 position-relative">
                    <div className="overlap">
                    <h1>Women’s fashion</h1>
                        <p>Sitamet, consectetur adipiscing elit, sed do eiusmod tempor incidid-unt labore edolore magna aliquapendisse ultrices gravida.</p>
                        <Link to="/shop-now">Shop now</Link>
                </div>
                    <img src={CategoryImgOne}></img>
                </div>
                <div className="d-flex flex-row w-50 part-two">
                    <div className=" w-50 p-2 position-relative">
                    <div className="overlap">
                    <h5>Women’s fashion</h5>
                        <p>100 Items</p>
                        <Link to="/shop-now">Shop now</Link>
                        </div>  
                        <img src={CategoryImgTwo}></img>
                    </div>
                    <div className="w-50 p-2 position-relative">
                    <div className="overlap">
                    <h5>Women’s fashion</h5>
                        <p>100 Items </p>
                        <Link to="/shop-now">Shop now</Link>
                        </div>  
                    <img src={CategoryImgThree}></img>
                    </div>
                    <div className="w-50 p-2 position-relative">
                    <div className="overlap">
                    <h5>Women’s fashion</h5>
                        <p>100 Items </p>
                        <Link to="/shop-now">Shop now</Link>
                        </div>  
                    <img src={CategoryImgFour}></img>
                    </div>
                    <div className="w-50 p-2 position-relative">
                    <div className="overlap">
                    <h5>Women’s fashion</h5>
                        <p>100 Items </p>
                        <Link to="/shop-now">Shop now</Link>
                        </div>  
                    <img src={CategoryImgFive}></img>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column section-two mt-5">
                <div className="d-flex flex-row section-two-nav">
                    <div className="d-flex w-50 text-uppercase p-2">
                        <h4 className="custom-h4 ">New  </h4><h4 className="">Products</h4>
                    </div>
                    <div className="d-flex  w-50 ">
                        <ul className="d-flex container-fluid  justify-content-around flex-row mt-3">
                            <li>
                                <Link to="/all"><p>All</p></Link>
                                
                            </li>
                            <li>
                              <Link to="/women's"> <p>Women's</p></Link>
                            </li>
                            <li>
                                <Link to="/men's"> <p>Men's</p></Link>
                            </li>
                            <li>
                              <Link to="/kid's">  <p> Kid's</p></Link>
                            </li>
                            <li>
                            <Link to="/accessories"><p>Accessories</p></Link>
                            </li>
                            <li>
                                    <Link to="/cosmetics"> <p>Cosmetics</p></Link>
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
            <div className=" container-fluid section-three mt-5">
                <div className="section-three-slider w-25 mx-auto">
                <Slider {...settings}>
                            <div>
                                <span>The Chloe Collection </span>
                                <h1>The Project Jacket</h1>
                                <Link to="/shop-now">Shop now</Link>
                            </div>
                            <div>
                                <span>The Chloe Collection </span>
                                <h1>The Project Jacket</h1>
                                <Link to="/shop-now">Shop now</Link>
                            </div>
                            
                            <div>
                                <span>The Chloe Collection </span>
                                <h1>The Project Jacket</h1>
                                <Link to="/shop-now">Shop now</Link>
                            </div>
      
                </Slider>
          </div>
            </div>
            <div className="d-flex flex-column section-four w-75 mx-auto  mt-5">
             
                <div className="d-flex flex-row justify-content-between">
                    <span>HOT TREND</span>
                    <span>BEST SELLER</span>
                    <span>FEATURE</span>
                </div>
                <div className="d-flex flex-row flex-wrap justify-content-between  mt-5 ">
                    <SmallProductCard />
                    <SmallProductCard />
                    <SmallProductCard />
                    <SmallProductCard />
                    <SmallProductCard />
                    <SmallProductCard />
                    <SmallProductCard />
                    <SmallProductCard />
                    <SmallProductCard/>
                </div>
            
            </div>
            <div className="d-flex flex-row section-five mt-5 w-75 mx-auto justify-content-between">
                <div className="w-50">
                <img className="" src={DiscountImg}></img>
             </div>
                <div className="w-50 summer-sale">
                        <div className="circle"></div>
                </div>

            </div>
            <div className="d-flex flex-row section-six w-75 mt-5 mx-auto justify-content-between">
                <div className="d-flex flex-row ccard p-2"  >
                    <div className="w-25 ">
                        <DirectionsCarFilledSharpIcon/>
                   </div>
                    <div className="d-flex flex-column w-75 justify-content-center p-2">
                        <h6 className="">
                         Free Shippping
                        </h6>
                        <p> For all oder over $99</p>
                    </div>
                </div>
                <div className="d-flex flex-row ccard p-2"  >
                    <div className="w-25">
                    <LocalAtmIcon/>
                   </div>
                    <div className="d-flex flex-column w-75 justify-content-center p-2">
                    <h6 className="">
                            Money Back Guarantee
                        </h6>
                        <p> If good have Problems </p>
                    </div>
                </div>
                <div className="d-flex flex-row ccard p-2"  >
                    <div className="w-25">
                       <SupportIcon/>
                   </div>
                    <div className=" d-flex flex-column w-75 justify-content-center p-2">
                    <h6 className="">
                    Online Support 24/7
                        </h6>
                        <p>Dedicated support</p>
                    </div>
                </div>
                <div className="d-flex flex-row ccard p-2"  >
                    <div className="w-25">
                        <HeadsetMicIcon/>
                   </div>
                    <div className=" d-flex flex-column w-75 justify-content-center p-2">
                    <h6 className="">
                    Payment Secure
                        </h6>
                        <span>100% secure payment</span>
                    </div>
                </div>
          
            </div>
        </>
    )
}
export default Home;
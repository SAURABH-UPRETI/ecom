import { BrowserRouter as Router, Route, Link, Switch, Routes } from "react-router-dom";
import ProductImgOne from "../img/product/product-1.jpg"
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import ReactStars from "react-rating-stars-component";

const ProductCard = () => {
    return (
        <>
          <div className=" d-flex flex-column product-card ">
                <div className="product-img position-relative">
                    <img src={ProductImgOne}></img>
                    <div className="d-flex flex-row moving-div position-absolute justify-content-around">
                        <div className="circle">
                        <OpenInFullIcon />
                        </div>
                        <div className="circle">
                        <FavoriteBorderIcon />
                        </div>
                        
                        <div className="circle">
                        <ShoppingCartSharpIcon/>
                       </div>
                    </div>
                </div>
                <div className=" product-name d-flex flex-column">
                    
                    <span className="mt-2">
                        <Link to="/product-detail">Buttons tweed blazer    </Link>
                    </span>
                
                <span> <ReactStars
                        count={5}
                        // onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                    /></span>
                <p> 200&#8377;</p>
                </div>
               
            </div>
            
        </>
    )
}

export default ProductCard;
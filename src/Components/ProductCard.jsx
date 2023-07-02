import ProductImgOne from "../img/product/product-1.jpg"
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
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
                <div className="d-flex flex-column justify-content-center">
                <span className="mt-2">Buttons tweed blazer</span>
                <span>stars</span>
                <span>prise</span>
                </div>
               
        </div>
        </>
    )
}

export default ProductCard;
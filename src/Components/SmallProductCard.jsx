import Img1 from "../img/shop/shop-1.jpg"
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";

const SmallProductCard = (props) => {
    // const ratingChanged = (newRating) => {
    //     console.log(newRating);
    //   };
    return (
        <>
            <div className="d-flex flex-row small-product-card mt-3" >
                <img src={Img1}  style={{ width: props.border, border: props.border }}></img>
                <div className="d-flex flex-column justify-content-center container-fluid " style={{border: props.border}}>
                    <span>Chain bucket bag</span>

                    <span>
                    <ReactStars
                        count={5}
                        // onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                    />
 
                    </span>
                    <span>price</span>
                </div>
            </div>
        </>
    )
}
export default SmallProductCard
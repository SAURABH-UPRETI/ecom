import React from "react"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProductImage1 from "../img/product/details/product-1.jpg"
import ProductImage2 from "../img/product/details/product-2.jpg"
import ProductImage3 from "../img/product/details/product-3.jpg"
import ProductImage4 from "../img/product/details/product-4.jpg"
import { CheckBox } from "@mui/icons-material";
import { Label } from "@mui/icons-material";
import { useState } from "react";

function ProductDetails() {
    const images = [
        ProductImage1,
        ProductImage2,
        ProductImage3,
        ProductImage4
    ];

    const [quantity, setQuantity] = useState(0);
    const HandleIncrement = () => {
        setQuantity(function (prevCount) {
            return (prevCount += 1);
          });
    }
    const HandleDecrement = () => {
        setQuantity(function (prevCount) {
            if (prevCount > 0) {
              return (prevCount -= 1); 
            } else {
              return (prevCount = 0);
            }
          });
    }
    const [checkedStock, setCheckedStock] = React.useState(false);
    const [checkedColorOne, setCheckedColorOne] = React.useState(false);
    const [checkedColorTwo, setCheckedColorTwo] = React.useState(false);
    const [checkedColorThree, setCheckedColorThree] = React.useState(false);

    const handleChangeStock = () => {
      setCheckedStock(!checkedStock);
    };
    const handleChangeColoreOne = () => {
        setCheckedStock(!checkedColorOne);
    };
    const handleChangeColorTwo = () => {
        setCheckedStock(!checkedColorTwo);
    };
    const handleChangeColorThree = () => {
        setCheckedStock(!checkedColorThree);
    };
    
  return (
      <>
          <div className="d-flex flex-row w-75 mx-auto mt-5">
              <div className="product-slider ">
              <Carousel useKeyboardArrows={true}>
                         {images.map((URL, index) => (
                  <div className="d-flex slide">
                          <img alt="sample-file" src={URL} key={index} />
                  </div>
        ))}
      </Carousel>
              </div>
              <div className="d-flex flex-column text-start p-4 container-fluid">
                  <h2>ESSENTIAL STRUCTURED BLAZER</h2>
                  <span>Brand: SKMEIMore Men Watches from SKMEI</span>
                  <span>     ( 138 reviews )</span>
                  <h3 className="mt-3">$ 75.0 $ 83.0</h3>
                  <p className="mt-3">
                  Nemo enim ipsam voluptatem quia aspernatur aut odit aut loret fugit, sed quia consequuntur magni lores eos qui ratione voluptatem sequi nesciunt.
                  </p>

                  <div className="d-flex flex-row product-details-cart justify-content-between">
                      <div className="one text-center">
                          <span>Quantity</span>
                      </div>
                      <div className="d-flex flex-row justify-content-between two">
                          <button onClick={HandleDecrement}>-</button>
                          <span>{ quantity}</span>
                          <button onClick={HandleIncrement}>+</button>
                      </div>
                      <div className="three text-center p-2">
                          <span>ADD TO CART</span>
                      </div>
                      <div className="four"></div>
                      <div className="five"></div>
                  </div>
                  <hr className="mt-5"/>
                  <div className="d-flex  flex-column size product-spec mt-5">
                      <div className=" d-flex w-50 justify-content-between" >
                          <span>Availability:</span>
                          <span><input type="checkbox" checkedStock={checkedStock} onChange={handleChangeStock}/> In Stock</span></div>
                      <div className=" d-flex w-50 justify-content-between mt-1" >
                          <span>Available color:</span>
                          <span className="product-color">
                          <input type="checkbox" checkedColorOne={checkedColorOne} onChange={handleChangeColoreOne}/> 
                          <input type="checkbox" checkedColorTwo={checkedColorTwo} onChange={handleChangeColorTwo}/> 
                          <input type="checkbox" checkedColorThree={checkedColorThree} onChange={handleChangeColorThree} />
                          </span>
                      </div>
                      <div className=" d-flex w-50 justify-content-between mt-1" >
                          <span>Available size:</span>
                          <span> XS  S  M L</span></div>
                      <div className=" d-flex w-50 justify-content-between mt-1" >
                          <span>Promotions:</span> <span>

                              Free shipping</span></div>
                  </div>
              </div>
          </div>
      </>
  )
}

export default ProductDetails;
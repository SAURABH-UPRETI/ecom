import React from "react"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProductImage1 from "../img/product/details/product-1.jpg"
import ProductImage2 from "../img/product/details/product-2.jpg"
import ProductImage3 from "../img/product/details/product-3.jpg"
import ProductImage4 from "../img/product/details/product-4.jpg"
import { CheckBox } from "@mui/icons-material";
import { Label } from "@mui/icons-material";

function ProductDetails() {
    const images = [
        ProductImage1,
        ProductImage2,
        ProductImage3,
        ProductImage4
    ];
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
                          <button>-</button>
                          <span>1</span>
                          <button>+</button>
                      </div>
                      <div className="three text-center p-2">
                          <span>ADD TO CART</span>
                      </div>
                      <div className="four"></div>
                      <div className="five"></div>
                  </div>
                  <hr className="mt-5" />
                  <div className="d-flex  flex-column size">
                      <div ><span>Availability:</span> <span><CheckBox {...Label} defaultChecked /> In Stock</span></div>
                  </div>
              </div>
          </div>
      </>
  )
}

export default ProductDetails;
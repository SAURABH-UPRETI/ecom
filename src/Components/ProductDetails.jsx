import React from "react"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProductImage1 from "../img/product/details/product-1.jpg"
import ProductImage2 from "../img/product/details/product-2.jpg"
import ProductImage3 from "../img/product/details/product-3.jpg"
import ProductImage4 from "../img/product/details/product-4.jpg"
import { CheckBox } from "@mui/icons-material";
import { Label } from "@mui/icons-material";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import TuneIcon from '@mui/icons-material/Tune';

function ProductDetails() {
    const rev = " Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret. Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla consequat massa quis enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem."
    const des = " Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret.Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.Nulla consequat massa quis enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem."
    const spec = "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret. Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla consequat massa quis enim.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. "
    const revHeading = " Review"
    const desHeading = " Description"
    const specHeading = "Specification "
    const [checkedStock, setCheckedStock] = React.useState(false);
    const [checkedColorOne, setCheckedColorOne] = React.useState(false);
    const [checkedColorTwo, setCheckedColorTwo] = React.useState(false);
    const [checkedColorThree, setCheckedColorThree] = React.useState(false);
    const [quantity, setQuantity] = useState(0);
    const [Specification, setSpecification] = useState("");
    const [Review, setReview] = useState("");
    const [Description, setDescription] = useState(des);
    const [SpecificationHeading, setSpecificationHeading] = useState("");
    const [ReviewHeading, setReviewHeading] = useState("");
    const [DescriptionHeading, setDescriptionHeading] = useState(desHeading);
   
    const images = [
        ProductImage1,
        ProductImage2,
        ProductImage3,
        ProductImage4
    ];


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
    const handleChangeSpecification = () => {
        setSpecification(spec);
        setDescription("");
        setReview("")
        setSpecificationHeading(specHeading);
        setDescriptionHeading("")
        setReviewHeading("")
    }
    const handleChangeDescription = () => {
        setDescription(des);
        setSpecification("");
        setReview("")
        setDescriptionHeading(desHeading)
        setSpecificationHeading("")
        setReviewHeading("")      
    }
    const handleChangeReview = () => {
        setReview(rev);
        setDescription("");
        setSpecification("")
        setReviewHeading(revHeading)
        setDescriptionHeading("")
        setSpecificationHeading("")
    }
    
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
              <div className="product-detail d-flex flex-column p-4 container-fluid">
                  <h2>ESSENTIAL STRUCTURED BLAZER</h2>
                  <p>Brand: SKMEIMore Men Watches from SKMEI</p>
                  <p>     ( 138 reviews )
                  <ReactStars
                        count={5}
                        // onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                    />
                  </p>
                  <h3 className="mt-3 price">600 &#8377;</h3>
                  <p className="mt-3">
                  Nemo enim ipsam voluptatem quia aspernatur aut odit aut loret fugit, sed quia consequuntur magni lores eos qui ratione voluptatem sequi nesciunt.
                  </p>

                  <div className="d-flex flex-row product-details-cart justify-content-between">
                      <div className="one text-center">
                          <span>Quantity</span>
                      </div>
                      <div className="d-flex flex-row justify-content-between two">
                          <button onClick={HandleDecrement}>-</button>
                          <span className="zero">{ quantity}</span>
                          <button onClick={HandleIncrement}>+</button>
                      </div>
                      <div className="three text-center ">
                          <span><ShoppingCartSharpIcon/>ADD TO CART</span>
                      </div>
                      <div className="four">
                          <FavoriteBorderSharpIcon/>
                      </div>
                      <div className="five">
                          <TuneIcon/>
                      </div>
                  </div>
                  <hr className="mt-5"/>
                  <div className="d-flex  flex-column size product-spec mt-5">
                      <div className=" row" >
                          <div className="col-6">
                          <span>Availability:</span>
                        </div>
                          <div className="col-6">
                          <span><input type="checkbox" checkedStock={checkedStock} onChange={handleChangeStock}/> In Stock</span></div>
                      </div>
                      <div className=" row mt-1" >
                          <div className="col-6">
                              <span>Available color:</span>
                          </div>
                          <div className="col-6">
                          <span className="product-color">
                        RED  <input className="color-check" type="checkbox" checkedColorOne={checkedColorOne} onChange={handleChangeColoreOne}/> 
                         , BLACK<input className="color-check" type="checkbox" checkedColorTwo={checkedColorTwo} onChange={handleChangeColorTwo}/> 
                         , BLUE<input className="color-check" type="checkbox" checkedColorThree={checkedColorThree} onChange={handleChangeColorThree} />
                          </span>
                          </div>
                      </div>
                         
                      <div className="row mt-1" >
                          <div className="col-6">
                          <span>Available size:</span>
                         </div>
                          <div className="col-6">
                          <span> XS  S  M L</span></div>    
                      </div>
                      <div className="row mt-1" >
                          <div className="col-6">
                          <span>Promotions:</span>
                          </div>
                          <div className="col-6">
                          <span>
                                Free shipping</span>
                          </div>
                        </div>
                  </div>
              </div>
          </div>
          <div className="d-flex mt-5 product-review flex-column">
              <div className="d-flex product-review-head w-75 mx-auto  justify-content-around">
                  <span onClick={handleChangeDescription}>Description</span>
                  <span onClick={handleChangeSpecification}>Specification</span>
                  <span onClick={handleChangeReview}>Review(2)</span>
                  
              </div>
              <div className="d-flex flex-column w-75 mx-auto text-start mt-5">
                  <h4> {SpecificationHeading}
                      {DescriptionHeading}
                      {ReviewHeading}
                  </h4>
                  <p className="mt-2">
                      {Specification}
                      {Description}
                      {Review}
                  </p>
              </div>
          </div>
      </>
  )
}

export default ProductDetails;
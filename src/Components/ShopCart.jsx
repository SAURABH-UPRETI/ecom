import React from "react";
import { useState } from "react";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import RotateRightOutlinedIcon from '@mui/icons-material/RotateRightOutlined';
import cartImg1 from "../img/product/product-1.jpg"
import SmallProductCard from "./SmallProductCard";
function ShopCart() {
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
  return (
    <div className="d-flex flex-column cart ">
      <table className="mt-5">
        <tr>
          <td>
            <h5> PRODUCT</h5> 
          </td>
          <td>
          <h5>PRICE</h5>
          </td>
          <td>
          <h5>QUANTITY</h5>
          </td>
          <td>
          <h5>TOTAL</h5>
          </td>
          <td></td>
        </tr>
        <hr/>
        <tr>
          <td>
           <SmallProductCard></SmallProductCard>
            
          </td>
          <td>
          $ 150.0
          </td>
          <td>
          <div className="d-flex flex-row  two">
                          <button onClick={HandleDecrement}>-</button>
                          <span>{ quantity}</span>
                          <button onClick={HandleIncrement}>+</button>
                      </div>
          </td>
          <td>
          $ 300.0
          </td>
          <td>
            {/* <button className="cut-btn"></button> */}
            <CancelOutlinedIcon style={{cursor:'pointer'}}></CancelOutlinedIcon>
          </td>
        </tr>
      </table>
      <div className="d-flex flex-row justify-content-between p-5  ">
        <div className="d-flex continue-shopping text-canter">
          <span> CONTINUE SHOPPING</span>
        </div>
        <div className="d-flex update-cart text-canter">
          <span>
            <RotateRightOutlinedIcon></RotateRightOutlinedIcon>
            UPDATE CART
          </span>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-between">
        <div className=""></div>
        <div className="d-flex flex-column bill  justify-content-around p-3">
          <span className="mt-3">CART TOTAL</span>
          <div className="d-flex justify-content-between">
            <span >Subtotal </span><span >$ 750.0</span>
           
          </div>
          <div className=" d-flex justify-content-between">
          <span>Total </span><span > $ 750.0</span>
          </div>
          <span className="checkout-btn p-2">
          PROCEED TO CHECKOUT
          </span>
        </div>
      </div>
    </div>
  )
}

export default ShopCart
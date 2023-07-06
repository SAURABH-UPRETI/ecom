import React from "react";

function Checkout() {
  return (
    <>
      <div className="d-flex flex-row container billing-detail mt-3 p-4">
        <div className="billing-detail-part-one p-3">
        <h3>BILLING DETAILS</h3>
          <hr />
          <form>
            <div className="row mt-5">
                    <div className="col-md-6">
                    <p>First Name <span>*</span></p>
                  <input type="text" className="w-100"></input>
                    </div>
                    <div className="col-md-6">
                    <p>First Name <span>*</span></p>
                  <input type="text" className="w-100"></input>
                  </div>
            </div>
            <div className="row mt-5">
                    <div className="col-md-12">
                    <p>Country <span>*</span></p>
                  <input type="text" className="w-100"></input>
                    </div>
                   
            </div>
            <div className="row mt-5">
                    <div className="col-md-12">
                    <p>
                    Address <span>*</span></p>
                  <input type="text" className="w-100"></input>
              </div>
              <div className="col-md-12 mt-5">
                  <input type="text" className="w-100"></input>
                    </div>
                   
            </div>
            <div className="row mt-5">
                    <div className="col-md-12">
                    <p>Town/City <span>*</span></p>
                  <input type="text" className="w-100"></input>
                    </div>
                   
            </div>
            <div className="row mt-5">
                    <div className="col-md-12">
                    <p>Country/State <span>*</span></p>
                  <input type="text" className="w-100"></input>
                    </div>
                   
            </div>
            <div className="row mt-5">
                    <div className="col-md-12">
                    <p>
                      Postcode/Zip <span>*</span></p>
                  <input type="text" className="w-100"></input>
                    </div>
                   
            </div>
            <div className="row mt-5">
                    <div className="col-md-6">
                    <p>TPhone <span>*</span></p>
                  <input type="text" className="w-100"></input>
                    </div>
                    <div className="col-md-6">
                    <p>Email <span>*</span></p>
                  <input type="text" className="w-100"></input>
                  </div>
            </div>
            <div className="row mt-5">
            <div class="form-check">
              <input class="form-check-input check" type="checkbox" value="" id="flexCheckDefault"/>
              <label class="form-check-label " for="flexCheckDefault">
              Create an acount?
                </label>
                <p className="mt-2 w-75">Create am acount by entering the information below. If you are a returing customer login at the
              top of the page</p>
              </div>
              
            </div>
            <div className="row mt-5">
            <div className="col-md-12">
                    <p>Account Password <span>*</span></p>
                  <input type="text" className="w-100"></input>
                  </div>
            </div>
            <div className="row mt-5">
            <div class="form-check">
              <input class="form-check-input check" type="checkbox" value="" id="flexCheckDefault"/>
              <label class="form-check-label " for="flexCheckDefault">
              Create an acount?
                </label>
                Note about your order, e.g, special noe for delivery
              
              </div>
            </div>
            <div className="row mt-5">
            <div className="col-md-12">
                    <p>Oder notes <span>*</span></p>
                  <input type="text" className="w-100"></input>
                  </div>
            </div>
        </form>
        </div>
        <div className="billing-detail-part-two d-flex p-1">
          <div className="bill p-5">
            <h4>YOUR ORDER</h4>
            <hr />
            <div className="row mt-3">
              <div className="col-md-8">
                <h5>Product</h5>
              </div>
              <div className="col-md-4">
                <h5>Total</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8">
                <p>Product</p>
              </div>
              <div className="col-md-4">
              <p>000&#8377;</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8">
                <p>Product</p>
              </div>
              <div className="col-md-4">
              <p>000&#8377;</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8">
                <p>Product</p>
              </div>
              <div className="col-md-4">
              <p>000&#8377;</p>
              </div>
            </div>
            <div className="row ">
              <div className="col-md-8">
                <p>Product</p>
              </div>
              <div className="col-md-4">
              <p>000&#8377;</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-8">
                <p className="sub-total">Subtotal</p>
              </div>
              <div className="col-md-4">
              <p className="sub-total">000&#8377;</p>
              </div>
            </div>
            <div className="row ">
              <div className="col-md-8">
                <p className="total">
                  Total
                </p>
              </div>
              <div className="col-md-4">
              <p className="total">000&#8377;</p>
              </div>
            </div>
            <div class="form-check">
                <input className="form-check-input check" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label" for="flexCheckDefault">
                  UPI Payment
                </label>
            </div>
            <div class="form-check">
                <input className="form-check-input check" type="checkbox" value="" id="flexCheckDefault"/>
                <label classname="form-check-label" for="flexCheckDefault">
                 Bank Transfer
                </label>
            </div>
            
            <div className="row mt-5">
            <button> PLACE ORDER</button>
           </div>
          </div>
         
        </div>
    </div>
    </>
  )
}

export default Checkout;
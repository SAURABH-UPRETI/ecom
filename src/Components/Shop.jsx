import React from "react";
import ProductCard from "./ProductCard";
import { useState } from 'react';
import { Link, MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Button from '@mui/material/Button';

function Shop() {

  //multi range slider
  const [values, setValues] = useState([0, 100]);
  const handleChange = (index, e) => {
    const newValues = [...values];
    newValues[index] = parseInt(e.target.value);
    setValues(newValues);
  };

  //pagination
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1', 10);
  return (
      <div className="d-flex container flex-row mt-5">
      <div className="w-25 side-bar" >
       
        <div className="" >
          <div className="categories">
              <h4 className="p-3"> CATEGORIES</h4>
      </div>
        <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Women
                    </button>
                  </h2>
                  <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                              <div className="accordion-body">
                                <ul>
                                  <li className="p-1">- Coats</li>
                                  <li className="p-1">- Jackets</li>
                                  <li className="p-1">- Dresses</li>
                                  <li className="p-1">- Shirts</li>
                                  <li className="p-1">- T-shirts</li>
                                  <li className="p-1">- Jeans</li>
                              </ul>
                              </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      MEN
                    </button>
                  </h2>
                  <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                              <div className="accordion-body">
                              <ul>
                                  <li className="p-1">- Coats</li>
                                  <li className="p-1">- Jackets</li>
                                  <li className="p-1">- Dresses</li>
                                  <li className="p-1">- Shirts</li>
                                  <li className="p-1">- T-shirts</li>
                                  <li className="p-1">- Jeans</li>
                              </ul>
                              </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      KIDS
                    </button>
                  </h2>
                  <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                              <div className="accordion-body">
                              <ul>
                                  <li className="p-1">- Coats</li>
                                  <li className="p-1">- Jackets</li>
                                  <li className="p-1">- Dresses</li>
                                  <li className="p-1">- Shirts</li>
                                  <li className="p-1">- T-shirts</li>
                                  <li className="p-1">- Jeans</li>
                              </ul>
                              </div>
                  </div>
                </div>
        </div>
        </div>
        <div className="price mt-5">
          <h5 className="p-3">SHOP BY PRICE</h5>
                {values.map((value, index) => (
            <input
              className="inpt"
          key={index}
          type="range"
          min={100}
          max={1000}
          value={value}
          onChange={(e) => handleChange(index, e)}
                    
        />
      ))}
          <div className="d-flex flex-row justify-content-between p-3">
      
            <div className="p-2"><span>Price:</span> {values.join(' - ')}&#8377;</div>
          <Button variant="outlined">FILTER</Button>
          </div>
        </div>

        <div className=" shop-by-size mt-5">
          <h5> SHOP BY SIZE</h5>
          <div className="form-check mt-5">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                  <label className="form-check-label" for="flexCheckDefault">
                   XXS
                  </label>
                </div>
                <div className="form-check mt-2">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
                  <label className="form-check-label" for="flexCheckChecked">
                    XS
            </label>
               <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                  <label className="form-check-label" for="flexCheckDefault">
                   XS-S
                  </label>
                </div>
                <div className="form-check mt-2">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
                  <label className="form-check-label" for="flexCheckChecked">
                    S
            </label>
               <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                  <label className="form-check-label" for="flexCheckDefault">
                   M
                  </label>
                </div>
                <div className="form-check mt-2">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
                  <label className="form-check-label" for="flexCheckChecked">
                    M-L
            </label>
               <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                  <label className="form-check-label" for="flexCheckDefault">
                   L
                  </label>
                </div>
                <div className="form-check mt-2">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
                  <label className="form-check-label" for="flexCheckChecked">
                    XL
                  </label>
            </div>
        </div>

        <div className=" shop-by-color mt-5">
          <h5> SHOP BY COLOR</h5>
          <div className="form-check mt-5">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                  <label className="form-check-label" for="flexCheckDefault">
                  Blacks
                  </label>
                </div>
                <div className="form-check mt-2">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
                  <label className="form-check-label" for="flexCheckChecked">
                    White
            </label>
               <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                  <label className="form-check-label" for="flexCheckDefault">
                   Red
                  </label>
                </div>
                <div className="form-check mt-2">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
                  <label className="form-check-label" for="flexCheckChecked">
                    Blue
            </label>
               <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                  <label className="form-check-label" for="flexCheckDefault">
                   Yellow
                  </label>
                </div>
                <div className="form-check mt-2">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
                  <label className="form-check-label" for="flexCheckChecked">
                    Green
            </label>
               <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                  <label className="form-check-label" for="flexCheckDefault">
                   Gray
                  </label>
                </div>
                <div className="form-check mt-2">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
                  <label className="form-check-label" for="flexCheckChecked">
                   Purple
                  </label>
            </div>
        </div>
       
          </div>
          <div className="w-75 ">
          <div className=" d-flex flex-row justify-content-around flex-wrap  ">
              <ProductCard/>
              <ProductCard />
              <ProductCard />
              <ProductCard/>
              <ProductCard/>
              <ProductCard />
              <ProductCard/>
              <ProductCard />
              <ProductCard /> 
              </div>
              <div>
                  
          <div className="page-num mt-5">
          <Pagination
      page={page}
      count={10}
      renderItem={(item) => (
        <PaginationItem
          component={Link}
          to={`/inbox${item.page === 1 ? '' : `?page=${item.page}`}`}
          {...item}
        />
      )}
    />
         </div>
          </div>
          </div>
         
         
    </div>
  )
}

export default Shop;
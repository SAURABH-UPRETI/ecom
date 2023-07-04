import React from "react"
import { useState } from "react";
import ProductCard from "./ProductCard"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
function Shop() {
  const [dropdown, setDropdown] = React.useState("shop-custom-dropdown");
  const openDropdown= ()=>{
        setDropdown("updated-shop-custom-dropdown")
  }
  return (
      <div className="d-flex container flex-row mt-5">
          <div className="w-25" >
        <div className={dropdown} onClick={openDropdown}>
          <span> WOMEN</span>
          <span className="icon-span " ><KeyboardArrowLeftIcon /></span> 
          <ul  className="mt-3">
            <li>- coats</li>
            <li>- coats</li>
            <li>- coats</li>
            <li>- coats</li>
            <li>- coats</li>
            <li>- coats</li>
           </ul>
        </div>
        <hr/>
          </div>
          <div className="w-75">
          <div className=" d-flex flex-row flex-wrap  ">
              <ProductCard/>
              <ProductCard />
              <ProductCard />
              <ProductCard/>
              <ProductCard/>
              <ProductCard />
              <ProductCard/>
              <ProductCard />
              <ProductCard />
              <ProductCard/>
              <ProductCard/>
              <ProductCard />
              
              </div>
              <div>
                  
          <div className="page-num ">
          <Stack spacing={2}>
            <Pagination count={10} />
           </Stack>
         </div>
          </div>
          </div>
         
         
    </div>
  )
}

export default Shop;
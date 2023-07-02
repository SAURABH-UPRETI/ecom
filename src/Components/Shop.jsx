import React from "react"
import ProductCard from "./ProductCard"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
function Shop() {

  return (
      <div className="d-flex flex-row mt-5">
          <div className="w-25">
              sidebr
          </div>
          <div className="w-75">
          <div className=" d-flex flex-row flex-wrap  ">
              <ProductCard/>
              <ProductCard />
              <ProductCard />
              <ProductCard/>
              <ProductCard/>
              <ProductCard />
              
              </div>
              <div>
                  
          <Stack spacing={2}>
            <Pagination count={10} />
           </Stack>
          </div>
          </div>
         
         
    </div>
  )
}

export default Shop;
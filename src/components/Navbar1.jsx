import React from "react";
import { Link } from "react-router-dom";
import { Grid, Box, Spacer } from "@chakra-ui/react";
// import Card from "./Card";

function Navbar1() {
  return (
    <>
      <div className=" bg-blue-800 w-full overflow-y-auto mt-20 fixed top-0 sm:mt-30 md:mt-18 lg:mt-16 z-40 ">
        <hr className="text-white" />
        {/* Large Screen */}
        <div>
          <Grid templateColumns={{base:"repeat(2,1fr)",sm:"repeat(3,1fr)",md:"repeat(4,1fr)",xl:"repeat(6,1fr)"}} w="90%" gap={4} className="text-white m-auto text-center">
              <Link to="/">All</Link>
            {/* <Box p="4">
            </Box> */}
              <Link to="/laptops">Laptops</Link>
            {/* <Box p="4">
            </Box> */}
              <Link to="/smartphones">Smartphones</Link>
            {/* <Box p="4">
            </Box> */}
              <Link to="/womens-jewellery">Womens-Jewellery</Link>
            {/* <Box p="4">
            </Box> */}
              <Link to="/womens-dresses">womens-dresses</Link>
            {/* <Box p="4">
            </Box> */}
                <Link to="/sunglasses">sunglasses</Link>
            {/* <Box p="4">
              <button>
              </button>
            </Box> */}
          </Grid>
        </div>
      </div>
    </>
  );
}

export default Navbar1;

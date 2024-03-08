import React from "react";
import { Link } from "react-router-dom";
import { Flex, Box, Spacer } from "@chakra-ui/react";
import Card from "./Card";

function Navbar1() {
  
  return (
    <>
      <div className=" bg-blue-800 h-30 w-full mt-16 fixed top-0 hidden lg:block">
        <hr className="text-white" />
        {/* Large Screen */}
        <div>
          <Flex className="text-white">
            <Box p="4">
              <Link to="/">All</Link>
            </Box>
            <Spacer />
            <Box p="4">
              <Link to="/laptops">Laptops</Link>
            </Box>
            <Spacer />
            <Box p="4">
              <Link to="/smartphones">Smartphones</Link>
            </Box>
            <Spacer />
            <Box p="4">
              <Link to="/womens-jewellery">Womens-Jewellery</Link>
            </Box>
            <Spacer />
            <Box p="4">
              <Link to="/womens-dresses">womens-dresses</Link>
            </Box>
            <Spacer />
            <Box p="4">
              {/* <Link to="/sunglasses">sunglasses</Link> */}
              <button>
                <Link to="/sunglasses">sunglasses</Link>
              </button>
            </Box>
          </Flex>
        </div>
      </div>
    </>
  );
}

export default Navbar1;

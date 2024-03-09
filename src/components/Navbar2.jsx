import React, { useContext, useState } from "react";
import {
  Flex,
  Box,
  Spacer,
  Button,
  DrawerOverlay,
  DrawerBody,
  useDisclosure,
  Drawer,
  DrawerContent,
  DrawerHeader,
  Menu,
  MenuButton,
  Portal,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { TbBrandWalmart } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { GrNotes } from "react-icons/gr";

import { ContextData } from "../context/ContextProvider";
import { Link } from "react-router-dom";

function Navbar2() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [inputData, setInputData] = useState("");
  const { setSearch } = useContext(ContextData);
  // console.log(inputData)
  function handleButton() {
    setSearch(inputData);
  }
  return (
    <>
      <div className="bg-blue-800 w-full fixed top-0 text-white">
        {/* Large Screen */}
        <div className="hidden lg:block">
          <Flex align={"center"}>
            <Box p="4">
              <Flex align={"center"}>
                <p className="text-white text-2xl">WalMart</p>
                <Spacer />
                <TbBrandWalmart className="text-yellow-400 text-2xl" />
              </Flex>
            </Box>
            <Spacer />
            <Box>
              <button>My Items</button>
            </Box>
            <Spacer />
            <Box>
              <button>Departments</button>
            </Box>
            <Spacer />
            <Box w={"40%"}>
              <Flex align={"center"} className="relative">
                <input
                  type="text"
                  onChange={(e) => setInputData(e.target.value)}
                  placeholder="Search everything at Walmart online and in store"
                  className="w-full text-center h-8 rounded-2xl text-black"
                />
                <button
                  onClick={handleButton}
                  className="text-black absolute right-0 bg-yellow-300 h-full w-8 rounded-full"
                >
                  <Link to="/search">
                    <CiSearch className="m-auto" />
                  </Link>
                </button>
              </Flex>
            </Box>
            <Spacer />
            <Box>
              <Menu>
                <MenuButton>
                  <Flex align={"center"}>
                    <CiHeart className="text-2xl" />
                    <Spacer />
                    <div>
                      <p className="text-[10px]">Recorder</p>
                      <p className="font-bold">My Items</p>
                    </div>
                  </Flex>
                </MenuButton>
                <Portal>
                  <MenuList>
                    <MenuItem>Recorder</MenuItem>
                    <MenuItem>Lists</MenuItem>
                    <MenuItem>Registries</MenuItem>
                  </MenuList>
                </Portal>
              </Menu>
            </Box>
            <Spacer />
            <Box>
              <Menu>
                <MenuButton>
                  <Flex align={"center"}>
                    <CiUser className="text-2xl" />
                    <Spacer />
                    <div>
                      <p className="text-[10px]">Sign In</p>
                      <p className="font-bold">Account</p>
                    </div>
                  </Flex>
                </MenuButton>
                <Portal>
                  <MenuList className="text-center">
                    <button className="bg-blue-700 text-white rounded-lg w-7/8">
                      Sign in or create account
                    </button>
                    <Flex w={"65%"} align={"center"} m={"auto"}>
                      <GrNotes />
                      <Spacer />
                      <p className="text-center m-1">Purchase History</p>
                    </Flex>
                    <Flex w={"65%"} align={"center"} m={"auto"}>
                      <TbBrandWalmart />
                      <p className="text-center m-2">Walmart+</p>
                    </Flex>
                  </MenuList>
                </Portal>
              </Menu>
            </Box>
            <Spacer />
            <Box p="2">
              <Link to="/cart">
                <CiShoppingCart className=" text-3xl" />
              </Link>
            </Box>
          </Flex>
        </div>

        {/* medium Screen */}
        <div className="md:block lg:hidden p-4">
          <Flex align="center">
            <Box p="2">
              <Button onClick={onOpen} bg="blue.600">
                <GiHamburgerMenu />
              </Button>
              <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerHeader borderBottomWidth="1px">
                    <Flex>
                      <Box p="2">
                        <TbBrandWalmart className="text-4xl text-yellow-400" />
                      </Box>
                      <Box p="2" className="w-1/2">
                        <Button bg="blue" textColor={"white"}>
                          Sign in or create account
                        </Button>
                      </Box>
                    </Flex>
                  </DrawerHeader>
                  <DrawerBody>
                    <p>Walmart+</p>
                    <hr />
                    <p>Purchase History</p>
                    <p>My Items</p>
                    <p>Account</p>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </Box>
            <Spacer />
            <Box p="4">
              <TbBrandWalmart className="text-yellow-400 text-4xl" />
            </Box>
            <Spacer />
            <Box p="4" w="80%">
              <Flex align={"center"} className="relative">
                <input
                  type="text"
                  placeholder="Search Walmart"
                  onChange={(e) => setInputData(e.target.value)}
                  className="w-full text-center h-8 rounded-2xl text-black"
                />
                <button
                  onClick={handleButton}
                  className="text-black absolute right-0 bg-yellow-300 h-full w-8 rounded-full"
                >
                  <Link to="/search">
                    <CiSearch className="m-auto" />
                  </Link>
                </button>
              </Flex>
            </Box>
            <Spacer />
            <Box>
              <Link to="/cart">
                <CiShoppingCart className="text-white text-3xl" />
              </Link>
            </Box>
          </Flex>
        </div>
      </div>
    </>
  );
}

export default Navbar2;

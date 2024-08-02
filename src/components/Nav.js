import { Flex, Heading } from "@chakra-ui/react";

import React from "react";
import MobileNav from "./MonileNav";
import NavLinks from "./NavLinks";
function Nav() {
  return (
    <>
      <Flex
        as="nav"
        w="100%"
        h="60px"
        px="10px"
        display={["none", "none", "flex", "flex"]}
      >
        <Flex w="25%" alignItems="center">
          <Heading color="brand.900">E-commerce</Heading>
        </Flex>
        <Flex w="75%" justifyContent="flex-end" alignItems="center">
          <NavLinks display="inline-flex" />
        </Flex>
      </Flex>

      <Flex display={["flex", "flex", "none", "none"]}>
        <MobileNav />
      </Flex>
    </>
  );
}
export default Nav;

import { Flex, List, Text } from "@chakra-ui/react";
import React from "react";
import { NavList } from "../data/Lists";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function NavLinks({ display, onLinkClick }) {
  const linkItemVariants = {
    hidden: { opacity: 0, y: "50%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut", // Add ease-out easing function
      },
    },
    exit: {
      opacity: 0,
      y: "50%",
      transition: {
        duration: 0.1,
        ease: "easeOut", // Add ease-out easing function
      },
    },
  };

  const navLinksVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };
  return (
    <Flex>
      <List>
        <Flex
          as={motion.div}
          variants={navLinksVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Flex display={display} gap="20px">
            {NavList.map((link) => (
              <Link key={link.id} to={link.linkto} onClick={onLinkClick}>
                <Text
                  as={motion.div}
                  fontSize={["2rem", "1.5rem"]}
                  fontWeight="bold"
                  color="brand.900"
                  variants={linkItemVariants}
                  borderBottom="2px solid"
                >
                  {link.title}
                </Text>
              </Link>
            ))}
          </Flex>
        </Flex>
      </List>
    </Flex>
  );
}
export default NavLinks;

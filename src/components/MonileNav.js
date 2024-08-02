import { Flex, Heading, Spacer, useDisclosure } from "@chakra-ui/react";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavLinks from "./NavLinks";
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import { useDimensions } from "../useDimensions";

function MobileNav() {
  const { isOpen, onToggle } = useDisclosure();
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const sidebarVariants = {
    open: {
      clipPath: `circle(${height * 2 + 1000}px at 100vw 0)`,
      transition: {
        type: "spring",
        stiffness: 40,
        restDelta: 2,
      },
    },
    closed: {
      clipPath: "circle(50px at 100% 0%)",
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <Flex as="nav" w="100%" h="60px" px="10px">
      <Flex w="75%" alignItems="center">
        <Heading color="brand.900">E-commerce</Heading>
      </Flex>
      <Flex
        w="25%"
        alignItems="center"
        justifyContent="flex-end"
        display={{ base: "flex", md: "none" }}
        color="brand.900"
      >
        <FontAwesomeIcon
          icon={faBars}
          size="xl"
          aria-label="Open navigation menu"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
        />
      </Flex>
      <AnimatePresence>
        {isOpen && (
          <Flex
            as={motion.div}
            variants={sidebarVariants}
            initial={{ clipPath: "circle(30px at 100% 0%)" }}
            animate="open"
            exit="closed"
            transition={{ duration: 0.5 }}
            overflow="hidden"
            justifyContent="center"
            alignItems="center"
            position="fixed"
            m="0"
            p="0"
            right="0"
            top="0"
            w="100vw"
            h="100vh"
            bg="background.100"
            zIndex="dropdown"
            flexDirection="column"
            ref={containerRef}
          >
            <Flex
              height="60px"
              px="10px"
              alignItems="center"
              w="100%"
              position="absolute"
              top="0"
            >
              <Flex w="75%" alignItems="center">
                <Heading color="brand.900">E-commerce</Heading>
              </Flex>
              <Flex
                w="25%"
                alignItems="center"
                justifyContent="flex-end"
                color="brand.900"
              >
                <FontAwesomeIcon
                  icon={faClose}
                  size="xl"
                  aria-label="Close navigation menu"
                  onClick={onToggle}
                  cursor="pointer"
                />
              </Flex>
            </Flex>
            <Spacer />
            <Flex direction="column" alignItems="center" w="100%">
              <NavLinks display="flow" onLinkClick={onToggle} />
            </Flex>
            <Spacer />
          </Flex>
        )}
      </AnimatePresence>
    </Flex>
  );
}

export default MobileNav;

import {
  Flex,
  Heading,
  Stack,
  useColorMode,
  Link as ChakraLink,
  IconButton,
  Button,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";

interface Props {}

export const Header = ({}: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      width="full"
      py={10}
      justifyContent="space-between"
      alignItems="center"
      paddingX={28}
    >
      <Heading textDecoration="underline">Ticked</Heading>
      <Flex alignItems="center" justifyContent="space-between">
        <Stack spacing={6} isInline mr={6}>
          <Link href="/docs">
            <ChakraLink>Docs</ChakraLink>
          </Link>
          <Link href="/cases">
            <ChakraLink>Cases</ChakraLink>
          </Link>
          <Link href="/pricing">
            <ChakraLink>Pricing</ChakraLink>
          </Link>
        </Stack>
        <IconButton
          borderColor={
            colorMode === "light" ? "blackAlpha.900" : "whiteAlpha.900"
          }
          border="2px"
          borderRadius="full"
          onClick={toggleColorMode}
          aria-label="icon"
          icon={colorMode === "light" ? <RiSunFill /> : <RiMoonClearFill />}
          size="md"
          mr={4}
        />
        <Button
          borderColor={
            colorMode === "light" ? "blackAlpha.900" : "whiteAlpha.900"
          }
          border={colorMode === "light" ? "2px" : "none"}
          size="md"
          fontWeight="bold"
          bgColor={colorMode === "light" ? "transparent" : "#FFFFFF"}
          textColor={colorMode === "light" ? "#000000" : "#000000"}
        >
          Dashboard
        </Button>
      </Flex>
    </Flex>
  );
};

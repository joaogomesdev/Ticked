import React from "react";
import NextLink from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import {
  Flex,
  Link,
  Avatar,
  Box,
  Button,
  Heading,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";

interface Props {
  children: React.ReactNode;
}

const DashboardShell = ({ children }: Props) => {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();

  const { data: session } = useSession();
  if (session) {
    return (
      <Box backgroundColor="gray.100" h="100vh">
        <Flex mb={16} w="full" borderTop="5px solid #FF7057">
          <Flex
            alignItems="center"
            justifyContent="space-between"
            pt={10}
            pb={4}
            maxW="1250px"
            margin="0 auto"
            w="full"
            px={8}
            h="70px"
          >
            <Flex justifyContent="center" alignItems="center">
              <Link href={"/"} mr="8">
                <Heading
                  cursor="pointer"
                  textDecoration={
                    router.pathname === "/" ? "underline" : "none"
                  }
                >
                  Ticked
                </Heading>
              </Link>
              <NextLink href="/app" passHref>
                <Link mr={4}>Events</Link>
              </NextLink>
              <NextLink href="/app/templates" passHref>
                <Link mr={4}>Templates</Link>
              </NextLink>
              <NextLink href="/app/tickets" passHref>
                <Link>Tickets</Link>
              </NextLink>
            </Flex>
            <Flex justifyContent="center" alignItems="center">
              <Button
                variant="ghost"
                mr={2}
                onClick={() =>
                  signOut({
                    callbackUrl: "/",
                  })
                }
              >
                Logout
              </Button>

              <IconButton
                borderColor={
                  colorMode === "light" ? "blackAlpha.900" : "whiteAlpha.900"
                }
                border="2px"
                borderRadius="full"
                onClick={toggleColorMode}
                aria-label="icon"
                icon={
                  colorMode === "light" ? <RiSunFill /> : <RiMoonClearFill />
                }
                size="md"
                mr={4}
              />
              <Avatar size="md" src={session.user?.image ?? ""} />
            </Flex>
          </Flex>
        </Flex>
        <Flex margin="auto auto" direction="column" maxW="7xl" px={8}>
          {children}
        </Flex>
      </Box>
    );
  }

  return <h1>You are not logged</h1>;
};

export default DashboardShell;

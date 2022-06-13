import Link from "next/link";
import React from "react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { useRouter } from "next/router";

interface Props {
  name: string;
  to: string;
}

export const NavLink = ({ name, to }: Props) => {
  const { pathname } = useRouter();
  console.log(to, name);

  return (
    <Link href={to}>
      <ChakraLink
        textDecoration={
          pathname === `/${name.toLocaleLowerCase()}` ? "underline" : "none"
        }
      >
        {name}
      </ChakraLink>
    </Link>
  );
};

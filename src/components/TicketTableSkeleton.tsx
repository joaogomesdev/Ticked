import React from "react";
import { Box, Skeleton, useColorMode } from "@chakra-ui/react";

import { Table, Tr, Th, Td } from "./Table";

const SkeletonRow = ({ width, colorMode }: any) => (
  <Box as="tr">
    <Td>
      <Skeleton
        height="10px"
        w={width}
        my={4}
        startColor={colorMode === "light" ? "black" : "white"}
        endColor={colorMode === "light" ? "white" : "black"}
      />
    </Td>
    <Td>
      <Skeleton
        height="10px"
        w={width}
        my={4}
        startColor={colorMode === "light" ? "black" : "white"}
        endColor={colorMode === "light" ? "white" : "black"}
      />
    </Td>
    <Td>
      <Skeleton
        height="10px"
        w={width}
        my={4}
        startColor={colorMode === "light" ? "black" : "white"}
        endColor={colorMode === "light" ? "white" : "black"}
      />
    </Td>
    <Td>
      <Skeleton
        height="10px"
        w={width}
        my={4}
        startColor={colorMode === "light" ? "black" : "white"}
        endColor={colorMode === "light" ? "white" : "black"}
      />
    </Td>
  </Box>
);

const TicketTableSkeleton = () => {
  const { colorMode } = useColorMode();
  return (
    <Table>
      <thead>
        <Tr bgColor="transparent">
          <Th>Event</Th>
          <Th>Visitor</Th>
          <Th>URL</Th>
          <Th>Generated at</Th>
        </Tr>
      </thead>
      <tbody>
        <SkeletonRow width="75px" colorMode={colorMode} />
        <SkeletonRow width="125px" colorMode={colorMode} />
        <SkeletonRow width="50px" colorMode={colorMode} />
        <SkeletonRow width="100px" colorMode={colorMode} />
        <SkeletonRow width="75px" colorMode={colorMode} />
      </tbody>
    </Table>
  );
};

export { TicketTableSkeleton };

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

const EventTableSkeleton = () => {
  const { colorMode } = useColorMode();
  return (
    <Table backgroundColor="">
      <thead>
        <Tr bgColor="transparent">
          <Th>Name</Th>
          <Th>Description</Th>
          <Th>Start date</Th>
          <Th>End date</Th>
          <Th>Status</Th>
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

export { EventTableSkeleton };

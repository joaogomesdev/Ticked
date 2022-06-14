import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  Heading,
} from "@chakra-ui/react";

const TicketTableHeader = () => {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem gap={2}>
          <BreadcrumbLink href="/app/templates">
            Generated Tickets
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Flex justifyContent="space-between">
        <Heading mb={8}>Generated Tickets</Heading>
      </Flex>
    </>
  );
};

export { TicketTableHeader };

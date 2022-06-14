import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  Heading,
} from "@chakra-ui/react";

const TicketTemplatesTableHeader = () => {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem gap={2}>
          <BreadcrumbLink href="/app/templates">
            Ticket Templates
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Flex justifyContent="space-between">
        <Heading mb={8}>My Tickets templates</Heading>
        <Button border="2px" variant="outline">
          Create template
        </Button>
      </Flex>
    </>
  );
};

export { TicketTemplatesTableHeader };

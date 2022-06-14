import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Flex } from "@chakra-ui/react";
import DashboardShell from "components/DashboardShell";
import { TicketTemplatesTableHeader } from "components/TicketTemplatesTableHeader";
import { TicketTemplatesTableSkeleton } from "components/TicketTemplatesTableSkeleton";

interface Props {}

const Templates = ({}: Props) => {
  const data: never[] = [];

  if (data) {
    return (
      <DashboardShell>
        <TicketTemplatesTableHeader />

        <TicketTemplatesTableSkeleton />
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </DashboardShell>
  );
};

export default Templates;

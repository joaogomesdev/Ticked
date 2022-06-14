import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Flex } from "@chakra-ui/react";
import DashboardShell from "components/DashboardShell";
import { EventTableHeader } from "components/EventTableHeader";
import { EventTableSkeleton } from "components/EventTableSkeleton";

interface Props {}

const App = ({}: Props) => {
  const data: never[] = [];

  if (data) {
    return (
      <DashboardShell>
        <EventTableHeader />

        <EventTableSkeleton />
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

export default App;

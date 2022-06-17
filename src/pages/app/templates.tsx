import React from "react";
import DashboardShell from "components/DashboardShell";
import { TicketTemplatesTableHeader } from "components/TicketTemplatesTableHeader";
import { TicketTemplatesTableSkeleton } from "components/TicketTemplatesTableSkeleton";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  // if (
  //   !context.req.cookies["next-auth.session-token"] ||
  //   !context.req.cookies["__Secure-next-auth.session-token"]
  // ) {
  //   return {
  //     redirect: {
  //       permanent: false,
  //       destination: "/",
  //     },
  //   };
  // }
  return { props: {} };
};

interface Props {}

const Templates = ({}: Props) => {
  const data: never[] = [];

  if (!data) {
    return (
      <DashboardShell>
        <TicketTemplatesTableHeader />

        <TicketTemplatesTableSkeleton />
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      <TicketTemplatesTableHeader />

      <TicketTemplatesTableSkeleton />
    </DashboardShell>
  );
};

export default Templates;

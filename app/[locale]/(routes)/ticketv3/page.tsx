import React, { Suspense } from "react";
import Container from "../components/ui/Container";

import { getServerSession, Session } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

import ProjectsView from "./_components/ProjectsView";
import TenantListv3View from "./_components/TenantListv3View";
import SuspenseLoading from "@/components/loadings/suspense";

export const maxDuration = 300;

const Ticketv3Page = async () => {
  const session: Session | null = await getServerSession(authOptions);

  if (!session) return redirect("/sign-in");

  return (
    <Container
      title="Ticket System v3"
      description={"Everything you need to set up and monitoring about Absendulu v3"}
    >
      <Suspense fallback={<SuspenseLoading />}>
        <TenantListv3View />
      </Suspense>
    </Container>
  );
};

export default Ticketv3Page;

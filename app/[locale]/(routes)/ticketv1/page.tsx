import React, { Suspense } from "react";
import Container from "../components/ui/Container";

import { getServerSession, Session } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

import ProjectsView from "./_components/ProjectsView";
import SuspenseLoading from "@/components/loadings/suspense";

export const maxDuration = 300;

const Ticketv1Page = async () => {
  const session: Session | null = await getServerSession(authOptions);

  if (!session) return redirect("/sign-in");

  return (
    <Container
      title="Ticket System v1"
      description={"Everything you need to set up and monitoring about Absendulu v1"}
    >
      <Suspense fallback={<SuspenseLoading />}>
        {/* <ProjectsView /> */}
      </Suspense>
    </Container>
  );
};

export default Ticketv1Page;

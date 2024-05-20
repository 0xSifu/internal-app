import React, { Suspense } from "react";
import Container from "../components/ui/Container";

import { getServerSession, Session } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

import ProjectsView from "./_components/ProjectsView";
import SuspenseLoading from "@/components/loadings/suspense";
import DevicesView from "./_components/DevicesView";

export const maxDuration = 300;

const ProjectsPage = async () => {
  const session: Session | null = await getServerSession(authOptions);

  if (!session) return redirect("/sign-in");

  return (
    <Container
      title="Devices"
      description={"Manage Absendulu All Devices"}
    >
      <Suspense fallback={<SuspenseLoading />}>
        <DevicesView />

      </Suspense>
    </Container>
  );
};

export default ProjectsPage;

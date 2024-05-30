import React from "react";
import Link from "next/link";
import { getServerSession } from "next-auth";

import { getActiveUsers } from "@/actions/get-users";
import { getBoards, getTenants } from "@/actions/projects/get-boards";

import { authOptions } from "@/lib/auth";

import NewTaskDialog from "../dialogs/NewTask";
import NewProjectDialog from "../dialogs/NewProject";

import { Button } from "@/components/ui/button";
import H2Title from "@/components/typography/h2";

import { ProjectsDataTable } from "../table-components/data-table";
import { columns } from "../table-components/columns";
import AiAssistant from "./AiAssistant";

const TenantListv3View = async () => {
  const session = await getServerSession(authOptions);

  if (!session) return null;

  const userId = session.user.id;

  const users = await getActiveUsers();
  const tenants = await getTenants();



  return (
    <>
      <div className="pt-2 space-y-3">
        <H2Title>Tenant List v3</H2Title>
        <ProjectsDataTable data={tenants} columns={columns} />
      </div>
    </>
  );
};

export default TenantListv3View;

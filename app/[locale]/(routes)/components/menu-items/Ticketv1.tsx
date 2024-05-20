import { ServerIcon } from "lucide-react";

import Link from "next/link";

import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  open: boolean;
  title: string;  
};

const Ticketv1ModuleMenu = ({ open, title }: Props) => {
  const pathname = usePathname();
  const isPath = pathname.includes("ticketv1");

  return (
    <div className="flex flex-row items-center mx-auto p-2">
      <Link
        href={"/ticketv1"}
        className={`flex gap-2 p-2 ${isPath ? "text-muted-foreground" : null}`}
      >
        <ServerIcon className="w-6" />
        <span className={open ? "" : "hidden"}>{title}</span>
      </Link>
    </div>
  );
};

export default Ticketv1ModuleMenu;
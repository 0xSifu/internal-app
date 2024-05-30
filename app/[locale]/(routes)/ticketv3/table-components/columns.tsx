"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import moment from "moment";
import Link from "next/link";
import { DataTableColumnHeader } from "./data-table-column-header";
// import { DataTableRowActions } from "./data-table-row-actions";

// Assuming you have a type or interface for User
import { Tenant } from "../data/schema";
import { DataTableRowActions } from "./data-table-row-actions";

export const columns: ColumnDef<Tenant>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => (
      <div className="w-[150px]">{row.getValue("email")}</div>
    ),
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "subscription_status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Subscription Status" />
    ),
    cell: ({ row }) => {
      const status = row.getValue("subscription_status")
      return (
        <div className={`w-[150px]`}>
          <span className={`${status === 0 ? "bg-green-700 text-green-100 p-2 rounded-md" : "bg-yellow-700 text-yellow-100 p-2 rounded-md"}`}>
            {status === 0 ? "Active" : status === 1 ? "Expired" : "InActive"}
          </span>
        </div>
      )
    },
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "plan",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Plan" />
    ),
    cell: ({ row }) => (
      <div className="w-[150px]">{row.getValue("plan")}</div>
    ),
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "registered_on",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Registered On" />
    ),
    cell: ({ row }) => (
      <div className="w-[150px]">
        {moment(row.getValue("registered_on")).format("YY-MM-DD - HH:mm")}
      </div>
    ),
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "start_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Start Date" />
    ),
    cell: ({ row }) => (
      <div className="w-[150px]">
        {moment(row.getValue("start_date")).format("YY-MM-DD")}
      </div>
    ),
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "end_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="End Date" />
    ),
    cell: ({ row }) => (
      <div className="w-[150px]">
        {moment(row.getValue("end_date")).format("YY-MM-DD")}
      </div>
    ),
    enableSorting: true,
    enableHiding: true,
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];

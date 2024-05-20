"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Task } from "../data/schema";  // Adjust the import path if necessary
import { DataTableColumnHeader } from "./data-table-column-header";
// import { DataTableRowActions } from "./data-table-row-actions";
import Link from "next/link";

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "action",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Action" />
    ),
    cell: ({ row }) => <div className="w-[100px]">{row.getValue("action")}</div>,
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => <div className="w-[100px]">{row.getValue("status")}</div>,
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "area",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Area" />
    ),
    cell: ({ row }) => <div className="w-[100px]">{row.getValue("area")}</div>,
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => (
      <Link href={`/tasks/${row.original.id}`}>
        <div className="w-[200px]">{row.getValue("name")}</div>
      </Link>
    ),
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "device",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Device" />
    ),
    cell: ({ row }) => <div className="w-[150px]">{row.getValue("device")}</div>,
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "detail",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Detail" />
    ),
    cell: ({ row }) => (
      <div className="w-[300px]">{row.getValue("detail")}</div>
    ),
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "version",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Version" />
    ),
    cell: ({ row }) => <div className="w-[100px]">{row.getValue("version")}</div>,
    enableSorting: true,
    enableHiding: false,
  },
  // {
  //   id: "actions",
  //   cell: ({ row }) => <DataTableRowActions row={row} />,
  // },
];

import React, { useState } from "react";
import Link from "next/link";
import { getMarksData } from "./markData"; // Update the path accordingly

type markKey = "id" | "name" | "position" | "department" | "affiliation";

function SortableHeader({ label, sortConfig, onSort }: SortableHeaderProps) {
  const isSorted = sortConfig.key === (label.toLowerCase() as markKey);
  const arrow = isSorted ? (sortConfig.direction === "asc" ? "↑" : "↓") : "";

  return (
    <th className="border border-slate-500 cursor-pointer" onClick={onSort}>
      {label} {arrow}
    </th>
  );
}

interface TableCellProps {
  id: number;
  info?: string;
  link?: boolean;
}

function TableCell({ id, info, link }: TableCellProps) {
  if (!info) return <td className="border border-slate-500">{id}</td>;
  else if (link)
    return (
      <td className="border border-slate-500 text-solgov-yellow-dark hover:text-solgov-yellow">
        <Link href={`/REDACTED/marks/${id}`}>
          <p>{info}</p>
        </Link>
      </td>
    );
  else return <td className="border border-slate-500">{info}</td>;
}

export default function TableComponent() {
  const initialMarks = getMarksData();
  const [marks, setMarks] = useState(initialMarks);
  const [sortConfig, setSortConfig] = useState<{
    key: markKey | null;
    direction: "asc" | "desc" | null;
  }>({ key: null, direction: null });
  const [searchTerm, setSearchTerm] = useState("");

  const handleSort = (key: markKey) => {
    let direction: "asc" | "desc" = "asc"; // Initialize with "asc"
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });

    const sortedMarks = [...marks].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setMarks(sortedMarks);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    const filteredMarks = initialMarks.filter((mark) =>
      Object.values(mark).some((value) => {
        if (typeof value === "string") {
          return value.toLowerCase().includes(event.target.value.toLowerCase());
        } else if (typeof value === "number") {
          return value.toString().includes(event.target.value);
        }
        return false;
      })
    );
    setMarks(filteredMarks);
  };
  return (
    <div>
      <h2 className="pt-5 text-lg">People of intrest</h2>
      <div className="">
        <input
          type="text"
          placeholder="Mark Lookup..."
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 border border-slate-500 bg-inherit w-full accent-transparent"
        />
      </div>
      <table className="border border-slate-500">
        <thead>
          <tr>
            <SortableHeader
              label="ID"
              sortConfig={sortConfig}
              onSort={() => handleSort("id")}
            />
            <SortableHeader
              label="Name"
              sortConfig={sortConfig}
              onSort={() => handleSort("name")}
            />
            <SortableHeader
              label="Position"
              sortConfig={sortConfig}
              onSort={() => handleSort("position")}
            />
            <SortableHeader
              label="Department"
              sortConfig={sortConfig}
              onSort={() => handleSort("department")}
            />
            <SortableHeader
              label="Affiliation"
              sortConfig={sortConfig}
              onSort={() => handleSort("affiliation")}
            />
          </tr>
        </thead>
        <tbody>
          {marks.map((mark) => (
            <tr key={mark.id}>
              <TableCell id={mark.id} />
              <TableCell id={mark.id} info={mark.name} link />
              <TableCell id={mark.id} info={mark.position} />
              <TableCell id={mark.id} info={mark.department} />
              <TableCell id={mark.id} info={mark.affiliation} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

interface SortableHeaderProps {
  label: string;
  sortConfig: { key: markKey | null; direction: "asc" | "desc" | null };
  onSort: () => void;
}

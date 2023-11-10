"use client";
import React, { useState } from "react";
import Link from "next/link";

import { getMarksData } from "./markData"; // Update the path accordingly

type markKey = "id" | "name" | "position" | "department" | "affiliation";

export default function RecordsPage() {
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
    <main className="flex flex-col items-center justify-center text-center p-5 w-4/5 m-auto">
      <h1 className="p-5">Evidenzkompanien Mark Database</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Mark Lookup..."
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 border border-slate-500 rounded-md bg-inherit"
        />
      </div>
      <table className="border border-slate-500 w-4/5">
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
              <td className="border border-slate-500">{mark.id}</td>
              <td className="border border-slate-500 hover:text-cyan-400">
                <Link href={`/REDACTED/${mark.id}`}>
                  <p>{mark.name}</p>
                </Link>
              </td>
              <td className="border border-slate-500">{mark.position}</td>
              <td className="border border-slate-500">{mark.department}</td>
              <td className="border border-slate-500">{mark.affiliation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

interface SortableHeaderProps {
  label: string;
  sortConfig: { key: markKey | null; direction: "asc" | "desc" | null };
  onSort: () => void;
}

const SortableHeader: React.FC<SortableHeaderProps> = ({
  label,
  sortConfig,
  onSort,
}) => {
  const isSorted = sortConfig.key === (label.toLowerCase() as markKey);
  const arrow = isSorted ? (sortConfig.direction === "asc" ? "↑" : "↓") : "";

  return (
    <th className="border border-slate-500 cursor-pointer" onClick={onSort}>
      {label} {arrow}
    </th>
  );
};

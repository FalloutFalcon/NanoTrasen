'use client'
import React, { useState } from "react";
import Link from "next/link";

import { getEmployeesData } from "./employeeData";

type EmployeeKey = "id" | "name" | "position" | "department" | "affiliation";

export default function RecordsPage() {
  const initialEmployees = getEmployeesData();
  const [employees, setEmployees] = useState(initialEmployees);
  const [sortConfig, setSortConfig] = useState<{ key: EmployeeKey | null; direction: "asc" | "desc" | null }>({ key: null, direction: null });

  const handleSort = (key: EmployeeKey) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });

    const sortedEmployees = [...employees].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setEmployees(sortedEmployees);
  };
  return (
    <main className="flex flex-col items-center justify-center text-center p-5 w-4/5 m-auto">
      <h1 className="p-5">Evidenzkompanien Records</h1>
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
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td className="border border-slate-500">{employee.id}</td>
              <td className="border border-slate-500 hover:text-cyan-400">
                <Link href={`/REDACTED/${employee.id}`}>
                  <p>{employee.name}</p>
                </Link>
              </td>
              <td className="border border-slate-500">{employee.position}</td>
              <td className="border border-slate-500">{employee.department}</td>
              <td className="border border-slate-500">{employee.affiliation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

const SortableHeader = ({ label, sortConfig, onSort }) => {
  const isSorted = sortConfig.key === label;
  const arrow = isSorted ? (sortConfig.direction === "asc" ? "↑" : "↓") : "";

  return (
    <th
      className="border border-slate-500 cursor-pointer"
      onClick={onSort}
    >
      {label} {arrow}
    </th>
  );
};
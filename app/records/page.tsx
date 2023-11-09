'use client'
import React, { useState } from "react";
import Link from "next/link";

import { getEmployeesData } from "./employeeData"; // Update the path accordingly

export default function RecordsPage() {
  const employees = getEmployeesData();
  return (
    <main className="flex flex-col items-center justify-center text-center p-5 w-4/5 m-auto">
      <h1 className="p-5">Employee Records</h1>
      <table className="border border-slate-500 w-3/5">
        <thead>
          <tr>
            <th className="border border-slate-500">Name</th>
            <th className="border border-slate-500">Position</th>
            <th className="border border-slate-500">Department</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td className="border border-slate-500 hover:text-cyan-400">
                <Link href={`/records/employees/${employee.id}`}>
                  <p>{employee.name}</p>
                </Link>
              </td>
              <td className="border border-slate-500">{employee.position}</td>
              <td className="border border-slate-500">{employee.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

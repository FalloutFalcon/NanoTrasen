'use client'
import React, { useState } from "react";
import Link from "next/link";

import { getEmployeesData } from "./employeeData"; // Update the path accordingly

export default function RecordsPage() {
  const employees = getEmployeesData();
  return (
    <main className="flex flex-col items-center justify-center text-center">
      <h1 className="p-5">Employee Records</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>
                <Link href={`/records/employees/${employee.name}`}>
                  <p>{employee.name}</p>
                </Link>
              </td>
              <td>{employee.position}</td>
              <td>{employee.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

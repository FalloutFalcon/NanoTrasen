'use client'
import React, { useState } from "react";
import Link from "next/link";

interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
  description: string;
}

export default function RecordsPage() {
  const [employees] = useState<Employee[]>([
    {
      id: 1,
      name: "Baxter Baxter",
      position: "Engineer",
      department: "Engineering",
      description: "Baxter Baxter is an experienced engineer with a focus on problem-solving skills.",
    },
    {
      id: 2,
      name: "Bridget Baskket",
      position: "CMO",
      department: "Medical",
      description: "Bridget Baskket is the Chief Medical Officer and leads initiatives in the medical field.",
    },
    {
      id: 3,
      name: "Click now for honks",
      position: "Clown",
      department: "Service",
      description: "Click now for honks is a professional clown who brings joy and laughter to various events and parties.",
    },
  ]);

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

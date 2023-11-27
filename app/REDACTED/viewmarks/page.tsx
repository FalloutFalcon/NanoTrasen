'use client';

import { sql } from "@vercel/postgres";
import Link from "next/link"; // Assuming you're using Next.js

async function getDataFromDatabase() {
  try {
    const result = await sql`SELECT * FROM Marks`;
    return result.rows; // Assuming the rows contain the data you want
  } catch (error) {
    console.error("Error fetching data from database:", error);
    throw new Error("Failed to fetch data from database");
  }
}

export default async function Page() {
  const marks = await getDataFromDatabase();

  return (
    <table className="border border-slate-500 w-4/5">
      <thead>
        <tr>
          <th className="border border-slate-500">ID</th>
          <th className="border border-slate-500">Name</th>
          <th className="border border-slate-500">Position</th>
          <th className="border border-slate-500">Department</th>
          <th className="border border-slate-500">Affiliation</th>
        </tr>
      </thead>
      <tbody>
        {marks.map((mark) => (
          <tr key={mark.id}>
            <td className="border border-slate-500">{mark.id}</td>
            <td className="border border-slate-500 text-solgov-yellow-dark hover:text-solgov-yellow">
              <Link href={`/REDACTED/marks/${mark.id}`}>
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
  );
}

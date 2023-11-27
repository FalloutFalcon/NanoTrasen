import { sql } from "@vercel/postgres";
import { QueryResultRow } from "@vercel/postgres";
import Link from "next/link"; 

export default async function Page() {
  //WTF why does it only work if i have this WHERE statment!! THATS NOT HOW FUCKIN ITS MEANT TO WORK!!!!!!!!!!!
  const marks = await sql`SELECT * FROM Marks WHERE name != 'aaaa'`;

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
        {marks.rows && marks.rows.map((mark: QueryResultRow) => (
          <tr key={mark.id}>
            <td className="border border-slate-500">{mark.id}</td>
            <td className="border border-slate-500 text-solgov-yellow-dark hover:text-solgov-yellow">
              <Link href={`/REDACTED/viewmark/${mark.id}`}>
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

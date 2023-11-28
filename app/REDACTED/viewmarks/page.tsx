import { sql } from "@vercel/postgres";
import { QueryResultRow } from "@vercel/postgres";
import Link from "next/link";

export const revalidate = 0;

export default async function TablePage() {
  //WTF why does it only work if i have this WHERE statment!! THATS NOT HOW FUCKIN ITS MEANT TO WORK!!!!!!!!!!!
  const marks = await sql`SELECT * FROM Marks WHERE name != 'aaaa'`;

  return (
    <main className="flex flex-col items-center text-center p-5 w-4/5 m-auto">
      <table className="border border-slate-500 w-1/2 md:w-4/5">
        <thead>
          <tr className="flex flex-row">
            <th className="border border-slate-500 w-1/5">ID</th>
            <th className="border border-slate-500 w-1/5">Name</th>
            <th className="border border-slate-500 w-1/5">Position</th>
            <th className="border border-slate-500 w-1/5">Department</th>
            <th className="border border-slate-500 w-1/5">Affiliation</th>
          </tr>
        </thead>
        <tbody>
          {marks.rows &&
            marks.rows.map((mark: QueryResultRow) => (
              <tr key={mark.id} className="break-all md:break-normal flex flex-row">
                <td className="border border-slate-500 w-1/5">{mark.id}</td>
                <td className="border border-slate-500 w-1/5 break-normal text-solgov-yellow-dark hover:text-solgov-yellow">
                  <Link href={`/REDACTED/marks/${mark.id}`}>
                    <p>{mark.name}</p>
                  </Link>
                </td>
                <td className="border border-slate-500 w-1/5 text-xs md:text-base">{mark.position}</td>
                <td className="border border-slate-500 w-1/5 text-xs md:text-base">{mark.department}</td>
                <td className="border border-slate-500 w-1/5 text-xs md:text-base">{mark.affiliation}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </main>
  );
}

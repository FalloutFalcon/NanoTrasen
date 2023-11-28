import { sql } from "@vercel/postgres";
import { QueryResultRow } from "@vercel/postgres";
import Link from "next/link";

export const revalidate = 0;

async function fetchMarksFromDatabase() {
  const marks = await sql`SELECT * FROM Marks WHERE name != 'aaaa'`;
  return marks;
}

function renderTableRow(mark: QueryResultRow) {
  let reusedStyle = "border border-slate-500 line-clamp-1 md:w-1/5";
  return (
    <tr key={mark.id} className="break-all md:break-normal flex flex-row">
      <td className={`${reusedStyle} w-1/6`}>
        {mark.id}
      </td>
      <td className={`${reusedStyle} w-1/2 md:w-1/5 break-normal text-solgov-yellow-dark hover:text-solgov-yellow`}>
        <Link href={`/REDACTED/marks/${mark.id}`}>
          <p>{mark.name}</p>
        </Link>
      </td>
      <td className={`${reusedStyle} hidden md:w-1/5 md:table-cell`}>
        {mark.position}
      </td>
      <td className={`${reusedStyle} hidden md:w-1/5 md:table-cell`}>
        {mark.department}
      </td>
      <td className={`${reusedStyle} w-1/3 md:w-1/5 text-xs md:text-base`}>
        {mark.affiliation}
      </td>
    </tr>
  );
}

export default async function TablePage() {
  const marks = await fetchMarksFromDatabase();

  return (
    <main className="flex flex-col items-center text-center p-5 w-4/5 m-auto">
      <table className="border border-slate-500 w-screen md:w-4/5">
        <thead>
          <tr className="flex flex-row">
            <th className="border border-slate-500 w-1/6 md:w-1/5">ID</th>
            <th className="border border-slate-500 w-1/2 md:w-1/5">Name</th>
            <th className="border border-slate-500 hidden md:w-1/5 md:table-cell">
              Position
            </th>
            <th className="border border-slate-500 hidden md:w-1/5 md:table-cell">
              Department
            </th>
            <th className="border border-slate-500 w-1/3 md:w-1/5">
              Affiliation
            </th>
          </tr>
        </thead>
        <tbody>
          {marks.rows &&
            marks.rows.map((mark: QueryResultRow) => renderTableRow(mark))}
        </tbody>
      </table>
    </main>
  );
}

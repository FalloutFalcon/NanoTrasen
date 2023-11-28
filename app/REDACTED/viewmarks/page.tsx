import { sql } from "@vercel/postgres";
import { QueryResultRow } from "@vercel/postgres";
import Link from "next/link";

export const revalidate = 0;

async function fetchMarksFromDatabase() {
  const marks = await sql`SELECT * FROM Marks WHERE name != 'aaaa'`;
  return marks;
}

function TableCell({
  id,
  type,
  content,
  style,
}: {
  id: number;
  type: string;
  content: string;
  style: string;
}) {
  if (type === "name") {
    return (
      <td className={style}>
        <Link href={`/REDACTED/marks/${id}`}>{content}</Link>
      </td>
    );
  }
  return <td className={style}>{content}</td>;
}

function TableRow({ mark }: { mark: QueryResultRow }) {
  const reusedStyle = "border border-slate-500 line-clamp-1 md:w-1/5";
  return (
    <tr key={mark.id} className="break-all md:break-normal flex flex-row">
      <TableCell
        id={mark.id}
        type="id"
        content={mark.id}
        style={`${reusedStyle} w-1/6`}
      />
      <TableCell
        id={mark.id}
        type="name"
        content={mark.name}
        style={`${reusedStyle} w-1/2 break-normal text-solgov-yellow-dark hover:text-solgov-yellow`}
      />
      <TableCell
        id={mark.id}
        type="position"
        content={mark.position}
        style={`${reusedStyle} hidden md:table-cell`}
      />
      <TableCell
        id={mark.id}
        type="department"
        content={mark.department}
        style={`${reusedStyle} hidden md:table-cell`}
      />
      <TableCell
        id={mark.id}
        type="affiliation"
        content={mark.affiliation}
        style={`${reusedStyle} w-1/3 text-xs md:text-base`}
      />
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
            marks.rows.map((mark: QueryResultRow) => (
              <TableRow key={mark.id} mark={mark} />
            ))}
        </tbody>
      </table>
    </main>
  );
}

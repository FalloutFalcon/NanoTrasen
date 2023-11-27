"use client";
import Link from "next/link";

import FactionComponent from "./factions";
import TableComponent from "./newTable";

export default function RecordsPage() {
  return (
    <main className="flex flex-col items-center text-center p-5 w-4/5 m-auto">
      <h2 className="text-lg">Database I hope</h2>
      <div className="flex flex-row mb-4">
        <Link href={`/REDACTED/addmark`}>
          <p className="border border-slate-500 text-solgov-yellow-dark hover:text-solgov-yellow p-2">
            Add Mark
          </p>
        </Link>
        <Link href={`/REDACTED/viewmarks`}>
          <p className="border border-slate-500 text-solgov-yellow-dark hover:text-solgov-yellow p-2">
            View Marks
          </p>
        </Link>
      </div>
      <FactionComponent />
      <TableComponent/>
    </main>
  );
}

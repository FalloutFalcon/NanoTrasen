import axios from "axios";

import Link from "next/link";

import { Relationship, FormattedMarkRelations } from "../../../types";

export default async function markRelationPage({
  params,
}: {
  params: { slug: string };
}) {
  const markSlug = decodeURI(params.slug as string);
  const response = await axios.get("http://localhost:3000/api/sheetdata");
  const data = response.data;
  const markData: FormattedMarkRelations = data[markSlug] || [];

  return (
    <main className="flex flex-col items-center text-center p-5 w-4/5 m-auto">
      <h1>{markSlug}'s Relations</h1>
      <table className="border border-slate-500 w-4/5">
        <thead>
          <tr>
            <th className="border border-slate-500">Name</th>
            <th className="border border-slate-500">My Opinion</th>
            <th className="border border-slate-500">Their Opinion</th>
          </tr>
        </thead>
        <tbody>
          {markData &&
            markData.map((relation: Relationship, index: string) => (
              <tr key={index}>
                <td className="border border-slate-500 text-solgov-yellow-dark hover:text-solgov-yellow">
                  <Link href={`/REDACTED/relation/${relation.character}`}>
                    <p>{relation.character}</p>
                  </Link>
                </td>
                <td className="border border-slate-500">{relation.opinion}</td>
                <td className="border border-slate-500">
                  {data[relation.character]?.find(
                    (markRelationship: Relationship) =>
                      markRelationship.character === markSlug
                  )?.opinion || "N/A"}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </main>
  );
}

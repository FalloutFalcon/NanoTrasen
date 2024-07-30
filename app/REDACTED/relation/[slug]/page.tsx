import Link from "next/link";

import { Relationship, FormattedMarkRelations } from "../../../types";

async function getData() {
  const res = await fetch("https://solgov.vercel.app/api/sheetdata");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function markRelationPage({
  params,
}: {
  params: { slug: string };
}) {
  const markSlug = decodeURI(params.slug as string);
  const data: FormattedMarkRelations = await getData();
  const markData = data[markSlug] || [];

  return (
    <main className="flex flex-col items-center text-center p-5 w-4/5 m-auto">
      <h1>{markSlug}&apos;s Relations</h1>
      <table className="border border-slate-500 w-4/5">
        <thead>
          <tr>
            <th className="border border-slate-500">Name</th>
            <th className="border border-slate-500">My Opinion</th>
            <th className="border border-slate-500">Their Opinion</th>
          </tr>
        </thead>
        <MarkRelationComponent
          markData={markData}
          data={data}
          markSlug={markSlug}
        />
      </table>
    </main>
  );
}

interface ComponentProps {
  markData: Relationship[]; // Array of Relationship
  data: { [key: string]: Relationship[] }; // Dictionary of arrays of Relationship
  markSlug: string;
}

const MarkRelationComponent: React.FC<ComponentProps> = ({
  markData,
  data,
  markSlug,
}) => {
  return (
    <tbody>
      {markData &&
        markData.map((relation: Relationship, index: number) => (
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
                  markRelationship.character === markSlug,
              )?.opinion || "N/A"}
            </td>
          </tr>
        ))}
    </tbody>
  );
};

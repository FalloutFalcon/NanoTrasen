import axios from "axios";
import Link from "next/link";

export default async function markRelationPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug as string;
  const res = await axios.get("http://localhost:3000/api/sheetdata");
  const data = res.data;
  const markSlug = decodeURI(params.slug);
  const markData = data[markSlug] || [];

  // Find opinions of other characters about the current character
  const opinionsAboutCharacter = Object.entries(data).reduce(
    (acc, [key, opinions]) => {
      opinions.forEach((opinion) => {
        if (opinion.character === markSlug) {
          acc.push({ character: key, opinion: opinion.opinion });
        }
      });
      return acc;
    },
    [],
  );
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
            markData.map((relation, index) => (
              <tr key={index}>
                <td className="border border-slate-500 text-solgov-yellow-dark hover:text-solgov-yellow">
                  <Link href={`/REDACTED/relation/${relation.character}`}>
                    <p>{relation.character}</p>
                  </Link>
                </td>
                <td className="border border-slate-500">{relation.opinion}</td>
                <td className="border border-slate-500">
                  {data[relation.character]?.find(
                    (op) => op.character === markSlug,
                  )?.opinion || "N/A"}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </main>
  );
}

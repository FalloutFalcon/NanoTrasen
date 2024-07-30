import Link from "next/link";

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

export default async function RelationsPage() {
  const data = await getData();
  const marks = Object.keys(data);

  return (
    <div>
      <h1>Mark List</h1>
      <ul>
        {marks.map((character, index) => (
          <li key={index}>
            <Link
              className="text-solgov-yellow-dark hover:text-solgov-yellow"
              href={`/REDACTED/relation/${character}`}
            >
              {character}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

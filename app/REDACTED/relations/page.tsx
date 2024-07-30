import { Metadata } from "next";

import Link from "next/link";

export const metadata: Metadata = {
  title: "REDACTED",
  description: "MARK RELATION DATA",
};

export const revalidate = 100;

async function getData() {
  const res = await fetch("https://solgov.vercel.app/api/sheetdata");

  if (!res.ok) {
    throw new Error("Failed to fetch mark relations");
  }

  return res.json();
}

export default async function RelationsPage() {
  const data = await getData();

  const sortedCharacterNames = Object.keys(data).sort();
  return (
    <div>
      <h1>Mark List</h1>
      <ul>
        {sortedCharacterNames.map((character, index) => (
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

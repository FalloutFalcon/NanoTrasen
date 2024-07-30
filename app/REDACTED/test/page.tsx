import axios from "axios";
import Link from "next/link";

export default async function TestPage() {
  const res = await axios.get("https://solgov.vercel.app/api/sheetdata");
  const data = res.data;
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

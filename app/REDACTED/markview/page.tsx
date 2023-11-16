import { sql } from "@vercel/postgres";

async function getDataFromDatabase() {
  try {
    const result = await sql`SELECT * FROM Marks`;
    return result.rows; // Assuming the rows contain the data you want
  } catch (error) {
    console.error("Error fetching data from database:", error);
    throw new Error("Failed to fetch data from database");
  }
}

export default async function Page() {
  const data = await getDataFromDatabase();

  return (
    <main>
      <table>
        <thead>
          <tr>
            {/* Assuming keys of the first row represent column headers */}
            {Object.keys(data[0]).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, idx) => (
                <td key={idx}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

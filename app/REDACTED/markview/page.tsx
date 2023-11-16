import { sql } from "@vercel/postgres";

async function getDataFromDatabase() {
    try {
      const result = await sql`SELECT * FROM Marks`;
      return result.rows; // Assuming the rows contain the data you want
    } catch (error) {
      console.error('Error fetching data from database:', error);
      throw new Error('Failed to fetch data from database');
    }
  }

export default async function Page() {
  const data = await getDataFromDatabase();

  return <main></main>;
}

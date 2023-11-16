import { sql } from "@vercel/postgres";
export const dynamic = "force-dynamic";

interface Mark {
  id: number;
  name: string;
  affiliation: string;
  currentShip: string;
  department: string;
  position: string;
  age: number;
  dob: string;
  species: string;
  gender: string;
  relationship: string;
  height: string;
  weight: string;
  description: string;
  ooc: string;
}

interface MarksProps {
  marks: Mark[];
}

export default async function Marks({ marks }: MarksProps) {
  marks = await getMarks();
  return (
    <div>
      <h1>Marks Database</h1>
      <ul>
        {marks.map((mark) => (
          <li key={mark.id}>
            <h3>{mark.name}</h3>
            <p>Affiliation: {mark.affiliation}</p>
            <p>Current Ship: {mark.currentShip}</p>
            <p>Department: {mark.department}</p>
            <p>Position: {mark.position}</p>
            <p>Age: {mark.age}</p>
            <p>Date of Birth: {mark.dob}</p>
            <p>Species: {mark.species}</p>
            <p>Gender: {mark.gender}</p>
            <p>Relationship: {mark.relationship}</p>
            <p>Height: {mark.height}</p>
            <p>Weight: {mark.weight}</p>
            <p>Description: {mark.description}</p>
            <p>OOC: {mark.ooc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getMarks() {
  let marks: Mark[] = [];

  try {
    // Fetch data from the Marks table
    const result = await sql`SELECT * FROM Marks`;

    // Map the rows to the Mark type
    marks = result.rows.map((row: any) => ({
      id: row.id,
      name: row.name,
      affiliation: row.affiliation,
      currentShip: row.currentShip,
      department: row.department,
      position: row.position,
      age: row.age,
      dob: row.dob,
      species: row.species,
      gender: row.gender,
      relationship: row.relationship,
      height: row.height,
      weight: row.weight,
      description: row.description,
      ooc: row.ooc,
    }));
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return { props: { marks } };
}

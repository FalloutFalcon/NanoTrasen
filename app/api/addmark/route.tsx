import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const {
      id,
      name,
      affiliation,
      currentship,
      department,
      position,
      age,
      dob,
      species,
      gender,
      relationship,
      height,
      weight,
      description,
      ooc,
    } = await request.json();

    if (!name) {
      throw new Error("They need a name");
    }

    let marks;
    if (id) {
      // Check if the ID exists in the database
      const existingMark = await sql`SELECT * FROM Marks WHERE id = ${id};`;
      if (existingMark.rows.length > 0) {
        throw new Error("Mark already exists");
      } else {
        // If the ID doesn't exist, insert a new entry
        await sql`
          INSERT INTO Marks (id, name, affiliation, currentship, department, position, age, dob, species, gender, relationship, height, weight, description, ooc)
          VALUES (${id}, ${name}, ${affiliation}, ${currentship}, ${department}, ${position}, ${age}, ${dob}, ${species}, ${gender}, ${relationship}, ${height}, ${weight}, ${description}, ${ooc});
        `;
      }
    } else {
      // Handle if no ID is provided
      throw new Error("No ID provided");
    }

    marks = await sql`SELECT * FROM Marks;`;

    return NextResponse.json({ marks }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

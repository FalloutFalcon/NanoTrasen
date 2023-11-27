import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, affiliation, currentShip, department, position, age, dob, species, gender, relationship, height, weight, description, ooc } = await request.json();

    if (!name) {
      throw new Error('They need a name');
    }

    await sql`
      INSERT INTO Blogs (name, affiliation, currentShip, department, position, age, dob, species, gender, relationship, height, weight, description, ooc)
      VALUES (${name}, ${affiliation}, ${currentShip}, ${department}, ${position}, ${age}, ${dob}, ${species}, ${gender}, ${relationship}, ${height}, ${weight}, ${description}, ${ooc});
    `;

    const marks = await sql`SELECT * FROM Marks;`;

    return NextResponse.json({ marks }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

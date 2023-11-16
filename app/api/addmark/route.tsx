import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const {
    name,
    affiliation,
    currentShip,
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
  } = Object.fromEntries(searchParams);

  try {
    if (!name || !affiliation) throw new Error('Name and affiliation are required');
    
    // Perform the INSERT operation including all fields
    await sql`
      INSERT INTO Marks (Name, Affiliation, CurrentShip, Department, Position, Age, Dob, Species, Gender, Relationship, Height, Weight, Description, Ooc)
      VALUES (${name}, ${affiliation}, ${currentShip}, ${department}, ${position}, ${age}, ${dob}, ${species}, ${gender}, ${relationship}, ${height}, ${weight}, ${description}, ${ooc});
    `;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  try {
    // Fetch all entries in the Marks table after insertion
    const marks = await sql`SELECT * FROM Marks;`;
    return NextResponse.json({ marks }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

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

    if (!id) {
      throw new Error("an ID is required for editing");
    }

    await sql`
        UPDATE Marks
        SET                         
        name = ${name},
        affiliation = ${affiliation},
        currentship = ${currentship},
        department = ${department},
        position = ${position},
        age = ${age},
        dob = ${dob},
        species = ${species},
        gender = ${gender},
        relationship = ${relationship},
        height = ${height},
        weight = ${weight},
        description = ${description},
        ooc = ${ooc}
        WHERE id = [id];
    `;

    const marks = await sql`SELECT * FROM Marks;`;

    return NextResponse.json({ marks }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

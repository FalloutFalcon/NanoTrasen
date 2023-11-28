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

    let mark;
    if (id) {
      // Check if the ID exists in the database
      const existingMark = await sql`SELECT * FROM Marks WHERE id = ${id};`;
      if (existingMark.rows.length > 0) {
        // If the ID exists, update the corresponding entry
        await sql`
          UPDATE Marks
          SET name = ${name},
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
          WHERE id = ${id};
        `;
      } else {
        throw new Error("ID does not corispond to a Mark");
      }
    } else {
      // Handle if no ID is provided
      throw new Error("No ID provided");
    }

    mark = await sql`SELECT * FROM Marks WHERE id = ${id};`;

    return NextResponse.json({ mark }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

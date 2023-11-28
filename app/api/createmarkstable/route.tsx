import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const result = await sql`
      CREATE TABLE Marks (
        id SERIAL PRIMARY KEY,
        name varchar(255),
        affiliation varchar(255),
        currentship varchar(255),
        department varchar(255),
        position varchar(255),
        age varchar(255),
        dob varchar(255),
        species varchar(255),
        gender varchar(255),
        relationship varchar(255),
        height varchar(255),
        weight varchar(255),
        description text,
        ooc varchar(255)
      );
    `;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

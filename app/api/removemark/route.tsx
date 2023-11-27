import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();

    if (!id) {
      throw new Error("ID is required for deletion");
    }

    await sql`DELETE FROM Marks WHERE id = ${id};`;

    const marks = await sql`SELECT * FROM Marks;`;

    return NextResponse.json({ marks }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

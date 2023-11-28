import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const { searchParams } = new URL(req.url as string);
  const id = searchParams.get("id");
  if (req.method !== "GET") {
    return NextResponse.json({ message: "Invalid method" }, { status: 405 });
  }

  try {
    if (!id || Array.isArray(id)) {
      throw new Error("Invalid ID");
    }

    const mark = await sql`SELECT * FROM Marks WHERE id = ${id};`;

    if (mark.rows.length === 0) {
      return NextResponse.json({ message: "Mark not found" }, { status: 404 });
    }

    return NextResponse.json(mark.rows[0], { status: 200 }); // Returning the fetched mark
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch mark entry" },
      { status: 500 },
    );
  }
}

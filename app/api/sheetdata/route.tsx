import { NextRequest, NextResponse } from "next/server";

import { FormattedMarkRelations } from "../../types";

const apiKey = "AIzaSyBoNUkHydnkhbi9utB2si8Iv7RBsKOQsm8";
const spreadsheetId = "1hno1lb8Qr3QIGe_PmqRhRsIDmRqVkVGy20CcfR9IVUU";
const range = "Manifest!A4";

const valuesUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const valuesResponse = await fetch(valuesUrl);

    if (!valuesResponse.ok) {
      throw new Error("Network response was not ok");
    }
    const valuesData = await valuesResponse.json();
    const values = valuesData.values;

    const characters = values[0].slice(1); // Extract character names from the first row
    const formattedData: FormattedMarkRelations = {};

    for (let i = 1; i < values.length; i++) {
      const character1 = values[i][0];
      formattedData[character1] = [];

      for (let j = 1; j < values[i].length; j++) {
        const character2 = characters[j - 1];
        const opinion = values[i][j];

        if (opinion) {
          formattedData[character1].push({ character: character2, opinion });
        }
      }
    }

    // Sort each array of relationships
    for (const key in formattedData) {
      if (formattedData[key]) {
        formattedData[key].sort((a, b) =>
          a.character.localeCompare(b.character)
        );
      }
    }

    return NextResponse.json(formattedData);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
  }
}

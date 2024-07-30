import { NextResponse } from "next/server";
import axios from "axios";

import { FormattedMarkRelations } from "../../types";

const apiKey = "AIzaSyBoNUkHydnkhbi9utB2si8Iv7RBsKOQsm8";
const spreadsheetId = "19NHUy98-C7Z6Cz97u9F2XpgcbOd_QxBtn2SGMS0E-iE";
const range = "Manifest!A4:BQ72"; // Adjust range as needed

//const sheetsUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}?includeGridData=true&ranges=${range}&key=${apiKey}`;
const valuesUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;

export async function GET() {
  try {
    const valuesResponse = await axios.get(valuesUrl);
    //const formattingResponse = await axios.get(sheetsUrl);

    const values = valuesResponse.data.values;
    //const sheetsData = formattingResponse.data.sheets?.[0]?.data?.[0];

    //console.log('Formatting Response:', sheetsData.rowData[1].values); // Log the response

    // Extract cell formatting

    // Transform the data
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

    return NextResponse.json(formattedData);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
  }
}
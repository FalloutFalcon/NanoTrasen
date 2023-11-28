import { Metadata } from "next";
import { sql } from "@vercel/postgres";

export const metadata: Metadata = {
  title: "REDACTED",
  description: "REDACTED",
};

export const revalidate = 0;

// Function to convert height from centimeters to feet and inches
const convertHeightToImperial = (heightInCm: number): string => {
  const totalInches = heightInCm / 2.54;
  const feet = Math.floor(totalInches / 12);
  const inches = Math.floor(totalInches % 12);
  return `${feet}' ${inches}"`;
};

// Function to convert weight from kilograms to pounds
const convertWeightToImperial = (weightInKg: number): string => {
  const pounds = Math.floor(weightInKg * 2.20462);
  return `${pounds} lbs`;
};

export default async function markDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const markId = parseInt(params.slug);
  const marks = await sql`SELECT * FROM Marks WHERE id = ${markId}`;
  const mark = marks.rows.find((e) => e.id === parseInt(params.slug));

  if (!mark) {
    return (
      <main className="p-5 flex-col w-4/5 m-auto">
        <h3 className="text-lg">mark ID: {params.slug}</h3>
        <h3 className="text-lg">mark Not Found</h3>
      </main>
    );
  }

  // Convert height and weight to freedom units
  const heightImperial = convertHeightToImperial(parseInt(mark.height));
  const weightImperial = convertWeightToImperial(parseInt(mark.weight));

  const markDetails = [
    { label: "Name", value: mark.name },
    { label: "Faction Affiliation", value: mark.affiliation },
    {
      label: "Vessel, Deparment, & Title",
      value: `${mark.currentShip}, ${mark.department}, ${mark.position}`,
    },
    {
      label: "Age & Date of birth",
      value: `${mark.age}, ${mark.dob}`,
    },
    { label: "Species", value: mark.species },
    {
      label: "Gender & Relationship Status",
      value: `${mark.gender}, ${mark.relationship}`,
    },
    {
      label: "Height & Weight",
      value: `${mark.height} (${heightImperial}), ${mark.weight} (${weightImperial})`,
    },
    { label: "Details", value: mark.description },
  ];

  return (
    <main className="p-5 flex-col w-4/5 m-auto">
      <h3 className="text-lg">mark ID: {params.slug}</h3>
      {markDetails.map((detail, index) => (
        <div className="pt-2 mt-2 border-t-2" key={index}>
          <h2 className="text-lg font-semibold">{detail.label}</h2>
          {detail.label === "Details" ? (
            <div
              className="font-light"
              dangerouslySetInnerHTML={{ __html: detail.value }}
            />
          ) : (
            <p className="font-light">{detail.value}</p>
          )}
        </div>
      ))}
      <footer>
        <p className="p-10 text-sm font-light italic">{mark.ooc}</p>
      </footer>
    </main>
  );
}

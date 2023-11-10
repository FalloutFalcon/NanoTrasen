import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'REDACTED',
  description: 'REDACTED',
};

import { getMarksData } from "../markData";

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


export default function markDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const marks = getMarksData();
  const mark = marks.find((e) => e.id === parseInt(params.slug));

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
    { label: "Title", value: mark.position },
    {
      label: "Age, Gender, Species, Height & Weight",
      value: `${mark.age} years, ${mark.gender}, ${mark.species}, ${mark.height} (${heightImperial}), ${mark.weight} (${weightImperial})`,
    },
    { label: "Details", value: mark.description },
  ];

  return (
    <main className="p-5 flex-col w-4/5 m-auto">
      <h3 className="text-lg">mark ID: {params.slug}</h3>
      {markDetails.map((detail, index) => (
        <div className="pt-5 mt-5 border-t-2" key={index}>
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
    </main>
  );
}
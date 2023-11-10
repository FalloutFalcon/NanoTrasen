import { getEmployeesData } from "../employeeData";

// Function to convert height from centimeters to feet and inches
const convertHeightToImperial = (heightInCm) => {
  const totalInches = heightInCm / 2.54;
  const feet = Math.floor(totalInches / 12);
  const inches = Math.floor(totalInches % 12);
  return `${feet}' ${inches}"`;
};

// Function to convert weight from kilograms to pounds
const convertWeightToImperial = (weightInKg) => {
  const pounds = Math.floor(weightInKg * 2.20462);
  return `${pounds} lbs`;
};

export default function EmployeeDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const employees = getEmployeesData();
  const employee = employees.find((e) => e.id === parseInt(params.slug));

  if (!employee) {
    return (
      <main className="p-5 flex-col w-4/5 m-auto">
        <h3 className="text-lg">Employee ID: {params.slug}</h3>
        <h3 className="text-lg">Employee Not Found</h3>
      </main>
    );
  }

  // Convert height and weight to freedom units
  const heightImperial = convertHeightToImperial(parseInt(employee.height));
  const weightImperial = convertWeightToImperial(parseInt(employee.weight));

  const employeeDetails = [
    { label: "Name", value: employee.name },
    { label: "Faction Affiliation", value: employee.affiliation },
    { label: "Title", value: employee.position },
    {
      label: "Age, Gender, Species, Height & Weight",
      value: `${employee.age} years, ${employee.gender}, ${employee.species}, ${employee.height} (${heightImperial}), ${employee.weight} (${weightImperial})`,
    },
    { label: "Details", value: employee.description },
  ];

  return (
    <main className="p-5 flex-col w-4/5 m-auto">
      <h3 className="text-lg">Employee ID: {params.slug}</h3>
      {employeeDetails.map((detail, index) => (
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

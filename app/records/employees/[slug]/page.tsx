import { getEmployeesData } from "../../employeeData";

export default function EmployeeDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const employees = getEmployeesData();
  const employee = employees.find((e) => e.id === parseInt(params.slug));

  if (!employee) {
    return (
      <main>
        <h3>Employee Not Found</h3>
      </main>
    );
  }

  const employeeDetails = [
    { label: "Name", value: employee.name },
    { label: "Faction Affiliation", value: employee.affiliation },
    { label: "Title", value: employee.position },
    {
      label: "Age, Gender, Species",
      value: `${employee.age}, ${employee.gender}, ${employee.species}`,
    },
    {
      label: "Height & Weight",
      value: `${employee.height}, ${employee.weight}`,
    },
    { label: "Summary", value: employee.description },
  ];

  return (
    <main className="p-5 flex-col w-4/5 m-auto">
      <h3 className="text-lg">Human ID: {params.slug}</h3>
      {employeeDetails.map((detail, index) => (
        <div className="pt-5 mt-5 border-t-2" key={index}>
          <h2 className="text-lg font-semibold">{detail.label}</h2>
          {detail.label === "Summary" ? (
            <p
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

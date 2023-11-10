export function getEmployeesData() {
  const employees = [
    {
      // put "Unknown" for any fields you don't know or have not decided on
      id: 123456789, // 9 digits
      name: "(not lore accurate c:) Baxter Baxter",
      department: "Engineering",
      position: "Engineer",
      affiliation: "Nanotransen",
      age: 31,
      // Male Female Non-binary anything else
      gender: "Female",
      // use the name listed on the website
      species: "Human",
      // both of these have conversion to freedom units in site
      height: "160 cm",
      weight: "48.5 kg",
      // support any html and you can use tailwind classes if you know them
      // keep in mind this is a description of the character from a solgov spy agency
      description: `
      <p> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      </p>
      <p>
        Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.
      <p/>
      `,
    },
    {
      id: 987654321,
      name: "(temp) John Doe",
      department: "Medical",
      position: "Doctor",
      affiliation: "Nanotransen",
      age: 28,
      gender: "Male",
      species: "Human",
      height: "178 cm",
      weight: "72.5 kg",
      description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.
      `,
    },
    {
      id: 456789123,
      name: "(temp) Jane Smith",
      department: "Security",
      position: "Security Officer",
      affiliation: "Nanotransen",
      age: 25,
      gender: "Female",
      species: "Human",
      height: "173 cm",
      weight: "68 kg",
      description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.
      `,
    },
    {
      id: 135792468,
      name: "(temp) Samuel Jenkins",
      department: "Research",
      position: "Scientist",
      affiliation: "Syndicate",
      age: 30,
      gender: "Male",
      species: "Human",
      height: "183 cm",
      weight: "81.5 kg",
      description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.
      `,
    },
    {
      id: 987123456,
      name: "(temp) Maria Rodriguez",
      department: "Medical",
      position: "Doctor",
      affiliation: "Solgov",
      age: 27,
      gender: "Female",
      species: "Human",
      height: "165 cm",
      weight: "63.5 kg",
      description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.
      `,
    },
    {
      id: 369258147,
      name: "(temp) Max Turner",
      department: "Security",
      position: "Head of Security",
      affiliation: "SRM",
      age: 35,
      gender: "Male",
      species: "Human",
      height: "188 cm",
      weight: "90.5 kg",
      description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.
      `,
    },
    {
      id: 246813579,
      name: "(temp) Luna Moonshadow",
      department: "Research",
      position: "Xenobiologist",
      affiliation: "Nanotransen",
      age: 29,
      gender: "Non-binary",
      species: "Moff",
      height: "175 cm",
      weight: "72.5 kg",
      description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.
      `,
    },
  ];

  return employees;
}

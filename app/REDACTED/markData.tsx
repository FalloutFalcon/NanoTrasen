export function getMarksData() {
  const marks = [
    {
      // put "Unknown" for any fields you don't know or have not decided on
      id: 692697957, // 9 digits https://numbergenerator.org/random-9-digit-number-generator
      name: "Baxter Baxter",
      // Indepenant CMM Inteq Nanotrasen SRM SolGov Syndicate
      affiliation: "SRM",
      // Custom names instead of maps prefered
      currentShip: "Unknown",
      department: "Command",
      position: "Montange",
      age: 31,
      dob: "Unknown",
      // Elzuose Human IPC Kepori Moth Phorid Rachnid Sarathi Vox
      species: "Human",
      // Male Female Non-binary anything else
      gender: "Female",
      // Single Married Divorced Widowed
      relationship: "Single",
      // both of these have conversion to freedom units in site
      height: "165 cm",
      weight: "49.5 kg",
      // support any html and you can use tailwind classes if you know them
      // keep in mind this is a description of the character from a solgov spy agency
      description: `
      <p>
        Mark often engages in the trade of an SRM export known as "trickwines." These trickwines are often exchanged for firearms. They display a high level of devotion to the SRM and are often described as a "fanatic."
      </p>
      <p>
        They seem to have served in some sort of war as they have a large number of scars on their body. They also seem to have a considerable amount of combat experience as they are proficient with firearms.
      </p>
      <p>
        Their speech is difficult to understand due to a large amount of damage to their vocal cords, resulting in a coarse voice. They claim to have received it from a "gnarly fight with a xeno."
      </p>
      `,
      // anything you want people to know but not ic
      ooc: "_fallcon",
    },
    {
      id: 736695831,
      name: "Gabriel Moon",
      affiliation: "Independent",
      currentShip: "Unknown",
      department: "Engineering",
      position: "Ship Engineer/Salvage Engineer",
      age: "22",
      dob: "Unknown",
      species: "Human",
      gender: "Male",
      relationship: "Single",
      height: "177 cm",
      weight: "54.5 kg",
      description: `
      <p>
      	Observed in the renovation and reconstruction of ships. This activity ranges from kitchen additions within ships to rather dangerous jobs such as converting airlocks into crew quarters. 
	      Always seen with a pair of red glasses, unknown as to their value towards the owner. Their emotional behavior is rather unhinged, focusing more on having fun in the moment following danger
	      rather than avoiding obvious risks.
      </p>
      `,
      ooc: "IdiotMrBones",
    },
    {
      id: 111111111,
      name: "Unknown",
      affiliation: "Unknown",
      currentShip: "Unknown",
      department: "Unknown",
      position: "Unknown",
      age: "Unknown",
      dob: "Unknown",
      species: "Unknown",
      gender: "Unknown",
      relationship: "Unknown",
      height: "Unknown",
      weight: "Unknown",
      description: `
      Unknown
      `,
      ooc: "",
    },
  ];
  return marks;
}

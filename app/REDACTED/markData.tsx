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
    /*
    {
      id: 369258147,
      name: "Gordan Campbell",
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
      name: "Lepid Sphingidae",
      department: "Research",
      position: "Xenobiologist",
      affiliation: "Nanotransen",
      age: 29,
      gender: "Male",
      species: "Moff",
      height: "175 cm",
      weight: "72.5 kg",
      description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.
      `,
    },
    */
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
    {
      id: 222222222,
      name: "Jane Doe",
      affiliation: "Inteq",
      currentShip: "Unknown",
      department: "Engineering",
      position: "Engineer",
      age: 28,
      dob: "1995-04-15",
      species: "Human",
      gender: "Non-binary",
      relationship: "Married",
      height: "172 cm",
      weight: "65 kg",
      description: `
        <p>
          Jane Doe is a skilled engineer working in the Inteq faction. They have a passion for robotics and have contributed significantly to various engineering projects.
        </p>
        <p>
          Despite their reserved nature, Jane is known for their dedication to their work and strong problem-solving skills. They prefer to keep a low profile but are highly respected within the engineering community.
        </p>
      `,
      ooc: "not a real guy"
    },
    {
      id: 333333333,
      name: "John Doe",
      affiliation: "SolGov",
      currentShip: "ISV Horizon",
      department: "Science",
      position: "Biologist",
      age: 35,
      dob: "1988-09-22",
      species: "Human",
      gender: "Male",
      relationship: "Divorced",
      height: "180 cm",
      weight: "75 kg",
      description: `
        <p>
          Alex Smith, a seasoned biologist in the SolGov faction, specializes in xenobiology. They have conducted extensive research on various alien species, contributing valuable insights to SolGov's scientific community.
        </p>
        <p>
          Despite the challenges of their profession, Alex remains dedicated to advancing scientific knowledge and understanding the complexities of extraterrestrial life.
        </p>
      `,
      ooc: "not a real guy"
    },
    {
      id: 444444444,
      name: "Tim Doe",
      affiliation: "CMM",
      currentShip: "Unknown",
      department: "Security",
      position: "Guard",
      age: 30,
      dob: "1992-11-08",
      species: "Human",
      gender: "Male",
      relationship: "Single",
      height: "175 cm",
      weight: "80 kg",
      description: `
        <p>
          John Doe is a vigilant security guard working for the CMM faction. Known for their keen observation skills and dedication to maintaining order, John is often assigned to high-security areas.
        </p>
        <p>
          Despite their stoic appearance, John is friendly and approachable, always ready to lend a helping hand to colleagues in need.
        </p>
      `,
      ooc: "notarealguy"
    },
    {
      id: 555555555,
      name: "Alice Doe",
      affiliation: "Syndicate",
      currentShip: "Rogue Vessel",
      department: "Espionage",
      position: "Infiltrator",
      age: 27,
      dob: "1996-05-20",
      species: "Human",
      gender: "Female",
      relationship: "Unknown",
      height: "162 cm",
      weight: "55 kg",
      description: `
        <p>
          Alice Doe operates as an infiltrator for the secretive Syndicate faction. Specializing in espionage and covert operations, Alice is known for her ability to gather sensitive information without leaving a trace.
        </p>
        <p>
          Always adapting to new challenges, Alice is a master of disguise and is capable of blending into any environment.
        </p>
      `,
      ooc: "not a real guy"
    },
  ];

  return marks;
}

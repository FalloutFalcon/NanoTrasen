"use client";
import { useState } from "react";
import { NextPage } from "next";

const AddMarkPage: NextPage = () => {
  const [formData, setFormData] = useState({
    name: "Baxter Baxter",
    affiliation: "SRM",
    currentShip: "Unknown",
    department: "Command",
    position: "Montange",
    age: "31",
    dob: "Unknown",
    species: "Human",
    gender: "Female",
    relationship: "Single",
    height: "165 cm",
    weight: "49.5 kg",
    description: `<p>
    Mark often engages in the trade of an SRM export known as "trickwines." These trickwines are often exchanged for firearms. They display a high level of devotion to the SRM and are often described as a "fanatic."
  </p>
  <p>
    They seem to have served in some sort of war as they have a large number of scars on their body. They also seem to have a considerable amount of combat experience as they are proficient with firearms.
  </p>
  <p>
    Their speech is difficult to understand due to a large amount of damage to their vocal cords, resulting in a coarse voice. They claim to have received it from a "gnarly fight with a xeno."
  </p>`,
    ooc: "_fallcon",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/addmark", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit data");
      }

      alert("Blog entry submitted successfully!");
      // Reset form after successful submission
      setFormData({
        name: "",
        affiliation: "",
        currentShip: "",
        department: "",
        position: "",
        age: "",
        dob: "",
        species: "",
        gender: "",
        relationship: "",
        height: "",
        weight: "",
        description: "",
        ooc: "",
      });
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit mark entry");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="flex flex-col text-center">
      <h1>Add Mark Entry</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="accent-transparent m-1 text-[gray] p-1"
          />
        </div>
        <label>Affiliation:</label>
        <p>Indepenant CMM Inteq Nanotrasen SRM SolGov Syndicate</p>
        <div>
          <input
            type="text"
            name="affiliation"
            value={formData.affiliation}
            onChange={handleChange}
            className="accent-transparent m-1 text-[gray] p-1"
          />
        </div>
        <label>Current Ship:</label>
        <p>Custom names instead of maps prefered</p>
        <div>
          <input
            type="text"
            name="currentShip"
            value={formData.currentShip}
            onChange={handleChange}
            className="accent-transparent m-1 text-[gray] p-1"
          />
        </div>
        <label>Department:</label>
        <div>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="accent-transparent m-1 text-[gray] p-1"
          />
        </div>
        <label>Position:</label>
        <div>
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="accent-transparent m-1 text-[gray] p-1"
          />
        </div>
        <label>Age:</label>
        <div>
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="accent-transparent m-1 text-[gray] p-1"
          />
        </div>
        <label>Date of Birth:</label>
        <div>
          <input
            type="text"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="accent-transparent m-1 text-[gray] p-1"
          />
        </div>
        <label>Species:</label>
        <p>Elzuose Human IPC Kepori Moth Phorid Rachnid Sarathi Vox</p>
        <div>
          <input
            type="text"
            name="species"
            value={formData.species}
            onChange={handleChange}
            className="accent-transparent m-1 text-[gray] p-1"
          />
        </div>
        <label>Gender:</label>
        <p>Male Female Non-binary anything else</p>
        <div>
          <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="accent-transparent m-1 text-[gray] p-1"
          />
        </div>
        <label>Relationship:</label>
        <p>Single Married Divorced Widowed</p>
        <div>
          <input
            type="text"
            name="relationship"
            value={formData.relationship}
            onChange={handleChange}
            className="accent-transparent m-1 text-[gray] p-1"
          />
        </div>
        <p>Keep the formating like this, both have conversions to freedom units</p>
        <label>Height:</label>
        <div>
          <input
            type="text"
            name="height"
            value={formData.height}
            onChange={handleChange}
            className="accent-transparent m-1 text-[gray] p-1"
          />
        </div>
        <label>Weight:</label>
        <div>
          <input
            type="text"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            className="accent-transparent m-1 text-[gray] p-1"
          />
        </div>
        <label>Description:</label>
        <p>support any html and you can use tailwind classes if you know them. keep in mind this is a description of the character from a solgov spy agency</p>
        <div>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="accent-transparent m-1 text-[gray] p-1"
          />
        </div>
        <p>anything you want people to know but not ic. Also include a discord or ckey</p>
        <label>OOC:</label>
        <div>
          <input
            type="text"
            name="ooc"
            value={formData.ooc}
            onChange={handleChange}
            className="accent-transparent m-1 text-[gray] p-1"
          />
        </div>
        <button
          type="submit"
          className="p-2 w-1/12 text-lg text-[white] border-[#006f95] bg-mnps-blue border-r hover:bg-[#80bfd5] hover:text-[#818181]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddMarkPage;

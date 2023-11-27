"use client";
import { useState } from "react";
import { NextPage } from "next";

const AddMarkPage: NextPage = () => {
  const [formData, setFormData] = useState({
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/addMark", {
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
            className="accent-transparent m-1 p-1"
          />
        </div>
        <label>Affiliation:</label>
        <div>
          <input
            type="text"
            name="affiliation"
            value={formData.affiliation}
            onChange={handleChange}
            className="accent-transparent m-1 p-1"
          />
        </div>
        <label>Date of birth:</label>
        <div>
          <input
            type="text"
            name="birth"
            value={formData.dob}
            onChange={handleChange}
            className="accent-transparent m-1 p-1"
          />
        </div>

        <label>Content:</label>
        <div>
          <textarea
            name="content"
            value={formData.description}
            onChange={handleChange}
            className="accent-transparent m- p-1"
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

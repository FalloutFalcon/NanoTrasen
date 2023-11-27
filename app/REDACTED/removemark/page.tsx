"use client";
import { useState } from "react";
import { NextPage } from "next";

const RemoveMarkPage: NextPage = () => {
  const [id, setId] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/removemark", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) {
        throw new Error("Failed to delete mark");
      }

      alert("Mark deleted successfully!");
      setId("");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to delete mark");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  return (
    <div className="flex flex-col text-center">
      <h1>Remove Mark Entry</h1>
      <form onSubmit={handleSubmit}>
        <label>ID:</label>
        <div>
          <input
            type="text"
            value={id}
            onChange={handleChange}
            className="p-1 border border-slate-500 bg-inherit accent-transparent"
          />
        </div>
        <button
          type="submit"
          className="font-bold m-5 p-1 py-2 px-4 border border-slate-500 text-solgov-yellow-dark hover:text-solgov-yellow"
        >
          Remove
        </button>
      </form>
    </div>
  );
};

export default RemoveMarkPage;

"use client";
import { useState } from "react";
import { NextPage } from "next";

interface FormField {
  label: string;
  name: keyof typeof initialFormData;
  placeholder: string;
  fieldType: string;
}

const initialFormData = {
  id: "",
  name: "",
  affiliation: "",
  currentship: "",
  department: "",
  position: "",
  age: "",
  dob: "",
  species: "",
  gender: "",
  relationship: "",
  height: "",
  weight: "",
  description: ``,
  ooc: "",
};

const formFields: FormField[] = [
  {
    label: "ID:",
    name: "id",
    placeholder: "Enter ID",
    fieldType: "text",
  },
  {
    label: "Name:",
    name: "name",
    placeholder: "Enter name",
    fieldType: "text",
  },
  {
    label: "Affiliation:",
    name: "affiliation",
    placeholder:
      "Enter affiliation (Indepenant CMM Inteq Nanotrasen SRM SolGov Syndicate)",
    fieldType: "text",
  },
  {
    label: "Current Ship:",
    name: "currentship",
    placeholder: "Enter current ship (Custom names instead of maps prefered)",
    fieldType: "text",
  },
  {
    label: "Department:",
    name: "department",
    placeholder: "Enter department",
    fieldType: "text",
  },
  {
    label: "Position:",
    name: "position",
    placeholder: "Enter position",
    fieldType: "text",
  },
  { label: "Age:", name: "age", placeholder: "Enter age", fieldType: "text" },
  {
    label: "Date of Birth:",
    name: "dob",
    placeholder: "Enter date of birth",
    fieldType: "text",
  },
  {
    label: "Species:",
    name: "species",
    placeholder:
      "Enter species (Elzuose Human IPC Kepori Moth Phorid Rachnid Sarathi Vox)",
    fieldType: "text",
  },
  {
    label: "Gender:",
    name: "gender",
    placeholder: "Enter gender (Male Female Non-binary anything else)",
    fieldType: "text",
  },
  {
    label: "Relationship:",
    name: "relationship",
    placeholder: "Enter relationship status (Single Married Divorced Widowed)",
    fieldType: "text",
  },
  {
    label: "Height:",
    name: "height",
    placeholder:
      "Enter height (# cm conversions to freedom units done on site)",
    fieldType: "text",
  },
  {
    label: "Weight:",
    name: "weight",
    placeholder:
      "Enter weight (# kg conversions to freedom units done on site)",
    fieldType: "text",
  },
  {
    label: "Description:",
    name: "description",
    placeholder:
      "Enter description (support any html and you can use tailwind classes if you know them (Message me, _fallcon, and i can teach you how to add cool colors, tables, really anything). keep in mind this is a description of the character from a solgov spy agency)",
    fieldType: "textarea",
  },
  {
    label: "OOC:",
    name: "ooc",
    placeholder:
      "Enter out-of-character info (anything you want people to know but not ic. Also include a discord or ckey)",
    fieldType: "text",
  },
];

export default async function editMarkPage({
  params,
}: {
  params: { slug: string };
}) {

  return (
    <main className="p-5 flex-col w-4/5 m-auto">
      <p>Fix Asap</p>
    </main>
  );
}

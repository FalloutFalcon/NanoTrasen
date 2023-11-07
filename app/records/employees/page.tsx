import React from "react";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";

const EmployeePage = ({ employee }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{employee.name}</h1>
      <p>Position: {employee.position}</p>
      <p>Department: {employee.department}</p>
      <ReactMarkdown source={employee.description} />
    </div>
  );
};

export async function getStaticPaths() {
  // Define the paths for the dynamic routes (e.g., [1], [2], etc.)
  const paths = [{ params: { id: "1" } }, { params: { id: "2" } }]; // Add more as needed

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  // Fetch employee data based on the ID
  const employee = /* Fetch employee data here based on params.id */;

  return {
    props: { employee },
  };
}

export default EmployeePage;

"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import solgovFlag from "/public/static/images/SolGov_flag.png";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    const usernameInput = document.getElementById(
      "username"
    ) as HTMLInputElement | null;
    const passwordInput = document.getElementById(
      "password"
    ) as HTMLInputElement | null;

    if (usernameInput !== null && passwordInput !== null) {
      if (
        usernameInput.value.trim() === "baxter123" &&
        passwordInput.value.trim() === "Ih8syndi"
      ) {
        router.push("/REDACTED");
      } else {
        // Show an error message or handle the case when input fields are empty
      }
    }
  };

  return (
    <main className="flex flex-col items-center justify-center text-center">
      <p className="animate-pulse p-10">Your not meant to be here.....</p>
      <h2>Restricted for Evidenzkompanien officals only</h2>
      <h2>Unauthorized access leads to immediate termination</h2>
      <Image
        src={solgovFlag} // public directory
        alt="Nanotrasen Logo"
        width={128}
        height={128}
      />
      <p>Login</p>
      <input
        type="text"
        defaultValue="baxter123"
        id="username"
        className="text-black"
      />
      <p>Password</p>
      <input
        type="text"
        defaultValue="Ih8syndi"
        id="password"
        className="text-black"
      />
      <button
        className="font-bold m-5 p-1 py-2 px-4 border border-slate-500 hover:text-cyan-400"
        onClick={handleLogin}
      >
        Login
      </button>
    </main>
  );
}

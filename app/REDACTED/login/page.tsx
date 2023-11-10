'use client'
import { useRouter } from "next/navigation";
import Image from 'next/image';

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    const usernameInput = document.getElementById('username') as HTMLInputElement | null;
    const passwordInput = document.getElementById('password') as HTMLInputElement | null;

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
      <h1 className="p-5">Evidenzkompanien Records</h1>
      <Image
        src="/Solgov_flag.png" // public directory
        alt="Solgov flag"
        width={256}
        height={256}
      />
      <p>Login</p>
      <input type="text" defaultValue="baxter123" id="username" className="text-black"/>
      <p>Password</p>
      <input type="text" defaultValue="Ih8syndi" id="password" className="text-black"/>
      <button className="m-5 font-bold py-2 px-4 border rounded" onClick={handleLogin}>
        Login
      </button>
    </main>
  );
}

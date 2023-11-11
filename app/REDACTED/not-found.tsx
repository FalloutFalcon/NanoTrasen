import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="flex flex-col items-center justify-center text-center p-5 w-4/5 m-auto">
      <h1 className="">RESTRICTED. GO BACK.</h1>
      <Link href="/REDACTED">
        <h1 className="text-xl hover:text-slate-400 ">
          RETURN TO PERMITED AREAS NOW
        </h1>
      </Link>
    </main>
  );
}

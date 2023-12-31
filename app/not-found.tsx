import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="flex flex-col items-center justify-center text-center p-5 w-4/5 m-auto">
      <h1>Whoops, page not found! Sorry about that.</h1>
      <Link href="/">
        <h1 className="text-xl hover:text-slate-400 ">Main Page</h1>
      </Link>
    </main>
  );
}

import Link from "next/link";

function HeaderComponent() {
  return (
    <header className="flex flex-col items-center text-center pt-5 w-4/5 m-auto">
      <Link href="/REDACTED">
        <h1 className="text-xl text-solgov-yellow-dark hover:text-solgov-yellow">Evidenzkompanien Mark Database</h1>
      </Link>
    </header>
  );
}
export default HeaderComponent;
/*
<div className="flex flex-row m-1">
<Link href="/REDACTED/login">
  <p className="border border-slate-500 hover:text-cyan-400 p-1">
    Login
  </p>
</Link>
<Link href="/ooc">
  <p className="border border-slate-500 hover:text-cyan-400 p-1 font-light">
    ooc
  </p>
</Link>
</div>
*/
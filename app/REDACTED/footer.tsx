import Link from "next/link";

function FooterComponent() {
  return (
    <footer className="flex flex-col items-center text-center p-5 w-4/5 m-auto">
      <Link href="/REDACTED/ooc">
        <p className="text-xs text-solgov-yellow-dark hover:text-solgov-yellow">
          ooc
        </p>
      </Link>
    </footer>
  );
}
export default FooterComponent;

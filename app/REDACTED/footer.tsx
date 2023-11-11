import Link from "next/link";

function FooterComponent() {
  return (
    <footer className="flex flex-col items-center text-center p-5 w-4/5 m-auto">
      <Link href="/REDACTED">
        <p className="text-xs">ooc</p>
      </Link>
    </footer>
  );
}
export default FooterComponent;

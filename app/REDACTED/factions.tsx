import Link from "next/link";

function FactionsComponent() {
  const factions = ["CMM", "Inteq", "Nanotrasen", "SRM", "SolGov", "Syndicate"];
  return (
    <div>
      <h2 className="text-lg">Groups of intrest</h2>
      <div className="flex flex-row mb-4">
        {factions.map((faction) => (
          <Link key={faction} href={`/REDACTED/groups/${faction}`}>
            <p className="border border-slate-500 text-solgov-yellow-dark hover:text-solgov-yellow p-2">
              {faction}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default FactionsComponent;

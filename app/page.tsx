"use client";

import Image from "next/image";
import Link from "next/link";

import solgovFlag from "/public/static/images/SolGov_flag.png";

export const revalidate = 0;

export default function DefaultPage() {
  return (
    <div className="min-h-screen">
      <header className="bg-solgov-background-dark text-center py-4 flex flex-row items-center justify-center">
        <div className="mb-4">
          <Image
            src={solgovFlag} // public directory
            alt="Nanotrasen Logo"
            width={128}
            height={128}
          />
        </div>
        <h1 className="text-3xl font-bold p-4">
          The Most Serene Solar and Intersolar Confederation Government Portal
        </h1>
      </header>

      <main className="max-w-3xl mx-auto p-4">
        <p className="mb-4">
          Welcome to the official government portal of The Most Serene Solar and
          Intersolar Confederation. Serving the Solarian citizens with pride and
          dedication.
        </p>

        <h2 className="text-2xl font-bold mb-2">Our History</h2>

        <p>
          &quot;The State is a sapling: Waters of change may drown it, and rays
          of fear may wither it, but well-tended it will one day bear
          fruit.&quot; — Excerpt from A Comprehensive Guide to the Tenets of
          Solar Statecraft. (120 AEA) Ministerial Publishing House, Neue
          Waldstätte, Terra, Sol.
        </p>

        <div className="bg-solgov-yellow-dark p-4 rounded-md mt-8">
          <h3 className="text-xl font-semibold mb-2">Propaganda Alert!</h3>
          <p>
            🌞 Embrace the brilliance of Solarian unity! Together, we build a
            future bathed in the eternal light of progress and harmony. Join us
            in shaping the destiny of The Most Serene Solar and Intersolar
            Confederation! 🌍
          </p>
        </div>

        {/* Structure Section */}
        <h2 className="text-2xl font-bold mb-2 mt-8">
          Our Magnificent Structure
        </h2>
        <p>
          Behold the brilliance of SolGov, a semi-direct democratic federal
          republic that stands as a beacon of governance. Our &quot;Solar&quot;
          sectors, bathed in the light of democracy, and the
          &quot;Intersolar&quot; frontiers, where martial law prevails, together
          form a tapestry of harmony. Our citizens, blessed by the Terran
          Constitution, wield the power of referendums, shaping our government
          and challenging the tides of change.
        </p>
        <p>
          Witness the grandeur of our institutions, tirelessly working to
          maintain order and stability across all sectors, fueled by the
          boundless resources devoted to their noble cause.
        </p>

        {/* Department of Administrative Affairs Section */}
        <h2 className="text-2xl font-bold mb-2 mt-8">
          The Illustrious Department of Administrative Affairs
        </h2>
        <p>
          Within the Solar Confederation, none rival the might of the Department
          of Administrative Affairs (DAA). From its humble origins as a
          supportive office, it has burgeoned into a colossal force of 40
          billion stalwart staff members—administrators, officials, and civil
          servants. The DAA, guardian of administrative harmony, tackles a
          myriad of tasks, from representing the Confederation to orchestrating
          colonial supply lines. It is the bedrock of stability beyond our
          beloved Sol system, the second most-encountered institution on the
          frontier.
        </p>
        <ul>
          <li>
            Bask in the glory of the largest institution within SolGov&apos;s
            government.
          </li>
          <li>
            Rest assured, for the DAA pursues no selfish agenda; its sole
            concern is preserving the sacred status quo.
          </li>
        </ul>

        {/* Sonnensöldneren and Solar Companies Section */}
        {/* ... (similar structure as above) */}

        {/* The Sol Administration Section */}
        {/* ... (similar structure as above) */}

        <h2 className="text-2xl font-bold mb-2 mt-8">Evidenzkompanien</h2>
        <p>
          The Evidenzkompanien, with their watchful eyes and unwavering
          commitment, tirelessly ensure the security and intelligence of our
          great Confederation. They keep tabs on characters from all factions,
          maintaining the delicate balance of information in our ever-evolving
          universe.
        </p>
        <div className="bg-solgov-yellow-dark p-4 rounded-md mt-4">
          <h3 className="text-xl font-semibold mb-2">
            Evidenzkompanien Propaganda
          </h3>
          <p>
            🕵️‍♂️ Evidenzkompanien: Guardians of Solarian Wisdom!{" "}
            <Link
              className="text-solgov-grey hover:text-solgov-grey-light"
              href="/REDACTED/login"
            >
              {" "}
              Unseen, unheard, unstoppable.
            </Link>{" "}
            Embrace the knowledge they provide for the prosperity of The Most
            Serene Solar and Intersolar Confederation! to access the truth.
          </p>
        </div>
      </main>
      <footer className="bg-solgov-background-dark text-center py-2">
        &copy; Solar Confederation
      </footer>
    </div>
  );
}

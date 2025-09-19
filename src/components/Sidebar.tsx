import Link from "next/link";

export function Sidebar() {
  return (
    <aside className="p-4 shadow-md rounded-md space-y-6 text-text-white">
      <section>
        <h3 className="mb-2 text-text text-lg">Datum</h3>
        <ul className="space-y-1 px-3 mb-2">
          <li>
            <Link href="/archiv/2025" className="hover:underline">
              Neuste
            </Link>
          </li>
          <li>
            <Link href="/archiv/2024" className="hover:underline">
              Älteste
            </Link>
          </li>
        </ul>

        <h3 className="mb-2 text-text text-lg">Beiträge aus dem Jahr</h3>
        <ul className="space-y-1 px-3 mb-2">
          <li>
            <Link href="/archiv/2025" className="hover:underline">
              2025
            </Link>
          </li>
          <li>
            <Link href="/archiv/2024" className="hover:underline">
              2024
            </Link>
          </li>
        </ul>

        <h3 className="mb-2 text-text text-lg">Kategorien</h3>
        <ul className="space-y-1 px-3 mb-2">
          <li>
            <Link href="/category/vorhersagen" className="hover:underline">
              Vorhersagen
            </Link>
          </li>
          <li>
            <Link href="/category/rueckblicke" className="hover:underline">
              Rückblicke
            </Link>
          </li>
          <li>
            <Link href="/category/allgemeines" className="hover:underline">
              Allgemeines
            </Link>
          </li>
        </ul>

        <h3 className="mb-2 text-text text-lg">Tags</h3>
        <ul className="space-y-1 px-3 mb-2">
          <li>
            <Link href="/tag/regen" className="text-text-white hover:underline">
              Regen
            </Link>
          </li>
          <li>
            <Link
              href="/tag/sommer"
              className="text-text-white hover:underline"
            >
              Sommer
            </Link>
          </li>
          <li>
            <Link
              href="/tag/kaelte"
              className="text-text-white hover:underline"
            >
              Kälte
            </Link>
          </li>
        </ul>
      </section>
    </aside>
  );
}

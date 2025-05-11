"use client";

import { useActiveSection } from "@/hooks/useActiveSection";
import Link from "next/link";

const sections = [
  { id: "about", label: "À propos" },
  { id: "projects", label: "Projets" },
  { id: "contact", label: "Contact" },
];

export default function Sidebar() {
  const activeSection = useActiveSection(sections.map((s) => s.id));

  return (
    <nav className="hidden lg:block">
      <ul className="space-y-4">
        {sections.map(({ id, label }) => (
          <li key={id}>
            <Link
              href={`#${id}`}
              className={`group flex items-center w-fit px-3 py-2 gap-3 rounded transition-colors font-semibold hover:text-white! ${
                activeSection === id ? "text-white" : "text-slate-500"
              }`}
            >
              <span
                className={`inline-block h-[1px] transition-all duration-250 ease-in-out
                  ${activeSection === id ? 'w-12 bg-white' : 'w-6 bg-slate-500'}
                  group-hover:w-12 group-hover:bg-white
                `}
              />
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

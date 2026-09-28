"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Início", href: "/" },
  { label: "Atendimentos", href: "/atendimentos" },
  { label: "Pacientes", href: "/pacientes" },
  { label: "Financeiro", href: "/financeiro" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/90 bg-[#f7f8f5]/95 backdrop-blur">
      <nav
        className="mx-auto flex min-h-[4.75rem] w-[calc(100%-2rem)] max-w-[1180px] flex-wrap items-center gap-x-4 gap-y-2 py-3 sm:w-[calc(100%-2.5rem)] sm:gap-8"
        aria-label="Navegação principal"
      >
        <Link className="inline-flex items-center gap-2.5 text-xl font-bold tracking-[-0.04em] text-emerald-950" href="/">
          <span className="grid size-8 place-items-center rounded-xl bg-emerald-700 text-2xl leading-none text-white" aria-hidden="true">
            +
          </span>
          <span>Vet</span>
        </Link>
        <ul className="order-3 flex w-full gap-1 overflow-x-auto pb-0.5 sm:order-none sm:w-auto sm:flex-1 sm:justify-center">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                className={`block whitespace-nowrap rounded-lg px-3 py-2 text-sm font-semibold ${
                  pathname === link.href
                    ? "bg-emerald-50 text-emerald-950"
                    : "text-slate-500 hover:bg-slate-50 hover:text-emerald-950"
                } focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700`}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="ml-auto flex items-center gap-2.5 text-sm font-semibold text-emerald-950">
          <span className="grid size-9 place-items-center rounded-full bg-emerald-50 text-emerald-950" aria-hidden="true">
            F
          </span>
          <span>Fulano</span>
        </div>
      </nav>
    </header>
  );
}

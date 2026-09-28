import Link from "next/link";

const links = [
  { label: "Início", href: "/" },
  { label: "Atendimentos", href: "/atendimentos" },
  { label: "Pacientes", href: "/pacientes" },
  { label: "Financeiro", href: "/financeiro" },
];

export function Navbar() {
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Navegação principal">
        <Link className="brand" href="/">
          <span className="brand-mark" aria-hidden="true">+</span>
          <span>VetCare</span>
        </Link>
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.href}>
              <Link className={link.href === "/" ? "nav-link nav-link-active" : "nav-link"} href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="profile">
          <span className="profile-avatar" aria-hidden="true">F</span>
          <span className="profile-name">Fulano</span>
        </div>
      </nav>
    </header>
  );
}

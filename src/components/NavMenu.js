import Link from "next/link";

export default function NavMenu({ mobile }) {
  const menuItems = [
    { href: "/", label: "HOME" },
    { href: "/page/menu", label: "MENUS" },
    { href: "/about", label: "ABOUT US" },
    { href: "/chefs", label: "OUR CHEFS" },
    { href: "/page/reservation", label: "CONTACT" },
  ];

  return (
    <nav className={mobile ? "py-4" : ""}>
      <ul
        className={`${mobile ? "flex flex-col space-y-2" : "flex space-x-6"}`}
      >
        {menuItems.map((item) => (
          <li key={item.href} className={mobile ? "px-4" : ""}>
            <Link
              href={item.href}
              className="hover:text-primary transition-colors text-sm font-semibold relative group"
            >
              {item.label}
              <span
                className="absolute -mb-2 left-0 bottom-0 w-full h-[2px] bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                style={{ bottom: "-2px" }}
              />
              <span
                className="absolute -mb-2  left-0 bottom-0 w-full h-[2px] bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                style={{ bottom: "-6px" }}
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

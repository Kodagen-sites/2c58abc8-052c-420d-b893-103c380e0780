// Single-page landing build: nav points to in-page #anchor sections, never
// standalone routes (those would 404). NAV_LINKS[0] is "Home" (the logo target
// and the top of the mobile menu); the desktop header renders NAV_LINKS.slice(1).
export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#offer", label: "Storefront" },
  { href: "#why", label: "Why sdsd" },
  { href: "#contact", label: "Contact" },
] as const;

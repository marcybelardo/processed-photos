'use client'
import { usePathname } from "next/navigation";
import Link from "next/link";

export function NavLink({ label, path } : { label: string, path: string }) {
  const current_path = usePathname();

  return (
    <li className={`nav-link-wrapper ${current_path === path ? "active_link" : ""}`}>
      <Link href={path}>
        {label}
      </Link>
    </li>
  )
}

export function HomeNavLink({ label, path } : { label: string, path: string }) {
  return (
    <Link href={path}>
      {label}
    </Link>
  )
}

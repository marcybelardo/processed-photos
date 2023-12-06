import Link from "next/link";

export default function NavLink({ label, path } : { label: string, path: string }) {
    return(
        <li className="nav-link-wrapper">
            <Link href={path}>
                {label}
            </Link>
        </li>
    )
}
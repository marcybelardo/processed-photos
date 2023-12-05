import Link from "next/link";

const site_title = "processed.photos";

export default function Header() {
    return (
        <div className="header">
            <div>
                <p>{site_title}</p>
            </div>
            <div></div>
            <div>
                <nav>
                    <ul className="primary-nav">
                        <NavLink label="ABOUT" path="/about" />
                        <NavLink label="ARCHIVE" path="/archive" />
                        <NavLink label="CONTACT" path="/contact" />
                    </ul>
                </nav>
            </div>
        </div>
    )
}

function NavLink({ label, path } : { label: string, path: string }) {
    return(
        <li className="nav-link-wrapper">
            <Link href={path}>
                {label}
            </Link>
        </li>
    )
}
import { NavLink, HomeNavLink } from "./nav_link";
const site_title = "processed.photos";

export default function Header() {
    const links = [
        { id: 0, label: "ABOUT", path: "/about" },
        { id: 1, label: "ARCHIVE", path: "/archive" },
        { id: 2, label: "CONTACT", path: "/contact"}
    ];

    return (
        <div className="header">
            <div className="title">
                <HomeNavLink label={site_title} path="/" />
            </div>
            <div></div>
            <div>
                <nav>
                    <ul className="primary-nav">
                        {links.map(({ id, label, path }) => <NavLink key={id} label={label} path={path} />)}
                    </ul>
                </nav>
            </div>
        </div>
    )
}
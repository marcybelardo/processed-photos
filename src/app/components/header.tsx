import NavLink from "./nav_link";

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
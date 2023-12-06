const currentYear = new Date().getFullYear();

export default function Footer() {
    return (
        <div className="footer">
            <p className="left-info">Copyright {currentYear}; Designed by Marceline Belardo</p>
            <p className="right-info">
                <a href="https://www.facebook.com">FACEBOOK </a>
                <a href="https://www.x.com">X </a> 
                <a href="https://www.instagram.com">INSTAGRAM</a>
            </p>
        </div>
    )
}
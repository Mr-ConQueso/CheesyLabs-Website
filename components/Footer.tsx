import colors from "../src/constants/colors.ts";

const Footer = () => {
return (
    <footer>
        <div className="footer-logo">
            <img src="/images/company/cheesy-labs-negative.png" alt="Logo"/>
        </div>

        <nav className="footer-navigation">
            <ul>
                <li><a href="/index.html">Home</a></li>
                <li><a href="/pages/games.html">Games</a></li>
                <li><a href="/pages/projects.html">Projects</a></li>
                <li><a href="/pages/about.html">About</a></li>
            </ul>
        </nav>

        <hr className="footer-separator"/>

        <div className="footer-bottom">
            <p>&copy; 2024 Cheesy Labs. All rights reserved.</p>
            <nav className="footer-links">
                <a href="/pages/company/privacy-policy.html">Privacy Policy</a>
                <a href="/pages/company/service-terms.html">Terms of Service</a>
            </nav>
        </div>
    </footer>
);
}

export default Footer;
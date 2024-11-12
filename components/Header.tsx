import colors from "../src/constants/colors.ts";

const Header = () => {
    return (
        <div>
            <header>
                <nav className="topnav">
                    <ul>
                        <li><a href="/index.html">Home</a></li>
                        <li><a href="/pages/games.html">Games</a></li>
                        <li><a href="/pages/projects.html">Projects</a></li>
                        <li><a href="/pages/about.html">About</a></li>
                    </ul>
                </nav>
            </header>
            <aside className="social-icons">
                <ul>
                    <li><a href="#"><img src="/images/icons/itchio.png" alt="Itch.io"/></a></li>
                    <li><a href="#"><img src="/images/icons/github.png" alt="Github"/></a></li>
                    <li><a href="#"><img src="/images/icons/instagram.png" alt="Instagram"/></a></li>
                    <li><a href="#"><img src="/images/icons/linkedin.png" alt="LinkedIn"/></a></li>
                </ul>
            </aside>
        </div>
    );
}

export default Header;
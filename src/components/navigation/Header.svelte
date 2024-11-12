<header>
	<nav class="topnav">
		<ul>
			<li><a href="/index.html">Home</a></li>
			<li><a href="/pages/games.html">Games</a></li>
			<li><a href="/pages/projects.html">Projects</a></li>
			<li><a href="/pages/about.html">About</a></li>
		</ul>
	</nav>
</header>
<aside class="social-icons">
	<ul>
		<li><a href="#"><img src="/images/icons/itchio.png" alt="Itch.io"></a></li>
		<li><a href="#"><img src="/images/icons/github.png" alt="Github"></a></li>
		<li><a href="#"><img src="/images/icons/instagram.png" alt="Instagram"></a></li>
		<li><a href="#"><img src="/images/icons/linkedin.png" alt="LinkedIn"></a></li>
	</ul>
</aside>

<style>
    @import '../../routes/variables.css';

    .topnav {
        display: flex;
        justify-content: center;
        margin-top: 65px;
    }

    .topnav ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    .topnav ul li {
        display: inline;
        margin-right: 20px;
    }

    .topnav ul li a {
        font-size: 25px;
        font-family: "Madimi One", sans-serif;
        font-weight: 600;
        letter-spacing: 2px;
        font-style: normal;
        color: #222;
        text-align: center;
        text-decoration: none;
        padding: 20px 65px;
        background-color: #9F9FED;
        border-radius: 20px;
    }
    .social-icons {
        position: fixed;
        top: 50%;
        transform: translateY(-90%);
        right: 0;
        margin-right: 20px;
        z-index: 20;
    }

    .social-icons ul {
        list-style: none;
        margin: 10px;
        padding: 0;
    }

    .social-icons ul li {
        margin-bottom: 10px;
    }

    .social-icons ul li a {
        display: block;
        width: 40px;
        height: 40px;
    }

    .social-icons ul li a img {
        width: 100%;
        height: 100%;
    }
</style>
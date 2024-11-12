<footer>
	<div class="footer-logo">
		<img src="/img/company/cheesy-labs-negative.png" alt="Logo">
	</div>

	<nav class="footer-navigation">
		<ul>
			<li><a href="/index.html">Home</a></li>
			<li><a href="/pages/games.html">Games</a></li>
			<li><a href="/pages/projects.html">Projects</a></li>
			<li><a href="/pages/about.html">About</a></li>
		</ul>
	</nav>

	<hr class="footer-separator">

	<div class="footer-bottom">
		<p>&copy; 2024 Cheesy Labs. All rights reserved.</p>
		<nav class="footer-links">
			<a href="company/privacy-policy.html">Privacy Policy</a>
			<a href="company/service-terms.html">Terms of Service</a>
		</nav>
	</div>
</footer>

<style>
    footer {
        background-color: #000000;
        padding: 20px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        flex-wrap: wrap;
    }

    .footer-logo img {
        max-width: 100px;
    }

    .footer-navigation ul {
        list-style: none;
        padding: 0;
        display: flex;
        justify-content: center;
        margin: 10px 0 0;
    }

    .footer-navigation li {
        margin: 0 15px;
    }
    .footer-navigation li a {
        margin-left: 10px;
        font-size: 18px;
        line-height: 1.4;
        font-family: "Nunito", sans-serif;
        font-weight: 400;
        font-style: normal;
        color: #ffffff;
        text-align: center;
        text-decoration: none;
    }

    .footer-separator {
        width: 80%;
        border: 1px solid #222;
        margin: 20px 0;
    }

    .footer-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .footer-bottom p {
        font-size: 18px;
        line-height: 1.4;
        font-family: "Nunito", sans-serif;
        font-weight: 200;
    }

    .footer-links a {
        margin-left: 10px;
        font-size: 18px;
        line-height: 1.4;
        font-family: "Nunito", sans-serif;
        font-weight: 200;
        font-style: italic;
        color: #ffffff;
        text-align: center;
        text-decoration: underline;
    }

    @media (max-width: 768px) {
        .footer-navigation ul {
            flex-direction: column;
        }
        .footer-navigation li {
            margin: 5px 0;
        }
    }
</style>
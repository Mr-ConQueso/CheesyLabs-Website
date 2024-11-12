import HeroSection from "./HeroSection.tsx";
import VideGameDesign from "./VideGameDesign.tsx";
import colors from "../src/constants/colors.ts";

const MainPage = () => {
    return (
        <div className="html">
            <HeroSection/>

            <div className="rec-gradient orange-gradient">
                <main className="dark-text">

                    <div className="top-wave">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                             preserveAspectRatio="none">
                            <path
                                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                                className="shape-fill"></path>
                        </svg>
                    </div>

                    <h1>Revolutionizing video game design</h1>
                    <p>At our technology and art company, we combine our passion for gaming with cutting-edge
                        programming
                        and artistic
                        skills to deliver exceptional video game design and modding services. With our innovative
                        approach,
                        we create
                        immersive and captivating gaming experiences that push the boundaries of what's possible.
                    </p>

                    <div className="grid-container">
                        <div className="grid-item">
                            <img src="/images/projects/cover-final-game.jpg" alt="A Steam Game"/>
                            <h2>Final Game</h2>
                            <p>A fully completed video game made with Unity in 8 months</p>
                        </div>
                        <div className="grid-item">
                            <img src="/images/projects/impasse-game.jpg" alt="A board game"/>
                            <h2>Impasse Board Game</h2>
                            <p>A social board game</p>
                        </div>
                        <div className="grid-item">
                            <img src="/images/projects/cover-FungalFury.jpg" alt="A 2d platformer game made with Unity"/>
                            <h2>Fungal Fury Game</h2>
                            <p>A 2D platformer metroidvania concept, made with Unity</p>
                        </div>
                        <div className="grid-item">
                            <img src="/images/projects/Investigacion-Flight-Simulator.jpg"
                                 alt="A practical study on plane flight using Unity"/>
                            <h2>Geometry Study</h2>
                            <p>A practical study on plane flight using Unity</p>
                        </div>
                        <div className="grid-item">
                            <img src="/images/projects/cover-PhantomFocus.jpeg" alt="A short horror game"/>
                            <h2>Phantom Focus</h2>
                            <p>A short horror game made with Unreal Engine 5</p>
                        </div>
                        <div className="grid-item">
                            <img src="/images/projects/cover-garden-keeper.png" alt="A first person shooter game"/>
                            <h2>Garden Keeper</h2>
                            <p>A first-person shooter game made with Unity</p>
                        </div>
                    </div>

                </main>
            </div>

            <VideGameDesign/>
        </div>
    );
}

export default MainPage;
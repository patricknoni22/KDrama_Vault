import { useState } from "react";
import { Link } from "react-router-dom";


export default function Mainpage() {
        const [showMenu, setShowMenu] = useState(false);

        function mainmenu() {
            setShowMenu(!showMenu);
        }

    return (
        <>
            <header>
                <div className="head">
                    <h2>KDrama Vault</h2>
                    <span onClick={mainmenu}>Menu</span>
                    <div className="desktop">
                        
                        <p>  <Link to="/Discover"> Discover</Link> </p>
                        <p><Link to="/Wishlist"> Wishlist</Link> </p>
                        <p><Link to={"/Recommedations"}> Recommendations</Link></p>
                    </div>
                </div>
                <div className={`mobile ${showMenu ? "block" : ""}`}>
                    <p>My Vault</p>
                    <p>Discover</p>
                    <p>Wishlist</p>
                    <p>Rating</p>
                </div>
                <div id="search">
                    <input type="text" placeholder="search your vault" />
                </div>


            </header>

            <main>
                <div className="num">
                    <p>Explore by <br /> Platforms</p>
                    <div className="one">
                        <h2>   <Link to="/tvn">TVN</Link> </h2>

                    </div>
                   
                    <div className="one">
                        <h2> <Link to="/jtbc">JTBC</Link> </h2>

                    </div>

                    <div className="one">
                        <h2> <Link to="/sbs">SBS</Link> </h2>
                    </div>
                    <div className="one">
                    
                        <h2> <Link to="/mbc">MBC</Link> </h2>
                    </div>
                    <div className="one">
                        
                        <h2> <Link to="/tvchosun">Tv Chosun</Link> </h2>
                    </div>
                    <div className="one">
                        <h2> <Link to="/ena">ENA</Link> </h2>
                    </div>
                    <div className="one">
                        <h2> <Link to="/kbs">KBS</Link> </h2>
                    </div>
                     <div className="one">
                        <h2> <Link to="/netflix">NETFLIX</Link> </h2>
                     
                    </div>
                     <div className="one">
                
                        <h2> <Link to="/disney">DISNEY PLUS </Link> </h2>
                    </div>

                    <div className="one">
        
                        <h2> <Link to="/tving">TVING</Link> </h2>
                    </div>
                    <div className="one">
                        <h2> <Link to="/wavve">WAVVE</Link> </h2>
                    </div>


                </div>
                <div className="bigbtn">
                    <span className="first">all</span>
                    <span>watching</span>
                    <span>done</span>
                </div>
                <div className="themes">
                    <div className="romance">
                        <button>completed</button>
                        <p>Romance</p>
                        <p>top 1 Genre</p>
                    </div>
                    {/* 2 */}
                    <div className="fantasy">
                        <button>completed</button>
                        <p>fantasy</p>
                        <p>top 2 Genre</p>
                    </div>
                    {/* 3 */}
                    <div className="thriller">
                        <button>completed</button>
                        <p>Historical</p>
                        <p>top 3 Genre</p>
                    </div>
                    {/* 4 */}
                    <div className="Drama">
                        <button>completed</button>
                        <p>Drama</p>
                        <p>top 4 Genre</p>
                    </div>
                    {/* 5 */}
                    <div className="slice-of-life">
                        <button>completed</button>
                        <p>slice of life</p>
                        <p>top 5 Genre</p>
                    </div>
                    {/* 6 */}
                    <div className="Historical">
                        <button>completed</button>
                        <p>thriller</p>
                        <p>top 6 Genre</p>
                    </div>


                </div>




            </main>




            <footer>
                <div className="foot">
                    <p>home</p>
                    <p>Vault</p>
                    <p>Discover</p>
                    <p>Rating</p>
                    
                </div>
            </footer>








        </>
    )
}
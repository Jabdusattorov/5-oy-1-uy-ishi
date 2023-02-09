import "./Navbar.css";
import logo from "./Logo-nav.png";
function Navbar(){
    return (
        <nav>
            <img src={logo} alt="Image"/>
            <ul>
                <li><a href="#">Marketplace</a></li>
                <li><a href="#">Farmyard</a></li>
                <li><a href="#">Roadmap</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">Whitepaper</a></li>
            </ul>

            <button>
                Start work
            </button>
        </nav>
    )
}

export default Navbar;
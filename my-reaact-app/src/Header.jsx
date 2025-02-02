
function Header(){
    return(
        <header className="appHeader">
            <h1 className="appTitle">My Website</h1>
            <nav>
                <ul className="navLinks">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <hr />
        </header>
    );
}

export default Header;
import "../styles/navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__detail-1">
                <h2>Uploads</h2>
            </div>
            <div className="navbar__input">
                <img src={"/image_icon.png"} alt="" className="navbar__input-logo" />
                <input type="text" placeholder="Search" />
            </div>
            <div className="navbar__detail-2">User Dashboard</div>
        </nav>
    );
};

export default Navbar;

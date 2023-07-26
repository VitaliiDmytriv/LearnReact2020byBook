import { Link } from "react-router-dom";
import MyButton from "../button/MyButton";
import { useContext } from "react";
import { AuthContext } from "../../../context";

function Navbar() {
    const { isAuth, setIsAuth } = useContext(AuthContext);

    return (
        <div className="navbar">
            <Link className="link" to="/">
                Home
            </Link>
            <div className="navbar__links">
                <div>
                    <Link className="link" to="/about">
                        About
                    </Link>
                    <Link className="link" to="/posts">
                        Posts
                    </Link>
                </div>
            </div>
            <MyButton
                onClick={() => setIsAuth(false)}
                style={{ color: "rgb(1, 33, 1)" }}
            >
                Exit
            </MyButton>
        </div>
    );
}

export default Navbar;

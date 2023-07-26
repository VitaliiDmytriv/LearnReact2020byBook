import { useContext } from "react";
import MyButton from "../Components/UI/button/MyButton";
import MyInput from "../Components/UI/input/MyInput";
import { AuthContext } from "../context";

function Login() {
    const { isAuth, setIsAuth } = useContext(AuthContext);

    function login(e) {
        e.preventDefault();
        setIsAuth(true);
    }
    return (
        <div>
            <h1>Hello</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Login" />
                <MyInput type="password" placeholder="Password" />
                <MyButton>Log in</MyButton>
            </form>
        </div>
    );
}

export default Login;

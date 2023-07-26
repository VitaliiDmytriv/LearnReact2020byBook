import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./style/App.css";
import About from "./Pages/About";
import Posts from "./Pages/Posts";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import PostPage from "./Pages/PostPage";
import Login from "./Pages/Login";
import { AuthContext } from "./context/index";
import { useState } from "react";

const privateRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                element: <Home />,
                index: true,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/posts",
                element: <Posts />,
            },
            {
                path: "/posts/:id",
                element: <PostPage />,
            },
        ],
    },
]);

const publicRouter = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
        errorElement: <Error />,
    },
]);

function App() {
    const [isAuth, setIsAuth] = useState(false);
    return (
        <AuthContext.Provider
            value={{
                isAuth,
                setIsAuth,
            }}
        >
            <RouterProvider
                router={isAuth ? privateRouter : publicRouter}
            ></RouterProvider>
        </AuthContext.Provider>
    );
}

export default App;

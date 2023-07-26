import Navbar from "../Components/UI/navbar/Navbar";

function Error() {
    return (
        <>
            <Navbar />
            <div className="ErrorPage">
                <h2>Error, there is no such page</h2>
            </div>
        </>
    );
}

export default Error;

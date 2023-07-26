import cl from "./MyError.module.css";

function MyError({ error }) {
    console.log(error);
    return (
        <section className={cl.ErrorBackground}>
            <div className={cl.MyError}>
                <h2> Error occured</h2>
                <h3 className={cl.errorMessage}>{error.message}</h3>
                <h4>Try again!</h4>
            </div>
        </section>
    );
}

export default MyError;

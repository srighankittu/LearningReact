import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return (        
        <div className="error-container">
            <h1 className="error-heading">Oops! {err.Error}</h1>
            <p className="error-message">The page you are looking for could not be found.</p>
            <Link className="error-link" to="/">Go back to the homepage</Link>
        </div>
    );
}


export default Error;
import { NavLink } from "react-router";

function HomePage() {

    return (
        <div>
            <h1>Home</h1>
            <NavLink to="/login" >Login</NavLink>
        </div>
    )
}

export default HomePage

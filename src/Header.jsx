import { Link } from "react-router";

import "./Header.css";

function Header(){
    return(
        <div className="Header">
            <div>
                <Link className="link">Logo</Link>
             </div>
            <div>
                <ul>
                    <li> <Link to={"/"} className="link">Home</Link></li>
                    <li> <Link to={"/add"} className="link">Add Data</Link></li>
                </ul>
            </div>
        </div>
    )
}
export default Header;
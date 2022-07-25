import './Header.css';
import {Link} from 'react-router-dom';


export default function Header(props) {
    return (
        <header className="Header">
            <nav className="Navigation ">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/catalog">Quizzes</Link></li>
                        <li><Link to="/profile">My profile</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/logout">Logout</Link></li>
                    </ul>
            </nav>
            <hr />
        </header >
    )
}
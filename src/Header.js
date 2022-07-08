import './Header.css';

export default function Header(props) {
    return (

        <nav className="Navigation">
            <ul>
                <li>Home</li>
                <li>My profile</li>
                <li>Login</li>
                <li>Register</li>
                <li>Logout</li>
            </ul>
        </nav>
    )
}
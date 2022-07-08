import logo from './logo.svg';

export default function Header(props) {
    return (
        <header className="Main">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                {props.text}
            </p>
            <a
                className="App-link"
                href="https://www.britannica.com/quiz/browse"
                target="_blank"
                rel="noopener noreferrer"
            >
                More quizzes
            </a>
        </header>)

}
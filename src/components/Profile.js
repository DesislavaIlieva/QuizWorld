import './Profile.css';
import { Link } from 'react-router-dom';

export default function Profile() {
    return (
        <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
            <div className="card p-4">
                <div className=" image d-flex flex-column justify-content-center align-items-center">
                    <span className="name mt-3">Desislava Ilieva</span>
                    <span className="idd">desislava@abv.bg</span>
                    <div className=" px-2 rounded date ">
                        <span className="join">Joined July, 2022</span>
                    </div>
                    <div className="d-flex flex-row justify-content-center align-items-center mt-3">
                        <span className="number">5
                            <span className="follow">Created Quizzes</span>
                        </span>
                        <div className="d-flex mt-2">
                            <button className="btn1 btn-dark">MY QUIZZES</button>
                        </div>
                    </div>
                    <div className="d-flex flex-row justify-content-center align-items-center mt-3">
                        <span className="number">2
                            <span className="follow">Finished Quizzes</span>
                        </span>
                        <div className="d-flex mt-2">
                            <button className="btn1 btn-dark">VIEW QUIZZES</button>
                        </div>
                    </div>

                    <div className="create-btnProfile create-buttonProfile">
                        <Link to="/profile/create">
                            <button className="btn btn-outline-primaryProfile">CREATE A QUIZ</button>
                        </Link>

                    </div>

                </div>
            </div>
        </div>
    )
}
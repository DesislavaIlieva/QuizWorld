import './Profile.css';
export default function Profile() {
    return (
        <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
            <div className="card p-4">
                <div className=" image d-flex flex-column justify-content-center align-items-center">
                    <span className="name mt-3">Eleanor Pena</span>
                    <span className="idd">@eleanorpena</span>
                    <div className=" px-2 rounded date ">
                        <span className="join">Joined May, 2021</span>
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
                        <button className="btn btn-outline-primaryProfile">CREATE A QUIZ</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
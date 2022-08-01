import './Create.css';
import Form from 'react-bootstrap/Form';


export default function Create() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-2"></div>
                <div className="col-lg-6 col-md-8 create-box">
                    <div className="col-lg-12 create-key">
                        <i class="fa fa-question" aria-hidden="true"></i>
                    </div>
                    <div className="col-lg-12 create-title">
                        CREATE A QUIZ
                    </div>

                    <div className="col-lg-12 create-form">
                        <div className="col-lg-12 create-form">
                            <form>
                                <div className="form-group">
                                    <label className="form-control-label">QUIZ NAME</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">SHORT DESCRIPTION</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">IMAGE</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">QUESTION 1</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">ANSWERS</label>
                                    <input type="text" className="form-control" placeholder="A" />
                                    <input type="text" className="form-control" placeholder="B" />
                                    <input type="text" className="form-control" placeholder="C" />
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">CORRECT ANSWER</label>
                                </div>
                                <Form.Select className="select">
                                    <option>A</option>
                                    <option>B</option>
                                    <option>C</option>
                                </Form.Select>
                                <br/>

                                <div className="form-group">
                                    <label className="form-control-label">QUESTION 2</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">ANSWERS</label>
                                    <input type="text" className="form-control" placeholder="A" />
                                    <input type="text" className="form-control" placeholder="B" />
                                    <input type="text" className="form-control" placeholder="C" />
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">CORRECT ANSWER</label>
                                </div>
                                <Form.Select className="select">
                                    <option>A</option>
                                    <option>B</option>
                                    <option>C</option>
                                </Form.Select>
                                <br/>

                                <div className="form-group">
                                    <label className="form-control-label">QUESTION 3</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">ANSWERS</label>
                                    <input type="text" className="form-control" placeholder="A" />
                                    <input type="text" className="form-control" placeholder="B" />
                                    <input type="text" className="form-control" placeholder="C" />
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">CORRECT ANSWER</label>
                                </div>
                                <Form.Select className="select">
                                    <option>A</option>
                                    <option>B</option>
                                    <option>C</option>
                                </Form.Select>
                                <br/>

                                <div className="form-group">
                                    <label className="form-control-label">QUESTION 4</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">ANSWERS</label>
                                    <input type="text" className="form-control" placeholder="A" />
                                    <input type="text" className="form-control" placeholder="B" />
                                    <input type="text" className="form-control" placeholder="C" />
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">CORRECT ANSWER</label>
                                </div>
                                <Form.Select className="select">
                                    <option>A</option>
                                    <option>B</option>
                                    <option>C</option>
                                </Form.Select>
                                <br/>

                                <div className="form-group">
                                    <label className="form-control-label">QUESTION 5</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">ANSWERS</label>
                                    <input type="text" className="form-control" placeholder="A" />
                                    <input type="text" className="form-control" placeholder="B" />
                                    <input type="text" className="form-control" placeholder="C" />
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">CORRECT ANSWER</label>
                                </div>
                                <Form.Select className="select">
                                    <option>A</option>
                                    <option>B</option>
                                    <option>C</option>
                                </Form.Select>
                                <br/>

                                <div className="col-lg-12">
                                    <div className="col-lg-6 create-btn create-text">
                                    </div>
                                    <div className="col-lg-6 login-btn create-button">
                                        <button type="submit" className="btn btn-outline-primary">CREATE</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2"></div>

                </div>

            </div>
        </div>
    )
}
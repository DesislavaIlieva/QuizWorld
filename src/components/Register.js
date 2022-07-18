import './Login.css';

export default function Register() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-2"></div>
                <div className="col-lg-6 col-md-8 login-box">
                    <div className="col-lg-12 login-key">
                        <i className="fa fa-users" aria-hidden="true"></i>
                    </div>
                    <div className="col-lg-12 login-title">
                        REGISTER
                    </div>

                    <div className="col-lg-12 login-form">
                        <div className="col-lg-12 login-form">
                            <form>
                                <div className="form-group">
                                    <label className="form-control-label">USERNAME</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">PASSWORD</label>
                                    <input type="password" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">REPEAT PASSWORD</label>
                                    <input type="password" className="form-control" />
                                </div>

                                <div className="col-lg-12 loginbttm">
                                    <div className="col-lg-6 login-btn login-text">

                                    </div>
                                    <div className="col-lg-6 login-btn login-button">
                                        <button type="submit" className="btn btn-outline-primary">REGISTER</button>
                                    </div>
                                </div>
                                <div className="foot-lnk">
                                    <label htmlFor="tab-1"><a href="/login">Already a member?</a></label>
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
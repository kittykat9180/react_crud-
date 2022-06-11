import React from "react";

const Contact = () => {
    return(
        <div className="container">
            <h2 className="mb-3">Forgotten password?  Send a message to IT.</h2>
            <form className="border border-dark p-3">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Message to IT
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                    />
                </div>
                <button type="submit" className="btn btn-info border border-dark">
                    Submit
                </button>
            </form>
        </div>

    );
}

export default Contact;
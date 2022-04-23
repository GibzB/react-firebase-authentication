import { Link } from "react-router-dom";

import "./account.css";

const Register = () => {
    return (
        <div className="container">

            <div className="container-left">
                <div className="wrapper-left">
                    <div className="part-one">
                        <h3>Get started</h3>
                        <p>Register</p>
                    </div>
                    <div className="inp">
                        <form >
                            <label htmlFor="name" className="name">Name </label>
                            <input
                                className="inp-left"
                                type="text"
                                placeholder="John Doe"
                                id="name"
                                name="displayName"
                            />
                            <label htmlFor="email" className="email">E-mail </label>
                            <input
                                className="inp-left"
                                type="email"
                                placeholder="example@gmail.com"
                                id="email"
                                name="email"
                            />
                            <label htmlFor="password" className="pass">Password </label>
                            <input
                                className="inp-left"
                                type="password"
                                placeholder="password"
                                name="password"
                                id="password"
                            />
                        </form>
                    </div>
                    <div className="buttons">
                        <button className="btn-one">Register</button>
                        <button className="btn-two">
                            Sign up with google
                        </button>
                    </div>
                    <div className="down">
                        <p>Already have an account?</p>
                        <Link to='/'> Log in </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register

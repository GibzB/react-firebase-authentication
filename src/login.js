import { Link } from "react-router-dom";

import "./account.css";

const Login = () => {
    return (
        <div className="container">

            <div className="container-left">
                <div className="wrapper-left">
                    <div className="part-one">
                        <h3>Get started</h3>
                        <p>Login</p>
                    </div>
                    <div className="inp">
                        <form >
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
                            <Link className="text-align-right" to='/reset-password'>Forgot password?</Link>
                        </form>
                    </div>
                    <div className="buttons">
                        <button className="btn-one">Login</button>
                        <button className="btn-two">
                            Sign in with google
                        </button>
                    </div>
                    <div className="down">
                        <p>Don't have an account?</p>
                        <Link to='/register'> Create your account </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Login

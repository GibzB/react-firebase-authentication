import "./account.css";

const ResetPassword = () => {
    return (
        <div className="container">
            <div className="container-left">
                <div className="wrapper-left">
                    <div className="part-one">
                        <h3>Reset Password</h3>
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
                        </form>
                    </div>
                    <div className="buttons">
                        <button className="btn-one">Reset Password</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ResetPassword

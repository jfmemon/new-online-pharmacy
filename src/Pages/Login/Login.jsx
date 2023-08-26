import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="mt-16">
            <Helmet>
                <title>SHEFA | Login</title>
            </Helmet>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col my-10">
                    <div className="text-center lg:text-center">
                        <h1 className="text-4xl font-bold py-4">Login!</h1>
                    </div>
                    <div className="card flex-shrink-0 md:w-96 shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Eg: john@gmail.com" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <small className="label-text-alt">New to SHEFA? Please <Link to='/register' className="text-orange-400 font-semibold">Register</Link> first.</small>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn text-white" style={{ backgroundColor: "#76D7C4" }}>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
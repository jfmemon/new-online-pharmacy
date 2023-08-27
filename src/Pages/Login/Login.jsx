import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'Login successful..!',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))

        form.reset();
    }

    return (
        <div className="mt-16">
            <Helmet>
                <title>SHEFA | Login</title>
            </Helmet>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col my-10">
                    <div className="text-center lg:text-center">
                        <h1 className="text-4xl font-bold py-4">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 md:w-96 shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Eg: john@gmail.com" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <small className="label-text-alt">New to SHEFA? Please <Link to='/register' className="text-orange-400 font-semibold">Register</Link> first.</small>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn text-white" style={{ backgroundColor: "#76D7C4" }}>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
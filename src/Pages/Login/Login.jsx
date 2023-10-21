import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";
import loginImage from '../../assets/login.svg';

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
        // console.log(email, password);

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'Login successful..!',
                    position: 'top',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                navigate(from, { replace: true });
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error}`,
                    position: 'top'
                  })
            })

        form.reset();
    }

    return (
        <div>
            <Helmet>
                <title>SHEFA | Login</title>
            </Helmet>
            <div className="hero bg-gray-100 md:h-[596px] w-full">
                <div className="hero-content md:flex md:flex-row flex-col">
                    <div className="text-center lg:text-center">
                        <img className="w-[500px] mr-20" src={loginImage} alt="" />
                    </div>
                    <div className="card flex-shrink-0 md:w-96 shadow-2xl bg-white">
                        <h3 className="py-5 text-center font-semibold text-2xl text-[#76D7C4]">Login</h3>
                        <form className="card-body pt-0" onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Eg: john@gmail.com" className="input input-bordered bg-gray-100" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered bg-gray-100" required />
                                <label className="label">
                                    <small className="label-text-alt">New to SHEFA? Please <Link to='/register' className="text-orange-400 font-semibold">Create</Link> your account first.</small>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn text-white border-none" style={{ backgroundColor: "#76D7C4" }}>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
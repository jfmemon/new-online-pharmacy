import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Register = () => {

    const handleRegistration = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phoneNumber = form.phone.value;
        const presentAddress = form.address.value;
        const password = form.password.value;
        console.log(name, email, phoneNumber, presentAddress, password);
        form.reset();
    }

    return (
        <div className="mt-16">
            <Helmet>
                <title>SHEFA | Register</title>
            </Helmet>
            <div className="hero bg-base-200 my-10">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-center">
                        <h1 className="text-4xl font-bold py-4">Registration first!</h1>
                    </div>
                    <div className="card flex-shrink-0 md:w-96 shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleRegistration}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name="name" type="text" placeholder="Eg: John Wick" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="Eg: john@gmail.com" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone number</span>
                                </label>
                                <input name="phone" type="number" placeholder="+880" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Present address</span>
                                </label>
                                <input name="address" type="text" placeholder="Eg: New York, USA" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <small className="label-text-alt">Already have an account? Please <Link to='/login' className="text-orange-400 font-semibold">Login</Link> now.</small>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn text-white" style={{ backgroundColor: "#76D7C4" }}>Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
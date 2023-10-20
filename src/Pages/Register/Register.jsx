import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";
import signupImage from '../../assets/signup.svg';

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

                return updateUserProfile(data.name, data.photoURL);
            })
            .then(() => {
                const saveUser = { name: data.name, email: data.email, photoURL: data.photoURL, phone: data.phoneNumber, address: data.address, password: data.password, role: 'user' };
                return fetch('https://online-pharmacy-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                });
            })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    reset();
                    Swal.fire(
                        'Welcome to shefa!',
                        'Registration done!',
                        'success'
                    )
                    navigate('/');
                }
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error}`,
                    position: 'top'
                });
            });
    };




    return (
        <div className="mt-16">
            <Helmet>
                <title>SHEFA | Registration</title>
            </Helmet>
            <div className="hero bg-base-200">
                <div className="hero-content md:flex md:flex-row flex-col">
                    <div className="text-center lg:text-center">
                        <img className="w-[500px] mr-20" src={signupImage} alt="" />
                    </div>
                    <div className="card flex-shrink-0 md:w-96 shadow-2xl bg-base-100">
                        <h3 className="py-5 text-center font-semibold text-2xl text-[#76D7C4]">Sign Up</h3>
                        <form className="card-body pt-0" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input {...register("name", { required: true })} type="text" placeholder="Eg: Ayatollah Khomeini" className="input input-bordered" />
                                {errors.name && <span className="text-red-500">*This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input {...register("photoURL", { required: false })} type="url" placeholder="Eg: photoURL.com (Public link)" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-500">*This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", { required: true })} type="email" placeholder="Eg: ayatollah@gmail.com" className="input input-bordered" />
                                {errors.email && <span className="text-red-500">*This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone number</span>
                                </label>
                                <input {...register("phoneNumber", { required: true })} type="number" placeholder="+880" className="input input-bordered" />
                                {errors.phoneNumber && <span className="text-red-500">*This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input {...register("address", { required: false })} type="text" placeholder="Eg: Tehran, Iran" className="input input-bordered" />
                                {errors.address && <span className="text-red-500">*This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password", {
                                    required: true,
                                    minLength: 8,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} type="password" placeholder="password" className="input input-bordered" />
                                {errors.password?.type === "required" && <span className="text-red-500">*This field is required</span>}
                                {errors.password?.type === "minLength" && <span className="text-red-500">*Password must have at least 8 character.</span>}
                                {errors.password?.type === "maxLength" && <span className="text-red-500">*Password should not have more than 20 character.</span>}
                                {errors.password?.type === 'pattern' && <span className="text-red-500">*Password must have one uppercase letter, one lowercase letter, one digit and one special character.</span>}
                                <label className="label">
                                    <small className="label-text-alt">Already have an account? Please <Link to='/login' className="text-orange-400 font-semibold">Login</Link> now.</small>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Register" className="btn text-white" style={{ backgroundColor: "#76D7C4" }} />
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Register;
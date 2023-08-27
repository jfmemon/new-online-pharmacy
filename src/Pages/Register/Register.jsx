import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        console.log(data);
        try {
            const result = await createUser(data.email, data.password);
            const newUser = result.user;

            await updateUserProfile(data.name, data.photoURL);
            console.log('New user created done.');
            reset();

            Swal.fire({
                title: 'Registration successful..!',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div className="mt-16">
            <Helmet>
                <title>SHEFA | Registration</title>
            </Helmet>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-center">
                        <h1 className="text-4xl font-bold py-4">Registration first!</h1>
                    </div>
                    <div className="card flex-shrink-0 md:w-96 shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input {...register("name", { required: true })} type="text" placeholder="Eg: John Wick" className="input input-bordered" />
                                {errors.name && <span className="text-red-500">*This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input {...register("photoURL", { required: true })} type="text" placeholder="Eg: photoURL.com" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-500">*This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", { required: true })} type="email" placeholder="Eg: john@gmail.com" className="input input-bordered" />
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
                                    <span className="label-text">Present address</span>
                                </label>
                                <input {...register("address", { required: true })} type="text" placeholder="Eg: New York, USA" className="input input-bordered" />
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
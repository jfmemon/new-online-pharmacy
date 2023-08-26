import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then((result) => {
                const newUser = result.user;
                console.log(newUser);
                Swal.fire({
                    title: 'Registration successful..!',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
            })
            .catch(error => console.log(error))

        reset();
    }

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
                                <input name="name" {...register("name", { required: true })} type="text" placeholder="Eg: John Wick" className="input input-bordered" />
                                {errors.name && <span className="text-red-500">*This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" {...register("email", { required: true })} type="email" placeholder="Eg: john@gmail.com" className="input input-bordered" />
                                {errors.email && <span className="text-red-500">*This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone number</span>
                                </label>
                                <input name="phone" {...register("phone", { required: true })} type="number" placeholder="+880" className="input input-bordered" />
                                {errors.phone && <span className="text-red-500">*This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Present address</span>
                                </label>
                                <input name="address" {...register("address", { required: true })} type="text" placeholder="Eg: New York, USA" className="input input-bordered" />
                                {errors.address && <span className="text-red-500">*This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" {...register("password", {
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
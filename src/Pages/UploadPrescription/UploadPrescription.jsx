import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import imageUpload from "../../assets/image_upload.svg"
import Swal from "sweetalert2";

const imageHostingToken = import.meta.env.VITE_image_upload_token;

const UploadPrescription = () => {
    const { user } = useContext(AuthContext);

    const imageHostingURL = `https://api.imgbb.com/1/upload?key=${imageHostingToken}`;

    const handleImageUpload = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const number = form.number.value;
        const address = form.address.value;
        const img = form.img;
        const image = img.files;

        const formData = new FormData();
        formData.append('image', image[0])

        fetch(imageHostingURL, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageRes => {
                if (imageRes.success) {
                    const imgURL = imageRes.data.display_url;
                    const data = { fullName: name, email: email, phoneNumber: number, deliveryAddress: address, prescriptionImage: imgURL, userEmail: user?.email };

                    fetch("https://online-pharmacy-server.vercel.app/upload", {
                        method: "POST",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(data)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                Swal.fire({
                                    icon: 'success',
                                    position: 'top',
                                    title: 'Your order has placed. We will contact with you soo. Thank you for ordering from us.',
                                    showClass: {
                                        popup: 'animate__animated animate__fadeInDown'
                                    },
                                    hideClass: {
                                        popup: 'animate__animated animate__fadeOutUp'
                                    }
                                })
                                form.reset();
                            }
                        })
                }
            })
    };

    return (
        <div>
            <div className="w-full md:flex items-center justify-center p-5 gap-10">
                <div className="py-3">
                    <img className="w-[600px]" src={imageUpload} alt="" />
                </div>
                <form className="p-5 bg-slate-100" onSubmit={handleImageUpload}>
                    <h2 className="text-2xl text-indigo-500 font-semibold text-center pb-5 pt-1 px-2">You can order by sending us your verified prescription!</h2>
                    <div className='flex flex-col gap-3'>
                        <div className="form-control px-3">
                            <label className="label">
                                <span className="label-text">Full name</span>
                            </label>
                            <input name='name' type="text" placeholder='Eg: Ismail Haniyeh' className="input input-bordered w-[90%] bg-gray-200" required />
                        </div>
                        <div className="form-control px-3">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder='Eg: ismailhaniyeh@gmail.com' className="input input-bordered w-[90%] bg-gray-200" required />
                        </div>
                        <div className="form-control px-3">
                            <label className="label">
                                <span className="label-text">Phone number</span>
                            </label>
                            <input name='number' type="number" placeholder='+880' className="input input-bordered w-[90%] bg-gray-200" required />
                        </div>
                        <div className="form-control px-3">
                            <label className="label">
                                <span className="label-text">Present address</span>
                            </label>
                            <input name='address' type="text" placeholder='Eg: house/road or vill, post code, p.s, district, division.' className="input input-bordered w-[90%] bg-gray-200" required />
                        </div>
                        <div className="form-control px-3">
                            <label className="label">
                                <span className="label-text">Choose image</span>
                            </label>
                            <input type="file" name='img' accept="image/png, image/jpeg, image/jpg" required />
                        </div>
                    </div>
                    <button className="btn btn-warning m-3" type="submit">Upload</button>
                </form>
            </div>
        </div>
    );
};

export default UploadPrescription;
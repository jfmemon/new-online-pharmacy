import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import imageUpload from "../../assets/image_upload.svg"
import Swal from "sweetalert2";

const UploadPrescription = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const { user } = useContext(AuthContext);

    const handleShowImage = (event) => {
        setSelectedImage(event.target.value);
    }

    const handleRemoveImage = () => {
        setSelectedImage(null);
        const inputField = document.querySelector('input[name="image"]');
        if (inputField) {
            inputField.value = '';
        }
    }

    const handleImageUpload = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const number = form.number.value;
        const address = form.address.value;
        const image = form.image.value;
        console.log(image);
        const prescription = { fullName: name, email: email, phoneNumber: number, deliveryAddress: address, prescriptionImage: image, userEmail: user?.email }

        fetch('http://localhost:5000/upload', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(prescription)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire(
                        'Confirmed!',
                        'Your order has been placed. We will contact with you for further information. Thank you for buying from us.',
                        'success'
                    )
                    form.reset();
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
                                <span className="label-text">Prescription image URL</span>
                            </label>
                            <input onChange={handleShowImage} name='image' type="url" placeholder='https://www.google.com/ (public url)' className="input input-bordered w-[90%] bg-gray-200" required />
                        </div>
                        {
                            selectedImage && <div className="px-3">
                                <img className="w-64" src={selectedImage} alt="" />
                                <button className="btn btn-error my-2" onClick={handleRemoveImage}>Remove</button>
                            </div>
                        }
                        {/* <input className="my-2" name="image" type="url" placeholder="public url" onChange={handleShowImage} required /> */}
                    </div>
                    <button className="btn btn-warning m-3" type="submit">Upload</button>
                </form>
            </div>
        </div>
    );
};

export default UploadPrescription;
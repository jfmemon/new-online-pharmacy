import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../Context/AuthProvider";
import imageUpload from "../../assets/image_upload.svg"
import Swal from "sweetalert2";

const UploadPrescription = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const { user } = useContext(AuthContext);

    const handleImageUpload = async () => {
        const formData = new FormData();
        formData.append('myImage', selectedImage);
        formData.append('email', user.email);

        try {
            const response = await axios.post('http://localhost:5000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 200) {
                Swal.fire(
                    'Confirmed!',
                    'Your order has been placed. You will get your medicine in 3 days. Thank you for buying from us.',
                    'success'
                )
                setSelectedImage(null);
                // Handle success, e.g., display a success message
                // console.log('Prescription uploaded successfully');
            }
        } catch (error) {
            // Handle error, e.g., display an error message
            console.error('Prescription upload failed:', error);
            Swal.fire({
                position: 'top',
                icon: 'error',
                title: 'Oops...',
                text: `${error.message}`,
              })
        }
    };

    const handleImageChange = (event) => {
        setSelectedImage(event.target.files[0]);
    };

    return (
        <div>
            <div className="w-full md:flex items-center justify-center p-5 gap-10">
                <div className="py-3">
                    <img className="w-[600px]" src={imageUpload} alt="" />
                </div>
                <div className="p-3 bg-slate-100">
                    <h2 className="text-2xl font-semibold text-center py-5">You can order by sending us your verified prescription <span className="text-sm">(Only png, jpg and jpeg)</span></h2>
                    {selectedImage && (
                        <div>
                            <img
                                alt="not found"
                                width={"300px"}
                                src={URL.createObjectURL(selectedImage)}
                            />
                            <br />
                            <button className="btn btn-warning" onClick={() => setSelectedImage(null)}>Remove</button>
                        </div>
                    )}
                    <input className="my-2" type="file" accept="image/*" onChange={handleImageChange} />
                    <button className="btn btn-primary" onClick={handleImageUpload}>Upload</button>
                </div>
            </div>
        </div>
    );
};

export default UploadPrescription;
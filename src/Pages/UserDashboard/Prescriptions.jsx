import React from 'react';
import usePrescription from '../../Hooks/usePrescription';
import emptyOrder from '../../assets/empty_order.svg'
import { Link } from 'react-router-dom';

const Prescriptions = () => {
    const [prescription] = usePrescription();
    console.log(prescription);
    return (
        <div className='mx-auto'>
            <h3 className='text-xl font-bold text-indigo-500 px-5 pt-5 text-center'>... Prescription list ...</h3>
            {
                prescription.length == 0 ? <div className='w-full flex flex-col gap-3 items-center p-5'>
                    <img className='w-96 py-3' src={emptyOrder} alt="" />
                    <p className='text-rose-600 text-2xl font-semibold py-3 text-center'>You have not placed any order yet!</p>
                    <Link to="/uploadPrescription" className='btn btn-primary py-3 text-white'>Upload prescription</Link>
                </div> :
                    <div className='w-full p-2'>
                        <h3 className='text-xl text-indigo-500 font-semibold lg:py-3 px-4'>You have {prescription.length} orders</h3>
                        <div className='grid md:grid-cols-3 grid-cols-1 gap-3 p-3'>
                            {
                                prescription.map((order, idx) => <div className='border-2 border-indigo-500 p-5 rounded-md bg-slate-100'>
                                    <img className='w-64 mx-auto p-3' src={order.prescriptionImage} alt="" />
                                    <p className='font-semibold py-1 text-center'>Order no: <span className='text-rose-600 font-bold'>{idx + 1}</span></p>
                                    <p className='font-semibold py-1 text-center'>Customer name: <span className='text-rose-600 font-bold'>{order.fullName}</span></p>
                                    <p className='font-semibold py-1 text-center'>Phone number: <span className='text-rose-600 font-bold'>{order.phoneNumber}</span></p>
                                    <p className='font-semibold py-1 text-center'>Email: <span className='text-rose-600 font-bold'>{order.email}</span></p>
                                    <p className='font-semibold py-1 text-center'>Delivery address: <span className='text-rose-600 font-bold'>{order.deliveryAddress}</span></p>
                                    <p className='font-semibold py-1 text-center'>Payment type: <span className='text-rose-600 font-bold'>{order.paymentType}</span></p>
                                </div>)
                            }
                        </div>
                    </div>
            }
        </div>
    );
};

export default Prescriptions;
import React from 'react';
import useAllOrders from '../../Hooks/useAllOrders';
import useAllUsers from '../../Hooks/useAllUsers';
import useAllPrescriptions from '../../Hooks/useAllPrescriptions';
import useSexualWellness from '../../Hooks/useSexualWellness';
import useBirthControl from '../../Hooks/useBirthControl';
import useVitaminsAndSupplements from '../../Hooks/useVitaminsAndSupplements';
import useMedicalDevices from '../../Hooks/useMedicalDevices';
import usePersonalCare from '../../Hooks/usePersonalCare';
import useHealthAndWellness from '../../Hooks/useHealthAndWellness';
import useBabyCare from '../../Hooks/useBabyCare';

const AdminHome = () => {
    const [orders] = useAllOrders();
    const [users] = useAllUsers();
    const [prescriptions] = useAllPrescriptions();
    const [sexualWellness] = useSexualWellness();
    const [birthControl] = useBirthControl();
    const [vitaminsAndSupplements] = useVitaminsAndSupplements();
    const [medicalDevices] = useMedicalDevices();
    const [personalCare] = usePersonalCare();
    const [healthAndWellness] = useHealthAndWellness();
    const [babyCare] = useBabyCare();

    return (
        <div className='lg:px-10 w-full'>
            <h3 className='text-2xl pt-5 pl-5 font-semibold text-indigo-500'>Welcome to admin home.</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5'>
                <div className='w-full h-28 p-3 rounded-lg bg-emerald-200 relative'>
                    <h3 className='text-xl font-semibold text-white'>Total user</h3>
                    <h3 className='absolute bottom-3 right-5 text-5xl font-bold text-white'>{users.length}</h3>
                </div>
                <div className='w-full h-28 p-3 rounded-lg bg-rose-400 relative'>
                    <h3 className='text-xl font-semibold text-white'>Total order</h3>
                    <h3 className='absolute bottom-3 right-5 text-5xl font-bold text-white'>{orders.length}</h3>
                </div>
                <div className='w-full h-28 p-3 rounded-lg bg-lime-300 relative'>
                    <h3 className='text-xl font-semibold text-white'>Total prescription order</h3>
                    <h3 className='absolute bottom-3 right-5 text-5xl font-bold text-white'>{prescriptions.length}</h3>
                </div>
                <div className='w-full h-28 p-3 rounded-lg bg-pink-400 relative'>
                    <h3 className='text-xl font-semibold text-white'>Sexual wellness</h3>
                    <h3 className='absolute bottom-3 right-5 text-5xl font-bold text-white'>{sexualWellness.length}</h3>
                </div>
                <div className='w-full h-28 p-3 rounded-lg bg-orange-400 relative'>
                    <h3 className='text-xl font-semibold text-white'>Birth control</h3>
                    <h3 className='absolute bottom-3 right-5 text-5xl font-bold text-white'>{birthControl.length}</h3>
                </div>
                <div className='w-full h-28 p-3 rounded-lg bg-slate-400 relative'>
                    <h3 className='text-xl font-semibold text-white'>Vitamins and supplements</h3>
                    <h3 className='absolute bottom-3 right-5 text-5xl font-bold text-white'>{vitaminsAndSupplements.length}</h3>
                </div>
                <div className='w-full h-28 p-3 rounded-lg bg-green-400 relative'>
                    <h3 className='text-xl font-semibold text-white'>Medical devices</h3>
                    <h3 className='absolute bottom-3 right-5 text-5xl font-bold text-white'>{medicalDevices.length}</h3>
                </div>
                <div className='w-full h-28 p-3 rounded-lg bg-violet-400 relative'>
                    <h3 className='text-xl font-semibold text-white'>Personal care</h3>
                    <h3 className='absolute bottom-3 right-5 text-5xl font-bold text-white'>{personalCare.length}</h3>
                </div>
                <div className='w-full h-28 p-3 rounded-lg bg-fuchsia-400 relative'>
                    <h3 className='text-xl font-semibold text-white'>Health and wellness</h3>
                    <h3 className='absolute bottom-3 right-5 text-5xl font-bold text-white'>{healthAndWellness.length}</h3>
                </div>
                <div className='w-full h-28 p-3 rounded-lg bg-sky-300 relative'>
                    <h3 className='text-xl font-semibold text-white'>Baby care</h3>
                    <h3 className='absolute bottom-3 right-5 text-5xl font-bold text-white'>{babyCare.length}</h3>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;
import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAllPrescriptions = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: prescriptions = [], refetch } = useQuery(['prescriptions'], async () => {
        const res = await axiosSecure.get("/prescriptions");
        return res.data;
    })
    return [prescriptions, refetch];
};

export default useAllPrescriptions;
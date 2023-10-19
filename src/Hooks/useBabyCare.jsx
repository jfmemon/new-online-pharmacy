import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

const useBabyCare = () => {
    const { refetch, data: babyCare = [] } = useQuery({
        queryKey: ['babyCare'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/babyCare');
            return res.json();
        }
    })
    return [babyCare, refetch];
};

export default useBabyCare;
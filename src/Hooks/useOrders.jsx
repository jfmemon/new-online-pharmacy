import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const useOrders = () => {
    const { user } = useContext(AuthContext);

    const { refetch, data: orders = [] } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://online-pharmacy-server.vercel.app/orders?email=${user?.email}`)
            return res.json();
        },
    })

    return [orders, refetch];
};

export default useOrders;
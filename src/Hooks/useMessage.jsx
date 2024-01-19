import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const useMessage = () => {
    const { user } = useContext(AuthContext);

    const { refetch, data: messages = [] } = useQuery({
        queryKey: ['messages', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://online-pharmacy-server.vercel.app/contacts?email=${user?.email}`)
            return res.json();
        },
    })

    return [messages, refetch];
};

export default useMessage;
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAllMessages = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: allContacts = [], refetch } = useQuery(['allContacts'], async () => {
        const res = await axiosSecure.get('/allContacts')
        return res.data;
    })
    return [allContacts, refetch];
};

export default useAllMessages;
import { useQuery } from '@tanstack/react-query';

const useVitaminsAndSupplements = () => {
    const { refetch, data: vitaminsAndSupplements = [] } = useQuery({
        queryKey: ['vitaminsAndSupplements'],
        queryFn: async () => {
            const res = await fetch("https://online-pharmacy-server.vercel.app/vitaminsAndSupplements");
            return res.json();
        },
    })
    return [vitaminsAndSupplements, refetch]
};

export default useVitaminsAndSupplements;
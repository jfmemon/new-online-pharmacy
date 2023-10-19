import { useQuery } from '@tanstack/react-query';

const useVitaminsAndSupplements = () => {
    const { refetch, data: vitaminsAndSupplements = [] } = useQuery({
        queryKey: ['vitaminsAndSupplements'],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/vitaminsAndSupplements");
            return res.json();
        },
    })
    return [vitaminsAndSupplements, refetch]
};

export default useVitaminsAndSupplements;
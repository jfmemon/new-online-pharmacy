import { useQuery } from '@tanstack/react-query';

const useMedicalDevices = () => {
    const { refetch, data: medicalDevices = [] } = useQuery({
        queryKey: ['medicalDevices'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/medicalDevices');
            return res.json();
        }
    })
    return [medicalDevices, refetch];
};

export default useMedicalDevices;
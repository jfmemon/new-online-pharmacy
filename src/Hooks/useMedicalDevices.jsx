import { useQuery } from '@tanstack/react-query';

const useMedicalDevices = () => {
    const { refetch, data: medicalDevices = [] } = useQuery({
        queryKey: ['medicalDevices'],
        queryFn: async () => {
            const res = await fetch('https://online-pharmacy-server.vercel.app/medicalDevices');
            return res.json();
        }
    })
    return [medicalDevices, refetch];
};

export default useMedicalDevices;
import { useQuery } from '@tanstack/react-query';

const useBirthControl = () => {
    const { refetch, data: birthControl = [] } = useQuery({
        queryKey: ['birthControl'],
        queryFn: async () => {
            const res = await fetch("https://online-pharmacy-server.vercel.app/birthControl");
            return res.json();
        },
    })
    return [birthControl, refetch]
};

export default useBirthControl;
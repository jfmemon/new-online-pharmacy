import { useQuery } from '@tanstack/react-query';

const useSexualWellness = () => {
    const { refetch, data: sexualWellness = [] } = useQuery({
        queryKey: ['sexualWellness'],
        queryFn: async () => {
            const res = await fetch("https://online-pharmacy-server.vercel.app/sexualWellness");
            return res.json();
        }
    })
    return [sexualWellness, refetch];
};

export default useSexualWellness;
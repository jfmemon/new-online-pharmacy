import { useQuery } from '@tanstack/react-query';

const useSexualWellness = () => {
    const { refetch, data: sexualWellness = [] } = useQuery({
        queryKey: ['sexualWellness'],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/sexualWellness");
            return res.json();
        }
    })
    return [sexualWellness, refetch];
};

export default useSexualWellness;
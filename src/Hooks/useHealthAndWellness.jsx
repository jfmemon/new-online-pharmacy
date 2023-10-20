import { useQuery } from "@tanstack/react-query";

const useHealthAndWellness = () => {
    const { refetch, data: healthAndWellness = [] } = useQuery({
        queryKey: ['healthAndWellness'],
        queryFn: async () => {
            const res = await fetch('https://online-pharmacy-server.vercel.app/healthAndWellness');
            return res.json();
        }
    })

    return [healthAndWellness, refetch];
};

export default useHealthAndWellness;
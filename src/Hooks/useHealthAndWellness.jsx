import { useQuery } from "@tanstack/react-query";

const useHealthAndWellness = () => {
    const { refetch, data: healthAndWellness = [] } = useQuery({
        queryKey: ['healthAndWellness'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/healthAndWellness');
            return res.json();
        }
    })

    return [healthAndWellness, refetch];
};

export default useHealthAndWellness;
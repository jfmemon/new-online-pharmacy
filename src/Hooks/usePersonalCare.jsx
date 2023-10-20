import { useQuery } from "@tanstack/react-query";

const usePersonalCare = () => {
    const { refetch, data: personalCare = [] } = useQuery({
        queryKey: ['personalCare'],
        queryFn: async () => {
            const res = await fetch('https://online-pharmacy-server.vercel.app/personalCare');
            return res.json();
        }
    })

    return [personalCare, refetch];
};

export default usePersonalCare;
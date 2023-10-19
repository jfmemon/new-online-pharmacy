import { useQuery } from "@tanstack/react-query";

const usePersonalCare = () => {
    const { refetch, data: personalCare = [] } = useQuery({
        queryKey: ['personalCare'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/personalCare');
            return res.json();
        }
    })

    return [personalCare, refetch];
};

export default usePersonalCare;
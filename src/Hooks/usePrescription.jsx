import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const usePrescription = () => {
    const { user } = useContext(AuthContext);

    const { refetch, data: prescription = [] } = useQuery({
        queryKey: ['prescription', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/upload?email=${user?.email}`)
            return res.json();
        },
    })

    return [prescription, refetch];
};

export default usePrescription;
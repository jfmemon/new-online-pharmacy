import { useEffect, useState } from "react";

const usePersonalCare = () => {
    const [personalCare, setPersonalCare] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("http://localhost:5000/personalCare")
            .then(res => res.json())
            .then(data => {
                setPersonalCare(data);
                setLoading(false);
            })
    }, []);
    return [personalCare, loading];
};

export default usePersonalCare;
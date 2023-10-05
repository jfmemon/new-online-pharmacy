import { useEffect, useState } from 'react';

const useBabyCare = () => {
    const [babyCare, setBabyCare] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("http://localhost:5000/babyCare")
            .then(res => res.json())
            .then(data => {
                setBabyCare(data);
                setLoading(false);
            })
    }, []);
    return [babyCare, loading];
};

export default useBabyCare;
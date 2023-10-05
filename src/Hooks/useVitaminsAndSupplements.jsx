import { useEffect, useState } from 'react';

const useVitaminsAndSupplements = () => {
    const [vitaminsAndSupplements, setVitaminsAndSupplements] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("http://localhost:5000/vitaminsAndSupplements")
            .then(res => res.json())
            .then(data => {
                setVitaminsAndSupplements(data);
                setLoading(false);
            })
    }, []);
    return [vitaminsAndSupplements, loading];
};

export default useVitaminsAndSupplements;
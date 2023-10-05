import { useEffect, useState } from 'react';

const useHealthAndWellness = () => {
    const [healthAndWellness, setHealthAndWellness] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("http://localhost:5000/healthAndWellness")
            .then(res => res.json())
            .then(data => {
                setHealthAndWellness(data);
                setLoading(false);
            })
    }, []);
    return [healthAndWellness, loading];
};

export default useHealthAndWellness;
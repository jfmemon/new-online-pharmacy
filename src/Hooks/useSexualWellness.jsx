import { useEffect, useState } from 'react';

const useSexualWellness = () => {
    const [sexualWellness, setSexualWellness] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("http://localhost:5000/sexualWellness")
            .then(res => res.json())
            .then(data => {
                setSexualWellness(data);
                setLoading(false);
            })
    }, []);
    return [sexualWellness, loading];
};

export default useSexualWellness;
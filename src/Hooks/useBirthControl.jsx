import { useEffect, useState } from 'react';

const useBirthControl = () => {
    const [birthControl, setBirthControl] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("http://localhost:5000/birthControl")
            .then(res => res.json())
            .then(data => {
                setBirthControl(data);
                setLoading(false);
            })
    }, []);
    return [birthControl, loading];
};

export default useBirthControl;
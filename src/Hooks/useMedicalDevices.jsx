import { useEffect, useState } from 'react';

const useMedicalDevices = () => {
    const [medicalDevices, setMedicalDevices] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("http://localhost:5000/medicalDevices")
            .then(res => res.json())
            .then(data => {
                setMedicalDevices(data);
                setLoading(false);
            })
    }, []);
    return [medicalDevices, loading];
};

export default useMedicalDevices;
import { useEffect, useState } from 'react';

const useCondition = () => {
    const [conditionalItem, setConditionlItem] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("https://online-pharmacy-server.vercel.app/shopByCondition")
            .then(res => res.json())
            .then(data => {
                setConditionlItem(data);
                setLoading(false);
            })
    }, []);
    return [conditionalItem, loading];
};

export default useCondition;
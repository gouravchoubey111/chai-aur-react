import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://open.er-api.com/v6/latest/${currency}`)
            .then((res) => res.json())
            .then((res) => setData(res.conversion_rates))
            .catch((err) => console.error("API Error:", err));
    }, [currency]);

    return data;
}

export default useCurrencyInfo;

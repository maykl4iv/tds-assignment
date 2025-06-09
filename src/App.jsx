import { useEffect, useState, useCallback } from "react";
import { CurrenciesBox } from "./layouts/CurrenciesBox";
import { getCurrencies } from "./api/getCurrencies";
import { getConverted } from "./api/getConverted";
import { mapCurrencies } from "./utils/mapCurrencies";
import { useDebounce } from "./hooks/useDebounce";
import "./App.css";

function App() {
    const [amount, setAmount] = useState(0);
    const [currencies, setCurrencies] = useState([]);
    const [from, setFrom] = useState(null);
    const [to, setTo] = useState(null);
    const [converted, setConverted] = useState(0);

    useEffect(() => {
        (async () => {
            const data = await getCurrencies();

            const mappedData = mapCurrencies(data);

            if (mappedData) setCurrencies(mappedData);
        })();
    }, []);

    const handleConvert = useCallback(async () => {
        if (!from && !to && !amount) return;

        const data = await getConverted({ from, to, amount });
        const value = +data.value.toFixed(2);
        setConverted(value);
    }, [amount, from, to]);

    const debouncedHandleConvert = useDebounce(handleConvert, 500);

    useEffect(() => debouncedHandleConvert(), [debouncedHandleConvert]);

    const handleFromSelect = (option) => {
        setFrom(option);
    };

    const handleToSelect = (option) => {
        setTo(option);
    };

    const handleChange = (event) => {
        setAmount(+event.target.value);
    };

    return (
        <main>
            <div className="main__wrapper">
                <h1>Currencies app</h1>
                <CurrenciesBox
                    prefix="from"
                    selectedCurrency={from}
                    options={currencies}
                    onSelect={handleFromSelect}
                >
                    <input
                        value={amount}
                        onChange={handleChange}
                        className="currencies-input"
                        type="number"
                    />
                </CurrenciesBox>
                <CurrenciesBox
                    prefix="to"
                    selectedCurrency={to}
                    options={currencies}
                    onSelect={handleToSelect}
                >
                    <span>{converted}</span>
                </CurrenciesBox>
            </div>
        </main>
    );
}

export default App;

import { useRef, useEffect, useState } from "react";
import { CurrenciesBox } from "./layouts/CurrenciesBox";
import { getCurrencies } from "./api/getCurrencies";
import { getConverted } from "./api/getConverted";
import { mapCurrencies } from "./utils/mapCurrencies";
import "./App.css";

function App() {
    const ref = useRef(null);
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

    const handleFromSelect = (option) => {
        setFrom(option);
    };

    const handleToSelect = (option) => {
        setTo(option);
    };

    const handleConvert = async () => {
        const data = await getConverted({ from, to, amount: +ref.current.value });
        const value = +data.value.toFixed(2);
        setConverted(value);
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
                    <input ref={ref} className="currencies-input" type="number" />
                </CurrenciesBox>
                <CurrenciesBox
                    prefix="to"
                    selectedCurrency={to}
                    options={currencies}
                    onSelect={handleToSelect}
                >
                    <span>{converted}</span>
                </CurrenciesBox>
                <button onClick={handleConvert}>Convert</button>
            </div>
        </main>
    );
}

export default App;

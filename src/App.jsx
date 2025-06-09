import { useRef, useEffect, useState } from "react";
import { CurrenciesBox } from "./layouts/CurrenciesBox";
import { getCurrencies } from "./api/getCurrencies";
import { mapCurrencies } from "./utils/mapCurrencies";
import "./App.css";

function App() {
    const ref = useRef(null);
    const [currencies, setCurrencies] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await getCurrencies();

            const mappedData = mapCurrencies(data);

            if (mappedData) setCurrencies(mappedData);
        })();
    }, []);

    return (
        <main>
            <div className="main__wrapper">
                <h1>Currencies app</h1>
                <CurrenciesBox prefix="from" value={0} options={currencies} onSelect={() => {}}>
                    <input ref={ref} className="currencies-input" type="number" />
                </CurrenciesBox>
                <CurrenciesBox prefix="to" value={0} options={currencies} onSelect={() => {}}>
                    {0}
                </CurrenciesBox>
            </div>
        </main>
    );
}

export default App;

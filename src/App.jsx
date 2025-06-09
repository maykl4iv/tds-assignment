import { CurrenciesBox } from "./layouts/CurrenciesBox";
import "./App.css";
import { useRef } from "react";

function App() {
    const ref = useRef(null);

    return (
        <main>
            <div className="main__wrapper">
                <h1>Currencies app</h1>
                <CurrenciesBox
                    prefix="from"
                    value={0}
                    options={["Option 1", "Option 2", "Option 3"]}
                    onSelect={() => {}}
                >
                    <input ref={ref} className="currencies-input" type="number" />
                </CurrenciesBox>
                <CurrenciesBox
                    prefix="to"
                    value={0}
                    options={["currency 1", "currency 2", "currency 3"]}
                    onSelect={() => {}}
                >
                    {0}
                </CurrenciesBox>
            </div>
        </main>
    );
}

export default App;

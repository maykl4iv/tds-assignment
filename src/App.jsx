import { Dropdown } from "./components/Dropdown";
import "./App.css";

function App() {
    return (
        <main>
            <h1>Currencies app</h1>
            <Dropdown
                options={["Option 1", "Option 2", "Option 3"]}
                onSelect={() => {}}
                placeholder="Choose an option"
            />
            <Dropdown
                options={["currency 1", "currency 2", "currency 3"]}
                onSelect={() => {}}
                placeholder="Choose an option"
            />
        </main>
    );
}

export default App;

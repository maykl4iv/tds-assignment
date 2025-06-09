import { Dropdown } from "../../components/Dropdown";
import "./CurrenciesBox.css";

export const CurrenciesBox = ({ prefix, options, selectedCurrency, onSelect, children }) => {
    return (
        <div className="currencies-box__wrapper">
            <span className="currencies-box__prefix">{prefix}:</span>
            <Dropdown
                options={options}
                selected={selectedCurrency}
                onSelect={onSelect}
                placeholder="Choose an option"
            />
            <span className="currencies-box__divider">-</span>
            {children}
        </div>
    );
};

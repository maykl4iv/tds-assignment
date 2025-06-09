import { Dropdown } from "../../components/Dropdown";
import "./CurrenciesBox.css";

export const CurrenciesBox = ({ prefix, options, onSelect, children }) => {
    return (
        <div className="currencies-box__wrapper">
            <span className="currencies-box__prefix">{prefix}:</span>
            <Dropdown options={options} onSelect={onSelect} placeholder="Choose an option" />
            <span className="currencies-box__divider">-</span>
            {children}
        </div>
    );
};

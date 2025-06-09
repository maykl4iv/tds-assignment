import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function Dropdown({ options, onSelect, selected, placeholder = "Select..." }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (option) => {
        onSelect(option);
        setIsOpen(false);
    };

    return (
        <div style={{ position: "relative", width: "200px" }}>
            <div
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    border: "1px solid #ccc",
                    padding: "10px",
                    cursor: "pointer",
                    backgroundColor: "#fff",
                }}
            >
                {selected || placeholder}
            </div>

            {isOpen && (
                <ul
                    style={{
                        position: "absolute",
                        zIndex: 10,
                        top: "100%",
                        left: 0,
                        right: 0,
                        border: "1px solid #ccc",
                        backgroundColor: "#fff",
                        listStyle: "none",
                        margin: 0,
                        padding: 0,
                        maxHeight: "150px",
                        overflowY: "auto",
                    }}
                >
                    {options.map((option) => (
                        <li
                            key={uuidv4()}
                            onClick={() => handleSelect(option)}
                            style={{
                                padding: "10px",
                                cursor: "pointer",
                                borderBottom: "1px solid #eee",
                            }}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

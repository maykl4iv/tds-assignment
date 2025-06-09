import { useState } from "react";

export function Dropdown({ options, onSelect, placeholder = "Select..." }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(null);

    const handleSelect = (option) => {
        setSelected(option);
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
                            key={option}
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

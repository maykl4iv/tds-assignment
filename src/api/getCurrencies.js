import { CURRENCIES } from ".";

export const getCurrencies = async () => {
    try {
        const response = await fetch(CURRENCIES);

        if (!response.ok) {
            throw new Error(`Currency API error: ${response.status}`);
        }

        const data = await response.json();

        return data;
    } catch (error) {
        throw new Error(`Currency API error: ${error}`);
    }
};

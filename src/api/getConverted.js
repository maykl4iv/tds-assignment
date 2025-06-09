import { CONVERT } from ".";

export const getConverted = async ({ from, to, amount }) => {
    try {
        const response = await fetch(`${CONVERT}&from=${from}&to=${to}&amount=${amount}`);

        if (!response.ok) {
            throw new Error(`Convert API error: ${response.status}`);
        }

        const data = await response.json();

        return data;
    } catch (error) {
        throw new Error(`Convert API error: ${error}`);
    }
};

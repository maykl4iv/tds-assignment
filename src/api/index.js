const BASE_URL = "https://api.currencybeacon.com/v1/";
const AUTHORIZATION = `?api_key=${import.meta.env.VITE_API_KEY}`;

export const CURRENCIES = `${BASE_URL}currencies${AUTHORIZATION}`;
export const CONVERT = `${BASE_URL}convert${AUTHORIZATION}`;

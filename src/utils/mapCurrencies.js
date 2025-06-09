export const mapCurrencies = (currencies) => {
    if (!currencies) return null;

    return Object.values(currencies).map((currency) => currency.short_code);
};

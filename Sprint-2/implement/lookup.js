function createLookup(countryCurrencyPairs) {
  const map = new Map(countryCurrencyPairs);
  return Object.fromEntries(map);
}

module.exports = createLookup;

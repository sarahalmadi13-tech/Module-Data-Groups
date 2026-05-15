function parseQueryString(queryString) {
  const queryParams = {};
  // If the string is empty, return an empty object
  if (queryString.length === 0) {
    return queryParams;
  }
  // Split on & to get each key=value pair
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    // Find the FIRST = sign
    const equalIndex = pair.indexOf("=");
    // Everything before it is the key
    const key = pair.slice(0, equalIndex);
    // Everything after it is the value (even if it contains more =)
    const value = pair.slice(equalIndex + 1);

    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;

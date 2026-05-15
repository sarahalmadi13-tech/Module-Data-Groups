function contains(object, propertyName) {
  if (typeof object !== "object" || object === null) return false;
  if (Array.isArray(object)) {
    throw new Error("Invalid parameter");
  }
  return propertyName in object;
}

module.exports = contains;

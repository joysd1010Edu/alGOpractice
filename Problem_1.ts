const formatValue = <T>(value: T): T => {
  if (typeof value === "string") {
    return value.toUpperCase() as T;
  } else if (typeof value === "number") {
    return (value * 10) as T;
  } else if (typeof value === "boolean") {
    return !value as T;
  } else {
    return value;
  }
};

console.log(formatValue("hello"));
console.log(formatValue(5));
console.log(formatValue(true));

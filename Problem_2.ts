const Problem2_getLength = <T>(item: T): number => {
    // console.log(`Received item: ${typeof item}`);
    if (typeof item === "string") {
        return item.length;
    } else if (Array.isArray(item)) {
        return item.length;
    } else {
        throw new Error("Unsupported type");
    }
};

// console.log(getLength("typescript"));
// console.log(getLength([10, 20, 30, 40]));
// console.log(getLength({ first: 12 }));

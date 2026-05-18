const Problem7_getUniqueValues = <T>(array: T[], array2: T[]): T[] => {
  const uniqueSet = new Set<T>([...array, ...array2]);
  return Array.from(uniqueSet);
};

// const array1 = ['one', 'two', 'three', 'four'];
// const array2 = ['three', 'four', 'five', 'six'];
// console.log(getUniqueValues(array1, array2));
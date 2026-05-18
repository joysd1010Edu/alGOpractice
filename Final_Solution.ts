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

const getLength = <T>(item: T): number => {
  if (typeof item === "string") {
    return item.length;
  } else if (Array.isArray(item)) {
    return item.length;
  } else {
    throw new Error("Unsupported type");
  }
};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book): string => {
  const availability = book.isAvailable ? "Yes" : "No";
  return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`;
};

type PropsType = {
  title: string;
  rating: number;
};

const filterByRating = (items: PropsType[]): PropsType[] => {
  const CopyArry = [...items];
  return CopyArry.filter((item) => item.rating >= 4);
};


const getUniqueValues = <T>(array: T[], array2: T[]): T[] => {
  const uniqueSet = new Set<T>([...array, ...array2]);
  return Array.from(uniqueSet);
};

type product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (products: product[]): number => {
  return products.reduce((total, product) => {
    const itemTotal = product.price * product.quantity;
    const discountAmount = product.discount
      ? (itemTotal * product.discount) / 100
      : 0;
    return total + itemTotal - discountAmount;
  }, 0);
};

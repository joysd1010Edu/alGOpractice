type PropsType= {
    title: string;
    rating: number;
}

const filterByRating =  (items: PropsType[]): PropsType[]=> {
    const CopyArry = [...items] // for immutability of the original array now the copy of the array will be used
    return CopyArry.filter(item => item.rating >= 4);
};

const books: PropsType[] = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

// console.log(filterByRating(books));
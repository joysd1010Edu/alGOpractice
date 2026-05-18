type Problem4_PropsType= {
    title: string;
    rating: number;
}

const Problem4_filterByRating =  (items: PropsType[]): PropsType[]=> {
    const CopyArry = [...items] 
    return CopyArry.filter(item => item.rating >= 4);
};

const books: PropsType[] = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

// console.log(filterByRating(books));
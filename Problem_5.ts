type objectType = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const filterActiveUsers= (users: objectType[]): objectType[] => {
    const copyUsers = [...users]; 
    if (copyUsers.length === 0) {
        return [];
    }
    if (!copyUsers.every(user => 'isActive' in user)) {
        throw new Error("All objects must have an 'isActive' property");
    }
  return copyUsers.filter(user => user.isActive);
};

const users : objectType[] = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

// console.log((users));filterActiveUsers
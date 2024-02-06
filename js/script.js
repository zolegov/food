// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   console.log(key); // Ключ
//   console.log(book[key]); // Значення властивості з таким ключем
// }

// function countProps(object) {
//   //   return ;
//   console.log(Object.keys(object).length);
// }

// countProps({});
// countProps({ name: "Mango", age: 2 });

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   const sal = Object.values(salaries);
//   for (const sl of sal) {
//     totalSalary += sl;
//   }
//   return totalSalary;
// }

// countTotalSalary({});
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 });

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors);

// const books = [
//   { title: "The Last Kingdom", author: "Bernard Cornwell" },
//   { title: "Beside Still Waters", author: "Robert Sheckley" },
//   { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky" },
// ];

// const authorToSearchFor = "Robert Sheckley";
// console.log(authorToSearchFor);
// for (const book of books) {
//   if (book.author === authorToSearchFor) {
//     console.log(book);
//     console.log(book.title);
//     console.log(book.rating);
//   }
// }

// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//     for (const product of products) {

//       if (product.name === productName) {
//         console.log(product.price);
//       }
//     }
// }
// getProductPrice("Scaer");

// function getAllPropValues(propName) {

// }
// getAllPropValues("name");

// const books = [
//   { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
//   { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 6.8,
//   },
// ];

// const titles = [];

// for (const book of books) {
//   titles.push(book.title);
// }

// console.log(titles);

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// const propName = "name";
// console.log(propName);

// const arrs = [];
// for (const product of products) {
//   arrs.push(product.propName);
// }
// console.log(arrs);

// const bookShelf = {
//   books: ["The Last Kingdom", "The Mist"],
//   getBooks() {
//     console.log(this);
//   },
// };

// bookShelf.getBooks();
// {books: ["The Last Kingdom", "The Mist"], getBooks: f}
// const bookShelf = {
//   books: [
//     { title: "The Last Kingdom", rating: 8 },
//     { title: "The Mist", rating: 6 },
//   ],
//   getBooks() {
//     return this.books;
//   },
//   addBook(newBook) {
//     this.books.push(newBook);
//   },
//   getAverageRating() {
//     let totalRating = 0;
//     for (const book of this.books) {
//       totalRating += book.rating;
//     }
//     return totalRating/this.books.length;
//   },
// };

// bookShelf.addBook({ title: "Dream Guardian", rating: 9 });
// bookShelf.getAverageRating();
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   getTotalPrice() {
//     let total = 0;
//     for (const potion of potions) {
//       total += potion.price;
//     }
//     return total;
//   },
// };

//  atTheOldToad.getTotalPrice();
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//       }
//     }
//   },
// };

// function add(...args) {

//   let summ = 0;
//   for (let i = 0; i < args.length; i++) {

//     summ += args[i];
//   }
//   return summ;

// }
// add(32, 6, 13, 19, 8);

// function addOverNum(value, ...args) {
//   let sum = 0;
//   for (let i = 0; i < args.length; i++){
//     if (args[i] > value) {
//       sum += args[i];
//     }
//   }
//   console.log(sum);
// }
// addOverNum(20, 74, 11, 62, 46, 12, 36);

// function addOverNum(value, ...args) {
//   let sum = 0;
//   for (const arg of args) {
//     if (arg > value) {
//       sum += arg;
//     }
//   }
//   console.log(sum);
// }
// addOverNum(20, 74, 11, 62, 46, 12, 36);
// function getExtremeScores(scores) {
   
//   let obj = { best: Math.max(...scores), worst: Math.min(...scores) };
//   console.log(obj);

// }
// getExtremeScores([89, 64, 42, 17, 93, 51, 26]);


// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(bestScore, worstScore);

const first = { propA: 5, propB: 10, propC: 50 };
const second = { propC: 15, propD: 20 };

const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }


const fourth = { ...second, ...first };
console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }

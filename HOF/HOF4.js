let bookList = [ 
  {bookName : "XYZ", author : "rahul", year : 2004},
  {bookName : "ABC", author : "varun", year : 2014},
  {bookName : "EFG", author : "swathi", year : 2021},
  {bookName : "HIZ", author : "akash", year : 2009},
]

const newList = bookList.filter((book) => {
  return book.year >= 2010
})

const output = newList.map((book) => {
  return { ...book,
     author : book.author.toUpperCase()}
});

console.log(output);



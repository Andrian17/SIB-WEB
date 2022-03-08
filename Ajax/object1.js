const data = {
  error: false,
  message: "success",
  books: [
    {
      id: 1,
      title: "Laskar Pelangi",
      author: "Andrea Hirata",
    },
    {
      id: 2,
      title: "Filosofi Kopi",
      author: "Dewi Lestari",
    },
    {
      id: 3,
      title: "Clean Code",
      author: "Robert C Martin",
    },
  ],
};

data.books.forEach((e, i) => {
  console.log(`${i + 1}. ${e.title} (${e.author})`);
});

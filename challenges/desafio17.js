db.resumoProdutos.insertOne(
  {
    franquia: "Mc Donalds",
    totalProdutos: db.produtos.count({}),
  },
);
db.resumoProdutos.find(
  {},
  {
    _id: false,
    franquia: true,
    totalProdutos: true,
  },
);
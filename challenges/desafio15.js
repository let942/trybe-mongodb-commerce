db.produtos.updateMany(
  {},
  { $set: { avaliacao: 0 } },
);

db.produtos.updateMany(
  { tags: { $in: ["bovino"] } },
  { $inc: { avaliacao: 5 } },
);

db.produtos.updateMany(
  { ingredientes: { $nin: ["hamburguer"] } },
  { $inc: { avaliacao: 3 } },
);

db.produtos.find({},
  { _id: false, nome: true, avaliacao: true });
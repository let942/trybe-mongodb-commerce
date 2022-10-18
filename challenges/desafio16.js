db.produtos.updateMany(
  { nome: { $eq: "Big Mac" } },
  { $currentDate: { ultimaModificacao: true } },
);

db.produtos.find(
  { ultimaModificacao: { $exists: true } },
  { _id: false, nome: true },
);
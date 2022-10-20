db.produtos.updateMany(
  {},
  { $rename: { descricao: "descricaoSite" } }, false, true,
);
db.produtos.find({}, { _id: false, nome: true, descricaoSite: true });  
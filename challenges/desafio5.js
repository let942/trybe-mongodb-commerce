db.produtos.find({
  $or: [{ curtidas: { $eq: 36 } }, { vendas: { $eq: 85 } }]
},
  { _id: false, nome: true, curtidas: true, vendidos: true });
db.produtos.updateOne(
  {
    valoresNutricionais: {
      $elemMatch: {
        tipo: "sódio",
        percentual: {
          $gt: 40,
        },
      },
    },
  },
  {
    $push: {
      tags: {
        $each: ["muito sódio"],
      },
    },
  },
);
db.produtos.find({}, { nome: true, tags: true, _id: false });
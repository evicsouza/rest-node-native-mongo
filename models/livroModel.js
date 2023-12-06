const { ObjectId } = require('mongodb');

function criarLivro(nome, autor, lancamento, nota) {
  return {
    nome,
    autor,
    lancamento,
    nota,
  };
}

function criarLivroComId(id, nome, autor, lancamento, nota) {
  return {
    _id: ObjectId(id),
    nome,
    autor,
    lancamento,
    nota,
  };
}

module.exports = { criarLivro, criarLivroComId };

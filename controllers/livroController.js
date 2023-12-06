const { criarLivro, criarLivroComId } = require('../models/livroModel');
const { getClient } = require('../database/database');
const { ObjectId } = require('mongodb');

async function obterTodosLivros() {
  const client = getClient();
  const database = client.db('livraria');
  const collection = database.collection('livros');

  const livros = await collection.find({}).toArray();
  return livros;
}

async function obterLivroPorId(id) {
  const client = getClient();
  const database = client.db('livraria');
  const collection = database.collection('livros');

  const livro = await collection.findOne({ _id: new ObjectId(id) });
  return livro;
}

async function criarNovoLivro(nome, autor, lancamento, nota) {
  const client = getClient();
  const database = client.db('livraria');
  const collection = database.collection('livros');

  const novoLivro = criarLivro(nome, autor, lancamento, nota);
  const resultado = await collection.insertOne(novoLivro);

  return { message: 'Livro criado com sucesso.', livroId: resultado.insertedId };
}

async function atualizarLivroPorId(id, nome, autor, lancamento, nota) {
  const client = getClient();
  const database = client.db('livraria');
  const collection = database.collection('livros');

  const livroAtualizado = criarLivroComId(id, nome, autor, lancamento, nota);
  const resultado = await collection.updateOne({ _id: new ObjectId(id) }, { $set: livroAtualizado });

  if (resultado.matchedCount > 0) {
    return { message: 'Livro atualizado com sucesso.' };
  } else {
    return { status: 404, message: 'Livro não encontrado.' };
  }
}

async function excluirLivroPorId(id) {
  const client = getClient();
  const database = client.db('livraria');
  const collection = database.collection('livros');

  const resultado = await collection.deleteOne({ _id: new ObjectId(id) });

  if (resultado.deletedCount > 0) {
    return { message: 'Livro removido com sucesso.' };
  } else {
    return { status: 404, message: 'Livro não encontrado.' };
  }
}

module.exports = {
  obterTodosLivros,
  obterLivroPorId,
  criarNovoLivro,
  atualizarLivroPorId,
  excluirLivroPorId,
};

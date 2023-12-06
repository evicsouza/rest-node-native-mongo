const express = require('express');
const livroController = require('../controllers/livroController');

const router = express.Router();

router.get('/livros', async (req, res) => {
  const livros = await livroController.obterTodosLivros();
  res.json(livros);
});

router.get('/livros/:id', async (req, res) => {
  const livro = await livroController.obterLivroPorId(req.params.id);
  res.json(livro);
});

router.post('/livros', async (req, res) => {
  const { nome, autor, lancamento, nota } = req.body;
  const resultado = await livroController.criarNovoLivro(nome, autor, lancamento, nota);
  res.status(201).json(resultado);
});

router.put('/livros/:id', async (req, res) => {
  const { nome, autor, lancamento, nota } = req.body;
  const resultado = await livroController.atualizarLivroPorId(req.params.id, nome, autor, lancamento, nota);
  res.json(resultado);
});

router.delete('/livros/:id', async (req, res) => {
  const resultado = await livroController.excluirLivroPorId(req.params.id);
  res.json(resultado);
});

module.exports = router;

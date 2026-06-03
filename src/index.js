const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

//Criar uma massa de dados com 5 produtos fictícios contendo id, price e title
const products = [
  { id: 1, price: 100, title: 'Produto 1' },
  { id: 2, price: 200, title: 'Produto 2' },
  { id: 3, price: 300, title: 'Produto 3' },
  { id: 4, price: 400, title: 'Produto 4' },
  { id: 5, price: 500, title: 'Produto 5' }
];

// Middleware to parse JSON
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API is running successfully' });
});

app.get('/products', (req, res) => {
  res.status(200).json(products);
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
    console.log(`📊 Health check: http://localhost:${PORT}/health`);
  });
}

module.exports = app;
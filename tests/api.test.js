const request = require('supertest');
const app = require('../src/index');

describe('API Endpoints', () => {
  describe('GET /', () => {
    test('should return welcome message with endpoints info', async () => {
      const response = await request(app)
        .get('/')
        .expect(200);

      expect(response.body).toEqual({
        message: 'API is running successfully'
      });
    });
  });

  describe('GET /products', () => {
    test('should return all products', async () => {
      const response = await request(app)
        .get('/products')
        .expect(200);

      expect(response.body).toEqual([
        { id: 1, price: 100, title: 'Produto 1' },
        { id: 2, price: 200, title: 'Produto 2' },
        { id: 3, price: 300, title: 'Produto 3' },
        { id: 4, price: 400, title: 'Produto 4' },
        { id: 5, price: 500, title: 'Produto 5' }
      ]);
    });
  });
});
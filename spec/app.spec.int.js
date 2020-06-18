const request = require('supertest');
const app = require('../src/server');

describe('Web Scraper Heathcheck', () => {
  test('Heathcheck endpoint should return 200', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
  });
});

describe('Web fetch Swagger', () => {
  test('Swagger API Docs endpoint should return 200', async () => {
    const response = await request(app).get('/api-docs/');
    expect(response.statusCode).toBe(200);
  });
  test('Swagger JSON API Docs endpoint should return 200', async () => {
    const response = await request(app).get('/api-docs/json');
    expect(response.statusCode).toBe(200);
  });
});
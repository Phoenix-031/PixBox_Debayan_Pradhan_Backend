import dotenv from 'dotenv';


dotenv.config ({
  path: '.env.development'
})

import request from 'supertest';
import app from '../src/app';


import templateJson from '../assets/template.json';
import templateSchema from '../src/validations/template.validation';



describe('GET /api/v1/main', () => {

    it('should return 200', async () => {
        const response = await request(app).get('/api/v1/main/getTemplate');
        expect(response.status).toBe(200);
    });

  test('Valid JSON Data', () => {
    expect(() => {
      templateSchema.parse(templateJson);
    }).not.toThrow();
  });
});
const request = require('supertest')
const app = require('../index')

describe('Math API Test' , () => {
    test('GET/should test msg', async() => { 
        const res = await request(app).get('/')
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe('Dhruva Maheshwari')

     })
})
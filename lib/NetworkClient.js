const axios = require('axios');
function getInstance() {
  let instance = axios.create({
    baseURL: 'http://localhost:4000/api/',
    headers: {
      'x-api-key':
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibnJhamFuMDY2IiwicHdkIjoia2F2aW5AMTIzIiwiaWF0IjoxNTg5MzU3MDc5fQ.smOlBfuK2eaAXb3nYA-j58yuA62yNMAX0f9TE_v52Uo',
    },
  });
  return instance;
}

module.exports = {
  getInstance,
};

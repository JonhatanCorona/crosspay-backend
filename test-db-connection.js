// test-db-connection.js
const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

client.connect()
  .then(() => {
    console.log('✅ Conectado a la base de datos correctamente!');
    return client.end();
  })
  .catch((err) => {
    console.error('❌ Error de conexión:', err);
  });

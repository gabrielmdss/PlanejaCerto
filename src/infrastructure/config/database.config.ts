import { Pool } from "pg";

const conn = new Pool({
  user: process.env.DATABASE_USERNAME,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  port: Number(process.env.DATABASE_PORT),
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000,
  ssl: {
    rejectUnauthorized: false,  
  },
});

async function testConnection() {
  try {
    const client = await conn.connect();
    console.log("Conexão bem-sucedida!");
    const res = await client.query("SELECT NOW()");  
    console.log("Hora do servidor:", res.rows[0]);
    client.release();
  } catch (err: any) {
    console.error("Erro ao conectar ao banco de dados:", err);
    console.error(err.stack);
  }
}

testConnection();

export default conn;
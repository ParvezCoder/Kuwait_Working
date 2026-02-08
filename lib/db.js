import sql from "mssql";
import dotenv from "dotenv";

dotenv.config();

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  port: parseInt(process.env.DB_PORT) || 1433,
  database: process.env.DB_NAME,
  options: {
    encrypt: process.env.DB_ENCRYPT === "true",
    trustServerCertificate: process.env.DB_TRUST_CERT === "true",
    enableArithAbort: true,
  },
  connectionTimeout: 30000,
  requestTimeout: 30000, 
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  }
};

let pool;

export async function getDBConnection() {
  try {
    if (!pool || !pool.connected) {
      pool = await sql.connect(config);
      console.log("Connected to SQL Server");
    }
    return pool;  
  } catch (error) {
    console.error("Database connection error:", error);
    throw error;
  }
}

export async function queryDB(query, params = {}) {
  try {
    const pool = await getDBConnection();
    const request = pool.request();
    
    Object.keys(params).forEach(key => {
      const value = params[key];
      if (typeof value === 'number') {
        request.input(key, sql.Int, value);
      } else {
        request.input(key, sql.VarChar, value);
      }
    });
    
    const result = await request.query(query);
    return result;
  } catch (error) {
    console.error("Database query error:", error);
    throw error;
  }
}
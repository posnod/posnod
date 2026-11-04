import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import envConfig from '../config/env';
import * as schema from './schema';

// Membuat pool koneksi MySQL
const poolConnection = mysql.createPool({
  uri: envConfig.databaseUrl,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Inisialisasi instance Drizzle ORM dengan skema
export const db = drizzle(poolConnection, { schema, mode: 'default' });
export default db;

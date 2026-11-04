import dotenv from 'dotenv';

dotenv.config();

interface EnvConfig {
  port: number;
  databaseUrl: string;
}

const envConfig: EnvConfig = {
  port: Number(process.env.PORT) || 3000,
  databaseUrl: process.env.DATABASE_URL || "mysql://root:yourPassword@localhost:3306/name_database"
};

export default envConfig;

import dotenv from "dotenv"

dotenv.config()

interface EnvConfig {
  port: number;
}

const envConfig: EnvConfig = {
  port: Number(process.env.PORT) || 3000
}

export default envConfig
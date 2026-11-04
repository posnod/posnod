import app from "./app";
import envConfig from "./config/env";

const port: number = envConfig.port;

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});

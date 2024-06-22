import dotenv from 'dotenv';

dotenv.config();

export const env = {
  dbHost: process.env.DB_HOST!,
  dbUser: process.env.DB_USER!,
  dbPass: process.env.DB_PASS!,
  dbName: process.env.DB_NAME!,
  jwtSecret: process.env.JWT_SECRET!,
  port: process.env.PORT || 3000,
};

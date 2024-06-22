import { Sequelize } from 'sequelize';
import { env } from './env';

const sequelize = new Sequelize(
  env.dbName,
  env.dbUser,
  env.dbPass,
  {
    host: env.dbHost,
    dialect: 'postgres',
  }
);

export default sequelize;
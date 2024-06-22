// src/common/initialize.ts
import sequelize from './sequelize';
import User from '../auth/domain/models/user';
import bcrypt from 'bcryptjs';
import Product from '../products/domain/models/product';
import Favorite from '../products/domain/models/favorite';

const initializeDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    const password = await bcrypt.hash('password', 10);

    const user = await User.create({
      email: 'admin@sistemas.com',
      name: 'admin',
      password,
    });

    const product = await Product.bulkCreate([
      {description: "Producto 1"},
      {description: "Producto 2"},
      {description: "Producto 3"},
      {description: "Producto 4"},
      {description: "Producto 5"},
      {description: "Producto 6"},
      {description: "Producto 7"},
    ]);

    await Favorite.create({
      userId:user.id,
      productId: product[0].id,
    })
    
    console.log('iniciar baase de datos');
  } catch (error) {
    console.error('Error', error);
  }
};

export default initializeDatabase;

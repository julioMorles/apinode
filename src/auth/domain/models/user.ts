import { Model, DataTypes } from 'sequelize';
import sequelize from '../../../common/sequelize';
import Product from '../../../products/domain/models/product';
import Favorite from '../../../products/domain/models/favorite';

class User extends Model {
  public id!: number;
  public email!: string;
  public name!: string;
  public password!: string;
  public readonly favorites?: Product[];
}

User.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'user',
});



export default User;

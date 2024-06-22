import { Model, DataTypes } from "sequelize";
import sequelize from "../../../common/sequelize";
import Favorite from "./favorite";
import User from "../../../auth/domain/models/user";

class Product extends Model {
  public id!: number;
  public description!: string;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "product",
  }
);

export default Product;

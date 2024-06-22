import { Model, DataTypes } from "sequelize";
import sequelize from "../../../common/sequelize";
import User from "../../../auth/domain/models/user";
import Product from "../models/product";

class Favorite extends Model {
  public userId!: number;
  public productId!: number;
  public readonly product?: Product;
}

Favorite.init(
  {
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: User,
        key: "id",
      },
      primaryKey: true,
    },
    productId: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: Product,
        key: "id",
      },
      primaryKey: true,
    },
  },
  {
    sequelize,
    modelName: "favorite",
  }
);

Favorite.belongsTo(User, {
  foreignKey: "userId",
});

Favorite.belongsTo(Product, {
  foreignKey: "productId",
});

Product.belongsToMany(User, { through: Favorite, foreignKey: "productId" });
User.belongsToMany(Product, { through: Favorite, foreignKey: "userId" });

export default Favorite;

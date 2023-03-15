import { DataTypes, Model, Optional } from "sequelize";
import connection from "../../config/dbConnect";

interface ProductAttributes {
  id?: number;
  name?: string;
  category?: string;
  imageUrl?: string;
  price?: number;

  createdAt?: Date;
  updatedAt?: Date;
}

export interface ProductInput extends Optional<ProductAttributes, "id"> {}
export interface ProductOutput extends Required<ProductAttributes> {}

class Product
  extends Model<ProductAttributes, ProductInput>
  implements ProductAttributes
{
  public id!: number;
  public name!: string;
  public category!: string;
  public imageUrl!: string;
  public price!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Product.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    category: { allowNull: false, type: DataTypes.STRING },
    imageUrl: { allowNull: false, type: DataTypes.STRING },
    price: { allowNull: false, type: DataTypes.FLOAT },
  },
  { timestamps: true,sequelize: connection, underscored: false }
);

export default Product;

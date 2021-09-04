const {DataTypes} = require('sequelize');

// Destination row
const BlogAsRow = {
  mongo_id: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  title: {
    type: DataTypes.STRING
  },
  author: {
      type: DataTypes.STRING
  },
  body: {
  type: DataTypes.STRING
  },
};

module.exports = BlogAsRow;

'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Связь: статья имеет много комментариев
      Article.hasMany(models.Comment, {
        foreignKey: 'articleId',
        as: 'comments',
        onDelete: 'CASCADE', // Опционально: при удалении статьи удаляются все её комментарии
      });
    }
  }

  Article.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Article',
  });

  return Article;
};

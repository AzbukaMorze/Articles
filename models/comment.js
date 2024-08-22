'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Связь: каждый комментарий принадлежит одной статье
      Comment.belongsTo(models.Article, {
        foreignKey: 'articleId',
        as: 'article',
        onDelete: 'CASCADE', // Опционально: при удалении статьи удаляются все её комментарии
      });
    }
  }

  Comment.init({
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    articleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Articles', // Имя модели, к которой привязан внешний ключ
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Comment',
  });

  return Comment;
};

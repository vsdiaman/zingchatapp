// models/message.js
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Message.associate = models => {
    Message.belongsTo(models.User, { foreignKey: 'userId' });
  };

  return Message;
};

module.exports = (sequelize, DataTypes) => {
  const chatlog = sequelize.define("chatlog", {
    messageId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // autoIncrement: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    chatbotResponse: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    msgText: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    createdAt:'time',
    updatedAt:false,
  });
  chatlog.removeAttribute('id');
  return chatlog;
};

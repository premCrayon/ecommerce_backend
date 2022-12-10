module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("payment_method", [
      {
        id: "1",
        method: "Online",
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "2",
        method: "Cash on delivery",
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("payment_method", null, {});
  },
};

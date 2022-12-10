module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("payment_status", [
      {
        id: "1",
        name: "Pending",
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "2",
        name: "InProgress",
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "3",
        name: "Paid",
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("payment_status", null, {});
  },
};

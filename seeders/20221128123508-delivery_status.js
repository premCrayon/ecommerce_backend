module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("delivery_status", [
      {
        id: "1",
        name: "Booked",
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "2",
        name: "Dispatched",
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "3",
        name: "Deliverd",
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("delivery_status", null, {});
  },
};

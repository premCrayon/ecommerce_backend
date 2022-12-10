module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("categoty_master", [
      {
        id: "1",
        name: "Electronics",
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "2",
        name: "Cloths",
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "3",
        name: "Cosmetics",
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("categoty_master", null, {});
  },
};

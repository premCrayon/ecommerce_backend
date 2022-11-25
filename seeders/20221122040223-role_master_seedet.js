'use strict';

/** @type {import('sequelize-cli').Migration} */


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('role_master', [{
      name:"Customer",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name:"Sales",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name:"Manager",
      created_at: new Date(),
      updated_at: new Date()
    }
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('role_master', null, {});
  }
};
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'admin@gmail.com',
        password: '123456',
        firstName: 'John',
        lastName: 'Doe',
        address: 'USA',
        phoneNumber: '0342334234',
        gender: '1',
        image: 'fasfaf',
        roleId: 'R1',
        positionId: 'ROLE',

        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

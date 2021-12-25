'use strict';
const brcypt = require("bcrypt")
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    // password for each user is 'testing'
   const salt = await brcypt.genSalt(10)
   const hashed = await brcypt.hash("testing", salt)  
   Promise.all([
     queryInterface.bulkInsert('users',[{
       name: "Bayu",
       email: "bayu@email.com",
       npp: 12345,
       npp_supervisor: 11111,
       password: hashed,
       createdAt: new Date(),
       updatedAt: new Date()
     },{
      name: "Ahmad",
      email: "ahmad@email.com",
      npp: 12346,
      npp_supervisor: 11112,
      password: hashed,
      createdAt: new Date(),
      updatedAt: new Date()
      },
     {
      name: "Supervisor",
      email: "spv@email.com",
      npp: 11111,
      password: hashed,
      createdAt: new Date(),
      updatedAt: new Date()
     },{
      name: "Supervisor2",
      email: "spv2@email.com",
      npp: 11112,
      password: hashed,
      createdAt: new Date(),
      updatedAt: new Date()
     }
    ])
   ])
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

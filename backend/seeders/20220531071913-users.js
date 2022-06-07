'use strict';
const bcrypt=require("bcrypt");
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      name: 'Radhika',
      age: 24,
      skills:"c,python,java",
      email:"radhika@gmail.com",
      mobile: '9087654908',
      password: bcrypt.hashSync('radhika@123',5),
      gdo:"GDO1",
      role:"Employee",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Pushpa',
      age: 23,
      skills:"c,html,css",
      email:"pushpa@gmail.com",
      mobile: '6757654908',
      password: bcrypt.hashSync('pushpa@123',5),
      gdo:"GDO1",
      role:"Employee",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    , {
      name: 'Amar',
      age: 25,
      skills:"python,html,css",
      email:"amar@gmail.com",
      mobile: '6759004908',
      password: bcrypt.hashSync('amar@123',5),
      gdo:"GDO2",
      role:"Employee",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    , {
      name: 'Vikram',
      age: 27,
      skills:"c,java",
      email:"vikram@gmail.com",
      mobile: '6757654006',
      password: bcrypt.hashSync('vikram@123',5),
      gdo:"GDO2",
      role:"Employee",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    , {
      name: 'Prema',
      age: 23,
      skills:"c,daa,ds",
      email:"prema@gmail.com",
      mobile: '7807654908',
      password: bcrypt.hashSync('prema@123',5),
      gdo:"GDO3",
      role:"Employee",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    , {
      name: 'Praneetha',
      age: 21,
      skills:"os,ds,daa",
      email:"praneetha@gmail.com",
      mobile: '9062654908',
      password: bcrypt.hashSync('praneetha@123',5),
      gdo:"GDO3",
      role:"Employee",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    , {
      name: 'Anu',
      age: 23,
      skills:"python,java",
      email:"anu@gmail.com",
      mobile: '6751004908',
      password: bcrypt.hashSync('anu@123',5),
      gdo:"GDO4",
      role:"Employee",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    , {
      name: 'Vikranth',
      age: 22,
      skills:"html,css,js",
      email:"vikranth@gmail.com",
      mobile: '6757651206',
      password: bcrypt.hashSync('vikranth@123',5),
      gdo:"GDO4",
      role:"Employee",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    , {
      name: 'Sreya',
      age: 28,
      skills:"react,node,express",
      email:"sreya@gmail.com",
      mobile: '9087004908',
      password: bcrypt.hashSync('sreya@123',5),
      gdo:"GDO1",
      role:"Admin",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    , {
      name: 'Prem',
      age: 29,
      skills:"node,sequelize,react",
      email:"prem@gmail.com",
      mobile: '8760921390',
      password: bcrypt.hashSync('prem@123',5),
      gdo:"GDO2",
      role:"Admin",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    , {
      name: 'Sri',
      age: 27,
      skills:"node,sequelize",
      email:"sri@gmail.com",
      mobile: '6757091230',
      password: bcrypt.hashSync('sri@123',5),
      gdo:"GDO3",
      role:"Admin",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    , {
      name: 'Priya',
      age: 26,
      skills:"express,react",
      email:"priya@gmail.com",
      mobile: '7650912409',
      password: bcrypt.hashSync('priya@123',5),
      gdo:"GDO4",
      role:"Admin",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    , {
      name: 'Alam',
      age: 27,
      skills:"express,react,node,sequelize",
      email:"alam@gmail.com",
      mobile: '7650912409',
      password: bcrypt.hashSync('alam@123',5),
      gdo:"All",
      role:"SAdmin",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ]);
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};

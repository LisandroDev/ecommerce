'use strict';

const productData = [
  {
    name: "Nike Air",
    price: 109.95,
    category: "shoes",
    imageUrl: "/images/airNike",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Kiikii Shirt",
    price: 22,
    category: "shirt",
    imageUrl: "/images/animeShirt",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Leave the Road Shirt",
    price: 20,
    category: "shirt",
    imageUrl: "/images/leaveTheRoadShirt",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Adidas classic",
    price: 92,
    category: "shoes",
    imageUrl: "/images/retroShoes",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Beans Hoodie",
    price: 24.5,
    category: "hoodies",
    imageUrl: "/images/beansHoodie",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Nike Air Brown",
    price: 110,
    category: "shoes",
    imageUrl: "/images/brownNikeAir",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Just Country Dress",
    price: 49.99,
    category: "dresses",
    imageUrl: "/images/countryDress",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "C Shirt",
    price: 23.32,
    category: "shirt",
    imageUrl: "/images/cShirt",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Exploring Life Hoodie",
    price: 49.99,
    category: "hoodies",
    imageUrl: "/images/exploringLifeHoodie",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Jean Aene",
    price: 52.30,
    category: "jeans",
    imageUrl: "/images/jeansAene",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Nike RS",
    price: 92.30,
    category: "shoes",
    imageUrl: "/images/nikerRs",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Nike Sport",
    price: 59.99,
    category: "shoes",
    imageUrl: "/images/nikeSportShoes",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "White Shirt",
    price: 29.33,
    category: "shirt",
    imageUrl: "/images/whiteShirt",
    createdAt: new Date(),
    updatedAt: new Date()
  },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Products', productData, {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Products', null, {})
  }
};

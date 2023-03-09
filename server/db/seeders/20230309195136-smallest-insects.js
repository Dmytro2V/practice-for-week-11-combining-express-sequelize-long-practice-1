'use strict';

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
    await queryInterface.bulkInsert('Insects', [
      {
        name: 'Western Pygmy Blue Butterfly',
        description:"order of Lepidopterous insects",
        territory: 'North America and as far west as Hawaii and the middle east',
        fact: 'The smallest member of the butterfly family is thought to be the pygmy blue butterfly (Brephidium exilis)',
        millimeters: 12
      },
      {
        name: 'Patu Digua Spider',
        description:"spider",
        territory: ' around the Rio Digua river near the El Queremal, Valle del Cauca region of northern Colombia',
        fact: 'Generally, male spiders are smaller than the females.      ',
        millimeters: 0.3
      },
      {
        name: 'Scarlet Dwarf Dragonfly',
        description:"order of Lepidopterous insects",
        territory: 'North America and as far west as Hawaii and the middle east',
        fact: 'The smallest member of the butterfly family is thought to be the pygmy blue butterfly (Brephidium exilis)',
        millimeters: 20
      },

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Insects', 
       {name:['Western Pygmy Blue Butterfly', 'Patu Digua Spider', 'Scarlet Dwarf Dragonfly']

      });
  }
};

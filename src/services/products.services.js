const products = [
  {
    id: 1,
    type: "esfe",
    name: "Coliflor",
    price: 10,
    img: "coliflor.jpg",
  },
  {
    id: 2,
    type: "32r",
    name: "Papa spunta",
    price: 15,
    img: "papa_spunta.jpg",
  },
  {
    id: 3,
    type: "sfs",
    name: "Puerro",
    price: 15,
    img: "puerro.jpg",
  },
];

const getProducts = () => {
  return products;
};

export default { getProducts };

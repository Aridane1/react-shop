const products = [
  {
    id: 1,
    type: "",
    name: "Coliflor",
    price: 1.25,
    img: "coliflor.jpg",
  },
  {
    id: 2,
    type: "",
    name: "Papa spunta",
    price: 1.15,
    img: "papa-spunta.jpg",
  },
  {
    id: 3,
    type: "",
    name: "Puerro",
    price: 1,
    img: "puerro.jpg",
  },  {
    id: 4,
    type: "",
    name: "Pimiento verde",
    price: 0.95,
    img: "pimiento-verde.jpg",
  },
  {
    id: 5,
    type: "",
    name: "Pimiento rojo",
    price: 1.15,
    img: "pimiento-rojo.jpg",
  },
  {
    id: 6,
    type: "",
    name: "Col roja",
    price: 1.3,
    img: "col-roja.jpg",
  },
  
];

const getProducts = () => {
  return products;
};

export default { getProducts };

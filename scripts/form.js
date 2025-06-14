const products = [
  { id: "fvm234", name: "Flexi Vacuum Mop" },
  { id: "wmx123", name: "WaterMax Shower" },
  { id: "eco999", name: "EcoClean Blender" },
  { id: "bsk432", name: "BasketPro Organizer" }
];

const selectElement = document.getElementById("productName");

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  selectElement.appendChild(option);
});

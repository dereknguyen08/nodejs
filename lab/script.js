const carForm = document.getElementById("carForm");
const carList = document.getElementById("carList");
const totalPriceSpan = document.getElementById("totalPrice");
const highestPriceCar = document.getElementById("highestPriceCar");

let cars = [];

carForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const model = document.getElementById("model").value;
  const year = document.getElementById("year").value;
  const price = document.getElementById("price").value;

  const car = { name, model, year, price };
  cars.push(car);

  // IMMEDIATELY DISPLAY RESULTS:
  displayCars();
  calculateTotalPrice();
  findCarWithHighestPrice();

  // Clear the form fields
  carForm.reset();
});

function displayCars() {
  carList.innerHTML = "";
  cars.forEach((car) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${car.name} - ${car.model} (${car.year}) - $${car.price}`;
    carList.appendChild(listItem);
  });
}

function calculateTotalPrice() {
  let totalPrice = 0;
  cars.forEach((car) => {
    if (car.price) {
      totalPrice += parseFloat(car.price);  // Convert price to a floating-point number
    }
  });
  totalPriceSpan.textContent = totalPrice.toString();  // Update the total price display
}

function findCarWithHighestPrice() {
  let highestPricedCar = cars[0];
  for (let i = 1; i < cars.length; i++) {
    if (cars[i].price > highestPricedCar.price) {
      highestPricedCar = cars[i];
    }
  }
  highestPriceCar.textContent = `Model: ${highestPricedCar.model}, Year: ${highestPricedCar.year}`;  // Update the highest-priced car display
}

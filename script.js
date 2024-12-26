const carList = [];
const carName = document.querySelector("#name");
const carModel = document.querySelector("#model");
const carYear = document.querySelector("#year");
const carPrice = document.querySelector("#price");
const addToListBtn = document.querySelector("#addButton");
const carListUi = document.querySelector("#carList");
const carForm = document.getElementById("carForm");
const listResetBtn = document.querySelector("#resetButton");

addToListBtn.addEventListener("click", addToList);
listResetBtn.addEventListener("click", () => {
    carList.length = 0;
    listUi();
});

function addToList() {
    const carNameValue = carName.value;
    const carModelValue = carModel.value;
    const carYearValue = carYear.value;
    const carPriceValue = carPrice.value;

    // Проверяем, что все поля заполнены
    if (carNameValue === "" || carModelValue === "" || carYearValue === "" || carPriceValue === "") {
        alert("Заполните все поля");
        return;
    }

    const car = {
        name: carNameValue,
        model: carModelValue,
        year: carYearValue,
        price: carPriceValue,
    };

    carList.push(car);
    listUi();
    carForm.reset();
}

function listUi() {
    carListUi.innerHTML = "";
    carList.forEach(car => {
        const li = document.createElement("li");
        li.textContent = `${car.name} - ${car.model}, ${car.year} год, цена ${car.price} $`;
        carListUi.appendChild(li);
    });
}

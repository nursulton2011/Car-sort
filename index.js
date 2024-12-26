const carList = []; // Массив для хранения объектов автомобилей
const carForm = document.getElementById('carForm');
const carListUI = document.getElementById('carList');
const addButton = document.getElementById('addButton');

// Функция добавления машины
addButton.addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const model = document.getElementById('model').value;
    const year = parseInt(document.getElementById('year').value);
    const price = parseFloat(document.getElementById('price').value);

    if (!name || !model || !year || !price) {
        alert("Заполните все поля!");
        return;
    }

    const car = {
        name,
        model,
        year,
        price,
        position: carList.length + 1
    };

    carList.push(car);
    updateUI();
    carForm.reset(); // Очистить форму
});

// Функция обновления интерфейса
function updateUI() {
    carListUI.innerHTML = ""; // Очистить список
    carList.forEach(car => {
        const li = document.createElement('li');
        li.textContent = `#${car.position} ${car.name} - ${car.model}, ${car.year} год, ${car.price} $`;
        carListUI.appendChild(li);
    });
}

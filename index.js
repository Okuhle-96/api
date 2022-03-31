const colorElement = document.querySelector('.colors');
const brandElement = document.querySelector('.brands');
const carElement = document.querySelector('.cars');

const makeValueOptions = document.querySelector('.select')
const filterCars = document.querySelector('.filer');

// DISPLAY CARS BY NAME, COLOUR AND BRAND

const carsElem = document.querySelector('.cars');

axios
.get("https://api-tutor.herokuapp.com/v1/colors")
.then(function(result){
   const colors = document.createElement('ul');
   colors.innerHTML = result.data;
   colorElement.appendChild(colors);
})

axios
.get("https://api-tutor.herokuapp.com/v1/makes")
.then(function(result){
   const makes = document.createElement('ul');
   makes.innerHTML = result.data;
   brandElement.appendChild(makes);
})

axios.get("https://api-tutor.herokuapp.com/v1/cars").then(function(result){

    result.data.forEach(car => {
        const cars = document.createElement('tr');
        cars.innerHTML = `<tr>
       
            <td style=" padding: 10px; padding-left: 23px; font-weight: lighter; width: 150px;">${car.make}</td>
            <td style=" padding: 10px; padding-left: 23px; font-weight: lighter; width: 150px;">${car.model}</td>
            <td style=" padding: 10px; padding-left: 23px; font-weight: lighter; width: 150px;">${car.color}</td>
            <td style=" padding: 10px; padding-left: 23px; font-weight: lighter; width: 150px;">${car.price}</td>
            <td style=" padding: 10px; padding-left: 23px; font-weight: lighter; width: 150px;">${car.reg_number}</td>
        </tr>`
        carElement.appendChild(cars);

    });
})

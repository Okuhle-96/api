const colorElement = document.querySelector('.colors');
const brandElement = document.querySelector('.brands');
const carElement = document.querySelector('.cars');

const colorValueOptions = document.querySelector('.color-selection');
const makeValueOptions = document.querySelector('.make-selction');

const displayFilter = document.querySelector('.widgetsResults');
const filterCars = document.querySelector('.filter');

const displayFilteredData = document.querySelector('.widgetsResults')

let filteredList = [];

// DISPLAY COLOR
axios
.get("https://api-tutor.herokuapp.com/v1/colors")
.then(function(result){
   const colors = document.createElement('ul');
   colors.innerHTML = result.data;
   colorElement.appendChild(colors);
})

// DISPLAY MAKE
axios
.get("https://api-tutor.herokuapp.com/v1/makes")
.then(function(result){
   const makes = document.createElement('ul');
   makes.innerHTML = result.data;
   brandElement.appendChild(makes);
})

// DISPLAY ALL CARS
axios
.get("https://api-tutor.herokuapp.com/v1/cars")
.then(function(result){
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

// GET BRAND OPTIONS
axios
.get("https://api-tutor.herokuapp.com/v1/makes")
.then(function(result){
    result.data.forEach(make => {
        const filterMake = document.createElement('option');
        filterMake.innerHTML = `${make}`
        makeValueOptions.appendChild(filterMake);
    });
})

// GET COLOR OPTIONS
axios
.get("https://api-tutor.herokuapp.com/v1/colors")
.then(function(result){
    result.data.forEach(color => {
        const filterColor = document.createElement('option');
        filterColor.innerHTML = `${color}`
        colorValueOptions.appendChild(filterColor);
    });
})

// FILTER RESULTS
filterCars.addEventListener('click', function() {
    let maakeValue = makeValueOptions.value;
    let colorValue = colorValueOptions.value;

    if(maakeValue !== '' && colorValue !== '') {

    }

    axios
    .get(`https://api-tutor.herokuapp.com/v1/cars/make/${maakeValue}/color/${colorValue}`)
    .then(function(result){
        result.data.forEach(car => {
            const cars = document.createElement('tr');
            cars.innerHTML = `<tr>  
                <td style=" padding: 10px; padding-left: 23px; font-weight: lighter; width: 150px;">${car.make}</td>
                <td style=" padding: 10px; padding-left: 23px; font-weight: lighter; width: 150px;">${car.model}</td>
                <td style=" padding: 10px; padding-left: 23px; font-weight: lighter; width: 150px;">${car.color}</td>
                <td style=" padding: 10px; padding-left: 23px; font-weight: lighter; width: 150px;">${car.price}</td>
                <td style=" padding: 10px; padding-left: 23px; font-weight: lighter; width: 150px;">${car.reg_number}</td>
            </tr>`
            displayFilteredData.appendChild(cars);
        });
    })
});

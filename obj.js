let car = {
    make: "Toyota",
    model: "camry",
    year: 2022,
    isElectric: false,
    start: function(){
        console.log("engine started");
    }
};
console.log(car.make);
console.log(car.year);
car.start();
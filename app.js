//////////PART ONE//////////
class Vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk(){
        return "BEEP BEEP";
    }
    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
}

let myVehicle = new Vehicle("Ferrari", "FXX K Evo", 2017); // {make: 'Ferrari, model: 'FXX K Evo', year: 2017}
myVehicle.honk(); // 'BEEP BEEP'
myVehicle.toString(); // 'The vehicle is a Ferrari FXX K Evo from 2017.'


//////////PART TWO//////////
class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

let myCar = new Car("Bugatti", "Divo", 2019); // {make: 'Bugatti', model: 'Divo', year: 2019, numWheels: 4}
myCar.toString(); // 'The vehicle is a Bugatti Divo from 2019.'
myCar.honk(); // 'BEEP BEEP'
myCar.numWheels; // 4


//////////PART THREE//////////
class Motorcycle extends Vehicle {
    constructor(make, model, year, numWheels) {
        super(make, model, year, numWheels);
        this.numWheels = 2;
    }
    revEngine(){
        return "VROOM!!!";
    }
}

let myMotorcycle = new Motorcycle("Honda", "CBR1000RR-R", 2021); // {make: 'Honda', model: 'CBR1000RR-R', year: 2021, numWheels: 2}
myMotorcycle.toString(); // 'The vehicle is a Honda CBR1000RR-R from 2021.'
myMotorcycle.honk(); // 'BEEP BEEP'
myMotorcycle.revEngine(); // 'VROOM!!!'
myMotorcycle.numWheels; // 2


//////////PART FOUR//////////
class Garage{
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }

    add(newVehicle){
        if(!(newVehicle instanceof Vehicle)) {
            return "Only vehicles are allowed in this garage!";
        }
        if(this.vehicles.length >= this.capacity) {
            return "Sorry, the garage is full!";
        }
        this.vehicles.push(newVehicle);
        return "Vehicle added to the garage!";
    }

}

let garage = new Garage(3); // sets the garage capacity to 3
garage.vehicles; // [] empty array
garage.add(new Car("Ferrari", "FXX K Evo", 2017)); // 'Vehicle added to the garage!'
garage.vehicles; // [Car]
garage.add("Boeing 747"); // 'Only vehicles are allowed in this garage!'
garage.add(new Motorcycle("Honda", "CBR1000RR-R", 2021)); // 'Vehicle added to the garage!'
garage.vehicles; // [Car, Motorcycle]
garage.add(new Car("Bugatti", "Divo", 2019)); // 'Vehicle added to the garage!'
garage.vehicles; // [Car, Motorcycle, Car]
garage.add(new Motorcycle("Honda", "Nighthawk", 2001)); // 'Sorry, the garage is full!'


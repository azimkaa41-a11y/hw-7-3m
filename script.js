class Transport {
    #mileage = 0;

    constructor(brand , speed) {
        if (new.target === Transport) {
            throw new Error (
                "нельзя абстрактный класс сразу вызвать "
            )
        }
        this.brand = brand
        this.speed = speed
    }
    move(){
        throw new Error (
            "должен быть реализован"
        )
    }

    speedPlus (value) {
        this.speed += value
    }
    speedMinus (value) {
        this.speed -= value
    } 
    
    drive(distance) {
        this.#mileage += distance
    }

    getMileage() {
        return this.#mileage
    }  
}
class Car extends Transport {
  constructor(brand, speed, fuelType) {
    super(brand, speed);
    this.fuelType = fuelType;
  }

  move() {
    console.log(`${this.brand} едет по дороге со скоростью ${this.speed} км/ч`);
  }
}

class Bicycle extends Transport {
  constructor(brand, speed, type) {
    super(brand, speed);
    this.type = type;
  }

  move() {
    console.log(`${this.brand} крутит педали со скоростью ${this.speed} км/ч`);
  }
}

class ElectricScooter extends Transport {
  constructor(brand, speed, batteryLevel) {
    super(brand, speed);
    this.batteryLevel = batteryLevel;
  }

  move() {
    console.log(`${this.brand} едет тихо со скоростью ${this.speed} км/ч`);
  }

  charge(amount) {
    this.batteryLevel += amount;
  }
}
 const car1 = new Car("Toyota", 60, "Petrol");
const car2 = new Car("BMW", 80, "Diesel");
const bike1 = new Bicycle("Trek", 25, "Mountain");
const scooter1 = new ElectricScooter("Xiaomi", 30, 50);

car1.speedPlus(20);
car1.drive(100);
car1.move();

bike1.speedMinus(5);
bike1.drive(15);
bike1.move();

scooter1.charge(20);
scooter1.speedPlus(10);
scooter1.move();

console.log(car1.getMileage()); 
console.log(bike1.getMileage()); 
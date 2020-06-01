class Car {
  static getSpecs(car) {
    console.log(
      `maxSpeed: ${this._maxSpeed}, speed: ${this._speed}, isOn: ${this._isOn}, distance: ${this._distance}, price: ${this._price}`
    ); // Я не понимаю как это всё отобразить!!!
  }

  constructor({ speed = 0, price = 0, maxSpeed = 0, isOn, distance }) {
    this._speed = speed;
    this._price = price;
    this._maxSpeed = maxSpeed;
    this._isOn = isOn;
    this._distance = distance;
  }

  get price() {
    return this._price;
  }
  set price(newPrice) {
    this._price = newPrice;
  }

  turnOn() {
    this._isOn = true;
    console.log(this._isOn);
  }

  turnOff() {
    this._isOn = false;
    this._speed = 0;
    console.log(this._isOn);
  }

  accelerate(value) {
    if (this._speed + value < this._maxSpeed) {
      this._speed += value;
    }
    console.log(this._speed);
  }

  decelerate(value) {
    if (this._speed - value > 0) {
      this._speed -= value;
    }
  }

  drive(hours) {
    if (this._isOn === true) {
      this._distance = hours * this._speed;
    }
    console.log(this._distance);
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang); // Я не понимаю почему тут везде undefined!!!
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000 Тут наверное ошибка? Не 130, а 30 должно быть?

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000

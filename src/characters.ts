/* eslint-disable max-params */
export class Character {
  static series: string = 'Game of thrones';
  name: string;
  house: string;
  age: number;
  status: boolean;
  speech: string;
  constructor(name: string, house: string, age: number) {
    this.name = name;
    this.house = house;
    this.age = age;
    this.status = true;
    this.speech = '';
  }

  kill() {
    this.status = false;
    return this.status;
  }

  talk() {
    return this.speech;
  }
}

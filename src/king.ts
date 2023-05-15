import { Character } from './characters.js';

export class King extends Character {
  kingYears: number;
  constructor(name: string, house: string, age: number, kingYears: number) {
    super(name, house, age);
    this.kingYears = kingYears;
    this.speech = 'Vais a morir todos';
  }
}

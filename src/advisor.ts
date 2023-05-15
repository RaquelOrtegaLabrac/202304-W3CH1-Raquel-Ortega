/* eslint-disable max-params */
import { Character } from './characters.js';

export class Advisor extends Character {
  advisedCharacter: string;
  constructor(
    name: string,
    house: string,
    age: number,
    advisedCharacter: string
  ) {
    super(name, house, age);
    this.advisedCharacter = advisedCharacter;
    this.speech = 'No sé por qué, pero creo que voy a morir pronto';
  }
}

import { King } from './king.js';
import { Advisor } from './advisor.js';
import './style.css';

const character1 = new King('Joffrey', 'Baratheon', 20, 1);

const character4 = new Advisor('Tyrion', 'Lannister', 32, 'Daenerys');

export const allCharacters = (character1: object, character4: object) => {
  let allCharactersList = [];

  allCharactersList.push(character1, character4);
};

const messages: string[] = [];

const giveMessage = () => {
  messages.push(character1.talk(), character4.talk());
  return messages;
};

console.log(King.series);

giveMessage();

for (const message of messages) {
  console.log(message);
}

character4.kill();

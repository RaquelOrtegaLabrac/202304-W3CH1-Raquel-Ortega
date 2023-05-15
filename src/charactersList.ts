import { King } from './king';
import { Advisor } from './advisor';

export const createCharacterList = () => {
  const joffrey = new King('Joffrey', 'Baratheon', 20, 1);
  const tyrion = new Advisor('Tyrion', 'Lannister', 32, 'Daenerys');

  const characterList = [];

  characterList.push(joffrey);
  characterList.push(tyrion);

  return characterList;
};

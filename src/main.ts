import { allCharacters } from './index';

import { kingTemplate } from './kingTemplate';

import './style.css';

const joffrey = kingTemplate(
  allCharacters[0].name,
  characterList[0].house,
  characterList[0].age,
  'img/joffrey.jpg'
);

html.innerHTML = joffrey;

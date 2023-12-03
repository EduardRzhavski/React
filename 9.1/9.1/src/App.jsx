import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from '../src/data';
import Name from '../src/Name';
import Card from '../src/Card';

export default function DataMassaging() {
  console.log(DATA);
  const namesArr = () => {
      return DATA.map((person) => person.name);
  };

  console.log(namesArr);
  const bornBeforeNinety = () => {
     return DATA.filter((person) => person.birthday.split("-")[2] < 1990);
  };
  console.log(bornBeforeNinety);
  return (
      <>
      <h1>Names</h1>
          <div className="names-container">
              {namesArr().map((personName, index) => (
                  <Name key={index} personName={personName} />
              ))}
          </div>
          <h1>People Born Before 1990</h1>
          <div className="cards-container">
              {bornBeforeNinety().map((person, index) => (
                  <Card key={index} person={person} />
              ))}
          </div>
      </>
  );
}

import './App.css';
import { useState } from "react";
import Card from './components/card';

function Spind() {
  const [ind, setInd] = useState(0);
  const bob = [
    {
      name: 'Marcus',
      age: 49,
      profPic: 'mark.jpg',
      job: 'Electrician',
      location: 'Sheffield'
    },
    {
      name: 'Jake',
      age: 25,
      profPic: 'jake.jpg',
      job: 'Groundsman',
      location: 'Skiddler City'
    },
    {
      name: 'Benjani',
      age: 21,
      profPic: 'merch.jpg',
      job: 'Spinder CFO',
      location: 'Sheffield'
    },
    {
      name: 'Mardy',
      age: 17,
      profPic: 'sig.jpg',
      job: 'Spinder CEO',
      location: 'Rotherham'
    },
    {
      name: 'Benjani',
      age: 21,
      profPic: 'merch.jpg',
      job: 'Spinder CFO',
      location: 'Sheffield'
    },
    {
      name: 'Benjani',
      age: 21,
      profPic: 'merch.jpg',
      job: 'Spinder CFO',
      location: 'Sheffield'
    },
  ]
  return (
    <div className='relative mb-6'>
      <Card name={bob[ind].name} age={bob[ind].age} profPic={bob[ind].profPic} job={bob[ind].job} location={bob[ind].location} />
    </div>
  );
}

export default Spind;

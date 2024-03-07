import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SkillListItem from './SkillList/SkillList';
import NewSkillForm from './NewSkillForm/NewSkillForm'

const skills = [
  { name: "HTML", level: 5 },
  { name: "CSS", level: 3 },
  { name: "JavaScript", level: 4 },
  { name: "Python", level: 2 },
];

function App() {
  

  return (
    <div className='App'>
      <NewSkillForm />
    </div>
  );
}

export default App

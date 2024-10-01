
import { useState } from 'react'
import './App.css'


function App() {
  //state to keep track of current bg color
const [bgColor,setBgColor]=useState('white');

//function to change bgColor
const changeColor  =(color)=>{
  setBgColor(color);
};


  return <>
    <div className='App' style={{backgroundColor: bgColor,height:"100vh", padding:'20px'}}>
      <h2>Question.2 : create a background changer in ReactJS</h2>

      <div className='buttons'>
        <button className='btn red' onClick={()=>changeColor('red')}>RED</button>
        <button className='btn yellow' onClick={()=>changeColor('yellow')}>YELLOW</button>
        <button className='btn black' onClick={()=>changeColor('black')}>BLACK</button>
        <button className='btn purple' onClick={()=>changeColor('purple')}>PURPLE</button>
        <button className='btn green' onClick={()=>changeColor('green')}>GREEN</button>
        <button className='btn blue' onClick={()=>changeColor('blue')}>BLUE</button>
        <button className='btn white' onClick={()=>changeColor('white')}>WHITE</button>
      </div>
    </div>
  </>
}

export default App

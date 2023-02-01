import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// function handleKeyDown (event){
//   let pressedKey = event.key.toUpperCase();
//   document.getElementById(pressedKey).lastChild.play();
//   console.log('asd');
// }

// document.getElementsByTagName('body')[0].addEventListener('keypress',handleKeyDown)
 

function App() {

  let [chosenSound,setChosenSound] = useState();
  
  
  
  function handleKeyDown (event){
    // console.log('asd');
    let pressedKey = event.key.toUpperCase();
    
    document.getElementById(pressedKey).lastChild.play();

    setChosenSound (document.getElementById(pressedKey).lastChild.className.split(' ')[1])
    
  }

  
  document.getElementsByTagName('body')[0].addEventListener('keydown',handleKeyDown)

  
 
  
  
  function handleClick (event){
  
    document.getElementById(event.target.id).lastChild.play();
  
    setChosenSound (event.target.lastChild.className.split(' ')[1])
  
  }
  
  
  

  
  return (
    <div id='drum-machine'>
        <table>
        <tbody>
          <tr>
            <td id='Q' className='drum-pad' onClick={handleClick}>Q
            <audio id='Q' className='clip Heater-1' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio></td>
            <td id='W' className='drum-pad' onClick={handleClick}>W
            <audio id='W' className='clip Heater-2' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio></td>
            <td id='E' className='drum-pad' onClick={handleClick}>E
            <audio id='E' className='clip Heater-3' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio></td>
          </tr>
          <tr>
            <td id='A' className='drum-pad' onClick={handleClick}>A
            <audio id='A' className='clip Heater-4' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio></td>
            <td id='S' className='drum-pad' onClick={handleClick}>S
            <audio id='S' className='clip Clap' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio></td>
            <td id='D' className='drum-pad' onClick={handleClick}>D
            <audio id='D' className='clip Open-HH' src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio></td>
          </tr>
          <tr>
            <td id='Z' className='drum-pad' onClick={handleClick}>Z
            <audio id='Z' className='clip Kick-n-Hat' src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio></td>
            <td id='X' className='drum-pad' onClick={handleClick}>X
            <audio id='X' className='clip Kick' src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio></td>
            <td id='C' className='drum-pad' onClick={handleClick}>C
            <audio id='C' className='clip Closed-HH' src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio></td>
          </tr>
          </tbody>
        </table>

        <div id='display'>{chosenSound}</div>
    </div>
    
  );
}

export default App;



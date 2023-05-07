import { useEffect } from "react";
import './App.css'
import Key from "./Keys/Key"

function App() {
  

  function playSound(keyCode) {
    let soundName = '';
    switch (keyCode) {
      case 65:
        soundName = 'clap';
        break;
      case 83:
        soundName = 'hihat';
        break;
      case 68:
        soundName = 'kick';
        break;
      case 70:
        soundName = 'openhat';
        break;
      case 71:
        soundName = 'boom';
        break;
      case 72:
        soundName = 'ride';
        break;
      case 74:
        soundName = 'snare';
        break;
      case 75:
        soundName = 'tom';
        break;
      case 76:
        soundName = 'tink';
        break;
      default:
        return;
    }
    const audio = new Audio(`/Sounds/${soundName}.wav`);
    console.log(audio);
    audio.currentTime = 0;
    audio.play();
  }
  

  function handleKeyDown(event) {
    console.log(event.keyCode);
    const audioElement = document.querySelector(`div[data-key="${event.keyCode}"]`);
    console.log(audioElement);
    if (audioElement) {
      setTimeout(()=> {
        audioElement.classList.remove("playing");
      },500)
      audioElement.classList.add("playing");
      playSound(event.keyCode);
    } else {
      return;
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <div className="keys">
        <Key dataKey="65" kbdName="A" soundName="clap" />
        <Key dataKey="83" kbdName="S" soundName="hihat" />
        <Key dataKey="68" kbdName="D" soundName="kick" />
        <Key dataKey="70" kbdName="F" soundName="openhat" />
        <Key dataKey="71" kbdName="G" soundName="boom" />
        <Key dataKey="72" kbdName="H" soundName="ride" />
        <Key dataKey="74" kbdName="J" soundName="snare" />
        <Key dataKey="75" kbdName="K" soundName="tom" />
        <Key dataKey="76" kbdName="L" soundName="tink" />
      </div>
    </>
  )
}

export default App

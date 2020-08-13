import geeseLogo from './assets/images/geese.jpg'
import foxLogo from './assets/images/fox.jpg'
import duckLogo from './assets/images/ducks.jpg'
import wolfLogo from './assets/images/wolf.jpg'
import React from 'react';
import Game from './components/game';
import './App.css';



function App(props) {
  const ducks = {
    name: 'ducks',
    logoSrc: duckLogo

  }
  const geese = {
    name: 'geese',
    logoSrc: geeseLogo

  }
  const foxes = {
    name: 'foxes',
    logoSrc: foxLogo

  }
  const wolves = {
    name: 'wolves',
    logoSrc: wolfLogo
  }
  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={ducks}
        visitingTeam={geese} />
      <Game
        venue="Sheridan Arena"
        homeTeam={wolves}
        visitingTeam={foxes}
      />
    </div>
  )
}


export default App;

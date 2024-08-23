import { useState } from 'react'
import './App.css'
import styled from 'styled-components'

import Gameboard from './components/Gameboard';
import Controls from './components/Controls';
import Story from './components/Story';

function App() {
  
  const url = "http://localhost:3000";

  const [playerNames, setPlayerNames] = useState({
    playerOne: {},
    playerTwo: {},
    playerThree: {},
    playerFour: {}
  })
  const [story, setStory] = useState("");
  const [action, setAction] = useState("");

  return (
    <MainContainer>
      <Story story={story}/>
      <Gameboard url={url} setPlayerNames={setPlayerNames} setStory={setStory} action={action}/>
      <Controls playerOne={playerNames.playerOne} playerTwo={playerNames.playerTwo} playerThree={playerNames.playerThree} playerFour={playerNames.playerFour} setAction={setAction}/>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100px 1fr;
  grid-template-areas: 
    "story story"
    "gameboard controls";
  gap: 20px;
  padding: 100px;
  padding-top: 50px;
  padding-bottom: 50px;
`

export default App
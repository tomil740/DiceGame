import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import GameContainer from './gameScreen/componeants/GameContainer';
import '../presentation/gameScreen/styleCss/gameContainer.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GameContainer/>
  </StrictMode>
)

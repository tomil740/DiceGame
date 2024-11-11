import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import GameContainer from './gameScreen/components/GameContainer';
import '../presentation/gameScreen/styleCss/gameContainer.css';
import '../presentation/theme/light.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GameContainer/>
  </StrictMode>
)


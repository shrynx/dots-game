// @flow
import React from 'react';
import styled from 'styled-components';
import playButton from '../assets/play.svg';
import pauseButton from '../assets/pause.svg';
import restartButton from '../assets/restart.svg';

type Props = {
  gameState: 'Paused' | 'Playing' | 'Game Over',
  toggleGameState: () => void,
  restartGame: () => void,
};

const ControlButton = styled.button``;

const ButtonIcon = styled.img`
  height: 70px;
  width: 70px;
`;

const GameControl = ({ gameState, toggleGameState, restartGame }: Props) => {
  switch (gameState) {
    case 'Paused':
      return (
        <ControlButton onClick={toggleGameState}>
          <ButtonIcon src={playButton} alt="play" />
        </ControlButton>
      );

    case 'Playing':
      return (
        <ControlButton onClick={toggleGameState}>
          <ButtonIcon src={pauseButton} alt="pause" />
        </ControlButton>
      );

    default:
      return (
        <ControlButton onClick={restartGame}>
          <ButtonIcon src={restartButton} alt="restart" />
        </ControlButton>
      );
  }
};

export default GameControl;

// @flow
import React, { Component } from 'react';
import GameWrapper from './components/GameWrapper';
import GameArea from './components/GameArea';
import InGameText from './components/InGameText';
import Dot from './components/Dot';
import GameInfo from './components/GameInfo';
import InfoGroup from './components/InfoGroup';
import Score from './components/Score';
import Speed from './components/Speed';
import InfoLabel from './components/InfoLabel';
import GameControl from './components/GameControl';
import RangeInput from './components/RangeInput';
import generateRandomDotData from './utils/random';
import { radiusToPoint, incrementDotPosition, checkIfDotEscaped } from './utils/calc';

type Props = {};
type State = {
  score: number,
  gameState: 'Playing' | 'Paused' | 'Game Over',
  hasGameStartedOnce: boolean,
  gameSpeed: number,
  dotPositions: Array<{
    top: number,
    left: number,
    backgroundColor: string,
    radius: number,
  }>,
};

class App extends Component<Props, State> {
  state = {
    score: 0,
    gameState: 'Paused',
    hasGameStartedOnce: false,
    gameSpeed: 5,
    dotPositions: [],
  };

  dotMovementFrequency = 16;
  dotGenerationFrequency = 1000;

  componentDidMount() {
    setInterval(this.moveDots, this.dotMovementFrequency);
    setInterval(this.generateDots, this.dotGenerationFrequency);
  }

  toggleGameState = () => {
    this.setState(({ gameState }) => ({
      gameState: gameState === 'Paused' ? 'Playing' : 'Paused',
      hasGameStartedOnce: true,
    }));
  };

  restartGame = () => {
    this.setState({
      score: 0,
      gameState: 'Playing',
      dotPositions: [],
    });
  };

  generateDots = () => {
    this.setState(({ dotPositions, gameSpeed, gameState }) => {
      if (gameState === 'Playing') {
        return {
          dotPositions: [...dotPositions, generateRandomDotData()],
        };
      }
    });
  };

  moveDots = () => {
    const { dotPositions: previousDotPosition } = this.state;
    const haveSomeDotsEscaped = previousDotPosition.some(({ top }) => checkIfDotEscaped(top));
    if (haveSomeDotsEscaped) {
      this.setState({ dotPositions: [], gameState: 'Game Over' });
    } else {
      this.setState(({ dotPositions, gameSpeed, gameState }) => {
        if (gameState === 'Playing') {
          return {
            dotPositions: dotPositions.map(({ top, ...rest }) => ({
              top: incrementDotPosition(top, gameSpeed, this.dotMovementFrequency),
              ...rest,
            })),
          };
        }
      });
    }
  };

  controlGameSpeed = ({ target }: SyntheticInputEvent<HTMLInputElement>) => {
    const { value } = target;
    const gameSpeed = Number.parseInt(value, 10);
    this.setState({ gameSpeed });
  };

  updateScore = (points: number) => {
    this.setState(({ score }) => ({ score: score + points }));
  };

  removeDot = (index: number) => {
    this.setState(({ dotPositions }) => {
      dotPositions.splice(index, 1);
      return { dotPositions };
    });
  };

  render() {
    const { toggleGameState, restartGame, controlGameSpeed, updateScore, removeDot } = this;
    const { score, gameState, gameSpeed, dotPositions, hasGameStartedOnce } = this.state;

    return (
      <GameWrapper>
        <GameArea>
          {hasGameStartedOnce ? (
            gameState === 'Game Over' ? (
              <InGameText>Game Over</InGameText>
            ) : (
              dotPositions.map(({ top, left, radius, backgroundColor }, index) => {
                const points = radiusToPoint(radius);
                return (
                  <Dot
                    key={`${left}-${radius}-${backgroundColor}`}
                    data-testid={'dot'}
                    top={top}
                    left={left}
                    backgroundColor={backgroundColor}
                    radius={radius}
                    disabled={gameState !== 'Playing'}
                    onClick={() => {
                      updateScore(points);
                      removeDot(index);
                    }}
                  />
                );
              })
            )
          ) : (
            <InGameText>Press Start to Play</InGameText>
          )}
        </GameArea>
        <GameInfo>
          <InfoGroup>
            <Score data-testid={'score'}>{score}</Score>
            <InfoLabel>SCORE</InfoLabel>
          </InfoGroup>
          <InfoGroup>
            <GameControl
              toggleGameState={toggleGameState}
              restartGame={restartGame}
              gameState={gameState}
            />
          </InfoGroup>
          <InfoGroup>
            <div>
              <RangeInput
                type="range"
                min={1}
                max={10}
                step={1}
                onChange={controlGameSpeed}
                value={gameSpeed}
              />
            </div>
            <InfoLabel>
              SPEED <Speed data-testid={'speed'}>{gameSpeed}</Speed>
            </InfoLabel>
          </InfoGroup>
        </GameInfo>
      </GameWrapper>
    );
  }
}

export default App;

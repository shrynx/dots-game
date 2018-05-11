// @flow
import styled, { keyframes } from 'styled-components';
import { RED, YELLOW, CYAN, GREEN } from '../styles/colors';

const inGameTextAnimation = keyframes`
  0% {
    color: ${YELLOW};
  }
  25% {
    color: ${GREEN};
    transform: translate(-2px, 1px);
  }
  40% {
    color: ${YELLOW};
    text-shadow: none;
    transform: translate(0, 0);
  }
  50% {
    color: ${GREEN};
    text-shadow: 5px 5px 2px ${CYAN}, -5px -5px 2px ${RED};
    transform: translate(0px, 5px);
  }
  70% {
    color: ${YELLOW};
    text-shadow: none;
    transform: translate(0, 0);
  }
  80% {
    color: ${YELLOW};
    transform: translate(-2px, 1px);
  }
  100% {
    color: ${YELLOW};
    text-shadow: none;
  }
`;

const InGameText = styled.div`
  width: 100%;
  text-align: center;
  word-wrap: break-word;
  font-size: 60px;
  animation-name: ${inGameTextAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
`;

export default InGameText;

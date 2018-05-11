// @flow
import styled from 'styled-components';
import { BACKGROUND_COLOR } from '../styles/colors';

const GameArea = styled.div`
  height: 75vh;
  display: flex;
  align-items: center;
  background-color: ${BACKGROUND_COLOR};
  position: relative;
  overflow: hidden;
`;

export default GameArea;

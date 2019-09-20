// Import styled-components library - "import" version
import styled, { css } from 'styled-components';

const remy = px => `${px / 16}rem`;

// Flipping card
export const Card = styled.article`
  position: relative;
  width: 100%;
  min-height: ${remy(380)};
  cursor: pointer;
  perspective: 1000px;
  transition: all .25s ease-in-out;

  &:focus,
  &:hover {
    box-shadow: 0 0 ${remy(40)} rgba(0,0,0,.15);
  }

  &.flipped {
    & > div:first-of-type { // frontside of the card
      transform: perspective(1000px) rotateY(-180deg);
    }

    & > div:last-of-type { // backside of the card
      transform: perspective(1000px) rotateY(0deg);
    }
  }
`;

// Card sides
export const CardSide = css`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  padding: ${remy(24)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transition: all .25s ease-in-out;
`;

// Card side - front
export const CardFront = styled.div`
  ${CardSide};

  font-weight: bold;
  text-align: center;
`;

// Card side - back
export const CardBack = styled.div`
  ${CardSide};

  transform: rotateY(-180deg);
`;

// Card content
export const CardNumber = styled.span`
  display: block;
  font-size: ${remy(24)};
`;

export const CardTitle = styled.h2`
  font-size: ${remy(21)};
`;

export const CardDescription = styled.span`
  font-size: ${remy(16)};
`;


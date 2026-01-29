import styled, { keyframes } from "styled-components";

const floatGift = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
`;

export const GiftButton = styled.button`
  position: absolute;
  top: -1rem;
  right: -1.5rem;

  background: transparent;
  border-radius: 50%;
  border: none;
  padding: 0.2rem;

  font-size: 2.5rem;
  cursor: pointer;

  animation: ${floatGift} 1s ease-in-out infinite;

  &:hover {
    animation-play-state: paused;
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus,
  &:focus-visible {
    outline: none;
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    animation: none;
  }
`;

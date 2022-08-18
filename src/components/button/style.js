import styled from "styled-components";

export const TextButton = styled.button`
  font-size: 2.5rem;
  font-weight: 600;
  color: red;
  height: 5rem;
  width: 5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }

  &:focus {
    transform: scale(0.9);
  }

  ${props => props.item === "="
    ? `
    width: 10.5rem;
  `
    : ``}
`;

import styled from 'styled-components'

export const PokemonTile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  border-width: 2px;
  border-style: solid;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  height: 180px;
  max-width: 125px;
  width: 100%;
  &:hover {
    animation: matrix 0.4s;
    animation-fill-mode: forwards;
  }
`;
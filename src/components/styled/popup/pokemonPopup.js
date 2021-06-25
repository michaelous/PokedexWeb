import styled from 'styled-components'

export const PokemonPopup = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  position: absolute;
  z-index: 10;
  border-radius: 2%;
  height: 380px;
  padding: 10px 10px 180px 10px;
  border-width: 2px;
  border-style: solid;
  color: white;
  width: 430px;
  outline: none;

  &:before {
    content: "";
    position: absolute;
    background: lightgrey url("./images/haftone.png") repeat center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.03;
    background-size: 500px auto;
  }

  &:after {
    content: "";
    background: lightgrey url("./images/pokedex.png") no-repeat 270px 220px;
    opacity: 0.1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
  }
`;







import styled from 'styled-components'

export const PokemonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-radius: 10px;
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  box-sizing: border-box;
  padding: 50px 5px 50px 5px;
  
  @media (min-width: 768px){
    padding: 50px;
  }
`;
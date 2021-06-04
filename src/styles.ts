import styled from '@emotion/styled';

export const Container = styled('div')`
  width: 100%;
  max-width: 1100px;
  margin: 32px auto;
  @media screen and (max-width: 1100px) {
    max-width: 90%;
  }
`;

export const Wrapper = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fit, 250px);
  justify-content: center;
  gap: 16px;
  margin-bottom: 32px;
`;

export const Card = styled('div')`
  margin-bottom: 24px;
`;

export const CardImg = styled('img')`
  width: 100%;
  border: 2px solid black;
  border-radius: 60% 40% 40% 20% / 70% 50% 30% 25%;
  box-shadow: 1px 1px 1px black;
  margin-bottom: 16px;
`;

export const CardH2 = styled('h2')`
  font-family: 'Creepster', cursive;
  color: #faf76b;
  text-shadow: 1px 0 3px #2f4368;
  margin-bottom: 8px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    text-shadow: 2px 0 4px #2f4368;
    transition: all 200ms ease-in-out;
  }
`;

export const CardP = styled('p')`
  margin-bottom: 8px;
`;

export const CardSmall = styled('small')`
  font-size: 14px;
`;

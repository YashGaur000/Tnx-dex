import styled from 'styled-components';

export const CreateMainContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  margin-top: 40px;

  @media only screen and (max-width: 900px) {
    flex-direction: column;

    gap: 15px;
  }
`;

export const CreateFormWrapper = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;

  gap: 15px;

  @media only screen and (max-width: 1100px) {
    width: 45%;
    gap: 20px;
  }
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const LiquidityHeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

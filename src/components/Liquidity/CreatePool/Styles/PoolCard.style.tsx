import styled from 'styled-components';

export const PoolSection = styled.section`
  width: 100%;
  margin-top: 30px;
`;
export const LiquidityPoolCardStyles = styled.div`
  margin-top: 20px;
  display: flex;
  border-radius: 20px;
  justify-content: space-between;
  padding: 16px 40px;
  height: 80px;
  color: rgba(255, 255, 255, 1);

  align-items: center;
  background: linear-gradient(180deg, #18264c 0%, #1f305f 100%);
  font-size: 13px;

  @media only screen and (max-width: 500px) {
    flex-direction: column;
    margin: 10px;
    align-items: flex-start;
    padding: 20px;
    gap: 15px;
    height: auto;
  }
`;
export const PoolcardStatus = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;
export const Tvlstyle = styled.div`
  display: flex;
  flex-direction: column;

  gap: 5px;

  @media only screen and (max-width: 500px) {
    flex-direction: row;

    gap: 20px;
  }
`;

export const TokenPairWrapper = styled.div`
  padding: 5px;
`;
export const PoolButton = styled.div`
  flex-shrink: 1;
  @media only screen and (max-width: 500px) {
    margin-left: 80%;
  }
`;

export const PoolWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

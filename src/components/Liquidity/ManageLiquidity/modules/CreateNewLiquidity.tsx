import styled from 'styled-components';
import InformationIcon from '../../../../assets/information.png';
import { DefaultTheme } from '../../../../styles/Theme';

const Selecttoken = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  padding-left: 20px;
  padding-right: 20px;
  height: 70px;
  background: linear-gradient(180deg, #18264c 0%, #1f305f 100%);
  border-radius: 16px;
`;

const ContentImg = styled.img`
  width: 20px;
  height: 20px;
`;

const ContentLabel = styled.div`
  font-size: 18px;
  font-weight: 300;
  line-height: 20.9px;
  text-align: left;
  background: linear-gradient(209.3deg, #16c062 7.44%, #3eacfc 86.34%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  @media only screen and (max-width: 1100px) {
    font-size: 14px;
  }
  @media only screen and (max-width: 900px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 500px) {
    font-size: 14px;
  }
`;
const Button = styled.button<{ theme: DefaultTheme }>`
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  background: ${({ theme }) => theme.colors.buttonBackground};
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.buttonHover};
  }
`;

const ImgWithTokenContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CreateNewLiquidity = () => {
  return (
    <Selecttoken>
      <ImgWithTokenContainer>
        <ContentImg src={InformationIcon} />
        <ContentLabel>
          {`You'r about to create a new volatile liquidity Pool...`}
        </ContentLabel>
      </ImgWithTokenContainer>
      <Button>Change</Button>
    </Selecttoken>
  );
};

export default CreateNewLiquidity;

import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  padding: 10px 60px;
  justify-content: center;
  @media screen and (max-width: 800px) {
    padding: unset;
  }
  @media screen and (max-width: 1000px) {
    padding: unset;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Column60 = styled.div`
  padding: 0 15px;
  box-sizing: border-box;
  width: 600px;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const Column40 = styled.div`
  padding: 0 15px;
  box-sizing: border-box;
  width: 440px;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const IncentiveleftBar = styled.div``;

export const IncentiveleftBarBox1 = styled.div`
  background: rgb(24, 38, 76);
  background: linear-gradient(
    180deg,
    rgba(24, 38, 76, 1) 0%,
    rgba(31, 48, 95, 1) 100%
  );
  padding: 20px;
  border-radius: 16px;
  margin-top: 30px;

  @media screen and (max-width: 800px) {
    padding: 16px;
  }
  @media screen and (max-width: 1000px) {
    padding: 16px;
  }
`;

export const ImgUSTDFTM = styled.img`
  height: 40px;
`;

export const Img2 = styled.img`
  height: 20px;
  width: 20px;
`;
export const Img3 = styled.img`
  height: 24px;
  width: 24px;
`;
export const Img4 = styled.img`
  height: auto;
  width: 18x;
`;

export const IncentiveleftBarBox1info = styled.div`
  display: flex;
`;

export const IncentiveleftBarBox1infoCol1 = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
`;

export const IncentiveleftBarBox1infoCol1StableRow = styled.div`
  display: flex;
  align-items: center;
`;

export const UtmLabel = styled.label`
  font-family: Kanit;
  line-height: 1.75;
  text-align: left;
  font-size: 16px;
`;
export const LiquidityBoxHeading = styled.span`
  font-family: Kanit;
  line-height: 1.75;
  text-align: left;
  font-size: 16px;
`;

export const IncentiveleftBarBox1infoCol1Stable = styled.div`
  margin-right: 13px;
  color: #16c062;
  font-size: 12px;
`;

export const IncentiveleftBarBox1infoCol1Count = styled.div`
  margin-right: 13px;
  font-size: 12px;
`;

export const IncentiveleftBarBox1infoCol1Icon = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

export const IncentiveleftBarBox1UTM = styled.div`
  margin-left: 24px;
`;

export const IncentiveleftBarBox1infoCol2 = styled.div`
  width: 40%;
  text-align: end;
`;

export const IncentiveleftBarBox1infoCol2Row1 = styled.article`
  font-size: 16px;
  font-family: Kanit;
  line-height: 1.75;
  color: #16c062;
`;

export const IncentiveleftBarBox1infoCol2Row2 = styled.span`
  font-size: 16px;
  font-family: Kanit;
  line-height: 1.75;
`;

export const LiquidityBox = styled.div`
  margin-top: 24px;
`;

export const LiquidityText1 = styled.article`
  font-size: 12px;
  font-family: Kanit;
  line-height: 1.75;
  color: #cccccc;
  margin-top: 12px;
  font-weight: 300;
`;

export const LiquidityText2 = styled.article`
  font-size: 12px;
  font-family: Kanit;
  line-height: 1.75;
  color: #cccccc;
  font-weight: 300;
`;

export const YourDepositsBox = styled.div`
  margin-top: 24px;
`;
export const YourDepositsBoxHeading = styled.h2`
  margin-top: 40px;
`;

export const Box2Container = styled.div`
  display: flex;
  justify-content: end;
`;

export const Box2Title = styled.h2`
  color: #cccccc;
  font-size: 14px;
  margin-bottom: 10px;
  font-weight: 300;
`;

export const Box2TitleAvailable = styled.h2`
  color: #cccccc;
  font-size: 16px;
  font-weight: 300;
  padding-right: 10px;
`;

export const Box2Value = styled.p`
  color: #ccc;
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 20px;
`;

export const Box2ValueAvailable = styled.p`
  color: #ccc;
  font-size: 16px;
  font-weight: 300;
`;

export const Box2ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const Box2ProgressBar = styled.input`
  flex-grow: 1;
  background-color: #fff0;
  border: 1px solid #ffffff00;
  border-radius: 10px;
  padding: 10px;
  margin-right: 10px;
  color: #fff;
  font-family: 'kanit';
  font-weight: 300;
  font-size: 16px;
  &:focus {
    outline: none;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Box2PercentageBar = styled.div`
  justify-content: end;
  display: flex;
  @media screen and (max-width: 800px) {
    display: unset;
  }
  @media screen and (max-width: 1000px) {
    display: unset;
  }
`;

export const Box2Percentage = styled.span`
  color: #cccccc;
  font-size: 14px;
  margin-left: 20px;
  font-weight: 300;
  @media screen and (max-width: 800px) {
    margin-left: unset;
    margin-right: 20px;
  }
  @media screen and (max-width: 1000px) {
    margin-left: unset;
    margin-right: 20px;
  }
`;
export const Box2ContainerBorder = styled.div`
  border: 1px solid #b8b8b8;
  border-radius: 16px;
  width: 100%;
  padding: 12px 16px;
`;

export const Box2DataPoint1 = styled.div`
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  width: 20%;
`;

export const Box2DataPoint1Tenex = styled.div`
  display: flex;
  align-items: center;
`;

export const Box2DataPoint2 = styled.div`
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  width: 30%;
`;

export const Box2DataPoint3 = styled.div`
  text-align: right;
  margin-bottom: 10px;
  width: 50%;
`;

export const Box2DataPoint4 = styled.div`
  width: 100%;
  display: flex;
  text-align: right;
  align-items: center;
`;

export const Box2TokenName = styled.span`
  color: #cccccc;
  font-size: 16px;
  margin: 0px 10px;
`;

export const IncentivesBox2 = styled.h2`
  color: #ffffff;
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 24px;
`;

export const IncentivesBox2Paragraph = styled.article`
  color: #fff;
  font-size: 14px;
  font-family: Kanit;
  line-height: 1.75;
  font-weight: 300;
  margin-bottom: 34px;
  color: #cccccc;
`;

export const IncentivizeOrderedList = styled.ol`
  list-style-type: decimal;
  font-family: Arial, sans-serif;
  font-size: 18px;
  color: #333;
`;
export const IncentivizeListItem = styled.li`
  margin-bottom: 15px;
  line-height: 1.6;
`;
export const IncentivizeText = styled.span`
  color: #cccccc;
  font-size: 14px;
`;
export const IncentivizeTextCircle = styled.span`
  margin-right: 16px;
  color: #fff;
  background: #101c3b;
  font-size: 13px;
  padding: 5px 9px;
  border-radius: 50px;
`;

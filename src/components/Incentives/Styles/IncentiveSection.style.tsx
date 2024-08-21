import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px; /* optional, for gutters */
`;

export const Column60 = styled.div`
  padding: 0 15px; /* optional, for gutters */
  box-sizing: border-box;
  width: 60%;
`;

export const Column40 = styled.div`
  padding: 0 15px; /* optional, for gutters */
  box-sizing: border-box;
  width: 40%;
`;

export const IncentiveLeftBar = styled.div``;

export const IncentiveLeftBarBox1 = styled.div`
  background: rgb(24, 38, 76);
  background: linear-gradient(
    180deg,
    rgba(24, 38, 76, 1) 0%,
    rgba(31, 48, 95, 1) 100%
  );
  padding: 40px;
  border-radius: 16px;
  margin-top: 40px;
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
  padding-left: 10px;
`;

export const IncentiveLeftBarBox1info = styled.div`
  display: flex;
  flex-direction: initial;
`;

export const IncentiveLeftBarBox1infoCol1 = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;

export const IncentiveLeftBarBox1infoCol1StableRow = styled.div`
  display: flex;
`;

export const UtmLabel = styled.label`
  font-family: Kanit;
  line-height: 1.75;
  text-align: left;
  font-size: 20px;
`;

export const IncentiveLeftBarBox1infoCol1Stable = styled.div`
  margin-right: 20px;
  color: #16c062;
`;

export const IncentiveLeftBarBox1infoCol1Count = styled.div`
  margin-right: 20px;
`;

export const IncentiveLeftBarBox1infoCol1Icon = styled.div`
  margin-right: 20px;
`;

export const IncentiveLeftBarBox1UTM = styled.div`
  margin-left: 24px;
`;

export const IncentiveLeftBarBox1infoCol2 = styled.div`
  width: 50%;
  text-align: end;
`;

export const IncentiveLeftBarBox1infoCol2Row1 = styled.article`
  font-size: 16px;
  font-family: Kanit;
  line-height: 1.75;
  color: #16c062;
`;

export const IncentiveLeftBarBox1infoCol2Row2 = styled.span`
  font-size: 16px;
  font-family: Kanit;
  line-height: 1.75;
`;

export const LiquidityBox = styled.div`
  margin-top: 40px;
`;

export const LiquidityText1 = styled.article`
  font-size: 12px;
  font-family: Kanit;
  line-height: 1.75;
  color: #cccccc;
  margin-top: 12px;
`;

export const LiquidityText2 = styled.article`
  font-size: 12px;
  font-family: Kanit;
  line-height: 1.75;
  color: #cccccc;
`;

export const YourDepositsBox = styled.div`
  margin-top: 40px;
`;

export const Box2Container = styled.div`
  display: flex;
`;

export const Box2Title = styled.h2`
  color: #cccccc;
  font-size: 16px;
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
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 20px;
`;

export const Box2ValueAvailable = styled.p`
  color: #ccc;
  font-size: 20px;
  font-weight: 300;
`;

export const Box2ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const Box2ProgressBar = styled.input`
  flex-grow: 1;
  width: 100%;
  background-color: #fff0;
  border: 1px solid #b8b8b8;
  border-radius: 16px;
  padding: 20px;
  margin-top: 10px;
  color: #fff;
  font-family: 'kanit';
  font-weight: 300;
  font-size: 16px;
`;

export const Box2PercentageBar = styled.div`
  justify-content: end;
  display: flex;
`;

export const Box2Percentage = styled.span`
  color: #cccccc;
  font-size: 14px;
  margin-left: 20px;
  font-weight: 300;
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
  margin-bottom: 10px;
  width: 30%;
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
  margin-bottom: 10px;
  justify-content: end;
  width: 100%;
  display: flex;
  text-align: right;
  align-items: center;
`;

export const Box2TokenName = styled.span`
  color: #cccccc;
  font-size: 16px;
  margin-left: 10px;
`;

export const IncentivesBox2 = styled.h2`
  color: #eb5540;
  font-size: 36px;
  font-weight: 300;
  margin-bottom: 40px;
`;

export const IncentivesBox2Paragraph = styled.article`
  color: #fff;
  font-size: 16px;
  font-family: Kanit;
  line-height: 1.75;
  font-weight: 300;
  margin-bottom: 40px;
`;

export const IncentivizeOrderedList = styled.ol`
  list-style-type: decimal;
  padding-left: 20px;
  margin-top: 20px;
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
  font-size: 16px;
`;
export const IncentivizeTextCircle = styled.span`
  margin-right: 16px;
  color: #fff;
  background: #101c3b;
  font-size: 16px;
  padding: 8px 13px;
  border-radius: 50px;
`;

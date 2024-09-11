import styled from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

export const Section = styled.section<{
  theme: DefaultTheme;
}>`
  width: 100%;
  height: 508px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 800px) {
    padding: unset;
  }
  @media screen and (max-width: 1000px) {
    padding: unset;
  }
`;

export const Row = styled.div<{
  theme: DefaultTheme;
}>`
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Column60 = styled.div<{
  theme: DefaultTheme;
}>`
  box-sizing: border-box;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const Column40 = styled.div<{
  theme: DefaultTheme;
}>`
  padding: 20px 20px;
  box-sizing: border-box;
  width: 440px;
  height: 508px;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const IncentiveleftBar = styled.div`
  padding: 20px;
`;

export const IncentiveleftBarBox1 = styled.div<{
  theme: DefaultTheme;
  height?: string;
  width?: string;
  margintop?: string;
}>`
  background: linear-gradient(
    180deg,
    rgba(24, 38, 76, 1) 0%,
    rgba(31, 48, 95, 1) 100%
  );
  padding: 20px;
  border-radius: 16px;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  margin-top: ${({ margintop }) => margintop};

  @media screen and (max-width: 800px) {
    padding: 16px;
  }
  @media screen and (max-width: 1000px) {
    padding: 16px;
  }
`;

export const ImgUSTDFTM = styled.img`
  height: 40px;
  width: 40px;
`;

export const Img2 = styled.img`
  height: 20px;
  width: 19.5px;
`;
export const Img3 = styled.img`
  height: 24px;
  width: 24px;
`;
//todo to fix height
export const Img4 = styled.img`
  height: 4px;
  width: 8x;
`;

export const IncentiveleftBarBox1info = styled.div<{
  theme: DefaultTheme;
}>`
  display: flex;
`;

export const IncentiveleftBarBox1infoCol1 = styled.div<{
  theme: DefaultTheme;
}>`
  width: 520px;
  min-height: 52px;
  display: flex;
  align-items: center;
`;

export const IncentiveleftBarBox1infoCol1StableRow = styled.div<{
  theme: DefaultTheme;
}>`
  display: flex;
  align-items: center;
`;

export const UtmLabel = styled.label<{
  theme: DefaultTheme;
}>`
  line-height: 1.75;
  text-align: left;
  font-size: 16px;
`;
export const LiquidityBoxHeading = styled.span<{
  theme: DefaultTheme;
}>`
  line-height: 1.75;
  text-align: left;
  font-size: 16px;
`;

export const IncentiveleftBarBox1infoCol1Stable = styled.div<{
  theme: DefaultTheme;
}>`
  margin-right: 16px;
  color: #16c062;
  font-size: 12px;
`;

export const IncentiveleftBarBox1infoCol1Count = styled.div<{
  theme: DefaultTheme;
}>`
  margin-right: 16px;
  font-size: 12px;
`;

export const IncentiveleftBarBox1infoCol1Icon = styled.div<{
  theme: DefaultTheme;
}>`
  margin-right: 8px;
  display: flex;
  align-items: center;
`;

export const IncentiveleftBarBox1UTM = styled.div<{
  theme: DefaultTheme;
}>`
  margin-left: 24px;
`;

export const IncentiveleftBarBox1infoCol2 = styled.div<{
  theme: DefaultTheme;
}>`
  width: 40%;
  text-align: end;
`;

export const IncentiveleftBarBox1infoCol2Row1 = styled.article<{
  theme: DefaultTheme;
}>`
  font-size: 16px;
  line-height: 1.75;
  color: #16c062;
`;

export const IncentiveleftBarBox1infoCol2Row2 = styled.span<{
  theme: DefaultTheme;
}>`
  font-size: 16px;
  line-height: 1.75;
`;

export const LiquidityBox = styled.div<{
  theme: DefaultTheme;
}>`
  margin-top: 24px;
`;

export const LiquidityText1 = styled.article<{
  theme: DefaultTheme;
}>`
  font-size: 12px;
  line-height: 1.75;
  color: #cccccc;
  margin-top: 16px;
  font-weight: 300;
`;

export const LiquidityText2 = styled.article<{
  theme: DefaultTheme;
}>`
  font-size: 12px;
  line-height: 1.75;
  color: #cccccc;
  font-weight: 300;
`;

export const YourDepositsBox = styled.div<{
  theme: DefaultTheme;
}>`
  margin-top: 24px;
`;
export const YourDepositsBoxHeading = styled.h2<{
  theme: DefaultTheme;
}>`
  margin-top: 40px;
`;

export const Box2Container = styled.div<{
  theme: DefaultTheme;
}>`
  display: flex;
  justify-content: end;
`;

export const Box2Title = styled.h2<{
  theme: DefaultTheme;
}>`
  color: #cccccc;
  font-size: 14px;
  margin-bottom: 10px;
  font-weight: 300;
`;

export const Box2TitleAvailable = styled.h2<{
  theme: DefaultTheme;
}>`
  color: #cccccc;
  font-size: 16px;
  font-weight: 300;
  padding-right: 10px;
`;

export const Box2Value = styled.p<{
  theme: DefaultTheme;
}>`
  color: #ccc;
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 20px;
`;

export const Box2ValueAvailable = styled.p<{
  theme: DefaultTheme;
}>`
  color: #ccc;
  font-size: 16px;
  font-weight: 300;
`;

export const Box2ProgressContainer = styled.div<{
  theme: DefaultTheme;
}>`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const Box2ProgressBar = styled.input<{
  theme: DefaultTheme;
}>`
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

export const Box2PercentageBar = styled.div<{
  theme: DefaultTheme;
}>`
  justify-content: end;
  display: flex;
  @media screen and (max-width: 800px) {
    display: unset;
  }
  @media screen and (max-width: 1000px) {
    display: unset;
  }
`;

export const Box2Percentage = styled.span<{
  theme: DefaultTheme;
}>`
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
export const Box2ContainerBorder = styled.div<{
  theme: DefaultTheme;
}>`
  border: 1px solid #b8b8b8;
  border-radius: 16px;
  width: 100%;
  padding: 12px 16px;
`;

export const Box2DataPoint1 = styled.div<{
  theme: DefaultTheme;
}>`
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  width: 20%;
`;

export const Box2DataPoint1Tenex = styled.div<{
  theme: DefaultTheme;
}>`
  display: flex;
  align-items: center;
`;

export const Box2DataPoint2 = styled.div<{
  theme: DefaultTheme;
}>`
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  width: 30%;
`;

export const Box2DataPoint3 = styled.div<{
  theme: DefaultTheme;
}>`
  text-align: right;
  margin-bottom: 10px;
  width: 50%;
`;

export const Box2DataPoint4 = styled.div<{
  theme: DefaultTheme;
}>`
  width: 100%;
  display: flex;
  text-align: right;
  align-items: center;
`;

export const Box2TokenName = styled.span<{
  theme: DefaultTheme;
}>`
  color: #cccccc;
  font-size: 14px;
  margin: 0px 10px;
`;

export const IncentivesBox2 = styled.h2<{
  theme: DefaultTheme;
}>`
  color: #ffffff;
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 24px;
`;

export const IncentivesBox2Paragraph = styled.article<{
  theme: DefaultTheme;
}>`
  color: #fff;
  font-size: 14px;
  font-family: Kanit;
  line-height: 1.75;
  font-weight: 300;
  margin-bottom: 34px;
  color: #cccccc;
`;

export const IncentivizeOrderedList = styled.ol<{
  theme: DefaultTheme;
}>`
  list-style-type: decimal;
  font-family: Arial, sans-serif;
  font-size: 18px;
  color: #333;
`;
export const IncentivizeListItem = styled.li<{
  theme: DefaultTheme;
}>`
  margin-bottom: 15px;
  line-height: 1.6;
`;
export const IncentivizeText = styled.span<{
  theme: DefaultTheme;
}>`
  color: #cccccc;
  font-size: 14px;
`;

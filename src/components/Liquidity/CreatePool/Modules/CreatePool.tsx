import styled from 'styled-components';
import Usdt from '../../../../assets/usdt.png';
import Btc from '../../../../assets/bitCoin.png';
import { useState } from 'react';
import InformIcon from '../../../../assets/information.png';
import AvailablePool from './AvailablePool';
import LiquidityPool from './LiquidityPool';
import CustomDropdown from './CustomDropdown';
import TenexIcon from '../../../../assets/Tenex.png';
import SOLIcon from '../../../../assets/sol.png';
import UsdcIcon from '../../../../assets/usdc.png';
import UniIcon from '../../../../assets/Uni.png';
import FtmIcon from '../../../../assets/ftm.png';

const H1 = styled.h4`
  font-size: 38px;
  font-weight: 300;
  line-height: 71.76px;
  text-align: left;
`;

const P = styled.p`
  font-size: 18px;
  font-weight: 300;
  line-height: 35.88px;
  text-align: left;
  color: rgba(204, 204, 204, 1);
`;

const Section = styled.section`
  width: 100%;
  padding: 40px;
  @media only screen and (max-width: 900px) {
    padding: 20px;
  }
  @media only screen and (max-width: 600px) {
    padding: 5px;
  }
`;

const Createpool = styled.main`
  display: flex;
  margin-top: 35px;
  justify-content: space-between;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    margin-top: 20px;
    gap: 20px;
    align-items: center;
  }
`;

const Token = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 47%;
  border-radius: 16px;
  height: 170px;
  padding: 20px;
  justify-content: center;
  background: linear-gradient(180deg, #18264c 0%, #1f305f 100%);

  @media only screen and (max-width: 800px) {
    width: 95%;
  }
`;

const Selecttoken = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  padding-left: 20px;
  padding-right: 20px;
  height: 70px;
  background: linear-gradient(180deg, #18264c 0%, #1f305f 100%);
  border-radius: 16px;
  margin-top: 30px;
`;

const Img = styled.img`
  width: 30px;
  height: 30px;
`;

const Label = styled.label`
  font-size: 18px;
  font-weight: 300;
  line-height: 20.9px;
  text-align: left;
  background: linear-gradient(209.3deg, #16c062 7.44%, #3eacfc 86.34%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  @media only screen and (max-width: 600px) {
    font-size: 13px;
  }
`;

const TokenLabel = styled.label`
  font-family: Kanit;
  font-size: 16px;
  font-weight: 300;
  line-height: 29.9px;
  text-align: left;
`;

interface Option {
  id: number;
  label: string;
  imageUrl: string;
}

const CreatePool = () => {
  const [selectedOption1, setSelectedOption1] = useState<Option | null>(null);
  const [selectedOption2, setSelectedOption2] = useState<Option | null>(null);

  const options1: Option[] = [
    { id: 1, label: 'USDT', imageUrl: Usdt },
    { id: 2, label: 'BTC', imageUrl: Btc },
    { id: 3, label: 'TENEX', imageUrl: TenexIcon },
    { id: 4, label: 'USDC', imageUrl: UsdcIcon },
    { id: 5, label: 'UNI', imageUrl: UniIcon },
    { id: 6, label: 'FTM', imageUrl: FtmIcon },
    { id: 7, label: 'SOL', imageUrl: SOLIcon },
  ];

  const options2: Option[] = [
    { id: 1, label: 'USDT', imageUrl: Usdt },
    { id: 2, label: 'BTC', imageUrl: Btc },
    { id: 3, label: 'TENEX', imageUrl: TenexIcon },
    { id: 4, label: 'USDC', imageUrl: UsdcIcon },
    { id: 5, label: 'UNI', imageUrl: UniIcon },
    { id: 6, label: 'FTM', imageUrl: FtmIcon },
    { id: 7, label: 'SOL', imageUrl: SOLIcon },
  ];

  const handleSelect1 = (option: Option) => {
    console.log(option);
    setSelectedOption1(option);
  };

  const handleSelect2 = (option: Option) => {
    console.log(option);
    setSelectedOption2(option);
  };

  return (
    <Section>
      <H1>Create Pool</H1>
      <P>Create your new pool</P>
      <Createpool>
        <Token>
          <TokenLabel>First Token</TokenLabel>
          <CustomDropdown options={options1} onSelect={handleSelect1} />
        </Token>
        <Token>
          <TokenLabel>Second Token</TokenLabel>
          <CustomDropdown options={options2} onSelect={handleSelect2} />
        </Token>
      </Createpool>

      {selectedOption1 && selectedOption2 ? (
        <>
          <AvailablePool />
          <LiquidityPool />
        </>
      ) : (
        <Selecttoken>
          <Img src={InformIcon} alt="Information Icon" />
          <Label>
            Start by selecting the tokens. The liquidity pools available for
            deposit will show up next.
          </Label>
        </Selecttoken>
      )}
    </Section>
  );
};

export default CreatePool;

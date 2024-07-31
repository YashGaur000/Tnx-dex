import Pool from './Pool';
import styled from 'styled-components';

const P = styled.p`
  font-size: 17px;
  margin-top: 30px;
`;
const LiquidityPoolStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const LiquidityPool = () => {
  // let data= [
  //     {
  //         "id":"1",
  //       "trading_pair": "vAMM-USDT/BTC",
  //       "type": "Volatile",
  //       "volatility": "0.01%",
  //       "TVL": "$101,804,848",
  //       "APR": "1.106%",
  //       "actions": [
  //         {
  //           "action": "Deposit"
  //         }
  //       ]
  //     },
  //     {
  //         "id":"2",
  //       "trading_pair": "vAMM-ETH/USDT",
  //       "type": "Stable",
  //       "volatility": "0.05%",
  //       "TVL": "$200,000,000",
  //       "APR": "0.95%",
  //       "actions": [
  //         {
  //           "action": "Withdraw"
  //         }
  //       ]
  //     },
  //     {
  //         "id":"3",
  //       "trading_pair": "vAMM-BTC/ETH",
  //       "type": "Volatile",
  //       "volatility": "0.02%",
  //       "TVL": "$150,000,000",
  //       "APR": "1.25%",
  //       "actions": [
  //         {
  //           "action": "Deposit"
  //         }
  //       ]
  //     },
  //     {
  //         "id":"4",
  //       "trading_pair": "vAMM-ADA/USDT",
  //       "type": "Stable",
  //       "volatility": "0.03%",
  //       "TVL": "$120,000,000",
  //       "APR": "0.80%",
  //       "actions": [
  //         {
  //           "action": "Deposit"
  //         }
  //       ]
  //     },
  //     {
  //         "id":"5",
  //       "trading_pair": "vAMM-DOT/BTC",
  //       "type": "Volatile",
  //       "volatility": "0.07%",
  //       "TVL": "$90,000,000",
  //       "APR": "1.50%",
  //       "actions": [
  //         {
  //           "action": "Withdraw"
  //         }
  //       ]
  //     }
  //   ]
  return (
    <section>
      <P>Low Liquidity Pools</P>
      <LiquidityPoolStyle>
        {/* {
            data.map((item) => (
                <Pool key={item.id} item={item} />
            ))
        } */}

        <Pool />
        <Pool />
        <Pool />
      </LiquidityPoolStyle>
    </section>
  );
};

export default LiquidityPool;

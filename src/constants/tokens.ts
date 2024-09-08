import { Address } from 'viem';
export interface TokenInfo {
  readonly chainId: number;
  readonly address: Address;
  readonly name: string;
  readonly decimals: number;
  readonly symbol: string;
  readonly logoURI?: string;
}

export const ERC20_TEST_TOKEN_LIST: TokenInfo[] = [
  {
    address: '0x4200000000000000000000000000000000000023',
    name: 'WETH',
    symbol: 'WETH',
    chainId: 168587773,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/SpaceFinance/default-token-list/master/assets/0x4300000000000000000000000000000000000004.png',
  },
  {
    address: '0x8Fe5C378B39DBdC984F2FfB8631227758340631A',
    name: 'Otaku',
    symbol: 'OTK',
    chainId: 168587773,
    decimals: 18,
    logoURI:
      'https://res.cloudinary.com/dd9ca7pyl/image/upload/v1723143917/Tether_hdiwul.svg',
  },
  {
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    name: 'ETH',
    symbol: 'ETH',
    chainId: 168587773,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/SpaceFinance/default-token-list/master/assets/0x4300000000000000000000000000000000000004.png',
  },
  {
    address: '0xD88957c98D65E9bee30304290f734847De09B990',
    name: 'tSpace',
    symbol: 'tSPACE',
    chainId: 168587773,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/SpaceFinance/default-token-list/master/assets/0xD88957c98D65E9bee30304290f734847De09B990.png',
  },
  {
    address: '0x4200000000000000000000000000000000000022',
    name: 'Usdb',
    symbol: 'USDB',
    chainId: 168587773,
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/SpaceFinance/default-token-list/master/assets/0x4200000000000000000000000000000000000022.png',
  },
  {
    address: '0x5B2f5c3e8A9Aa9B26A2ADE212Fa6d0B2f6e993DC',
    name: 'Tenex Usdc',
    symbol: 'tUSDC',
    chainId: 168587773,
    decimals: 6,
    logoURI:
      'https://res.cloudinary.com/dd9ca7pyl/image/upload/v1723143830/usdc_q5v7we.svg',
  },
  {
    address: '0x66f473054828BF8D560869eF26Fb2f5Ff7D326E2',
    name: 'Tenex Blast',
    symbol: 'tBLAST',
    chainId: 168587773,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/SpaceFinance/default-token-list/master/assets/0xB582Dc28968c725D2868130752aFa0c13EbF9b1a.png',
  },
  {
    address: '0x9ae92510Aab56f5072eefF57f0Aa728ADCb0F81e',
    name: 'Tenex Envio',
    symbol: 'tENVIO',
    chainId: 168587773,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/SpaceFinance/default-token-list/master/assets/0x4300000000000000000000000000000000000003.png',
  },
  {
    address: '0x518b1F7d84dE67Fbe079E97Ec6792298AD126AAC',
    name: 'Tenex Op',
    symbol: 'tOP',
    chainId: 168587773,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/SpaceFinance/default-token-list/master/assets/0x4300000000000000000000000000000000000004.png',
  },
  {
    address: '0xfB014d75cEa6A4315264B0Ea8d254DEF6578dE15',
    name: 'Tenex Aave',
    symbol: 'tAAVE',
    chainId: 168587773,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/SpaceFinance/default-token-list/master/assets/0x20fE91f17ec9080E3caC2d688b4EcB48C5aC3a9C.png',
  },
  {
    address: '0x520a37B99C199CDf9e8cb1c4Ae2f2CA3DE344b46',
    name: 'Tenex Curve',
    symbol: 'tCURVE',
    chainId: 168587773,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/SpaceFinance/default-token-list/master/assets/0x73c369F61c90f03eb0Dd172e95c90208A28dC5bc.png',
  },
];

export const TOKEN_LIST: TokenInfo[] = [
  {
    address: '0x4300000000000000000000000000000000000004',
    name: 'WETH',
    symbol: 'WETH',
    chainId: 81457,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/SpaceFinance/default-token-list/master/assets/0x4300000000000000000000000000000000000004.png',
  },
  {
    address: '0x4300000000000000000000000000000000000003',
    name: 'USDB',
    symbol: 'USDB',
    chainId: 81457,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/SpaceFinance/default-token-list/master/assets/0x4300000000000000000000000000000000000003.png',
  },
  {
    address: '0x20fE91f17ec9080E3caC2d688b4EcB48C5aC3a9C',
    name: 'YES',
    symbol: 'YES',
    chainId: 81457,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/SpaceFinance/default-token-list/master/assets/0x20fE91f17ec9080E3caC2d688b4EcB48C5aC3a9C.png',
  },
  {
    address: '0xA4C7aA67189EC5623121c6C94Ec757DfeD932D4B',
    name: 'Mia',
    symbol: 'MIA',
    chainId: 81457,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/SpaceFinance/default-token-list/master/assets/0xA4C7aA67189EC5623121c6C94Ec757DfeD932D4B.png',
  },
  {
    address: '0x73c369F61c90f03eb0Dd172e95c90208A28dC5bc',
    name: 'OpenLeverage',
    symbol: 'OLE',
    chainId: 81457,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/SpaceFinance/default-token-list/master/assets/0x73c369F61c90f03eb0Dd172e95c90208A28dC5bc.png',
  },
  {
    address: '0x216A5a1135A9dab49FA9Ad865E0f22FE22b5630A',
    name: 'Pump',
    symbol: 'PUMP',
    chainId: 81457,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/SpaceFinance/default-token-list/master/assets/0x216A5a1135A9dab49FA9Ad865E0f22FE22b5630A.png',
  },
  {
    address: '0x5FE8534a6F96cb01261Bd96e98c17C2c1Cab3204',
    name: 'Baja',
    symbol: 'BAJA',
    chainId: 81457,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/SpaceFinance/default-token-list/master/assets/0x5FE8534a6F96cb01261Bd96e98c17C2c1Cab3204.png',
  },
  {
    address: '0xB582Dc28968c725D2868130752aFa0c13EbF9b1a',
    name: 'Blast Pepe',
    symbol: 'BEPE',
    chainId: 81457,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/SpaceFinance/default-token-list/master/assets/0xB582Dc28968c725D2868130752aFa0c13EbF9b1a.png',
  },
  {
    address: '0xCa84812E477eE5a96a92328689D8Ce2589aB6FfD',
    name: 'Alien',
    symbol: 'ALIEN',
    chainId: 81457,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/SpaceFinance/default-token-list/master/assets/0xCa84812E477eE5a96a92328689D8Ce2589aB6FfD.png',
  },
  {
    address: '0x42E12D42b3d6C4A74a88A61063856756Ea2DB357',
    name: 'Orbit Protocol',
    symbol: 'ORBIT',
    chainId: 81457,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/SpaceFinance/default-token-list/master/assets/0x42E12D42b3d6C4A74a88A61063856756Ea2DB357.png',
  },
  {
    address: '0x0B4d0ee29857c3961b380d4ec138EA5814E346b9',
    name: 'Pacman Blastoff',
    symbol: 'PACM',
    chainId: 81457,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/SpaceFinance/default-token-list/master/assets/0x0B4d0ee29857c3961b380d4ec138EA5814E346b9.png',
  },
  {
    address: '0xd582879453337BD149Ae53EC2092B0af5281d1D7',
    name: 'GLORY',
    symbol: 'GLORY',
    chainId: 81457,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/SpaceFinance/default-token-list/master/assets/0xd582879453337BD149Ae53EC2092B0af5281d1D7.png',
  },
  {
    address: '0x764933fbAd8f5D04Ccd088602096655c2ED9879F',
    name: 'Any Inu',
    symbol: 'AI',
    chainId: 81457,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/SpaceFinance/default-token-list/master/assets/0x764933fbAd8f5D04Ccd088602096655c2ED9879F.png',
  },
  {
    address: '0xb9dfCd4CF589bB8090569cb52FaC1b88Dbe4981F',
    name: 'Bag',
    symbol: 'BAG',
    chainId: 81457,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/SpaceFinance/default-token-list/master/assets/0xb9dfCd4CF589bB8090569cb52FaC1b88Dbe4981F.png',
  },
  {
    address: '0x891c9B37177Bdf8Edc891119C9d8aEefDa9A5246',
    name: 'VROOM',
    symbol: 'VROOM',
    chainId: 81457,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/SpaceFinance/default-token-list/master/assets/0x891c9B37177Bdf8Edc891119C9d8aEefDa9A5246.png',
  },
  {
    address: '0x5A7651Dd5C9d72fc4FDD4f9706193F33DFb4122d',
    name: 'Wand Leveraged ETH',
    symbol: 'ETHx',
    chainId: 81457,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/SpaceFinance/default-token-list/master/assets/0x5A7651Dd5C9d72fc4FDD4f9706193F33DFb4122d.png',
  },
];

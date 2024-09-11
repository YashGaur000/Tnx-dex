export interface Relay {
  name: string;
  id: string;
  updated: string;
  address: string;
}

export interface VotingPower {
  value: string;
  percentage: string;
}

export interface RelayData {
  relay: Relay;
  votingPower: VotingPower;
  apr: string;
  manage: string;
}

export const relayData: RelayData[] = [
  {
    relay: {
      name: 'veTENEX',
      id: '2342',
      updated: 'Updated 3 hours ago',
      address: '0x2341...35287',
    },
    votingPower: {
      value: '75,627,136.85',
      percentage: '7.85306%',
    },
    apr: '18.32%',
    manage: 'Deposit Lock',
  },
  {
    relay: {
      name: 'veGAMMA',
      id: '1243',
      updated: 'Updated 2 hours ago',
      address: '0x1234...56789',
    },
    votingPower: {
      value: '85,723,456.91',
      percentage: '8.52314%',
    },
    apr: '19.45%',
    manage: 'Deposit Lock',
  },
  {
    relay: {
      name: 'veDELTA',
      id: '5467',
      updated: 'Updated 1 hour ago',
      address: '0x6789...12345',
    },
    votingPower: {
      value: '65,432,187.23',
      percentage: '6.12345%',
    },
    apr: '17.89%',
    manage: 'Deposit Lock',
  },
  {
    relay: {
      name: 'veOMEGA',
      id: '7689',
      updated: 'Updated 4 hours ago',
      address: '0x9876...54321',
    },
    votingPower: {
      value: '95,827,364.77',
      percentage: '9.75342%',
    },
    apr: '20.01%',
    manage: 'Deposit Lock',
  },
  {
    relay: {
      name: 'veALPHA',
      id: '8390',
      updated: 'Updated 5 hours ago',
      address: '0x0987...65432',
    },
    votingPower: {
      value: '70,932,147.65',
      percentage: '7.23456%',
    },
    apr: '18.75%',
    manage: 'Deposit Lock',
  },
  {
    relay: {
      name: 'veTENEX',
      id: '2342',
      updated: 'Updated 3 hours ago',
      address: '0x2341...35287',
    },
    votingPower: {
      value: '75,627,136.85',
      percentage: '7.85306%',
    },
    apr: '18.32%',
    manage: 'Deposit Lock',
  },
  {
    relay: {
      name: 'veGAMMA',
      id: '1243',
      updated: 'Updated 2 hours ago',
      address: '0x1234...56789',
    },
    votingPower: {
      value: '85,723,456.91',
      percentage: '8.52314%',
    },
    apr: '19.45%',
    manage: 'Deposit Lock',
  },
  {
    relay: {
      name: 'veDELTA',
      id: '5467',
      updated: 'Updated 1 hour ago',
      address: '0x6789...12345',
    },
    votingPower: {
      value: '65,432,187.23',
      percentage: '6.12345%',
    },
    apr: '17.89%',
    manage: 'Deposit Lock',
  },
];

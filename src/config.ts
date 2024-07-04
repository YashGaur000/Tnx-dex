export interface EnvConfig {
  alchemySepoliaRpcUrl: string;
  wallectConnectProjectId: string;
}

export const envConfig: EnvConfig = {
  alchemySepoliaRpcUrl: import.meta.env.VITE_ALCHEMY_SEPOLIA_RPC_URL as string,
  wallectConnectProjectId: import.meta.env
    .VITE_WALLET_CONNECT_PROJECT_ID as string,
};

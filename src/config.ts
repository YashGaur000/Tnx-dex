export interface EnvConfig {
  alchemySepoliaRpcUrl: string;
}

export const envConfig: EnvConfig = {
  alchemySepoliaRpcUrl: import.meta.env.VITE_ALCHEMY_SEPOLIA_RPC_URL as string,
};

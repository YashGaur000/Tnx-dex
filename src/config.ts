export interface EnvConfig {
  wallectConnectProjectId: string;
  rpcUrl: string;
  chainId: number;
  indexerUrl: string;
}

export const envConfig: EnvConfig = {
  wallectConnectProjectId: import.meta.env
    .VITE_WALLET_CONNECT_PROJECT_ID as string,
  rpcUrl: import.meta.env.VITE_BLAST_SEPOLIA_RPC_URL as string,
  chainId: import.meta.env.VITE_BLAST_CHAIN_ID as number,
  indexerUrl: import.meta.env.VITE_INDEXER_URL as string,
};

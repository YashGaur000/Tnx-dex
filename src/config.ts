export interface EnvConfig {
  wallectConnectProjectId: string;
}

export const envConfig: EnvConfig = {
  wallectConnectProjectId: import.meta.env
    .VITE_WALLET_CONNECT_PROJECT_ID as string,
};

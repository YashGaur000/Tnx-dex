import { LiquidityPoolNewType } from '../graphql/types/LiquidityPoolNew';

export interface VoteDataType extends LiquidityPoolNewType {
  gauge: string;
}

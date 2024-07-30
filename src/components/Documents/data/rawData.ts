export const RAW_DATA = {
  whatIsTenex: {
    title: 'What is TENEX?',
    content: `
      <div>
      <p>TenEx represents the future of central marketplaces, customized specifically for trading and serving as a premier liquidity hub. Our next-generation Automated Market Maker (AMM) merges the robust, time-tested security of Uniswap with an advanced incentive mechanism, an intricate governance framework, and a refined, user-friendly interface to ensure a superior trading experience.</p>
  
      <span>What is the innovative feature of TenEx?</span>
      <ul>
          <li><strong>Capital-Efficient Liquidity:</strong> The TenEx flywheel mechanism allows protocols to build deep liquidity efficiently by directing $TENEX emissions to their pools.</li>
      </ul>
  
      <span>What we aim to achieve?</span>
      <ul>
          <li><strong>Central Liquidity Hub:</strong> TenEx is designed to facilitate token swaps and generate fees from traders by attracting liquidity, offering traders low-cost swaps, providing liquidity providers with a sustainable and consistent yield, and enabling protocols to efficiently build and maintain liquidity for their tokens.</li>
          <li><strong>Provide Sustainable Yields to Liquidity Providers:</strong> Each epoch, liquidity providers (LPs) receive $TENEX token emissions based on the votes their pools accumulate. Only staked liquidity within the protocol gauges qualifies for these emissions, ensuring a fair distribution of sustainable yields.</li>
          <li><strong>Cost-Effective Solution for Protocols:</strong> Participants can lock their $TENEX to vote on the next epoch's emission distribution, becoming veTENEX voters. This system allows protocols to build liquidity for their tokens without causing hyper-inflation.</li>
          <li><strong>Incentivized Governance:</strong> veTENEX voters are rewarded for their votes with 100% of the protocol trading fees from the previous epoch, plus any additional voter incentives from the current epoch. Rewards are proportional to the amount of $TENEX locked.</li>
          <li><strong>Supporting New Protocols:</strong> TenEx provides the necessary tools for new protocols launching to bootstrap liquidity and sustain growth, fostering the continuous expansion of the De-Fi ecosystem.</li>
          <li><strong>Open-Source and Modular:</strong> The protocol is entirely open-source and modular, removing integration barriers and encouraging widespread adoption within the De-Fi ecosystem.</li>
      </ul>
  
      <span>Mission Statement</span>
      <p>TenEx is dedicated to become a central liquidity hub, offering low-cost swaps for traders, sustainable yields for liquidity providers, and cost-effective liquidity solutions for protocols. By supporting new protocols and fostering long-term growth, TenEx aims to benefit both the De-Fi ecosystem and its own community. The open-source, modular design ensures easy integration and broad adoption, driving innovation and sustainable development.</p>
  </div>
      `,
  },
  core: {
    title: 'Core Functionalities',
    content: `
      <div class="core-section">
      <span>Swap</span>
      <p>On TenEX, like other decentralized exchanges (DEXs), users can  one token for another. The platform designates certain administrative bodies and automated bots to regularly scan whether arbitrage activities have balanced the pools to reflect the current market rate.</p>
  </div>
  
  <div class="core-section">
      <span>LP Liquidity Pool Staking (Legos)</span>
      <p>In the TenEX model, Liquidity Providers (LPs) are those users with veTENEX tokens. To further encourage participation, staking gauges are used. LP token holders can vote to provide LP tokens and earn Administrative Proposal Tokens (APTs).</p>
      <p>The percentage of dedicated tokens for each daily period determines the amount of TENEX received through the balancing report. The more votes a pool receives, the higher the TENEX rewards will be for that gauge.</p>
  </div>
  
  <div class="core-section">
      <span>Voting</span>
      <p>The primary function of veTENEX NFTs is to direct emissions to LP token pairs through voting. Emissions are distributed proportionally based on the total percentage of votes each pair receives in gauges.</p>
      <p>The expected emissions can be calculated with the following formula:</p>
      <p>Base emission: 4% of total veTENEX supply</p>
      <p>For example, the calculated emission for a distribution goal of 10,000,000 TenEX tokens. Now, suppose that ABC token receives 10% of the total votes. This vote slice would be: 10% x 10,000,000, which would become 1,000,000 TENEX.</p>
      <p>These tokens are distributed daily across indexes. Initially, they introduce gradually and increase further during the shaping process. It should minimize the risk of heavy sell pressure.</p>
  </div>
  
  <div class="core-section">
      <span>Lock (veTENEX Management)</span>
      <p>Managing or veTENEX (voting escrow) (ve) position is a vital aspect of the TenEx model. Regular locking for a specific period can help to get participants, whether dedicated to providing LP services, actively participating in protocol governance, or in some cases may wish to just vote with locking escrow positions.</p>
      <span>Functions Available on the Voting Page</span>
      <ul>
          <li>Convert Lock to enhance veTENEX positions.</li>
          <li>Merge Lock & Aged amount to veTENEX positions.</li>
          <li>Increase Lock Amount: Add more tokens to your existing lock.</li>
          <li>Increase Lock Length: Extend the duration of your current lock.</li>
          <li>Manage veTENEX Auction: Combine multiple veTENEX positions into one.</li>
      </ul>
  </div>
  
  <div class="core-section">
      <span>Incentives</span>
      <p>The ve(3,3) model's foundation rests on two key incentive structures:</p>
      <span>Vote Incentives</span>
      <p>Users can place bids on their favorite infrastructure. Users receiving emissions in these pools are paid in certain fees. Fees and tokens derived after the incentive allocation get auto-distributed. These incentives can further sustain participants staking in these pools.</p>
      <span>Gauge Incentives</span>
      <p>Gauge incentives: Some users could direct emissions towards the base gauges to incentivize the network, encouraging more liquidity by higher staking & larger gains. This concept involves regular balance adjustments based on governance, emissions, staking, and other essential activities associated with the gauge.</p>
      <p>The protocol team encourages users and participants to actively participate and engage in this mechanism. Incentives will get auto-distributed to users. This engagement ensures a balanced reward system for regular contributors to sustain continuous growth and development.</p>
  </div>
      `,
  },
  ve3: {
    title: 'Introduction',
    content: `
      <div >
          <p>Ve(3,3) is the name for the protocol’s mechanism of action and not the token’s name. Ve(3,3) token’s name is Solidly. Ve(3,3) is a combination of 2 mechanisms:</p>
          <ul>
              <li>‘Ve’ mechanism (Vote Escrow): similar to Convex and Curve protocols.</li>
              <li>Staking/Dilution (3,3): Olympus DAO.</li>
          </ul>
          <p>It’s a sophisticated tokenomics design that enhances long-term participation and aligns protocol incentives with fee generation. The model addresses issues in traditional liquidity mining by tying token emissions to fee generation and locking mechanisms. It uses dynamic emissions and NFT tokenization to create a sustainable and efficient DeFi ecosystem.</p>
  
          <span>Why ve(3,3)?</span>
          <p>Ve(3,3) was created to fix issues seen in models like Curve Finance. The problem with those models is that users’ money gets stuck (when it’s locked in the LP) and can’t move around easily, which lowers how effectively capital is used. Ve(3,3) aims to solve these problems and Andre thinks it’ll revolutionize how tokens are made in the future.</p>
  
          <span>Key Mechanism</span>
          <span>Token Locking and veTokens</span>
          <ul>
              <li><strong>ve Tokens:</strong> Users lock base tokens (e.g., $VELO (velodrome-finance native token is $VELO)) to receive veTokens (e.g., $veVELO), which grant voting power and access to rewards.</li>
              <li><strong>Lock Period:</strong> Ranges from 1 week to 4 years. Longer locks provide more voting power and rewards.</li>
              <li><strong>Decay:</strong> veTokens decay over time, reducing voting power and rewards as the lock period progresses.</li>
          </ul>
  
          <span>Rewards</span>
          <p>There are 3 forms of rewards in DeX(3,3) based on ve(3,3) protocol:</p>
          <ul>
              <li>Emissions</li>
              <li>Trading fees</li>
              <li>Bribes</li>
          </ul>
  
          <span>Emissions:</span>
          <ul>
              <li><strong>Dynamic Emission Adjustment:</strong></li>
              <ul>
                  <li>The protocol typically determines the number of tokens to be minted in the next epoch, for e.g.:
                      <ul>
                          <li>emissions with fixed decay rate.</li>
                          <li>emissions depending on the rate of circulating supply.</li>
                      </ul>
                  </li>
                  <li>The allocation of these emissions to specific LPs is based on the proportion of votes each LP (gauge) receives.</li>
                  <li><strong>Proportional Increase:</strong> veToken holders’ balances increase proportionally with emissions to prevent dilution, this phenomenon is called rebasing (rebase), basically adjusting the value of tokens so that it’s not affected by the inflation when new token is minted.</li>
              </ul>
          </ul>
  
          <span>Trading Fees:</span>
          <p>Trading fees originate from swap transactions associated with the Liquidity Pool. You can earn these fees by voting for any gauge you desire a share of. These fees are distributed at the beginning of each epoch. The rewards are provided in the same tokens as the LP-Tokens, for eg.</p>
          <p><em>Rewards for LP with a pair of $BTC/$ETH will be in both $BTC and $ETH</em></p>
  
          <span>Bribes:</span>
          <p>Bribes are a form of supplementary incentives distributed by the protocol or partners (VCs), to the liquidity providers. You have the opportunity to vote and earn in any gauge that is currently offering bribes. Bribes are given out every epoch, just like other incentives. Payment depends on the tokens offered as bribes in each gauge.</p>
          <div>
          <span>NFT Integration:</span>
          <ul>
              <li><strong>Tokenization:</strong> Lock positions are represented as NFTs, allowing trading and borrowing against locked tokens, adding liquidity.</li>
              <li><strong>Multiple Locks:</strong> Users can own multiple veNFTs, managing different lock periods and amounts.</li>
          </ul>
      </div>
      <div >
          <span>Fee Distribution:</span>
          <ul>
              <li>Protocol Fees: veToken holders earn fees generated by the protocol. Fees are typically distributed in the assets accrued, not the native token, to avoid correlation and volatility issues.</li>
          </ul>
      </div>
      `,
  },
  rewards: {
    title: 'Rewards',
    content: `
          <p>There are 3 forms of rewards in DeX(3,3) based on ve(3,3) protocol:</p>
          <ul>
              <li>Emissions</li>
              <li>Trading fees</li>
              <li>Bribes</li>
          </ul>
  
          <span>Emissions:</span>
          <ul>
              <li><strong>Dynamic Emission Adjustment:</strong></li>
              <ul>
                  <li>The protocol typically determines the number of tokens to be minted in the next epoch, for e.g.:
                      <ul>
                          <li>emissions with fixed decay rate.</li>
                          <li>emissions depending on the rate of circulating supply.</li>
                      </ul>
                  </li>
                  <li>The allocation of these emissions to specific LPs is based on the proportion of votes each LP (gauge) receives.</li>
                  <li><strong>Proportional Increase:</strong> veToken holders’ balances increase proportionally with emissions to prevent dilution, this phenomenon is called rebasing (rebase), basically adjusting the value of tokens so that it’s not affected by the inflation when new token is minted.</li>
              </ul>
          </ul>
  
          <span>Trading Fees:</span>
          <p>Trading fees originate from swap transactions associated with the Liquidity Pool. You can earn these fees by voting for any gauge you desire a share of. These fees are distributed at the beginning of each epoch. The rewards are provided in the same tokens as the LP-Tokens, for eg.</p>
          <p><em>Rewards for LP with a pair of $BTC/$ETH will be in both $BTC and $ETH</em></p>
  
          <span>Bribes:</span>
          <p>Bribes are a form of supplementary incentives distributed by the protocol or partners (VCs), to the liquidity providers. You have the opportunity to vote and earn in any gauge that is currently offering bribes. Bribes are given out every epoch, just like other incentives. Payment depends on the tokens offered as bribes in each gauge.</p>
          <div>
          <span>NFT Integration:</span>
          <ul>
              <li><strong>Tokenization:</strong> Lock positions are represented as NFTs, allowing trading and borrowing against locked tokens, adding liquidity.</li>
              <li><strong>Multiple Locks:</strong> Users can own multiple veNFTs, managing different lock periods and amounts.</li>
          </ul>
      </div>
      <div >
          <span>Fee Distribution:</span>
          <ul>
              <li>Protocol Fees: veToken holders earn fees generated by the protocol. Fees are typically distributed in the assets accrued, not the native token, to avoid correlation and volatility issues.</li>
          </ul>
      </div>
      `,
  },
  glossary: {
    title: 'Glossary',
    content: `
      <div >
      <span>Bribes</span>
      <p>Incentives offered to veToken holders to vote in favor of specific pools or proposals. Bribes can be in the form of additional tokens or rewards, encouraging strategic voting that aligns with the interests of the bribing party.</p>
  </div>
  <div >
      <span>Concentrated Liquidity</span>
      <p>A concept in DeFi that allows LPs to allocate their capital within a specific price range rather than across the entire price spectrum. This means LPs can concentrate their liquidity where they expect the most trading activity to occur, increasing the efficiency of their capital.</p>
  </div>
  <div >
      <span>Dilution</span>
      <p>Typically refers to the reduction in the value of existing tokens due to the introduction of more tokens into circulation.</p>
  </div>
  <div>
      <span>Emissions</span>
      <p>Release of new tokens into circulation by a protocol, often used as rewards for participants who provide liquidity or other services to support the network/ecosystem. They can be controlled to manage inflation and incentivize desired behaviors.</p>
  </div>
  <div>
      <span>Epoch</span>
      <p>A metric to define a time-period, usually 1 epoch = 1 week.</p>
  </div>
  <div>
      <span>Impermanent Loss</span>
      <p>Impermanent Loss: Imagine you deposit 1 ETH (worth $2,000) and 2,000 USDC into a 50/50 ETH/USDC liquidity pool. The total value of your deposit is $4,000.</p>
      <ul>
          <li><strong>Price Change:</strong> The price of ETH increases from $2,000 to $3,000.</li>
          <li><strong>Pool Rebalancing:</strong> To maintain the 50/50 balance, the pool adjusts the asset ratios. You might end up with 0.577 ETH and 2,823 USDC.</li>
          <li><strong>Value Comparison:</strong> If you withdraw your assets, you get $1,731 in ETH and $2,823 in USDC, totaling $4,554.</li>
          <li><strong>Holding Comparison:</strong> If you had just held 1 ETH and 2,000 USDC, their total value would be $5,000.</li>
          <li><strong>Impermanent Loss:</strong> The difference, $446, is your impermanent loss, showing you would have been better off holding the assets rather than providing liquidity.</li>
      </ul>
  </div>
  <div>
      <span>Protocol Fees</span>
      <p>Mechanisms used by a protocol to encourage participation and align the interests of its users. Fees collected from transactions or other activities are often redistributed as incentives to users who contribute to the protocol's success, such as liquidity providers or stakers.</p>
  </div>
  <div>
      <span>Liquidity Mining</span>
      <p>A process where users provide liquidity to a DeFi protocol (such as a DEX) in exchange for rewards. These rewards typically come in the form of newly minted tokens or protocol fees, incentivizing users to supply liquidity and increase the platform's overall liquidity.</p>
  </div>
  <div>
      <span>Vote Escrow (the ve in ve(3,3))</span>
      <p>Vote Escrow is the mechanism of locking tokens for pre-set periods. The disadvantage of this mechanism is low liquidity.</p>
  </div>
  <div>
      <span>(3,3)</span>
      <p>This is a model by Olympus Dao, (3,3) encouraging people to stake OHM as much as possible. The weaknesses of this model is still the reward mechanism; the more OHM tokens minted, their value decreases.</p>
  </div>
  `,
  },
  veTenex: {
    title: 'veTENEX(veNFT)',
    content: `
      <div>
      <p>veNFTs are specialized ERC-721 tokens that utilize the vested-vote escrow (ve) model to represent a user's underlying position.</p>
      <p>Within the TENEX ecosystem, veNFTs offer several key benefits:</p>
      <ul>
          <li>Voting on pools to earn vote bribes and swap fees</li>
          <li>Transferring and merging NFT positions</li>
      </ul>
      </div>
  
      `,
  },
  tenexSwap: {
    title: 'TENEX Swap',
    content: `
      <div>
      <p>The TenEx Market, powered by TenEx Swap, will serve as a central hub for both trading and exchanging veTENEX. It’s essential for any project focused on veNFTs to have a dedicated platform where users and investors can explore and conduct transactions.</p>
      <p>In the realm of nNFT marketplaces, TenExSwap stands out as the undisputed leader. Their innovative services have significantly enhanced the accessibility and user experience within the veNFT ecosystem, making them the ideal partner for TenEx.</p>
      <p>By collaborating with TenExSwap, our team can channel our efforts into enhancing the user interface and experience of our unique concentrated liquidity offerings. This partnership allows us to maintain a competitive edge in development speed and innovation.</p>
      </div>
      `,
  },
  revenue: {
    title: 'Voters Revenue Distribution Schedule',
    content: `
      <div>
      <span>Vote Incentives:</span>
      <p>Participants can claim voting incentives as soon as the epoch ends. To illustrate, if a single pair receives a 1000 USDC incentive and you’re the only voter, you're entitled to the entire 1000 USDC. This incentive becomes available for collection starting at 0 UTC on Thursday.</p>
  
      <span>Swap Fees:</span>
      <p>Throughout the week, voters continuously accumulate trading fees in real-time. These earnings are derived from the pool(s) they supported with their votes before the epoch's conclusion. This mechanism ensures that participants receive ongoing compensation for their role in enhancing liquidity.</p>
      <p>This dual incentive structure encourages active participation and strategic voting, while providing both immediate and continuous benefits to TenEx users.</p>
      </div>
      `,
  },
  analytics: {
    title: 'TENEX Analytics',
    content: `
      <div>
          <p>TENEX is actively expanding its range of data visualization tools. Combining existing and in-progress analytics pages and modules, we are developing tools to simplify the complex data of the TENEX model.</p>
      </div>
      <div>
          <p>These analytical features, some already operational and others in development, aim to transform raw data into easily understandable information. This effort makes the intricacies of the TENEX model more accessible to users of all experience levels.</p>
      </div>
      <div>
          <p>This initiative underscores TENEX's commitment to transparency and user-friendly design. These analytics modules act as a bridge, connecting users to the wealth of data generated by the TENEX ecosystem in a format that is informative and easy to comprehend.</p>
      </div>
      <div>
          <p>As these tools evolve, users can anticipate gaining a clearer view of the TENEX model's performance and dynamics. This will enable more informed interaction with the platform.</p>
      </div>
      `,
  },
  legacyPools: {
    title: 'Legacy Pools (LP)',
    content: `
    <div>
        <p>Legacy pools refer to the traditional Uni-V2 and Stableswap pools that have been in existence </p>
        <p><strong>Volatile : </strong> Uni-V2 pools</p>
        <p><strong>Correlated : </strong> Stableswap pools</p>
        <span>Volatile Pools (UniV2-Style):</span>
    <ul>
        <li>These are basic pools where tokens are paired with equal dollar value weights.</li>
        <li>The volatile swap curve facilitates trades within these pools, adapting to token price changes.</li>
        <li>The volatile swap curve used is: <math xmlns="http://www.w3.org/1998/Math/MathML">
        <mrow>
            <mi>x</mi>
            <mo>&#x2219;</mo> <!-- Dot operator -->
            <mi>y</mi>
            <mo>=</mo>
            <mi>k</mi>
        </mrow>
    </math></li>
        <li>The balance between TokenA and TokenB in the pool will always be equivalent in value to each other. For instance, in a volatile ETH-USDC pool where ETH is priced at 3500 USDC, the pool will maintain a ratio of 1 ETH per 3500 USDC.</li>
    </ul>
    <span>Correlated Pools (Andre-Style):</span>
    <ul>
        <li>Utilizing a stable swap curve, these pools offer enhanced trading efficiency compared to other DEXs.</li>
        <li>The stable swap curve, originally devised by Andre, is designed to minimize slippage, providing nearly zero slippage for stable swaps.</li>
        <li>The stable swap curve used is: <math xmlns="http://www.w3.org/1998/Math/MathML">
        <mrow>
            <msup>
                <mi>x</mi>
                <mn>3</mn>
            </msup>
            <mi>y</mi>
            <mo>+</mo>
            <msup>
                <mi>y</mi>
                <mn>3</mn>
            </msup>
            <mi>x</mi>
            <mo>=</mo>
            <mi>k</mi>
        </mrow>
    </math></li>
        <li>The balance between TokenA and TokenB in the pool will fluctuate depending on their current positions along the price curve. When the prices of both assets are similar, the pool will tend to maintain a ratio close to 50/50.</li>
    </ul>
    </div>
    `,
  },
  feeDistribution: {
    title: 'Fee Distribution',
    content: `
    <div>
    <p><strong>Legacy LP tokens</strong> need to be staked in their respective gauges in order to earn incentives. Fees are auto-compounded into the LP position regardless of staking status.</p>

    <span>Auto-Compounding Fees</span>
    <p>LPs appreciate in value over-time as each swap compounds ~40% of the earned fees back into the pool.</p>

    <span>Gauge Incentives</span>
    <p>Staked LP tokens earn emissions and/or external LP incentives, proportional to their share of the total staked.</p>
    </div>
    `,
  },
  curves: {
    title: 'Swap Curves',
    content: `
    <div>
        <span>Graphical Representation of the ve(3,3) Swap Curves :</span>
        <p>The graph below illustrates the variance between 0 and 100, highlighting the differences in slippage between the two swap curves. The Green (Correlated) curve demonstrates less slippage from the mean as the K value fluctuates, compared to the other curves. This visualization effectively shows how the Correlated curve maintains stability and efficiency in trades.<p>
    </div>
    `,
  },
  distribution: {
    title: 'TENEX Token Distribution',
    content: `
      <div>
      <p>TENEX utilizes two types of tokens for its utility and governance:</p>
      <ul>
          <li><strong>TENEX:</strong> An ERC-20 utility token of the protocol.</li>
          <li><strong>veTENEX:</strong> An ERC-721 governance token in the form of a non-fungible token (NFT).</li>
      </ul>
  
      <span>Distribution and Use</span>
      <ul>
          <li><strong>TENEX:</strong> Distributed to liquidity providers through emissions.</li> 
          <li><strong>veTENEX  </strong> is used for governance. Any TENEX holder can lock their tokens and receive veTENEX at any time. veTENEX is a transferable NFT representing voting power. Additional tokens can be added to the veTENEX NFT at any time.</li>
      </ul>
  
      <span>Lock Period</span>
      <ul>
          <li>The lock period, also known as the vote-escrowed period (hence the “ve” prefix), can last up to 2 years.</li>
          <li>The conversion follows the linear exchange rate:
              <ul>
                  <li>100 TENEX locked for 2 years becomes 100 veTENEX.</li>
                  <li>100 TENEX locked for 0.5 year becomes 25 veTENEX.</li>
                  <li>The longer the lock period, the greater the voting power.</li>
              </ul>
          </li>
      </ul>
  
      <span>Permanent Lock Option</span>
      <ul>
          <li>The Lock (perPET) can be set to a permanent maximum lock time.</li>
          <li>This permanent Lock (perPET) is always directly tied to the production being locked for the maximum duration of 2 years, and the voting power does not decay.</li>
      </ul>
  </div>
  
  <div>
      <table>
          <tr>
              <th>TENEX</th>
              <th>veTENEX</th>
          </tr>
          <tr>
              <td>
                  <ul>
                      <li>Primary Liquid (pre-locked) transaction token of the system</li>
                      <li>Used for emissions distribution</li>
                      <li>Can be converted to veTENEX</li>
                  </ul>
              </td>
              <td>
                  <ul>
                      <li>Implemented as an veNFT (vote-escrowed Non-Fungible Token)</li>
                      <li>Govern emissions and receive fees.</li>
                      <li>Created by locking TENEX tokens</li>
                  </ul>
              </td>
          </tr>
      </table>
  </div>
  
  <div>
      <span>The total token supply distribution of TENEX is:</span>
      <table>
          <tr>
              <th>Initial Supply</th>
              <th>Emissions</th>
              <th>Total Supply</th>
          </tr>
          <tr>
              <td>100,000,000</td>
              <td>300,000,000</td>
              <td>400,000,000</td>
          </tr>
      </table>
  </div>
  
  <div>
      <span>The total token supply allocation of TENEX is:</span>
      <table>
          <tr>
              <th>Category</th>
              <th>Percent</th>
              <th>Allocation</th>
          </tr>
          <tr>
              <td>Protocol NFT (veTENEX)</td>
              <td>10%</td>
              <td>40,000,000</td>
          </tr>
          <tr>
              <td>Partner (TENEX/veTENEX)</td>
              <td>2%</td>
              <td>8,000,000</td>
          </tr>
          <tr>
              <td>Development Team (TENEX/veTENEX)</td>
              <td>5%</td>
              <td>20,000,000</td>
          </tr>
          <tr>
              <td>Airdrop (veTENEX)</td>
              <td>1%</td>
              <td>4,000,000</td>
          </tr>
          <tr>
              <td>Treasury (veTENEX)</td>
              <td>1%</td>
              <td>4,000,000</td>
          </tr>
          <tr>
              <td>Ecosystem Incentives (Gauge and Vote)</td>
              <td>3%</td>
              <td>12,000,000</td>
          </tr>
          <tr>
              <td>LGE (TENEX)</td>
              <td>2%</td>
              <td>8,000,000</td>
          </tr>
          <tr>
              <td>Initial Investor/Private Sale(TENEX)</td>
              <td>1%</td>
              <td>4,000,000</td>
          </tr>
          <tr>
              <td>Emissions (TENEX)</td>
              <td>75%</td>
              <td>300,000,000</td>
          </tr>
      </table>
      <p><em>Note : The tokens allocated to the team as veTENEX follow a vesting schedule, with a small liquid portion set aside for immediate payments to services and advisors.</em></p>
  </div>
      `,
  },
  emissions: {
    title: 'Emission Schedule',
    content: `
      <div>
      <p>Liquidity providers (LPs) earn TENEX emissions as rewards for staking their liquidity positions. These emissions are allocated to liquidity pools based on the veTENEX voting power they receive each epoch.</p>
      <p>LPs receive a portion of the TENEX distributed to each pool, proportional to the size of their positions and the duration of their stake. These rewards are streamed and can be claimed as they accrue.</p>
      <p>Emissions will occur weekly, starting at the beginning of each EPOCH. From Epoch 0 to Epoch 25, known as the "bootstrapping period," emissions will start at 2,250,000 tokens with a decline rate of 0.75% each week, barring any elastic interventions.</p>
      <p>There will be no gradual reduction period to avoid token dilution and price drops. Instead, emissions will decline slowly and steadily to balance liquidity incentives and fees for $veTENEX holders.</p>
      <p>Common Ratio in a G.P can be calculated as such, where decay rate, d = 0.75%</p>
      <p class="formula"><math xmlns="http://www.w3.org/1998/Math/MathML">
      <mrow>
        <mi>r</mi>
        <mo>=</mo>
        <mn>1</mn>
        <mo>-</mo>
        <mfrac>
          <mi>d</mi>
          <mn>100</mn>
        </mfrac>
      </mrow>
    </math></p>
      <table>
          <thead>
              <tr>
                  <th>Epoch</th>
                  <th>Emissions</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>0</td>
                  <td>2,250,000</td>
              </tr>
              <tr>
                  <td>1</td>
                  <td>2,233,125</td>
              </tr>
              <tr>
                  <td>2</td>
                  <td>2,216,377</td>
              </tr>
              <tr>
                  <td>3</td>
                  <td>2,199,754</td>
              </tr>
              <tr>
                  <td>...</td>
                  <td>....</td>
              </tr>
              <tr>
                  <td>25</td>
                  <td>1,863,998</td>
              </tr>
          </tbody>
      </table>
      <p>User can calculate the emissions for an epoch based on the previous, as such:</p>
      <p class="formula">Emissions(epoch(N)) = Emissions(N - 1) * 0.995</p>
      <p>There will be no gradual reduction period to avoid token dilution and price drops. Instead, emissions will decline slowly and steadily to balance liquidity incentives and fees for $veTENEX holders.</p>
  </div>
  `,
  },
  elasticEmissions: {
    title: 'Elastic Emissions',
    content: `
      <div>
      <p>Starting from Epoch 26, emissions will be adjusted at least every 4 epochs (or once a month) based on revenue generation. This adjustment ensures that inflation remains sustainable and beneficial for the protocol.</p>
      <ul>
          <li><strong>Emission Increase case:</strong> When Revenue is ≥ Emissions for multiple epochs in a row, or if upcoming catalysts for revenue increase are soon coming.</li>
          <li><strong>Emission Decrease case:</strong> When Revenue is ≤ Emissions substantially for multiple epochs in a row, or if upcoming catalysts for revenue decrease are expected.</li>
      </ul>
      </div>
      `,
  },
  tge: {
    title: 'TENEX LGE - Liquidity Generation Event',
    content: `
      <div>
      <p>The TENEX token will launch fairly using a custom smart contract, similar to other launchpads. This approach prevents front-running and time-based advantages. The number of tokens allocated to the LGE remains fixed, and users can contribute collateral to earn a portion of the TENEX allocation.</p>
      <p>Benefits of the FairAuction model include:</p>
      <ul>
          <li>Protection against front-running & MEV: Timing of collateral provision doesn't influence outcomes, so there's no benefit for MEV bots or front-runners.</li>
          <li>Decentralized Price Discovery: Users, not the protocol, determine the price discovery range during the TENEX LGE auction, promoting a natural and decentralized environment.</li>
          <li>Equitable Participation: The LGE auction ensures fairness through straightforward mechanics, ensuring all participants receive a fair share regardless of amount or timing of collateral.</li>
          <li>Simple Design & UX: The FairAuction model features an "up-only" graphical chart depicting the price discovery of the TENEX token. Prices start low and rise proportionally as more collateral is provided, moving only upward until the capped amount, with no selling until tokens are distributed at the LGE's end.</li>
      </ul>
      </div>
      
      `,
  },
  priceDetermination: {
    title: 'Price Determination',
    content: `
      <div>
      <p>8,000,000 TENEX tokens will be available for the sale. You can contribute ETH in exchange for TENEX tokens, which can be claimed after the sale ends. All participants will receive tokens with the same value per dollar.</p>
      
      <span>Initial Seeding of Liquidity</span>
      <p>The initial seeding price of liquidity will be determined as follows:</p>
      <ul>
          <li><strong>P<sub>i</sub> = Initial Price</strong></li>
          <li><strong>ETH<sub>raised</sub> = Total ETH raised during the Fair Auction</strong></li>
      </ul>
      <p>P<sub>i</sub> = ETH<sub>raised</sub>/8,000,000</p>
      <p>P<sub>max</sub> = 300/8,000,000</p>
  
      <p>After the auction concludes, the TENEX team will pair 8,000,000 TENEX with the ETH raised, providing liquidity in the form of aVMM-TENEX/wETH.</p>
      <p>The LGE aims to raise up to 300 ETH, with a maximum price ceiling of 0.0000375 ETH per TENEX.</p>
      <p>A minimum of 150 ETH will be paired with the 8 million TENEX for POL, and any additional funds will be used for buybacks and incentivizing non-native pairs.</p>
      <p>At an Ethereum Price of $3500, this is $0.13125 per TENEX.</p>
      </div>
      
      `,
  },

  security: {
    title: 'Risk and Legal Disclosures',
    content: `
  <div>
  <span>LEGAL DISCLAIMER</span>
  <p>Please carefully read this disclaimer before using TENEX (the protocol) or any names directly or indirectly associated with the protocol. By using the protocol, you acknowledge your acceptance of this legal disclaimer and agree to adhere to its terms of service. If you do not agree, please refrain from using the protocol.</p>
  </div>
  
  <div>
  <span>INFORMATION NOT ADVICE</span>
  <p>The information provided on the protocol is not intended as investment advice, financial advice, trading advice, or any other form of advice. Our team provides the protocol as a public service and disclaims all liabilities arising from disputes or the use of information on the protocol, despite efforts made to periodically update the information. (Accuracy, completeness, and timeliness are not guaranteed.)</p>
  </div>
  
  <div>
  <span>USAGE AND INVESTMENT RISK</span>
  <p>The protocol is not liable for losses, damages, or claims resulting from user errors, software issues, technical failures, security problems, or activities of third parties. It is crucial to note that TENEX does not regulate, control, or promise the monetary value of the TENEX token. The value of the TENEX token can fluctuate based on various factors, and holding or using the token carries no guarantees of returns or specific benefits. Users should understand that TENEX does not create an investment contract or any obligation for users based on expected returns or benefits. Investing in cryptocurrencies involves risks, and the information on the protocol does not assure protection against financial loss. Users must understand and assess these risks and make informed decisions when using the protocol.</p>
  </div>
  
  <div>
  <span>COMPLIANCE WITH TAX OBLIGATIONS</span>
  <p>Users are solely responsible for determining their tax obligations related to cryptocurrency holdings. The protocol and its contributors are not responsible for determining users' tax liabilities arising from transactions. Always ensure compliance with local laws and regulations in your jurisdiction before making any purchases and conduct your own research on tax regulations. It is your responsibility to determine whether taxes apply to any transactions you initiate or receive and, if so, to report and/or remit the correct tax to the appropriate tax authority.</p>
  </div>
  
  <div>
  <span>SECURITY</span>
  <p>Security audits do not eliminate all risks. The protocol is not guaranteed to be secure or free from bugs or viruses. We implement and maintain reasonable administrative, physical, and technical security measures, and other applicable laws, to protect unauthorized access, disclosure, alteration, or destruction of the data we collect. The protocol disclaims all liabilities for any issues, including the security of your blockchain network addresses, cryptocurrency wallets, and cryptographic keys.</p>
  </div>
  `,
  },

  v2: {
    title: 'V2.0',
    content: `
    <p>TenEx is the next generation central marketplace specifically designed for trading and to be the liquidity hub on the cronos chain. It's next-generation AMM (Automated Market Maker) integrates the reliable, proven security of Uniswap v4 with a progressive incentive engine, sophisticated governance model, and an enhanced seamless user friendly experience.</p>

    <p>TenEx V2 revolutionizes liquidity provision and on-chain token trading, aiming to expand decentralized trading opportunities. The project encourages community involvement, offering developers and enthusiasts a platform to contribute to the evolution of the Uniswap Protocol's latest iteration.</p>

    <p>While TenEx V1 gives each pool its own contract, in TenEx V2 all DeFi pools go into a single contract. This should make the creation of a new pool 99% cheaper. Crucial is the role of the Pool Manager, a piece of software that maintains and maps all different pools. Pool Manager then also performs the swaps, and updates the pools. All operations will go through the Pool Manager.</p>

    <p>The Pool Manager is also referred to as the Singleton Contract. Instead of moving assets in and out of different pools to perform a swap, this contract only moves net balances. This makes the entire system highly efficient, saving users a lot more gas fees in TenEx V2.</p>

    <p>User experience gets improved a lot because every liquidity pool is now stored in an existing smart contract, developers don't need to deploy new pools all the time. This means less expenses for developers, but also for end users. Because end users no longer need to approve a contract before using it.</p>

    <p>Furthermore, one swap can require exchanges across various pools. However, thanks to the Singleton Contract this all happens within the same contract. As a result, the entire proposition is much more gas efficient.</p>

    <p>The architecture includes a new "singleton" contract housing all pools, boosting efficiency and lowering costs. The integration of hooks with the singleton architecture enhances platform versatility, ensuring swift, secure, and efficient customization and routing across diverse pools.</p>

    <p>A standout feature in TenEx V2 is the introduction of "hooks," which operate at various stages of pool actions, allowing extensive customization. Pool creators can choose familiar V3 trade-offs or explore new functionalities. TenEx V2 pools support dynamic fees, on-chain limit orders, and can act as time-weighted average market makers (TWAMM) for gradual order execution.</p>

    <p>Time-weighted average market maker, or TWAMM, is an example of a hook. TWAMM gets traders better prices by splitting a large order into smaller swaps that steadily execute over time. These types of swaps are less likely to impact the token price. Uniswap V4 will always process TWAMM orders before any other trades or LP transactions. This protects users from frontrunning bots, or simply MEVs.</p>

    <p>Through hooks, users and developers can expect a lot more interoperability with other Ethereum protocols and standards. This would enable complex interactions between different DeFi protocols, but also actions with SocialFi or games. This will generate more fees, which benefit liquidity providers.</p>

    <p>In addition, the dynamic fees introduced in V4 can give liquidity providers more control, and with that comes a potential for increased earnings. For example, they could implement withdrawal fees to discourage selling tokens or LP positions.</p>

    <p>The singleton design complements another architectural change in TenEx V2 called flash accounting. In previous versions of TenEx, each operation such as token swaps or adding liquidity to a pool ended by transferring tokens. In V2, external transfers are only made at the end, which simplifies pool operations and reduces costs.</p>

    <p>Singleton and flash accounting enable more efficient and economical routing across multiple pools. Considering the introduction of "hooks" would increase the number of liquidity pools, this benefit is especially useful.</p>

    <div class="info-box">
    <p class="info-icon">ℹ️</p>
    <p>V2 is currently in analysis and scope finalization phase. Development would be initiated soon and changes would be ongoing in the contracts. Updates to the documentation will be provided accordingly.</p>
    </div>
  `,
  },
  functionalitiesUpgrade: {
    title: 'Functionalities Upgrade',
    content: `
        <p>V2.0 introduces significant enhancements across multiple platform functionalities. This overview highlights the key upgrades implemented to improve user experience and platform efficiency. Detailed information on each feature upgrade can be found in the respective subsections.</p>
  `,

    swap: {
      title: 'Swap',
      content: `
      <span>Additional elements on the swap screen include -</span>
    <ul>
        <li>Slippage</li>
        <li>Transaction Fees</li>
        <li>Transaction Deadline</li>
        <li>Types of order (Market, Limit and TWAP)</li>
        <li>Chart with multiple time intervals on basis of tokens selection (Settings such as - Candlestick patterns, scaling of chart, and style such as line or bars)</li>
        <li>Add a Token pair as Favourites</li>
        <li>Advance Trading analytics with indicators</li>
        <li>Alerts - Receive a notification when last traded price trends higher or lower than the alert price. Repeated alerts are supported.</li>
        <li>Trading metrics (Total Volume, 24hr Volume, High Price, Low Price)</li>
        <li>Switch to Derivatives</li>
        <li>Past Trades with respect to token selection.</li>
    </ul>
    <p><b>Listing Page</b> to show popular token pairs, their relative price against each other and associated trading metrics (Volume, 24 hr change). Also includes a divided section to show favorites. User can search specific token pairs as well.</p>
    <p>Have a sort/filter to show new/trending tokens and liquidity pools listed on the Dex.</p>
  `,
    },
    liquidityPool: {
      title: 'Liquidity Pool',
      content: `
      <p>In the TenEX model, Liquidity Providers (LPs) share swap fees with veTENEX holders. To further encourage participation, staking gauges are utilized, incentivizing users to provide LP tokens and earn attractive Annual Percentage Rates (APRs).</p>
    
    <p>The number of votes allocated to a specific pair directly determines the amount of TENEX emitted to that gauge in the subsequent epoch. The more votes a pair receives, the higher the TENEX rewards will be for that gauge.</p>
    
    <span>Types of Liquidity Pools:</span>
    
    <ul>
        <li><strong>Volatile Pools</strong></li>
    </ul>
    
    <p>Volatile pools are defined as assets that have no direct correlation in price, examples are Chainlink <code>LINK</code> and Ethereum <code>ETH</code>. The price of <code>ETH</code> has no relation to the price of <code>LINK</code>.</p>
    
    <p>Volatiles pairs use the following formula to determine the price:</p>
    <math xmlns="http://www.w3.org/1998/Math/MathML">
  <mrow>
    <mi>x</mi>
    <mo>&middot;</mo>
    <mi>y</mi>
    <mo>&#x2265;</mo>
    <mi>k</mi>
  </mrow>
</math>
    
    <ul>
        <li><strong>Stable Pools</strong></li>
    </ul>
    
    <p>Stable pools are defined as assets that have a direct correlation to each other. Examples are USDC/USDT, wBTC/multiBTC, frxETH/wETH etc. The price of the 2 assets will trade very close to each other and thus a different approach can be taken to allow for much higher volume at low slippage.</p>
    
    <p>Stable pairs use the following formula to determine the price:</p>
    <math xmlns="http://www.w3.org/1998/Math/MathML">
  <mrow>
    <msup>
      <mi>x</mi>
      <mn>3</mn>
    </msup>
    <mi>y</mi>
    <mo>+</mo>
    <msup>
      <mi>y</mi>
      <mn>3</mn>
    </msup>
    <mi>x</mi>
    <mo>&#x2265;</mo>
    <mi>k</mi>
  </mrow>
</math>
    
    <ul>
        <li><strong>Concentrated Pools</strong></li>
    </ul>
    
    <p>Concentrated liquidity pools allow liquidity providers (LPs) to allocate their capital within specific price ranges, making liquidity provision more efficient and targeted.</p>
    
    <span>How It Works:</span>
    <ul>
        <li><strong>Price Range Selection:</strong> LPs choose the price range within which they want to provide liquidity. This means their capital is only active and earning fees within this selected range.</li>
        <li><strong>Capital Efficiency:</strong> By concentrating liquidity within narrower price bands, these pools provide deeper liquidity and reduce slippage for trades that occur within those bands.</li>
        <li><strong>Dynamic Adjustments:</strong> LPs can adjust their positions as market prices fluctuate, ensuring their liquidity remains within active trading ranges.</li>
    </ul>
    
    <p><strong>Example:</strong></p>
    <p>Uniswap V3: Allows LPs to provide liquidity in a more capital-efficient manner by focusing their liquidity within specific price ranges, resulting in higher fee earnings and better trade execution</p>
    
    <ul>
        <li><strong>Weighted Pools</strong></li>
    </ul>
    
    <p>Weighted pools contain multiple assets, each with a specific weight that determines its proportion within the pool. This allows for customizable exposure to different assets.</p>
    
    <span>How It Works:</span>
    <ul>
        <li><strong>Custom Weights:</strong> LPs can set different weights for each asset in the pool, which determines how much of each asset is required to balance the pool.</li>
        <li><strong>Rebalancing:</strong> The pool automatically rebalances as trades occur to maintain the predefined weights, ensuring consistent exposure to each asset.</li>
        <li><strong>Flexibility:</strong> Weighted pools can support various asset allocations, providing flexibility in liquidity provision and exposure management.</li>
    </ul>
  `,
    },
    voting: {
      title: 'Voting',
      content: `
      <h6>Key Mechanism</h6><br/>
      
    <span>Token Locking and veTokens</span>
    <ul>
        <li><strong>ve Tokens</strong>: Users lock base tokens (e.g., TenEX native token is TENEX) to receive veTokens (e.g., veTENEX), which grant voting power and access to rewards.</li>
        <li><strong>Lock Period</strong>: Ranges from 1 week to 4 years. Longer locks provide more voting power and rewards.</li>
        <li><strong>Maturity</strong>: veTokens mature over time, increasing voting power and rewards as it ages.</li>
        <li><strong>Lock Up period & Lock Up state</strong>: The tokens in a veNFT are locked for a specified duration, called the lock up period. This can be thought of like a kitchen timer that can only be turned in one direction. It can be arbitrarily increased, but only reduced by turning on the countdown and waiting for the time to pass. A veNFT must have a lock up period of at least one week to be eligible to vote.
            <ul>
                <li>A veNFT can be active which means that the timer is stopped and the veNFT's dissolve delay remains the same.</li>
                <li>A veNFT can be Un-Locking which means that the timer is decreasing the veNFT's lock up as time passes.</li>
                <li>Once the timer has counted down, a veNFT is un-locked and the TENEX tokens can be un-staked again.</li>
            </ul>
        </li>
        <li><strong>Age</strong>: Every active veNFT has an age, which denotes how long it has been in the active state. A veNFT's voting power increases as its age increases. A veNFT's voting power also increases if its controller increases its lock up period.</li>
    </ul>
    <p>The voting power of a locked veNFT is determined by several factors:</p>
    <ul>
        <li>Principally, by its stake. 1 TENEX = the power of 1 vote.</li>
        <li>Next, by its lock up period. One week grants a 1.06x voting power bonus, and 4 years grants 2x. All other durations scale linearly between.</li>
        <li>Lastly, by its age, or length of time spent locked up without un-locking. 2 years grants a 1.25x bonus, multiplicative with any other bonuses. All other durations between 0 seconds and 2 years scale linearly between.</li>
    </ul>
    <p>This means that the maximum voting power, of 2.5 votes per TENEX staked, is only achievable by locking up your veNFT for 4 years, and leaving it in that locked up state for 2 years. At that time you will have the most voting power for the stake committed.</p>
  `,
    },
    lock: {
      title: 'Lock',
      content: `
      <p>veNFTs are specialized ERC-721 tokens that utilize the vested-vote escrow (ve) model to represent a user's underlying position.</p>
      <p>Within the TENEX ecosystem, veNFTs offer several key benefits:</p>

      <ul>
      <li>Voting on pools to earn vote bribes and swap fees</li>
      <li>Transferring and merging NFT positions</li>
      </ul>

      <span>Token Locking and veTokens:</span>
      <p>veTokens: Users lock base tokens (e.g., TenEX native token is TENEX}) to receive veTokens (e.g., veTENEX), which grant voting power and access to rewards.</p>
      <ul>
      <li>Lock Period: Ranges from 1 week to 4 years. Longer locks provide more voting power and rewards.</li>
      <li>Maturity : veTokens matures over time, increasing voting power and rewards as it's age progresses.</li>
      <li><b>Lock Up period & Lock Up state:</b> The tokens in a veNFT are locked for a specified duration, called the lock up period. This can be thought of like a kitchen timer that can only be turned in one direction. It can be arbitrarily increased, but only reduced by turning on the countdown and waiting for the time to pass. A veNFT must have a lock up period of at least one week to be eligible to vote.
        <ul>
        <li>A veNFT can be active which means that the timer is stopped and the veNFT's dissolve delay remains the same.</li>
        <li>A veNFT can be Un-Locking which means that the timer is decreasing the veNFT's lock up as time passes.</li>
        <li>Once the timer has counted down, a veNFT is un-locked and the TENEX tokens can be un-staked again.</li>
        </ul>
      </li>
      <li><b>Age:</b> Every active veNFT has an age, which denotes how long it has been in the active state. A veNFTs voting power increases as its age increases. A veNFT's voting power also increases if its controller increases its lock up period.</li>
      </ul>

      <p>The voting power of a locked veNFT is determined by several factors:<p>
      <ul>
        <li>Principally, by its stake. 1 TENEX = the power of 1 vote.</li>
        <li>Next, by its lock up period. One week grants a 1.06x voting power bonus, and 4 years grants 2x. All other durations scale linearly between.</li>
        <li>Lastly, by its age, or length of time spent locked up without un-locking. 2 years grants a 1.25x bonus, multiplicative with any other bonuses. All other durations between 0 seconds and 2 years scale linearly between.</li>
      </ul>

      <p>This means that the maximum voting power, of 2.5 votes per TENEX staked, is only achievable by locking up your veNFT for 4 years, and leaving it in that locked up state for 2 years. At that time you will have the most voting power for the stake committed.</p>

      <span>veTENEX Management:</span>

      <p>Managing your veTENEX (veNFT) positions is a vital aspect of the TenEx model. Regular visits to the vesting page are important for all participants, whether individual users or protocols, to adjust your ve lock lengths, consolidate/merge positions, or create new veTENEX positions.</p>
      <p>Multiple Locks: Users can own multiple veNFTs, managing different lock up periods and amounts.</p>

      <span>Functions Available on the Vesting Page</span>
      <ul>
        <li>Create Lock: Establish a new veTENEX position with a defined lock up period.</li>
        <li>Manage Lock: Adjust existing veTENEX positions by extending the lock up period or by adding more tokens to your existing lock.</li>
        <li>Merge veTENEX Positions: Combine multiple veTENEX positions into one, the lock up period will be derived from the longest period out of merged NFTs.</li>
      </ul>
      <p>For more information about veTENEX and veNFTs, visit the veTENEX (veNFT) page.</p>
  `,
    },
    incentives: {
      title: 'Incentives',
      content: `
      <p>The DEX model's foundation rests on two key incentive structures:</p>

      <span>Vote Incentives:</span>

      <p>Users and protocols can offer incentives to influence voters towards directing emissions to specific token pairs. In return for their votes, the voters receives share of the incentives proportional to their voting power. This approach allows influential parties to guide the distribution of emissions based on their strategic goals.</p>

      <span>Gauge Incentives:</span>

      <p>Beyond emissions, tokens can be directly offered as incentives to those who stake LP (liquidity provider) tokens. This approach aims to increase liquidity for targeted token pairs, particularly benefiting protocols looking to bootstrap liquidity efficiently within the TenEX AMM. By utilizing gauge incentives, protocols attracts liquidity and foster the development of robust trading pairs.
      <br/><br/>
      These incentive mechanisms empower users and protocols to actively participate and shape the TenEx ecosystem. They promote liquidity provision, foster collaboration, and stimulate growth in specific token pairs. It allows stakeholders to form mutually advantageous partnerships and actively shape the platform's growth trajectory. This model not only promotes engagement but also ensures that the ecosystem evolves in response to the collective interests and strategies of its participants.
      </p>

  `,
    },
    mintTokens: {
      title: 'Mint Tokens',
      content: `
      <p>Token Minting through Smart Contract: Empowering Your Digital Asset</p>
      <p>Our token minting process utilizes advanced smart contract technology to offer a seamless, secure, and efficient way to mint your unique tokens on the blockchain.</p>
      <span>Key Features:</span>
      <ol>
      <li><b>Seamless Token Creation:</b> Our process simplifies the token creation process. With just a few clicks, you can mint your own tokens directly through our smart contract interface. Whether you're an individual, a startup, or an established business, our platform is designed to cater to all your tokenization needs.</li>
      <li><b>Secure and Transparent:</b> Our smart contracts are thoroughly audited to ensure the highest level of security. Every token minted is transparently recorded on the blockchain, ensuring trust and traceability.</li>
      <li><b>Customizable Parameters:</b> Tailor your tokens to suit your specific requirements. Our smart contract allows for the customization of various parameters such as logo, token name, symbli, total supply, decimals, transfer fee and more. This flexibility ensures that your tokens are unique and aligned with your vision.</li>
      <li><b>Interoperability:</b> Our tokens are designed to be fully compliant with widely adopted standards like ERC-20 and ERC-721, ensuring interoperability with existing decentralized applications (dApps), exchanges, and wallets. This opens up a myriad of possibilities for the use and trade of your tokens.</li>
      <li><b>User-Friendly Interface:</b> We understand that not everyone is a blockchain expert. Our user-friendly interface is designed to make the token minting process as straightforward as possible. Detailed guides and customer support are available to assist you at every step.</li>
      </ol>

      <span>How It Works:</span>

      <ol>
      <li><b>Connect Your Wallet:</b> Start by connecting your digital wallet to our platform. We support a variety of popular wallets to ensure convenience and security.</li>
      <li><b>Define Token Details:</b> Enter the details of your token, including name, symbol, total supply, and any other customizable parameters.</li>
      <li><b>Mint Your Tokens:</b> Once you've reviewed and confirmed the details, initiate the minting process. Our smart contract will handle the rest, securely minting your tokens on the blockchain.</li>
      <li><b>Deploy and Distribute:</b> After minting, your tokens are ready to be deployed and distributed. Whether you're looking to launch an ICO, reward your community, or create a new digital economy, your freshly minted tokens are now at your disposal</li>
      </ol>
  `,
    },
    launchpad: {
      title: 'Launchpad',
      content: `
      <p>As the native liquidity layer on Chronos, TENEX is committed to assisting projects in launching their tokens and bootstrapping liquidity through our reliable LGE (Liquidity Generation Event) contracts.</p>
    <p>Our team provides white-label services, customizing Solidity contracts to meet the unique backend needs of each project. Having successfully conducted our own LGE, we offer a proven model. Detailed specifications of our LGE are available on our platform.</p>
    <p>Please note that TENEX is not responsible for projects using our decentralized contracts for LGEs or launch services. By participating in any LGE or launch, users accept the associated risks, including smart contract risks and risks related to the projects themselves. Marketing or social media posts about launches and LGEs are not financial advice, and TENEX does not endorse or guarantee the credibility of any project.</p>
    <p>LGEs and Launchpads may not be available to users in sanctioned countries or jurisdictions where such activities are prohibited by law. Users who bypass these restrictions do so at their own risk. Accessing the launchpad or participating in the LGE does not create any liability for TENEX.</p>
  `,
    },
    chat: {
      title: 'Chat',
      content: `
      <p>A dedicated chat group will be created for each token listed on our platform. This feature will allow users holding the corresponding tokens to join these groups respectively, fostering a community space for open discussions and the exchange of ideas specific to each token. This integration aims to enhance user engagement and provide a collaborative environment for informed dialogue within the TENEX community.</p>
  `,
    },
    whitelisting: {
      title: 'Whitelisting',
      content: `
      <p>For a project to get a gauge on TENEX, they need their token to be whitelisted. There are a couple steps to get this process done:</p>
    <p><strong>Step 1:</strong> Submit token information via a Pull Request to the tenex-assets repository:</p>
    <ul>
        <li>Visit the tenex-assets public repository.</li>
        <li>Follow the instructions provided in the repository's description.</li>
    </ul>
    <p><strong>Step 2:</strong> After your Pull Request has been submitted and approved by a contributor:</p>
    <ul>
        <li>Create a ticket on the TENEX Discord requesting formal inclusion in the gauge whitelist.</li>
    </ul>
  `,
    },
    ads: {
      title: 'Ads',
      content: `
      <p>Ad creation: Creator address, Unit price, Total amount, Ad content, Link address, Publish, Enter password and confirm
      <br/><br/>Ad Management:</p>
  `,
    },
    lendBorrow: {
      title: 'Lending & Borrowing Platform',
      content: `
  `,
    },
  },
  v2liquidityProvisioning: {
    title: 'Liquidity Provisioning',
    content: `
    <p>Here are the articles in this section:</p>
  
    <ul>
    <li>Multi Assets Pools</li>
    <li>Concentrated Liquidity</li>
    </ul>
  `,
    multiAssetsPool: {
      title: 'Multi Assets Pools',
      content: `

    `,
    },
    liquidityConcentrated: {
      title: 'Concentrated Liquidity',
      content: `
        <p>Here are the articles in this section:</p>
            <ul>
            <li>CL Gauges</li>
            <li>Default Fee Tiers/Tickspacing</li>
            <li>Fee Distribution</li>
            </ul>

    `,
      clGauges: {
        title: 'CL Gauges',
        content: `
        <span>The Concentrated Liquidity staking/rewarder solution novel to TENEX</span>
        <p>TENEX introduces a significant enhancement to the CL rewarding model, primarily through the innovative CL Gauge contract infrastructure. This crucial component seamlessly integrates into the ve(3,3) model, and we have chosen to secure it under a BUSL-1.1 license.</p>
        <span>Features of TENEX CL Gauges</span>
        <ul>
            <li>Non-custodial staking solution
                <ul>
                    <li>TENEX employs a unique method of staking and rewarding LP providers through a delegation mechanism. This approach allows users to retain their Non Fungible Positions in their wallets while still earning Fees, TENEX, and other LP Bribes through emissions.</li>
                </ul>
            </li>
            <li>Competitive Rewarding Logic
                <ul>
                    <li>The CL Gauges determine rewards based on several factors:
                        <ul>
                            <li>Tick Delta (Δ) [Upper - Lower] of the user's position</li>
                            <li>Position size</li>
                            <li>Position Utilization: In Range? [True or False]</li>
                        </ul>
                    </li>
                    <li>This rewarding methodology offers several benefits. It encourages tighter liquidity ranges, resulting in higher emissions for participants. By concentrating liquidity within these utilized ranges, overall slippage decreases, and volume/fees increase due to more favorable swap routing.</li>
                </ul>
            </li>
        </ul>
        <p class="highlight">The following comparison illustrates how TENEX' CL Gauge solution outperforms other concentrated liquidity staking solutions:</p>

            `,
      },
      tickspacing: {
        title: 'Default Fee Tiers/Tickspacing',
        content: `

            <div class="container">
        <div class="info-box">
            <p class="info-icon">ℹ️</p>
            <p>100 basis points = 1%</p>
        </div>
        <p>There are 4 default fee tiers when creating a TENEX V2 concentrated liquidity position:</p>
        <ul>
            <li><strong>0.01% [1bps Ticks]</strong> - The lowest fee tier available (1 bps), this provides the best rate for highly correlated and pegged assets: e.g. (USDC,USDT)</li>
            <li><strong>0.05% [10bps Ticks]</strong> - The second lowest fee tier, this is good for competitive asset classes, such as USDC/WETH, which generate a lot of volume.</li>
            <li><strong>0.3% [60bps Ticks]</strong> - This fee tier is the standard for pairs that do not fall in the other categories.</li>
            <li><strong>1.0% [200bps Ticks]</strong> - Currently the highest fee tier available, 100bps provides sufficient fee generation to offset the risk of providing liquidity for highly volatile assets.</li>
        </ul>
        <span>Additional Fee Tiers:</span>
        <ul>
            <li><strong>0.005% (Redundant) [1bps Ticks]</strong> - For ultra-stable token pairs, such as USDC-DAI, USDC-USDC.e, and USDC-USDT</li>
            <li><strong>0.025% [5bps Ticks]</strong> - For highly competitive bluechip pairings.</li>
        </ul>
    </div>
                `,
      },
      v2feeDistribution: {
        title: 'Fee Distribution',
        content: `
            <p>Concentrated Liquidity positions earn swap fees and gauge incentives upon creation. There is no staking in the CL model, and you can claim rewards while retaining custody your positions.</p>
            <span>Fee Rewards:</span>
            <ul>
                <li>2.5% of fees will be routed to POL(Protocol on Liquidity) and Treasury respectively.</li>
                <li>20% of swap fees claimable by LP providers, updated per swap in real-time.</li>
                <li>75% of swap fees will be distributed to veTENEX voters via the gauges.</li>
            </ul>
            <p> <b>Gauge Incentives:</b> 100% of all gauge incentives, claimable in real-time over an epoch.</p>
            <div class="info-box">
            <p class="info-icon">ℹ️</p>
            <p>These parameters regarding the swap fee distribution are flexible and can be adjusted based on the protocol's health and the discretion of the core team, guided by sufficient data and analytics.</p>
            </div>
                `,
      },
    },
  },
  roadAhead: {
    title: 'Road Ahead',
    content: `
  `,
  },
  fullMigration: {
    title: 'Full Migration to V2.0',
    content: `
  `,
  },
};

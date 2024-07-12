export const RAW_DATA = {
  whatIsTenex: {
    title: 'What is TENEX?',
    content: `
      <div>
      <p>TenEx is a next-generation AMM (Automated Market Maker) that integrates the strengths of Curve, Convex, Uniswap, specifically designed to be the central liquidity hub for the Cronos chain. It combines the proven security of Uniswap v4 with an innovative incentive engine, vote-lock governance model, and an enhanced user experience.</p>
  
      <span>What is the innovative feature of TenEx?</span>
      <ul>
          <li><strong>Capital-Efficient Liquidity:</strong> The TenEx flywheel mechanism allows protocols to build deep liquidity efficiently by directing $TENEX emissions to their pools.</li>
      </ul>
  
      <span>What we aim to achieve?</span>
      <ul>
          <li><strong>Central Liquidity Hub:</strong> Establish a central liquidity hub for the Aptos ecosystem. TenEx is designed to facilitate token swaps and generate fees from traders by attracting liquidity, offering traders low-cost swaps, providing liquidity providers with a sustainable and consistent yield, and enabling protocols to efficiently build and maintain liquidity for their tokens.</li>
          <li><strong>Sustainable Yields for Liquidity Providers:</strong> Each epoch, liquidity providers (LPs) receive $TENEX token emissions based on the votes their pools accumulate. Only staked liquidity within the protocol gauges qualifies for these emissions, ensuring a fair distribution of sustainable yields.</li>
          <li><strong>Cost-Effective Solution for Protocols:</strong> Participants can lock their $TENEX to vote on the next epoch's emission distribution, becoming veTENEX voters. This system allows protocols to build liquidity for their tokens without causing hyper-inflation.</li>
          <li><strong>Incentivized Governance:</strong> veTENEX voters are rewarded for their votes with 100% of the protocol trading fees from the previous epoch, plus any additional voter incentives from the current epoch. Rewards are proportional to the amount of $TENEX locked.</li>
          <li><strong>Supporting New Protocols:</strong> TenEx provides the necessary tools for new protocols launching on Aptos to bootstrap liquidity and sustain growth, fostering the continuous expansion of the Aptos ecosystem.</li>
          <li><strong>Open-Source and Modular:</strong> The protocol is entirely open-source and modular, removing integration barriers and encouraging widespread adoption within the Aptos ecosystem.</li>
      </ul>
  
      <span>Mission Statement</span>
      <p>TenEx is dedicated to creating a central liquidity hub for the Aptos ecosystem, offering low-cost swaps for traders, sustainable yields for liquidity providers, and cost-effective liquidity solutions for protocols. By supporting new protocols and fostering long-term growth, TenEx aims to benefit both the Aptos ecosystem and its own community. The open-source, modular design ensures easy integration and broad adoption, driving innovation and sustainable development.</p>
  </div>
      `,
  },
  core: {
    title: 'Core Functionalities',
    content: `
      <div class="core-section">
      <span>Swap</span>
      <p>On TenEX, like other decentralized exchanges (DEXs), users can swap one token for another. The platform designates certain administrative bodies and automated bots to regularly scan whether arbitrage activities have balanced the pools to reflect the current market rate.</p>
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
      <span>Lock (veTENEX/Maxxenger)</span>
      <p>Maxxenger or veTENEX (voting escrow) (ve) position is a vital aspect of the TenEx model. Regular locking for a specific period can help to get participants, whether dedicated to providing LP services, actively participating in protocol governance, or in some cases may wish to just vote with locking escrow positions.</p>
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
      <p>The ve3D3CR model's foundation rests on two key incentive structures:</p>
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
      <div>
          <span>Types of Liquidity Pools:</span>
          <span>Volatile Pools</span>
          <p>Volatile pools are defined as assets that have no direct correlation in price, examples are Chainlink <code>LINK</code> and Ethereum <code>ETH</code>. The price of <code>ETH</code> has no relation to the price of <code>LINK</code>.</p>
          <p>Volatiles pairs use the following formula to determine the price:</p>
          <p class="formula"><math xmlns="http://www.w3.org/1998/Math/MathML">
          <mrow>
            <mi>x</mi>
            <mo>&#x22C5;</mo> <!-- dot operator -->
            <mi>y</mi>
            <mo>=</mo>
            <mi>k</mi>
          </mrow>
        </math></p>
          <span>Stable Pools</span>
          <p>Stable pools are defined as assets that have a direct correlation to each other. Examples are USDC/USDT, wBTC/renBTC, fraxETH/wETH etc. The price of the 2 assets will trade very close to each other and thus a different approach can be taken to allow for much higher volume at low slippage.</p>
          <p>Stable pairs use the following formula to determine the price:</p>
          <p class="formula"><math xmlns="http://www.w3.org/1998/Math/MathML">
          <mrow>
            <mi>x</mi>
            <mo>&#x22C5;</mo> <!-- dot operator -->
            <mi>y</mi>
            <mo>+</mo>
            <mi>y</mi>
            <mo>&#x22C5;</mo> <!-- dot operator -->
            <mi>x</mi>
            <mo>=</mo>
            <mi>k</mi>
          </mrow>
        </math></p>
      </div>
      <div >
          <span>Practical Applications:</span>
          <span>Solidly</span>
          <span>Iy's Implementation:</span>
          <ul>
              <li><strong>New AMM Design:</strong> Supports swaps between both correlated and uncorrelated assets, and integrates Uniswap v2 compatible interfaces.</li>
              <li><strong>Fee Incentives:</strong> Emphasizes trading fee generation over liquidity incentives. veSOLID holders earn fees and can receive bribes to vote for specific pools.</li>
              <li><strong>Initial Distribution:</strong> Tokens distributed based on voting weights, with an initial airdrop to top projects by TVL.</li>
          </ul>
      </div>
      <div >
          <span>Advantages and Disadvantages:</span>
          <span>Advantages:</span>
          <ul>
              <li><strong>Incentivizes Long-Term Participation:</strong> Encourages users to lock tokens, aligning interests with protocol longevity.</li>
              <li><strong>Sustainable Emissions:</strong> Adjustments ensure emissions do not lead to unsustainable inflation.</li>
              <li><strong>Capital Efficiency:</strong> NFT integration provides liquidity and secondary market trading options for locked tokens.</li>
          </ul>
          <span>Disadvantages:</span>
          <ul>
              <li><strong>Complexity:</strong> Requires understanding of advanced tokenomics and game theory.</li>
              <li><strong>Liquidity Lockup:</strong> Locked tokens reduce immediate liquidity.</li>
              <li><strong>Concentration of Influence:</strong> Large holders can exert significant influence over emissions and governance.</li>
          </ul>
      </div>
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
  rewards: {
    title: 'Rewards',
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
};

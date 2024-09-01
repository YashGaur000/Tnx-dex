export const INTRO_RAW_DATA = {
  whatIsTenex: {
    title: 'What is TENEX V1.0 ?',
    content: `
        <div>
        <p>TenEx represents the future of central marketplaces, customized specifically for trading and serving as a premier liquidity hub. Our next-generation Automated Market Maker (AMM) merges the robust, time-tested security of Uniswap with an advanced incentive mechanism, an intricate governance framework, and a refined, user-friendly interface to ensure a superior trading experience.</p>
    
        <span>What is the innovative feature of TenEx?</span>
        <ul>
            <li><strong>Capital-Efficient Liquidity:</strong> The TenEx autonomous liquidty flywheel mechanism allows protocols to build deep liquidity efficiently by directing $TENEX emissions to their pools.</li>
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
        <span>Stable Swaps</span>
        <p>Stable swaps are designed for exchanging assets that have similar or relatively stable prices. Examples of such assets include stablecoins (like USDT, USDC, DAI) or different versions of the same asset on different chains (like wETH and ETH).</p>
        <span>How It Works:</span>
        <div>
          <ol>
              <li>
                  <span>Low Slippage:</span>
                  <div>
                      <ul>
                          <li>Mechanism: Stable swaps use a special type of Automated Market Maker (AMM) that is optimized to maintain low slippage. Low slippage means the price of the asset being traded does not significantly change between the initiation and completion of the trade.</li>
                          <li>Example: In stable swap pools, the liquidity curve is designed to be very flat around the equilibrium price. This ensures that trades between stablecoins incur minimal slippage.</li>
                      </ul>
                  </div>
              </li>
              <li>
                  <span>Usage:</span>
                  <div>
                      <ul>
                          <li>Purpose: Stable swaps are typically used for transactions where the user desires minimal price impact, such as moving funds between different stablecoins or swapping tokens with tightly correlated values.</li>
                          <li>Example: A user might swap USDT for USDC to take advantage of arbitrage opportunities or to use a specific stablecoin on a particular platform.</li>
                      </ul>
                  </div>
              </li>
          </ol>
        </div>
  <div>
        <span>Volatile Swaps</span>
        <p>Volatile swaps are used for trading assets that have fluctuating prices. These can include various cryptocurrencies that are not pegged to any stable value, such as ETH, BTC, and numerous altcoins.</p>
        <span>How It Works:</span>
        </div>
        <div>
          <ol>
              <li>
                  <span>Variable Slippage:</span>
                  <div>
                      <ul>
                          <li>Mechanism: In volatile swaps, the AMM algorithm adjusts the price based on the ratio of assets in the liquidity pool. The more imbalance there is between the assets being swapped, the higher the slippage.</li>
                          <li>Example: In a pool with ETH and DAI, if a large amount of ETH is swapped for DAI, the price of ETH in the pool will increase relative to DAI, leading to higher slippage for subsequent trades.</li>
                      </ul>
                  </div>
              </li>
              <li>
                  <span>Dynamic Pricing:</span>
                  <div>
                      <ul>
                          <li>Mechanism: The price of assets in volatile swap pools is continuously updated based on supply and demand. The AMM ensures that prices reflect the current market conditions.</li>
                          <li>Example: Uniswap uses a constant product formula (x*y=k) to maintain a balance between the assets in the pool, dynamically adjusting prices as trades occur.</li>
                      </ul>
                  </div>
              </li>
              <li>
                  <span>Usage:</span>
                  <div>
                      <ul>
                          <li>Purpose: Volatile swaps are suitable for trades where price movements are expected, and users are willing to accept some level of price impact to execute the trade.</li>
                          <li>Example: A trader might swap ETH for LINK anticipating that the price of LINK will increase in the near future, accepting the slippage as part of the trade.</li>
                      </ul>
                  </div>
              </li>
          </ol>
        </div>
  
        <span>Key Differences:</span>
        <ul>
          <li>
              <span>Slippage:</span>
              <ul>
                  <li>Stable Swaps: Minimized due to highly correlated or pegged asset values.</li>
                  <li>Volatile Swaps: Variable and can be significant depending on the trade size and pool balance.</li>
              </ul>
          </li>
          <li>
              <span>Liquidity Curve:</span>
              <ul>
                  <li>Stable Swaps: Flat around the equilibrium price, reducing price impact.</li>
                  <li>Volatile Swaps: More dynamic, adjusting based on the asset ratio in the pool.</li>
              </ul>
          </li>
          <li>
              <span>Use Cases:</span>
              <ul>
                  <li>Stable Swaps: Ideal for trading stablecoins or assets with little price volatility.</li>
                  <li>Volatile Swaps: Suitable for trading a wide range of cryptocurrencies with fluctuating prices.</li>
              </ul>
          </li>
        </ul>
    </div>
    
    <div class="core-section">
        <span>LP Liquidity Pool Staking (Legos)</span>
        <p>In the TenEX model, Liquidity Providers (LPs) receive emissions for creating an LP position. To further encourage participation, staking gauges are utilized, incentivizing users to provide LP tokens and earn attractive Annual Percentage Rates (APRs)</p>
        <p>The number of votes allocated to a specific pair directly determines the amount of TENEX emitted to that gauge in the subsequent epoch. The more votes a pair receives, the higher the TENEX emissions will be for that gauge.</p>
    </div>
    
    <div class="core-section">
        <span>Voting</span>
        <p>The primary function of veTENEX NFTs is to direct emissions to LP token pairs through voting. Emissions are distributed proportionally based on the total percentage of votes each pair receives in an epoch.</p>
        <p>The expected emissions can be calculated with the following formula:</p>
        <p><b>emissions(PAIR) = % of total votes ÷ 100%</b></p>
        <p>For Example, the total emission for distribution is set at 1,000,000 TenEx tokens. Now, suppose the vAMM-USDC/WETH trading pair garners 10% of the total votes cast. As a result, this pair would receive 100,000 TENEX tokens.</p>
        <p>These tokens aren't distributed all at once. Instead, they're released gradually and consistently over the course of the entire epoch. This method ensures a steady flow of rewards, rather than a single lump sum payment.</p>
    </div>
    
    <div class="core-section">
        <span>Lock (veTENEX Management)</span>
        <p>Managing your veTENEX (veNFT) positions is a vital aspect of the TenEx model. Regular visits to the vesting page are important for all participants, whether individual users or protocols, to adjust your ve lock lengths, consolidate/merge positions, or create new veTENEX positions.</p>
        <span>Functions Available on the Vesting Page</span>
        <ul>
            <li>Create Lock: Establish a new veTENEX position.</li>
            <li>Manage Lock: Adjust existing veTENEX positions.</li>
            <li>Increase Lock Amount: Add more tokens to your existing lock.</li>
            <li>Increase Lock Length: Extend the duration of your current lock.</li>
            <li>Merge veTENEX Positions: Combine multiple veTENEX positions into one.</li>
        </ul>
        <p>For more information about veTENEX and veNFTs, visit the veTENEX (veNFT) page.</p>
    </div>
    
    <div class="core-section">
        <span>Incentives</span>
        <span>Vote Incentives</span>
        <p>Users and protocols can offer incentives to influence voters towards directing emissions to specific token pairs. In return for their votes, the voters receives share of the incentives proportional to their voting power. This approach allows influential parties to guide the distribution of emissions based on their strategic goals.</p>
        <span>Gauge Incentives</span>
        <p>Beyond emissions, tokens can be directly offered as incentives to those who stake LP (liquidity provider) tokens. This approach aims to increase liquidity for targeted token pairs, particularly benefiting protocols looking to bootstrap liquidity efficiently within the TenEX AMM. By utilizing gauge incentives, protocols attracts liquidity and foster the development of robust trading pairs.</p>
        <p>These incentive mechanisms empower users and protocols to actively participate and shape the TenEx ecosystem. They promote liquidity provision, foster collaboration, and stimulate growth in specific token pairs. It allows stakeholders to form mutually advantageous partnerships and actively shape the platform's growth trajectory. This model not only promotes engagement but also ensures that the ecosystem evolves in response to the collective interests and strategies of its participants.</p>
    </div>
        `,
  },
  ve3: {
    title: 'Introduction',
    content: `
        <div>
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
            <div>
            <span>Trading Fees:</span>
            <p>Trading fees originate from swap transactions associated with the Liquidity Pool. You can earn these fees by voting for any gauge you desire a share of. These fees are distributed at the beginning of each epoch. The rewards are provided in the same tokens as the LP-Tokens, for eg.</p>
            <p><em>Rewards for LP with a pair of $BTC/$ETH will be in both $BTC and $ETH</em></p>
    
            <span>Bribes:</span>
            <p>Bribes are a form of supplementary incentives distributed by the protocol or partners (VCs), to the liquidity providers. You have the opportunity to vote and earn in any gauge that is currently offering bribes. Bribes are given out every epoch, just like other incentives. Payment depends on the tokens offered as bribes in each gauge.</p>
           </div>
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
    <div>
            <p>There are 3 forms of rewards in TenEx:</p>
            <ul>
                <li>Emissions</li>
                <li>Trading fees</li>
                <li>Bribes</li>
            </ul>
    
            <span>Emissions:</span>
            <ul>
                <li><strong>Dynamic Emission Adjustment:</strong></li>
                <ul>
                    <li>The protocol typically determines the number of tokens to be minted in the each epoch, for e.g.:
                        <ul>
                            <li>Emissions with fixed decay rate.</li>
                            <li>Emissions depending on the rate of circulating supply.</li>
                        </ul>
                    </li>
                    <li>The allocation of these emissions to specific LPs is based on the proportion of votes each LP (gauge) receives.</li>
                </ul>
            </ul>
    
            <span>Trading Fees:</span>
            <p>Trading fees originate from swap transactions associated with the Liquidity Pool. You can earn these fees by voting for any gauge you desire a share of and providing liquidity as a LP provider. These fees are distributed at the beginning of each epoch. The rewards are provided in the same tokens as the LP-Tokens, for eg.</p>
            <p><em>Rewards for LP with a pair of $BTC/$ETH will be in both $BTC and $ETH</em></p>
            <p>The default trading fees for both liquidity pool types are 0.02%, and can be individually adjusted for each pool up to 1%</p>
  
            <span>Bribes:</span>
            <p>Bribes are a form of supplementary incentives distributed by the protocol or partners (VCs), to the LP positions (Gauges). In addition, voters have the opportunity to vote and earn in any gauge that is currently offering bribes. Bribes are given out every epoch, just like other incentives. Payment depends on the tokens offered as bribes in each gauge.</p>
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
        <div>
        <p>Analytics: <span class="highlight">TO BE ADDED</span></p>
        </div>
        `,
  },
  glossary: {
    title: 'DeFi Glossary',
    content: `
        <div>
        <p>Mechanisms used by a protocol to encourage participation and align the interests of its users. Fees collected from transactions or other activities are often redistributed as incentives to users who contribute to the protocol's success, such as liquidity providers or stakers.</p>
  
  <span> Mining</span>
  
  <p>A process where users provide liquidity to a DeFi protocol (such as a DEX) in exchange for rewards. These rewards typically come in the form of newly minted tokens or protocol fees, incentivizing users to supply liquidity and increase the platform's overall liquidity.</p>
  
  <span>Trading Fee</span>
  
  <p>A fee charged by a decentralized exchange (DEX) or an automated market maker (AMM) for facilitating trades between assets. This fee is usually a small percentage of the trade value and is distributed to liquidity providers or governance token holders.</p>
  
  <span>Vote Escrow { the ve in veTENEX }</span>
  
  <p>Vote Escrow is the mechanism of locking tokens for pre-set periods. The disadvantage of this mechanism is low liquidity.</p>
        <span>Bribes</span>
        <p>Incentives offered to veToken holders to vote in favor of specific pools or proposals. Bribes can be in the form of additional tokens or rewards, encouraging strategic voting that aligns with the interests of the bribing party.</p>
    </div>
    <div>
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
};

export const V2_RAW_DATA = {
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

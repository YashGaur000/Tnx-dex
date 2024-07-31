export const TOKENOMICS_RAW_DATA = {
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
              <li>The Lock (veNFT) can be set to a permanent maximum lock time. Minimum lock time is one week.</li>
              <li>These permalocked Locks (veNFTs) are always treated by the protocol as being locked for the maximum duration of 4 years, and their voting power does not decay.</li>
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
                  <td>8%</td>
                  <td>32,000,000</td>
              </tr>
              <tr>
                  <td>Partner (TENEX/veTENEX)</td>
                  <td>4%</td>
                  <td>16,000,000</td>
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
                  <td>1.5%</td>
                  <td>6,000,000</td>
              </tr>
              <tr>
                  <td>Ecosystem Incentives (Gauge and Vote)</td>
                  <td>1.5%</td>
                  <td>6,000,000</td>
              </tr>
              <tr>
                  <td>LGE (TENEX)</td>
                  <td>1.5%</td>
                  <td>6,000,000</td>
              </tr>
              <tr>
                  <td>Initial Investor/Private Sale(TENEX)</td>
                  <td>2.5%</td>
                  <td>10,000,000</td>
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
    title: 'Emissions Schedule / Bootstrapping Period',
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
  rebasing: {
    title: 'Rebasing',
    content: `
          <div>
          <p>$veTENEX holders receive a rebase proportional to epoch LP emissions and the ratio of $veTENEX to $TENEX supply, thus reducing vote power dilution for $veTENEX!</p>

          <p>The weekly rebase amount is calculated with the following formula:</p>
          <span>veTENEX.totalSupply ÷ TENEX.totalsupply)³ × 0.5 × Emissions</span>
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
          <p>LGE Week - 7th Aug 2024 to 13th Aug 2024</p>
          <p>Time - ?</p>
          <p>Max Cap - 300 ETH or equivalent CRO token ?</p>
          
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
};

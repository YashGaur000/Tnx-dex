export const LP_RAW_DATA = {
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
  volatile: {
    title: 'Volatile',
    content: `
        <div>
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
        </div>
        `,
  },
  correlated: {
    title: 'Correlated',
    content: `
        <div>
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
    title: 'Rewards Distribution',
    content: `
        <div>
        <p>Legacy LP tokens need to be staked in their respective gauges in order to earn incentives. Fees are auto-compounded into the LP position regardless of staking status.</p>
        <p><strong>Rewards:</strong> Staked LP tokens earn emissions and/or external LP incentives, proportional to their share of the total staked.</p>
        </div>
        `,
  },
  curves: {
    title: 'Swap Curves',
    content: `
        <div>
            <span>Graphical Representation of the Swap Curves :</span>
            <p>The graph below illustrates the variance between 0 and 100, highlighting the differences in slippage between the two swap curves. The Green (Correlated) curve demonstrates less slippage from the mean as the K value fluctuates, compared to the other curves. This visualization effectively shows how the Correlated curve maintains stability and efficiency in trades.<p>
            <p class='highlight'>GRAPH TO BE ADDED</p>
            </div>
        `,
  },
  busl: {
    title: 'BUSL - 1.1 License',
    content: `
        <div>
        <p>We fortified our CL implementation with a BUSL-1.1 license. This approach allows users to easily review our code and understand the nature of their interactions, while also providing protection against potential malicious forking and intellectual property theft.</p>
        <p><strong>Authorized Forking:</strong> The TENEX team is open to providing authorized forking of the codebase, based on our discretion. Any team that wishes to use our CL model is free to reach out to us, and we can work on reaching an amicable agreement on the terms.</p>
        <p><strong>Benefits of a BUSL-1.1 License for unique solidity contracts:</strong></p>
        <ol>
        <li>Transparency: The license allows users to review the code and understand how it functions. This transparency promotes trust and confidence in the codebase.</li>
        <li>Protection against malicious forking: The license helps safeguard against unauthorized or malicious forking of the codebase. It ensures that modifications and derivative works are done with proper authorization and under specific terms.</li>
        <li>Intellectual property protection: By using the BUSL-1.1 license, the code's intellectual property rights are clearly defined and protected. This helps prevent unauthorized use, copying, or distribution of the code without proper permission.</li>
        <li>Collaboration: The license encourages collaboration by allowing authorized forking. It provides a framework for potential users or teams to engage with the codebase and work together on improvements or modifications.</li>
        <li>Legal clarity: The BUSL-1.1 license provides a legally recognized framework for the distribution and use of the code. It establishes clear terms and conditions that govern the rights and responsibilities of both the original code creators and any users or forking parties.</li>
        </ol>
        Overall, the BUSL-1.1 license promotes transparency, protects intellectual property, and facilitates collaboration while ensuring that the codebase's integrity and security are maintained.
        </div>
        `,
  },
  protected: {
    title: 'Protected Contracts',
    content: `
        <div>
        <span>Licensing</span>
        <p>The TENEX CL CORE, while adapted from the Uniswap v3 codebase, has a plethora of unique changes to the overall model (with regards to integrations of ve(3,3)). Due to the competitive and oversaturated landscape in this model, we have decided to employ a BUSL-1.1 license for the novel gauge contracts, which include, but are not limited to:</p>
        
        <ul>
        <li>GaugeV2.sol & any relevant interfaces</li>
        <li>FeeCollector.sol & any relevant interfaces</li>
        <li>Any contracts designated with the BUSL-1.1 header.</li>
        </ul>
        <span>Authorized Forks</span>
        <p>If you wish to be an authorized TENEX fork, and have a license to use our CL architecture, please go to the TENEX discord https://discord.gg/QHrq54qyb7 and create a partnership ticket.</p>
        </div>
        `,
  },
};

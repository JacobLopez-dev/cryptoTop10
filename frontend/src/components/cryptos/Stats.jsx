import {useSelector} from 'react-redux'
import flattenObj from '../../utils/flattenObject'

function Stats() {

  const {singleCrypto, cryptos} = useSelector((state) => state.cryptos)

  let flattend = flattenObj(singleCrypto)

  let cryptoMarketData = cryptos.filter(crypto => crypto.slug === flattend.slug)
  let flattenedCryptoMarketData = flattenObj(cryptoMarketData)
  let {cmc_rank, market_cap} = flattenedCryptoMarketData
  let {name} = flattend

  return (
    <div className="stats stats-vertical shadow">
  
        <div className="stat">
            <div className="stat-title">Current Price</div>
            <div className="stat-value">{cmc_rank}</div>
            <div className="stat-desc">Jan 1st</div>
        </div>
  
        <div className="stat">
            <div className="stat-title">Market Cap</div>
            <div className="stat-value">{market_cap}</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>
  
        <div className="stat">
            <div className="stat-title">New Wallets</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
         </div>
  
    </div>
  )
}

export default Stats
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

function CryptoTableItem() {
  const {cryptos} = useSelector((state) => state.cryptos)
  const iconURL = 'https://s2.coinmarketcap.com/static/img/coins/64x64/';

    let count = 1;
  return (
    <>
        {cryptos.map(crypto => (
            <tr className="hover" key={crypto.name}>
                <td>{count++}</td>
                <td>
                  <div className="flex items-center">
                    <Link to={`/crypto/${crypto.id}`}>
                        <img className='mask mask-circle bg-primary-content h-10 mr-3' src={`${iconURL}${crypto.id}.png`} alt={`${crypto.name}`}/>
                    </Link>
                    <Link to={`/crypto/${crypto.id}`}>
                      <h2>{crypto.name} <span className="text-sm text-stone-400">{crypto.symbol}</span> </h2>
                    </Link>   
                  </div>
                </td>
                <td><span className="text-sm text-stone-400">$</span> {( 1 * crypto.quote.USD.price.toFixed(2)).toLocaleString("en-US")}</td>
                <td><span className="text-sm text-stone-400">$</span> {Math.trunc(crypto.quote.USD.market_cap).toLocaleString("en-US")}</td>
                <td><span className="text-sm text-stone-400"></span><span style={{color: Math.sign(crypto.quote.USD.percent_change_24h) === 1 || Math.sign(crypto.quote.USD.percent_change_24h) % 2 === 0 ? "green" : 'red'}}> 
                      {crypto.quote.USD.percent_change_24h.toFixed(3)} 
                      % 
                    </span>
                  </td>
                <td>
                <Link to={`/crypto/${crypto.id}`}>
                  <button className="btn rounded-lg" id={crypto.name}>View More</button>
                </Link>
                </td>
            </tr>
        ))}
    </>
  )
}

export default CryptoTableItem
import { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux'
import {getSingleCrypto, reset} from '../../features/topCryptos/topCryptosSlice'
import {Link} from 'react-router-dom'

function CryptoTableItem() {
  const {cryptos} = useSelector((state) => state.cryptos)

    let count = 1;

  return (
    <>
        {cryptos.map(crypto => (
            <tr className="hover" key={crypto.name}>
                <td>{count++}</td>
                <td>{crypto.name} <span className="text-sm text-stone-400">{crypto.symbol}</span> </td>
                <td><span className="text-sm text-stone-400">$</span> {( 1 * crypto.quote.USD.price.toFixed(2)).toLocaleString("en-US")}</td>
                <td><span className="text-sm text-stone-400">$</span> {Math.trunc(crypto.quote.USD.market_cap).toLocaleString("en-US")}</td>
                <td><span className="text-sm text-stone-400">$</span> <span style={{color: Math.sign(crypto.quote.USD.percent_change_24h) === 1 || Math.sign(crypto.quote.USD.percent_change_24h) % 2 === 0 ? "green" : 'red'}}>
                      {crypto.quote.USD.percent_change_24h.toFixed(3)}
                    </span>
                  </td>
                <td>
                <Link to={`/crypto/${crypto.id}`}>
                  <button className="btn" id={crypto.name}>View More</button>
                </Link>
                </td>
            </tr>
        ))}
    </>
  )
}

export default CryptoTableItem
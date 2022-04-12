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
                <td><span className="text-sm text-stone-400">$</span> {(Math.trunc(crypto.circulating_supply) * crypto.quote.USD.price.toFixed(0)).toLocaleString("en-US") }</td>
                <td>
                <Link to={`/crypto/${crypto.name}`}>
                  <button className="btn" id={crypto.name}>View More</button>
                </Link>
                </td>
            </tr>
        ))}
    </>
  )
}

export default CryptoTableItem